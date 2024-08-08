// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom for navigation
import img from './images/food1.webp'; // Import image for the signup page
import './Signup.css'; // Import CSS for styling

const Signup = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle signup form submission
  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log({ username, email, password }); // Log user input for debugging
    // Assuming signup is successful, navigate to home page
    navigate('/home');
  };

  return (
    <div className="signup-container">
      <div className="image-section">
        <img id="img" src={img} alt="Pizza" /> {/* Display image */}
      </div>
      <div className="form-section">
        <form onSubmit={handleSignup}> {/* Form submission handler */}
          <div id="head">
            <h2>Sign Up</h2> {/* Sign up header */}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button> {/* Submit button */}
        </form>
      </div>
    </div>
  );
};

export default Signup; // Export Signup component
