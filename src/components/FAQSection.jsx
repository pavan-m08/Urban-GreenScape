import React, { useState } from 'react';
import '../styles/FAQSection.css';

const faqs = [
  {
    question: 'How can I get my rooftop transformed?',
    answer: 'Contact us through our website or email. We will assess your rooftop and guide you through the process.'
  },
  {
    question: 'Who can volunteer?',
    answer: 'Anyone interested in urban gardening and community work is welcome to volunteer! No experience required.'
  },
  {
    question: 'What types of plants do you grow?',
    answer: 'We grow a variety of vegetables, herbs, and flowers, tailored to each rooftop\'s conditions and community preferences.'
  },
  {
    question: 'How are the gardens maintained?',
    answer: 'Our team provides ongoing maintenance, and we also train local volunteers to help care for the gardens.'
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="faq-container">
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <div className="faq-content">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {faq.question}
              <span className={`faq-toggle ${openIdx === idx ? 'open' : ''}`}>
                {openIdx === idx ? '−' : '+'}
              </span>
            </button>
            {openIdx === idx && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection; 