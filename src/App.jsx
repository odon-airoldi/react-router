import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Product from './pages/Product'
import AppLayout from './layouts/AppLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
