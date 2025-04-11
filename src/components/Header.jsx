// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../styles/Header.css';
// ** IMPORTANT: Ensure 'cart-icon.svg' exists in 'src/assets/images/' **
import cartIcon from '../assets/images/cart-icon.svg';

function Header() {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Handle header shadow on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  // Close menu when a link is clicked
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          Urban Spoon
        </Link>

        {/* Hamburger for mobile */}
        <button className="hamburger-react" onClick={toggleMobileMenu} aria-label="Toggle menu">
           ☰
        </button>

        {/* Desktop Navigation */}
        <nav className="main-nav desktop-nav">
           {/* Use hash links for homepage sections for smooth scroll */}
          <a href="/#menu">Menu</a>
          <NavLink to="/offers">Offers</NavLink>
          <a href="/#info-section-anchor">Info & Reviews</a> {/* Use ID from RestaurantInfo */}
        </nav>

         {/* Mobile Navigation Drawer */}
         <nav className={`main-nav mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {/* Use hash links and NavLinks as appropriate */}
            <a href="/#menu" onClick={closeMobileMenu}>Menu</a>
            <NavLink to="/offers" onClick={closeMobileMenu}>Offers</NavLink>
            <a href="/#info-section-anchor" onClick={closeMobileMenu}>Info & Reviews</a>
            <NavLink to="/track-order" onClick={closeMobileMenu}>Track Order</NavLink>
            <NavLink to="/cart" onClick={closeMobileMenu}>Your Cart</NavLink>
        </nav>

        <div className="header-actions">
          {/* Add Search/Profile icons if needed */}
          <Link to="/cart" className="cart-link" title="View Cart" onClick={closeMobileMenu}>
            <img src={cartIcon} alt="Cart" className="header-icon cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;