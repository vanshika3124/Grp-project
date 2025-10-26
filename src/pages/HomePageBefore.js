// src/pages/HomePageBefore.js
import React from 'react';

// Apne saare landing page components import karo
import Hero from '../components/Hero';
import InfoCards from '../components/InfoCards'; // YEH ZAROORI HAI
import StartTeaching from '../components/StartTeaching'; // "Your Name" waala
import HowToTeach from '../components/HowToTeach';
import Reviews from '../components/Reviews';
import FAQs from '../components/FAQs';
import Benefits from '../components/Benefits';
import Stats from '../components/Stats';

// Yeh aapka Home Page (Logged-out) hai
const HomePageBefore = () => {
  return (
    <> {/* React Fragment */}
      <Hero />
      <StartTeaching />
      <HowToTeach />
      <Reviews />
      <FAQs />
      <Benefits />
      <Stats />
    </>
  );
}

export default HomePageBefore;