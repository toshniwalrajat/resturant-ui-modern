// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import '../styles/Cart.css'; // Ensure CSS is imported

function CartPage() {
  const { cartItems, cartTotal, clearCart } = useCart();

  // Example Fees/Charges Calculation (adjust logic as needed)
  const deliveryFeeThreshold = 500; // INR - Free delivery above this amount
  const baseDeliveryFee = 40; // INR
  const gstRate = 0.05; // 5%
  const platformFeeFixed = 5; // INR

  const deliveryFee = cartTotal > deliveryFeeThreshold || cartTotal === 0 ? 0 : baseDeliveryFee;
  const gst = cartTotal * gstRate;
  const platformFee = cartTotal > 0 ? platformFeeFixed : 0;
  const finalTotal = cartTotal + deliveryFee + gst + platformFee;

  return (
    <div className="page-container cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        // Display message and link when cart is empty
        <div className="empty-cart-message">
            <p>Your cart feels light!</p>
            <Link to="/" className='button-primary'>Browse Menu</Link>
        </div>
      ) : (
        // Display cart items and summary when not empty
        <>
          {/* List of items in the cart */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Bill details summary */}
          <div className="cart-summary">
            <h3>Bill Details</h3>
            <div className="summary-row">
              <span>Item Total</span>
              <span>₹{cartTotal.toFixed(0)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(0)}`}</span>
            </div>
             <div className="summary-row">
              <span>Platform Fee</span>
              <span>₹{platformFee.toFixed(0)}</span>
            </div>
             <div className="summary-row">
              <span>GST & Restaurant Charges</span>
              <span>₹{gst.toFixed(0)}</span>
            </div>
            {/* Final Payable Amount */}
            <div className="summary-row total">
              <span>TO PAY</span>
              <span>₹{finalTotal.toFixed(0)}</span>
            </div>
            {/* Proceed to Checkout Button */}
            <Link to="/checkout" className="button-primary checkout-btn">Proceed to Checkout</Link>

             {/* Optional: Add Clear Cart button - place carefully */}
             {/* <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button> */}
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;