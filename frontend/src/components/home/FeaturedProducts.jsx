import React, { useRef, useMemo } from "react";
import { getFeaturedProducts, getAllProducts } from "../../services/productService";
import ProductCard from "../products/ProductCard";
import "../../styles/products.css";

const HOME_PRODUCT_IMAGES = [
  "/home product/1.jpeg",
  "/home product/2.jpeg",
  "/home product/3.jpeg",
  "/home product/4.jpeg",
  "/home product/5.jpeg",
  "/home product/6.jpeg",
];

const FeaturedProducts = () => {
  const scrollRef = useRef(null);

  // Dynamically load real featured products mapped with home product images
  const displayProducts = useMemo(() => {
    const featured = getFeaturedProducts();
    const list = featured && featured.length > 0 ? featured : getAllProducts().slice(0, 6);
    return list.map((prod, idx) => ({
      ...prod,
      image: HOME_PRODUCT_IMAGES[idx % HOME_PRODUCT_IMAGES.length],
    }));
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="featured-products-section"
      style={{
        padding: "90px 0 100px",
        backgroundColor: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        .featured-products-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3.5vw, 36px);
        }
        .featured-card-wrapper {
          flex: 0 0 295px;
          scroll-snap-align: start;
        }
        @media (max-width: 768px) {
          .featured-products-section {
            padding: 50px 0 60px !important;
          }
          .featured-products-container {
            padding: 0 16px !important;
          }
          .featured-card-wrapper {
            flex: 0 0 260px !important;
          }
        }
      `}</style>
      <div className="featured-products-container">

        {/* =========================
            HEADER SECTION WITH SWIPER ARROWS (ABOVE PRODUCTS)
        ========================== */}
        <div
          className="reveal-up"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "36px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "750px" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
                fontSize: "clamp(34px, 4.2vw, 56px)",
                fontWeight: 700,
                color: "#1e293b",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                margin: 0,
              }}
            >
              Explore Our Advanced{" "}
              <span style={{ color: "#f3b63f" }}>Oral Film Portfolio</span>
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "#64748b",
                marginTop: "16px",
                fontWeight: 400,
                maxWidth: "560px",
                margin: "16px 0 0",
              }}
            >
              Precision-engineered oral dissolving strips formulated for instant
              sublingual absorption, maximum bioavailability, and water-free
              convenience.
            </p>
          </div>

          {/* Swiper Arrow Controls Above Products */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
              paddingBottom: "4px",
            }}
          >
            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous products"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                border: "1.5px solid #cbd5e1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#334155",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f3b63f";
                e.currentTarget.style.backgroundColor = "#fefce8";
                e.currentTarget.style.color = "#f3b63f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#cbd5e1";
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#334155";
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next products"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                border: "1.5px solid #cbd5e1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#334155",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f3b63f";
                e.currentTarget.style.backgroundColor = "#fefce8";
                e.currentTarget.style.color = "#f3b63f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#cbd5e1";
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#334155";
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* =========================
            PRODUCTS CAROUSEL ROW USING PRODUCTCARD
        ========================== */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "8px 4px 20px",
          }}
          className="hide-scrollbar reveal-stagger"
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {displayProducts.map((product, idx) => (
            <div
              key={product._id || product.slug || idx}
              className="featured-card-wrapper"
            >
              <ProductCard
                product={product}
                index={idx}
                showBuyButton={false}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
