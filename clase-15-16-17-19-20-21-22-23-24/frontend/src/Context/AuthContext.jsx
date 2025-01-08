import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

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
}

export default AuthContextProvider