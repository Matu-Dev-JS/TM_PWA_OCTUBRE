

//la configuracion del enrutador de status

import express from 'express'

const statusRoute = express.Router()


statusRoute.get('/ping', (request, response)=>{
    response.sendStatus(200)
})

export default statusRoute
