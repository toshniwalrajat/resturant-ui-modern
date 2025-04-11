// src/components/MenuItemCard.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/Menu.css';

function MenuItemCard({ item }) {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);

  const handleAdd = () => { addToCart(item); }
  const handleIncrement = () => { if (itemInCart) { updateQuantity(item.id, itemInCart.quantity + 1); } else { addToCart(item); } }
  const handleDecrement = () => { if (itemInCart && itemInCart.quantity > 0) { updateQuantity(item.id, itemInCart.quantity - 1); } }

  return (
    <div className="menu-item-card modern">
      <div className="item-details">
         <div className="item-name-type">
             <span className={`diet-indicator ${item.type === 'veg' ? 'veg' : 'non-veg'}`} title={item.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}>●</span>
             <h3 className="item-name">{item.name}</h3>
         </div>
         {item.rating && <span className="item-rating"><span className="star">★</span> {item.rating.toFixed(1)}</span>}
        <p className="item-price">₹{item.price.toFixed(0)}</p>
        <p className="item-description">{item.description}</p>
         {item.isBestSeller && <span className="bestseller-tag"> bestseller</span>}
      </div>
      <div className="item-image-container">
         {/* ** Ensure item.image points to an existing file ** */}
        <img src={item.image} alt={item.name} className="item-image" loading="lazy"/>
        {itemInCart && itemInCart.quantity > 0 ? (
             <div className="quantity-control">
                 <button onClick={handleDecrement} aria-label="Decrease quantity">−</button>
                 <span>{itemInCart.quantity}</span>
                 <button onClick={handleIncrement} aria-label="Increase quantity">+</button>
             </div>
        ) : (
            <button onClick={handleAdd} className="add-item-btn">ADD</button>
        )}
      </div>
    </div>
  );
}
export default MenuItemCard;