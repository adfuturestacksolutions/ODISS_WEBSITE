import React from "react";

const CompanyIntro = () => {
  return (
    <section
      className="intro-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(40px, 4.5vh, 70px) clamp(16px, 3.5vw, 32px)",
        backgroundColor: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
        color: "#1e293b",
        overflow: "hidden",
        borderTop: "1px solid rgba(226, 232, 240, 0.8)",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .intro-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.42fr) minmax(0, 1.12fr);
          gap: clamp(24px, 3.5vw, 52px);
          align-items: center;
        }
        .intro-graph-card {
          transform: translateX(12px);
        }
        @media (max-width: 992px) {
          .intro-section {
            min-height: auto !important;
            padding: 60px 16px 70px !important;
          }
          .intro-main-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .intro-graph-card {
            transform: none !important;
          }
        }
        @media (max-width: 600px) {
          .intro-section {
            padding: 45px 12px 55px !important;
          }
        }
      `}</style>

      {/* Background Gold Ambient Radial */}
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "350px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(243, 182, 63, 0.07) 0%, rgba(255, 255, 255, 0) 75%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1380px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>

        {/* Section Header */}
        <div className="reveal-up" style={{ textAlign: "center", maxWidth: "920px", margin: "0 auto clamp(28px, 3.5vw, 44px)" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(34px, 4.2vw, 54px)",
              fontWeight: 700,
              color: "#0f172a",
              margin: "0 0 14px",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            Transforming How Your Body{" "}
            <span style={{ color: "#f3b63f" }}>
              Absorbs Active Ingredients.
            </span>
          </h2>
        </div>

        {/* 2-COLUMN LAYOUT: Left Content + Right Reference Graph */}
        <div className="intro-main-grid">
          {/* =====================================================
              LEFT COLUMN: BRAND-TAILORED THINDISS COPY
          ===================================================== */}
          <div className="reveal-left" style={{ paddingRight: "0px" }}>
            <h3
              style={{
                fontSize: "clamp(25px, 2.6vw, 33px)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.3,
                margin: "0 0 24px",
                letterSpacing: "-0.02em",
              }}
            >
              Why swallow pills when your body can absorb{" "}
              <span style={{ color: "#f3b63f" }}>95%+ Active Ingredients instantly?</span>
            </h3>

            {/* Brand Key Highlights (5 Points, Topic + Answer on Next Line) */}
            <div className="reveal-stagger" style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "18px" }}>
              
              {/* Point 1 */}
              <div className="reveal-up" style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(243, 182, 63, 0.22)",
                    color: "#d99b2f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  ✓
                </div>
                <div>
                  <strong style={{ fontSize: "17px", fontWeight: 800, color: "#0f172a", display: "block", marginBottom: "4px" }}>
                    Overcome Pill Aversion Effortlessly
                  </strong>
                  <span style={{ fontSize: "15px", color: "#334155", lineHeight: 1.55, fontWeight: 450, display: "block" }}>
                    Over 45% struggle with pills. ThinDiss™ strips melt in seconds with zero water or swallowing friction.
                  </span>
                </div>
              </div>

              {/* Point 2 */}
              <div className="reveal-up" style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(243, 182, 63, 0.22)",
                    color: "#d99b2f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  ✓
                </div>
                <div>
                  <strong style={{ fontSize: "17px", fontWeight: 800, color: "#0f172a", display: "block", marginBottom: "4px" }}>
                    Bypass Stomach Acid &amp; Fillers
                  </strong>
                  <span style={{ fontSize: "15px", color: "#334155", lineHeight: 1.55, fontWeight: 450, display: "block" }}>
                    Traditional pills lose up to 80% to digestive breakdown. Sublingual absorption enters circulation directly.
                  </span>
                </div>
              </div>

              {/* Point 3 */}
              <div className="reveal-up" style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(243, 182, 63, 0.22)",
                    color: "#d99b2f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  ✓
                </div>
                <div>
                  <strong style={{ fontSize: "17px", fontWeight: 800, color: "#0f172a", display: "block", marginBottom: "4px" }}>
                    100% Sugar-Free &amp; Pure Formulation
                  </strong>
                  <span style={{ fontSize: "15px", color: "#334155", lineHeight: 1.55, fontWeight: 450, display: "block" }}>
                    Zero added sugars, artificial gelatin, or binders—delivering clean, active payloads for modern lifestyles.
                  </span>
                </div>
              </div>

              {/* Point 4 */}
              <div className="reveal-up" style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(243, 182, 63, 0.22)",
                    color: "#d99b2f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  ✓
                </div>
                <div>
                  <strong style={{ fontSize: "17px", fontWeight: 800, color: "#0f172a", display: "block", marginBottom: "4px" }}>
                    Rapid Absorption &amp; Faster Onset
                  </strong>
                  <span style={{ fontSize: "15px", color: "#334155", lineHeight: 1.55, fontWeight: 450, display: "block" }}>
                    Active ingredients enter circulation within minutes, delivering rapid and noticeable metabolic uptake.
                  </span>
                </div>
              </div>

              {/* Point 5 */}
              <div className="reveal-up" style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(243, 182, 63, 0.22)",
                    color: "#d99b2f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  ✓
                </div>
                <div>
                  <strong style={{ fontSize: "17px", fontWeight: 800, color: "#0f172a", display: "block", marginBottom: "4px" }}>
                    Pocket-Sized On-The-Go Compliance
                  </strong>
                  <span style={{ fontSize: "15px", color: "#334155", lineHeight: 1.55, fontWeight: 450, display: "block" }}>
                    Ultra-thin pocket cassettes let you carry and take your daily wellness routine anywhere, anytime.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN: EXACT BIOAVAILABILITY CURVE GRAPH
          ===================================================== */}
          <div
            className="intro-graph-card reveal-right reveal-card anim-card-hover"
            style={{
              position: "relative",
              width: "100%",
              minHeight: "360px",
              borderRadius: "24px",
              background: "linear-gradient(180deg, #ffffff 0%, rgba(254, 247, 230, 0.5) 60%, rgba(253, 238, 196, 0.45) 100%)",
              border: "1px solid rgba(243, 182, 63, 0.18)",
              boxShadow: "0 10px 30px rgba(243, 182, 63, 0.05), 0 2px 10px rgba(0,0,0,0.02)",
              padding: "20px 10px 15px",
              overflow: "hidden",
            }}
          >
            {/* Subtle animations */}
            <style>{`
              @keyframes floatStrip {
                0%, 100% { transform: translateY(0px) rotate(-4deg); }
                50% { transform: translateY(-5px) rotate(-2deg); }
              }
              @keyframes pulseHalo {
                0%, 100% { opacity: 0.7; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.08); }
              }
            `}</style>

            <svg
              viewBox="0 0 620 340"
              style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
            >
              <defs>
                {/* Horizontal Gridline pattern or lines */}
                <linearGradient id="curveGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f8d672" />
                  <stop offset="35%" stopColor="#f3b63f" />
                  <stop offset="65%" stopColor="#f6c75c" />
                  <stop offset="100%" stopColor="#f8d87a" />
                </linearGradient>

                {/* Drop shadow filter for icons */}
                <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.15" floodColor="#94a3b8" />
                </filter>
                <filter id="stripShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.25" floodColor="#f3b63f" />
                </filter>
              </defs>

              {/* Faint Horizontal Background Gridlines */}
              <line x1="10" y1="40" x2="610" y2="40" stroke="#edf2f7" strokeWidth="1.2" />
              <line x1="10" y1="105" x2="610" y2="105" stroke="#edf2f7" strokeWidth="1.2" />
              <line x1="10" y1="170" x2="610" y2="170" stroke="#edf2f7" strokeWidth="1.2" />
              <line x1="10" y1="235" x2="610" y2="235" stroke="#edf2f7" strokeWidth="1.2" />
              <line x1="10" y1="295" x2="610" y2="295" stroke="#edf2f7" strokeWidth="1.2" />

              {/* MAIN GOLD WAVE CURVE */}
              <path
                d="M 0,65 C 40,50 65,52 105,62 C 145,72 205,95 270,195 C 315,265 350,265 390,260 C 430,255 455,230 495,230 C 535,230 580,230 620,230"
                fill="none"
                stroke="url(#curveGoldGradient)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />

              {/* =========================================
                  NODE 1: INTRAVENOUS (Top Left)
              ========================================= */}
              <g transform="translate(68, 55)">
                {/* Text Above */}
                <text x="0" y="-36" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="600" fontFamily="'Montserrat', sans-serif">
                  Intravenous
                </text>
                <text x="0" y="-19" textAnchor="middle" fill="#0f2942" fontSize="14" fontWeight="800" fontFamily="'Montserrat', sans-serif">
                  Very High
                </text>

                {/* Soft yellow halo */}
                <circle cx="0" cy="0" r="22" fill="#fff9db" opacity="0.9" />
                <circle cx="0" cy="0" r="18" fill="#ffffff" filter="url(#nodeShadow)" stroke="#fef08a" strokeWidth="1.5" />

                {/* Syringe Icon */}
                <g transform="translate(-10, -10) scale(0.85)">
                  {/* Needle */}
                  <line x1="3" y1="21" x2="8" y2="16" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Barrel */}
                  <rect x="7" y="6" width="6" height="11" rx="1" transform="rotate(-45 10 11.5)" fill="#38bdf8" opacity="0.8" stroke="#0284c7" strokeWidth="1" />
                  {/* Plunger */}
                  <line x1="14" y1="10" x2="19" y2="5" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="16" y1="2" x2="22" y2="8" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                </g>
              </g>

              {/* =========================================
                  NODE 2: THINDISS™ STRIPS (Upper Curve)
              ========================================= */}
              <g transform="translate(160, 75)">
                {/* ThinDiss Strip Floating Graphic */}
                <g style={{ animation: "floatStrip 3.5s ease-in-out infinite", transformOrigin: "0px 0px" }}>
                  {/* Glowing backdrop */}
                  <rect x="-18" y="-18" width="36" height="36" rx="10" fill="#fef08a" opacity="0.5" filter="url(#stripShadow)" />

                  {/* Realistic Teal/Gold Curved Strip */}
                  <path
                    d="M -14,-8 C -4,-14 6,-6 15,-10 C 15,-10 12,8 10,14 C 2,10 -6,16 -12,10 Z"
                    fill="url(#stripShader)"
                    stroke="#0d9488"
                    strokeWidth="0.8"
                    filter="url(#stripShadow)"
                  />
                  <defs>
                    <linearGradient id="stripShader" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#0f766e" />
                    </linearGradient>
                  </defs>
                </g>

                {/* Text Label to the Right */}
                <text x="24" y="-7" fill="#003b73" fontSize="15" fontWeight="800" fontFamily="'Montserrat', sans-serif" letterSpacing="-0.01em">
                  ThinDiss™ Strips
                </text>
                <text x="24" y="11" fill="#0284c7" fontSize="14" fontWeight="800" fontFamily="'Montserrat', sans-serif">
                  High
                </text>
              </g>

              {/* =========================================
                  NODE 3: TABLETS (Bottom Dip)
              ========================================= */}
              <g transform="translate(365, 260)">
                {/* Text Above */}
                <text x="0" y="-36" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="600" fontFamily="'Montserrat', sans-serif">
                  Tablets
                </text>
                <text x="0" y="-19" textAnchor="middle" fill="#0f2942" fontSize="14" fontWeight="800" fontFamily="'Montserrat', sans-serif">
                  Very Low
                </text>

                {/* Soft yellow halo */}
                <circle cx="0" cy="0" r="22" fill="#fff9db" opacity="0.9" />

                {/* White 3D Tablet */}
                <circle cx="0" cy="0" r="14" fill="#ffffff" filter="url(#nodeShadow)" stroke="#e2e8f0" strokeWidth="1.2" />
                <line x1="-9" y1="0" x2="9" y2="0" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" />
                <ellipse cx="-4" cy="-4" rx="4" ry="2" fill="#ffffff" opacity="0.8" />
              </g>

              {/* =========================================
                  NODE 4: CAPSULES (Right Ascent)
              ========================================= */}
              <g transform="translate(480, 230)">
                {/* Text Above */}
                <text x="0" y="-36" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="600" fontFamily="'Montserrat', sans-serif">
                  Capsules
                </text>
                <text x="0" y="-19" textAnchor="middle" fill="#0f2942" fontSize="14" fontWeight="800" fontFamily="'Montserrat', sans-serif">
                  Low
                </text>

                {/* Soft yellow halo */}
                <circle cx="0" cy="0" r="22" fill="#fff9db" opacity="0.9" />

                {/* Two-tone 3D Capsule */}
                <g transform="translate(0, 0) rotate(15)">
                  {/* Shadow base */}
                  <rect x="-6" y="-14" width="12" height="28" rx="6" fill="#ffffff" filter="url(#nodeShadow)" />
                  {/* Top Red Half */}
                  <path d="M -6,0 L -6,-8 C -6,-11.3 -3.3,-14 0,-14 C 3.3,-14 6,-11.3 6,-8 L 6,0 Z" fill="#ef4444" />
                  {/* Bottom Clear / Golden Pellet Half */}
                  <path d="M -6,0 L -6,8 C -6,11.3 -3.3,14 0,14 C 3.3,14 6,8 6,8 L 6,0 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
                  {/* Specular highlights */}
                  <path d="M -3,-11 Q 0,-13 3,-11" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
                  <circle cx="-1" cy="4" r="1" fill="#ef4444" opacity="0.6" />
                  <circle cx="2" cy="7" r="1.2" fill="#f59e0b" opacity="0.7" />
                </g>
              </g>

              {/* =========================================
                  NODE 5: GUMMIES (Far Right)
              ========================================= */}
              <g transform="translate(565, 230)">
                {/* Text Above */}
                <text x="0" y="-36" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="600" fontFamily="'Montserrat', sans-serif">
                  Gummies
                </text>
                <text x="0" y="-19" textAnchor="middle" fill="#0f2942" fontSize="14" fontWeight="800" fontFamily="'Montserrat', sans-serif">
                  Low
                </text>

                {/* Soft yellow halo */}
                <circle cx="0" cy="0" r="22" fill="#fff9db" opacity="0.9" />

                {/* Red Gumdrop / Gummy Candy */}
                <g transform="translate(0, 0)">
                  <path
                    d="M -11,8 C -12,12 -8,14 0,14 C 8,14 12,12 11,8 C 10,2 7,-8 0,-9 C -7,-8 -10,2 -11,8 Z"
                    fill="url(#gummyGradient)"
                    filter="url(#nodeShadow)"
                  />
                  {/* Sugar sparkles / highlight */}
                  <ellipse cx="-2" cy="-4" rx="4" ry="2" fill="#ffffff" opacity="0.4" />
                  <defs>
                    <linearGradient id="gummyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="70%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                  </defs>
                </g>
              </g>

            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;