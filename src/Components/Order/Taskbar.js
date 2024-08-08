import React from 'react'; // Import React library
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import './Taskbar.css'; // Import CSS file for styling

const Taskbar = () => {
  return (
    <header className="title-bar"> {/* Header container with class for styling */}
      <div className="logo">PrimePlates</div> {/* Logo section */}
      <nav> {/* Navigation container */}
        <ul> {/* List container for navigation items */}
          <li><Link to="/home">Home</Link></li> {/* Link to the Home page */}
          <li><Link to="/package">Package</Link></li> {/* Link to the Package page */}
          <li><Link to="/customorder">Custom Menu</Link></li> {/* Link to the Custom Menu page */}
          <li><Link to="/aboutus">About Us</Link></li> {/* Link to the About Us page */}
          <li><Link to="/signin">Login</Link></li> {/* Link to the Login page */}
        </ul>
      </nav>
    </header>
  );
};

export default Taskbar; // Export the Taskbar component
