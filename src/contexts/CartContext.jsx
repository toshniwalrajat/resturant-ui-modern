// src/contexts/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try { const savedCart = localStorage.getItem('cartItems'); return savedCart ? JSON.parse(savedCart) : []; }
    catch (error) { console.error("Failed to parse cart", error); return []; }
  });

  useEffect(() => {
    try { localStorage.setItem('cartItems', JSON.stringify(cartItems));}
    catch (error) { console.error("Failed to save cart", error); }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exist = prev.find((ci) => ci.id === item.id);
      if (exist) { return prev.map((ci) => ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci ); }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => { setCartItems((prev) => prev.filter((i) => i.id !== id)); };
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) => {
      const nQty = Math.max(0, quantity);
      if (nQty === 0) { return prev.filter((i) => i.id !== id); }
      return prev.map((i) => i.id === id ? { ...i, quantity: nQty } : i);
    });
  };
  const clearCart = () => setCartItems([]);
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const value = { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};