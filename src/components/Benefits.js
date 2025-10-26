// src/components/Benefits.js
import React from 'react';

// Chota component ek single item ke liye
const BenefitItem = ({ icon, text }) => {
  return (
    <div className="benefit-item">
      {/* Icon ko /public/images/ se load karega */}
      <img src={`/images/${icon}`} alt={text} />
      <h4>{text}</h4>
    </div>
  );
}

// Poora Benefits section
const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <h2 className="section-title">Benefits of Digital Smart Classroom Systems</h2>
        
        <div className="benefits-container">
          {/* Row 1 */}
          <BenefitItem icon="benefit-icon-1.png" text="Creates engaging environment" />
          <BenefitItem icon="benefit-icon-2.png" text="Improves knowledge retention" />
          <BenefitItem icon="benefit-icon-3.png" text="Boosts teaching skills" />
          {/* Row 2 */}
          <BenefitItem icon="benefit-icon-4.png" text="Makes learning fun" />
          <BenefitItem icon="benefit-icon-5.png" text="Eases access to information" />
          <BenefitItem icon="benefit-icon-6.png" text="Suits students with distinct learning needs" />
        </div>

      </div>
    </section>
  );
}

export default Benefits;