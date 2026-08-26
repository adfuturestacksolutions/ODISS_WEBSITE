import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">

      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">

        {/* =========================
            FOOTER TOP
        ========================== */}

        <div className="footer-top">

          {/* LEFT CONTENT */}
          <div className="footer-brand-section">

            <div className="footer-eyebrow">
              <span className="footer-line" />
              <span>Get Connected</span>
            </div>

            <h2 className="footer-title">
              Let&apos;s create
              <br />
              something <span>better.</span>
            </h2>

            <p className="footer-description">
              Have a question, want to know more about our
              solutions, or simply want to connect with us?
              We&apos;d love to hear from you.
            </p>

            <Link
              to="/get-connected"
              className="footer-cta"
            >
              <span>Get in Touch</span>

              <span className="footer-cta-icon">
                ↗
              </span>
            </Link>

          </div>


          {/* RIGHT NAVIGATION */}
          <div className="footer-links-wrapper">

            {/* Explore */}
            <div className="footer-link-column">

              <span className="footer-link-heading">
                Explore
              </span>

              <Link
                to="/about"
                className="footer-nav-link"
              >
                About
              </Link>

              <Link
                to="/why-thindiss"
                className="footer-nav-link"
              >
                Why ThinDiss
              </Link>

            </div>


            {/* Discover */}
            <div className="footer-link-column">

              <span className="footer-link-heading">
                Discover
              </span>

              <Link
                to="/products"
                className="footer-nav-link"
              >
                Products
              </Link>

              <Link
                to="/get-connected"
                className="footer-nav-link"
              >
                Get Connected
              </Link>

            </div>

          </div>

        </div>


        {/* =========================
            FOOTER BOTTOM
        ========================== */}

        <div className="footer-bottom">

          <div className="footer-copyright">
            © {new Date().getFullYear()} ODISS.
            <span> All rights reserved.</span>
          </div>


          <div className="footer-credit">

            <span className="footer-credit-text">
              Crafted by
            </span>

            <div className="footer-agency">

              
              <span>
                AD FutureStack Solutions
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;