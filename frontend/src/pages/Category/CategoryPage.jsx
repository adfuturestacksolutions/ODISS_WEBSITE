import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCategoryBySlug, getAllCategories } from "../../services/categoryService";
import { getProductsByCategory } from "../../services/productService";
import ProductCard from "../../components/products/ProductCard";
import adultsHeroVideo from "../../assets/products/Hero/Adults Banner.mp4";
import "../../styles/category.css";

// Theme configuration per category slug
const categoryThemes = {
  "adults-range": {
    bg: "linear-gradient(135deg, #8a73b5 0%, #6f5999 100%)",
    accent: "#6f5999",
    tagline: "Everyday Adult Wellness & Vitality",
    heroVideo: adultsHeroVideo,
  },
  "womens-range": {
    bg: "linear-gradient(135deg, #c7758d 0%, #ae5871 100%)",
    accent: "#ae5871",
    tagline: "Tailored Wellness & Beauty Support for Women",
  },
  "kids-range": {
    bg: "linear-gradient(135deg, #e39a3b 0%, #c77f22 100%)",
    accent: "#c77f22",
    tagline: "Gentle & Nourishing Growth Matrix for Children",
  },
  "vitals-range": {
    bg: "linear-gradient(135deg, #389487 0%, #267469 100%)",
    accent: "#267469",
    tagline: "Essential Vitamins & Mineral Strip Solutions",
  },
};

/**
 * CategoryPage - Dedicated Category Showcase Page
 * Features a full-width banner matching the reference layout, podium product showcase,
 * lifestyle image, category switching tabs, and borderless product grid.
 */
const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const allCategories = getAllCategories();
  const category = getCategoryBySlug(slug) || allCategories[0];
  const products = getProductsByCategory(category.slug);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVideoLoaded(false);
  }, [slug]);

  const theme = categoryThemes[category.slug] || categoryThemes["adults-range"];

  // Pause/Play Video on scroll visibility to optimize resources
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !theme.heroVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !video.paused) {
            video.pause();
          } else if (entry.isIntersecting && video.paused) {
            video.play().catch(() => {});
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [slug, theme.heroVideo]);

  return (
    <div className="category-page">
      {/* 1. Full-Width Category Hero Banner */}
      <section
        ref={heroRef}
        className={`category-hero-banner ${theme.heroVideo ? "has-video" : ""}`}
        style={theme.heroVideo ? undefined : { background: theme.bg }}
      >
        {theme.heroVideo ? (
          <div className="category-hero-video-wrapper">
            <video
              ref={videoRef}
              className={`category-hero-video ${isVideoLoaded ? "loaded" : ""}`}
              src={theme.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              aria-label={`${category.name} Video Banner`}
            />
          </div>
        ) : (
          <div className="category-hero-container">
            {/* Left Pedestal Podium Product Display */}
            <div className="category-hero-left">
              <div className="category-hero-podium">
                <img
                  src={category.image?.url}
                  alt={`${category.name} Products`}
                  className="category-hero-podium-img"
                />
                <div className="category-hero-pedestal-stand" />
              </div>
            </div>

            {/* Center Category Title */}
            <div className="category-hero-center">
              <h1 className="category-hero-title">{category.name}</h1>
            </div>

            {/* Right Lifestyle Model Visual */}
            <div className="category-hero-right">
              {category.banner?.url && (
                <img
                  src={category.banner.url}
                  alt={`${category.name} Lifestyle`}
                  className="category-hero-lifestyle-img"
                />
              )}
            </div>
          </div>
        )}
      </section>

      {/* 2. Category Switcher Tabs Bar & Breadcrumb */}
      <div className="category-tabs-bar">
        <div className="category-tabs-container">
          <div className="category-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/products">Products</Link>
            <span className="sep">/</span>
            <span className="current">{category.name}</span>
          </div>

          <div className="category-pills-nav">
            {allCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                className={`category-pill-btn ${cat.slug === category.slug ? "active" : ""}`}
                onClick={() => navigate(`/category/${cat.slug}`)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Category Products Content Section */}
      <section className="category-content-section">
        <div className="category-content-container">
          {/* Section Subheader */}
          <div className="category-content-header">
            <span className="category-content-tag">{theme.tagline}</span>
            <h2 className="category-content-title">
              {category.name} Formulations
            </h2>
            <p className="category-content-desc">
              {category.description || category.shortDescription}
            </p>
          </div>

          {/* Grid Toolbar / Counter */}
          <div className="category-grid-toolbar">
            <div className="category-grid-count">
              <span>Formulation Portfolio</span>
              <span className="category-grid-count-badge">
                {products.length} {products.length === 1 ? "Formulation" : "Formulations"}
              </span>
            </div>
          </div>

          {/* Borderless Product Cards Grid */}
          <div className="category-product-grid">
            {products.map((product, idx) => (
              <ProductCard
                key={product._id || product.slug}
                product={product}
                index={idx}
                useTransparentImage={true}
                onSelectProduct={(prod) => navigate(`/product/${prod.slug}`)}
              />
            ))}
          </div>

          {products.length === 0 && (
            <div className="category-empty-state">
              <p>No products found in this category range.</p>
              <Link to="/products" className="category-empty-btn">
                Browse All Formulations
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;

