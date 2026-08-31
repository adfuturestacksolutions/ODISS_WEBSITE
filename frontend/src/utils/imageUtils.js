/**
 * Image Utilities
 * Provides functions to resolve product image URLs, switching between
 * transparent PNG versions for Products & Category pages and standard Cloudinary URLs for other pages.
 */

/**
 * Get the appropriate image URL for a product.
 * @param {Object} product - Product object
 * @param {boolean} isTransparent - If true, returns transparent PNG version for Products & Category pages
 * @returns {string} Image URL path
 */
export const getProductImageUrl = (product, isTransparent = false) => {
  const mainImg = product?.images?.[0];
  if (!mainImg || !mainImg.url) return "";

  if (!isTransparent) {
    return mainImg.url;
  }

  // Derive transparent image filename from publicId or Cloudinary URL
  const publicId = mainImg.publicId;
  let filename = publicId
    ? publicId.split("/").pop()
    : mainImg.url.split("/").pop();

  if (filename) {
    if (!filename.endsWith(".png")) {
      filename += ".png";
    }
    return `/products/transparent/${filename}`;
  }

  return mainImg.url;
};
