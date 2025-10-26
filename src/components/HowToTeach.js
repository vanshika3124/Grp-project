// src/components/HowToTeach.js
import React from 'react';

const HowToTeach = () => {
  return (
    // Yeh wrapper section hai
    <section className="how-to-teach-wrapper">
       
        {/* Yeh blue gradient box hai */}
        <div className="how-to-teach"> 
          
          <h3>How to Teach with SmartSync?</h3>
          
          {/* Content (2 columns) */}
          <div className="how-to-content">
            
            {/* Left Side: Steps */}
            <div className="how-to-steps">
              <ul>
                <li><span>Sign in</span> to your SmartSync account</li>
                <li><span>Create</span> your classroom</li>
                <li><span>Design</span> your quiz or upload notes</li>
                <li><span>Start</span> a real-time session</li>
                <li><span>Track</span> and analyze performance</li>
              </ul>
            </div>
            
            {/* Right Side: Image */}
            <div className="how-to-image">
              <img src="/images/how-to.png" alt="How to teach diagram" />
             
          </div>
          
          {/* Button (neeche, center mein) */}
          <a href="#" className="btn btn-green">Go to classroom</a>

        </div>
      </div>
    </section>
  );
}

export default HowToTeach;