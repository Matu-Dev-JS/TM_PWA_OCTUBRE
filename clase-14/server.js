import express from 'express'
import { get } from 'http'

const PORT = 3000

const app = express()

//middleware para recibir json
//Este middleware checkea si el dato recibido en el body es un JSON y en caso de serlo lo guarda en la request.body
app.use(express.json())

app.get('/ping', (request, response) =>{
    response.json({
        status: 200,
        ok: true,
        message: 'Pong!'
    })
})

const products = []

//title, price, description

app.post('/products', (request, response) =>{
    //Recibir los datos para crear el producto, los validamos y lo agregamos al array de products
    const {title, price, description} = request.body
console.log(request.body)
    const errors = {
        title: null,
        price: null, 
        description: null
    }
    if(!title){
        errors.title = 'No has ingresado un titulo'
    }
    if(!price || price < 0){
        errors.price = 'El precio debe ser mayor a 0 y debe estar.'
    }
    if(!description){
        errors.description = 'No se ingreso descripcion'
    }

    let hayErrores = false
    for(let error in errors){
        if(errors[error]){
            hayErrores = true
        }
    }
    if(hayErrores){
        response.json(
            {
                message: 'Hay errores en el producto',
                ok: false, 
                status: 400, //bad request
                errors: errors
            }
        )
    }
    else{
        products.push(
            {
                title, 
                price, 
                description, 
                id: products.length + 1,
                active: true
            }
        )
        response.json(
            {
                message: 'Producto creado con exito',
                ok: true,
                status: 201, //created se usa cuando un recurso fue creado en el servidor
                data: {
                    products: obtenerProductos()
                }
            }
        )
    }
})

//obtener un producto por su id
//product_id es un parametro de busqueda o valor comodin en la url
app.get('/products/:product_id', (request, response) =>{
    //request.params es un objeto con los parametros de busqueda
    //los parametros siempre vienen como string 
    const {product_id} = request.params
    console.log(product_id)
    const product_found = obtenerProductos().find(product => product.id === Number(product_id))
    if(!product_found){
        response.json({
            status: 404,
            ok: false, 
            message: 'No encontrado',
            data: {
                product: null
            },
            error: `Producto con id ${product_id} no existe`
        })
    }
    else{
        response.json({
            status: 200,
            ok: true, 
            message: 'Producto obtenido',
            data: {
                product: product_found
            }
        })
    }
})

//PUT
//Que nos pasen por body un objeto de actualizacion
//Ejemplo 1: quieren actualizar el precio y el titulo
//body: {title: 'nuevo_valor', price: 80}
//Ejemplo 2: quieren actualizar el precio
//body: {price: 30}
app.put('/products/:product_id', (request, response) =>{
    const new_values = request.body //Valores a actualizar
    const {product_id} = request.params

    const errores = {
        price: null,
        title: null
    }

    if(new_values.price && !isNaN(new_values.price)){
        errores.price = 'El precio debe ser un numero'
    }

    if(new_values.title && new_values.title.length < 3){
        errores.title = 'El titulo debe tener almenos 3 caracteres'
    }

    let hayErrores = false
    for(let error in errores){
        if(errores[error]){
            hayErrores = true
        }
    }
    if(hayErrores){
        response.json(
            {
                message: 'Hay errores en el producto',
                ok: false, 
                status: 400, //bad request
                errors: errores
            }
        )
    }
    else{
        const product_found = products.find(product => product.id === Number(product_id))
        for(let prop in new_values){
            product_found[prop] = new_values[prop]
        }
        response.json(
            {
                ok: true,
                status: 200,
                message: 'producto actualizado',
                data: {
                    products: obtenerProductos()
                }
            }
        )
    }
    
})


//DELETE

app.delete('/products/:product_id', (request, response) =>{
    const {product_id} = request.params //es un objeto con los parametros de busqueda, en este caso {product_id: 'value'}
    const product_found = products.find(product => product.id === Number(product_id))
    if(!product_found){
        response.json({
            status: 404,
            ok: false, 
            message: 'No encontrado',
            data: {
                product: null
            },
            error: `Producto con id ${product_id} no existe`
        })
    }
    else{
        product_found.active = false
        response.json({
            message: 'Producto eliminado',
            ok: true,
            status: 200,
            data: obtenerProductos()
        })
    }
    
})


const obtenerProductos = () =>{
    return products.filter(products => products.active )
}


app.listen(PORT, () =>{
    console.log('el server se esta escuhando en el puerto 3000')
})