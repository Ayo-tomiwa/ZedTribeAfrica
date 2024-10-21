import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0cf3c4a8-d07e-498f-8e50-b8d0d4566105");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="contact">
        <div className='contact-col'>
        <h3>Send us a message <span className='mail-img'><MdEmail /></span> </h3>
        
        <p>Your feedback, questions, and suggestions are invaluable to us as we work to empower teenagers with the tools they need for success.
            Whether you're interested in sponsoring, partnering, or simply want to learn more about our mission, don't hesitate to reach out.</p>
        <ul>
            <li><span className='img'><IoIosMail /></span> zedtribeafica@gmail.com</li>
            <li><span className='img'><MdPhoneInTalk /></span>+234 903 262 8603</li>
            <li><span className='img'><FaLocationDot /></span>11 Okeilewo Street, Abeokuta, <br />
                Ogun State, Nigeria</li>
        </ul>

        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit} action="">
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required />
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn contact-btn'>Submit now <span className='forward-arrow'> <IoArrowForwardOutline /></span></button>
            </form>
            <span className='sending-span'>{result}</span>
        </div>
    </div>
  )
}

export default Contact