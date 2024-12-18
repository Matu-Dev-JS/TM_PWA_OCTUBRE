//Responsabilidad de responder
import filesystem from 'fs'
import jwt from 'jsonwebtoken'
import ENVIROMENT from '../config/enviroment.js'
import User from '../models/User.model.js'
import { sendMail } from '../utils/mail.util.js'
import bcrypt from 'bcrypt'


const QUERY = {
    VERIFICATION_TOKEN: 'verification_token'
}


//Buscar por email
const findUserByEmail = async (email) =>{
    const userFound = await User.findOne({email: email})
    return userFound
}


//Crear usuario

const createUser = async ({username, email, password, verificationToken}) =>{
    const nuevo_usuario = new User({
        username,
        email, 
        password,
        verificationToken,
        modifiedAt: null
    })
    return nuevo_usuario.save()
}


//Modificar/Migrar el controlador de registro para usar MongoDB (Ya no mas filesystem)

export const registerController =  async (request, response) => {
    try {
        const { name, email, password } = request.body

        //validamos estos datos (Queda de tarea)

        const user_found = await findUserByEmail(email)

        //Validar que el usuario con ese email sea nuevo (es decir no exista)
        if(user_found){
            //Error de usuario ya encontrado
            return response.json({
                ok: false,
                status: 400,
                message: 'Email user already exists',
            })
        }
        const verificationToken = jwt.sign({email}, ENVIROMENT.SECRET_KEY_JWT, {expiresIn: '1d'})
        await sendMail(
            {
                to: email, 
                subject: 'Valida tu mail',
                html: `
                    <h1 >Debes validar tu mail!</h1>
                    <p>Da click en el enlace de 'verificar' para poder validar tu mail</p>
                    <a 
                        href='http://localhost:${ENVIROMENT.PORT}/api/auth/verify-email?${QUERY.VERIFICATION_TOKEN}=${verificationToken}'
                    >
                        Verificar
                    </a>
                `
            }
        )
        const password_hash = await bcrypt.hash(password, 10)
        const new_user = await createUser(
            {
                username: name, 
                email, 
                password: password_hash, 
                verificationToken
            }
        )
        response.json({
            ok: true,
            status: 201,
            message: 'User registered successfully',
            data: {
                
            }
        })
    }
    catch (error) {
        console.error(error)
        response.json({
            ok: false,
            status: 500,
            message: 'Server error'
        })
    }
}


export const verifyEmailController = async (req, res) =>{
    try{
        const {[QUERY.VERIFICATION_TOKEN]: verification_token} = req.query
        if(!verification_token){
            return res.send(`
                <h1>Falta el token de verificacion!</h1>
                <p>Status: 400</p>
                `
            )
        }
        const payload = jwt.verify(verification_token, ENVIROMENT.SECRET_KEY_JWT)
        const user_to_verify = await findUserByEmail(payload.email)
        if(!user_to_verify){
            return res.send(`
                <h1>Usuario no encontrado!</h1>
                <p>Status: 404</p>
                `
            )
        }
        if(user_to_verify.verificationToken !== verification_token){
            return res.send(
                `
                <h1>Token invalido</h1>
                <p>Status: 400</p>
                `
            )
        }
        user_to_verify.verified = true
        await user_to_verify.save()
        return res.send(
            `
            <h1>Email verificado</h1>
            <a>Login aqui</a>
            `
        )
    }
    catch(error){
        console.log(error)
        res.json({
            status:500,
            message: "Internal server error",
            ok: false
        })
    }
}

export const loginController =  async (req, res) => {
    try {
        const { email, password } = req.body;
        const errors = {
            email: null,
            password: null,
        };

        if (!email || !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))) {
            errors.email = "You must enter a valid value for email";
        }

        if (!password) {
            errors.password = "You must enter a password";
        }

        let hayErrores = false;
        for (let error in errors) {
            if (errors[error]) {
                hayErrores = true;
            }
        }

        if (hayErrores) {

            return res.json({
                message: "Errors exist!",
                ok: false,
                status: 400, //bad request
                errors: errors,
            });
        }

        const user_found = await findUserByEmail(email)

        if (!user_found) {

            return res.json({
                ok: false,
                status: 404,
                message: "there is no user with this email",
            });
        }
        const is_same_password = await bcrypt.compare(password, user_found.password)
        if (!is_same_password) {
            return res.json({
                ok: false,
                status: 400,
                message: "Wrong password",
            });
        }


        //Quiero transformar al user a un token
        const user_info =  {
            id: user_found.id,
            name: user_found.name,
            email: user_found.email,
        }

        const access_token = jwt.sign(user_info, ENVIROMENT.SECRET_KEY_JWT)



        return res.json({
            ok: true,
            status: 200,
            message: "Logged in",
            data: {
                user_info: {
                    id: user_found.id,
                    name: user_found.name,
                    email: user_found.email,
                },
                access_token: access_token
            },
        });
    }
    catch(error){
        console.error(error)
        return res.json({
            ok:false,
            message: "Internal server error",
            status: 500,
        })
    }
    
}