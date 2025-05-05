import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import '../styles/About.css';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="about-container"
            >
                <div className="about-hero">
                    <h1>Crafting AI Humanization Tools</h1>
                    <p className="hero-subtitle">
                        Bridging the gap between artificial intelligence and human expression
                    </p>
                </div>

                <section className="developer-section">
                    <div className="developer-card">
                        <div className="developer-avatar">
                            <FiUser className="avatar-icon" />
                        </div>
                        <h2>About the Developer</h2>
                        <div className="developer-bio">
                            <p>
                                I'm Anurag, a full-stack developer passionate about creating AI solutions that enhance human communication. With expertise in natural language processing and user experience design, I built Humanise AI — a platform that transforms AI-generated text into more natural, relatable, and human-like content. My goal is to bridge the gap between machine efficiency and authentic human expression.
                            </p>
                        </div>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <FiCode className="skill-icon" />
                                <h3>Technical Expertise</h3>
                                <ul>
                                    <li>Natural Language Processing(Learning)</li>
                                    <li>Machine Learning(Learning)</li>
                                    <li>Web Development</li>
                                </ul>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/ANURAGGGGGGGGGGGG?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <FiGithub className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/anurag-mahantaa/" target="_blank" rel="noopener noreferrer">
                                <FiLinkedin className="social-icon" />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=anuragmahanta730@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiMail className="social-icon" />
                            </a>

                        </div>
                    </div>
                </section>

                <section className="mission-section">
                    <h2 className="section-title"><FiCode className="title-icon" /> Development Philosophy</h2>
                    <div className="mission-content">
                        <div className="mission-card">
                            <h3>Technical Approach</h3>
                            <p>
                                Built using cutting-edge language models combined with custom algorithms that analyze
                                and enhance text while preserving its original intent and emotional tone.
                            </p>
                        </div>
                        <div className="mission-card">
                            <h3>User-Centric Design</h3>
                            <p>
                                Focused on creating intuitive interfaces that make advanced AI tools accessible to
                                everyone, regardless of technical expertise.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="values-section">
                    <h2 className="section-title">Core Principles</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Collaboration</h3>
                            <p>Tools that enhance human-AI cooperation</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🔒</div>
                            <h3>Privacy</h3>
                            <p>Secure processing with data protection</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>Continuous improvement of AI capabilities</p>
                        </div>
                    </div>
                </section>
            </motion.div>
            <Footer />
        </>

    );
};

export default About;