import React from "react";

const StartTeaching = () => {
  return (
    <section className="start-teaching">
      <h2 className="start-section-title">
        Start <span>Teaching</span>
      </h2>

      <div className="teaching-profile">
        {/* Left Side - Teacher Image */}
        <div className="teacher-photo">
          <img src="/images/teacher.png" alt="Anjali Singh" />
        </div>

        {/* Center - Profile Info */}
        <div className="teacher-info">
          <h3>Anjali Singh</h3>
          <p>
            You have taken 100+ quizzes.
            <br />2 classrooms. 150 students
          </p>
          <p className="experience"> 15 years+ experience</p>
        </div>

        {/* Right Side - Buttons */}
        <div className="action-buttons">
          <button className="quiz-btn">create a quiz</button>
          <button className="classroom-btn">👥 Go to classroom</button>
          <button className="progress-btn">📈 Track progress</button>
        </div>
      </div>
    </section>
  );
};

export default StartTeaching;
