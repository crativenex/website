import React from 'react';
import './Hero.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your <span className="gradient-text">Digital Future</span>
          </h1>
          <p className="hero-subtitle">
            We create innovative web applications, desktop solutions, and custom products
            tailored to your industry needs
          </p>
          <div className="hero-buttons">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
            >
              Start Your Project <FiArrowRight />
            </Link>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img
              src="/img/pexels-markusspiske-1089440.jpg"
              alt="Modern Development"
              className="main-image"
            />
            <div className="floating-card">
              <span className="card-badge">Web Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
