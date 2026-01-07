import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              🚀 AI-Powered Advertising Analytics
            </div>
            
            <h1 className="hero-title fade-in">
              Transform Your Ad Performance with 
              <span className="text-gradient"> AI Intelligence</span>
            </h1>
            
            <p className="hero-description fade-in">
              Ryze analyzes your advertising campaigns across all platforms, 
              delivering actionable insights and automated reports that help you 
              optimize ROAS, reduce CPA, and scale your ad spend with confidence.
            </p>
            
            <div className="hero-cta fade-in">
              <button className="btn btn-primary btn-large">
                Book a Demo
                <span>→</span>
              </button>
              <button className="btn btn-secondary btn-large">
                Watch Demo Video
                <span>▶</span>
              </button>
            </div>
            
            <div className="hero-stats fade-in">
              <div className="stat">
                <div className="stat-value">3.2x</div>
                <div className="stat-label">Average ROAS Improvement</div>
              </div>
              <div className="stat">
                <div className="stat-value">10hrs</div>
                <div className="stat-label">Saved Per Week</div>
              </div>
              <div className="stat">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Uptime Reliability</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual fade-in">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="mockup-title">Advertising Dashboard</div>
              </div>
              <div className="mockup-content">
                <div className="metric-card">
                  <div className="metric-label">Total Ad Spend</div>
                  <div className="metric-value">$17,796</div>
                  <div className="metric-change positive">↑ 10%</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">ROAS</div>
                  <div className="metric-value">1.28x</div>
                  <div className="metric-change positive">↑ 2%</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Revenue</div>
                  <div className="metric-value">$22,748</div>
                  <div className="metric-change positive">↑ 12%</div>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                  <div className="chart-bar" style={{height: '90%'}}></div>
                  <div className="chart-bar" style={{height: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
