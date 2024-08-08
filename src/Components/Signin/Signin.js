// src/components/Signin.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate for navigation and Link for routing
import './Signin.css'; // Import CSS for styling
import bg from './images/food2.jpg'; // Import background image

const Signin = () => {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log({ email, password, rememberMe }); // Log user input for debugging
    // Assuming login is successful, navigate to home page
    navigate('/home');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bg})` }}> {/* Set background image */}
      <div className="form-section">
        <form onSubmit={handleLogin}> {/* Form submission handler */}
          <h2>Login</h2> {/* Login header */}
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="Username"
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
          <div className="form-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)} // Update rememberMe state
              />
              Remember me
            </label>
            <a href="/forgot-password">Forgot Password?</a> {/* Link to forgot password page */}
          </div>
          <button type="submit" className="login-button">Login</button> {/* Submit button */}
          <div className="register-link">
            Don't have an account? <Link to="/signup">Register</Link> {/* Link to signup page */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin; // Export Signin component
