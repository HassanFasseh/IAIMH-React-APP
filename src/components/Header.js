import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../styles/header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header>
      <div className="container header-container">
        <a href="/" className="logo">
          <img src="https://i.ibb.co/NnfXBq9m/logo.png" alt="logo" className="logo-image" border={0} />
        </a>
        <nav>
          <ul className={mobileMenuOpen ? "show" : ""}>
            <li>
              <a href="/">Home</a>
            </li>
            <li 
              className="dropdown"
              onClick={() => toggleDropdown('conferences')}
            >
              <a href="/conferences">Conferences</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/membership">Membership</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        
        <a href="/Auth" className="login-btn">
          Login
        </a>
        
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
        >
          <i className="fas fa-bars" />
        </button>
      </div>
    </header>
  );
}

export default Header;