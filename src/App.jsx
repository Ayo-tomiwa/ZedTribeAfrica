import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/programs'
import Title  from './Components/Title/title'
import About from './Components/About/about'

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
      </div>
    </div>
  )
}

export default App