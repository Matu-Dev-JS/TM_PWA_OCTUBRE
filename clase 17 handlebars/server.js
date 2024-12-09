import express from 'express'

const app = express()
const PORT = 3000



//Queremos servir los archivos estaticos desde la carpeta publica

app.use(express.static('./public'))

//app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post('/test', (request, response) =>{
    console.log(request.body)
    response.sendStatus(200)
})

import handlebars from 'express-handlebars'
//Configurar motor de plantillas
app.engine('handlebars', handlebars.engine() )
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (request, response) =>{
    response.render('home')
})


app.listen(PORT, () =>{
    console.log(`Aplicacion ejecutandose en http://localhost:${PORT}`)
})

