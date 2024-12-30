
BACKEND:
POST /api/auth/resend-verify-email
Obtener del body el email y van a buscarlo en la DB y en caso de existir volveran a crear un token de verificacion, van a guardarlo en el usuario y van a volver a enviar el mail de verificacion

En caso de no existir devuelven 404


FRONTEND:
Conectar el endpoint POST /api/auth/resend-verify-email con la pantalla de /error?error=RESEND_EMAIL_VERIFY_TOKEN