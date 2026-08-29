import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const targets = footer.querySelectorAll(".footer-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="odiss-footer">
      <style>{`
        .odiss-footer {
          position: relative;
          background-color: #f5f6f8;
          color: #222222;
          font-family: 'Montserrat', sans-serif;
          overflow: hidden;
          border-top: 1px solid rgba(0, 0, 0, 0.07);
        }

        /* Subtle modern wave background overlay */
        .odiss-footer-bg-waves {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 55%;
          height: 100%;
          pointer-events: none;
          opacity: 0.45;
          z-index: 1;
        }

        .odiss-footer-container {
          position: relative;
          z-index: 2;
          width: min(1380px, calc(100% - clamp(28px, 6vw, 100px)));
          margin: 0 auto;
        }

        /* =========================================================
           1. TOP SOCIAL MEDIA BAR
        ========================================================= */
        .odiss-footer-social-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(34px, 4vw, 48px) 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.09);
          flex-wrap: wrap;
          gap: 24px;
        }

        .odiss-footer-social-heading {
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .odiss-footer-social-icons {
          display: flex;
          align-items: center;
          gap: clamp(20px, 2.5vw, 30px);
          flex-wrap: wrap;
        }

        /* =========================================================
           SCROLL REVEAL ANIMATIONS
        ========================================================= */
        @keyframes footer-fade-up {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes footer-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .footer-reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: none;
        }
        .footer-reveal--visible {
          animation: footer-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Stagger delays for child items */
        .footer-reveal.delay-1 { animation-delay: 0s;    }
        .footer-reveal.delay-2 { animation-delay: 0.12s; }
        .footer-reveal.delay-3 { animation-delay: 0.22s; }
        .footer-reveal.delay-4 { animation-delay: 0.32s; }
        .footer-reveal.delay-5 { animation-delay: 0.42s; }

        /* Bigger Social Media Buttons with Original Brand Colors */
        .odiss-social-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #ffffff;
          transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s ease, filter 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.14);
          flex-shrink: 0;
        }

        .odiss-social-btn:hover {
          transform: translateY(-4px) scale(1.06);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
          filter: brightness(1.08);
        }

        /* Original Brand Colors */
        .odiss-social-x {
          background-color: #000000;
        }

        .odiss-social-linkedin {
          background-color: #0A66C2;
        }

        .odiss-social-instagram {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        }

        .odiss-social-youtube {
          background-color: #FF0000;
        }

        .odiss-social-facebook {
          background-color: #1877F2;
        }

        /* =========================================================
           2. MAIN FOOTER BODY (Spacious 3-Section Grid)
        ========================================================= */
        .odiss-footer-main {
          display: grid;
          grid-template-columns: 340px 1fr 320px;
          gap: clamp(36px, 5vw, 84px);
          padding: clamp(56px, 6.5vw, 82px) 0 clamp(52px, 5.5vw, 70px);
          align-items: flex-start;
        }

        /* Brand Column (Left) */
        .odiss-footer-brand-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: clamp(24px, 3.5vw, 48px);
          border-right: 1px solid rgba(0, 0, 0, 0.08);
        }

        .odiss-footer-logo-link {
          display: inline-block;
          margin-bottom: 24px;
          text-decoration: none;
        }

        /* Prominent Large Logo */
        .odiss-footer-logo {
          height: clamp(74px, 7vw, 92px);
          width: auto;
          max-width: 250px;
          object-fit: contain;
          display: block;
        }

        .odiss-footer-tagline {
          font-size: 15.5px;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0;
          font-weight: 450;
          letter-spacing: -0.01em;
        }

        /* Nav Columns (Middle) - 2 Columns (Products & Company) */
        .odiss-footer-nav-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(150px, 1fr));
          gap: clamp(36px, 5vw, 72px);
        }

        .odiss-footer-nav-col {
          display: flex;
          flex-direction: column;
        }

        .odiss-footer-col-title {
          font-size: 15px;
          font-weight: 750;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #111111;
          margin: 0 0 24px 0;
        }

        .odiss-footer-links-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .odiss-footer-link {
          font-size: 15.5px;
          color: #484848;
          text-decoration: none;
          font-weight: 480;
          transition: color 0.22s ease, transform 0.22s ease;
          display: inline-block;
        }

        .odiss-footer-link:hover {
          color: #d99b2f;
          transform: translateX(3px);
        }

        /* CTA Column (Right) */
        .odiss-footer-cta-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .odiss-footer-cta-title {
          font-size: 15px;
          font-weight: 750;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #111111;
          margin: 0 0 16px 0;
        }

        .odiss-footer-cta-desc {
          font-size: 15.5px;
          color: #4a4a4a;
          margin: 0 0 24px 0;
          line-height: 1.62;
          font-weight: 450;
        }

        /* Contact Me Now Button */
        .odiss-footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          background-color: #1a1a1a;
          color: #ffffff;
          font-size: 15px;
          font-weight: 650;
          font-family: 'Montserrat', sans-serif;
          text-decoration: none;
          border-radius: 6px;
          border: 1px solid #1a1a1a;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);
          transition: all 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .odiss-footer-cta-btn svg {
          transition: transform 0.24s ease;
        }

        .odiss-footer-cta-btn:hover {
          background-color: #f3b63f;
          border-color: #f3b63f;
          color: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 6px 22px rgba(243, 182, 63, 0.38);
        }

        .odiss-footer-cta-btn:hover svg {
          transform: translateX(4px);
        }

        .odiss-footer-cta-btn:active {
          transform: translateY(0);
        }

        /* =========================================================
           3. BOTTOM COPYRIGHT BAR
        ========================================================= */
        .odiss-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 26px 0 32px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          font-size: 14.5px;
          color: #555555;
          flex-wrap: wrap;
          gap: 16px;
        }

        .odiss-footer-copyright {
          margin: 0;
          font-weight: 480;
        }

        .odiss-footer-dev {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: 0;
          font-size: 14.5px;
          color: #555555;
        }

        .odiss-footer-dev strong {
          color: #111111;
          font-weight: 700;
        }

        /* =========================================================
           RESPONSIVE BREAKPOINTS
        ========================================================= */
        @media (max-width: 1140px) {
          .odiss-footer-main {
            grid-template-columns: 300px 1fr 280px;
            gap: 36px;
          }
          .odiss-footer-nav-grid {
            gap: 32px;
          }
        }

        @media (max-width: 960px) {
          .odiss-footer-social-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .odiss-footer-main {
            grid-template-columns: 1fr;
            gap: 44px;
          }
          .odiss-footer-brand-col {
            border-right: none;
            padding-right: 0;
            padding-bottom: 28px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          }
          .odiss-footer-nav-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
          .odiss-footer-cta-col {
            padding-top: 12px;
          }
        }

        @media (max-width: 640px) {
          .odiss-footer-nav-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .odiss-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      {/* Background Flowing Waves SVG Artwork */}
      <svg
        className="odiss-footer-bg-waves"
        viewBox="0 0 700 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 350C150 300 280 220 420 250C540 275 620 340 700 320V350H0Z"
          fill="rgba(0, 0, 0, 0.018)"
        />
        <path
          d="M0 350C180 320 300 180 480 210C600 230 650 310 700 290"
          stroke="rgba(0, 0, 0, 0.035)"
          strokeWidth="1.5"
        />
        <path
          d="M0 350C160 300 280 160 460 190C580 210 640 290 700 270"
          stroke="rgba(0, 0, 0, 0.025)"
          strokeWidth="1.2"
        />
        <path
          d="M0 350C140 280 260 140 440 170C560 190 630 270 700 250"
          stroke="rgba(0, 0, 0, 0.02)"
          strokeWidth="1"
        />
      </svg>

      <div className="odiss-footer-container" ref={footerRef}>
        {/* =========================================================
            TOP SOCIAL MEDIA HEADER BAR
        ========================================================= */}
        <div className="odiss-footer-social-bar footer-reveal delay-1">
          <h3 className="odiss-footer-social-heading">Connect with Social Media</h3>

          <div className="odiss-footer-social-icons">
            {/* X (Twitter) - Original Brand Black */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="odiss-social-btn odiss-social-x"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn - Original Brand Blue #0A66C2 */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="odiss-social-btn odiss-social-linkedin"
            >
              <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Instagram - Original Brand Gradient */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="odiss-social-btn odiss-social-instagram"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* YouTube - Original Brand Red #FF0000 */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="odiss-social-btn odiss-social-youtube"
            >
              <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook - Original Brand Blue #1877F2 */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="odiss-social-btn odiss-social-facebook"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* =========================================================
            MAIN FOOTER BODY (Products & Company + Get in Touch)
        ========================================================= */}
        <div className="odiss-footer-main">
          {/* 1. Brand Column (Left) */}
          <div className="odiss-footer-brand-col footer-reveal delay-2">
            <Link to="/" className="odiss-footer-logo-link" aria-label="ODISS Home" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
              <img
                src="/odiss_logo.png"
                alt="ODISS - Mouth Melting Strips"
                className="odiss-footer-logo"
              />
            </Link>
            <p className="odiss-footer-tagline">
              Advanced ThinDiss™ technology
              <br />
              delivering Active Ingredients smarter,
              <br />
              faster, better.
            </p>
          </div>

          {/* 2. Nav Columns (Middle) - 2 Spacious Columns */}
          <div className="odiss-footer-nav-grid footer-reveal delay-3">
            {/* Products (Original Categories) */}
            <div className="odiss-footer-nav-col">
              <h4 className="odiss-footer-col-title">Products</h4>
              <ul className="odiss-footer-links-list">
                <li>
                  <Link to="/category/adults-range" className="odiss-footer-link" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    Adults Range
                  </Link>
                </li>
                <li>
                  <Link to="/category/womens-range" className="odiss-footer-link" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    Women's Range
                  </Link>
                </li>
                <li>
                  <Link to="/category/vitals-range" className="odiss-footer-link" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    Vitals Range
                  </Link>
                </li>
                <li>
                  <Link to="/category/kids-range" className="odiss-footer-link" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    Kids Range
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company (Navbar Links) */}
            <div className="odiss-footer-nav-col">
              <h4 className="odiss-footer-col-title">Company</h4>
              <ul className="odiss-footer-links-list">
                <li>
                  <Link to="/about" className="odiss-footer-link" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/why-thindiss" className="odiss-footer-link" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    Why ThinDiss
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="odiss-footer-link" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/get-connected" className="odiss-footer-link" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    Get Connected
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Get in Touch CTA Column (Right) */}
          <div className="odiss-footer-cta-col footer-reveal delay-4">
            <h4 className="odiss-footer-cta-title">Get in Touch</h4>
            <p className="odiss-footer-cta-desc">
              Talk to our subject matter expert to explore our offerings and capabilities.
            </p>

            <Link to="/get-connected" className="odiss-footer-cta-btn" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
              <span>Contact me now</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT BAR
        ========================================================= */}
        <div className="odiss-footer-bottom footer-reveal delay-5">
          <p className="odiss-footer-copyright">
            © 2026 ODISS. All rights reserved.
          </p>

          <p className="odiss-footer-dev">
            Developed by <strong>AD FutureStack</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;