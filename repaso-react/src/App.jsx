import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen'
import WorkspaceScreen from './Screen/WorkspaceScreen'


function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        {/* Cuando usemos useParams() me va a devolver un {workspace_id: id_value} */}
        <Route path='/workspace/:workspace_id/' element={<WorkspaceScreen/>}/>
        <Route path='/workspace/:workspace_id/:channel_id' element={<WorkspaceScreen/>}/>
      </Routes>
    </>
  )
}

export default App
