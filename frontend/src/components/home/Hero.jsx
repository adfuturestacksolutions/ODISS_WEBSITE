import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100vh - 75px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        padding: "40px 0 80px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(1400px, calc(100% - 90px))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.4fr",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Stacked Display Headline + Gold Badge */}
        <div style={{ display: "flex", flexDirection: "column", paddingTop: "0px" }}>
          <h1
            style={{
              fontSize: "clamp(40px, 4.4vw, 62px)",
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

        {/* Right Column: Floating Orbs + Video Blended directly into Screen + Description & Gold CTA */}
        <div
          style={{
            position: "relative",
            minHeight: "600px",
          }}
        >
          {/* Creative Floating Warm Gold Glass Orb — Top Right */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "40px",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(255, 247, 237, 0.98), rgba(253, 224, 71, 0.6) 60%, rgba(243, 182, 63, 0.5))",
              boxShadow: "0 8px 22px rgba(243, 182, 63, 0.35), inset -2px -2px 6px rgba(255, 255, 255, 0.9)",
              animation: "floatSlow 4s ease-in-out infinite alternate",
            }}
          />

          {/* Creative Small Gold Accent Orb — Mid Left */}
          <div
            style={{
              position: "absolute",
              top: "370px",
              left: "100px",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.98), rgba(251, 191, 36, 0.65) 60%, rgba(217, 155, 47, 0.5))",
              boxShadow: "0 4px 12px rgba(243, 182, 63, 0.3), inset -1px -1px 4px rgba(255, 255, 255, 0.9)",
            }}
          />

          {/* Seamless Video Feather-Blended directly into the Warm Ivory Screen */}
          <video
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: "-25px",
              left: "50px",
              width: "740px",
              height: "390px",
              objectFit: "contain",
              mixBlendMode: "multiply",
              filter: "contrast(1.02) brightness(1.02)",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          />

          {/* Text Paragraph & Warm Gold CTA Button, offset lower-right */}
          <div
            style={{
              position: "absolute",
              top: "380px",
              right: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              maxWidth: "500px",
            }}
          >
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
                  transition: "all 0.25s ease",
                  letterSpacing: "-0.01em",
                }}
              >
                Explore Product Range
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scrolling Ticker Strip at Hero Bottom (Transparent Background + Larger Text & Emojis) ── */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: 0,
          right: 0,
          height: "100px",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Fade edges into hero background */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, #ffffff, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, #ffffff, transparent)", zIndex: 2, pointerEvents: "none" }} />

        {/* Scrolling Track — doubled for seamless loop */}
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
                  <svg width="56" height="56" viewBox="0 0 44 44" fill="none">
                    {/* Outer Dashed Circle */}
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    {/* Drop */}
                    <path d="M22 11 C22 11 15.5 19.5 15.5 24 C15.5 27.5 18.4 30.5 22 30.5 C25.6 30.5 28.5 27.5 28.5 24 C28.5 19.5 22 11 22 11 Z" stroke={gold} strokeWidth="1.6" fill="none" strokeLinejoin="round" />
                    {/* Prohibition Slash */}
                    <line x1="12" y1="32" x2="32" y2="12" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "No Pain",
                svg: (
                  <svg width="56" height="56" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    {/* Neck / Jaw Contour */}
                    <path d="M16 14 C16 18 19 20 22 20 C25 20 28 18 28 14" stroke={gold} strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    <path d="M17.5 20 L17.5 29 M26.5 20 L26.5 29" stroke={gold} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M19.5 17 Q22 18.5 24.5 17" stroke={gold} strokeWidth="1.3" strokeLinecap="round" fill="none" />
                    {/* Prohibition Slash */}
                    <line x1="12" y1="32" x2="32" y2="12" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "No Chewing",
                svg: (
                  <svg width="56" height="56" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    {/* Lips / Teeth contour */}
                    <path d="M15 21 C15 21 18.5 25 22 25 C25.5 25 29 21 29 21" stroke={gold} strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    <path d="M16 19 C16 19 19 16.5 22 16.5 C25 16.5 28 19 28 19" stroke={gold} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    {/* Prohibition Slash */}
                    <line x1="12" y1="32" x2="32" y2="12" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "No Swallowing",
                svg: (
                  <svg width="56" height="56" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    {/* Throat + Particle */}
                    <path d="M18 13 L18 29 M26 13 L26 29" stroke={gold} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <circle cx="22" cy="21" r="2.5" stroke={gold} strokeWidth="1.4" fill="none" />
                    {/* Prohibition Slash */}
                    <line x1="12" y1="32" x2="32" y2="12" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "No Sugars",
                svg: (
                  <svg width="56" height="56" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    {/* Sugar Cubes */}
                    <path d="M16 20 L22 17 L28 20 L22 23 Z" stroke={gold} strokeWidth="1.3" fill="none" strokeLinejoin="round" />
                    <path d="M16 20 L16 25 L22 28 L22 23 M28 20 L28 25 L22 28" stroke={gold} strokeWidth="1.3" fill="none" strokeLinejoin="round" />
                    {/* Sparkles */}
                    <circle cx="15" cy="14" r="0.8" fill={gold} />
                    <circle cx="29" cy="16" r="0.8" fill={gold} />
                    {/* Prohibition Slash */}
                    <line x1="12" y1="32" x2="32" y2="12" stroke={gold} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "Instant Dissolve",
                svg: (
                  <svg width="56" height="56" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    {/* Dissolving Strip Wave */}
                    <path d="M14 20 Q18 15 22 20 T30 20" stroke={gold} strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    <path d="M15 24 Q19 28 22 24 T29 24" stroke={gold} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" fill="none" />
                    <circle cx="16" cy="16" r="1" fill={gold} />
                    <circle cx="28" cy="17" r="1" fill={gold} />
                  </svg>
                ),
              },
              {
                label: "100% Drug-Free",
                svg: (
                  <svg width="56" height="56" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="20" stroke={goldLight} strokeWidth="1.3" strokeDasharray="3 3.5" opacity="0.9" />
                    {/* Natural Leaf */}
                    <path d="M15 28 C15 28 16 18 26 15 C26 15 25 25 15 28 Z" stroke={gold} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                    <path d="M17 26 Q21 22 24 18" stroke={gold} strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  </svg>
                ),
              },
            ];

            const renderList = [...items, ...items];

            return renderList.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "0 70px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.svg}
                </div>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "#242424",
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: "-0.015em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ));
          })()}
        </div>
      </div>
    </section >

  );
};

export default Hero;