NO CORREGIDA, DEBIA CORREGIRSE EL 6/1 lunes
BACKEND:
POST /api/auth/resend-verify-email
Obtener del body el email y van a buscarlo en la DB y en caso de existir volveran a crear un token de verificacion, van a guardarlo en el usuario y van a volver a enviar el mail de verificacion

En caso de no existir devuelven 404


FRONTEND:
Conectar el endpoint POST /api/auth/resend-verify-email con la pantalla de /error?error=RESEND_EMAIL_VERIFY_TOKEN

Opcional:
Hilen fino sobre los posibles errores actuales del frontend


------------------------------------------------------------------------------------------------------------------

Actividad/objetivo de 6/1

BACKEND:

Endpoints:

Como se crea un workspace?

PARA ESTA ACCION SE DEBE ESTAR LOGUEADO

POST /api/workspace 

body: {
    name: string
}

Que va a pasar?
Tomamos el user_id del req.headers.user
Tomamos el name del body
Creamos un nuevo documento en mongoDB del workspace que inicialmente no tendra miembros
Devolvemos status 201 si todo esta OK

HECHO

Como invito a alguien a mi workspace?

POST /api/workspaces/:workspace_id/invite

body: {
    email //de a quien agregaremos
}
req.user el id del usuario

Vamos a buscar si existe ese workspace y verficaremos si el id del usuario que intenta invitar el el mismo que el owner del workspace seleccionado

Buscar a ese usuario x email y lo agregaremos como miembro al workspace (Almenos que ya este unido)



Soy un usuario X y quiero ver todos los workspace a los que pertezco

GET /api/workspaces

Vamos a devolver todos los workspace en los que el user es miembro


Crear un canal
POST /api/channels/:workspace_id
body: {
    name: "general"
}

Enviar un mensaje
POST /api/channels/:workspace_id/:channel_id/message
body: {
    content: "hola a todos"
}

Obtener lista de mensajes de un canal
GET /api/channels/:workspace_id/:channel_id
Debe devolver la lista de mensajes de ese canal
