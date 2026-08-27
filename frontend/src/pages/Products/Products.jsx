import React from "react";
import ProductHero from "../../components/products/ProductHero";
import CategoryExplore from "../../components/products/CategoryExplore";
import ProductShowcaseSection from "../../components/products/ProductShowcaseSection";
import "../../styles/products.css";

const Products = () => {
  return (
    <main className="products-page">
      {/* Premium Hero Banner with Video */}
      <ProductHero />

      {/* Dynamic Animated Category Explore Section */}
      <CategoryExplore />

      {/* International Standard Product Showcase & Filtering Section */}
      <ProductShowcaseSection />
    </main>
  );
};

export default Products;
