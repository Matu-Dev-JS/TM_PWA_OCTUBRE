

//la configuracion del enrutador de status

import express from 'express'
import jwt from 'jsonwebtoken'
import ENVIROMENT from '../config/enviroment.js'
const statusRoute = express.Router()


statusRoute.get('/ping', (request, response)=>{
    response.sendStatus(200)
})

const middlewareDePrueba = (req, res, next) =>{
    const numero_random = Math.random()
    console.log('Numero random:', numero_random)
    if(numero_random > 0.5){
        //Guardo en los headers de mi consulta un dato
        req.headers.suerte = 'El usuario tiene suerte'
        next()
    }
    else{
        res.sendStatus(500)
    }
}

//Imaginemos que esta operacion solo la puede hacer alguien que este logueado
statusRoute.get('/protected/ping', middlewareDePrueba,  (request, response) =>{
    try{
        console.log(request.headers.suerte)
        const access_token = request.headers.authorization.split(' ')[1]

        const user_info = jwt.verify(access_token, ENVIROMENT.SECRET_KEY_JWT)
    
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
