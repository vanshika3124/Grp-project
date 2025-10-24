// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container nav-container">
            {/* Logo (Stays the same) */}
            <a href="#" className="nav-logo">
                <img src="/images/logo.png" alt="SmartSync Logo" />
                SmartSync
            </a>

            {/* --- NEW WRAPPER for links and button --- */}
            <div className="nav-right">
                <ul className="nav-menu">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Classroom</a></li>
                    <li><a href="#">Quiz</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
                <a href="#" className="btn btn-green">Logout</a>
            </div>
            {/* --- END NEW WRAPPER --- */}

        </div>
    </nav>
  )
}

export default Navbar;