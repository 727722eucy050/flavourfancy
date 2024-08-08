import React from 'react';
import { useNavigate } from 'react-router-dom';
import Taskbar from '../Taskbar/Taskbar';
import './Package1.css';
import img from './images/break1.avif';
import img1 from './images/pancake.avif';
import img2 from './images/vegbriyani.jpg';
import img3 from './images/paneer.avif';
const mealData = {
  breakfast: { name: 'Pancakes', description: 'Fluffy pancakes with maple syrup.', price: 'RS.150', image: 'path/to/pancakes.jpg' },
  lunch: { name: 'Vegetable Biryani', description: 'Fragrant basmati rice with vegetables.', price: 'RS.250', image: 'path/to/vegetable_biryani.jpg' },
  dinner: { name: 'Chappathi and Paneer Butter Masala', description: 'Paneer cubes in a creamy tomato sauce.', price: 'RS.300', image: 'path/to/paneer_butter_masala.jpg' }
};

const Package2 = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/order1', { state: mealData });
  };

  return (
    <div>
      <Taskbar />
      <div className="package-container">
        <div className="package-content">
          <h1>Package 2</h1>
          <div className="meal-details">
            <div className="meal">
              <h2>Breakfast</h2>
              <img src={img1} alt={mealData.breakfast.name} />
              <p>Name: {mealData.breakfast.name}</p>
              <p>Description: {mealData.breakfast.description}</p>
              <p>Price: {mealData.breakfast.price}</p>
            </div>
            <div className="meal">
              <h2>Lunch</h2>
              <img src={img2} alt={mealData.lunch.name} />
              <p>Name: {mealData.lunch.name}</p>
              <p>Description: {mealData.lunch.description}</p>
              <p>Price: {mealData.lunch.price}</p>
            </div>
            <div className="meal">
              <h2>Dinner</h2>
              <img src={img3} alt={mealData.dinner.name} />
              <p>Name: {mealData.dinner.name}</p>
              <p>Description: {mealData.dinner.description}</p>
              <p>Price: {mealData.dinner.price}</p>
            </div>
          </div>
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Package2;
