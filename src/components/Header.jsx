import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-logo">
          <span className="logo-gradient">AI Text</span> Humanizer
        </h1>

        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className={`bar ${isMenuOpen ? 'bar1' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'bar2' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'bar3' : ''}`}></div>
          </button>
          <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;