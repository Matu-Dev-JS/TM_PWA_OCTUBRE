import express from 'express'
import filesystem from 'fs'

const authRouter = express.Router()

authRouter.post('/register', async (request, response) => {
    try {
        const { name, email, password } = request.body

        //validamos estos datos (Queda de tarea)

        const users_info = JSON.parse(await filesystem.promises.readFile(
            './data/users.json',
            { encoding: 'utf-8' }
        ))

        //Validar que el usuario con ese email sea nuevo (es decir no exista)


        users_info.id_counter = users_info.id_counter + 1
        const new_user = {
            name,
            email,
            password,
            id: users_info.id_counter
        }
        users_info.users.push(new_user)
        await filesystem.promises.writeFile('./data/users.json', JSON.stringify(users_info))
        response.json({
            ok: true,
            status: 201,
            message: 'User registered successfully',
            data: {}
        })
    }
    catch(error){
        console.error(error)
        response.json({
            ok: false,
            status:500,
            message: 'Server error'
        })
    }
})

//Login 

//body
/* 
{
    email
    password
}
*/
//Verificar si existe dicho usuario
//Si la app falla (por algun error x) debe llegar a postman un server error con status 500
//Verificar que la contraseña sea correcta
//Si todo esta bien debe responder con la informacion del usuario (sin la password)
/* 
{
    ok: true,
    status: 200,
    message: 'Logged in',
    data: {
        user_info: {
            id,
            name,
            email
        }
    }
}
*/

export default authRouter