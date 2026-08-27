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
          width: "min(1280px, calc(100% - clamp(24px, 5vw, 80px)))",
          margin: "0 auto",
          padding: "clamp(45px, 6vw, 65px) 0 35px",
        }}
      >
        {/* =========================
            SOCIAL MEDIA BAR
        ========================== */}
        <div
          className="reveal-up"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "clamp(24px, 3.5vw, 40px)",
            marginBottom: "clamp(35px, 4.5vw, 55px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(24px, 2.6vw, 40px)",
              fontWeight: 600,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Connect with Social Media
          </h3>

          <div
            className="reveal-stagger"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(16px, 2.5vw, 42px)",
              flexWrap: "wrap",
            }}
          >
            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3b63f";
                e.currentTarget.style.borderColor = "#f3b63f";
                e.currentTarget.style.color = "#1e1e1e";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3b63f";
                e.currentTarget.style.borderColor = "#f3b63f";
                e.currentTarget.style.color = "#1e1e1e";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3b63f";
                e.currentTarget.style.borderColor = "#f3b63f";
                e.currentTarget.style.color = "#1e1e1e";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3b63f";
                e.currentTarget.style.borderColor = "#f3b63f";
                e.currentTarget.style.color = "#1e1e1e";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3b63f";
                e.currentTarget.style.borderColor = "#f3b63f";
                e.currentTarget.style.color = "#1e1e1e";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Top CTA Section */}
        <div
          className="reveal-up"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "70px",
            flexWrap: "wrap",
          }}
        >
          <div className="reveal-left" style={{ maxWidth: "460px" }}>
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
            className="reveal-right"
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
              className="anim-card-hover"
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
                textDecoration: "none",
              }}
            >
              Contact me now
            </Link>
          </div>
        </div>

        {/* Middle Navigation Section */}
        <div
          className="reveal-up"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "50px",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div className="reveal-left" style={{ display: "flex", flexDirection: "column" }}>
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