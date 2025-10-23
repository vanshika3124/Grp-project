// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container nav-container">
            <a href="#" className="nav-logo">
                {/* USE YOUR LOGO from /public/images/logo.png */}
                <img src="/images/logo.png" alt="SmartSync Logo" />
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