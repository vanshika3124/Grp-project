// src/components/InfoCards.js
import React from 'react';
// Import your icons
// import Icon1 from '../assets/icon-quiz.png';
// import Icon2 from '../assets/icon-session.png';
// import Icon3 from '../assets/icon-manage.png';

const Card = ({ icon, title, text }) => {
    return (
        <div className="card">
            <img src={icon} alt={title} className="card-icon" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

const InfoCards = () => {
    // Placeholder paths - REPLACE THESE
    const icon1_path = "placeholder-icon-1.png";
    const icon2_path = "placeholder-icon-2.png";
    const icon3_path = "placeholder-icon-3.png";

    return (
        <section className="info-cards">
            <div className="container cards-container">
                <Card 
                    icon={icon1_path /* Use {Icon1} once imported */}
                    title="Quiz Space"
                    text="Easy analysis with live quiz sessions"
                />
                <Card 
                    icon={icon2_path /* Use {Icon2} once imported */}
                    title="Live Session"
                    text="Engage with your students in real-time learning"
                />
                <Card 
                    icon={icon3_path /* Use {Icon3} once imported */}
                    title="Easy Management"
                    text="Manage your classroom and students"
                />
            </div>
        </section>
    );
}

export default InfoCards;