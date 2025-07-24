import React from 'react'

import Navbar from './components/homePage/homePage'
import Hero from './components/hero'
import ServicesSection from './components/services/suggesation'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ServicesSection/>
      <Footer/>
    </div>
  )
}

export default App
