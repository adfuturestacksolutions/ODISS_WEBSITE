import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import WhyThinDiss from "../pages/WhyThinDiss/WhyThinDiss";
import Products from "../pages/Products/Products";
import CategoryPage from "../pages/Category/CategoryPage";

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
        path="/category/:slug"
        element={<CategoryPage />}
      />

      <Route
        path="/get-connected"
        element={<GetConnected />}
      />
    </Routes>
  );
};

export default AppRoutes;