//Server HTTP




import express from 'express'

const app = express()

//Cuando reciba una consulta method GET a /hello entonces ejecuto esta callback
app.get(
    '/hello', 
    (consulta, respuesta) => {
        //Consulta es un objeto con datos de la consulta
        //Respuesta es un objeto para emitir respuestas
        console.log('consulta recibida')
        respuesta.send('<h1>Hola desde express!!!</h1>')
    }
)


//Levantar mi aplicacion
//Como mi app se esta ejecutando en mi PC debo dedicarle un puerto especifico

const PUERTO = 3000

//Forever process o proceso eterno
app.listen(PUERTO, () => {
    //Ejecutar esta accion cuando la aplicacion se este escuchando
    console.log('Aplicacion ejecutandose con exito!')
})

