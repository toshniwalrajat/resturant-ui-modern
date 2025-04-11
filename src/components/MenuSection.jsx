// src/components/MenuSection.jsx
import React from 'react';
import MenuItemCard from './MenuItemCard';
import '../styles/Menu.css';

function MenuSection({ items }) {
  if (!items) { return <p className="no-items-message">Loading menu...</p>; }
  if (items.length === 0) { return <p className="no-items-message">No menu items match the current filter.</p>; }

  return (
    <div className="menu-items-container">
        {items.map((item) => (
            <React.Fragment key={item.id}>
                <MenuItemCard item={item} />
            </React.Fragment>
            // Note: CSS :last-child selector in Menu.css handles last item's border
        ))}
    </div>
  );
}
export default MenuSection;