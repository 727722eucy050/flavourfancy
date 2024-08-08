import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Taskbar from '../Taskbar/Taskbar'; // Import Taskbar component
import img1 from './images/pack7.avif';
import img3 from './images/pack5.jpg';
import img5 from './images/pack6.jpg';
import img4 from './images/delicious-food-table.jpg';
import img6 from './images/pack8.avif';
import img2 from './images/pack1.avif';
import './Package.css'; // Import CSS for styling

const Package = ({ menuItems = [] }) => {
  const [filter, setFilter] = useState('all'); // Initialize state for filter

  // Hardcoded menu items
  menuItems = [
    { id: 1, name: 'Package1', breakfast: 'Egg And Chicken Cheese Chili Toast', lunch: 'Chicken Briyani', dinner: 'Parota and chicken gravy', price: '₹600', veg: false, rating: 4.5, image: img1 },
    { id: 2, name: 'Package 2', breakfast: 'Pancakes', lunch: 'Vegetable Biryani', dinner: 'Chappathi and Paneer Butter Masala', price: '₹700', veg: true, rating: 4.8, image: img2 },
    { id: 3, name: 'Package 3', breakfast: 'idly with chicken gravy', lunch: 'Non-veg meals', dinner: 'chicken noodles', price: '₹800', veg: false, rating: 4.0, image: img3 },
    { id: 4, name: 'Package 4', breakfast: 'idly ', lunch: 'Veg meals', dinner: 'Aloo Parota', price: '₹650', veg: true, rating: 4.0, image: img4 },
    { id: 5, name: 'Package 5', breakfast: 'Dosa ', lunch: 'Rice with chicken gravy', dinner: 'Chicken Rice', price: '₹700', veg: false, rating: 4.5, image: img5 },
    { id: 6, name: 'Package 6', breakfast: 'Uttappam', lunch: 'Ghee Rice', dinner: 'Idiyappam', price: '₹600', veg: true, rating: 4.7, image: img6 },
  ];

  // Filter items based on the selected filter
  const filteredItems = menuItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'veg' && item.veg) return true;
    if (filter === 'non-veg' && !item.veg) return true;
    if (filter === 'rating' && item.rating >= 4.5) return true;
    return false;
  });

  return (
    <div>
      <Taskbar /> {/* Render Taskbar component */}
      <div className="menu-page">
        <h1>Packages</h1>
        <div className="content">
          <div className="filter-selector">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button> {/* Filter button for all items */}
            <button onClick={() => setFilter('veg')} className={filter === 'veg' ? 'active' : ''}>Veg</button> {/* Filter button for veg items */}
            <button onClick={() => setFilter('non-veg')} className={filter === 'non-veg' ? 'active' : ''}>Non-Veg</button> {/* Filter button for non-veg items */}
            <button onClick={() => setFilter('rating')} className={filter === 'rating' ? 'active' : ''}>Rating > 4.5</button> {/* Filter button for high rating items */}
          </div>
          <div className="menu-items">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-item"> {/* Display each menu item */}
                <Link to={item.name === 'Package 2' ? '/package2' : `/${item.name}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', width: '100%' }}>
                  <img src={item.image} alt={item.name} className="menu-item-image" /> {/* Item image */}
                  <div className="menu-item-content">
                    <h2 style={{ color: 'black' }}>{item.name}</h2> {/* Item name */}
                    <p><strong>Breakfast:</strong> {item.breakfast}</p> {/* Item breakfast */}
                    <p><strong>Lunch:</strong> {item.lunch}</p> {/* Item lunch */}
                    <p><strong>Dinner:</strong> {item.dinner}</p> {/* Item dinner */}
                    <p className="price"><strong>Price:</strong> {item.price}</p> {/* Item price */}
                    <p className="rating"><strong>Rating:</strong> {item.rating} ★</p> {/* Item rating */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <footer className="footer"> {/* Footer section */}
          <div className="footer-column">
            <ul>
              <li>Home</li>
              <li>Packages</li>
              <li>Custom Order</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li>Address :</li>
              <li>ABC street, Coimbatore</li>
              <li>641008</li>
            </ul>
          </div>
          <div className="footer-column social">
            <InstagramIcon /> {/* Instagram icon */}
            <FacebookIcon /> {/* Facebook icon */}
            <TwitterIcon /> {/* Twitter icon */}
            <div>Copyright © 2024, PrimePlates.</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Package; // Export Package component
