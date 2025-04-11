// src/pages/OrderTrackingPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import OrderStatusTracker from '../components/OrderStatusTracker';
import '../styles/OrderTracking.css'; // Ensure CSS is imported

function OrderTrackingPage() {
  const { orderId } = useParams(); // Get orderId from URL parameter
  const [currentStatus, setCurrentStatus] = useState('Order Placed'); // Default/Initial status

  // --- Simulation of status updates ---
  useEffect(() => {
    // Only run simulation if there's an orderId
    if (!orderId) return;

    const statuses = ['Order Placed', 'Preparing', 'Out for Delivery', 'Delivered'];
    let index = 0; // Start index

    // Set initial status immediately
    setCurrentStatus(statuses[index]);

    // Set up an interval to cycle through statuses
    const intervalId = setInterval(() => {
      index++;
      if (index < statuses.length) {
        setCurrentStatus(statuses[index]); // Update state
      } else {
        clearInterval(intervalId); // Stop interval when 'Delivered'
      }
    }, 8000); // Adjust interval time (e.g., 8 seconds)

    // Cleanup function: clear interval when component unmounts or orderId changes
    return () => clearInterval(intervalId);

  }, [orderId]); // Dependency array: only re-run effect if orderId changes
  // --- End Simulation ---

  return (
    <div className="page-container order-tracking-page">
      <h2>Track Your Order</h2>
      {orderId ? (
          // Display tracking info if orderId exists
          <>
            <p className="order-id-display">Order ID: <strong>{orderId}</strong></p>
            <OrderStatusTracker currentStatus={currentStatus} />

            {/* Display message when delivered */}
            {currentStatus === 'Delivered' && (
                <p className='order-delivered-message'>Your order has been delivered. Enjoy your meal!</p>
            )}

            {/* Button to go back home */}
            <Link to="/" className='button-primary track-home-btn'>Go to Home</Link>
          </>
      ) : (
          // Display message if no orderId is found in the URL
          <div className='no-order-track'>
            <p>Please place an order first to track it.</p>
            <p>If you have an order ID, ensure it's included in the URL (e.g., /track-order/YOUR_ID).</p>
            <Link to="/" className='button-primary track-home-btn'>Go to Home</Link>
           </div>
      )}
    </div>
  );
}

export default OrderTrackingPage;