import express from "express"
const app = express()


app.use(express.json())
//CRUD
//Create
//Read
//Update
//Delete


const messages = []


app.post('/messages', (request, response) =>{
  //Recibir los datos para crear el mensaje, los validamos y lo agregamos al array de messages
    const {text, author_id = 1} = request.body

    const errors = {
        text: null,
        author_id: null
    }
    if(!text || text.length <=2){
        errors.text = 'No has ingresado texto'
    }
    if(!author_id || typeof author_id !== 'number'){
        errors.author_id = 'No has ingresado un id de autor o no es un número'
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
        messages.push({
            text,
            message_id: messages.length + 1,
            active: true,
            author_id: author_id

        })
        response.json(
            {
                message: 'Mensaje creado con exito',
                ok: true,
                status: 201, //created se usa cuando un recurso fue creado en el servidor
                data: {
                    message: messages
                    }
            }
        )
    }
})

app.get('/messages', (request,response) => {


    response.json(
        {
            ok: true,
            status: 200,
            message: 'Lista de mensajes',
            data: {
                messages: messages 
            }
        }
    ) 
})


app.get('/messages/:message_id', (request, response) =>{
    const {message_id} = request.params


    const message_found = messages.find(message => message.message_id === Number(message_id))

    if(!message_found){
        response.json(
            {
                ok: false,
                status: 404,
                message: 'no se encontro message',
                data: {
                    message: null
                },
                error: `message con id ${message_id} no existe`
            }
        )
    }else{
        response.json(
            {
                ok: true,
                status: 200,
                message: 'message obtenido',
                data: {
                    message: message_found
                }
            }
        )
    }
})


app.delete('/messages/:message_id', (request, response) => {
    const {message_id} = request.params
    
    const messageDelete = messages.find(message => message.message_id === Number(message_id))
    if(!messageDelete){
        response.json(
            {
                status: 404,
                ok: false, 
                message: 'No encontrado',
                data: {
                    messages: null
                },
                error: `Mensaje con id ${message_id} no existe`
            }
        )
    }
    else{
        messageDelete.active = false
        response.json(
            {
                message: `Mensaje eliminado con id ${message_id}`,
                ok: true,
                status: 200,
                data: {
                    messages: listaMensajesActive()
                },
                dataDelete: {
                    message: messageDelete
                }
            }
        )
    }
})
app.put('/messages/:message_id', (request, response) => {
    const {message_id} = request.params

    //objeto
    //{text/message/newText: "Hola soy el nuevo mensaje"}
    const newMessage = request.body

    //Imaginemos que mando como message_id un ''
    if(!message_id || message_id <= 0 || isNaN(message_id)){
        return response.json(
            {
                ok: false,
                status: 400,
                message: 'Id invalido',
                error: 'El id del mensaje debe ser un número y mayor a 0'
            }
        )
        
    }

    const messageFound = messages.find(message => message.message_id === Number(message_id))

    if(!messageFound){
        return response.json(
            {
                status: 404,
                ok: false, 
                message: 'No encontrado',
                error: `Mensaje con id ${message_id} no existe`
            }
        )
    }

    messageFound.text = newMessage.text

    response.json(
        {
            ok: true,
            status: 200,
            message: 'Mensaje actualizado',
            data: {
                messages: listaMensajesActive()
            }
        }
    )
    
})


const listaMensajesActive = ( ) => {
    return messages.filter( messages => messages.active )
}



app.listen(3000, () =>{
    console.log('El servidor se esta escuchando en http://localhost:3000')
})