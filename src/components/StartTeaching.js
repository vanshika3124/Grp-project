// src/components/StartTeaching.js
import React from 'react';
// Import your images
// import TeacherImg from '../assets/teacher.png';
// import HowToImg from '../assets/how-to.png';

const StartTeaching = () => {
  return (
    <section className="start-teaching">
      <div className="container">
        <h2 className="section-title">Start Teaching</h2>

        {/* Teacher Profile Section */}
        <div className="teaching-profile">
          <div className="profile-card">
            <div className="profile-image">
              {/* <img src={TeacherImg} alt="Anjali Singh" /> */}
              <img src="placeholder-teacher.png" alt="Anjali Singh" style={{borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto'}} />
            </div>
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

        {/* How to Teach Section */}
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
              {/* <img src={HowToImg} alt="How to teach diagram" /> */}
              <img src="placeholder-how-to.png" alt="How to teach diagram" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartTeaching;