import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning analyzes your ad performance across all platforms and surfaces actionable recommendations.'
    },
    {
      icon: '📊',
      title: 'Automated Reports',
      description: 'Beautiful, comprehensive reports generated automatically and delivered on your schedule—no manual work required.'
    },
    {
      icon: '🎯',
      title: 'Multi-Platform Analytics',
      description: 'Unified dashboard for Google Ads, Meta Ads, TikTok, YouTube, and all your advertising channels in one place.'
    },
    {
      icon: '💰',
      title: 'ROAS Optimization',
      description: 'Real-time recommendations to improve return on ad spend and identify high-performing campaigns instantly.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Monitoring',
      description: 'Track campaign performance as it happens with live dashboards and instant alerts for critical changes.'
    },
    {
      icon: '🔍',
      title: 'Deep Analytics',
      description: 'Drill down into campaign data with advanced filtering, segmentation, and custom attribution models.'
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="features-header text-center">
          <h2 className="section-title">
            Everything you need to <span className="text-gradient">optimize your ads</span>
          </h2>
          <p className="section-description">
            Powerful features designed to help you make data-driven decisions and maximize your advertising ROI
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <button className="btn btn-primary btn-large">
            Explore All Features →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
