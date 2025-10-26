// src/pages/SignupPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css'; // We'll create this CSS file next

const SignupPage = () => {
  // State for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Handle form submission (connect to backend)
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return; // Stop submission if passwords don't match
    }

    console.log("Attempting signup with:", { fullName, email, password });

    // !! BACKEND CONNECTION LOGIC !!
    // Replace '/signup' with your actual backend signup endpoint
    fetch('https://testing-p3dv.onrender.com/signup', { // <-- YOUR SIGNUP URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: fullName, email, password }), // Send name, email, password
    })
    .then(response => {
        if (!response.ok) {
           return response.json().then(err => { throw new Error(err.message || `HTTP error! status: ${response.status}`) });
        }
        return response.json();
    })
    .then(data => {
      console.log('Signup Success:', data);
      alert('Account created successfully! Please login.');
      navigate('/login'); // Redirect to login page after successful signup
    })
    .catch((error) => {
      console.error('Signup Error:', error);
      alert(`Signup failed: ${error.message || 'Please try again.'}`);
    });
  };

  return (
    // Wrapper with the same light blue background as login
    <div className="signup-page-wrapper"> 
      <div className="signup-page-container">
        
        {/* Left Side: Illustration (Reusing login illustration) */}
        <div className="signup-illustration">
          <img src="/images/login-illustration.png" alt="Teaching Illustration" />
        </div>

        {/* Right Side: Form */}
        <div className="signup-form-container">
          <h2>Create an account</h2>
          
          <form onSubmit={handleSignupSubmit}>
            {/* Full Name Input */}
            <div className="form-group-signup">
              <input 
                type="text" 
                placeholder="Full Name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
              />
            </div>

            {/* Email Input */}
            <div className="form-group-signup">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            {/* Password Input with Show/Hide */}
            <div className="form-group-signup password-group">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <i 
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} 
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            {/* Confirm Password Input with Show/Hide */}
            <div className="form-group-signup password-group">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
              <i 
                className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
            
            {/* Remember Me Checkbox */}
            <div className="form-options-signup">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary signup-btn">Create Account</button>
          </form>

          {/* Login Link */}
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignupPage;