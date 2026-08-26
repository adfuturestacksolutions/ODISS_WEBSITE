import React, { useState, useEffect } from "react";

const CompanyIntro = () => {
  const [activeTab, setActiveTab] = useState("table"); // "table" | "curve"
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const comparisonData = [
    {
      metric: "Active Payload Purity",
      thindiss: "Ultra High (95%+)",
      gummies: "Low (Sticky Sugars)",
      capsules: "Moderate (Fillers)",
      tablets: "Low (Heavy Binders)",
    },
    {
      metric: "Direct Bioavailability",
      thindiss: true,
      gummies: false,
      capsules: false,
      tablets: false,
    },
    {
      metric: "Added Sugar & Gelatin",
      thindiss: "Zero Sugar (Vegan)",
      gummies: "High Sugar (3-5g)",
      capsules: "Mild Excipients",
      tablets: "Mild Binders",
    },
    {
      metric: "Mucosal Absorption Speed",
      thindiss: "< 10 Seconds",
      gummies: "45-60 Minutes",
      capsules: "30-45 Minutes",
      tablets: "45-90 Minutes",
    },
    {
      metric: "Water-Free Convenience",
      thindiss: true,
      gummies: true,
      capsules: false,
      tablets: false,
    },
    {
      metric: "Zero Swallow Friction",
      thindiss: true,
      gummies: true,
      capsules: false,
      tablets: false,
    },
  ];

  return (
    <section
      style={{
        padding: "90px 24px 100px",
        backgroundColor: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "30px",
              backgroundColor: "rgba(243, 182, 63, 0.12)",
              color: "#d97706",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Scientific Superiority
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 3.8vw, 48px)",
              fontWeight: 700,
              color: "#1e293b",
              margin: "0 0 16px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            The Superior Standard in{" "}
            <span style={{ color: "#f3b63f" }}>Nutritional Absorption</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: "#64748b",
              margin: 0,
            }}
          >
            Why modern oral dissolving films outperform bulky tablets, sugary gummies, and traditional capsules across every biological metric.
          </p>
        </div>

        {/* =========================
            MINIMALIST VIEW TOGGLE
        ========================== */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-flex",
              backgroundColor: "#f1f5f9",
              padding: "5px",
              borderRadius: "30px",
              gap: "6px",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("table")}
              style={{
                padding: "10px 24px",
                borderRadius: "24px",
                border: "none",
                fontSize: "14.5px",
                fontWeight: activeTab === "table" ? 700 : 500,
                backgroundColor: activeTab === "table" ? "#ffffff" : "transparent",
                color: activeTab === "table" ? "#1e293b" : "#64748b",
                boxShadow: activeTab === "table" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              Comparison Matrix
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("curve")}
              style={{
                padding: "10px 24px",
                borderRadius: "24px",
                border: "none",
                fontSize: "14.5px",
                fontWeight: activeTab === "curve" ? 700 : 500,
                backgroundColor: activeTab === "curve" ? "#ffffff" : "transparent",
                color: activeTab === "curve" ? "#1e293b" : "#64748b",
                boxShadow: activeTab === "curve" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              Absorption Curve
            </button>
          </div>
        </div>

        {/* =========================================================
            TAB 1: COMPARISON MATRIX (TABLE)
        ========================================================= */}
        {activeTab === "table" && (
          <div
            style={{
              backgroundColor: "#fbfbfc",
              borderRadius: "20px",
              border: "1px solid rgba(226, 232, 240, 0.9)",
              overflowX: "auto",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.02)",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "750px",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <th
                    style={{
                      padding: "24px 28px",
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#1e293b",
                      width: "32%",
                    }}
                  >
                    Key Performance Factor
                  </th>
                  <th
                    style={{
                      padding: "20px 20px",
                      backgroundColor: "#fffbeb",
                      borderLeft: "1.5px solid #fde68a",
                      borderRight: "1.5px solid #fde68a",
                      width: "22%",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "16px", fontWeight: 800, color: "#d97706" }}>ThinDiss™</span>
                      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309" }}>Oral Strips</span>
                    </div>
                  </th>
                  <th style={{ padding: "20px 20px", width: "15%", fontSize: "14.5px", fontWeight: 600, color: "#475569" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <span style={{ fontSize: "18px" }}>🍬</span>
                      <span>Gummies</span>
                    </div>
                  </th>
                  <th style={{ padding: "20px 20px", width: "15%", fontSize: "14.5px", fontWeight: 600, color: "#475569" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <span style={{ fontSize: "18px" }}>💊</span>
                      <span>Capsules</span>
                    </div>
                  </th>
                  <th style={{ padding: "20px 20px", width: "16%", fontSize: "14.5px", fontWeight: 600, color: "#475569" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <span style={{ fontSize: "18px" }}>⚪</span>
                      <span>Tablets</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: idx === comparisonData.length - 1 ? "none" : "1px solid rgba(226, 232, 240, 0.7)",
                    }}
                  >
                    <td
                      style={{
                        padding: "18px 28px",
                        textAlign: "left",
                        fontSize: "14.5px",
                        fontWeight: 600,
                        color: "#334155",
                      }}
                    >
                      {row.metric}
                    </td>

                    {/* ThinDiss Column */}
                    <td
                      style={{
                        padding: "18px 20px",
                        backgroundColor: "#fffdf0",
                        borderLeft: "1.5px solid #fde68a",
                        borderRight: "1.5px solid #fde68a",
                        fontWeight: 700,
                        color: "#1e293b",
                        fontSize: "14px",
                      }}
                    >
                      {typeof row.thindiss === "boolean" ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            backgroundColor: "#22c55e",
                            color: "#ffffff",
                            fontSize: "14px",
                            fontWeight: 800,
                          }}
                        >
                          ✓
                        </span>
                      ) : (
                        <span style={{ color: "#d97706", fontWeight: 700 }}>{row.thindiss}</span>
                      )}
                    </td>

                    {/* Gummies Column */}
                    <td style={{ padding: "18px 20px", fontSize: "13.5px", color: "#64748b", fontWeight: 500 }}>
                      {typeof row.gummies === "boolean" ? (
                        row.gummies ? (
                          <span style={{ color: "#22c55e", fontWeight: 700, fontSize: "16px" }}>✓</span>
                        ) : (
                          <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: "16px" }}>✕</span>
                        )
                      ) : (
                        row.gummies
                      )}
                    </td>

                    {/* Capsules Column */}
                    <td style={{ padding: "18px 20px", fontSize: "13.5px", color: "#64748b", fontWeight: 500 }}>
                      {typeof row.capsules === "boolean" ? (
                        row.capsules ? (
                          <span style={{ color: "#22c55e", fontWeight: 700, fontSize: "16px" }}>✓</span>
                        ) : (
                          <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: "16px" }}>✕</span>
                        )
                      ) : (
                        row.capsules
                      )}
                    </td>

                    {/* Tablets Column */}
                    <td style={{ padding: "18px 20px", fontSize: "13.5px", color: "#64748b", fontWeight: 500 }}>
                      {typeof row.tablets === "boolean" ? (
                        row.tablets ? (
                          <span style={{ color: "#22c55e", fontWeight: 700, fontSize: "16px" }}>✓</span>
                        ) : (
                          <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: "16px" }}>✕</span>
                        )
                      ) : (
                        row.tablets
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* =========================================================
            TAB 2: ABSORPTION CURVE & NARRATIVE
        ========================================================= */}
        {activeTab === "curve" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.25fr",
              gap: "45px",
              alignItems: "center",
            }}
          >
            {/* Left Narrative */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1e293b",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Why Traditional Pills Fail Your Body
              </h3>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#0f172a", margin: 0, lineHeight: 1.5 }}>
                Over 45% of individuals experience pill aversion or difficulty swallowing tablets and large capsules.
              </p>
              <p style={{ fontSize: "15px", color: "#475569", margin: 0, lineHeight: 1.7 }}>
                When swallowed, tablets undergo harsh first-pass stomach acid digestion and hepatic breakdown, destroying up to 70-80% of active therapeutic payload.
              </p>
              <p style={{ fontSize: "15px", color: "#475569", margin: 0, lineHeight: 1.7 }}>
                <strong style={{ color: "#f3b63f" }}>ThinDiss™ Oral Strips</strong> dissolve directly against the sublingual mucosa, ensuring immediate vascular absorption and clinical-grade bioavailability without pain or sugar.
              </p>
            </div>

            {/* Right Curve Visualization */}
            <div
              style={{
                backgroundColor: "#fffdf0",
                border: "1.5px solid #fde68a",
                borderRadius: "20px",
                padding: "35px 30px",
                boxShadow: "0 10px 30px rgba(243, 182, 63, 0.08)",
              }}
            >
              <svg width="100%" height="280" viewBox="0 0 600 280" fill="none" style={{ overflow: "visible" }}>
                {/* Horizontal Grid Guides */}
                <line x1="0" y1="50" x2="600" y2="50" stroke="#f1f5f9" strokeDasharray="4 4" />
                <line x1="0" y1="140" x2="600" y2="140" stroke="#f1f5f9" strokeDasharray="4 4" />
                <line x1="0" y1="230" x2="600" y2="230" stroke="#f1f5f9" strokeDasharray="4 4" />

                {/* Animated Bioavailability Curve */}
                <path
                  d="M 50 70 C 120 70, 150 110, 200 120 C 300 140, 320 250, 400 240 C 480 230, 520 220, 560 210"
                  stroke="#f3b63f"
                  strokeWidth="4.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset={animate ? 0 : 1000}
                  style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.22, 1, 0.36, 1)" }}
                />

                {/* Data Points */}
                {/* Intravenous */}
                <g transform="translate(50, 70)">
                  <circle cx="0" cy="0" r="22" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                  <path d="M-5 5 L5 -5 M3 -7 L7 -3 M-7 3 L-3 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  <text x="0" y="-30" textAnchor="middle" fontSize="13" fontWeight="600" fill="#475569">Intravenous</text>
                  <text x="0" y="-15" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1e293b">100% Bioavail.</text>
                </g>

                {/* ThinDiss Strips */}
                <g transform="translate(200, 120)">
                  <circle cx="0" cy="0" r="30" fill="#dcfce7" stroke="#22c55e" strokeWidth="2.5" />
                  <rect x="-10" y="-8" width="20" height="16" rx="2" fill="#22c55e" transform="rotate(-12)" />
                  <text x="0" y="-40" textAnchor="middle" fontSize="14" fontWeight="800" fill="#d97706">ThinDiss™</text>
                  <text x="0" y="-23" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e293b">95%+ Direct</text>
                </g>

                {/* Tablets */}
                <g transform="translate(400, 240)">
                  <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                  <circle cx="0" cy="0" r="7" fill="#94a3b8" />
                  <text x="0" y="-26" textAnchor="middle" fontSize="13" fontWeight="600" fill="#475569">Tablets</text>
                  <text x="0" y="-12" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">15-25%</text>
                </g>

                {/* Capsules */}
                <g transform="translate(480, 230)">
                  <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                  <rect x="-5" y="-8" width="10" height="16" rx="5" fill="#ef4444" />
                  <text x="0" y="-26" textAnchor="middle" fontSize="13" fontWeight="600" fill="#475569">Capsules</text>
                  <text x="0" y="-12" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">20-30%</text>
                </g>

                {/* Gummies */}
                <g transform="translate(560, 210)">
                  <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                  <path d="M-7 5 Q 0 -8 7 5 Z" fill="#ec4899" />
                  <text x="0" y="-26" textAnchor="middle" fontSize="13" fontWeight="600" fill="#475569">Gummies</text>
                  <text x="0" y="-12" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">40% + Sugars</text>
                </g>
              </svg>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CompanyIntro;
