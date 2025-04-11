// src/components/PaymentOptions.jsx
import React, { useState } from 'react';
import '../styles/Checkout.css';

function PaymentOptions() {
  const [selectedMethod, setSelectedMethod] = useState('UPI'); // Default

  return (
    <div className="payment-options">
      {/* UPI */}
      <div className="payment-method">
        <input type="radio" id="payment-upi" name="paymentMethod" value="UPI" checked={selectedMethod === 'UPI'} onChange={(e) => setSelectedMethod(e.target.value)} aria-labelledby="upi-label"/>
        <label htmlFor="payment-upi" id="upi-label">UPI</label>
         {selectedMethod === 'UPI' && (
            <div className="upi-details-form">
                <input type="text" placeholder="Enter UPI ID (e.g. yourname@bank)" aria-label="UPI ID"/>
                 <button type="button" className="verify-upi-btn">Verify</button>
            </div>
         )}
      </div>
      {/* Card */}
      <div className="payment-method">
        <input type="radio" id="payment-card" name="paymentMethod" value="Card" checked={selectedMethod === 'Card'} onChange={(e) => setSelectedMethod(e.target.value)} aria-labelledby="card-label"/>
        <label htmlFor="payment-card" id="card-label">Credit/Debit Card</label>
         {selectedMethod === 'Card' && (
            <div className="card-details-form">
                <input type="text" placeholder="Card Number" maxLength="19" aria-label="Card Number" inputMode="numeric"/>
                <input type="text" placeholder="MM / YY" maxLength="7" aria-label="Expiry Date" inputMode="numeric"/>
                <input type="text" placeholder="CVC" maxLength="4" aria-label="CVC" inputMode="numeric"/>
            </div>
         )}
      </div>
       {/* COD */}
       <div className="payment-method">
            <input type="radio" id="payment-cod" name="paymentMethod" value="COD" checked={selectedMethod === 'COD'} onChange={(e) => setSelectedMethod(e.target.value)} aria-labelledby="cod-label"/>
            <label htmlFor="payment-cod" id="cod-label">Cash on Delivery (COD)</label>
             {selectedMethod === 'COD' && (<p className='cod-note'>Please keep exact change ready.</p>)}
        </div>
    </div>
  );
}
export default PaymentOptions;