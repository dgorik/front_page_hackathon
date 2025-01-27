import React from 'react';
import './LandingPage.css';
import { ReactComponent as Compliance } from './assets/compliance.svg';
import { ReactComponent as Investment } from './assets/investment.svg';
import { ReactComponent as Risk } from './assets/risk.svg';


const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="header-title">Misfits AI</h1>
      </header>
      <section className="features">
        <div className="feature-item">
            <Risk />
            <h3>Risk Identification</h3>
            <p>AI detects early signs of potential risks such as structural issues, leaks, and wear-and-tear.</p>
        </div>
        <div className="feature-item">
            <Investment />
            <h3>Predictive Investment</h3>
            <p>By analyzing patterns, AI predicts potential issues in buildings, helping to reduce risks and protect investments.</p>
        </div>
        <div className="feature-item">
            <Compliance />
            <h3>Public Safety and Policy</h3>
            <p>Enhancing public safety and infrastructure by finding buildings with a history of edits and repairs</p>
        </div>
    </section>
      <main className="main-content">
        <button className="cta-button">Get Started</button>
      </main>
    </div>
  );
}

export default LandingPage;
