// src/components/CartItem.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/Cart.css';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => updateQuantity(item.id, item.quantity + 1);
  const handleDecrement = () => updateQuantity(item.id, item.quantity - 1);

  if (!item || !item.id) return null;

  return (
    <div className="cart-item">
      {/* ** Ensure item.image exists ** */}
      <img src={item.image} alt={item.name} className="cart-item-image" loading="lazy"/>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>₹{item.price?.toFixed(0) ?? 'N/A'}</p>
      </div>
       <div className="quantity-control cart-item-quantity">
           <button onClick={handleDecrement} aria-label="Decrease quantity" disabled={item.quantity <= 0}>−</button>
           <span>{item.quantity}</span>
           <button onClick={handleIncrement} aria-label="Increase quantity">+</button>
       </div>
      <p className="cart-item-subtotal">
        ₹{(item.price * item.quantity)?.toFixed(0) ?? 'N/A'}
      </p>
      <button onClick={() => removeFromCart(item.id)} className="cart-item-remove" title="Remove Item">
        &times;
      </button>
    </div>
  );
}

export default CartItem;