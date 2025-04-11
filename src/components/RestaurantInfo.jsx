// src/components/RestaurantInfo.jsx
import React from 'react';
import '../styles/RestaurantInfo.css';
import { restaurantInfo } from '../data/restaurantData';

function RestaurantInfo() {
  return (
    // Changed ID to avoid conflict if multiple sections use #info
    <section id="info-section-anchor" className="restaurant-info-section">
      <div className="info-header">
        <h1>{restaurantInfo.name}</h1>
        <p className="cuisine">{restaurantInfo.cuisine}</p>
        <div className="rating-address">
          <span className="rating">
            {/* Using star character directly */}
            <span className="star">★</span> {restaurantInfo.rating.toFixed(1)} ({restaurantInfo.reviewCount}+ ratings)
          </span>
          {/* Displaying first two parts of address */}
          <span className="address-short">{restaurantInfo.address.split(',').slice(0, 2).join(',')}</span>
        </div>
        <p className="timing">Open: {restaurantInfo.timing}</p>
      </div>
      {/* Other components like Map, Gallery, Reviews are placed below this section within the HomePage.jsx layout */}
    </section>
  );
}
export default RestaurantInfo;