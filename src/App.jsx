import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/programs'
import Title  from './Components/Title/title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
      </div>
    </div>
  )
}

export default App