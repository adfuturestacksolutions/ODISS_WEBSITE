import React, { useState } from "react";
import "./GetConnected.css";

const locations = [
  {
    id: "bengaluru",
    badge: "GLOBAL HEADQUARTERS",
    city: "Bengaluru",
    country: "India",
    subtitle: "Corporate Innovation Centre",
    image: "/bengaluru.jpg",
    address:
      "ODISS Innovations Hub, Suite 402, 4th Floor, Prestige Tech Cloud, International Airport Road, Devanahalli, Bengaluru, Karnataka 560066",
    phone: "+91 80 4567 8901",
    hours: "Mon – Sat: 9:00 AM – 6:30 PM (IST)",
    focus: "Corporate & Strategy",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Prestige+Tech+Cloud+International+Airport+Road+Devanahalli+Bengaluru+560066",
  },
  {
    id: "hyderabad",
    badge: "R&D & MANUFACTURING",
    city: "Hyderabad",
    country: "India",
    subtitle: "Bio-Polymer & Film Plant",
    image: "/hyderabad.jpg",
    address:
      "ODISS Bio-Pharma Zone, Plot No. 88, Genome Valley Phase-II, Shamirpet Industrial Area, Hyderabad, Telangana 500078",
    phone: "+91 40 2345 6789",
    hours: "Mon – Sat: 8:30 AM – 7:00 PM (IST)",
    focus: "Manufacturing & Lab",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Genome+Valley+Phase-II+Shamirpet+Industrial+Area+Hyderabad+500078",
  },
  {
    id: "dubai",
    badge: "GLOBAL TRADE HUB",
    city: "Dubai",
    country: "UAE",
    subtitle: "Middle East & Global Operations",
    image: "/dubai.jpg",
    address:
      "ODISS Global Trade Center, Level 14, Prime Tower, Business Bay, P.O. Box 41823, Dubai, United Arab Emirates",
    phone: "+971 4 321 9870",
    hours: "Sun – Thu: 9:00 AM – 6:00 PM (GST)",
    focus: "Global Exports & Supply",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Prime+Tower+Business+Bay+Dubai+United+Arab+Emirates",
  },
];

const icons = {
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </svg>
  ),
};

