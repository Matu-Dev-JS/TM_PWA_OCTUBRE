import { createContext, useEffect, useState } from "react"

//Crear el contexto
export const AuthContext = createContext()


//Crear el proveedor de contexto (Es un componente)

export const AuthContextProvider = ({children}) =>{

    const [isAuthenticatedState, setIsAuthenticatedState] = useState(Boolean(sessionStorage.getItem('access_token')))
    const login = (access_token) =>{
        sessionStorage.setItem('access_token', access_token)
        setIsAuthenticatedState(true)
    }
   /*  useEffect(() =>{
        const auth_token = sessionStorage.getItem('access_token')
        if(auth_token) {
            setIsAuthenticatedState(true)
        }
    }, []) */

    return (
        <AuthContext.Provider value={{isAuthenticatedState, login}}>
            {children}
        </AuthContext.Provider>
    )
}























/* export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    let isAuthenticated = Boolean(sessionStorage.getItem('access_token'))
    const [isAuthenticatedState, setIsAuthenticatedState] = useState(isAuthenticated)

    useEffect(() =>{
        const auth_token = sessionStorage.getItem('access_token')
        if(auth_token) {
            setIsAuthenticatedState(true)
        }
    }, [])
    return ( 
        <AuthContext.Provider value={{isAuthenticatedState}}>
            {children}
        </AuthContext.Provider>
    )
} */

