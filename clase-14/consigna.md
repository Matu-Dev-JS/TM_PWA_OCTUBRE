//post hacia /mensajes
/*
{
    text: 'Hola',
    author_id: 1
} 
*/
//un mensaje debe tener un text mayor a 5 caracteres
//un mensaje debe tener un author_id que debe ser un numero
//Si todo esta bien agregar el mensaje a la lista de mensajes (una lista guardada en una variable global)

const messages = []

app.post('/messages', (request, response ) =>{

})


//Armar el endpoint 
GET /messages devuelve la lista de mensajes
GET /messages/:message_id que nos permita buscar un mensaje en particular
DELETE /messages/:message_id que nos permita eliminar (desactivar) un mensaje por su id
PUT /messages/:message_id que actualiza el texto del message con el id pasado  (Opcional)
En su caso el put es mas facil porque solo se puede actualizar el texto