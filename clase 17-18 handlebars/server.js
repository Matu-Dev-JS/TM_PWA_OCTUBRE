import express from 'express'

const app = express()
const PORT = 3000



//Queremos servir los archivos estaticos desde la carpeta publica

app.use(express.static('./public'))

//app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/test', (request, response) => {
    console.log(request.body)
    response.sendStatus(200)
})

import handlebars from 'express-handlebars'
//Configurar motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

const workspaces = [
    {
        id: 1,
        name: 'Workspace 1',
        is_special: true
    },
    {
        id: 2,
        name: 'Workspace 2',
        is_special: false
    },
    {
        id: 3,
        name: 'Workspace 3',
        is_special: true
    }
]

app.get('/', (request, response) => {
    response.render('home', {
        layout: 'main',
        data: {
            title: 'Bienvenido usuario!',
            html: '<b>Hola</b>',
            workspaces
        }
    })
})

app.get('/workspaces/new', (request, response) => {
    response.render('workspace-form', {
        layout: 'main', 
    })
})

app.post('/workspaces/new' , (request, response) => {
    console.log(request.body)
    const {workspace_name} = request.body

    const errors_state = {
        workspace_name: false
    }

    /* Aca validamos los campos */

    if(workspace_name.length < 3) {
        errors_state.workspace_name = 'El workspace debe tener mas de 3 caracteres'
    }
    else if(workspace_name.length > 20) {
        errors_state.workspace_name = 'El workspace debe tener menos de 20 caracteres'
    }
    else if(workspaces.find(workspace => workspace.name == workspace_name)) {
        errors_state.workspace_name = 'El workspace ya existe'
    }

    let hay_errores = false

    for (let field in errors_state) {
        if(errors_state[field]) {
            hay_errores = true
        }
    }

    if(hay_errores) {
        return response.render('workspace-form', {
            layout: 'main',
            data: {
                errors: errors_state
            }
        })
    }

    const new_workspace = {
        id: workspaces.length + 1,
        name: workspace_name
    }

    workspaces.push(new_workspace)

    response.redirect('/')
})


app.get('/workspaces/:id', (request, response) => {
    const { id } = request.params
    const workspace_found = workspaces.find(workspace => workspace.id == id)
    response.render('workspace', {
        layout: 'main',
        data: {
            workspace_info: workspace_found
        }
    })
})


/* 

Hacer una vista llamada product detail que muestre el detalle de un producto en una vista aparte (No debe ser la vista de home)

Cada producto debe tener un link que diga 'Ver detalle' y lleve a esta vista

Cada producto tendra 2 propiedades

is_sale: boolean
offer: number

En caso de que is_sale sea true, se debe mostrar un borde verde (o de un x color llamativo) marcando que ese producto tiene un descuento y en un span el descuento del producto


Crear una nueva vista en 
/products/new

Debe tener un formulario para poder crear un producto (NO DEBE PEDIR EL ID AL USUARIO)

El formulario debe tener los campos de: 

name
price
description
stock
is_sale
offer

El formulario se enviara como action a /products/new y en caso de estar correcto se redirigira a la vista de home
En caso de no estar correcto debera mostrar error en los campos que hayan fallado
*/


app.listen(PORT, () => {
    console.log(`Aplicacion ejecutandose en http://localhost:${PORT}`)
})

/* 

 BREAK DE 10 MIN!

Hacer una vista para mostrar distintos productos en 

/products

El titulo de la pagina debe decir 'Lista de productos' y abajo enlistar los productos en <div></div> para mostrar la informacion de cada producto

*/


const productos = [
    {
        id: 1,
        nombre: 'Tv samsung',
        precio: 100,
        descripcion: 'La mejor tv',
        stock: 5
    },
    {
        id: 2,
        nombre: 'Tv LG',
        precio: 150,
        descripcion: 'La mejor tv',
        stock: 10
    },
    {
        id: 3,
        nombre: 'Tv Noblex',
        precio: 200,
        descripcion: 'La mejor tv',
        stock: 54
    }
]
app.get('/products', (request, response) => {
    response.render('products', {
        layout: 'main',
        data: {
            title: 'Lista de productos',
            productos
        }
    })
})

