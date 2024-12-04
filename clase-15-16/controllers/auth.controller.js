//Responsabilidad de responder
import filesystem from 'fs'
export const registerController =  async (request, response) => {
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
    catch (error) {
        console.error(error)
        response.json({
            ok: false,
            status: 500,
            message: 'Server error'
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

        const users_info = JSON.parse(
            await filesystem.promises.readFile("./data/users.json", {
                encoding: "utf-8",
            })
        );
        const user_found = users_info.users.find(
            (user) => user.email === email
        );

        if (!user_found) {

            return res.json({
                ok: false,
                status: 404,
                message: "there is no user with this email",
            });
        }

        if (user_found.password !== password) {
            return res.json({
                ok: false,
                status: 400,
                message: "Wrong password",
            });
        }

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