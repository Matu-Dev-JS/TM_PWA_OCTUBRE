

//la configuracion del enrutador de status

import express from 'express'

import ENVIROMENT from '../config/enviroment.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { middlewareDePrueba } from '../middlewares/luck.middleware.js'
const statusRoute = express.Router()


statusRoute.get('/ping', (request, response)=>{
    response.json({
        status:200,
        ok: true,
        message: "Pong"
    })
})





//Imaginemos que esta operacion solo la puede hacer alguien que este logueado
statusRoute.get('/protected/ping', middlewareDePrueba, authMiddleware,  (request, response) =>{
    try{
        console.log(request.headers.user)
        response.sendStatus(200)
    }
    catch(error){
        console.error(error)
        response.json({
            ok: false,
            status: 401,
            message: 'Unauthorized'
        })
    }
})


statusRoute.get('/datos-bancarios', (request, response) =>{
    try{

    }
    catch(error){

    }
})
export default statusRoute


