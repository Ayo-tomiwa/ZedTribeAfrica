import React from 'react'
import './testimonials.css'
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import user_1 from '../../assets/user--1.jpg';
import user_2 from '../../assets/user__2.jpg';
import user_3 from '../../assets/user-3.jpg';
import user_4 from '../../assets/user-4.avif';


const Testimonials = () => {

const slideForward = ()=>{

} 
const slideBackward = ()=>{
    
} 


  return (
    <div className='testimonials'>
        <div className='forward-btn' onClick={slideForward}>
        <IoArrowForwardCircle />
        </div>
        <div className='back-btn' onClick={slideBackward}>
        <IoArrowBackCircle />
        </div>
        <div className="slider">
            <ul>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                            The supportive community, state-of-the-art facilities, and commitment to academic 
                            excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                            The supportive community, state-of-the-art facilities, and commitment to academic 
                            excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                            The supportive community, state-of-the-art facilities, and commitment to academic 
                            excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Williams Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                            The supportive community, state-of-the-art facilities, and commitment to academic 
                            excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Testimonials