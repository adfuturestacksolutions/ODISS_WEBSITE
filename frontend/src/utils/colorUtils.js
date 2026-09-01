/**
 * Color Utilities for ODISS Dynamic Product Color Theming
 * Provides functions for color manipulation, RGBA conversions, luminance calculations,
 * and comprehensive CSS variable generation for product components and pages.
 */

/**
 * Parse 3-digit or 6-digit hex color to {r, g, b}
 * @param {string} hex - Hex color string
 * @returns {{r: number, g: number, b: number}|null}
 */
export const hexToRgb = (hex) => {
  if (!hex || typeof hex !== "string") return null;
  let cleanHex = hex.trim().replace(/^#/, "");

  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  if (cleanHex.length !== 6) return null;

  const num = parseInt(cleanHex, 16);
  if (isNaN(num)) return null;

  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
};

/**
 * Darken a hex color by a percentage (0-100)
 * @param {string} hex - Hex color string
 * @param {number} percent - Percentage to darken (0-100)
 * @returns {string} RGB color string
 */
export const darkenColor = (hex, percent = 15) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const factor = Math.max(0, Math.min(1, (100 - percent) / 100));
  const r = Math.round(rgb.r * factor);
  const g = Math.round(rgb.g * factor);
  const b = Math.round(rgb.b * factor);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Lighten a hex color by a percentage (0-100)
 * @param {string} hex - Hex color string
 * @param {number} percent - Percentage to lighten (0-100)
 * @returns {string} RGB color string
 */
export const lightenColor = (hex, percent = 15) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const factor = Math.max(0, Math.min(1, percent / 100));
  const r = Math.round(rgb.r + (255 - rgb.r) * factor);
  const g = Math.round(rgb.g + (255 - rgb.g) * factor);
  const b = Math.round(rgb.b + (255 - rgb.b) * factor);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Convert hex to rgba string with specified opacity
 * @param {string} hex - Hex color string
 * @param {number} alpha - Opacity value (0-1)
 * @param {string} fallback - Fallback string if invalid
 * @returns {string} RGBA color string
 */
export const toRgba = (hex, alpha = 1, fallback = "transparent") => {
  const rgb = hexToRgb(hex);
  if (!rgb) return fallback;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};

/**
 * Determine whether text should be dark or white for optimal contrast (YIQ formula)
 * @param {string} hex - Hex color string
 * @returns {string} Hex color (#1a1a1a or #ffffff)
 */
export const getContrastTextColor = (hex) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#ffffff";
  const yiq = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return yiq >= 170 ? "#1a1a1a" : "#ffffff";
};

/**
 * Compute CSS custom properties object for Product Detail Page and Modals
 * @param {Object} colors - Product colors object { main, accent, accent2, category }
 * @returns {Object} React inline style object with CSS custom properties
 */
export const computeProductDetailTheme = (colors) => {
  const DEFAULT_MAIN = "#242424";
  const DEFAULT_ACCENT = "#d99b2f";
  const DEFAULT_ACCENT2 = "#242424";
  const DEFAULT_CATEGORY = "#707070";

  const hasColors = Boolean(colors && typeof colors === "object");
  const mainHex = hasColors && colors.main ? colors.main : DEFAULT_MAIN;
  const accentHex =
    hasColors && (colors.accent || colors.main)
      ? colors.accent || colors.main
      : DEFAULT_ACCENT;
  const accent2Hex =
    hasColors && (colors.accent2 || colors.accent || colors.main)
      ? colors.accent2 || colors.accent || colors.main
      : DEFAULT_ACCENT2;
  const categoryHex =
    hasColors && colors.category ? colors.category : DEFAULT_CATEGORY;

  const accentDark = darkenColor(accentHex, 16);
  const accentLight = lightenColor(accentHex, 20);
  const btnTextColor = getContrastTextColor(accentHex);

  return {
    "--detail-main": mainHex,
    "--detail-accent": accentHex,
    "--detail-accent-dark": accentDark,
    "--detail-accent-light": accentLight,
    "--detail-accent2": accent2Hex,
    "--detail-category": categoryHex,

    // Ambient page top aura
    "--detail-page-aura": `radial-gradient(circle at 50% 0%, ${toRgba(
      accentHex,
      0.15
    )} 0%, ${toRgba(mainHex, 0.05)} 45%, transparent 75%)`,

    // Media visual card
    "--detail-media-bg": `radial-gradient(circle at 50% 40%, ${toRgba(
      accentHex,
      0.1
    )} 0%, ${toRgba(mainHex, 0.04)} 65%, var(--odiss-cream) 100%)`,
    "--detail-media-border": toRgba(accentHex, 0.22),
    "--detail-media-shadow": `0 20px 48px -12px ${toRgba(mainHex, 0.14)}`,
    "--detail-glow-start": toRgba(accentHex, 0.45),
    "--detail-glow-mid": toRgba(accent2Hex || mainHex, 0.2),

    // Badge & Pills
    "--detail-badge-bg": toRgba(accentHex, 0.12),
    "--detail-badge-text": accentHex,
    "--detail-badge-border": toRgba(accentHex, 0.32),
    "--detail-pill-bg": toRgba(accentHex, 0.08),
    "--detail-pill-text": accentHex,
    "--detail-pill-border": toRgba(accentHex, 0.22),

    // Quick specs
    "--detail-spec-line": `linear-gradient(90deg, ${accentHex}, ${accentDark})`,

    // Primary CTA Button
    "--detail-btn-bg": `linear-gradient(135deg, ${accentHex} 0%, ${accentDark} 100%)`,
    "--detail-btn-text": btnTextColor,
    "--detail-btn-shadow": `0 10px 28px -6px ${toRgba(accentHex, 0.45)}`,
    "--detail-btn-shadow-hover": `0 14px 36px -6px ${toRgba(accentHex, 0.65)}`,

    // Benefit Checkmark Icons
    "--detail-benefit-icon-bg": toRgba(accentHex, 0.14),
    "--detail-benefit-icon-color": accentHex,

    // Active Ingredient Highlight Bar
    "--detail-ingredient-bar": `linear-gradient(180deg, ${accentHex} 0%, ${accentDark} 100%)`,
    "--detail-ingredient-hover-bg": `linear-gradient(135deg, var(--odiss-white) 0%, ${toRgba(
      accentHex,
      0.05
    )} 100%)`,

    // OEM Capability Pills
    "--detail-oem-pill-bg": toRgba(accentHex, 0.12),
    "--detail-oem-pill-color": accentHex,
    "--detail-oem-pill-border": toRgba(accentHex, 0.28),
  };
};
