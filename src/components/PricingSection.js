import React, { useState } from 'react';
import './PricingSection.css';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 99,
      annualPrice: 950,
      features: [
        'Up to $10K monthly ad spend',
        '2 ad platforms',
        'Automated reports',
        'Basic analytics',
        'Email support',
        '7-day data retention'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Growth',
      description: 'For growing businesses scaling their ads',
      monthlyPrice: 299,
      annualPrice: 2870,
      features: [
        'Up to $50K monthly ad spend',
        '5 ad platforms',
        'AI-powered insights',
        'Advanced analytics',
        'Priority support',
        '90-day data retention',
        'Custom reports',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large teams and agencies',
      monthlyPrice: null,
      annualPrice: null,
      features: [
        'Unlimited ad spend',
        'All ad platforms',
        'Dedicated AI models',
        'White-label reports',
        '24/7 phone support',
        'Unlimited data retention',
        'Custom integrations',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const getPrice = (plan) => {
    if (!plan.monthlyPrice) return 'Custom';
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
    return `$${price}`;
  };

  return (
    <section className="pricing-section section">
      <div className="container">
        <div className="pricing-header text-center">
          <h2 className="section-title">
            Simple, <span className="text-gradient">transparent pricing</span>
          </h2>
          <p className="section-description">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>

          <div className="billing-toggle">
            <button 
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual
              <span className="discount-badge">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''} fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-price">
                <span className="price">{getPrice(plan)}</span>
                {plan.monthlyPrice && (
                  <span className="price-period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                )}
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-large plan-cta`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer text-center">
          <p>All plans include SSL encryption, GDPR compliance, and 99.9% uptime SLA</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
