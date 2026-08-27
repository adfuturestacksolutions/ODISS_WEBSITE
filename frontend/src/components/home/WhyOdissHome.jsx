import React from "react";

const WhyOdissHome = () => {
  return (
    <section
      className="why-odiss-section"
      style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .why-odiss-section {
            padding: 60px 16px 70px !important;
            min-height: auto !important;
          }
          .why-pillars-container {
            gap: 36px !important;
          }
          .why-pillar-row {
            gap: 28px !important;
          }
          .why-pillar-item {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
          .why-pillar-badge {
            width: 52px !important;
            height: 52px !important;
            font-size: 15px !important;
          }
        }
      `}</style>

      {/* Background Image with Cinematic Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(18, 18, 18, 0.55), rgba(15, 15, 15, 0.7)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&auto=format&fit=crop&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Main Title in Serif */}
        <h2
          className="reveal-up"
          style={{
            fontSize: "clamp(30px, 4.4vw, 64px)",
            color: "#ffffff",
            fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            fontWeight: 500,
            lineHeight: 1.18,
            letterSpacing: "-0.02em",
            margin: "0 0 clamp(36px, 5vw, 70px)",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          3 pillars of <br />
          ODISS® ThinFilm™ innovation
        </h2>

        {/* Pillars Grid Container */}
        <div
          className="why-pillars-container"
          style={{
            width: "100%",
            maxWidth: "1050px",
            display: "flex",
            flexDirection: "column",
            gap: "55px",
          }}
        >
          {/* Top Row: Pillar 1 (Left) & Pillar 2 (Right) */}
          <div
            className="why-pillar-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "40px",
            }}
          >
            {/* Pillar 1: DIRECT BIO-UPTAKE */}
            <div
              className="why-pillar-item reveal-card anim-card-hover stagger-1"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                textAlign: "left",
                maxWidth: "460px",
                flex: "1 1 380px",
              }}
            >
              <div
                className="why-pillar-badge"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #d99b2f 0%, #85530e 100%)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4)",
                  border: "1px solid rgba(243, 182, 63, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "19px",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                3.5x
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: "0 0 5px",
                  }}
                >
                  DIRECT BIO-UPTAKE
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#d1d5db",
                    margin: 0,
                    lineHeight: 1.45,
                    fontWeight: 400,
                  }}
                >
                  Mucosal absorption bypassing first-pass liver loss
                </p>
              </div>
            </div>

            {/* Pillar 2: WATER-FREE WELLNESS */}
            <div
              className="why-pillar-item reveal-card anim-card-hover stagger-2"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                textAlign: "left",
                maxWidth: "460px",
                flex: "1 1 380px",
              }}
            >
              <div
                className="why-pillar-badge"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #d99b2f 0%, #85530e 100%)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4)",
                  border: "1px solid rgba(243, 182, 63, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "19px",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                0%
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: "0 0 5px",
                  }}
                >
                  WATER-FREE WELLNESS
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#d1d5db",
                    margin: 0,
                    lineHeight: 1.45,
                    fontWeight: 400,
                  }}
                >
                  Instant dissolve anytime with zero swallow friction
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: Pillar 3 (Centered) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="why-pillar-item reveal-card anim-card-hover stagger-3"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                textAlign: "left",
                maxWidth: "480px",
                flex: "1 1 380px",
              }}
            >
              <div
                className="why-pillar-badge"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #d99b2f 0%, #85530e 100%)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4)",
                  border: "1px solid rgba(243, 182, 63, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                ±1.5%
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: "0 0 5px",
                  }}
                >
                  MICRON DOSING ACCURACY
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#d1d5db",
                    margin: 0,
                    lineHeight: 1.45,
                    fontWeight: 400,
                  }}
                >
                  Slot-die coating ensures exact active payload
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyOdissHome;
