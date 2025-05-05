import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to AI Text Humanizer</h1>
      <Link to="/humanize" className="cta-button">
        Get Started
      </Link>
    </div>
  );
};

export default Home;