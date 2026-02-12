import React from 'react'
import Hero from '../Components/Hero'
import States from '../Components/States'
import ProductList from '../Components/ProductList'
import About from './About'
import Service from './Service'
import Contact from './Contact'

const Homepage = () => {
  return (
    <div>
      <Hero autoSlide={true} autoSlideInterval={2500}/>
      <States />
      <About />
      <ProductList />
      <Service />
      <Contact />
    </div>
  )
}

export default Homepage