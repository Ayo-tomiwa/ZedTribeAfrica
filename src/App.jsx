import React, { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/programs'
import Title  from './Components/Title/title'
import About from './Components/About/about'
import Sponsor from './Components/Sponsor/sponsor'
import Testimonials from './Components/Testimonials/testimonials'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import VideoPlayer from './Components/VideoPlayer/videoPlayer'
// import {Helmet} from "react-helmet";


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (

    // <>
    // <Helmet>
    //   <meta charSet="utf-8" />
    //   <title>Byte App</title>
    //   <link rel="canonical" href="http://mysite.com/example" />
    //   <meta name="description" content="Byte Web App" />
    //   <link rel="icon" href="icon.png" /> // Add your icon here
    // </Helmet>
    // </>
    
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Sponsor Us' title='Become a Sponsor'/>
        <Sponsor/>
        <Title subTitle='TESTIMONIALS' title="Real Teen Experiences"/>
        <Testimonials/>
        <Title subTitle='Contact Us' title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={ setPlayState}/>
    </div>
  )
}

export default App