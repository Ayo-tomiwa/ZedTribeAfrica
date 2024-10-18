import React from 'react'
import './about.css'
import about_img from '../../assets/about.jpg'
import { FaCirclePlay } from "react-icons/fa6";
// Import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <span className='play-icon'>
            <FaCirclePlay />
            </span>
        </div>
        <div className="about-right">
            <h3>ABOUT ZEDTRIBE AFRICA</h3>
            <h2>Empowering Teens to Overcome Challenges</h2>
            <p>
                Embark on a transformative journey with our mentoring and guidance programs designed for teenagers and children.
                Certified by the Transformation Academy, our initiatives provide safe and nurturing environments where young
                individuals can develop critical life skills to face various challenges.
            </p>
            <p>
                Our programs emphasize personalized mentorship, practical workshops, and hands-on activities that foster growth, confidence,
                and positive change. We are passionate about creating impactful opportunities that empower the next generation to excel in their personal development.
            </p>
            <p>
                Whether you're seeking to overcome obstacles, enhance interpersonal skills, or unlock your full potential,
                our diverse range of mentorship programs offers the perfect pathway to inspire meaningful transformation in the lives of young people.
            </p>

        </div>
        
    </div>
  )
}

export default About