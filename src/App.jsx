import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import VolunteerRegister from './pages/VolunteerRegister';
import ScheduleAppointment from './pages/ScheduleAppointment';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/volunteer-register" element={<VolunteerRegister />} />
            <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App; 