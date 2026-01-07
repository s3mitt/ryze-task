import React from 'react';
import PricingSection from '../components/PricingSection';
import './PricingPage.css';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <div className="pricing-hero-content text-center">
            <h1 className="hero-title fade-in">
              Choose the <span className="text-gradient">perfect plan</span> for your business
            </h1>
            <p className="hero-description fade-in">
              All plans include a 14-day free trial. No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <PricingSection />

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <div className="faq-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Everything you need to know about pricing and plans
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item fade-in">
              <h3 className="faq-question">Can I change plans later?</h3>
              <p className="faq-answer">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any charges.
              </p>
            </div>

            <div className="faq-item fade-in" style={{animationDelay: '0.1s'}}>
              <h3 className="faq-question">What happens after the free trial?</h3>
              <p className="faq-answer">
                After your 14-day trial, you'll be automatically enrolled in the plan you selected. You can cancel anytime before the trial ends.
              </p>
            </div>

            <div className="faq-item fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="faq-question">Do you offer refunds?</h3>
              <p className="faq-answer">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied for any reason, we'll refund your payment in full.
              </p>
            </div>

            <div className="faq-item fade-in" style={{animationDelay: '0.3s'}}>
              <h3 className="faq-question">What payment methods do you accept?</h3>
              <p className="faq-answer">
                We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can pay via invoice.
              </p>
            </div>

            <div className="faq-item fade-in" style={{animationDelay: '0.4s'}}>
              <h3 className="faq-question">Is my data secure?</h3>
              <p className="faq-answer">
                Absolutely. We're SOC 2 certified and GDPR compliant. All data is encrypted in transit and at rest. We never share your data.
              </p>
            </div>

            <div className="faq-item fade-in" style={{animationDelay: '0.5s'}}>
              <h3 className="faq-question">Do you offer custom enterprise plans?</h3>
              <p className="faq-answer">
                Yes! Our Enterprise plan can be fully customized to your needs. Contact our sales team to discuss your requirements.
              </p>
            </div>
          </div>

          <div className="faq-cta">
            <p>Still have questions?</p>
            <button className="btn btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
