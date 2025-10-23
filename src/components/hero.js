// src/components/Hero.js
import React from 'react';
import InfoCards from './InfoCards'; // <-- 1. IMPORT IT HERE

const Hero = () => {
  return (
    <header className="hero">
        <div className="container hero-container">
            <div className="hero-left">
                <h1>Smart Teaching Smarter Learning</h1>
                <p>Making Learning Smarter, Faster, and More Connected Than Ever Before</p>
                <a href="#" className="btn btn-green">Join Us Now</a> 
            </div>
            <div className="hero-right">
                <img src="/images/hero-image.png" alt="Classroom Illustration" />
            </div>
        </div>

        <InfoCards /> {/* <-- 2. ADD IT HERE (inside <header> but after .hero-container) */}
        
    </header>
  )
}

export default Hero;