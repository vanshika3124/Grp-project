// src/components/Navbar.js
import React from 'react';
// Make sure to add your logo to the src/assets folder
// import Logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container nav-container">
            <a href="#" className="nav-logo">
                {/* <img src={Logo} alt="SmartSync Logo" /> */}
                <img src="logo.png" alt="SmartSync Logo" style={{width: '30px', height: '30px'}} />
                SmartSync
            </a>
            <ul className="nav-menu">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Classroom</a></li>
                <li><a href="#">Quiz</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
            <a href="#" className="btn btn-primary">Login</a>
        </div>
    </nav>
  )
}

export default Navbar;