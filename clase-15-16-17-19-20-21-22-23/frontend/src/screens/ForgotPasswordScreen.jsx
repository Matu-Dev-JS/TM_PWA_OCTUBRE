import React from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroment'

const ForgotPasswordScreen = () => {
    const {form_state, handleChangeInput} = useForm({email:''})
    const handleSubmitForgotPassword = async (e) => {
        try{
            e.preventDefault()
            const response = await fetch(ENVIROMENT.API_URL + '/api/auth/forgot-password', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form_state)
            })
            const data = await response.json()
            if(data.ok){
                alert('Se envio el mail de verificacion')
            }
        }
        catch(error){
            console.error(error)
        }
    }
  return (
    <div>
        <h1>Restablecer contraseña</h1>
        <p>Vamos a enviarte un correo electronico con los pasos a seguir para reestablecer</p>
        <form onSubmit={handleSubmitForgotPassword}>
            <label htmlFor="email">Ingresa el mail con el que te registraste:</label>
            <input placeholder='joedoe@email.com' name='email' id='email' onChange={handleChangeInput}/>
            <button>Enviar correo</button>
        </form>
    </div>
  )
}

export default ForgotPasswordScreen