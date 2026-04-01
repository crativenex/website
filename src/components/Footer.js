import React from 'react';
import './Footer.css';
import { FiArrowUp, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Creative Nex</h4>
            <p>Building innovative digital solutions for businesses of all sizes.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Applications</a></li>
              <li><a href="#services">Desktop Solutions</a></li>
              <li><a href="#services">Product Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="mailto:creativenex07@gmail.com" title="Email">
                <FiMail />
              </a>
              <a href="tel:+919597965911" title="Phone">
                <FiPhone />
              </a>
              <a href="https://www.linkedin.com/company/112101266/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
            <div className="contact-info">
              <p><strong>Email:</strong> creativenex07@gmail.com</p>
              <p><strong>Phone:</strong> +91 95979 65911</p>
              <p style={{ marginTop: '5px' }}>+91 93841 61820</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2026 Creative Nex. All rights reserved.</p>
          </div>
          <button className="scroll-to-top" onClick={scrollToTop} title="Scroll to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
