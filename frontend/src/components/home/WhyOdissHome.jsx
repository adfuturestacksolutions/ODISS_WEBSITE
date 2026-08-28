import React from "react";

const WhyOdissHome = () => {
  return (
    <section
      className="why-odiss-section"
      style={{
        position: "relative",
        minHeight: "clamp(650px, 90vh, 960px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(60px, 7.5vw, 100px) clamp(16px, 3.5vw, 24px)",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .why-odiss-section {
            padding: 50px 16px 60px !important;
            min-height: auto !important;
          }
          .why-pillars-container {
            gap: 32px !important;
          }
          .why-pillar-row {
            gap: 24px !important;
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

      {/* Full-Cover Background Image with Cinematic Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(18, 18, 18, 0.45), rgba(15, 15, 15, 0.65)), url('/3pillars.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
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
        {/* Main Title in ODISS Montserrat Font */}
        <h2
          className="reveal-up"
          style={{
            fontSize: "clamp(30px, 4.2vw, 60px)",
            color: "#ffffff",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            margin: "0 0 clamp(36px, 5vw, 70px)",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          3 pillars of <br />
          <span
            style={{
              display: "inline-flex",
              alignItems: "flex-end",
              verticalAlign: "-0.06 em",
              position: "relative",
              marginRight: "8px",
            }}
          >
            <img
              src="/odiss-logo-white-orange.png"
              alt="ODISS"
              style={{
                height: "1.28em",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />

          </span>
          ThinDiss
          <sup
            style={{
              fontSize: "0.34em",
              fontWeight: 600,
              position: "relative",
              top: "-0.55em",
              marginLeft: "2px",
              marginRight: "4px",
            }}
          >
            ™
          </sup>{" "}
          innovation
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
