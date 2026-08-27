import React from "react";

const CompanyIntro = () => {
  return (
    <section
      style={{
        padding: "85px 24px 95px",
        backgroundColor: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
        borderTop: "1px solid rgba(226, 232, 240, 0.8)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        
        {/* =====================================================
            1. SECTION HEADER (THE ODISS DIFFERENCE)
        ===================================================== */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 55px" }}>
          
          {/* Label with lines on both sides */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              color: "#d97706",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            <span style={{ width: "36px", height: "1px", backgroundColor: "#fde68a", display: "inline-block" }} />
            THE ODISS DIFFERENCE
            <span style={{ width: "36px", height: "1px", backgroundColor: "#fde68a", display: "inline-block" }} />
          </div>

          {/* Main Title: Nutrition, reimagined. */}
          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              color: "#1e293b",
              margin: "0 0 18px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Nutrition,{" "}
            <span style={{ color: "#d97706", fontStyle: "normal" }}>
              reimagined.
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: "#64748b",
              margin: 0,
              maxWidth: "720px",
              marginInline: "auto",
            }}
          >
            ThinDiss™ strips deliver advanced nutrition through a revolutionary format designed for superior absorption, zero sugar and precise delivery.
          </p>
        </div>


        {/* =====================================================
            2. HERO VISUAL AREA (GOLDEN STRIP + ANNOTATIONS)
        ===================================================== */}
        <div
          style={{
            position: "relative",
            minHeight: "380px",
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr 1fr",
            gap: "20px",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          {/* Glowing Wave SVG Background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="100%"
              height="300"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.85 }}
            >
              <path
                d="M 0 150 C 250 80, 400 220, 600 130 C 780 50, 880 200, 1000 120"
                stroke="url(#goldWaveGradient)"
                strokeWidth="45"
                strokeLinecap="round"
                style={{ filter: "blur(20px)", opacity: 0.6 }}
              />
              <path
                d="M 0 150 C 250 80, 400 220, 600 130 C 780 50, 880 200, 1000 120"
                stroke="url(#goldWaveGradient)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="goldWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.2" />
                  <stop offset="35%" stopColor="#f3b63f" stopOpacity="0.8" />
                  <stop offset="65%" stopColor="#d97706" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#fde68a" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Left Annotation Box: ThinDiss™ Strips */}
          <div
            style={{
              zIndex: 2,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1.5px solid #fde68a",
              borderRadius: "18px",
              padding: "24px 22px",
              boxShadow: "0 12px 32px rgba(243, 182, 63, 0.14)",
              maxWidth: "280px",
              justifySelf: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#fffdf0",
                  border: "1px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d97706",
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v6m0 0l-3-3m3 3l3-3" />
                  <path d="M4 14h16M4 18h16" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#d97706", margin: "0 0 2px" }}>
                  ThinDiss™ Strips
                </h4>
                <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600 }}>
                  Fast absorption
                </span>
              </div>
            </div>

            <div style={{ paddingLeft: "4px", fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ color: "#d97706", fontWeight: 700 }}>•</span> High bioavailability
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#d97706", fontWeight: 700 }}>•</span> Maximum impact
              </div>
            </div>
          </div>

          {/* Center Floating Golden Strip Image */}
          <div
            style={{
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "340px",
                transform: "rotate(-8deg)",
                transition: "transform 0.4s ease",
              }}
            >
              <img
                src="/golden_strip.jpg"
                alt="ODISS Golden Oral Dissolve Film Strip"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 20px 50px rgba(217, 119, 6, 0.25), 0 0 30px rgba(243, 182, 63, 0.3)",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Right Annotation Column (3 Feature Items) */}
          <div
            style={{
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              maxWidth: "300px",
              justifySelf: "center",
            }}
          >
            {/* Feature 1: Zero Added Sugar */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#fffdf0",
                  border: "1px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d97706",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(243, 182, 63, 0.1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#d97706", margin: "0 0 2px" }}>
                  Zero Added Sugar
                </h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                  Clean nutrition without compromises
                </p>
              </div>
            </div>

            {/* Feature 2: Precise Dosage */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#fffdf0",
                  border: "1px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d97706",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(243, 182, 63, 0.1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#d97706", margin: "0 0 2px" }}>
                  Precise Dosage
                </h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                  Consistent nutrition in every strip
                </p>
              </div>
            </div>

            {/* Feature 3: Effortless Use */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#fffdf0",
                  border: "1px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d97706",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(243, 182, 63, 0.1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#d97706", margin: "0 0 2px" }}>
                  Effortless Use
                </h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
                  No water. No swallowing. Just place and melt.
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* =====================================================
            3. TRADITIONAL FORMATS COMPARISON CARD
        ===================================================== */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "22px",
            padding: "32px 36px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
            marginBottom: "36px",
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: "36px",
            alignItems: "center",
          }}
        >
          {/* Left Column Header */}
          <div style={{ paddingRight: "24px", borderRight: "1px solid #f1f5f9" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#1e293b", margin: "0 0 6px", lineHeight: 1.25 }}>
              Traditional formats.
            </h3>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#1e293b", margin: "0 0 12px", lineHeight: 1.25 }}>
              Outdated outcomes.
            </h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
              Most traditional formats come with limitations that reduce nutrient impact.
            </p>
          </div>

          {/* Right 3-Column Grid for Formats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {/* Format 1: Gummies */}
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <span style={{ fontSize: "28px" }}>🍓</span>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#1e293b", margin: 0 }}>
                  Gummies
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#64748b" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#ef4444", fontWeight: 800, fontSize: "14px" }}>⊗</span>
                  Low bioavailability
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#ef4444", fontWeight: 800, fontSize: "14px" }}>⊗</span>
                  High sugar content
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#ef4444", fontWeight: 800, fontSize: "14px" }}>⊗</span>
                  Sticky &amp; inconvenient
                </div>
              </div>
            </div>

            {/* Format 2: Capsules */}
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <span style={{ fontSize: "28px" }}>💊</span>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#1e293b", margin: 0 }}>
                  Capsules
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#64748b" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#d97706", fontWeight: 800, fontSize: "14px" }}>⊖</span>
                  Moderate absorption
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#d97706", fontWeight: 800, fontSize: "14px" }}>⊖</span>
                  Often needs fillers
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#d97706", fontWeight: 800, fontSize: "14px" }}>⊖</span>
                  Can be hard to swallow
                </div>
              </div>
            </div>

            {/* Format 3: Tablets */}
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <span style={{ fontSize: "28px" }}>⚪</span>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#1e293b", margin: 0 }}>
                  Tablets
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#64748b" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#d97706", fontWeight: 800, fontSize: "14px" }}>⊖</span>
                  Slower dissolution
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#d97706", fontWeight: 800, fontSize: "14px" }}>⊖</span>
                  Lower nutrient uptake
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#d97706", fontWeight: 800, fontSize: "14px" }}>⊖</span>
                  Needs water to consume
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* =====================================================
            4. BOTTOM 4-PILLAR FEATURE CARDS ROW
        ===================================================== */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "22px",
            padding: "30px 24px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.02)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {/* Card 1: High Absorption */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 12px",
              borderRight: "1px solid #f1f5f9",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                backgroundColor: "#fffdf0",
                border: "1px solid #fde68a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d97706",
                marginBottom: "16px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v6m0 0l-3-3m3 3l3-3" />
                <path d="M4 14h16M4 18h16" />
              </svg>
            </div>
            <h4 style={{ fontSize: "13.5px", fontWeight: 800, color: "#1e293b", margin: "0 0 6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              HIGH ABSORPTION
            </h4>
            <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
              Engineered for rapid delivery and maximum uptake.
            </p>
          </div>

          {/* Card 2: Clean Nutrition */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 12px",
              borderRight: "1px solid #f1f5f9",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                backgroundColor: "#fffdf0",
                border: "1px solid #fde68a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d97706",
                marginBottom: "16px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 9a9 9 0 0 1-10 9z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <h4 style={{ fontSize: "13.5px", fontWeight: 800, color: "#1e293b", margin: "0 0 6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              CLEAN NUTRITION
            </h4>
            <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
              No added sugar, no unnecessary additives.
            </p>
          </div>

          {/* Card 3: Precise & Consistent */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 12px",
              borderRight: "1px solid #f1f5f9",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                backgroundColor: "#fffdf0",
                border: "1px solid #fde68a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d97706",
                marginBottom: "16px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h4 style={{ fontSize: "13.5px", fontWeight: 800, color: "#1e293b", margin: "0 0 6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              PRECISE &amp; CONSISTENT
            </h4>
            <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
              Every strip delivers the exact dose, every time.
            </p>
          </div>

          {/* Card 4: Easy & Modern */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 12px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                backgroundColor: "#fffdf0",
                border: "1px solid #fde68a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d97706",
                marginBottom: "16px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            </div>
            <h4 style={{ fontSize: "13.5px", fontWeight: 800, color: "#1e293b", margin: "0 0 6px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              EASY &amp; MODERN
            </h4>
            <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.45 }}>
              Portable, mess-free and designed for today's lifestyle.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;


