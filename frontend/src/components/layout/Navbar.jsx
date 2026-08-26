import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Why ThinDiss",
      path: "/why-thindiss",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Get Connected",
      path: "/get-connected",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="site-navbar">
        <div className="navbar-inner">

          {/* Brand */}
          <Link
            to="/"
            className="navbar-brand"
            aria-label="ODISS Home"
          >
            <img
              src="/odiss-logo.png"
              alt="ODISS"
              className="navbar-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  isActive(item.path) ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <div className="mobile-nav-inner">

            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${
                  isActive(item.path) ? "active" : ""
                }`}
                style={{
                  "--item-index": index,
                }}
              >
                <span className="mobile-nav-number">
                  0{index + 1}
                </span>

                <span>{item.label}</span>

                <span className="mobile-nav-arrow">
                  ↗
                </span>
              </Link>
            ))}

          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <button
          className="mobile-menu-overlay"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;