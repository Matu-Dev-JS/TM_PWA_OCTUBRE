import ENVIROMENT from "../config/enviroment.js"
import jwt from 'jsonwebtoken'
export const authMiddleware = (request, response, next) => {
    try{
    
        const access_token = request.headers.authorization.split(' ')[1]

        //Cuando hacemos el verify ademas de verificar la firma del token tambien transformamos el token en objeto nuevamente
        const user_info = jwt.verify(access_token, ENVIROMENT.SECRET_KEY_JWT)
        
        request.user = user_info
        return next()
    }
    catch(error){
        console.error(error)
        response.json({
            ok: false,
            status: 401,
            message: 'Unauthorized'
        })
    }
}