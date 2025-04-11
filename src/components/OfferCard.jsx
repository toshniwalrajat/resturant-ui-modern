// src/components/OfferCard.jsx
import React from 'react';
import '../styles/Offers.css';

function OfferCard({ offer }) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(offer.code)
      .then(() => alert(`Code "${offer.code}" copied!`))
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div className="offer-card modern">
       <div className="offer-logo-placeholder"> % </div>
      <div className="offer-details">
        <h3 className="offer-title">{offer.title}</h3>
        <p className="offer-description">{offer.description}</p>
         <div className="offer-actions">
            <button onClick={handleCopyCode} className="copy-code-btn" title="Copy coupon code">
                COPY CODE <span className="offer-code">{offer.code}</span>
            </button>
             <p className="offer-validity">{offer.validity}</p>
        </div>
      </div>
    </div>
  );
}
export default OfferCard;