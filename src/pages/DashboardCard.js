// src/pages/DashboardPage.js
import React from 'react';

// Saare components jo Home Page par bhi hain
import Hero from '../components/Hero';
import HowToTeach from '../components/HowToTeach';
import Reviews from '../components/Reviews';
import FAQs from '../components/FAQs';
import Benefits from '../components/Benefits';
import Stats from '../components/Stats';

// Naya "Anjali Singh" wala card
import DashboardCard from '../components/DashboardCard'; 

const DashboardPage = () => {
  return (
    <>
      {/* Hum Home Page ke saare components reuse kar rahe hain */}
      <Hero />
      
      {/* Bas 'StartTeaching' ki jagah 'DashboardCard' use kar rahe hain */}
      <DashboardCard /> 
      
      <HowToTeach />
      <Reviews />
      <FAQs />
      <Benefits />
      <Stats />
    </>
  );
}

export default DashboardPage;