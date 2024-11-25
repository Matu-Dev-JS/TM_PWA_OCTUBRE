
import express from 'express'

const app = express()

const PORT = 3000

app.get(
    '/test', 
    (consulta, respuesta) =>{
        console.log('consulta recibida')
        respuesta.send('<h1>Consulta recibida</h1>')
    }
)


app.get(
    '/ping',
    (request, response) => {
        response.json({
            message: 'consulta para ping', 
            ok: true,
            status: 200,
            data: null
        })
    }
)

//GET es un metodo HTTP y se utiliza para poder obtener recursos de un servidor

const products = [
    {
        name:"tv",
        price: 10,
        id: 1,
        marca: 'samsung'
    },
    {
        name:"ceular",
        price: 14,
        id: 2,
        marca:"Iphone"
    },
    {
        name:"tablet",
        price: 7,
        id: 3,
        marca:'samsung'
    },
]

app.get('/products', (req, res) => {

    //queremos obtener el query param 'marca'
    const marca = req.query.marca

    let productos_filtrados = products
    //en caso de que haya marca filtrar

    if(marca){
        //logica de filtro
        productos_filtrados = productos_filtrados.filter(producto => producto.marca === marca)
    }
    //TAREA
    //2do ejercicio
    //Aplicar un filtro de precio
    //min_price
    //max_price
    //A TENER EN CUENTA: deberian funcionar por separado es decir si solo hay precio minimo deberia darme a los productos mayores a ese precio minimo y lo mismo en caso de que solo haya precio maximo
    //OPCIONAL: En caso de que el precio min sea mayor al precio maximo entonces responder con error


    console.log(marca)
    //en caso de que haya marca (osea si se selecciono una marca) devolver solo los productos de esa marca

    //Si hay marca, filtrar por marca sino hay marca entonces no filtrar

    res.json(
        {
            status: 200,
            message: "Productos obtenidos",
            ok: true,
            data: {
                products: productos_filtrados
            }
        }
    )
})

//products.filter(prodcut => prodcut.marca == )

app.listen(PORT, () =>{
    console.log(`Aplicacion escuchandose en el puerto ${PORT}`)
})

