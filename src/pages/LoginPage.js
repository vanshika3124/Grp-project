// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Make sure Link and useNavigate are imported
import './LoginPage.css'; // Make sure the CSS is imported

const LoginPage = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Hook for redirecting after login
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent default page reload
    console.log("Attempting login with:", { email, password }); // Log for debugging

    // Send data to your backend
    fetch('https://testing-p3dv.onrender.com/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }), // Send email and password
    })
    .then(response => {
        // Check if the response status is OK (e.g., 200)
        if (!response.ok) { 
            // If not OK, try to parse the error message from the backend
            return response.json().then(err => { 
                // Throw an error with the message from backend or a default one
                throw new Error(err.message || `Login failed! Status: ${response.status}`) 
            });
        }
        // If response is OK, parse the JSON data (like the token)
        return response.json(); 
    })
    .then(data => {
      console.log('Backend Response:', data); // Log the successful response
      // Check if the backend sent a token
      if (data.token) {
        localStorage.setItem('token', data.token); // Store the token
        alert('Login Successful!');
        navigate('/'); // Redirect to the Home page
        window.location.reload(); // Force a reload to update Navbar and Home content
      } else {
        // If no token, show the error message from backend or a default one
        alert(data.message || 'Login failed. Please check credentials.');
      }
    })
    .catch((error) => {
      // Catch any errors during the fetch or JSON parsing
      console.error('Login Error:', error);
      // Show the specific error message caught
      alert(`Login failed: ${error.message || 'Please check your connection or credentials.'}`);
    });
  };

  return (
    // Main wrapper with light blue background
    <div className="login-page-wrapper-new"> 
      <div className="login-page-container">
        
        {/* Left Side: Illustration */}
        <div className="login-illustration">
          <img src="/images/login-illustration.png" alt="Teaching Illustration" />
        </div>

        {/* Right Side: Form */}
        <div className="login-form-container">
          <h2>Signin</h2>
          
          <form onSubmit={handleLoginSubmit}>
            {/* Email Input group */}
            <div className="form-group-new">
              <i className="fas fa-user form-icon"></i> {/* Icon */}
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required // Make field mandatory
              />
            </div>
            
            {/* Password Input group */}
            <div className="form-group-new">
              <i className="fas fa-lock form-icon"></i> {/* Icon */}
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required // Make field mandatory
              />
            </div>
            
            {/* Remember Me Checkbox */}
            <div className="form-options-new">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              {/* No Forgot Password link */}
            </div>
            
            {/* Login Button */}
            <button type="submit" className="btn btn-primary login-btn-new">Login</button>
          </form>

          {/* Divider */}
          <div className="divider">Or continue with</div>

          {/* Google Button */}
          <button className="google-btn">
            <img src="/images/google-logo.png" alt="Google" />
            Google
          </button>

          {/* Link to Signup page */}
          <p className="signup-link">
            Didn't have an account? <Link to="/signup">Create an account</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default LoginPage; // Make sure to export the component
