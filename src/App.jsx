import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/programs'
import Title  from './Components/Title/title'
import About from './Components/About/about'
import Sponsor from './Components/Sponsor/sponsor'
import Testimonials from './Components/Testimonials/testimonials'
import Contact from './Components/Contact/contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Sponsor Us' title='Become a Sponsor'/>
        <Sponsor/>
        <Title subTitle='TESTIMONIALS' title="Real Teen Experiences"/>
        <Testimonials/>
        <Title subTitle='Contact Us' title="Get in Touch"/>
        <Contact/>
      </div>
    </div>
  )
}

export default App