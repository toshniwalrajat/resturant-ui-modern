// src/components/ReviewsSection.jsx
import React from 'react';
import '../styles/Reviews.css';

function ReviewsSection({ reviews }) {
  if (!reviews || reviews.length === 0) { return null; }

  return (
    <div className="reviews-section">
      <h3>Reviews</h3>
      {reviews.map(review => (
        <div key={review.id} className="review-card">
          <div className="review-header">
            <span className="review-user">{review.user}</span>
            <span className="review-rating">
                <span className="star">★</span> {review.rating}/5
            </span>
          </div>
          <p className="review-comment">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
export default ReviewsSection;