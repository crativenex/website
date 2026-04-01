import React from 'react';
import './About.css';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const features = [
    'Expert Team of Developers',
    'Cutting-edge Technology',
    'Industry Solutions',
    'Timely Delivery',
    'Cost-effective Services',
    'Dedicated Support'
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            <img
              src="/img/pexels-ann-h-45017-32342295.jpg"
              alt="About Creative Nex"
              className="about-img"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title">About Creative Nex</h2>
          <p className="about-description">
            We are a dynamic team of passionate developers and designers dedicated to transforming
            your ideas into innovative digital solutions. With years of experience across various industries,
            we understand the unique challenges and opportunities in your sector.
          </p>

          <p className="about-text">
            Our commitment is to deliver high-quality, scalable, and user-centric applications that empower
            your business. From concept to deployment, we work closely with you to ensure every detail
            aligns with your vision and objectives.
          </p>

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FiCheckCircle className="check-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <h4>5+</h4>
              <p>Years in Business</p>
            </div>
            <div className="about-stat">
              <h4>50+</h4>
              <p>Satisfied Clients</p>
            </div>
            <div className="about-stat">
              <h4>100+</h4>
              <p>Projects Launched</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
