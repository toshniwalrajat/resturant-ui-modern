// src/components/LocationMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// Ensure Leaflet CSS is imported once globally (e.g., in main.jsx or index.html)
import '../styles/LocationMap.css';
import L from 'leaflet';

// Fix default marker icon issue for bundlers like Vite
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconRetinaUrl, iconUrl, shadowUrl,
    iconSize: [25, 41], iconAnchor: [12, 41],
    popupAnchor: [1, -34], tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// End marker fix

function LocationMap({ position, address, name }) {
  const isValidPosition = position && typeof position.lat === 'number' && typeof position.lng === 'number';

  return (
    <div id="location" className="location-map-container"> {/* Added id for anchor */}
      <h3>Our Location</h3>
      {isValidPosition ? (
        <>
          <MapContainer center={[position.lat, position.lng]} zoom={16} scrollWheelZoom={false} className="map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position.lat, position.lng]}>
              <Popup>
                <strong>{name}</strong><br />{address}
              </Popup>
            </Marker>
          </MapContainer>
          <p className="map-address">{address}</p>
        </>
      ) : (
        <p className='map-error'>Map location data is unavailable.</p>
      )}
    </div>
  );
}

export default LocationMap;