import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Food from './Food'
import Cardlines from './Cardlines'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
        
        <Navbar/>
        <Hero/>
        <Cardlines/>
        <Food/>
        <Footer/>

    </div>
  )
}

export default Home