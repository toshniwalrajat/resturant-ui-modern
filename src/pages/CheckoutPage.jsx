// src/pages/CheckoutPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import PaymentOptions from '../components/PaymentOptions';
import '../styles/Checkout.css'; // Ensure CSS is imported

function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Redirect to cart if it becomes empty (e.g., using back button after order)
  useEffect(() => {
    if (cartItems.length === 0) {
      console.log("Cart is empty, redirecting to cart page.");
      navigate('/cart');
    }
  }, [cartItems, navigate]);


  // Simulate placing the order
  const handlePlaceOrder = (event) => {
    event.preventDefault(); // Prevent default form submission

    // ** Add form validation here in a real app **
    // e.g., check if address fields are filled, payment method selected etc.

    console.log('Placing order (simulation)...');
    // --- Simulation ---
    alert('Order Placed Successfully! (Simulation)');
    const simulatedOrderId = `URBNS-${Date.now().toString().slice(-6)}`; // Generate fake ID
    clearCart(); // Empty the cart after successful simulated order
    navigate(`/track-order/${simulatedOrderId}`); // Navigate to tracking page
    // --- End Simulation ---
  };

  // Recalculate totals for display (match CartPage logic)
  const deliveryFeeThreshold = 500;
  const baseDeliveryFee = 40;
  const gstRate = 0.05;
  const platformFeeFixed = 5;

  const deliveryFee = cartTotal > deliveryFeeThreshold || cartTotal === 0 ? 0 : baseDeliveryFee;
  const gst = cartTotal * gstRate;
  const platformFee = cartTotal > 0 ? platformFeeFixed : 0;
  const finalTotal = cartTotal + deliveryFee + gst + platformFee;

  // Render a fallback if cartItems is empty before useEffect redirects
   if (cartItems.length === 0) {
       return <div className="page-container checkout-page"><p>Your cart is empty. Redirecting...</p></div>;
   }

  return (
    <div className="page-container checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handlePlaceOrder}>
         {/* Section 1: Delivery Address */}
         <div className="checkout-section delivery-address">
             <h3>Delivery Address</h3>
             {/* Use labels for better accessibility */}
             <label htmlFor="fullName" className="visually-hidden">Full Name</label>
             <input id="fullName" type="text" placeholder="Full Name" required aria-label="Full Name"/>

             <label htmlFor="address" className="visually-hidden">Address</label>
             <textarea id="address" placeholder="Complete Address (House No, Street, Landmark)" rows="3" required aria-label="Street Address"></textarea>

             <label htmlFor="city" className="visually-hidden">City</label>
             <input id="city" type="text" placeholder="City (e.g., Pune)" defaultValue="Pune" required aria-label="City"/>

             <label htmlFor="pincode" className="visually-hidden">Pincode</label>
             <input id="pincode" type="text" placeholder="Pincode" required aria-label="Pincode" inputMode='numeric' maxLength="6"/>

             <label htmlFor="phone" className="visually-hidden">Phone Number</label>
             <input id="phone" type="tel" placeholder="Phone Number" required aria-label="Phone Number" inputMode='tel' maxLength="10"/>
         </div>

         {/* Section 2: Order Summary */}
         <div className="checkout-section order-summary-checkout">
            {/* Title removed, implied */}
            {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toFixed(0)}</span>
                </div>
            ))}
             <hr/>
             {/* Display calculated fees consistently */}
             <div className="summary-row"><span>Item Total</span><span>₹{cartTotal.toFixed(0)}</span></div>
             <div className="summary-row"><span>Delivery Fee</span><span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(0)}`}</span></div>
             <div className="summary-row"><span>Platform Fee</span><span>₹{platformFee.toFixed(0)}</span></div>
             <div className="summary-row"><span>GST & Charges</span><span>₹{gst.toFixed(0)}</span></div>

             <div className="summary-total">
                 <strong>TO PAY</strong>
                 <strong>₹{finalTotal.toFixed(0)}</strong>
             </div>
         </div>

         {/* Section 3: Payment Method */}
         <div className="checkout-section payment-method-section">
            <h3>Payment Method</h3>
            <PaymentOptions />
         </div>

         {/* Final Submit Button */}
        <button type="submit" className="button-primary place-order-btn">Place Order & Pay</button>
      </form>
    </div>
  );
}

export default CheckoutPage;