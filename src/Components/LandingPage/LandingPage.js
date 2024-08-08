import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to PrimePlates</h1>
        <p>Select your role to proceed</p>
        <div className="buttons">
          <Link to="/adminlogin" className="btn admin-btn">Admin Login</Link>
          <Link to="/signin" className="btn user-btn">User Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
