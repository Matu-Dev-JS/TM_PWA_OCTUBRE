const filesystem = require('./utils/filesystem.js')





/* let usuarios = []
try{
    let usuario = null

    //usuario.nombre //JS encuentra un error y lanza el error al catch mas cercano
    //hola

    let id_buscado = null
    if(!id_buscado){
        throw(
            {
                message: 'No hay id buscado',
                name: 'INVALID_ID'
            }
        )
        console.log('pepito')
    }
    const usuario_encontrado = usuarios.find(usuario => usuario.id === id_buscado)
    if(!usuario_encontrado){
        throw(
            {
                message: 'Usuario no encontrado',
                name: 'USER_NOT_FOUND'
            }
        )
    }
}
//Es una especie de callback que se ejecutara cuando de lance un error
catch(error){
    
    console.log(error)
    console.log(error.message)
    if(error.name === 'INVALID_ID'){
        console.log('Mail de reporte')
    }
    else if(error.name === 'USER_NOT_FOUND'){
        
    }
}
finally{
    console.log("Operacion de busqueda de usuario finalizada")
}

console.log('operacion importante') */


//filesystem.crearArchivoJSON('data', 'test-3', {nombre: 'pepe', edad: 40, nivel: 4})
