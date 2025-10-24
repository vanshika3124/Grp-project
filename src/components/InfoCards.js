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
                    title="Real time quizes"
                    text="Live quiz sessions with instant 
feedback and timer-based 
questions"
                />
                <Card 
                    icon="icon-session.png" // Replace with your icon name
                    title="ML Analytics"
                    text="Insights into student performance and learning patterns"
                />
                <Card 
                    icon="icon-manage.png" // Replace with your icon name
                    title="Easy Management"
                    text="Simple quiz creation and student participation."
                />
            </div>
        </section>
    );
}

export default InfoCards;