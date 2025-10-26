// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload();
  };

  // Get the current path (e.g., "/", "/login")
  const currentPath = location.pathname;

  // --- 👇 YEH EK HELPER VARIABLE BANA LO ---
  // Isse check ho jayega ki hum login ya signup page par hain ya nahi
  const isAuthPage = currentPath === '/login' || currentPath === '/signup';

  return (
    <nav className="navbar">
        <div className="container nav-container">
            <Link to="/" className="nav-logo">
                <img src="/images/logo.png" alt="SmartSync Logo" />
                SmartSync
            </Link>

            <div className="nav-right">
                <ul className="nav-menu">

                    {/* --- 1. DASHBOARD LOGIC (CHANGED) --- */}
                    {/* Yeh 'homepage before' aur 'after' dono pe dikhega, 
                        lekin login/signup pe NAHI dikhega */}
                    {!isAuthPage && <li><Link to="/dashboard">Dashboard</Link></li>}
                    
                    {/* Yeh links hamesha dikhenge */}
                    <li><Link to="/classroom">Classroom</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                </ul>

                {/* --- 2. LOGIN/LOGOUT LOGIC (CHANGED) --- */}
                {/* Yeh poora block ab login/signup page par HIDE ho jayega */}
                {!isAuthPage && (
                  isLoggedIn ? (
                    // Homepage After (Logged In)
                    <button onClick={handleLogout} className="btn btn-green">Logout</button>
                  ) : (
                    // Homepage Before (Logged Out)
                    <Link to="/login" className="btn btn-green">Login</Link>
                  )
                )}
                {/* ------------------------------------- */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar;