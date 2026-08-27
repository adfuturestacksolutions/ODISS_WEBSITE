import React, { useState } from "react";
import "./GetConnected.css";

const locations = [
  {
    id: 1,
    badge: "HEADQUARTERS",
    city: "Bengaluru, India",
    facility: "Corporate Innovation Centre",
    address: "ODISS Innovations Hub, Suite 402, 4th Floor, Prestige Tech Cloud, International Airport Road, Devanahalli, Bengaluru, Karnataka 560066",
    phone: "+91 80 4567 8901",
    phoneHref: "tel:+918045678901",
    hours: "Monday – Saturday:\n9:00 AM – 6:30 PM (IST)",
    tag: "Corporate & Strategy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    badge: "R&D & MANUFACTURING",
    city: "Hyderabad, India",
    facility: "Bio-Polymer & Film Plant",
    address: "ODISS Bio-Pharma Zone, Plot No. 88, Genome Valley Phase-II, Shamirpet Industrial Area, Hyderabad, Telangana 500078",
    phone: "+91 40 2345 6789",
    phoneHref: "tel:+914023456789",
    hours: "Monday – Saturday:\n8:30 AM – 7:00 PM (IST)",
    tag: "Manufacturing & Lab",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    badge: "GLOBAL TRADE HUB",
    city: "Dubai, UAE",
    facility: "Middle East & Global Operations",
    address: "ODISS Global Trade Center, Level 14, Prime Tower, Business Bay, P.O. Box 41823, Dubai, United Arab Emirates",
    phone: "+971 4 321 9870",
    phoneHref: "tel:+97143219870",
    hours: "Sunday – Thursday:\n9:00 AM – 6:00 PM (GST)",
    tag: "Global Exports & Supply",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400"
  },
];

const commonEmail = "info@odiss.in";

