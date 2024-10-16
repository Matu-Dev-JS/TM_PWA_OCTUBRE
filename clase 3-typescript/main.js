var nombre = 'pepe';
console.log(nombre);
if (nombre) {
    console.log('Hay nombre');
}
/*
null = Todavia no llego pero tampoco fallo, esta en proceso de enviarse
false = Nos llego que fallo envio
true = Nos llega que servidor recibio el mail
*/
var mostrarStatus = function () {
    console.log(statusEmail);
};
//Esta variable puede tener solo valor nulo o boolean
var statusEmail = null;
setTimeout(function () {
    statusEmail = true;
    mostrarStatus();
}, 1000);
mostrarStatus();
//Valores verdaderos o falsos
//Los datos en JS al ser pasado a booleano nos dan un true o false.
//Si el valor del dato pasado a booleano es true entonces ese dato es THRULY
//Si el valor del dato pasado a booleano es false entonces ese dato es FALSY
//Lista de falsies: undefined, 0, null, '', NaN, false, -0
//Funciones
//Podemos tipar lo que entra y lo que sale
//calcularIva(precio) y devuelva el iva de ese precio
var calcularIva = function (precio) {
    return precio * 0.21;
};
//Esto es mas verboso que JS
var suma = function (a, b) { return a + b; };
var resultado = suma(1, 1);
function doSomething() {
    alert('Algo');
}
function buscarAlgo() {
    //logica de busqueda
    var resultado;
    return resultado;
}
//Objeto literal
var persona = {
    nombre: 'pepe',
    edad: 90,
    id: 1
};
/* suma(persona.edad, persona.edad) */
var saludarPersona = function (persona) {
    console.log("Hola " + persona.nombre);
};
saludarPersona(persona);
//Recibe un objeto que tiene numMay y numMen como propiedades (ambas de tipo numerico), las desestructura y las resta, devolviendo un numero
var resta = function (_a) {
    var numMay = _a.numMay, numMen = _a.numMen;
    return numMay - numMen;
};
resta({ numMen: 1, numMay: 2 });
var saludarPersona2 = function (_a) {
    var nombre = _a.nombre;
    console.log("Hola " + nombre);
};
saludarPersona2(persona);
