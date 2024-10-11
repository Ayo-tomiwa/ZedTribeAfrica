import React from 'react'
import './navbar.css'
import logo from '/src/assets/ZedTribeAfricaLogo__1c.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="zed-tribe-logo" className='logo' />
        <ul>
            <li className='hover'>Home</li>
            <li className='hover'>Program</li>
            <li className='hover'>About us</li>
            <li className='hover'>Become a Sponsor</li>
            <li className='hover'>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar