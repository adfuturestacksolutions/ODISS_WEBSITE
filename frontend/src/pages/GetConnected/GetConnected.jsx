import React, { useState } from "react";
import "./GetConnected.css";

const locations = [
  {
    id: "bengaluru",
    badge: "HEADQUARTERS",
    city: "Bengaluru, India",
    subtitle: "Corporate Innovation Centre",
    image: "/public/bengaluru.jpg",
    address:
      "ODISS Innovations Hub, Suite 402, 4th Floor, Prestige Tech Cloud, International Airport Road, Devanahalli, Bengaluru, Karnataka 560066",
    phone: "+91 80 4567 8901",
    hours: "Monday – Saturday: 9:00 AM – 6:30 PM (IST)",
    focus: "Corporate & Strategy",
  },
  {
    id: "hyderabad",
    badge: "R&D & MANUFACTURING",
    city: "Hyderabad, India",
    subtitle: "Bio-Polymer & Film Plant",
    image: "/public/hyderabad.jpg",
    address:
      "ODISS Bio-Pharma Zone, Plot No. 88, Genome Valley Phase-II, Shamirpet Industrial Area, Hyderabad, Telangana 500078",
    phone: "+91 40 2345 6789",
    hours: "Monday – Saturday: 8:30 AM – 7:00 PM (IST)",
    focus: "Manufacturing & Lab",
  },
  {
    id: "dubai",
    badge: "GLOBAL TRADE HUB",
    city: "Dubai, UAE",
    subtitle: "Middle East & Global Operations",
    image: "/public/dubai.jpg",
    address:
      "ODISS Global Trade Center, Level 14, Prime Tower, Business Bay, P.O. Box 41823, Dubai, United Arab Emirates",
    phone: "+971 4 321 9870",
    hours: "Sunday – Thursday: 9:00 AM – 6:00 PM (GST)",
    focus: "Global Exports & Supply",
  },
];

const icons = {
  location: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 5.2 2 2 0 0 1 4.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.9Z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
      <path d="M17 9h3v12" />
      <path d="M8 7h2M12 7h2M8 11h2M12 11h2M8 15h2M12 15h2" />
      <path d="M2 21h20" />
    </svg>
  ),
  arrowLeft: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
};

function GetConnected() {
  const [activeLocation, setActiveLocation] = useState(0);
  const [direction, setDirection] = useState("next");

  const current = locations[activeLocation];

  const changeLocation = (directionValue) => {
    setDirection(directionValue);

    setActiveLocation((prev) => {
      if (directionValue === "next") {
        return (prev + 1) % locations.length;
      }

      return (prev - 1 + locations.length) % locations.length;
    });
  };

  const selectLocation = (index) => {
    setDirection(index > activeLocation ? "next" : "prev");
    setActiveLocation(index);
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
      <section className="contact-section">
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
                    Share details about your project, idea
                    or business need.
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
                    Our team will understand your needs
                    and explore the best fit.
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
                    Expect a response from our team
                    within 24 hours.
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* FORM */}
          < form
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

              <select defaultValue="">
                <option value="" disabled>
                  Choose a location
                </option>

                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.city}
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
      </section >


      {/* =====================================================
          LOCATIONS
      ===================================================== */}
      < section className="locations-section" >

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
            Our offices and facilities around the world.
          </p>
        </div>


        {/* LOCATION TABS */}
        <div className="location-tabs">

          {locations.map((location, index) => (
            <button
              key={location.id}
              className={
                activeLocation === index
                  ? "location-tab active"
                  : "location-tab"
              }
              onClick={() => selectLocation(index)}
            >
              <span className="tab-icon">
                {icons.location}
              </span>

              <span>{location.city}</span>
            </button>
          ))}

        </div>


        {/* =================================================
            SINGLE HORIZONTAL LOCATION CARD
        ================================================= */}
        <div className="location-slider-wrapper">

          {/* LEFT ARROW */}
          <button
            className="location-arrow location-arrow-left"
            onClick={() => changeLocation("prev")}
            aria-label="Previous location"
          >
            {icons.arrowLeft}
          </button>


          <div className="location-card">

            {/* IMAGE */}
            <div
              className={`location-image location-${direction}`}
              key={`${current.id}-image`}
            >
              <img
                src={current.image}
                alt={current.city}
              />

              <div className="image-overlay"></div>
            </div>


            {/* DETAILS */}
            <div
              className={`location-details location-${direction}`}
              key={`${current.id}-details`}
            >

              <span className="location-badge">
                {current.badge}
              </span>

              <h3>{current.city}</h3>

              <p className="location-subtitle">
                {current.subtitle}
              </p>

              <div className="details-divider"></div>


              {/* ADDRESS */}
              <div className="detail-item">
                <div className="detail-icon">
                  {icons.location}
                </div>

                <div className="detail-content">
                  <strong>Address</strong>
                  <p>{current.address}</p>
                </div>
              </div>


              {/* PHONE */}
              <div className="detail-item">
                <div className="detail-icon">
                  {icons.phone}
                </div>

                <div className="detail-content">
                  <strong>Phone</strong>
                  <p>{current.phone}</p>
                </div>
              </div>


              {/* HOURS */}
              <div className="detail-item">
                <div className="detail-icon">
                  {icons.clock}
                </div>

                <div className="detail-content">
                  <strong>Working Hours</strong>
                  <p>{current.hours}</p>
                </div>
              </div>


              {/* FOCUS */}
              <div className="detail-item">
                <div className="detail-icon">
                  {icons.building}
                </div>

                <div className="detail-content">
                  <strong>Focus Area</strong>
                  <p>{current.focus}</p>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT ARROW */}
          <button
            className="location-arrow location-arrow-right"
            onClick={() => changeLocation("next")}
            aria-label="Next location"
          >
            {icons.arrowRight}
          </button>

        </div>


        {/* DOT INDICATOR */}
        <div className="location-dots">

          {locations.map((location, index) => (
            <button
              key={location.id}
              aria-label={`Go to ${location.city}`}
              className={
                activeLocation === index
                  ? "location-dot active"
                  : "location-dot"
              }
              onClick={() => selectLocation(index)}
            />
          ))}

        </div>

      </section >

    </div >
  );
}

export default GetConnected;