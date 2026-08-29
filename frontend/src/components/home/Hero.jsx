import React from "react";
import { Link } from "react-router-dom";
import HeroFeatureMarquee from "./HeroFeatureMarquee";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 75px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        .hero-main-grid {
          width: min(1400px, calc(100% - clamp(24px, 5vw, 80px)));
          margin: 0 auto;
          padding-bottom: clamp(100px, 12vh, 130px);
          padding-top: clamp(20px, 3.5vh, 45px);
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: clamp(28px, 4vw, 56px);
          flex: 1;
          align-items: flex-start;
        }

        /* ── LEFT: Headline (Vertically Centered with the Video) ── */
        .hero-left-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: clamp(280px, 30vw, 420px);
          padding: 0;
          background: transparent;
          position: relative;
          z-index: 2;
        }

        /* ── RIGHT: Video on top + Text & CTA cleanly under the video ── */
        .hero-right-col {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          background: transparent;
          gap: clamp(18px, 2.2vh, 26px);
          width: 100%;
        }

        .hero-video-box {
          position: relative;
          width: 100%;
          max-width: 860px;
          height: clamp(300px, 32vw, 440px);
          transform: translateX(clamp(-30px, -2.2vw, -15px));
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          box-shadow: none;
          border: none;
          outline: none;
        }

        .hero-video-box video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          border: none;
          outline: none;
          mix-blend-mode: multiply;
          -webkit-mask-image: 
            linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 12%, black 68%, transparent 94%);
          -webkit-mask-composite: source-in;
          mask-image: 
            linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 12%, black 68%, transparent 94%);
          mask-composite: intersect;
        }

        /* Seamless edge gradient feather overlay */
        .hero-video-box::after {
          content: '';
          position: absolute;
          inset: -4px;
          pointer-events: none;
          z-index: 2;
          background:
            linear-gradient(to bottom, #ffffff 0%, transparent 14%, transparent 68%, #ffffff 95%),
            linear-gradient(to right,  #ffffff 0%, transparent 15%, transparent 85%, #ffffff 100%);
        }

        .hero-right-content {
          position: relative;
          z-index: 5;
          margin-top: clamp(-115px, -8.5vw, -92px);
          margin-left: auto;
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 490px;
          width: 100%;
          gap: clamp(14px, 1.8vh, 20px);
        }

        .hero-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(243, 182, 63, 0.48) !important;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .hero-main-grid {
            grid-template-columns: 1fr;
            min-height: auto;
            padding-bottom: 110px;
            gap: 28px;
          }
          .hero-left-col {
            height: auto;
            padding: 20px 0 0;
            text-align: center;
            align-items: center;
          }
          .hero-right-col {
            align-items: center;
          }
          .hero-video-box {
            transform: none;
            height: clamp(240px, 45vw, 360px);
          }
          .hero-right-content {
            margin-top: -60px;
            margin-left: 0;
            align-self: center;
            align-items: center;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-main-grid {
            padding-bottom: 95px;
          }
          .hero-video-box {
            height: 54vw;
            min-height: 200px;
          }
          .hero-left-col { padding: 16px 0 0; }
        }
      `}</style>

      <div className="hero-main-grid">
        {/* ── LEFT: Heading Only ── */}
        <div className="hero-left-col reveal-left">
          <h1
            style={{
              fontSize: "clamp(34px, 4.2vw, 68px)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Innovation.
            <br />
            Precision.
            <br />
            <span style={{ color: "#f3b63f" }}>Transformation.</span>
          </h1>
        </div>

        {/* ── RIGHT: Video (Center/Top) + Description & CTA on bottom ── */}
        <div className="hero-right-col">
          <div className="hero-video-box">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/homepage/herovideo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="hero-right-content reveal-up stagger-1">
            <p
              style={{
                fontSize: "clamp(14px, 1.05vw, 16.5px)",
                lineHeight: 1.68,
                color: "#4a5568",
                fontWeight: 600,
                margin: 0,
              }}
            >
              <strong style={{ color: "#1a1a1a", fontWeight: 700 }}>
                Elevating your daily wellness
              </strong>
              , one fast-melting strip at a time using{" "}
              <strong style={{ color: "#d99b2f", fontWeight: 700 }}>
                advanced ThinDiss™ technology
              </strong>
              . ODISS, built on pure innovation, exists to make daily vitamins
              incredibly tasty and effortless — a smarter choice for active lifestyles.
            </p>

            <Link
              to="/products"
              className="hero-cta-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "clamp(12px, 1.1vw, 15px) clamp(24px, 2.2vw, 34px)",
                background: "linear-gradient(135deg, #f3b63f 0%, #e5a93c 100%)",
                color: "#1c1917",
                fontSize: "clamp(13.5px, 0.95vw, 15.5px)",
                fontWeight: 700,
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(243, 182, 63, 0.38)",
                letterSpacing: "-0.01em",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              Explore Product Range
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Feature Marquee at bottom ── */}
      <HeroFeatureMarquee />
    </section>
  );
};

export default Hero;
