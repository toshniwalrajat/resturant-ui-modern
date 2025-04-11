// src/pages/HomePage.jsx
import React, { useState, useMemo } from 'react';
import RestaurantInfo from '../components/RestaurantInfo';
import FilterButtons from '../components/FilterButtons';
import MenuSection from '../components/MenuSection';
import PhotoGallery from '../components/PhotoGallery';
import ReviewsSection from '../components/ReviewsSection';
import LocationMap from '../components/LocationMap';

import { menuItems } from '../data/menuData';
import { restaurantInfo } from '../data/restaurantData'; // Import restaurant data

function HomePage() {
  const [filter, setFilter] = useState('all'); // 'all', 'veg', 'non-veg'

  // Filter menu items based on the current filter state
  const filteredMenuItems = useMemo(() => {
    if (filter === 'all') {
      return menuItems;
    }
    // Add filtering logic based on item.type
    return menuItems.filter(item => item.type === filter);
    // Add other filters like bestseller if needed
    // if (filter === 'bestseller') {
    //   return menuItems.filter(item => item.isBestSeller);
    // }
  }, [filter]); // Re-calculate only when filter changes

  return (
    <div className="page-container homepage">
      {/* Top section displaying restaurant info */}
      <RestaurantInfo />

      {/* Menu Section with anchor for navigation */}
      <section id="menu" className="menu-anchor-section">
        <h2>Menu</h2>
        <FilterButtons currentFilter={filter} setFilter={setFilter} />
        <MenuSection items={filteredMenuItems} />
      </section>

      {/* Combined Info Section with anchor for navigation */}
       <section id="info" className="info-anchor-section">
           {/* Merged Info Section - Gallery, Reviews, Map */}
           <PhotoGallery photos={restaurantInfo.photos} />
           <ReviewsSection reviews={restaurantInfo.reviews} />
           <LocationMap
                position={restaurantInfo.location}
                address={restaurantInfo.address}
                name={restaurantInfo.name}
            />
       </section>

      {/* Anchor for Offers section if included here, otherwise handled by OffersPage route */}
      {/* <section id="offers"> ... </section> */}
      {/* Note: The <section id="info"> above uses the same name as the hash link.
           It might be better to use the RestaurantInfo section ID: id="info-section-anchor"
           and update the hash links in Header/Footer accordingly for clarity.
           Same applies to the location anchor <div id="location"> in LocationMap.jsx.
       */}

    </div>
  );
}

export default HomePage;