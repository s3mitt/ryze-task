import React from 'react';
import './FeaturesPage.css';

const FeaturesPage = () => {
  const detailedFeatures = [
    {
      icon: '🤖',
      title: 'AI-Powered Campaign Analysis',
      description: 'Advanced machine learning algorithms analyze your campaigns 24/7, identifying optimization opportunities and performance anomalies.',
      benefits: [
        'Automated pattern recognition across all campaigns',
        'Predictive ROAS modeling',
        'Anomaly detection and alerts',
        'Smart budget allocation recommendations'
      ]
    },
    {
      icon: '📊',
      title: 'Cross-Platform Dashboard',
      description: 'Unified view of all your advertising platforms in one beautiful, intuitive dashboard.',
      benefits: [
        'Real-time data synchronization',
        'Custom metric tracking',
        'Interactive data visualization',
        'Exportable reports in multiple formats'
      ]
    },
    {
      icon: '⚡',
      title: 'Real-Time Monitoring & Alerts',
      description: 'Never miss critical changes with intelligent monitoring that alerts you to what matters.',
      benefits: [
        'Customizable alert thresholds',
        'Multi-channel notifications (Email, Slack, SMS)',
        'Performance degradation warnings',
        'Budget pacing alerts'
      ]
    },
    {
      icon: '🎯',
      title: 'Advanced Attribution',
      description: 'Understand the true impact of your advertising with multi-touch attribution modeling.',
      benefits: [
        'Multiple attribution models',
        'Cross-device tracking',
        'Customer journey visualization',
        'Channel contribution analysis'
      ]
    },
    {
      icon: '📈',
      title: 'Automated Reporting',
      description: 'Beautiful, comprehensive reports generated automatically and delivered on your schedule.',
      benefits: [
        'Scheduled report delivery',
        'White-label options',
        'Custom branding',
        'Interactive web reports'
      ]
    },
    {
      icon: '🔗',
      title: 'Seamless Integrations',
      description: 'Connect with all major advertising platforms and tools with one-click integrations.',
      benefits: [
        'Google Ads, Meta, TikTok, LinkedIn, Twitter',
        'Shopify, WooCommerce, BigCommerce',
        'Google Analytics, GA4',
        'Webhook and API access'
      ]
    }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="features-hero-content text-center">
            <h1 className="hero-title fade-in">
              Powerful Features for <span className="text-gradient">Smarter Advertising</span>
            </h1>
            <p className="hero-description fade-in">
              Everything you need to analyze, optimize, and scale your advertising campaigns with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="detailed-features section">
        <div className="container">
          {detailedFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-detail ${index % 2 === 1 ? 'reverse' : ''} fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="feature-detail-content">
                <div className="feature-detail-icon">{feature.icon}</div>
                <h2 className="feature-detail-title">{feature.title}</h2>
                <p className="feature-detail-description">{feature.description}</p>
                <ul className="feature-benefits">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature-detail-visual">
                <div className="visual-placeholder">
                  <div className="placeholder-grid">
                    <div className="placeholder-item"></div>
                    <div className="placeholder-item"></div>
                    <div className="placeholder-item"></div>
                    <div className="placeholder-item"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta section">
        <div className="container">
          <div className="cta-card text-center">
            <h2 className="cta-title">Experience all features with a free trial</h2>
            <p className="cta-description">
              No credit card required. Start optimizing your ads in minutes.
            </p>
            <button className="btn btn-primary btn-large">
              Start Free Trial →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
