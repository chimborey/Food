import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Page/Homepage'
import Header from './Page/Header'
import Footer from './Page/Footer'
import { ToastContainer } from 'react-toastify'
import Cart from './Components/Cart'
import ProductDetail from './Page/ProductDetail'
import ProductList from './Components/ProductList'
import About from './Page/About'
import AOS from 'aos'
import Service from './Page/Service'
import Contact from './Page/Contact'


const App = () => {
  
  useEffect(()=>{
    AOS.init({
      duration: 100,
      offset: 100,
      once: false
    })
  },[])
  return (
    <BrowserRouter>
    <ToastContainer />
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/product' element={<ProductList />}></Route>
      <Route path='/product/:id' element={<ProductDetail />}></Route>
      <Route path='/service' element={<Service />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App