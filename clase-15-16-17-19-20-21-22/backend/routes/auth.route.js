import express from 'express'
import { registerController, loginController, verifyEmailController, forgotPasswordController, resetPasswordController} from '../controllers/auth.controller.js';


const authRouter = express.Router()

authRouter.post('/register', registerController)
authRouter.post("/login", loginController);
authRouter.get('/verify-email', verifyEmailController)
authRouter.post('/forgot-password', forgotPasswordController)
authRouter.post('/reset-password', resetPasswordController)
export default authRouter

