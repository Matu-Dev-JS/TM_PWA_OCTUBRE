import React from 'react'
import ENVIROMENT from './utils/constants/enviroment'
import { Route, Routes } from 'react-router-dom'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ErrorScreen from './screens/ErrorScreen'




const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/error' element={<ErrorScreen/>}/>
      </Routes>
    </div>
  )
}

export default App