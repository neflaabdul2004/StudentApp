import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formm from './component/Formm'
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Tabless from './component/Tabless'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/fr' element={<Formm/>}/>
        <Route path='/tab' element={<Tabless/>}/>
      </Routes>
      <NavBar/>
      
    </>
  )
}

export default App
