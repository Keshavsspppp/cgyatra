import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription for:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/packages">Tour Packages</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Popular Destinations Section */}
        <div className="footer-section">
          <h3>Popular Destinations</h3>
          <ul>
            <li><a href="/destination/chitrakote">Chitrakote Falls</a></li>
            <li><a href="/destination/barnawapara">Barnawapara Wildlife</a></li>
            <li><a href="/destination/sirpur">Sirpur</a></li>
            <li><a href="/destination/mainpat">Mainpat</a></li>
            <li><a href="/destination/tirathgarh">Tirathgarh Falls</a></li>
            <li><a href="/destination/bastar">Bastar</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Tourism Board, Raipur, Chhattisgarh
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +91 123 456 7890
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              info@cgtourism.com
            </li>
            <li>
              <i className="fas fa-clock"></i>
              Mon - Sat: 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for travel updates and offers.</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Chhattisgarh Tourism. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;