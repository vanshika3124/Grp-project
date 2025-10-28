
import React from 'react';
import InfoCards from './InfoCards';

 
const Hero = ({ onQuizClick }) => { 
  return (
    <header className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <h1>Smart Teaching Smarter Learning</h1>
          <p>Making Learning Smarter, Faster, and More Connected Than Ever Before</p>
          
         
          <button onClick={onQuizClick} className="btn btn-green">
            Create a Quiz
          </button>
          
        </div>
        <div className="hero-right">
          <img src="/images/hero-image.png" alt="Classroom Illustration" />
        </div>
      </div>
      <InfoCards />
    </header>
  )
}

export default Hero;