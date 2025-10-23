// src/components/HowToTeach.js
import React from 'react';

const HowToTeach = () => {
  return (
    <section className="how-to-teach-wrapper" style={{padding: '0 var(--container-width)', margin: '0 auto', maxWidth: '1200px'}}>
      <div className="how-to-teach">
        <h3>How to Teach with SmartSync?</h3>
        <div className="how-to-content">
          <div className="how-to-steps">
            <ul>
              <li><span>Sign in</span> to your SmartSync account</li>
              <li><span>Create</span> your classroom</li>
              <li><span>Design</span> your quiz or upload notes</li>
              <li><span>Start</span> a real-time session</li>
              <li><span>Track</span> and analyze performance</li>
            </ul>
            <a href="#" className="btn btn-green" style={{alignSelf: 'flex-start', marginTop: '1rem'}}>Login</a>
          </div>
          <div className="how-to-image">
            {/* USE YOUR DIAGRAM from /public/images/how-to.png */}
            <img src="/images/how-to.png" alt="How to teach diagram" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToTeach;