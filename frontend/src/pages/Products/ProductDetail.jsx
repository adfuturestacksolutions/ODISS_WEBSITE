import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductBySlug, getProductsByCategory, getAllProducts } from "../../services/productService";
import { getProductImageUrl } from "../../utils/imageUtils";
import { computeProductDetailTheme } from "../../utils/colorUtils";
import ProductCard from "../../components/products/ProductCard";
import "../../styles/product-detail.css";

/**
 * ProductDetail - Minimal & Premium Editorial Product Details Page
 * Redesigned with dynamic packaging color theming, shadow-based depth, fluid motion principles,
 * and high-potency sublingual technology showcase.
 */
const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const product = getProductBySlug(slug);

  // Compute dynamic custom properties for the product details page
  const pageThemeStyle = useMemo(() => {
    return computeProductDetailTheme(product?.colors);
  }, [product?.colors]);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedImageIdx(0);
  }, [slug]);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="product-detail-container" style={{ textAlign: "center", paddingTop: "120px" }}>
          <h1 style={{ fontSize: "36px", color: "var(--odiss-dark)", marginBottom: "16px" }}>
            Formulation Not Found
          </h1>
          <p style={{ color: "var(--odiss-muted)", marginBottom: "32px", fontSize: "16px" }}>
            The requested sublingual strip formulation could not be located in our catalog.
          </p>
          <Link to="/products" className="product-detail-primary-btn">
            Browse All Formulations
          </Link>
        </div>
      </div>
    );
  }

  // Get image URL
  const mainImageUrl = getProductImageUrl(product, true);
  const fallbackUrl = product.images?.[0]?.url;

  // Category title mapping
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

  // Related products in the same category
  const categoryProducts = getProductsByCategory(product.categorySlug);
  const relatedProducts = categoryProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  // If not enough in category, fill with other published products
  const displayRelated =
    relatedProducts.length >= 3
      ? relatedProducts
      : [
          ...relatedProducts,
          ...getAllProducts()
            .filter((p) => p.slug !== product.slug && !relatedProducts.some((r) => r.slug === p.slug))
            .slice(0, 3 - relatedProducts.length),
        ];

  return (
    <div className="product-detail-page" style={pageThemeStyle}>
      <div className="product-detail-container">
        {/* 1. Navigation & Breadcrumb Bar */}
        <div className="product-detail-nav-bar">
          <div className="product-detail-nav-content">
            <div className="product-detail-breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <Link to="/products">Products</Link>
              <span className="sep">/</span>
              {product.categorySlug && (
                <>
                  <Link to={`/category/${product.categorySlug}`}>{categoryName}</Link>
                  <span className="sep">/</span>
                </>
              )}
              <span className="current">{product.name}</span>
            </div>

            <Link to="/products" className="product-detail-back-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>

        {/* 2. Hero Asymmetric Section */}
        <section className="product-detail-hero">
          {/* Left Column: Media Visual Showcase */}
          <div className="product-detail-media-card">
            <div className="product-detail-media-glow" />
            <div className="product-detail-badge">
              <span>{categoryName}</span>
            </div>

            {mainImageUrl ? (
              <img
                src={mainImageUrl}
                alt={product.name}
                className="product-detail-main-img"
                onError={(e) => {
                  if (fallbackUrl && e.currentTarget.src !== fallbackUrl) {
                    e.currentTarget.src = fallbackUrl;
                  }
                }}
              />
            ) : (
              <div style={{ textAlign: "center", color: "var(--odiss-muted)", fontWeight: 600 }}>
                <span>{product.name} Formulation</span>
              </div>
            )}

            {/* Thumbnail Gallery (if multiple images exist) */}
            {product.images && product.images.length > 1 && (
              <div className="product-detail-gallery-thumbs">
                {product.images.map((imgObj, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`product-detail-thumb-btn ${selectedImageIdx === idx ? "active" : ""}`}
                    onClick={() => setSelectedImageIdx(idx)}
                  >
                    <img src={imgObj.url} alt={imgObj.alt || product.name} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Title & Key Overview */}
          <div className="product-detail-info">
            <span className="product-detail-category-tag">
              {product.categorySlug ? categoryName : "Fast Oral Dissolving Strip"}
            </span>
            <h1 className="product-detail-title">{product.name}</h1>

            {product.productType && (
              <div className="product-detail-type-pill">{product.productType}</div>
            )}

            <p className="product-detail-lead-desc">
              {product.description || product.shortDescription}
            </p>

            {/* Quick Specs Cards Grid */}
            <div className="product-detail-quick-specs">
              <div className="product-detail-spec-item">
                <span className="product-detail-spec-label">Format</span>
                <span className="product-detail-spec-val">Sublingual Strip</span>
              </div>
              {product.servingSize && (
                <div className="product-detail-spec-item">
                  <span className="product-detail-spec-label">Serving Size</span>
                  <span className="product-detail-spec-val">{product.servingSize}</span>
                </div>
              )}
              {product.servingsPerPack && (
                <div className="product-detail-spec-item">
                  <span className="product-detail-spec-label">Pack Size</span>
                  <span className="product-detail-spec-val">{product.servingsPerPack}</span>
                </div>
              )}
              {product.flavors && product.flavors.length > 0 && (
                <div className="product-detail-spec-item">
                  <span className="product-detail-spec-label">Flavor</span>
                  <span className="product-detail-spec-val">{product.flavors.join(", ")}</span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="product-detail-actions">
              <Link to="/get-connected" className="product-detail-primary-btn">
                <span>Request B2B Sample</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link to="/get-connected" className="product-detail-secondary-btn">
                <span>Custom R&D Inquiry</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Efficacy & Benefits Grid */}
        {product.benefits && product.benefits.length > 0 && (
          <section className="product-detail-section">
            <h2 className="product-detail-section-title">Key Efficacy Benefits</h2>
            <p className="product-detail-section-subtitle">
              Engineered with target active dissolution for maximum physiological bioavailability.
            </p>

            <div className="product-detail-benefits-grid">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="product-detail-benefit-card">
                  <div className="product-detail-benefit-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="product-detail-benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Active Ingredients Matrix */}
        {product.ingredients && product.ingredients.length > 0 && (
          <section className="product-detail-section">
            <h2 className="product-detail-section-title">Active Ingredients Matrix</h2>
            <p className="product-detail-section-subtitle">
              Pure, standardized bio-extracts formulated into our fast-dissolving oral matrix.
            </p>

            <div className="product-detail-ingredients-grid">
              {product.ingredients.map((ing, idx) => (
                <div key={idx} className="product-detail-ingredient-card">
                  <h3 className="product-detail-ingredient-name">{ing.name}</h3>
                  <p className="product-detail-ingredient-desc">
                    {ing.description || "High-potency active ingredient standardized for fast sublingual absorption."}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}



        {/* 6. Technical & B2B Manufacturing Specifications Table */}
        <section className="product-detail-section">
          <h2 className="product-detail-section-title">Formulation & Packaging Specifications</h2>
          <p className="product-detail-section-subtitle">
            Technical data for pharmaceutical, nutraceutical, and international private label partners.
          </p>

          <div className="product-detail-specs-table-wrapper">
            <div className="product-detail-spec-row">
              <span className="product-detail-table-label">Delivery Format</span>
              <span className="product-detail-table-value">Fast Oral Dissolving Strip (ODF)</span>
            </div>

            {product.servingSize && (
              <div className="product-detail-spec-row">
                <span className="product-detail-table-label">Recommended Serving</span>
                <span className="product-detail-table-value">{product.servingSize}</span>
              </div>
            )}

            {product.servingsPerPack && (
              <div className="product-detail-spec-row">
                <span className="product-detail-table-label">Packaging Standard</span>
                <span className="product-detail-table-value">
                  {product.servingsPerPack} per {product.packSize || "Box"} (Individual Foil Pouch)
                </span>
              </div>
            )}

            {product.flavors && product.flavors.length > 0 && (
              <div className="product-detail-spec-row">
                <span className="product-detail-table-label">Available Flavors</span>
                <span className="product-detail-table-value">{product.flavors.join(", ")}</span>
              </div>
            )}

            {product.manufacturing && (
              <div className="product-detail-spec-row">
                <span className="product-detail-table-label">OEM Capabilities</span>
                <div className="product-detail-cap-pills">
                  {product.manufacturing.privateLabel && (
                    <span className="product-detail-cap-pill">Private Label White-Label</span>
                  )}
                  {product.manufacturing.customFormulation && (
                    <span className="product-detail-cap-pill">Custom R&D Dosage</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 7. Related Formulations */}
        {displayRelated.length > 0 && (
          <section className="product-detail-section">
            <h2 className="product-detail-section-title">Explore Related Formulations</h2>
            <p className="product-detail-section-subtitle">
              Discover other high-potency oral strip formulations in our wellness range.
            </p>

            <div className="product-detail-related-grid">
              {displayRelated.map((relProd, idx) => (
                <ProductCard
                  key={relProd._id || relProd.slug}
                  product={relProd}
                  index={idx}
                  useTransparentImage={true}
                  onSelectProduct={(p) => navigate(`/product/${p.slug}`)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
