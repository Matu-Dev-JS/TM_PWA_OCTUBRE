export const middlewareDePrueba = (req, res, next) =>{
    const numero_random = Math.random() //Genera un numero random entre 0 y 1
    console.log('Numero random:', numero_random)
    if(numero_random > 0.5){
        //Guardo en los headers de mi consulta un dato
        req.headers.suerte = 'El usuario tiene suerte'
        return next()
    }
    else{
        return res.json({
            ok: false,
            status: 400,
            message: 'Mala suerte!'
        })
    }
}