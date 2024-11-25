
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

    console.log(marca)

    res.json(
        {
            status: 200,
            message: "Productos obtenidos",
            ok: true,
            data: {
                products: products
            }
        }
    )
})



app.listen(PORT, () =>{
    console.log(`Aplicacion escuchandose en el puerto ${PORT}`)
})

