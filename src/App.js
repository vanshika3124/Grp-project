// src/App.js
import React from 'react';
import './App.css'; 

// Import all your components
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import InfoCards from './components/InfoCards';
// import StartTeaching from './components/StartTeaching';
// import HowToTeach from './components/HowToTeach';
// import Reviews from './components/Reviews';
// import FAQs from './components/FAQs';
// import Benefits from './components/Benefits';
// import Stats from './components/Stats';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoCards />
      <StartTeaching />
      <HowToTeach />
      <Reviews />
      <FAQs />
      <Benefits />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;