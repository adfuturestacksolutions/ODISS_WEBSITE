import React, { useState } from "react";
import "./GetConnected.css";

const locations = [
  {
    id: 1,
    badge: "Headquarters",
    city: "Bengaluru, India",
    facility: "Corporate Innovation Centre",
    address: "ODISS Innovations Hub, Suite 402, 4th Floor, Prestige Tech Cloud, International Airport Road, Devanahalli, Bengaluru, Karnataka 560066",
    phone: "+91 80 4567 8901",
    phoneHref: "tel:+918045678901",
    hours: "Monday – Saturday: 9:00 AM – 6:30 PM (IST)",
    tag: "Corporate & Strategy",
  },
  {
    id: 2,
    badge: "R&D & Manufacturing",
    city: "Hyderabad, India",
    facility: "Bio-Polymer & Film Plant",
    address: "ODISS Bio-Pharma Zone, Plot No. 88, Genome Valley Phase-II, Shamirpet Industrial Area, Hyderabad, Telangana 500078",
    phone: "+91 40 2345 6789",
    phoneHref: "tel:+914023456789",
    hours: "Monday – Saturday: 8:30 AM – 7:00 PM (IST)",
    tag: "Manufacturing & Lab",
  },
  {
    id: 3,
    badge: "Global Trade Hub",
    city: "Dubai, UAE",
    facility: "Middle East & Global Operations",
    address: "ODISS Global Trade Center, Level 14, Prime Tower, Business Bay, P.O. Box 41823, Dubai, United Arab Emirates",
    phone: "+971 4 321 9870",
    phoneHref: "tel:+97143219870",
    hours: "Sunday – Thursday: 9:00 AM – 6:00 PM (GST)",
    tag: "Global Exports & Supply",
  },
];

const commonEmail = "info@odiss.in";

