import React from 'react';

function About() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-4">About Urban GreenScape</h2>
      <p className="mb-4 text-green-700">Urban GreenScape is dedicated to transforming underutilized urban rooftops into thriving community gardens. Our mission is to foster sustainability, provide access to fresh local food, and strengthen community bonds in cities.</p>
      <h3 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Our Vision</h3>
      <p className="mb-4">We envision a future where every city rooftop is a green oasis, contributing to a healthier environment and a more connected community.</p>
      <h3 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Meet the Team</h3>
      <ul className="list-disc pl-6">
        <li><span className="font-semibold">Pavan.M</span> – Founder & CEO</li>
        <li><span className="font-semibold">Prajwal Reddy</span> – Urban Agriculture Specialist</li>
        <li><span className="font-semibold">Prajwal Kiran</span> – Community Engagement Lead</li>
        <li><span className="font-semibold">Kaushik</span> –Marketing Management Head </li>
      </ul>
    </section>
  );
}

export default About; 