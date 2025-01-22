import { useState } from "react"

const useForm = (form_initial_state) =>{
    //form_initial_state sea un objeto como este: {email: "", password:""}
    const [form_state, setFormState] = useState(form_initial_state)

    const handleChangeInput = (event) =>{
        setFormState(
            (prev_form_state) =>{
                const field_name = event.target.name
                const field_value = event.target.value
                return {...prev_form_state, [field_name]: field_value}
            }
        )
    }
    return {
        form_state,
        handleChangeInput
    }
}

export default useForm