const GetConnected = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        name: "",
        email: "",
        phone: "",
        location: "Bengaluru, India (Headquarters)",
        inquiryType: "B2B / OEM Private Label",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="get-connected-page">
      {/* =========================================
          1. MAIN CONTACT & INQUIRY FORM SECTION (TOP)
      ========================================= */}
      <section
        style={{
          padding: "70px 24px 70px",
          backgroundColor: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Gold Ambient Radial */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1000px",
            height: "450px",
            background: "radial-gradient(ellipse at 50% 0%, rgba(243, 182, 63, 0.1) 0%, rgba(255, 255, 255, 0) 75%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div
            className="contact-main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.15fr",
              gap: "60px",
              alignItems: "flex-start",
            }}
          >
            {/* Left Info Column */}
            <div className="reveal-left">
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  backgroundColor: "rgba(243, 182, 63, 0.15)",
                  color: "#d99b2f",
                  borderRadius: "20px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "14px",
                }}
              >
                ✦ Send Us a Message
              </div>

              <h1
                style={{
                  fontSize: "clamp(30px, 3.6vw, 46px)",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: 1.2,
                  margin: "0 0 20px",
                  letterSpacing: "-0.025em",
                }}
              >
                Start a conversation with our leadership & formulation experts.
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#475569",
                  marginBottom: "28px",
                }}
              >
                Whether you are looking to explore OEM contract manufacturing, commercial distribution,
                custom oral thin film formulations, or retail inquiries, our team guarantees a response within 24 hours.
              </p>

              {/* Universal Email Box */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "32px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#64748b" }}>
                  Universal Contact Email:
                </span>
                <a
                  href={`mailto:${commonEmail}`}
                  style={{ fontSize: "15px", fontWeight: 700, color: "#d99b2f", textDecoration: "none" }}
                >
                  {commonEmail}
                </a>
              </div>

              {/* Trust Points */}
              <div className="reveal-stagger" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    title: "Guaranteed 24-Hour Response",
                    desc: "Direct communication with assigned technical project managers.",
                  },
                  {
                    title: "NDA Protected Formulations",
                    desc: "Confidentiality assured for proprietary recipe and delivery specifications.",
                  },
                  {
                    title: "Global Export Compliance",
                    desc: "GMP, FDA-aligned, and international regulatory support.",
                  },
                ].map((point, idx) => (
                  <div key={idx} className={`reveal-up stagger-${idx + 1}`} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "#f3b63f",
                        color: "#1c1917",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>
                        {point.title}
                      </h4>
                      <p style={{ fontSize: "14px", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card */}
            <div className="contact-form-card reveal-right reveal-card anim-card-hover">
              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      backgroundColor: "#fef3c7",
                      color: "#d99b2f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "36px",
                    }}
                  >
                    ✓
                  </div>
                  <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: "15px", color: "#64748b", margin: 0, maxWidth: "400px" }}>
                    Thank you for connecting with ODISS. Our team has received your inquiry and will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 6px",
                    }}
                  >
                    Inquiry Form
                  </h3>

                  <div>
                    <label style={{ display: "block", fontSize: "13.5px", fontWeight: 600, color: "#334155", marginBottom: "7px" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma / Dr. Jane Doe"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13.5px", fontWeight: 600, color: "#334155", marginBottom: "7px" }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13.5px", fontWeight: 600, color: "#334155", marginBottom: "7px" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13.5px", fontWeight: 600, color: "#334155", marginBottom: "7px" }}>
                        Preferred Location
                      </label>
                      <select
                        className="form-input"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      >
                        <option value="Bengaluru, India (Headquarters)">Bengaluru (HQ)</option>
                        <option value="Hyderabad, India (R&D Plant)">Hyderabad (R&D & Plant)</option>
                        <option value="Dubai, UAE (Global Hub)">Dubai (Global Trade)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13.5px", fontWeight: 600, color: "#334155", marginBottom: "7px" }}>
                        Inquiry Type
                      </label>
                      <select
                        className="form-input"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      >
                        <option value="B2B / OEM Private Label">B2B & Private Label</option>
                        <option value="Commercial Distribution">Commercial Distribution</option>
                        <option value="Custom Formulation">Custom Formulation</option>
                        <option value="General Information">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13.5px", fontWeight: 600, color: "#334155", marginBottom: "7px" }}>
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your requirements, formulation needs, or distribution territory..."
                      className="form-input"
                      style={{ resize: "vertical" }}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-gold-submit">
                    Send Inquiry Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. 3 GLOBAL STRATEGIC LOCATIONS (BOTTOM)
      ========================================= */}
      <section
        style={{
          padding: "70px 24px 90px",
          backgroundColor: "#f8fafc",
          borderTop: "1px solid rgba(226, 232, 240, 0.8)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="reveal-up" style={{ textAlign: "center", marginBottom: "45px" }}>
            <h2
              style={{
                fontSize: "clamp(26px, 3.2vw, 38px)",
                fontWeight: 700,
                color: "#0f172a",
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}
            >
              Our 3 Strategic <span style={{ color: "#f3b63f" }}>Locations</span>
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", margin: 0 }}>
              Operating across strategic tech, research, and global commerce corridors.
            </p>
          </div>

          <div
            className="locations-grid reveal-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "28px",
            }}
          >
            {locations.map((loc, idx) => (
              <div key={loc.id} className={`location-card reveal-card anim-card-hover stagger-${idx + 1}`}>
                <div>
                  {/* Top Badge */}
                  <div className="location-badge">
                    <span>📍</span> {loc.badge}
                  </div>

                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 6px",
                      lineHeight: 1.3,
                    }}
                  >
                    {loc.city}
                  </h3>

                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#f3b63f",
                      marginBottom: "18px",
                    }}
                  >
                    {loc.facility}
                  </div>

                  {/* Address */}
                  <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#64748b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, marginTop: "3px" }}
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p
                      style={{
                        fontSize: "14.5px",
                        lineHeight: "1.6",
                        color: "#475569",
                        margin: 0,
                        fontWeight: 400,
                      }}
                    >
                      {loc.address}
                    </p>
                  </div>
                </div>

                <div>
                  <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "18px 0" }} />

                  {/* Phone */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(243, 182, 63, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#d99b2f",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <a
                      href={loc.phoneHref}
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#0f172a",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#f3b63f")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}
                    >
                      {loc.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#64748b",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
                      {loc.hours}
                    </span>
                  </div>
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
