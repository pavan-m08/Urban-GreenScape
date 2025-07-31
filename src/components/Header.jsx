import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-brand">
          <span className="header-logo">🌿</span>
          <div>
            <div className="header-title">Urban GreenScape</div>
            <div className="header-subtitle">Transforming Rooftops</div>
          </div>
        </Link>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About
          </Link>
          <Link to="/services" className={isActive('/services') ? 'active' : ''}>
            Services
          </Link>
          <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>
            Gallery
          </Link>
          <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>
            Blog
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact
          </Link>
          <Link to="/get-involved" className="header-cta">
            Get Involved
          </Link>
        </nav>

        <button 
          className="header-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header; 