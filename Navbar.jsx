// src/components/navbar/Navbar.jsx

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add auth buttons to the nav links
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/destinations', text: 'Destinations' },
    { to: '/gallery', text: 'Gallery' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
    { to: '/plan-trip', text: 'Plan Your Trip' },
  ];

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        <img src="/logo.png" alt="CGYatra" className="nav-logo" />
        <h1>CGYatra</h1>
      </Link>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {link.text}
          </Link>
        ))}
        
        <Link 
          to="/plan-trip" 
          className="plan-trip-btn"
        >
          <i className="fas fa-map-marked-alt"></i>
          Plan Your Trip
        </Link>

        <div className="auth-buttons">
          {isLoggedIn ? (
            <motion.button 
              onClick={handleLogout} 
              className="auth-btn logout-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </motion.button>
          ) : (
            <motion.div
              className="auth-btn-group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/auth" className="auth-btn">
                Login / Sign Up
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      <button
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;