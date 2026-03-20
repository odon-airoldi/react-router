// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
