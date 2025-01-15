
//Que tienen de nuevo los errores de servidor? status
class ServerError extends Error{
    constructor(message, status){
        super(message)
        this.status = status
    }
}

export {ServerError}