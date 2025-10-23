// src/components/Benefits.js
import React from 'react';

const BenefitItem = ({ icon, text }) => {
    return (
        <div className="benefit-item">
            <img src={`/images/${icon}`} alt={text} />
            <h4>{text}</h4>
        </div>
    );
}

const Benefits = () => {
  return (
    <section className="benefits">
        <div className="container">
            <h2 className="section-title">Benefits of Digital Smart Classroom Systems</h2>
            <div className="benefits-container">
                <BenefitItem icon="benefit-icon-1.png" text="Creates engaging environment" />
                <BenefitItem icon="benefit-icon-2.png" text="Improves knowledge retention" />
                <BenefitItem icon="benefit-icon-3.png" text="Boosts teaching skills" />
                <BenefitItem icon="benefit-icon-4.png" text="Suits students with distinct learning styles" />
            </div>
        </div>
    </section>
  )
}

export default Benefits;