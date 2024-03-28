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

function App() {


  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Effect/>
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path='/services' element={<Services/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>

        
     </BrowserRouter>
    </>
  )
}

export default App
