import React from 'react';
import './Services.css';
import { FiArrowRight } from 'react-icons/fi';
import { FiCode, FiMonitor, FiBox, FiZap } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FiCode />,
      title: 'Web Applications',
      description: 'Custom web solutions built with modern technologies and best practices for optimal performance',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
      id: 2,
      icon: <FiMonitor />,
      title: 'Desktop Applications',
      description: 'Powerful desktop solutions that bring professional functionality to Windows, Mac, and Linux',
      features: ['Cross-Platform', 'User-Friendly', 'Secure']
    },
    {
      id: 3,
      icon: <FiBox />,
      title: 'Product Development',
      description: 'Turn your ideas into reality with our comprehensive product development and deployment services',
      features: ['Scalable', 'Maintainable', 'Future-Ready']
    },
    {
      id: 4,
      icon: <FiZap />,
      title: 'Mobile Solutions',
      description: 'iOS and Android applications that engage users and drive business growth for all industries',
      features: ['Native Development', 'Cross-Platform', 'Cloud Integration']
    }
  ];

  const serviceFlow = [
    { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
    { step: '02', title: 'Design', description: 'Creating beautiful and intuitive interfaces' },
    { step: '03', title: 'Development', description: 'Building robust and scalable solutions' },
    { step: '04', title: 'Testing', description: 'Ensuring quality and performance' },
    { step: '05', title: 'Deployment', description: 'Launching your application to the world' },
    { step: '06', title: 'Support', description: 'Maintaining and improving your solution' }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
              <a href="mailto:creativenex07@gmail.com" className="service-link">
                Learn More <FiArrowRight />
              </a>
            </div>
          ))}
        </div>

        <div className="service-flow-section">
          <h3 className="flow-title">Our Development Flow</h3>
          <div className="service-flow">
            {serviceFlow.map((item, index) => (
              <div key={index} className="flow-item">
                <div className="flow-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {index < serviceFlow.length - 1 && <div className="flow-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
