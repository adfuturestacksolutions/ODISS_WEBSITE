import React from "react";

/**
 * ProductCard - Premium, Minimal, Borderless E-commerce Card
 * Features 1:1 floating image container, ambient gold glow halo, diagonal glass reflection sweep,
 * clean typography hierarchy, and animated gold gradient CTA button.
 */
const ProductCard = ({ product, index = 0, onSelectProduct }) => {
  const mainImage = product.images?.[0]?.url;
  const imageAlt = product.images?.[0]?.alt || product.name;

  return (
    <div
      className="product-card"
      style={{ "--card-index": index }}
      onClick={() => onSelectProduct && onSelectProduct(product)}
    >
      {/* 1:1 Square Product Image Container */}
      <div className="product-card-media">
        {/* Ambient Gold Radial Glow Layer */}
        <div className="product-card-glow" aria-hidden="true" />

        {/* Diagonal Shimmer Glass Reflection Layer */}
        <div className="product-card-shimmer" aria-hidden="true" />

        {mainImage ? (
          <img
            src={mainImage}
            alt={imageAlt}
            className="product-card-img"
            loading="lazy"
          />
        ) : (
          <div className="product-card-img-placeholder">
            <span>{product.name}</span>
          </div>
        )}
      </div>

      {/* Card Details & Typography */}
      <div className="product-card-body">
        <div className="product-card-info">
          {product.productType && (
            <span className="product-card-type">{product.productType}</span>
          )}
          <h3 className="product-card-title">{product.name}</h3>
        </div>

        {/* "Buy Now" Gold Gradient CTA Button */}
        <button
          type="button"
          className="product-card-buy-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onSelectProduct) onSelectProduct(product);
          }}
          aria-label={`Buy ${product.name}`}
        >
          <span>Buy Now</span>
          <svg
            className="product-card-arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
