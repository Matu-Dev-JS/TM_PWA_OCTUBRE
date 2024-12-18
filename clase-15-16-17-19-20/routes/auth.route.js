import express from 'express'
import { registerController, loginController, verifyEmailController} from '../controllers/auth.controller.js';


const authRouter = express.Router()

authRouter.post('/register', registerController)
authRouter.post("/login", loginController);
authRouter.get('/verify-email', verifyEmailController)


export default authRouter

