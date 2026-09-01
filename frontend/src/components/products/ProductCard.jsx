import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getProductImageUrl } from "../../utils/imageUtils";
import {
  hexToRgb,
  darkenColor,
  lightenColor,
  toRgba,
  getContrastTextColor,
} from "../../utils/colorUtils";

/**
 * ProductCard - Premium, Minimal, Borderless E-commerce Card
 * Features 1:1 floating image container, ambient glow halo tailored to product colors,
 * diagonal glass reflection sweep, clean typography hierarchy, and animated product-matched CTA button.
 */
const ProductCard = ({
  product,
  index = 0,
  useTransparentImage = false,
  onSelectProduct,
  showBuyButton = true,
}) => {
  const navigate = useNavigate();
  const imageUrl = product?.image || getProductImageUrl(product, useTransparentImage);
  const fallbackUrl = product?.images?.[0]?.url;
  const imageAlt = product?.images?.[0]?.alt || product?.name || "Product";

  const handleClick = () => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else if (product?.slug) {
      navigate(`/product/${product.slug}`);
    }
  };

  // Compute CSS custom properties based on product's brand colors (active anytime + enhanced on hover)
  const cardStyle = useMemo(() => {
    const rawColors = product?.colors;

    // Default Brand Gold Palette Fallbacks
    const DEFAULT_MAIN = "#242424";
    const DEFAULT_ACCENT = "#d99b2f";
    const DEFAULT_CATEGORY = "#707070";

    const hasCustomColors = Boolean(
      rawColors && (rawColors.main || rawColors.accent || rawColors.category)
    );
    const mainColor = rawColors?.main || DEFAULT_MAIN;
    const accentColor =
      rawColors?.accent || rawColors?.category || rawColors?.main || DEFAULT_ACCENT;
    const accent2Color =
      rawColors?.accent2 || rawColors?.accent || rawColors?.category || null;
    const categoryColor =
      rawColors?.category || rawColors?.accent || DEFAULT_CATEGORY;

    // 1. Ambient Glow (Higher opacity & radiant presence anytime, blooms on hover)
    const glowColor =
      rawColors?.accent || rawColors?.category || rawColors?.main || DEFAULT_ACCENT;
    const glowStart = hasCustomColors
      ? toRgba(glowColor, 0.62, "rgba(255, 215, 120, 0.6)")
      : "rgba(255, 215, 120, 0.6)";
    const glowMid = hasCustomColors
      ? toRgba(glowColor, 0.28, "rgba(243, 182, 63, 0.28)")
      : "rgba(243, 182, 63, 0.28)";

    // 2. Translucent Tint Overlay (Blends from main to accent2/accent, visible anytime)
    const overlayStart = hasCustomColors
      ? toRgba(mainColor, 0.16, "rgba(255, 255, 255, 0.25)")
      : "rgba(255, 255, 255, 0.25)";
    const overlayEnd = hasCustomColors
      ? accent2Color
        ? toRgba(accent2Color, 0.18, "rgba(36, 36, 36, 0.08)")
        : rawColors?.accent
        ? toRgba(rawColors.accent, 0.16, "rgba(36, 36, 36, 0.08)")
        : toRgba(mainColor, 0.1, "transparent")
      : "rgba(217, 155, 47, 0.15)";

    // 3. Subtle ambient media background & colored border
    const mediaBg = hasCustomColors
      ? `linear-gradient(180deg, #ffffff 0%, ${toRgba(mainColor, 0.06)} 100%)`
      : "var(--odiss-cream-light, #fcfaf4)";
    const cardBorder = hasCustomColors
      ? toRgba(accentColor, 0.18)
      : "rgba(217, 155, 47, 0.15)";
    const cardBorderHover = hasCustomColors
      ? toRgba(accentColor, 0.45)
      : "rgba(217, 155, 47, 0.45)";
    const cardShadow = hasCustomColors
      ? `0 6px 20px ${toRgba(accentColor, 0.12)}`
      : "0 6px 20px rgba(0, 0, 0, 0.04)";
    const cardShadowHover = hasCustomColors
      ? `0 12px 30px ${toRgba(accentColor, 0.26)}`
      : "0 12px 30px rgba(217, 155, 47, 0.2)";

    // 4. CTA Buy Button (Accent -> ~15% darker shade runtime computation + contrast check)
    let btnBg;
    let btnBgHover;
    let btnShadow;
    let btnShadowHover;
    let btnTextColor;

    if (hasCustomColors) {
      const btnBase = rawColors.accent || rawColors.category || rawColors.main;
      const btnDarker = darkenColor(btnBase, 15);
      const btnHoverStart = lightenColor(btnBase, 6);
      const btnHoverEnd = darkenColor(btnBase, 20);

      btnBg = `linear-gradient(135deg, ${btnBase} 0%, ${btnDarker} 100%)`;
      btnBgHover = `linear-gradient(135deg, ${btnHoverStart} 0%, ${btnHoverEnd} 100%)`;
      btnShadow = `0 4px 16px ${toRgba(btnBase, 0.38, "rgba(217, 155, 47, 0.35)")}`;
      btnShadowHover = `0 6px 22px ${toRgba(btnBase, 0.55, "rgba(217, 155, 47, 0.5)")}`;
      btnTextColor = getContrastTextColor(btnBase);
    } else {
      btnBg = "linear-gradient(135deg, #f3b63f 0%, #d99b2f 100%)";
      btnBgHover = "linear-gradient(135deg, #f5bd4f 0%, #ca8a21 100%)";
      btnShadow = "0 4px 16px rgba(217, 155, 47, 0.35)";
      btnShadowHover = "0 6px 22px rgba(217, 155, 47, 0.5)";
      btnTextColor = "#ffffff";
    }

    // 5. Title Hover & Type Label Color
    const titleHoverColor =
      rawColors?.accent || rawColors?.category || rawColors?.main || DEFAULT_ACCENT;

    return {
      "--card-index": index,
      "--card-main": mainColor,
      "--card-accent": accentColor,
      "--card-type-color": categoryColor,
      "--card-media-bg": mediaBg,
      "--card-border": cardBorder,
      "--card-border-hover": cardBorderHover,
      "--card-shadow": cardShadow,
      "--card-shadow-hover": cardShadowHover,
      "--card-glow-start": glowStart,
      "--card-glow-mid": glowMid,
      "--card-overlay-start": overlayStart,
      "--card-overlay-end": overlayEnd,
      "--card-btn-bg": btnBg,
      "--card-btn-bg-hover": btnBgHover,
      "--card-btn-shadow": btnShadow,
      "--card-btn-shadow-hover": btnShadowHover,
      "--card-btn-text": btnTextColor,
      "--card-title-hover": titleHoverColor,
    };
  }, [product, index]);

  return (
    <div
      className={`product-card reveal-card anim-card-hover stagger-${(index % 8) + 1}`}
      style={cardStyle}
      onClick={handleClick}
    >
      {/* 1:1 Square Product Image Container */}
      <div className="product-card-media">
        {/* Ambient Radial Glow Layer */}
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
            <span>{product?.name || "Product"}</span>
          </div>
        )}
      </div>

      {/* Card Details & Typography */}
      <div className="product-card-body">
        <div className="product-card-info">
          <h3 className="product-card-title">{product?.name}</h3>
        </div>

        {/* CTA Button (Optional) */}
        {showBuyButton && (
          <button
            type="button"
            className="product-card-buy-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            aria-label={`View ${product?.name || "product"}`}
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
        )}
      </div>
    </div>
  );
};

export default ProductCard;
