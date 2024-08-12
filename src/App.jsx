import React from 'react'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import HeroSection from './Components/HeroSection'
import ShopSection from './Components/ShopSection'
import Testimonials from './Components/Testimonials'
import "./App.css"


const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
    
      <Testimonials />
      <ShopSection />
      <Footer />
    </div>
  )
}

export default App
