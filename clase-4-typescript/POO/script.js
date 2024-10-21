//Objeto literal

const usuario_1 = new Usuario(
    'pepe',
    'suarez',
    undefined,
    'av 9 julio'
)

//Instancio la funcion Usuario con new
const usuario_2 = new Usuario(
    'juan',
    'menganito',
    50, 
    'av simpreviva'
)


function guardarUsuarioEnDB (usuario){
    //Logica de guardado
}

//Mi usuario se debe CONSTRUIR y ser consistente entre distintos usuario

//Si la edad fuera undefined podemos presetear un valor, ejemplo 0
//ES5 funcion constructora
function Usuario (nombre, apellido, edad = 0, direccion){
    
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.direccion = direccion
    this.fecha_inicio_sesion = 'hoy'
    
}


console.log(usuario_1)
console.log(usuario_2)

//Auto: marca, nombre, precio, id

function Auto(marca, nombre, precio, id){
    this.marca = marca
    this.nombre = nombre
    this.precio = precio + precio * 0.21,
    this.id = id
    this.conducir_2 = function(){
        console.log('rum rum...')
    }
}

Auto.prototype.conducir = function() {
    console.log('rum rum...')
}

//Toyota, etios, 22000, 1

const auto_1 = new Auto('Toyota', 'Etios', 22000, 1)
console.log(auto_1)
auto_1.conducir()

//Las propiedades se crean cuando se Instancia la funcion
//Los metodos se crean al interpretar el script (solo una vez)
//el metodo conducir asociado al prototipo se guarda 1 vez, en cambio conducir_2 se guarda por cada vez que se cree un auto