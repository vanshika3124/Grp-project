// src/components/StartTeaching.js
import React from 'react';

const StartTeaching = () => {
  return (
    <section className="start-teaching">
      <div className="container">
        <h2 className="section-title">Start Teaching</h2>

        {/* Teacher Profile Section */}
        <div className="teaching-profile">
          <div className="profile-card">
            {/* USE YOUR TEACHER PHOTO from /public/images/teacher.png */}
            <img src="/images/teacher.png" alt="Anjali Singh" />
            <h3>Anjali Singh</h3>
            <p>You have successfully created 2 classrooms. 150 students</p>
            <p>⭐ 15 years+ experience</p>
          </div>
          <div className="profile-placeholders">
            <div className="placeholder-box"></div>
            <div className="placeholder-box"></div>
            <div className="placeholder-box"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartTeaching;