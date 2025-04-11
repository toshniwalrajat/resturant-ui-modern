// src/components/FilterButtons.jsx
import React from 'react';
import '../styles/Menu.css';

function FilterButtons({ currentFilter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
      <button className={`filter-btn ${currentFilter === 'veg' ? 'active' : ''}`} onClick={() => setFilter('veg')}>
        <span className="diet-indicator veg" title="Vegetarian">●</span> Veg
      </button>
      <button className={`filter-btn ${currentFilter === 'non-veg' ? 'active' : ''}`} onClick={() => setFilter('non-veg')}>
         <span className="diet-indicator non-veg" title="Non-Vegetarian">●</span> Non-Veg
      </button>
      {/* Add more filters like 'Bestseller' here if needed */}
    </div>
  );
}
export default FilterButtons;