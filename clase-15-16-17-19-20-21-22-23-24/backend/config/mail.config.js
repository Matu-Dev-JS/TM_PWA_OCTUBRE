import nodemailer from 'nodemailer'
import ENVIROMENT from './enviroment.js'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: ENVIROMENT.EMAIL_USERNAME,
        pass: ENVIROMENT.EMAIL_PASSWORD
    }
})

export default transporter