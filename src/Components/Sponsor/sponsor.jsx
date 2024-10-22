import React from 'react'
import './sponsor.css'
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Sponsor = () => {
  return (
    <div className="sponsor">
    <div className="overlay">
      <h1>Sponsor Us</h1> 
        <p>If you want to sponsor our teenagers and help provide the tools they need to succeed,
            click on the social icons below to connect with our team and learn more...
        </p>   
        <div className='sponsor-icons-container'>
          <span className='sponsor-icons'>
              <a href="https://wa.me/2349032628603" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
              </a>
          </span>
          <span className='sponsor-icons'>
              <a href="https://www.instagram.com/zedtribeafrica" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
              </a>
          </span>
          <span className='sponsor-icons'>
              <a href="mailto: zedtribeafrica@gmail.com"><MdMailOutline /></a>
          </span>
      </div>
    </div>
  </div>
  )
}

export default Sponsor