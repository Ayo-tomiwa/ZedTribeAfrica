import React, { useRef } from 'react'
import './testimonials.css'
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import user_1 from '../../assets/user-1.jpg';
import user_2 from '../../assets/user-2.jpg';
import user_3 from '../../assets/user-3.jpg';
import user_4 from '../../assets/user-4.avif';


const Testimonials = () => {

    const slider = useRef();
    let tx = 0

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
} 
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    
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
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Chisom Nnadi</h3>
                                <span>ZedTribe, Africa</span>
                            </div>
                        </div>
                        <p>I attended the last ZedTribe Worship Experience, and it completely transformed my spiritual life. 
                            The atmosphere of worship and the sense of community helped me deepen my relationship with God, and it's an experience I'll never forget. 
                            ZedTribe has truly impacted my faith and strengthened my personal journey in ways I didn't expect.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Bola Ade</h3>
                                <span>ZedTribe, Africa</span>
                            </div>
                        </div>
                        <p>Before joining ZedTribe, I used to doubt my abilities and lacked self-confidence. 
                            But through their mentorship program, I've learned to recognize my potential and discover my purpose.
                            The guidance I received helped me see who I really am, and now I believe in myself and know I can achieve so much more than I ever imagined.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Sola Balogun</h3>
                                <span>ZedTribe, Africa</span>
                            </div>
                        </div>
                        <p>Attending ZedTribe's community and mentorship sessions gave me the opportunity to meet inspiring mentors who encouraged me to pursue my dreams. 
                            The skills and knowledge I've gained through ZedTribe have set me on a new path, and I now have the confidence to go after my goals. 
                            ZedTribe has completely reshaped my outlook on life.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Kevin Praise</h3>
                                <span>ZedTribe, Africa</span>
                            </div>
                        </div>
                        <p>Thanks to ZedTribe, I was able to overcome my fears and step out of my comfort zone.
                            The support from their team, along with the friendships I built, gave me the courage to pursue my passion for tech. 
                            Now, I feel empowered and ready to take on the world with everything I've learned from ZedTribe's mentorship and training programs.
                        </p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Testimonials