const GetConnected = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    location: "Bengaluru, India (Headquarters)",
    inquiryType: "B2B / OEM Private Label",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        companyName: "",
        workEmail: "",
        phoneNumber: "",
        location: "Bengaluru, India (Headquarters)",
        inquiryType: "B2B / OEM Private Label",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="get-connected-page">
      {/* =========================================
          1. HERO HEADER SECTION
      ========================================= */}
      <section className="gc-hero-section">
        <div className="gc-hero-content">
          <div className="gc-top-label">
            <span className="gc-line"></span> GET CONNECTED
          </div>
          <h1 className="gc-hero-title">
            Let's start<br />a <span className="text-gradient">conversation.</span>
          </h1>
          <p className="gc-hero-subtitle">
            Share your requirements with us and our team<br />will connect with you shortly.
          </p>
          
          <div className="gc-universal-email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="gc-email-text">Universal Contact Email: <a href={`mailto:${commonEmail}`}>{commonEmail}</a></span>
          </div>
        </div>
      </section>

      {/* =========================================
          2. MAIN FORM SECTION
      ========================================= */}
      <section className="gc-form-section">
        <div className="gc-container">
          <div className="gc-form-wrapper">
            
            {/* Left Column: Info & Steps */}
            <div className="gc-info-column">
              <div className="gc-info-header">
                <p className="gc-info-label">WE'RE HERE TO HELP</p>
                <h2 className="gc-info-title">
                  Let's build something<br />
                  <span className="text-gradient">extraordinary</span> together.
                </h2>
              </div>
              
              <div className="gc-steps-container">
                <div className="gc-step">
                  <div className="gc-step-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      <line x1="9" y1="9" x2="15" y2="9"></line>
                      <line x1="9" y1="13" x2="15" y2="13"></line>
                    </svg>
                  </div>
                  <div className="gc-step-content">
                    <h4>Tell us your requirement</h4>
                    <p>Share details about your project, idea or business need.</p>
                  </div>
                </div>
                
                <div className="gc-step">
                  <div className="gc-step-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="gc-step-content">
                    <h4>Our experts review it</h4>
                    <p>Our team will understand your needs and explore the best fit.</p>
                  </div>
                </div>
                
                <div className="gc-step">
                  <div className="gc-step-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="gc-step-content">
                    <h4>We connect with you</h4>
                    <p>Expect a response from our team within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="gc-form-column">
              {submitted ? (
                <div className="gc-success-message">
                  <div className="gc-success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3>Message Received!</h3>
                  <p>Thank you for connecting with ODISS. Our team has received your inquiry and will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="gc-contact-form">
                  <div className="gc-form-row">
                    <div className="gc-input-group">
                      <div className="gc-input-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </div>
                      <input type="text" required placeholder="Full Name *" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                    </div>
                    <div className="gc-input-group">
                      <div className="gc-input-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                      </div>
                      <input type="text" required placeholder="Company Name *" value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} />
                    </div>
                  </div>

                  <div className="gc-form-row">
                    <div className="gc-input-group">
                      <div className="gc-input-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                      </div>
                      <input type="email" required placeholder="Work Email *" value={formData.workEmail} onChange={(e) => setFormData({...formData, workEmail: e.target.value})} />
                    </div>
                    <div className="gc-input-group">
                      <div className="gc-input-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <input type="tel" placeholder="Phone Number" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} />
                    </div>
                  </div>

                  <div className="gc-input-group gc-select-group">
                    <div className="gc-input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div className="gc-select-wrapper">
                      <label>Select Location *</label>
                      <select required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}>
                        <option value="Bengaluru, India (Headquarters)">Bengaluru, India (Headquarters)</option>
                        <option value="Hyderabad, India (R&D Plant)">Hyderabad, India (R&D Plant)</option>
                        <option value="Dubai, UAE (Global Hub)">Dubai, UAE (Global Hub)</option>
                      </select>
                    </div>
                  </div>

                  <div className="gc-input-group gc-select-group">
                    <div className="gc-input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <div className="gc-select-wrapper">
                      <label>Inquiry Type *</label>
                      <select required value={formData.inquiryType} onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}>
                        <option value="B2B / OEM Private Label">B2B / OEM Private Label</option>
                        <option value="Commercial Distribution">Commercial Distribution</option>
                        <option value="Custom Formulation">Custom Formulation</option>
                        <option value="General Information">General Information</option>
                      </select>
                    </div>
                  </div>

                  <div className="gc-input-group gc-textarea-group">
                    <div className="gc-input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    </div>
                    <div className="gc-textarea-wrapper">
                      <label>Message *</label>
                      <textarea required rows={3} placeholder="Tell us about your requirement..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                    </div>
                  </div>

                  <button type="submit" className="gc-submit-btn">
                    <span>Send Message</span>
                    <div className="gc-submit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. LOCATIONS SECTION
      ========================================= */}
      <section className="gc-locations-section">
        <div className="gc-container">
          <div className="gc-locations-header">
            <div className="gc-top-label">
              <span className="gc-line"></span> OUR LOCATIONS
            </div>
            <h2>Connecting globally. <span className="text-gradient">Delivering locally.</span></h2>
            <p>Our offices and facilities around the world.</p>
          </div>

          <div className="gc-locations-grid">
            {locations.map((loc) => (
              <div key={loc.id} className="gc-location-card">
                <div className="gc-loc-top">
                  <div className="gc-loc-badge">{loc.badge}</div>
                  {loc.image && <div className="gc-loc-image" style={{ backgroundImage: `url(${loc.image})` }}></div>}
                </div>
                
                <h3 className="gc-loc-city">{loc.city}</h3>
                <p className="gc-loc-facility">{loc.facility}</p>
                
                <div className="gc-loc-details">
                  <div className="gc-detail-row">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>{loc.address}</span>
                  </div>
                  
                  <div className="gc-detail-row gc-phone-row">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <a href={loc.phoneHref}>{loc.phone}</a>
                  </div>
                  
                  <div className="gc-detail-row">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span style={{ whiteSpace: 'pre-line' }}>{loc.hours}</span>
                  </div>
                </div>
                
                <div className="gc-loc-bottom-tag">
                  {loc.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetConnected;
