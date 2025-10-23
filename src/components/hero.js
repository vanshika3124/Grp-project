// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <header className="hero">
        <div className="container hero-container">
            {/* Left Side */}
            <div className="hero-left">
                <h1>Smart Teaching Smarter Learning</h1>
                <p>Making Learning Smarter, Faster, and More Connected Than Ever Before</p>
                <a href="#" className="btn btn-green">Join Us</a>
            </div>

            {/* Right Side */}
            <div className="hero-right">
                {/* Make sure you have an image in:
                  /public/images/hero-image.png 
                */}
                <img src="/images/hero-image.png" alt="Classroom Illustration" />
            </div>
        </div>
    </header>
  )
}

export default Hero;