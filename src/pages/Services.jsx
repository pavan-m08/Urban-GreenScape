import React from 'react';

function Services() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Our Services</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-xl font-semibold text-green-700">Consultation</h3>
          <p>We assess your rooftop and provide expert advice on transforming it into a productive garden.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold text-green-700">Design & Planning</h3>
          <p>Our team creates custom garden designs tailored to your space and community needs.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold text-green-700">Installation</h3>
          <p>We handle the full installation process, from soil and planters to irrigation and plant selection.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold text-green-700">Maintenance</h3>
          <p>Ongoing care and support to keep your rooftop garden thriving year-round.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold text-green-700">Workshops & Events</h3>
          <p>Educational workshops and community events to engage and empower local residents.</p>
        </li>
      </ul>
    </section>
  );
}

export default Services; 