// src/pages/OffersPage.jsx
import React from 'react';
import OfferCard from '../components/OfferCard';
import { offers } from '../data/offerData'; // Import offer data
import '../styles/Offers.css'; // Ensure CSS is imported

function OffersPage() {
  return (
    <div className="page-container offers-page">
      <h2>Current Offers & Deals</h2>
      {offers.length > 0 ? (
        <div className="offers-grid">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      ) : (
        // Display message if no offers defined in offerData.js
        <p className="no-offers-message">No current offers available. Please check back later!</p>
      )}
    </div>
  );
}
// Add .no-offers-message styles in Offers.css if desired:
// .no-offers-message { text-align: center; color: var(--text-secondary); padding: 2rem; }

export default OffersPage;