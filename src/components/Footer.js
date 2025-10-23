// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer-container">
            {/* Column 1: Logo & Socials */}
            <div className="footer-col">
                <a href="#" className="footer-logo">
                    <img src="/images/logo.png" alt="SmartSync Logo" />
                    SmartSync
                </a>
                <p>Making Learning Smarter, Faster, and More Connected Than Ever Before.</p>
                <p>Follow us</p>
                <div className="footer-socials">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Teachers Dashboard</a></li>
                    <li><a href="#">Create a classroom</a></li>
                    <li><a href="#">Create a quiz</a></li>
                </ul>
            </div>

            {/* Column 3: More Links */}
            <div className="footer-col">
                <h4>More</h4>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Signup</a></li>
                </ul>
            </div>

            {/* Column 4: Address */}
            <div className="footer-col">
                <h4>Address</h4>
                <p>CIN: UXXXXXXX</p>
                <p>SmartSync Innovations Pvt. Ltd. Office No. 123, ABC Tower, Example Rd, New Delhi, 110001, India</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2025 SmartSync. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;