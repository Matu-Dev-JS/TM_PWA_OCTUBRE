import React from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroment'

const RegisterScreen = () => {
	const { form_state, handleChangeInput } = useForm({ username: "", email: "", password: "" })
	

	const handleSubmitForm = async (event) => {
		event.preventDefault()
		try {
			const res = await fetch(ENVIROMENT.API_URL + "/api/auth/register", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'

				},
				body: JSON.stringify(form_state)
			})
			const data = await res.json()
			console.log(data)

		} catch (error) {
			console.error("Error al crear usuario", error)
		}
	}

	const errores = {
		username: [
		],
		email: [
		],
		password: []
	}

	form_state.email && form_state.email.length > 30 && errores.email.push("El límite de caracteres es 30")
	form_state.email && form_state.email.length < 5 && errores.email.push("El mínimo de caracteres es 5")

	form_state.password && form_state.password.length > 30 && errores.password.push("El máximo de caracteres es 30")
	form_state.password && form_state.password.length < 5 && errores.password.push("El mínimo de caracteres es 5")

	form_state.username && form_state.username.length > 30 && errores.username.push("El límite de caracteres es 30")
	form_state.username && form_state.username.length < 5 && errores.username.push("El mínimo de caracteres es 5")

	return (
		<div>
			<h1>Registro</h1>

			<form onSubmit={handleSubmitForm}>

				<div>
					<label htmlFor="username">Ingresa tu nombre de usuario:</label>
					<input name='username' id='username' value={form_state.username} onChange={handleChangeInput} />
					{errores.username?.map((error, index) => <p key={index} style={{ color: "red" }}>{error}</p>)}


				</div>

				<div>
					<label htmlFor="email">Ingresa tu email:</label>
					<input name='email' id='email' placeholder='joedoe@gmail' value={form_state.email} onChange={handleChangeInput} />

					{errores.email?.map((error, index) => <p key={index} style={{ color: "red" }}>{error}</p>)}
				</div>

				<div>
					<label htmlFor="password">Ingresa tu contraseña:</label>
					<input name='password' id='password' value={form_state.password} onChange={handleChangeInput} />
					<button type='submit' disabled={errores.email.length > 0 || errores.password.length || !form_state.email || !form_state.password}>Crear usuario</button>
					{errores.password?.map((error, index) => <p key={index} style={{ color: "red" }}>{error}</p>)}

				</div>

			</form>


		</div>

	)
}

export default RegisterScreen