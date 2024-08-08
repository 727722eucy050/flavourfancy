import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import Taskbar from '../Taskbar/Taskbar'; // Import Taskbar component
import './CustomOrder.css'; // Import CSS for styling

function CustomOrder() {
  const [selection, setSelection] = useState(''); // State for storing selection (veg/non-veg)
  const [city, setCity] = useState(''); // State for storing city
  const [count, setCount] = useState(''); // State for storing count
  const [date, setDate] = useState(''); // State for storing date
  const [contact, setContact] = useState(''); // State for storing contact information
  const [time, setTime] = useState(''); // State for storing time
  const [breakfast, setBreakfast] = useState(''); // State for storing selected breakfast
  const [lunch, setLunch] = useState(''); // State for storing selected lunch
  const [dinner, setDinner] = useState(''); // State for storing selected dinner

  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSelectionChange = (event) => {
    setSelection(event.target.value); // Update selection state on change
  };

  const handleCityChange = (event) => {
    setCity(event.target.value); // Update city state on change
  };

  const handleSubmit = () => {
    // Navigate to the Order page with state
    navigate('/order', { state: { 
      selection, city, count, date, contact, time, breakfast, lunch, dinner 
    } });
  };

  return (
    <div>
      <Taskbar /> {/* Render Taskbar component */}
      <div className="container">
        <h1>Custom Order</h1>
        <div className="form-container">
          <div className="form-group">
            <label>
              <input
                type="radio"
                value="veg"
                checked={selection === 'veg'}
                onChange={handleSelectionChange} // Update selection state on change
              />
              Veg
            </label>
            <label>
              <input
                type="radio"
                value="non-veg"
                checked={selection === 'non-veg'}
                onChange={handleSelectionChange} // Update selection state on change
              />
              Non-Veg
            </label>
          </div>
          <div className="form-group">
            <label>City:</label>
            <select value={city} onChange={handleCityChange}> {/* Update city state on change */}
              <option value="Coimbatore">Coimbatore</option>
              <option value="Chennai">Chennai</option>
              <option value="Madurai">Madurai</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <div className="form-group">
            <label>Count:</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)} // Update count state on change
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} // Update date state on change
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)} // Update contact state on change
            />
          </div>
          <div className="form-group">
            <label>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)} // Update time state on change
            />
          </div>
          <h2>Create Your Menu</h2>
          <div className="form-group">
            <label>Breakfast:</label>
            <select value={breakfast} onChange={(e) => setBreakfast(e.target.value)}> {/* Update breakfast state on change */}
              <option value="">Select Breakfast</option>
              <option value="Breakfast 1">Idly</option>
              <option value="Breakfast 2">Dosa</option>
              <option value="Breakfast 1">Poori</option>
              <option value="Breakfast 2">Pongal</option>
              <option value="Breakfast 1">Kichadi</option>
              <option value="Breakfast 2">Sevai</option>
            </select>
          </div>
          <div className="form-group">
            <label>Lunch:</label>
            <select value={lunch} onChange={(e) => setLunch(e.target.value)}> {/* Update lunch state on change */}
              <option value="">Select Lunch</option>
              <option value="Lunch 1">Meals</option>
              <option value="Lunch 2">Briyani</option>
              <option value="Lunch 1">Tomato Rice</option>
              <option value="Lunch 2">Lemon Rice</option>
              <option value="Lunch 1">Mini meals</option>
              <option value="Lunch 2">Ghee Rice</option>
            </select>
          </div>
          <div className="form-group">
            <label>Dinner:</label>
            <select value={dinner} onChange={(e) => setDinner(e.target.value)}> {/* Update dinner state on change */}
              <option value="">Select Dinner</option>
              <option value="Dinner 1">Chapathi</option>
              <option value="Dinner 2">Parota</option>
              <option value="Dinner 1">Noodles</option>
              <option value="Dinner 2">Uttappam</option>
              <option value="Dinner 1">Dosa</option>
              <option value="Dinner 2">Idly</option>
            </select>
          </div>
          <button onClick={handleSubmit}>Submit</button> {/* Submit button triggers handleSubmit */}
        </div>
      </div>
    </div>
  );
}

export default CustomOrder; // Export CustomOrder component
