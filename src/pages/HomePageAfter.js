// src/pages/HomePageAfter.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- 1. IMPORT KARO

// Apne saare components import karo
import Hero from '../components/Hero';
import DashboardCard from '../components/StartTeachingAfter'; // "Anjali Singh" waala
import HowToTeach from '../components/HowToTeach';
import Reviews from '../components/Reviews';
import FAQs from '../components/FAQs';
import Benefits from '../components/Benefits';
import Stats from '../components/Stats';

// Yeh aapka Home Page (Logged-in) hai
const HomePageAfter = () => {
  const navigate = useNavigate(); // <-- 2. HOOK KO USE KARO

  // Yeh function navigation karega
  const handleCreateQuizClick = () => {
    navigate('/createquiz'); // <-- YEH AAPKA ROUTE HAI
  };

  return (
    <>
      {/* 3. YAHAN FUNCTION PASS KIYA */}
      <Hero onQuizClick={handleCreateQuizClick} /> 
      
      <DashboardCard />
      <HowToTeach />
      <Reviews />
      <FAQs />
      <Benefits />
      <Stats />
    </>
  );
}

export default HomePageAfter;