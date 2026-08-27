import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Breath Freshener",
    slug: "breath-freshener",
    category: "Oral Hygiene",
    image: "/home product/1.jpeg",
    flavor: "Spearmint Flavor",
  },
  {
    id: 2,
    title: "Silenzz",
    slug: "silenzz",
    category: "Sleep & Relaxation",
    image: "/home product/2.jpeg",
    flavor: "Peppermint Flavor",
  },
  {
    id: 3,
    title: "Meltacid",
    slug: "meltacid",
    category: "Antacid & Digestion",
    image: "/home product/3.jpeg",
    flavor: "Spearmint Flavor",
  },
  {
    id: 4,
    title: "Quikoff",
    slug: "quikoff",
    category: "Herbal Cough & Throat",
    image: "/home product/4.jpeg",
    flavor: "Raspberry Flavor",
  },
  {
    id: 5,
    title: "Energizz",
    slug: "energizz",
    category: "Energy & Focus",
    image: "/home product/5.jpeg",
    flavor: "Citrus Orange Flavor",
  },
  {
    id: 6,
    title: "ImmunoBoost",
    slug: "immunoboost",
    category: "Immunity & Wellness",
    image: "/home product/6.jpeg",
    flavor: "Berry Blast Flavor",
  },
];

const FeaturedProducts = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
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
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 30px;
        }
        @media (max-width: 768px) {
          .featured-products-section {
            padding: 55px 0 65px !important;
          }
          .featured-products-container {
            padding: 0 16px !important;
          }
          .product-card-item {
            flex: 0 0 255px !important;
            padding: 18px 16px 18px !important;
            min-height: 380px !important;
          }
        }
      `}</style>
      <div className="featured-products-container">

        {/* =========================
            HEADER SECTION WITH SWIPER ARROWS (ABOVE PRODUCTS)
        ========================== */}
        <div
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
                fontSize: "clamp(34px, 4.2vw, 56px)",
                fontWeight: 600,
                color: "#1e293b",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
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
            PRODUCTS CAROUSEL ROW
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
            paddingBottom: "10px",
          }}
          className="hide-scrollbar"
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {products.map((product) => (
            <div
              key={product.id}
              className="product-card-item"
              onClick={() => navigate(`/product/${product.slug}`)}
              style={{
                flex: "0 0 285px",
                scrollSnapAlign: "start",
                backgroundColor: "#fbfbfc",
                borderRadius: "20px",
                padding: "24px 22px 22px",
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "410px",
                boxShadow: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              {/* Product Info Header */}
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1e293b",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    margin: "6px 0 0",
                    fontWeight: 500,
                  }}
                >
                  {product.category}
                </p>
              </div>

              {/* Product Image Box */}
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  margin: "18px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  backgroundColor: "#f1f5f9",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <img
                    src=""
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                )}
              </div>

              {/* Bottom Flavor Label */}
              <div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#475569",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {product.flavor}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;

