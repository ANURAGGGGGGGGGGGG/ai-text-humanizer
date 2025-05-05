import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowUp } from 'react-icons/fi';
import '../styles/PrivacyPolicy.css';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <Header/>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="privacy-container"
    >
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective: January 1, 2024</p>
      </div>

      <div className="privacy-content">
        <section className="policy-section">
          <h2><FiCheck className="section-icon" /> Data Collection</h2>
          <div className="policy-card">
            <p>We collect the following types of information:</p>
            <ul>
              <li>Text input provided by users for processing</li>
              <li>Anonymous usage statistics</li>
              <li>Technical information about devices and browsers</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2><FiCheck className="section-icon" /> Data Usage</h2>
          <div className="policy-card">
            <p>Your information is used to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Enhance AI model performance</li>
              <li>Ensure system security</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2><FiCheck className="section-icon" /> Data Protection</h2>
          <div className="policy-card">
            <p>We implement:</p>
            <ul>
              <li>SSL encryption for data in transit</li>
              <li>Regular security audits</li>
              <li>Access controls and monitoring</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2><FiCheck className="section-icon" /> User Rights</h2>
          <div className="policy-card">
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your data</li>
              <li>Ask for data deletion</li>
              <li>Opt-out of data collection</li>
            </ul>
          </div>
        </section>
      </div>

      <button onClick={scrollToTop} className="scroll-top">
        <FiArrowUp />
      </button>
    </motion.div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;