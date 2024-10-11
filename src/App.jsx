import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/programs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Programs/>
      </div>
    </div>
  )
}

export default App