function GetConnected() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleInquireLocation = (locId) => {
    setSelectedLocation(locId);
    const formSection = document.getElementById("contact-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="get-connected-page">
      {/* =====================================================
          SIMPLE PAGE INTRO
      ===================================================== */}
      <section className="connect-intro">
        <div className="connect-intro-inner">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            GET CONNECTED
          </span>

          <h1>
            Let&apos;s start a{" "}
            <span>conversation.</span>
          </h1>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}
      <section className="contact-section" id="contact-section">
        <div className="contact-card">
          <div className="contact-info">
            <div>
              <span className="small-label">WE&apos;RE HERE TO HELP</span>

              <h2>
                Let&apos;s build something{" "}
                <span>extraordinary</span> together.
              </h2>
            </div>

            <div className="contact-steps">
              <div className="contact-step">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-6a3 3 0 0 1-1-2V8a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v7Z" />
                    <path d="M8 10h8M8 13h5" />
                  </svg>
                </div>

                <div>
                  <strong>Tell us your requirement</strong>
                  <p>
                    Share details about your project, idea or business need.
                  </p>
                </div>
              </div>

              <div className="step-line"></div>

              <div className="contact-step">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2.5" />
                    <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
                    <path d="M15 15c3 0 5 2 5 5" />
                  </svg>
                </div>

                <div>
                  <strong>Our experts review it</strong>
                  <p>
                    Our team will understand your needs and explore the best fit.
                  </p>
                </div>
              </div>

              <div className="step-line"></div>

              <div className="contact-step">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8 12 2.5 2.5L16 9" />
                  </svg>
                </div>

                <div>
                  <strong>We connect with you</strong>
                  <p>
                    Expect a response from our team within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-row">
              <div className="form-field">
                <label>Full Name <span>*</span></label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="form-field">
                <label>Company Name <span>*</span></label>
                <input type="text" placeholder="Company name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Work Email <span>*</span></label>
                <input type="email" placeholder="you@company.com" />
              </div>

              <div className="form-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="form-field">
              <label>Select Location <span>*</span></label>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="" disabled>
                  Choose a location
                </option>

                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.city}, {location.country} ({location.badge})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label>Inquiry Type <span>*</span></label>

              <select defaultValue="">
                <option value="" disabled>
                  Select inquiry type
                </option>
                <option>B2B / OEM Private Label</option>
                <option>Manufacturing</option>
                <option>Distribution</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="form-field">
              <label>Message <span>*</span></label>

              <textarea
                rows="4"
                placeholder="Tell us about your requirement..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <span>Send Message</span>

              <span className="submit-arrow">
                {icons.arrowRight}
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS - LUXURY ARCHITECTURAL SHOWCASE
      ===================================================== */}
      <section className="locations-section" id="locations-section">
        <div className="locations-heading">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            OUR LOCATIONS
          </span>

          <h2>
            Connecting globally.{" "}
            <span>Delivering locally.</span>
          </h2>

          <p>
            Explore our state-of-the-art corporate innovation center, specialized manufacturing plants, and global trade hubs.
          </p>
        </div>

        {/* LUXURY CARDS GRID */}
        <div className="locations-cards-grid">
          {locations.map((loc) => (
            <article
              key={loc.id}
              className="location-card-premium"
            >
              {/* Media Header */}
              <div className="loc-card-media">
                <img
                  src={loc.image}
                  alt={`${loc.city}, ${loc.country}`}
                  loading="lazy"
                />
                <div className="loc-card-overlay"></div>

                {/* Floating Architectural Badge */}
                <div className="loc-badge-wrap">
                  <span className="loc-badge">
                    <span className="loc-badge-dot"></span>
                    {loc.badge}
                  </span>
                </div>

                {/* City & Subtitle on Image Scrim */}
                <div className="loc-media-caption">
                  <div className="loc-city-row">
                    <h3>{loc.city}</h3>
                    <span className="loc-country-tag">{loc.country}</span>
                  </div>
                  <p className="loc-subtitle">{loc.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="loc-card-body">
                {/* Core Mission Tag */}
                <div className="loc-focus-tag">
                  <span className="focus-accent-bar"></span>
                  <div className="focus-content">
                    <span className="focus-label">FOCUS AREA</span>
                    <strong className="focus-title">{loc.focus}</strong>
                  </div>
                </div>

                <div className="loc-body-divider"></div>

                {/* Details List */}
                <div className="loc-details-list">
                  {/* Address */}
                  <div className="loc-detail-row">
                    <div className="loc-row-icon" title="Address">
                      {icons.location}
                    </div>
                    <div className="loc-row-text">
                      <span className="loc-row-label">Address</span>
                      <p>{loc.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="loc-detail-row">
                    <div className="loc-row-icon" title="Direct Phone">
                      {icons.phone}
                    </div>
                    <div className="loc-row-text">
                      <span className="loc-row-label">Direct Contact</span>
                      <a
                        href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                        className="loc-phone-link"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="loc-detail-row">
                    <div className="loc-row-icon" title="Working Hours">
                      {icons.clock}
                    </div>
                    <div className="loc-row-text">
                      <span className="loc-row-label">Working Hours</span>
                      <p>{loc.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="loc-card-footer">
                <button
                  type="button"
                  className="loc-inquire-btn"
                  onClick={() => handleInquireLocation(loc.id)}
                >
                  <span>Connect Here</span>
                  <span className="btn-arrow-icon">{icons.arrowRight}</span>
                </button>

                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-map-btn"
                  title="View on Google Maps"
                >
                  <span>View Map</span>
                  {icons.external}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GetConnected;