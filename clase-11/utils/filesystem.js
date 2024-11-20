//Llamamos a un modulo nativo de node.js para manipular el sistema de archivos
const filesystem = require('fs')

//Escribe un archivo de forma sincronica
/* filesystem.writeFileSync(
    './data/test-2.txt', 
    'hola mundo', 
    {
        encoding: 'utf-8'
    }
)
console.log('archivo creado!') */

//Eliminar archivos de forma sincronica
//filesystem.unlinkSync('test.txt')

/* 
let usuario = {
    nombre: 'pepe',
    edad: 40, 
    nivel: 4
}

filesystem.writeFileSync(
    './data/usuario-config.json',
    JSON.stringify(usuario), //Escribe un string con formato JSON
    {
        encoding: 'utf-8'
    }
) 
*/
//Leemos un archivo
/* const configuracion_usuario = JSON.parse(filesystem.readFileSync('./data/usuario-config.json', {encoding: "utf-8"}))
console.log(configuracion_usuario)
 */


//Crear 3 funciones

//crearArchivoJSON(carpeta, nombre, data)
//Nos debera crear un archivo json con la data pasada por parametro

//leerArchivoJSON(carpeta, nombre)
//Nos debera devolver el contenido del achivo json

//eliminarArchivoJSON(carpeta, nombre)
//Nos eliminara el archivo

//crearArchivoJSON('data', 'test', {} ) ---> ./data/test.json {}
//leerArchivoJSON('data', 'test') ---> {}
//leerArchivoJSON('data', 'test') ---> void


const crearArchivoJSON = (carpeta, nombre, data) => {
    filesystem.writeFileSync(
        './'+carpeta+'/'+nombre+'.json',
        JSON.stringify(data),
        { encoding: 'utf-8' }
    );
    console.info(`Archivo creado: ./${carpeta}/${nombre}.json`);
};

const leerArchivoJSON = (carpeta, nombre) => {
    const archivoJSON = JSON.parse(
        filesystem.readFileSync('./'+carpeta+'/'+nombre+'.json', { encoding: 'utf-8' })
    );
    console.info("Contenido del archivo:", archivoJSON);
    return archivoJSON;
};


const  eliminarArchivoJSON = (carpeta, nombre) => {
    try{
        filesystem.unlinkSync('./'+carpeta+'/'+nombre+'.json');
        console.info(`Archivo eliminado: ./${carpeta}/${nombre}.json`);
    }
    catch(error){
        if(error.code === 'ENOENT'){
            console.warn(`El archivo no existe: ./${carpeta}/${nombre}.json`);
        }
        else{
            console.error('Error al eliminar archivo')
        }
    }
};

//crearArchivoJSON('data', 'test', {});
//leerArchivoJSON('data', 'test')
eliminarArchivoJSON('data', 'test')

console.log('operacion importante')

module.exports = {crearArchivoJSON, eliminarArchivoJSON, leerArchivoJSON}
