import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingContact from "./components/common/FloatingContact";
import ScrollObserver from "./components/common/ScrollObserver";

import "./styles/globals.css";

/* ── Scroll-to-top on every route change ── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <ScrollObserver />
      <Navbar />

      <main className="site-content">
        <AppRoutes />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);