import React from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroment'

const LoginScreen = () => {
    const {form_state, handleChangeInput} = useForm({email:'pepe', password: ''})
    const handleSubmitForm = async (event) =>{
        try{
            event.preventDefault()
            const response = await fetch(ENVIROMENT.API_URL + '/api/auth/login', {
                method: "POST",
                headers:{
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(form_state)
            })
            const data = await response.json()
            console.log(data)
        }
        catch(error){
            console.error("Error al loguear", error)
        }
        
    }
    const errores = {
        email: [
        ],
        password: [
        ]
    }

    form_state.email && form_state.email.length > 30 && errores.email.push("El limite de caracteres es 30") 
    form_state.email && form_state.email.length < 5 && errores.email.push("El minimo de caracteres es 5")
    form_state.password && form_state.password.length < 5 && errores.password.push("El minimo de caracteres es 5")
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor='email'>Ingresa tu email:</label>
                    <input 
                        name='email' 
                        id='email' 
                        placeholder='joedoe@email.com' 
                        value={form_state.email} 
                        onChange={handleChangeInput}
                    />
                    {
                        errores.email.map((error, index) => <p key={index} style={{color: 'red'}}>{error}</p>)
                    }
                </div>
                <div>
                    <label htmlFor='password'>Ingresa tu contraseña:</label>
                    <input 
                        name='password' 
                        id='password' 
                        value={form_state.password} 
                        onChange={handleChangeInput}
                    />
                    {
                        errores.password.map((error, index) => <p style={{color: 'red'}} key={index}>{error}</p>)
                    }
                </div>
                <button type='submit' disabled={
                    errores.email.length || 
                    errores.password.length || 
                    !form_state.email || 
                    !form_state.password
                    }>
                    Iniciar sesion
                </button>
            </form>
        </div>
    )
}

export default LoginScreen



