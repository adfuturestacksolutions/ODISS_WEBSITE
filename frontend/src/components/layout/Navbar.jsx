import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Why ThinDiss", path: "/why-thindiss" },
    { label: "Products", path: "/products" },
    { label: "Get Connected", path: "/get-connected" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* =========================
          RESPONSIVE RULES
          (desktop nav vs. mobile hamburger toggle)
      ========================== */}
      <style>{`
        @media (max-width: 960px) {
          .navbar-desktop-nav {
            display: none !important;
          }
          .navbar-mobile-btn {
            display: flex !important;
          }
        }
        @media (min-width: 961px) {
          .navbar-desktop-nav {
            display: flex !important;
          }
          .navbar-mobile-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* =========================
          NAVBAR
      ========================== */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderBottom: "1px solid rgba(36, 36, 36, 0.08)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <div
          className="navbar-inner-width"
          style={{
            width: "min(1400px, calc(100% - 90px))",
            height: "75px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            aria-label="ODISS Home"
            style={{
              display: "flex",
              alignItems: "center",
              width: "120px",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <img
              src="/odiss-logo.png"
              alt="ODISS"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                mixBlendMode: "multiply",
                display: "block",
              }}
            />
          </Link>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav
            className="navbar-desktop-nav"
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "46px",
            }}
          >
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 0",
                    color: active ? "#d99b2f" : "#242424",
                    fontSize: "16.5px",
                    fontWeight: 500,
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    borderBottom: active
                      ? "2px solid #f3b63f"
                      : "2px solid transparent",
                    transition:
                      "color 0.25s ease, border-color 0.25s ease",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            className="navbar-mobile-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            style={{
              display: "flex",
              position: "relative",
              width: "44px",
              height: "44px",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "5px",
              borderRadius: "50%",
              backgroundColor: menuOpen ? "#f3b63f" : "#242424",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: "18px",
                height: "1.5px",
                backgroundColor: menuOpen ? "#242424" : "#ffffff",
                transform: menuOpen
                  ? "translateY(3.25px) rotate(45deg)"
                  : "none",
                transition: "all 0.3s ease",
                display: "block",
              }}
            />

            <span
              style={{
                width: "18px",
                height: "1.5px",
                backgroundColor: menuOpen ? "#242424" : "#ffffff",
                transform: menuOpen
                  ? "translateY(-3.25px) rotate(-45deg)"
                  : "none",
                transition: "all 0.3s ease",
                display: "block",
              }}
            />
          </button>
        </div>

        {/* =========================
            MOBILE DROPDOWN
        ========================== */}
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "75px",
              backgroundColor: "#ffffff",
              borderBottom: "1px solid rgba(36, 36, 36, 0.1)",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: "calc(100% - 40px)",
                margin: "0 auto",
                padding: "12px 0 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: "64px",
                    borderBottom:
                      index === navItems.length - 1
                        ? "none"
                        : "1px solid rgba(36, 36, 36, 0.08)",
                    color: isActive(item.path)
                      ? "#d99b2f"
                      : "#242424",
                    fontSize: "17px",
                    fontWeight: 500,
                    textDecoration: "none",
                    padding: "0 8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#d99b2f",
                      fontWeight: 600,
                    }}
                  >
                    0{index + 1}
                  </span>

                  <span
                    style={{
                      flexGrow: 1,
                      marginLeft: "14px",
                    }}
                  >
                    {item.label}
                  </span>

                  <span
                    style={{
                      fontSize: "18px",
                      color: "#707070",
                    }}
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* =========================
          MOBILE BACKDROP
          (kept as a sibling of <header>, so it must sit
          BELOW the header's z-index or it will cover the
          navbar itself, including the open dropdown)
      ========================== */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            backgroundColor: "rgba(36, 36, 36, 0.22)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;