import React, { useState, useEffect } from 'react';
import { humanizeText } from '../services/humanizeService';
import Header from './Header';
import Footer from './Footer';
import { FiCopy, FiCheckCircle, FiEdit3, FiSettings } from 'react-icons/fi';
import '../styles/TextHumanizer.css';

function TextHumanizer() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [humanizationLevel, setHumanizationLevel] = useState('medium');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      setError('Please enter some text to humanize');
      return;
    }

    setIsLoading(true);
    setError('');
    setCopied(false);
    
    try {
      const humanizedText = await humanizeText(inputText, humanizationLevel);
      setOutputText(humanizedText);
    } catch (err) {
      setError('Error humanizing text: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
   <Header/>
    <div className="humanizer-container">
      <div className="humanizer-header">
        <h2>
          <FiEdit3 className="header-icon" /> 
          Transform AI Text to Natural Writing
        </h2>
        <p className="subtitle">Make your AI-generated content sound authentically human with intelligent rewriting</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="text-input-wrapper">
            <label htmlFor="inputText" className="floating-label">
              <FiEdit3 className="input-icon" /> AI Text Input
            </label>
            <textarea
              id="inputText"
              className="text-input"
              placeholder="Paste your AI-generated text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>

          <div className="controls-container">
            <div className="settings-card">
              <div className="settings-header">
                <FiSettings className="settings-icon" />
                <h4>Humanization Settings</h4>
              </div>
              
              <div className="level-selector">
                {['light', 'medium', 'heavy'].map((level) => (
                  <div 
                    key={level}
                    className={`level-card ${humanizationLevel === level ? 'active' : ''}`}
                    onClick={() => setHumanizationLevel(level)}
                  >
                    <div className="level-dot"></div>
                    <span className="level-label">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                    <div className="level-description">
                      {level === 'light' && 'Minor tweaks'}
                      {level === 'medium' && 'Balanced changes'}
                      {level === 'heavy' && 'Complete rewrite'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="primary-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Humanizing...
                </>
              ) : (
                'Transform Text'
              )}
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {outputText && (
        <div className="output-section">
          <div className="output-header">
            <h3>
              <FiCheckCircle className="output-icon" />
              Humanized Output
            </h3>
            <button
              onClick={handleCopy}
              className="copy-button"
              aria-label="Copy to clipboard"
            >
              {copied ? (
                <>
                  <FiCheckCircle className="copy-icon" />
                  Copied!
                </>
              ) : (
                <>
                  <FiCopy className="copy-icon" />
                  Copy
                </>
              )}
            </button>
          </div>
          
          <div className="output-box">
            <div className="output-content">
              {outputText}
            </div>
            <div className="output-stats">
              <div className="stat-item">
                <span className="stat-label">Original Length</span>
                <span className="stat-value">{inputText.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Humanized Length</span>
                <span className="stat-value">{outputText.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div className="about-section" id="about"> */}
      <div className="about-section">
        <h3>✨ How It Works</h3>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🤖</div>
            <h4>AI Detection</h4>
            <p>Identifies robotic patterns in AI-generated text using advanced NLP models</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🔄</div>
            <h4>Smart Rewriting</h4>
            <p>Applies context-aware transformations to improve readability</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h4>Quality Control</h4>
            <p>Maintains original meaning while enhancing natural flow</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default TextHumanizer;