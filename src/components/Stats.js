// src/components/Stats.js
import React from 'react';

// Chota component ek single item ke liye
const StatItem = ({ icon, number, label }) => {
  return (
    <div className="stat-item">
      {/* Icon ko /public/images/ se load karega */}
      <img src={`/images/${icon}`} alt={label} />
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}

// Poora Stats section
const Stats = () => {
  return (
    <section className="stats">
      <div className="container stats-container">
        <StatItem icon="icon-cities.png" number="400+" label="Cities" />
        <StatItem icon="icon-schools.png" number="8500+" label="Schools" />
        <StatItem icon="icon-teachers.png" number="1.2million+" label="Teachers" />
      </div>
    </section>
  );
}

export default Stats;