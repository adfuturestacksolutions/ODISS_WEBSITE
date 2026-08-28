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
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        padding: "40px 0 165px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Responsive Stylesheet */}
      <style>{`
        .hero-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
          gap: clamp(28px, 4vw, 64px);
          align-items: center;
          width: min(1400px, calc(100% - clamp(24px, 5vw, 80px)));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .hero-left-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          transform: translateY(-12px);
        }
        .hero-right-col {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(20px, 2.2vw, 32px);
          max-width: 620px;
          padding-top: clamp(10px, 2vw, 30px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .hero-section {
            padding: 30px 0 120px !important;
            min-height: auto !important;
          }
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            width: calc(100% - clamp(20px, 4vw, 36px)) !important;
          }
          .hero-left-col {
            padding-top: 15px !important;
            transform: none !important;
            text-align: center;
            align-items: center;
          }
          .hero-right-col {
            align-items: center;
            text-align: center;
            max-width: 100% !important;
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          .hero-main-grid {
            width: calc(100% - 24px) !important;
            gap: 20px !important;
          }
        }
      `}</style>

      <div className="hero-main-grid">
        {/* Left Column: Stacked Display Headline */}
        <div className="hero-left-col reveal-left">
          <h1
            style={{
              fontSize: "clamp(34px, 4.2vw, 68px)",
              fontWeight: 700,
              color: "#2d2d2d",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Innovation.
            <br />
            Precision.
            <br />
            Transformation.
          </h1>
        </div>

        {/* Right Column: Clean Description & Gold CTA */}
        <div className="hero-right-col reveal-up stagger-1">
          {/* Text Paragraph */}
          <p
            style={{
              fontSize: "clamp(15.5px, 1.2vw, 18px)",
              lineHeight: "1.7",
              color: "#475569",
              fontWeight: 400,
              margin: 0,
            }}
          >
            <strong style={{ color: "#0f172a", fontWeight: 700 }}>
              Elevating your daily wellness
            </strong>
            , one fast-melting strip at a time using{" "}
            <strong style={{ color: "#0f172a", fontWeight: 700 }}>
              advanced ThinDiss™ technology
            </strong>
            . ODISS, built on pure innovation, exists to make daily vitamins
            incredibly tasty and effortless with a smarter choice - for active lifestyles.
          </p>

          {/* Warm Gold CTA Button */}
          <div>
            <Link
              to="/products"
              className="anim-card-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(13px, 1.3vw, 16px) clamp(28px, 2.8vw, 38px)",
                background: "linear-gradient(135deg, #f3b63f 0%, #e5a93c 100%)",
                color: "#1c1917",
                fontSize: "clamp(14.5px, 1.1vw, 16.5px)",
                fontWeight: 700,
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(243, 182, 63, 0.35)",
                letterSpacing: "-0.01em",
              }}
            >
              Explore Product Range
            </Link>
          </div>
        </div>
      </div>

      {/* ── Redesigned 3D Colorful Feature Marquee at Hero Bottom ── */}
      <HeroFeatureMarquee />
    </section>
  );
};

export default Hero;