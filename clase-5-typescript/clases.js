
/* objeto literal */
const usuario = {
    nombre: 'pepe',
    email: 'pepe@gmail',
    id: 1,
    fecha_creacion: new Date()
}

//buscarUsuariosPorFecha(fecha_min, fecha_max)

//ES5
function Usuario_Constructor (nombre){
    this.nombre = nombre
}


//ES6
class Usuario{
    nombre = 'pepe'
    apellido = 'suarez'
    edad = 90

    //Es una funcion que se ejecutara al instanciarse el la clase
    constructor(parametro1, parametro2, edad, nombre){
        
        console.log('Me cree')
        console.log('Parametro1: ', parametro1)
        console.log('Parametro2: ', parametro2)
        this.nombre = nombre
        this.edad = edad 
        this.fecha_creacion = new Date()
        this.dinero = 0
        console.log(this)
        
        
    }

    nacionalidad = 'Argentino'
    
}

const usuario_2 = new Usuario('hola', 1, 50, 'juan') // {nombre, apellido}
const usuario_3 = new Usuario('probando', {}, 80, 'pedro')

class Casa{
    constructor(direccion, id, propietario){
        this.direccion = direccion
        this.id = id,
        this.propietario = propietario
        this.fecha_creacion = new Date()
    }
}

const casa_1 = new Casa('av simpreviva', 1, 'Homero simpson')

let contador_casas = 0

class GestorCasa {
    constructor(id){
        this.casas = []
        this.id = id
    }
    mostrarCasas(){
        console.log('Las casas del gestor ' + this.id + ' son ', this.casas)
    }

    crearCasa(direccion, propietario){
        const nueva_casa = new Casa(direccion, contador_casas, propietario)
        this.casas.push(nueva_casa)
        //Incrementar el contador
        contador_casas = contador_casas + 1
        return this.casas
    }

    //Esto es mala practica 🤮
    mostrarCasas2 = () => {
        console.log('hola')
    }
}

const gestor_casa_1 = new GestorCasa(1)
const gestor_casa_2 = new GestorCasa(2)

gestor_casa_1.mostrarCasas()
gestor_casa_2.mostrarCasas()

gestor_casa_1.mostrarCasas2()
console.log(gestor_casa_1)

let resultado1 = gestor_casa_1.crearCasa('Av 9 julio', 'Omar')
let resultado2 = gestor_casa_1.crearCasa('Av siempre viva', 'pepe')
let resultado3 = gestor_casa_1.crearCasa('Retiro', 'juan')

console.log(gestor_casa_1)
