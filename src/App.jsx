import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Error from './components/Error'
import Effect from './components/Effect'
import Card from './components/Card'
import { Lamp } from './components/UseEffect'

function App() {


  return (
  
    <>
        <div>
        <BrowserRouter>
     <NavBar/>
     <Effect/>
     <Card name="Presh" gender="male" email="p@gmail"></Card>
     <Lamp></Lamp>
     
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path='/services' element={<Services/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>

        
     </BrowserRouter>
        </div>
    </>
  )
}

export default App
