import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation for accessing location state
import Taskbar from './Taskbar'; // Import Taskbar component
import './Order.css'; // Import CSS for styling

const Order = () => {
  const location = useLocation(); // Use location to get the current state
  const state = location.state || {}; // Fallback to an empty object if state is not provided

  const [deliveryDetails, setDeliveryDetails] = React.useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  }); // Initialize state for delivery details

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({
      ...deliveryDetails,
      [name]: value
    }); // Update state for delivery details
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Order submitted:', deliveryDetails); // Log submitted details
  };

  return (
    <div>
      <Taskbar /> {/* Render Taskbar component */}
      <div className="order-container"> {/* Main container for order summary */}
        <h2>Order Summary</h2>
        <div className="selected-items"> {/* Container for displaying selected items */}
          <h3>Selected Packages</h3>
          <ul>
            <li><strong>Selection:</strong> {state.selection}</li>
            <li><strong>City:</strong> {state.city}</li>
            <li><strong>Count:</strong> {state.count}</li>
            <li><strong>Date:</strong> {state.date}</li>
            <li><strong>Contact:</strong> {state.contact}</li>
            <li><strong>Time:</strong> {state.time}</li>
            <li><strong>Breakfast:</strong> {state.breakfast}</li>
            <li><strong>Lunch:</strong> {state.lunch}</li>
            <li><strong>Dinner:</strong> {state.dinner}</li>
          </ul>
        </div>
        <div className="delivery-details"> {/* Container for delivery details form */}
          <h3>Delivery Details</h3>
          <form onSubmit={handleSubmit}> {/* Form for delivery details */}
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={deliveryDetails.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Address:
              <textarea
                name="address"
                value={deliveryDetails.address}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={deliveryDetails.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={deliveryDetails.email}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Submit Order</button> {/* Button to submit the form */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order; // Export Order component
