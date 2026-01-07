import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      
      {/* How It Works Section */}
      <section className="how-it-works section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              How <span className="text-gradient">Ryze Works</span>
            </h2>
            <p className="section-description">
              Get started in minutes and see results immediately
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card fade-in">
              <div className="step-number">1</div>
              <h3 className="step-title">Connect Your Platforms</h3>
              <p className="step-description">
                Link your advertising accounts from Google, Meta, TikTok, and more with one-click integration.
              </p>
            </div>

            <div className="step-card fade-in" style={{animationDelay: '0.1s'}}>
              <div className="step-number">2</div>
              <h3 className="step-title">AI Analyzes Your Data</h3>
              <p className="step-description">
                Our advanced AI scans your campaigns, identifies patterns, and generates actionable insights.
              </p>
            </div>

            <div className="step-card fade-in" style={{animationDelay: '0.2s'}}>
              <div className="step-number">3</div>
              <h3 className="step-title">Optimize & Scale</h3>
              <p className="step-description">
                Get real-time recommendations and automated reports to improve ROAS and scale confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to transform your ad performance?</h2>
            <p className="cta-description">
              Join thousands of advertisers who are already optimizing with Ryze. Start your free 14-day trial today.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                Start Free Trial →
              </button>
              <button className="btn btn-secondary btn-large">
                Schedule a Demo
              </button>
            </div>
            <p className="cta-note">No credit card required • Cancel anytime • 14-day free trial</p>
          </div>
        </div>
      </section>

      <PricingSection />
    </div>
  );
};

export default Home;
