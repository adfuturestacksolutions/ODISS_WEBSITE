import React from "react";
import { useNavigate } from "react-router-dom";
import { getProductImageUrl } from "../../utils/imageUtils";

/**
 * ProductCard - Premium, Minimal, Borderless E-commerce Card
 * Features 1:1 floating image container, ambient gold glow halo, diagonal glass reflection sweep,
 * clean typography hierarchy, and animated gold gradient CTA button.
 */
const ProductCard = ({ product, index = 0, useTransparentImage = false, onSelectProduct }) => {
  const navigate = useNavigate();
  const imageUrl = getProductImageUrl(product, useTransparentImage);
  const fallbackUrl = product.images?.[0]?.url;
  const imageAlt = product.images?.[0]?.alt || product.name;

  const handleClick = () => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else if (product?.slug) {
      navigate(`/product/${product.slug}`);
    }
  };

  return (
    <div
      className="product-card"
      style={{ "--card-index": index }}
      onClick={handleClick}
    >
      {/* 1:1 Square Product Image Container */}
      <div className="product-card-media">
        {/* Ambient Gold Radial Glow Layer */}
        <div className="product-card-glow" aria-hidden="true" />

        {/* Ambient Translucent Hover Overlay Layer */}
        <div className="product-card-overlay" aria-hidden="true" />

        {/* Diagonal Shining Light Beam Sweep Layer */}
        <div className="product-card-shine" aria-hidden="true" />

        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="product-card-img"
            loading="lazy"
            onError={(e) => {
              if (fallbackUrl && e.currentTarget.src !== fallbackUrl) {
                e.currentTarget.src = fallbackUrl;
              }
            }}
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
            handleClick();
          }}
          aria-label={`View ${product.name}`}
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
