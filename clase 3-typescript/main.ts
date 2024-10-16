let nombre : string = 'pepe'
console.log(nombre)

if(nombre){
    console.log('Hay nombre')
}

/* 
null = Todavia no llego pero tampoco fallo, esta en proceso de enviarse
false = Nos llego que fallo envio
true = Nos llega que servidor recibio el mail
*/

const mostrarStatus = () => {
    console.log(statusEmail)
}

//Esta variable puede tener solo valor nulo o boolean
let statusEmail : null | boolean = null



setTimeout(
    () => {
        statusEmail = true
        mostrarStatus()
    },
    1000
)

mostrarStatus()


//Valores verdaderos o falsos
//Los datos en JS al ser pasado a booleano nos dan un true o false.
//Si el valor del dato pasado a booleano es true entonces ese dato es THRULY
//Si el valor del dato pasado a booleano es false entonces ese dato es FALSY
//Lista de falsies: undefined, 0, null, '', NaN, false, -0


//Funciones
//Podemos tipar lo que entra y lo que sale

//calcularIva(precio) y devuelva el iva de ese precio


const calcularIva = (precio : number) : number => {
    return precio * 0.21
}

//Esto es mas verboso que JS
const suma = (a: number, b: number) : number => a + b;

let resultado : number = suma(1, 1)

function doSomething () : void {
    alert('Algo')
}


function buscarAlgo() : string | undefined {
    //logica de busqueda
    let resultado : string | undefined 
    return resultado
}

interface Persona {
    nombre: string, 
    edad: number, 
    id: number
}

//Objeto literal
const persona : Persona = {
    nombre: 'pepe',
    edad: 90,
    id: 1
}


/* suma(persona.edad, persona.edad) */

const saludarPersona = (persona : Persona) : void => {
    console.log("Hola " + persona.nombre)
}

saludarPersona(persona)

//Recibe un objeto que tiene numMay y numMen como propiedades (ambas de tipo numerico), las desestructura y las resta, devolviendo un numero
const resta = ({numMay, numMen} : {numMay: number, numMen: number}) : number => {
    return numMay - numMen;
}

resta ({numMen: 1, numMay: 2});

const saludarPersona2 = ({nombre} : Persona) : void => {
    console.log("Hola " + nombre)
}

saludarPersona2(persona)