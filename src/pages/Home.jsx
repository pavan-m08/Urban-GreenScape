import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterSignup from '../components/NewsletterSignup';
import AnimatedStats from '../components/AnimatedStats';
import FAQSection from '../components/FAQSection';
import Chatbot from '../components/Chatbot';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <section className="hero-section">
        <h1 className="hero-title">Transforming Rooftops, Growing Communities</h1>
        <p className="hero-subtitle">
          Urban GreenScape turns unused urban rooftops into vibrant community gardens, promoting sustainability, local food, and community engagement.
        </p>
        <Link to="/get-involved" className="hero-button">Get Involved</Link>
      </section>
      <AnimatedStats />
      <NewsletterSignup />
      <FAQSection />
      <Chatbot />
    </>
  );
}

export default Home; 