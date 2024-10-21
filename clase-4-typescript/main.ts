
const nombres : string[] = ['pepe', 'juan', 'maria']

const mesesQueGane : boolean[] = [true, false, true, true]

const pepe : [string, number] = ['pepe', 30]

//Establezco que es un product en mi aplicacion
interface Product {
    precio: number, 
    id: number, 
    nombre: string
}

const product : Product = {
    precio: 100,
    id: 1,
    nombre: 'tv samsung' 
}

const mostrarProducto = (producto : Product) : void => {
    document.write(`
        <div>
            <h1>${producto.nombre}</h1>
        </div>
        `
    )
}

const mostrarProductos = (productos : Product[]) : void => {
    for(let producto of productos){
        document.write(`
            <div>
                <h1>${producto.nombre}</h1>
            </div>
            `
        )
    }
}

mostrarProductos([product, product, product])
const product_2 :  Product = {
    precio: 300,
    id: 1,
    nombre: 'teclado logi'
}
const product_3 : Product = {
    precio: 500,
    id: 3, 
    nombre: 'monitor'
} 
const productos = [
    product,
    product_2,
    product_3
]


//Crear una funcion que se llame buscarProductoPorId(product_id) y devuelva el producto encontrado o null en caso de no encontrar

const buscarProductoPorId = (product_id: number, productos: Product[]) : Product | null => {
    
    const result : Product | undefined = productos.find(
        (product : Product) : boolean =>{
            return product.id === product_id
        } 
    )
    //Si el result es falsy, devolve el segundo
    return result || null
    /* if(result){
        return result
    }
    return null */
   /*  return result ? result : null; */
}

/* 

OR valor1 || valor2
Selector:
-Si el primer valor es verdadero devuelvo el primero
-Si el primer valor es falso, devuelvo el segundo
*/


/* 
AND valor1 && valor2
Selector:
-Si el primer valor es verdadero, devuelvo el segundo
-Si el primer valor es falsy, devuelvo el primero

*/

/* 
NOT devuelve el valor opuesto boolean
*/
// let port = obtenerPuerto() || DEFAULT_PORT

/* const server_status = {
    open: false
}

server_status.open && getResponse() */

