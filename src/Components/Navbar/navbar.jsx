import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '/src/assets/ZedTribeAfricaLogo__1c.png'
import { Link } from 'react-scroll';
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="zed-tribe-logo" className='logo' />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li className='hover'><Link to='hero' smooth={true} offset={0}>Home</Link></li>
            <li className='hover'><Link to='program' smooth={true} offset={-260}>Program</Link></li>
            <li className='hover'><Link to='about' smooth={true} offset={-150}>About us</Link></li>
            <li className='hover'><Link to='sponsor' smooth={true} offset={-260}>Become a Sponsor</Link></li>
            <li className='hover'><Link to='testimonials' smooth={true} offset={-260}>Testimonials</Link></li>
            <li><Link to='contact'  smooth={true} offset={-260} className='btn'>Contact us</Link></li>
        </ul>
        <span className='menu-icon' onClick={toggleMenu}><RiMenu3Fill /></span>
    </nav>
  )
}

export default Navbar