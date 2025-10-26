// src/components/DashboardCard.js
import React from 'react';
// CSS hum App.css mein hi daal denge

const DashboardCard = () => {
  return (
    <section className="start-teaching">
      <div className="container">
        <h2 className="section-title">Start Teaching</h2>

        {/* This is the main profile grid */}
        <div className="teaching-profile">

          {/* Left Side: Teacher Card */}
          <div className="profile-card">
            {/* Make sure teacher.png is in /public/images/ */}
            <img src="/images/teacher.png" alt="Anjali Singh" />
            <h3>Anjali Singh</h3>
            <p>You have successfully created 2 classrooms. 150 students</p>
            <p>⭐ 15 years+ experience</p>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="action-buttons">
            
            {/* Button 1 */}
            <button className="quiz-btn">
              <img src="/images/icon-create-quiz.png" alt="" />
              <span>Create a quiz</span>
            </button>

            {/* Button 2 */}
            <button className="classroom-btn">
              <img src="/images/icon-go-to-classroom.png" alt="" />
              <span>Go to classroom</span>
            </button>
            
            {/* Button 3 */}
            <button className="progress-btn">
              <img src="/images/icon-track-progress.png" alt="" />
              <span>Track progress</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardCard;