/* 
VEHICULOS: 
    velocidad
    cantidad_ruedas
    precio
    id
    cantidad_pasajeros_max
    marca
 */

class Vehiculo {
    constructor(id, velocidad, cantidad_ruedas, precio, cantidad_pasajeros_max, marca){
        this.id = id
        this.velocidad = velocidad
        this.cantidad_ruedas = cantidad_ruedas
        this.precio = precio
        this.cantidad_pasajeros_max = cantidad_pasajeros_max
        this.marca = marca
    }

    probar(destino){
        console.log('Soy un vehiculo, *ruido de vehiculo* e ire a ' + destino)
    }
}

/* 
modelo: 'BMX'
tipo_manubrio: 
rodado:
tipo_de_freno: null
*/

class Bicicleta extends Vehiculo{
    constructor(
        id, 
        velocidad, 
        precio, 
        marca,
        modelo,
        rodado,
        tipo_de_freno
    ){
        super(id, velocidad, 2, precio, 2, marca)
        this.modelo = modelo
        this.rodado = rodado
        this.tipo_de_freno = tipo_de_freno
    }

    probar(destino){
        console.log('Soy una bicicleta, *ruido de bicicleta* e ire a ' + destino)
    }
    hacerWilly(){
        console.log("Miren estoy haciendo willy willy")
    }
}

const bicicleta_1 = new Bicicleta(1, 30, 7000, 'BMX', 'BMX', 26, 'Pastilla')
bicicleta_1.probar('ezeiza')
bicicleta_1.hacerWilly()