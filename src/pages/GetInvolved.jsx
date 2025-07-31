import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GetInvolved.css';

function GetInvolved() {
  const navigate = useNavigate();
  const [donateOpen, setDonateOpen] = useState(false);
  const [donation, setDonation] = useState({ name: '', email: '', amount: '', mode: 'UPI' });
  const [donated, setDonated] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [partnership, setPartnership] = useState({ name: '', email: '', organization: '', amount: '', mode: 'UPI' });
  const [partnered, setPartnered] = useState(false);
  const [partnerError, setPartnerError] = useState('');
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [volunteer, setVolunteer] = useState({ name: '', email: '', phone: '', experience: 'Beginner', availability: 'Weekends' });
  const [volunteered, setVolunteered] = useState(false);
  const [rooftopOpen, setRooftopOpen] = useState(false);
  const [rooftop, setRooftop] = useState({ name: '', email: '', phone: '', address: '', rooftopSize: 'Small', preferredDate: '' });
  const [rooftopScheduled, setRooftopScheduled] = useState(false);

  // Attractive Leaf SVG as string for HTML receipts
  const leafLogoSVG = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="18" cy="18" rx="16" ry="16" fill="#22c55e" /><path d="M18 30c-5-2.5-9-7.5-9-13 0-5 4-9 9-9s9 4 9 9c0 5.5-4 10.5-9 13z" fill="#15803d" /><path d="M18 30V9" stroke="#fff" stroke-width="2.5" stroke-linecap="round" /><path d="M18 18c2-2 5-2 7-2" stroke="#bbf7d0" stroke-width="1.5" stroke-linecap="round" /></svg>`;

  const handleDonateChange = e => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleDonateSubmit = e => {
    e.preventDefault();
    setDonated(true);
  };

  const handlePartnerChange = e => {
    setPartnership({ ...partnership, [e.target.name]: e.target.value });
    if (e.target.name === 'amount' && partnerError) setPartnerError('');
  };

  const handlePartnerSubmit = e => {
    e.preventDefault();
    if (Number(partnership.amount) <= 10000) {
      setPartnerError('Investment amount must be greater than ₹10,000.');
      return;
    }
    setPartnered(true);
  };

  const handleVolunteerChange = e => {
    setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
  };

  const handleVolunteerSubmit = e => {
    e.preventDefault();
    setVolunteered(true);
  };

  const handleRooftopChange = e => {
    setRooftop({ ...rooftop, [e.target.name]: e.target.value });
  };

  const handleRooftopSubmit = e => {
    e.preventDefault();
    setRooftopScheduled(true);
  };

  const handleDownloadReceipt = () => {
    const html = `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Donation Receipt</title></head><body style='font-family:sans-serif;'>
      <div style='max-width:400px;margin:40px auto;padding:24px;border:1px solid #22c55e;border-radius:12px;background:#f0fdf4;'>
        <div style='text-align:center;margin-bottom:16px;'>
          ${leafLogoSVG}<br/>
          <span style='font-size:1.5em;font-weight:bold;color:#15803d;'>Urban GreenScape</span>
        </div>
        <h2 style='color:#15803d;text-align:center;'>Donation Receipt</h2>
        <p><b>Name:</b> ${donation.name}</p>
        <p><b>Email:</b> ${donation.email}</p>
        <p><b>Amount:</b> ₹${donation.amount}</p>
        <p><b>Payment Mode:</b> ${donation.mode}</p>
        <p><b>Date:</b> ${new Date().toLocaleString()}</p>
        <div style='margin-top:24px;text-align:center;color:#22c55e;font-weight:bold;'>Thank you for supporting greener cities! 🌱</div>
      </div>
    </body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'UrbanGreenScape-Donation-Receipt.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPartnerReceipt = () => {
    const html = `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Partnership Receipt</title></head><body style='font-family:sans-serif;'>
      <div style='max-width:400px;margin:40px auto;padding:24px;border:1px solid #22c55e;border-radius:12px;background:#f0fdf4;'>
        <div style='text-align:center;margin-bottom:16px;'>
          ${leafLogoSVG}<br/>
          <span style='font-size:1.5em;font-weight:bold;color:#15803d;'>Urban GreenScape</span>
        </div>
        <h2 style='color:#15803d;text-align:center;'>Partnership Receipt</h2>
        <p><b>Name:</b> ${partnership.name}</p>
        <p><b>Email:</b> ${partnership.email}</p>
        <p><b>Organization:</b> ${partnership.organization}</p>
        <p><b>Investment Amount:</b> ₹${partnership.amount}</p>
        <p><b>Payment Mode:</b> ${partnership.mode}</p>
        <p><b>Date:</b> ${new Date().toLocaleString()}</p>
        <div style='margin-top:24px;text-align:center;color:#22c55e;font-weight:bold;'>Thank you for partnering with us for a greener future! 🤝🌱</div>
      </div>
    </body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'UrbanGreenScape-Partnership-Receipt.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadVolunteerReceipt = () => {
    const html = `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Volunteer Registration</title></head><body style='font-family:sans-serif;'>
      <div style='max-width:400px;margin:40px auto;padding:24px;border:1px solid #22c55e;border-radius:12px;background:#f0fdf4;'>
        <div style='text-align:center;margin-bottom:16px;'>
          ${leafLogoSVG}<br/>
          <span style='font-size:1.5em;font-weight:bold;color:#15803d;'>Urban GreenScape</span>
        </div>
        <h2 style='color:#15803d;text-align:center;'>Volunteer Registration</h2>
        <p><b>Name:</b> ${volunteer.name}</p>
        <p><b>Email:</b> ${volunteer.email}</p>
        <p><b>Phone:</b> ${volunteer.phone}</p>
        <p><b>Experience Level:</b> ${volunteer.experience}</p>
        <p><b>Availability:</b> ${volunteer.availability}</p>
        <p><b>Date:</b> ${new Date().toLocaleString()}</p>
        <div style='margin-top:24px;text-align:center;color:#22c55e;font-weight:bold;'>Thank you for joining our volunteer team! 🌱👥</div>
      </div>
    </body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'UrbanGreenScape-Volunteer-Registration.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadRooftopReceipt = () => {
    const html = `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Rooftop Consultation</title></head><body style='font-family:sans-serif;'>
      <div style='max-width:400px;margin:40px auto;padding:24px;border:1px solid #22c55e;border-radius:12px;background:#f0fdf4;'>
        <div style='text-align:center;margin-bottom:16px;'>
          ${leafLogoSVG}<br/>
          <span style='font-size:1.5em;font-weight:bold;color:#15803d;'>Urban GreenScape</span>
        </div>
        <h2 style='color:#15803d;text-align:center;'>Rooftop Consultation</h2>
        <p><b>Name:</b> ${rooftop.name}</p>
        <p><b>Email:</b> ${rooftop.email}</p>
        <p><b>Phone:</b> ${rooftop.phone}</p>
        <p><b>Address:</b> ${rooftop.address}</p>
        <p><b>Rooftop Size:</b> ${rooftop.rooftopSize}</p>
        <p><b>Preferred Date:</b> ${rooftop.preferredDate}</p>
        <p><b>Date:</b> ${new Date().toLocaleString()}</p>
        <div style='margin-top:24px;text-align:center;color:#22c55e;font-weight:bold;'>We'll contact you soon to schedule your consultation! 🏠🌱</div>
      </div>
    </body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'UrbanGreenScape-Rooftop-Consultation.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="get-involved-container">
      <h2 className="get-involved-title">Get Involved</h2>
      <div className="get-involved-sections">
        <div className="section-card">
          <div className="section-content">
            <h3>Volunteer</h3>
            <p>Join our team of volunteers and help us build and maintain rooftop gardens across the city.</p>
          </div>
          <button
            onClick={() => { setVolunteerOpen(true); setVolunteered(false); }}
            className="section-button"
          >
            Register as Volunteer
          </button>
        </div>
        <div className="section-card">
          <div className="section-content">
            <h3>Green Your Rooftop!</h3>
            <p>Ready to transform your rooftop into a lush garden? Schedule a free consultation with our experts and start your green journey today.</p>
          </div>
          <button
            onClick={() => { setRooftopOpen(true); setRooftopScheduled(false); }}
            className="section-button"
          >
            Schedule Appointment
          </button>
        </div>
        <div className="section-card">
          <div className="section-content">
            <h3>Partner With Us</h3>
            <p>Are you a business, school, or organization? Partner with Urban GreenScape to create green spaces for your community.</p>
          </div>
          <button
            onClick={() => { setPartnerOpen(true); setPartnered(false); }}
            className="section-button"
          >
            Become a Partner
          </button>
        </div>
        <div className="section-card">
          <div className="section-content">
            <h3>Donate</h3>
            <p>Your support helps us expand our reach and impact more communities.</p>
          </div>
          <button
            onClick={() => { setDonateOpen(true); setDonated(false); }}
            className="section-button"
          >
            Donate Now
          </button>
        </div>
      </div>
      {/* Volunteer Modal */}
      {volunteerOpen && (
        <div className="modal-overlay" onClick={() => setVolunteerOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setVolunteerOpen(false)}>&times;</button>
            <h3 className="modal-title">Register as Volunteer</h3>
            {!volunteered ? (
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" value={volunteer.name} onChange={handleVolunteerChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" value={volunteer.email} onChange={handleVolunteerChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" name="phone" value={volunteer.phone} onChange={handleVolunteerChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Experience Level</label>
                  <select name="experience" value={volunteer.experience} onChange={handleVolunteerChange} className="form-select">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Availability</label>
                  <select name="availability" value={volunteer.availability} onChange={handleVolunteerChange} className="form-select">
                    <option value="Weekends">Weekends</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                <button type="submit" className="submit-button">Register as Volunteer</button>
              </form>
            ) : (
              <div className="text-center">
                <div className="success-message">Thank you for registering as a volunteer, {volunteer.name}! 🌱👥<br/>A registration receipt is available for download below.</div>
                <div className="receipt-container">
                  <div className="receipt-header">
                    <span className="leaf-logo" dangerouslySetInnerHTML={{ __html: leafLogoSVG }} />
                    <span className="receipt-title">Urban GreenScape</span>
                  </div>
                  <div className="receipt-details">
                    <div><b>Name:</b> {volunteer.name}</div>
                    <div><b>Email:</b> {volunteer.email}</div>
                    <div><b>Phone:</b> {volunteer.phone}</div>
                    <div><b>Experience Level:</b> {volunteer.experience}</div>
                    <div><b>Availability:</b> {volunteer.availability}</div>
                    <div><b>Date:</b> {new Date().toLocaleString()}</div>
                  </div>
                </div>
                <button onClick={handleDownloadVolunteerReceipt} className="download-button">Download Receipt</button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Rooftop Consultation Modal */}
      {rooftopOpen && (
        <div className="modal-overlay" onClick={() => setRooftopOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setRooftopOpen(false)}>&times;</button>
            <h3 className="modal-title">Schedule Rooftop Consultation</h3>
            {!rooftopScheduled ? (
              <form onSubmit={handleRooftopSubmit} className="space-y-4">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" value={rooftop.name} onChange={handleRooftopChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" value={rooftop.email} onChange={handleRooftopChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" name="phone" value={rooftop.phone} onChange={handleRooftopChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input type="text" name="address" value={rooftop.address} onChange={handleRooftopChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Rooftop Size</label>
                  <select name="rooftopSize" value={rooftop.rooftopSize} onChange={handleRooftopChange} className="form-select">
                    <option value="Small">Small (Under 500 sq ft)</option>
                    <option value="Medium">Medium (500-1000 sq ft)</option>
                    <option value="Large">Large (Over 1000 sq ft)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input type="date" name="preferredDate" value={rooftop.preferredDate} onChange={handleRooftopChange} required className="form-input" />
                </div>
                <button type="submit" className="submit-button">Schedule Consultation</button>
              </form>
            ) : (
              <div className="text-center">
                <div className="success-message">Thank you for scheduling a consultation, {rooftop.name}! 🏠🌱<br/>A consultation receipt is available for download below.</div>
                <div className="receipt-container">
                  <div className="receipt-header">
                    <span className="leaf-logo" dangerouslySetInnerHTML={{ __html: leafLogoSVG }} />
                    <span className="receipt-title">Urban GreenScape</span>
                  </div>
                  <div className="receipt-details">
                    <div><b>Name:</b> {rooftop.name}</div>
                    <div><b>Email:</b> {rooftop.email}</div>
                    <div><b>Phone:</b> {rooftop.phone}</div>
                    <div><b>Address:</b> {rooftop.address}</div>
                    <div><b>Rooftop Size:</b> {rooftop.rooftopSize}</div>
                    <div><b>Preferred Date:</b> {rooftop.preferredDate}</div>
                    <div><b>Date:</b> {new Date().toLocaleString()}</div>
                  </div>
                </div>
                <button onClick={handleDownloadRooftopReceipt} className="download-button">Download Receipt</button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Donation Modal */}
      {donateOpen && (
        <div className="modal-overlay" onClick={() => setDonateOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setDonateOpen(false)}>&times;</button>
            <h3 className="modal-title">Donate to Urban GreenScape</h3>
            {!donated ? (
              <form onSubmit={handleDonateSubmit} className="space-y-4">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" value={donation.name} onChange={handleDonateChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" value={donation.email} onChange={handleDonateChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Amount (INR)</label>
                  <input type="number" name="amount" value={donation.amount} onChange={handleDonateChange} required min="1" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mode of Payment</label>
                  <select name="mode" value={donation.mode} onChange={handleDonateChange} className="form-select">
                    <option value="UPI">UPI</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Net Banking">Net Banking</option>
                  </select>
                </div>
                <button type="submit" className="submit-button">Donate</button>
              </form>
            ) : (
              <div className="text-center">
                <div className="success-message">Thank you for your generous donation, {donation.name}! 🌱<br/>A receipt is available for download below.</div>
                <div className="receipt-container">
                  <div className="receipt-header">
                    <span className="leaf-logo" dangerouslySetInnerHTML={{ __html: leafLogoSVG }} />
                    <span className="receipt-title">Urban GreenScape</span>
                  </div>
                  <div className="receipt-details">
                    <div><b>Name:</b> {donation.name}</div>
                    <div><b>Email:</b> {donation.email}</div>
                    <div><b>Amount:</b> ₹{donation.amount}</div>
                    <div><b>Payment Mode:</b> {donation.mode}</div>
                    <div><b>Date:</b> {new Date().toLocaleString()}</div>
                  </div>
                </div>
                <button onClick={handleDownloadReceipt} className="download-button">Download Receipt</button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Partnership Modal */}
      {partnerOpen && (
        <div className="modal-overlay" onClick={() => setPartnerOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setPartnerOpen(false)}>&times;</button>
            <h3 className="modal-title">Partner with Urban GreenScape</h3>
            {!partnered ? (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" value={partnership.name} onChange={handlePartnerChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" value={partnership.email} onChange={handlePartnerChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Organization</label>
                  <input type="text" name="organization" value={partnership.organization} onChange={handlePartnerChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Investment Amount (INR)</label>
                  <input type="number" name="amount" value={partnership.amount} onChange={handlePartnerChange} required min="10001" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mode of Payment</label>
                  <select name="mode" value={partnership.mode} onChange={handlePartnerChange} className="form-select">
                    <option value="UPI">UPI</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Net Banking">Net Banking</option>
                  </select>
                </div>
                {partnerError && <div className="error-message">{partnerError}</div>}
                <button type="submit" className="submit-button">Submit Partnership</button>
              </form>
            ) : (
              <div className="text-center">
                <div className="success-message">Thank you for partnering with us, {partnership.name}! 🤝🌱<br/>A partnership receipt is available for download below.</div>
                <div className="receipt-container">
                  <div className="receipt-header">
                    <span className="leaf-logo" dangerouslySetInnerHTML={{ __html: leafLogoSVG }} />
                    <span className="receipt-title">Urban GreenScape</span>
                  </div>
                  <div className="receipt-details">
                    <div><b>Name:</b> {partnership.name}</div>
                    <div><b>Email:</b> {partnership.email}</div>
                    <div><b>Organization:</b> {partnership.organization}</div>
                    <div><b>Investment Amount:</b> ₹{partnership.amount}</div>
                    <div><b>Payment Mode:</b> {partnership.mode}</div>
                    <div><b>Date:</b> {new Date().toLocaleString()}</div>
                  </div>
                </div>
                <button onClick={handleDownloadPartnerReceipt} className="download-button">Download Receipt</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default GetInvolved; 