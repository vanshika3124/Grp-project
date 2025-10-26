// src/components/StartTeaching.js
import React from 'react';
import { Link } from 'react-router-dom';

const StartTeaching = () => {
  return (
    <section className="start-teaching">
      <div className="container">
        <h2 className="section-title">Start Teaching</h2>

        {/* Outer grey container */}
        <div className="teaching-profile-container">

          {/* Left Side: Teacher Image */}
          <div className="teacher-photo-container">
            {/* Make sure teacher-real.png is in /public/images/ */}
            <img src="/images/teacher-real.png" alt="Teacher" />
          </div>

          {/* Middle: Placeholder Form */}
          <div className="form-placeholder-middle">
            <h3>Your Name</h3>
            <div className="form-input-placeholder-middle">
              <span>Educational qualification</span>
            </div>
            <div className="form-input-placeholder-middle">
              <span className="star-icon">⭐</span> experience
            </div>
            <Link to="/login" className="btn btn-green login-button-middle">Login</Link>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="action-buttons-right">
            <button className="action-button quiz-btn">
              <img src="/images/quiz-icon.png" alt="" />
              <span>create a quiz</span>
            </button>
            <button className="action-button classroom-btn">
              <img src="/images/class.png" alt="" />
              <span>Go to classroom</span>
            </button>
            <button className="action-button progress-btn">
              <img src="/images/track.png" alt="" />
              <span>Track progress</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StartTeaching;