import React, { useState } from 'react'; // Import React library and useState hook
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link from react-router-dom for navigation
import './AdminLogin.css'; // Import CSS file for styling
import bg from './images/image.png'; // Import background image

const AdminLogin = () => {
  const [email, setEmail] = useState(''); // State for storing email input
  const [password, setPassword] = useState(''); // State for storing password input
  const [rememberMe, setRememberMe] = useState(false); // State for storing remember me checkbox status
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log({ email, password }); // Log email and password (for demonstration purposes)
    // Assuming login is successful, navigate to home page
    navigate('/home');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bg})` }}> {/* Login container with background image */}
      <div className="form-section"> {/* Form section container */}
        <form onSubmit={handleLogin}> {/* Form element with submission handler */}
          <h2>Login</h2> {/* Form title */}
          <div className="form-group"> {/* Form group for username input */}
            <label htmlFor="email">Username</label> {/* Label for username input */}
            <input
              type="text"
              id="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              required
            />
          </div>
          <div className="form-group"> {/* Form group for password input */}
            <label htmlFor="password">Password</label> {/* Label for password input */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              required
            />
          </div>
          <div className="form-options"> {/* Form options container */}
            <a href="/forgot-password">Forgot Password?</a> {/* Link to forgot password page */}
          </div>
          <button type="submit" className="login-button">Login</button> {/* Login button */}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; // Export the AdminLogin component
