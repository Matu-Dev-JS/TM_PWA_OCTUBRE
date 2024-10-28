//Class empleado 
/* 
nombre string
sueldo number
fecha_contratacion Date
id_empleado number
puesto string 
*/

class Empleado{
    nombre: string 
    sueldo: number
    fecha_contratacion: Date
    id_empleado: number
    puesto: string

    constructor(
        nombre: string, 
        sueldo: number, 
        fecha_contratacion: Date,
        id_empleado: number,
        puesto: string
    ){
        this.nombre = nombre 
        this.sueldo = sueldo
        this.fecha_contratacion = fecha_contratacion 
        this.id_empleado = id_empleado
        this.puesto = puesto
    }
    presentarse(){
        console.log('Hola, me llamo ' + this.nombre + ' y trabajo como ' + this.puesto)
    }
}

//Pasante
/* 
tiempo_pasantia_meses
recomendado_por
*/

class Pasante extends Empleado {
    tiempo_pasantia_meses: number
    recomendado_por: string
    constructor(
        nombre: string, 
        sueldo: number, 
        fecha_contratacion: Date,
        id_empleado: number,
        puesto: string,

        tiempo_pasantia_meses: number,
        recomendado_por: string

    ){
        super(nombre, sueldo, fecha_contratacion, id_empleado, puesto)

        this.tiempo_pasantia_meses = tiempo_pasantia_meses
        this.recomendado_por = recomendado_por
    }
}

//Empleado_relacion_dependencia

const pepe = new Pasante('pepe', 900, new Date, 1, 'Desarrollador Cobol', 4, 'MIT')

pepe.presentarse()