import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Inc',
      image: '👩‍💼',
      text: 'Ryze transformed how we manage our advertising. We increased our ROAS by 240% in just 3 months. The AI insights are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Growth Lead',
      company: 'Shopify Store',
      image: '👨‍💻',
      text: 'The automated reports alone save us 10+ hours per week. Being able to see all platforms in one dashboard is a game-changer.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'Digital Agency',
      image: '👩‍💼',
      text: 'We manage 50+ client accounts and Ryze makes it effortless. The real-time alerts help us catch issues before they become expensive.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="testimonials-header text-center">
          <h2 className="section-title">
            Loved by <span className="text-gradient">marketing teams</span> everywhere
          </h2>
          <p className="section-description">
            Join thousands of advertisers who have transformed their ad performance with Ryze
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.image}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-value">5,000+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">$500M+</div>
            <div className="stat-label">Ad Spend Managed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">4.9/5</div>
            <div className="stat-label">Customer Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
