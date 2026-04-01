import React, { useState } from 'react';
import './Contact.css';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    const mailtoLink = `mailto:creativenex07@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMail />
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:creativenex07@gmail.com">creativenex07@gmail.com</a>
              </p>
              <p className="info-desc">Reach out via email for any queries</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone />
              </div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+919597965911">+91 95979 65911</a>
              </p>
              <p>
                <a href="tel:+939384161820">+91 93841 61820</a>
              </p>
              <p className="info-desc">Call us during business hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p>
                <a
                  href="https://www.linkedin.com/company/112101266/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creative Nex Company
                </a>
              </p>
              <p className="info-desc">Connect with us on LinkedIn</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
