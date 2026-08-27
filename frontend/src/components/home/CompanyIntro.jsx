import React from "react";

const CompanyIntro = () => {
  return (
    <section
      style={{
        padding: "95px 24px 105px",
        backgroundColor: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", width: "100%" }}>
        
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 55px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "30px",
              backgroundColor: "rgba(243, 182, 63, 0.12)",
              color: "#d97706",
              fontSize: "12.5px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Next-Generation Delivery
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 3.6vw, 46px)",
              fontWeight: 700,
              color: "#1e293b",
              margin: "0 0 16px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Rethinking How Your Body{" "}
            <span style={{ color: "#f3b63f" }}>Absorbs Nutrients</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: "#64748b",
              margin: 0,
            }}
          >
            Over 45% of individuals struggle with swallowing pills, while stomach acids destroy up to 80% of active ingredients. ThinDiss™ strips redefine supplementation with instant sublingual delivery.
          </p>
        </div>

        {/* =========================
            BENTO COMPARISON GRID
        ========================== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
            marginBottom: "40px",
          }}
        >
          {/* HERO CARD: ThinDiss™ Oral Strips */}
          <div
            style={{
              gridColumn: "span 1",
              backgroundColor: "#fffdf0",
              border: "1.5px solid #fde68a",
              borderRadius: "22px",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(243, 182, 63, 0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "#f3b63f",
                color: "#1c1917",
                padding: "6px 18px",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                borderBottomLeftRadius: "16px",
                textTransform: "uppercase",
              }}
            >
              Gold Standard
            </div>

            <div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#d97706",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                The ThinDiss™ Advantage
              </span>
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#1e293b",
                  margin: "8px 0 20px",
                }}
              >
                Sublingual Oral Strips
              </h3>

              {/* Key Features List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "#22c55e",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <strong style={{ fontSize: "15px", color: "#1e293b", display: "block" }}>
                      95%+ Direct Bioavailability
                    </strong>
                    <span style={{ fontSize: "13.5px", color: "#64748b" }}>
                      Absorbs directly via oral mucosa into circulation, bypassing liver degradation.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "#22c55e",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <strong style={{ fontSize: "15px", color: "#1e293b", display: "block" }}>
                      Instant Melt in &lt; 10 Seconds
                    </strong>
                    <span style={{ fontSize: "13.5px", color: "#64748b" }}>
                      Water-free and pocket-sized with zero swallowing friction.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "#22c55e",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <strong style={{ fontSize: "15px", color: "#1e293b", display: "block" }}>
                      100% Sugar-Free &amp; Vegan
                    </strong>
                    <span style={{ fontSize: "13.5px", color: "#64748b" }}>
                      Pure active ingredients without gelatin, stickiness, or artificial bulk.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bioavailability Progress Bar */}
            <div style={{ marginTop: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>
                <span style={{ color: "#d97706" }}>Absorption Efficiency</span>
                <span style={{ color: "#d97706" }}>95% Active Uptake</span>
              </div>
              <div style={{ width: "100%", height: "8px", backgroundColor: "#fde68a", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ width: "95%", height: "100%", backgroundColor: "#f59e0b", borderRadius: "10px" }} />
              </div>
            </div>
          </div>

          {/* TRADITIONAL FORMATS COLUMN (3 Cards) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            
            {/* Format 1: Tablets */}
            <div
              style={{
                backgroundColor: "#fbfbfc",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  ⚪
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>
                    Traditional Tablets
                  </h4>
                  <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                    Heavy binders &amp; fillers; up to 80% lost in stomach acid.
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  backgroundColor: "#fee2e2",
                  color: "#ef4444",
                  fontSize: "12px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                15-25% Efficacy
              </div>
            </div>

            {/* Format 2: Capsules */}
            <div
              style={{
                backgroundColor: "#fbfbfc",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  💊
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>
                    Swallowed Capsules
                  </h4>
                  <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                    Delayed 45-min dissolution; difficult to swallow for many.
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  backgroundColor: "#fee2e2",
                  color: "#ef4444",
                  fontSize: "12px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                20-30% Efficacy
              </div>
            </div>

            {/* Format 3: Gummies */}
            <div
              style={{
                backgroundColor: "#fbfbfc",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  🍬
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>
                    Gummy Supplements
                  </h4>
                  <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                    3-5g sugar per serving; sticky texture, heat-sensitive.
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  backgroundColor: "#fef3c7",
                  color: "#d97706",
                  fontSize: "12px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                High Sugar
              </div>
            </div>

          </div>
        </div>

        {/* =========================
            BOTTOM 3-PILLAR STATS BAR
        ========================== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            padding: "24px 30px",
            borderRadius: "18px",
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#f3b63f", display: "block" }}>
              &lt; 10s
            </span>
            <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#334155" }}>
              Instant Water-Free Melt
            </span>
          </div>

          <div style={{ textAlign: "center", borderLeft: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", display: "block" }}>
              0%
            </span>
            <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#334155" }}>
              Added Sugar &amp; Gelatin
            </span>
          </div>

          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#22c55e", display: "block" }}>
              3.5x
            </span>
            <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#334155" }}>
              Higher Bioavailability
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;
