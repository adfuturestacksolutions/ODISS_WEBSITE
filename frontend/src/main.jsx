import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingContact from "./components/common/FloatingContact";
import ScrollObserver from "./components/common/ScrollObserver";

import "./styles/globals.css";

const App = () => {
  return (
    <div className="app">
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