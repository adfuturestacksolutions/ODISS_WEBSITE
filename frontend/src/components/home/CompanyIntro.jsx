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
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
          gap: clamp(24px, 3.5vw, 48px);
          align-items: center;
        }
        .intro-graph-card {
          transform: none;
          width: 100%;
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
        }
        @media (max-width: 600px) {
          .intro-section {
            padding: 45px 12px 55px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1440px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>

        {/* Section Header */}
        <div className="reveal-up" style={{ textAlign: "center", maxWidth: "920px", margin: "0 auto clamp(28px, 3.5vw, 44px)" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
              fontSize: "45px",
              fontWeight: 600,
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
          <div className="reveal-left" style={{ paddingRight: "20px", paddingTop: "clamp(18px, 2.2vw, 32px)" }}>
            <h3
              style={{
                fontSize: "38px",
                fontWeight: 600,
                color: "#0f172a",
                lineHeight: 1.3,
                margin: "0 0 28px",
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
                  <strong style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", display: "block", marginBottom: "4px" }}>
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
                  <strong style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", display: "block", marginBottom: "4px" }}>
                    Bypass Stomach Acid &amp; Fillers
                  </strong>
                  <span style={{ fontSize: "15px", color: "#334155", lineHeight: 1.55, fontWeight: 450, display: "block" }}>
                    Traditional pills lose up to 80% to digestive breakdown. Sublingual absorption enters circulation directly.
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
                  <strong style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", display: "block", marginBottom: "4px" }}>
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
                  <strong style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", display: "block", marginBottom: "4px" }}>
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
              RIGHT COLUMN: BIOAVAILABILITY GRAPH VIDEO
          ===================================================== */}
          <div
            className="intro-graph-card reveal-right reveal-card anim-card-hover"
            onContextMenu={(e) => e.preventDefault()}
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              background: "#ffffff",
              border: "1px solid rgba(243, 182, 63, 0.22)",
              boxShadow: "0 12px 36px rgba(243, 182, 63, 0.08), 0 4px 16px rgba(0,0,0,0.03)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
              onContextMenu={(e) => e.preventDefault()}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "620px",
                display: "block",
                objectFit: "cover",
                borderRadius: "22px",
                pointerEvents: "none",
              }}
            >
              <source src="/homepage/graph video - Trim.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;