import React from "react";
import { Link } from "react-router-dom";

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
        background: "radial-gradient(ellipse 100% 90% at 50% 30%, rgba(243, 182, 63, 0.13) 0%, rgba(254, 243, 199, 0.08) 50%, #ffffff 85%)",
        padding: "40px 0 110px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Responsive Stylesheet */}
      <style>{`
        .hero-main-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.4fr;
          gap: 20px;
          align-items: flex-start;
          width: min(1400px, calc(100% - 80px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .hero-left-col {
          display: flex;
          flex-direction: column;
          padding-top: 75px;
        }
        .hero-right-col {
          position: relative;
          min-height: 600px;
        }
        .hero-video-el {
          position: absolute;
          top: -25px;
          left: 50px;
          width: 740px;
          height: 390px;
          object-fit: contain;
          mix-blend-mode: multiply;
          filter: contrast(1.02) brightness(1.02);
          border: none;
          outline: none;
          box-shadow: none;
        }
        .hero-desc-box {
          position: absolute;
          top: 380px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          max-width: 500px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .hero-section {
            padding: 30px 0 100px !important;
            min-height: auto !important;
          }
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            width: calc(100% - 36px) !important;
          }
          .hero-left-col {
            padding-top: 15px !important;
            text-align: center;
            align-items: center;
          }
          .hero-right-col {
            min-height: auto !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-video-el {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            max-width: 580px !important;
            height: auto !important;
            max-height: 340px !important;
            margin: 0 auto !important;
          }
          .hero-desc-box {
            position: relative !important;
            top: 0 !important;
            right: 0 !important;
            max-width: 600px !important;
            margin-top: 20px !important;
            text-align: center;
            align-items: center;
          }
        }

        @media (max-width: 600px) {
          .hero-main-grid {
            width: calc(100% - 28px) !important;
            gap: 20px !important;
          }
          .hero-desc-box {
            gap: 20px !important;
          }
        }
      `}</style>

      {/* Full-Cover Gold Ambient Radial Layers */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: "radial-gradient(circle at 50% 25%, rgba(243, 182, 63, 0.12) 0%, rgba(243, 182, 63, 0.04) 45%, transparent 75%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(243, 182, 63, 0.09) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(243, 182, 63, 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="hero-main-grid">
        {/* Left Column: Stacked Display Headline */}
        <div className="hero-left-col reveal-left">
          <h1
            style={{
              fontSize: "clamp(34px, 4.4vw, 62px)",
              fontWeight: 700,
              color: "#2d2d2d",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Innovation.
            <br />
            Nutrition.
            <br />
            Simplicity.
            <br />
            Transformation.
          </h1>
        </div>

        {/* Right Column: Floating Orbs + Video Blended + Description & Gold CTA */}
        <div className="hero-right-col">
          {/* Creative Floating Warm Gold Glass Orb — Top Right */}
          <div
            className="anim-float"
            style={{
              position: "absolute",
              top: "15px",
              right: "40px",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(255, 247, 237, 0.98), rgba(253, 224, 71, 0.6) 60%, rgba(243, 182, 63, 0.5))",
              boxShadow: "0 8px 22px rgba(243, 182, 63, 0.35), inset -2px -2px 6px rgba(255, 255, 255, 0.9)",
            }}
          />

          {/* Creative Small Gold Accent Orb — Mid Left */}
          <div
            className="anim-float"
            style={{
              position: "absolute",
              top: "370px",
              left: "100px",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.98), rgba(251, 191, 36, 0.65) 60%, rgba(217, 155, 47, 0.5))",
              boxShadow: "0 4px 12px rgba(243, 182, 63, 0.3), inset -1px -1px 4px rgba(255, 255, 255, 0.9)",
              animationDelay: "1.5s",
            }}
          />

          {/* Seamless Video Feather-Blended directly into the Warm Ivory Screen */}
          <video
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-el reveal-right stagger-1"
          />

          {/* Text Paragraph & Warm Gold CTA Button */}
          <div className="hero-desc-box reveal-up stagger-2">
            <p
              style={{
                fontSize: "16.5px",
                lineHeight: "1.65",
                color: "#334155",
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

            <div>
              <Link
                to="/products"
                className="anim-card-hover"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 34px",
                  background: "linear-gradient(135deg, #f3b63f 0%, #e5a93c 100%)",
                  color: "#1c1917",
                  fontSize: "16px",
                  fontWeight: 700,
                  borderRadius: "8px",
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
      </div>

      {/* ── Scrolling Ticker Strip at Hero Bottom ── */}
      <div
        className="reveal-up stagger-3"
        style={{
          position: "absolute",
          bottom: "8px",
          left: 0,
          right: 0,
          height: "90px",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, rgba(255,255,255,0.9), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, rgba(255,255,255,0.9), transparent)", zIndex: 2, pointerEvents: "none" }} />

        {/* Scrolling Track */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            animation: "marqueeScroll 40s linear infinite",
            willChange: "transform",
            whiteSpace: "nowrap",
          }}
        >
          {(() => {
            const gold = "#d99b2f";
            const goldLight = "#f3b63f";
            const items = [
              {
                label: "No Water",
                svg: (
                  <svg width="46" height="46" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    <path d="M22 11 C22 11 15.5 19.5 15.5 24 C15.5 27.5 18.4 30.5 22 30.5 C25.6 30.5 28.5 27.5 28.5 24 C28.5 19.5 22 11 22 11 Z" stroke={gold} strokeWidth="1.6" fill="none" strokeLinejoin="round" />
                    <line x1="12" y1="32" x2="32" y2="12" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "Zero Sugar",
                svg: (
                  <svg width="46" height="46" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    <circle cx="22" cy="22" r="9" stroke={gold} strokeWidth="1.6" strokeDasharray="4 3" />
                  </svg>
                ),
              },
              {
                label: "Fast Absorption",
                svg: (
                  <svg width="46" height="46" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    <path d="M22 13 L25 21 L33 22 L27 28 L28 36 L22 32 L16 36 L17 28 L11 22 L19 21 Z" stroke={gold} strokeWidth="1.4" fill="none" />
                  </svg>
                ),
              },
            ];

            const allItems = [...items, ...items, ...items];

            return allItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "6px 28px",
                }}
              >
                <div style={{ flexShrink: 0 }}>{item.svg}</div>
                <span
                  style={{
                    fontSize: "14.5px",
                    fontWeight: 700,
                    color: "#1e293b",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
};

export default Hero;