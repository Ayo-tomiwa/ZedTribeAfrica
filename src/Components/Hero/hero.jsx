import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import './hero.css'
const Hero = () => {            
  return (
    <div className='hero container'>
        <div className="hero-text">
        <h1>We Empower And Guide Young Teenagers And Children Through Personal Development.</h1>
        <p>A fun, supportive community where teens and young adults can connect,
            grow and cheer each other on as you navigate the journey to a more fulfilling life!</p>
            <button className='btn'>Explore more <span className='forward-arrow'> <IoArrowForwardOutline /></span></button>
        </div>
    </div>
  )
}

export default Hero