import React from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroment'

const ResetPasswordScreen = () => {
    const url = new URLSearchParams(window.location.search)
    const reset_token = url.get('reset_token')
    const {form_state, handleChangeInput} = useForm({password: ''})
    const handleSubmitResetPassword = async (e) =>{
        try{
            e.preventDefault()
            const response = await fetch(`${ENVIROMENT.API_URL}/api/auth/reset-password?reset_token=${reset_token}`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form_state)
            })
            const data = await response.json()
            console.log(data)
        }
        catch(error){
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Elige una nueva contraseña</h1>
            <form onSubmit={handleSubmitResetPassword}>
                <label htmlFor="password">Nueva contraseña:</label>
                <input type="password" name="password" id="password" placeholder='********' onChange={handleChangeInput}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default ResetPasswordScreen