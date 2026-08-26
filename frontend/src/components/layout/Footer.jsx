import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: "60px",
        background: "linear-gradient(135deg, #4a4a4a 0%, #333333 55%, #262626 100%)",
        color: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(1280px, calc(100% - 90px))",
          margin: "0 auto",
          padding: "65px 0 35px",
        }}
      >
        {/* Top CTA Section */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "70px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "460px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#f3b63f",
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "1.5px",
                  backgroundColor: "#f3b63f",
                  display: "inline-block",
                }}
              />{" "}
              Contact Us
            </div>
            <h2
              style={{
                fontSize: "clamp(42px, 5vw, 60px)",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Get in Touch
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "440px",
              maxWidth: "100%",
              gap: "20px",
            }}
          >
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.5,
                color: "#d4d4d4",
                fontWeight: 400,
                margin: 0,
              }}
            >
              Talk to our subject matter expert to explore our offerings and capabilities
            </p>
            <Link
              to="/get-connected"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "13px 28px",
                backgroundColor: "#f3b63f",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#262626",
                fontSize: "15px",
                fontWeight: 700,
                borderRadius: "6px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                transition: "all 0.25s ease",
                textDecoration: "none",
              }}
            >
              Contact me now
            </Link>
          </div>
        </div>

        {/* Middle Navigation Section */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "50px",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to="/" aria-label="ThinDiss Home" style={{ textDecoration: "none", color: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", lineHeight: 1 }}>
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  ThinDiss
                </span>
                {/* Dot Grid Matrix Pattern + TM */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.85 }}>
                    <circle cx="3" cy="3" r="1.2" fill="#ffffff" />
                    <circle cx="9" cy="3" r="1.2" fill="#ffffff" />
                    <circle cx="15" cy="3" r="1.2" fill="#ffffff" />
                    <circle cx="3" cy="9" r="1.2" fill="#ffffff" />
                    <circle cx="9" cy="9" r="1.2" fill="#ffffff" />
                    <circle cx="15" cy="9" r="1.2" fill="#ffffff" />
                    <circle cx="3" cy="15" r="1.2" fill="#ffffff" />
                    <circle cx="9" cy="15" r="1.2" fill="#ffffff" />
                    <circle cx="15" cy="15" r="1.2" fill="#ffffff" />
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>TM</span>
                </div>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#ffffff",
                  marginTop: "6px",
                  textTransform: "uppercase",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                MOUTH MELTING STRIPS
              </div>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              width: "440px",
              maxWidth: "100%",
              justifyContent: "space-between",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Link
                to="/about"
                style={{
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                About
              </Link>
              <Link
                to="/products"
                style={{
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                Product Range
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Link
                to="/why-thindiss"
                style={{
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                Why ThinDiss™
              </Link>
              <Link
                to="/get-connected"
                style={{
                  color: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                Get Connected
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "25px",
            fontSize: "14.5px",
            color: "#b0b0b0",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <div style={{ fontWeight: 500, margin: 0 }}>
            Copyright © {new Date().getFullYear()} ODISS
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12.5px",
              color: "#b0b0b0",
            }}
          >
            <span style={{ fontWeight: 400, color: "#b0b0b0" }}>Developed by</span>
            <strong style={{ fontWeight: 600, color: "#f3b63f" }}>
              AD FutureStack
            </strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;