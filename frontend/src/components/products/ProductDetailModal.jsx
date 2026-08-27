import React from "react";
import { Link } from "react-router-dom";
import { getProductImageUrl } from "../../utils/imageUtils";

/**
 * ProductDetailModal - International Standard Product Specification Modal
 * Displays complete formulation details, ingredients, benefits & manufacturing capabilities.
 */
const ProductDetailModal = ({ product, useTransparentImage = false, onClose }) => {
  if (!product) return null;

  const imageUrl = getProductImageUrl(product, useTransparentImage);
  const fallbackUrl = product.images?.[0]?.url;
  const categoryName =
    product.categorySlug === "adults-range"
      ? "Adults Range"
      : product.categorySlug === "womens-range"
      ? "Women's Range"
      : product.categorySlug === "kids-range"
      ? "Kids Range"
      : product.categorySlug === "vitals-range"
      ? "Vitals Range"
      : "ODISS Formulation";

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div
        className="product-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="product-modal-close"
          onClick={onClose}
          aria-label="Close specifications modal"
        >
          &times;
        </button>

        <div className="product-modal-content-grid">
          {/* Left Media Image Container */}
          <div className="product-modal-media">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={product.name}
                className="product-modal-img"
                onError={(e) => {
                  if (fallbackUrl && e.currentTarget.src !== fallbackUrl) {
                    e.currentTarget.src = fallbackUrl;
                  }
                }}
              />
            ) : (
              <div className="product-modal-placeholder">
                <span>{product.name}</span>
              </div>
            )}
            <div className="product-modal-media-badge">
              <span>{categoryName}</span>
            </div>
          </div>

          {/* Right Information & Specifications */}
          <div className="product-modal-details">
            <div className="product-modal-header">
              <span className="product-modal-type">{product.productType}</span>
              <h2 className="product-modal-title">{product.name}</h2>
            </div>

            <p className="product-modal-description">
              {product.description || product.shortDescription}
            </p>

            {/* Key Benefits List */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="product-modal-section">
                <h4 className="product-modal-section-title">Key Efficacy Benefits</h4>
                <ul className="product-modal-benefits-list">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="product-modal-benefit-item">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Active Ingredients Matrix */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="product-modal-section">
                <h4 className="product-modal-section-title">Active Ingredients Matrix</h4>
                <div className="product-modal-ingredients-grid">
                  {product.ingredients.map((ing, idx) => (
                    <div key={idx} className="product-modal-ingredient-chip">
                      <span className="product-modal-ingredient-name">{ing.name}</span>
                      {ing.description && (
                        <span className="product-modal-ingredient-desc">
                          {ing.description}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications Table */}
            <div className="product-modal-section">
              <h4 className="product-modal-section-title">Formulation Specifications</h4>
              <div className="product-modal-specs-table">
                <div className="product-modal-spec-row">
                  <span className="product-modal-spec-label">Format:</span>
                  <span className="product-modal-spec-value">Fast Oral Dissolving Strip</span>
                </div>
                {product.servingSize && (
                  <div className="product-modal-spec-row">
                    <span className="product-modal-spec-label">Serving Size:</span>
                    <span className="product-modal-spec-value">{product.servingSize}</span>
                  </div>
                )}
                {product.servingsPerPack && (
                  <div className="product-modal-spec-row">
                    <span className="product-modal-spec-label">Pack Format:</span>
                    <span className="product-modal-spec-value">{product.servingsPerPack} / {product.packSize || "Box"}</span>
                  </div>
                )}
                {product.flavors && product.flavors.length > 0 && (
                  <div className="product-modal-spec-row">
                    <span className="product-modal-spec-label">Flavors:</span>
                    <span className="product-modal-spec-value">{product.flavors.join(", ")}</span>
                  </div>
                )}
                {product.dosage && (
                  <div className="product-modal-spec-row">
                    <span className="product-modal-spec-label">Active Strength:</span>
                    <span className="product-modal-spec-value">{product.dosage.value} {product.dosage.unit}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Manufacturing Capabilities */}
            {product.manufacturing && (
              <div className="product-modal-section">
                <h4 className="product-modal-section-title">Manufacturing Options</h4>
                <div className="product-modal-capabilities">
                  {product.manufacturing.privateLabel && (
                    <span className="product-modal-cap-pill">Private Label Available</span>
                  )}
                  {product.manufacturing.customFormulation && (
                    <span className="product-modal-cap-pill">Custom R&D Formulation</span>
                  )}
                </div>
              </div>
            )}

            {/* CTA Action */}
            <div className="product-modal-footer">
              <Link
                to="/get-connected"
                className="product-modal-cta-btn"
                onClick={onClose}
              >
                <span>Request B2B Formulation Sample</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
