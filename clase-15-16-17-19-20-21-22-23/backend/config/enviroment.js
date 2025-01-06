
import dotenv from 'dotenv'

//Se cargan en la variable global process.env los valores del archivo .env
dotenv.config()

const ENVIROMENT = {
    PORT: process.env.PORT || 3000,
    SECRET_KEY_JWT: process.env.JWT_SECRET,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    URL_FRONTEND: `http://localhost:5173`
}

export default ENVIROMENT