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
          margin: 0 auto 105px auto;
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: clamp(20px, 3vw, 48px);
          flex: 1;
          min-height: calc(100vh - 75px - 110px);
          align-items: center;
        }

        /* ── LEFT: Headline Only (aligned with navbar logo) ── */
 .hero-left-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  transform: translateY(-150px);
  background: transparent;
  position: relative;
  z-index: 2;
}
        /* ── RIGHT: Video on top + Text & CTA on bottom (Reference Layout) ── */
        .hero-right-col {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          background: transparent;
          gap: clamp(16px, 2vh, 24px);
        }

        .hero-video-box {
          position: relative;
          width: 100%;
          max-width: 860px;
          height: 480px;
          max-height: 530px;
          min-height: 360px;
          overflow: hidden;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 
            0 0 55px 30px rgba(255, 255, 255, 1),
            0 20px 45px rgba(0, 0, 0, 0.03);
          align-self: center;
        }

        .hero-video-box video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* White feather and shadow on all 4 edges */
        .hero-video-box::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 28px;
          box-shadow: inset 0 0 45px 30px rgba(255, 255, 255, 0.95);
          background:
            linear-gradient(to right,  rgba(255,255,255,0.98) 0%, transparent 20%),
            linear-gradient(to left,   rgba(255,255,255,0.95) 0%, transparent 20%),
            linear-gradient(to bottom, rgba(255,255,255,0.98) 0%, transparent 20%),
            linear-gradient(to top,    rgba(255,255,255,0.98) 0%, transparent 20%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-right-content {
          position: relative;
          z-index: 5;
          margin-top: -95px; /* slightly raised */
          align-self: flex-end; /* majorly moves to the right side */
          margin-left: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 490px;
          width: 100%;
          gap: clamp(14px, 1.8vh, 20px);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .hero-main-grid {
            grid-template-columns: 1fr;
            min-height: auto;
            margin-bottom: 95px;
            gap: 28px;
          }
          .hero-left-col {
            padding: 30px 0 10px;
            text-align: center;
            align-items: center;
          }
          .hero-right-col {
            align-items: center;
          }
          .hero-video-box {
            transform: none;
          }
          .hero-right-content {
            margin-top: -45px;
            margin-left: 0;
            align-self: center;
            align-items: center;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-main-grid {
            margin-bottom: 85px;
          }
          .hero-video-box {
            height: 60vw;
            min-height: 220px;
          }
          .hero-left-col { padding: 24px 0 10px; }
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
