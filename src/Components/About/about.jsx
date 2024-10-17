import React from 'react'
import './about.css'
import about_img from '../../assets/about.jpg'
// Import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            {/* <img src={play_icon} alt="" /> */}
        </div>
        <div className="about-right">
            <h3>ABOUT ZEDTRIBE AFRICA</h3>
            <h2>Guiding Teenagers Through Various Challenges.</h2>
            <p>We Mentor, guide and advice teenagers and children through various life challenges, 
                certified by the Transformation Academy, We excel in creating safe, nuturing spaces
                for teenageers to develop essential life skills. We are passionate
                about designing impactful workshops and programs that inspire positive change.
            </p>
            <p>
                We Mentor, guide and advice teenagers and children through various life challenges, 
                certified by the Transformation Academy, We excel in creating safe, nuturing spaces
                for teenageers to develop essential life skills. We are passionate
                about designing impactful workshops and programs that inspire positive change.
            </p>
            <p>
                We Mentor, guide and advice teenagers and children through various life challenges, 
                certified by the Transformation Academy, We excel in creating safe, nuturing spaces
                for teenageers to develop essential life skills. We are passionate
                about designing impactful workshops and programs that inspire positive change.
            </p>

        </div>
        
    </div>
  )
}

export default About