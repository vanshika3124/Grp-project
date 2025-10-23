// src/App.js
import React from 'react';
import './App.css'; 

// Import your components
import Navbar from './components/Navbar';
import Hero from './components/hero';
import InfoCards from './components/InfoCards';
import StartTeaching from './components/StartTeaching'; // 1. IMPORT IT

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoCards />
      <StartTeaching /> {/* 2. ADD IT HERE */}

      {/* ... OTHER COMPONENTS WILL GO HERE ... */}
      
    </div>
  );
}

export default App;