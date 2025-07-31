import React, { useState, useRef, useEffect } from 'react';
import '../styles/Chatbot.css';

const faqs = [
  {
    keywords: ['volunteer', 'join', 'help'],
    answer: '🌱 Absolutely! To volunteer, head to the Get Involved section and click "Register as Volunteer". We welcome all green thumbs and learners!'
  },
  {
    keywords: ['rooftop', 'garden', 'transform', 'consultation', 'appointment'],
    answer: '🏙️ Ready to green your rooftop? Click "Green Your Rooftop!" in Get Involved and schedule a free consultation with our experts.'
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach'],
    answer: '📧 You can contact us via the Contact page or email info@urbangreenscape.com. We love hearing from you!'
  },
  {
    keywords: ['services', 'offer', 'what do you do', 'provide'],
    answer: '🌻 We offer rooftop garden consultation, design, installation, maintenance, and fun community workshops! Check our Services page for details.'
  },
  {
    keywords: ['event', 'workshop', 'calendar', 'upcoming'],
    answer: '📅 We regularly host workshops and events! Visit our Blog and Gallery for the latest happenings, or sign up for our newsletter.'
  },
  {
    keywords: ['donate', 'support', 'fund', 'contribute'],
    answer: '💚 You can support us by donating through the Get Involved section. Every contribution helps us grow more green spaces!'
  },
  {
    keywords: ['team', 'who are you', 'staff', 'founder'],
    answer: '👩‍🌾 Our passionate team includes Alex Green (Founder), Jamie Lee (Urban Agriculture Specialist), and Morgan Patel (Community Engagement Lead). Meet us on the About page!'
  },
  {
    keywords: ['plants', 'what do you grow', 'vegetables', 'herbs', 'flowers'],
    answer: '🌿 We grow a variety of vegetables, herbs, and flowers, tailored to each rooftop and community. Want to suggest a plant? Let us know!'
  },
  {
    keywords: ['maintenance', 'care', 'who maintains'],
    answer: '🧑‍🌾 Our team and local volunteers maintain the gardens. We also train residents to keep the green going!'
  },
  {
    keywords: ['newsletter', 'subscribe', 'updates'],
    answer: '📬 Subscribe to our newsletter on the Home page to get updates on new gardens, events, and sustainability tips!'
  },
  {
    keywords: ['location', 'where', 'city', 'area'],
    answer: '📍 We operate in urban areas and are expanding! Contact us to see if we can green your rooftop.'
  },
  {
    keywords: ['about', 'mission', 'vision'],
    answer: '🌏 Our mission is to transform unused rooftops into vibrant gardens, promote sustainability, and connect communities. Read more on our About page!'
  },
  {
    keywords: ['blog', 'news', 'stories'],
    answer: '📰 Check out our Blog for the latest news, tips, and inspiring stories from our community gardens.'
  },
  {
    keywords: ['gallery', 'photos', 'pictures'],
    answer: '📸 Visit our Gallery to see before-and-after photos and highlights from our community events!'
  },
  {
    keywords: ['partner', 'partnership', 'business', 'school', 'organization'],
    answer: '🤝 We love partnering with businesses, schools, and organizations! Reach out via Get Involved to collaborate.'
  },
  {
    keywords: ['faq', 'question', 'help'],
    answer: '❓ You can find answers to common questions in our FAQ section on the Home page, or just ask me!'
  },
];

function getBotResponse(question) {
  const q = question.toLowerCase();
  for (const faq of faqs) {
    if (faq.keywords.some(kw => q.includes(kw))) {
      return faq.answer;
    }
  }
  return "🌼 I'm here to help with anything about Urban GreenScape! Try asking about volunteering, rooftop gardens, our services, events, or how to get involved. If you need more info, check our FAQ or Contact page!";
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hi! I am Urban GreenBot 🌿\nYour friendly guide to all things Urban GreenScape. How can I help you today?' }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = e => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getBotResponse(input) };
    setMessages(msgs => [...msgs, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      {open ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <span className="chatbot-avatar">🌿</span>
              <div>
                <div className="chatbot-title">Urban GreenBot</div>
                <div className="chatbot-subtitle">Your Eco Assistant</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="chatbot-close">&times;</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.from}`}>
                <div className="chatbot-message-content">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="chatbot-input-container">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send">Send</button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="chatbot-toggle"
          aria-label="Open chatbot"
        >
          <span className="chatbot-icon">🌿</span>
        </button>
      )}
    </div>
  );
}

export default Chatbot; 