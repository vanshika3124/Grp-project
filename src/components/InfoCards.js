// src/components/InfoCards.js
import React from 'react';

const Card = ({ icon, title, text }) => {
    return (
        <div className="card">
            {/* USE YOUR ICON from /public/images/icon-name.png */}
            <img src={`/images/${icon}`} alt={title} className="card-icon" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

const InfoCards = () => {
    return (
        <section className="info-cards">
            <div className="container cards-container">
                <Card 
                    icon="icon-quiz.png" // Replace with your icon name
                    title="Quiz Space"
                    text="Easy analysis with live quiz sessions"
                />
                <Card 
                    icon="icon-session.png" // Replace with your icon name
                    title="Live Session"
                    text="Engage with your students in real-time learning"
                />
                <Card 
                    icon="icon-manage.png" // Replace with your icon name
                    title="Easy Management"
                    text="Manage your classroom and students"
                />
            </div>
        </section>
    );
}

export default InfoCards;