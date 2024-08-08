import React from 'react';
import { useNavigate } from 'react-router-dom';
import Taskbar from '../Taskbar/Taskbar'; // Import Taskbar component
import './Package1.css'; // Import CSS for styling
import img from './images/break1.avif'; // Import image for breakfast
import img1 from './images/cbriyani.avif'; // Import image for lunch
import img2 from './images/parota.avif'; // Import image for dinner

// Meal data for the package
const mealData = {
  breakfast: { name: 'Egg And Chicken Cheese Chili Toast', description: 'A toast made of chicken and egg', price: 'RS.100', image: 'path/to/pancakes.jpg' },
  lunch: { name: 'Chicken Biryani', description: 'Fragrant basmati rice with chicken.', price: 'RS.250', image: 'path/to/vegetable_biryani.jpg' },
  dinner: { name: 'Parota and chicken gravy', description: 'A juicy chicken curry served with parota.', price: 'RS.250', image: 'path/to/paneer_butter_masala.jpg' }
};

const Package1 = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle submit button click
  const handleSubmit = () => {
    navigate('/order1', { state: mealData }); // Navigate to order1 page with mealData
  };

  return (
    <div>
      <Taskbar /> {/* Render Taskbar component */}
      <div className="package-container">
        <div className="package-content">
          <h1>Package 1</h1>
          <div className="meal-details">
            <div className="meal">
              <h2>Breakfast</h2>
              <img src={img} alt={mealData.breakfast.name} /> {/* Display breakfast image */}
              <p>Name: {mealData.breakfast.name}</p> {/* Display breakfast name */}
              <p>Description: {mealData.breakfast.description}</p> {/* Display breakfast description */}
              <p>Price: {mealData.breakfast.price}</p> {/* Display breakfast price */}
            </div>
            <div className="meal">
              <h2>Lunch</h2>
              <img src={img1} alt={mealData.lunch.name} /> {/* Display lunch image */}
              <p>Name: {mealData.lunch.name}</p> {/* Display lunch name */}
              <p>Description: {mealData.lunch.description}</p> {/* Display lunch description */}
              <p>Price: {mealData.lunch.price}</p> {/* Display lunch price */}
            </div>
            <div className="meal">
              <h2>Dinner</h2>
              <img src={img2} alt={mealData.dinner.name} /> {/* Display dinner image */}
              <p>Name: {mealData.dinner.name}</p> {/* Display dinner name */}
              <p>Description: {mealData.dinner.description}</p> {/* Display dinner description */}
              <p>Price: {mealData.dinner.price}</p> {/* Display dinner price */}
            </div>
          </div>
          <button className="submit-button" onClick={handleSubmit}>Submit</button> {/* Submit button */}
        </div>
      </div>
    </div>
  );
};

export default Package1; // Export Package1 component
