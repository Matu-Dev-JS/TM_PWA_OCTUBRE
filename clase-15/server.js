import express from 'express'
const app = express()
const PORT = 3000

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

//Delegamos el flujo de consultas a /api/status al enrutador de status
app.use('/api/status', statusRoute)

app.use('/api/auth', authRouter)

app.listen(PORT, () =>{
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
})