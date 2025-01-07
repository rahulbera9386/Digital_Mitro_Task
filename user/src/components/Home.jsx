import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'

import Products from './Products'
import Deals from './Deals'
import Testimonials from './Testimonials'
import About from './About'
import Sale from './Sale'
import News from './News'
import Client from './Client'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <div className='relative min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1569742460976-c91ebe40b0b2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">

      <Navbar/>
      <Hero/>

      </div>
       
        
      </div>
      <Features/>
      <Products/>
      <Deals/>
      <Testimonials/>
      <About/>
      <Sale/>
      <News/>
      <Client/>
      <Footer/>
    </div>
  )
}

export default Home
