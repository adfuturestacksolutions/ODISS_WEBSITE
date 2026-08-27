import React from "react";
import ProductCard from "./ProductCard";

/**
 * ProductGrid - Responsive Product Grid Component
 * Displays product cards with staggered animations or empty search state.
 */
const ProductGrid = ({ products, useTransparentImage = false, onSelectProduct, onResetFilters }) => {
  if (!products || products.length === 0) {
    return (
      <div className="product-empty-state">
        <div className="product-empty-icon">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
        <h3 className="product-empty-title">No Formulations Found</h3>
        <p className="product-empty-desc">
          We couldn't find any oral dissolving strip formulations matching your current filters.
        </p>
        <button
          type="button"
          className="product-empty-btn"
          onClick={onResetFilters}
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product, idx) => (
        <ProductCard
          key={product._id || product.slug}
          product={product}
          index={idx}
          useTransparentImage={useTransparentImage}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
