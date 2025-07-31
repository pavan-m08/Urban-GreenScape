import React, { useState } from 'react';
import '../styles/NewsletterSignup.css';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        <h3 className="newsletter-title">Subscribe to our Newsletter</h3>
        <p className="newsletter-description">Get updates on new gardens, events, and sustainability tips.</p>
        {submitted ? (
          <div className="newsletter-success">Thank you for subscribing!</div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default NewsletterSignup; 