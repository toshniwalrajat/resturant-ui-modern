// src/components/PhotoGallery.jsx
import React from 'react';
import '../styles/PhotoGallery.css';

function PhotoGallery({ photos }) {
  if (!photos || photos.length === 0) { return null; }

  return (
    <div className="photo-gallery">
      <h3>Gallery</h3>
      <div className="gallery-grid">
        {photos.map(photo => (
          <div key={photo.id} className="gallery-item">
             {/* ** Ensure photo.url points to existing images ** */}
             <img
                src={photo.url}
                alt={photo.caption || 'Restaurant Photo'}
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; /* Hide broken image placeholder */ }}
             />
          </div>
        ))}
      </div>
    </div>
  );
}
export default PhotoGallery;