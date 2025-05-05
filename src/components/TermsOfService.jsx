import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowUp } from 'react-icons/fi';
import '../styles/TermsOfService.css';
import Header from './Header';
import Footer from './Footer';

const TermsOfService = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="terms-container"
            >
                <div className="terms-header">
                    <h1>Terms of Service</h1>
                    <p className="effective-date">Effective: January 1, 2024</p>
                </div>

                <div className="terms-content">
                    <section className="terms-section">
                        <h2><FiCheck className="section-icon" /> Acceptance of Terms</h2>
                        <div className="terms-card">
                            <p>By using our services, you agree to:</p>
                            <ul>
                                <li>Comply with all applicable laws</li>
                                <li>Use the service only for lawful purposes</li>
                                <li>Not engage in unauthorized access or use</li>
                            </ul>
                        </div>
                    </section>

                    <section className="terms-section">
                        <h2><FiCheck className="section-icon" /> User Responsibilities</h2>
                        <div className="terms-card">
                            <p>Users must not:</p>
                            <ul>
                                <li>Submit harmful or illegal content</li>
                                <li>Reverse engineer our systems</li>
                                <li>Violate intellectual property rights</li>
                            </ul>
                        </div>
                    </section>

                    <section className="terms-section">
                        <h2><FiCheck className="section-icon" /> Intellectual Property</h2>
                        <div className="terms-card">
                            <p>Ownership rights:</p>
                            <ul>
                                <li>You retain ownership of your content</li>
                                <li>We own all service-related IP</li>
                                <li>Limited license granted for service use</li>
                            </ul>
                        </div>
                    </section>

                    <section className="terms-section">
                        <h2><FiCheck className="section-icon" /> Limitation of Liability</h2>
                        <div className="terms-card">
                            <p>We are not liable for:</p>
                            <ul>
                                <li>Indirect or consequential damages</li>
                                <li>Service interruptions</li>
                                <li>Third-party actions</li>
                            </ul>
                        </div>
                    </section>

                    <section className="terms-section">
                        <h2><FiCheck className="section-icon" /> Governing Law</h2>
                        <div className="terms-card">
                            <p>Legal framework:</p>
                            <ul>
                                <li>Governed by California law</li>
                                <li>Dispute resolution in San Francisco</li>
                                <li>International users must comply with local laws</li>
                            </ul>
                        </div>
                    </section>
                </div>

                <button onClick={scrollToTop} className="scroll-top">
                    <FiArrowUp />
                </button>
            </motion.div>
            <Footer />
        </>

    );
};

export default TermsOfService;