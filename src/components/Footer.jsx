// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { restaurantInfo } from '../data/restaurantData';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer modern">
      <div className="footer-content">
        <div className="footer-section about">
          <h4 className="footer-logo">{restaurantInfo.name}</h4>
          <p>&copy; {currentYear}. All rights reserved.</p>
          {/* Optional: Add social media icons here */}
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            {/* Use hash links for homepage sections */}
            <li><a href="/#menu">Menu</a></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><a href="/#info-section-anchor">Info & Reviews</a></li>
            <li><Link to="/cart">Your Cart</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
            <li><a href="/#location">Location</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          {/* Shorten address for footer */}
          <p>{restaurantInfo.address.split(',').slice(0, 3).join(',') + '...'}</p>
          <p>Phone: {restaurantInfo.phone}</p>
        </div>
      </div>
      <div className="footer-bottom">
         <p>Designed inspired by modern food delivery platforms.</p>
      </div>
    </footer>
  );
}

export default Footer;