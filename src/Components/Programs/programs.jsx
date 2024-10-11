import React from 'react'
import './programs.css'
import mentoring from '../../assets/mentoring.avif'
import program_1 from '../../assets/program1.jpg'
import program_2 from '../../assets/Program_2.jpg'
import { SiCodementor } from "react-icons/si";
import { SiFreecodecamp } from "react-icons/si";
import { TfiBook } from "react-icons/tfi";



const Programs = () => {
  return (
    <div className='programs'>
        <div className='program program-mentor'>
            <img src={mentoring} alt="" />
            <div className="caption">
              <span className='icon'>
              <SiCodementor />
              </span>
                <p>Mentorships</p>
            </div>
        </div>
        <div className='program program-image'>
            <img src={program_1} alt="" />
            <div className="caption">
              <span className='icon'>
              <SiFreecodecamp />
              </span>
                <p>Bootcamp Programs</p>
            </div>
        </div>
        <div className='program program-image'>
            <img src={program_2} alt="" />
            <div className="caption">
              <span className='icon'>
              <TfiBook />
              </span>
                <p>Word For One</p>
            </div>
        </div>

    </div>
  )
}

export default Programs