// src/components/OrderStatusTracker.jsx
import React from 'react';
import '../styles/OrderTracking.css';

function OrderStatusTracker({ currentStatus = 'Preparing' }) {
  const statuses = ['Order Placed', 'Preparing', 'Out for Delivery', 'Delivered'];
  const currentStatusIndex = statuses.indexOf(currentStatus);

  if (currentStatusIndex === -1) {
      console.warn("Invalid status in OrderStatusTracker:", currentStatus);
  }

  return (
    <div className="order-status-tracker">
      <h3>Order Status</h3>
      <div className="status-bar">
        {statuses.map((status, index) => {
          let pointState = 'pending';
          if (index < currentStatusIndex) pointState = 'completed';
          else if (index === currentStatusIndex) pointState = 'current';

          return (
            <div key={status} className={`status-point ${pointState}`}>
              <div className="status-circle"></div>
              <div className="status-label">{status}</div>
            </div>
          );
        })}
        <div className="status-line-bg"></div>
        <div
          className="status-line-progress"
          style={{ width: `${Math.max(0, currentStatusIndex) / (statuses.length - 1) * 100}%` }}
        ></div>
      </div>
      <p className="current-status-text">Current Status: <strong>{currentStatus}</strong></p>
      <p className="estimated-delivery">Estimated Delivery: Today, 5:30 PM</p> {/* Placeholder */}
    </div>
  );
}

export default OrderStatusTracker;