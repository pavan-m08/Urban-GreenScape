import React, { useState } from 'react';

function ScheduleAppointment() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Schedule Your Rooftop Consultation</h2>
      {submitted ? (
        <div className="bg-green-100 p-6 rounded text-green-800 font-semibold text-center">Thank you for scheduling your appointment! Our team will contact you soon to confirm the details.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-green-50 p-6 rounded shadow">
          <div>
            <label className="block mb-1 font-semibold text-green-700">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-green-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-green-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-green-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-green-700">Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-green-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-green-700">Address</label>
            <textarea name="address" value={form.address} onChange={handleChange} required className="w-full border border-green-300 rounded px-3 py-2" rows={2}></textarea>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-green-700">Preferred Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full border border-green-300 rounded px-3 py-2" />
          </div>
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">Schedule</button>
        </form>
      )}
    </section>
  );
}

export default ScheduleAppointment; 