import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import WhyThinDiss from "../pages/WhyThinDiss/WhyThinDiss";

const Products = () => {
  return (
    <main className="page-placeholder">
      <span>Products</span>
      <h1>Explore our products.</h1>
    </main>
  );
};

const GetConnected = () => {
  return (
    <main className="page-placeholder">
      <span>Get Connected</span>
      <h1>Let&apos;s start a conversation.</h1>
    </main>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route
        path="/why-thindiss"
        element={<WhyThinDiss />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/get-connected"
        element={<GetConnected />}
      />
    </Routes>
  );
};

export default AppRoutes;