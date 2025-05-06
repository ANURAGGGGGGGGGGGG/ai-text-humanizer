import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Header from './Header';
import "../styles/Contact.css"

const Contact = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="contact-page"
      >
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="info-item">
            <FiMail />
            <span>anuragmahanta730@gmail.com</span>
          </div>
          <div className="info-item">
            <FiPhone />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="info-item">
            <FiMapPin />
            <span>New Delhi</span>
          </div>
        </div>
      </motion.div>
    </>

  );
};

export default Contact;