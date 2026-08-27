import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import WhyThinDiss from "../pages/WhyThinDiss/WhyThinDiss";
import Products from "../pages/Products/Products";
import CategoryPage from "../pages/Category/CategoryPage";
import GetConnected from "../pages/GetConnected/GetConnected";

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