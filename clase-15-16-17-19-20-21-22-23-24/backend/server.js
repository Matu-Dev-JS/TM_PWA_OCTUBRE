import express from 'express'
import ENVIROMENT from './config/enviroment.js'
import mongoose from './config/mongoDB.config.js'
import connectToMongoDB from './config/mongoDB.config.js'
import User from './models/User.model.js'
import cors from 'cors'


const app = express()
const PORT = ENVIROMENT.PORT 



//Cross-Origin Resource Sharing
app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)

app.use(express.json())

//Status router
//Route: /api/status
//GET /ping => devolver status 200

//Auth router
//Route: /api/auth
//POST /register => registrarnos
//POST /login => loguear

//Messages router
//Route: /api/messages
//GET /messages => devolver lista de mensajes


import statusRoute from './routes/status.route.js'
import authRouter from './routes/auth.route.js'
import channelRouter from './routes/channel.route.js'
import { sendMail } from './utils/mail.util.js'
import workspaceRouter from './routes/workspace.route.js'


//Delegamos el flujo de consultas a /api/status al enrutador de status
app.use('/api/status', statusRoute)

app.use('/api/auth', authRouter)

app.use('/api/workspace', workspaceRouter)

app.use('/api/channel', channelRouter)

app.listen(PORT, () =>{
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
})

/* 
sendMail({
    to: 'mati.dev.gimenez@gmail.com', 
    subject: 'Prueba de envio de mail', 
    html: '<h1>Prueba de envio de mail</h1>'
}) 
*/