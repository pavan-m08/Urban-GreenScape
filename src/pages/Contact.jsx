import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
      <p className="mb-6 text-green-700">Have questions or want to get started? Fill out the form below or email us at <a href="mailto:info@urbangreenscape.com" className="underline">info@urbangreenscape.com</a>.</p>
      {submitted ? (
        <div className="bg-green-100 p-4 rounded text-green-800">Thank you for reaching out! We'll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-green-700">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-green-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-green-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-green-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-green-700">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required className="w-full border border-green-300 rounded px-3 py-2" rows={5}></textarea>
          </div>
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">Send Message</button>
        </form>
      )}
    </section>
  );
}

export default Contact; 