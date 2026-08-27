/**
 * Product Service
 * Currently serves data from local store.
 * Replace with API calls when backend is connected.
 */

import products from "../data/products";

/**
 * Get all published products.
 */
export const getAllProducts = () => {
  return products.filter((prod) => prod.status === "published");
};

/**
 * Get featured products.
 */
export const getFeaturedProducts = () => {
  return getAllProducts().filter((prod) => prod.isFeatured);
};

/**
 * Get products by category slug.
 */
export const getProductsByCategory = (categorySlug) => {
  return getAllProducts().filter(
    (prod) => prod.categorySlug === categorySlug
  );
};

/**
 * Get a single product by its slug.
 */
export const getProductBySlug = (slug) => {
  return products.find((prod) => prod.slug === slug) || null;
};

/**
 * Get a single product by its ID.
 */
export const getProductById = (id) => {
  return products.find((prod) => prod._id === id) || null;
};

/**
 * Search products by query term (name, description, ingredients, productType).
 */
export const searchProducts = (query) => {
  if (!query || typeof query !== "string") return getAllProducts();
  const q = query.toLowerCase().trim();
  return getAllProducts().filter(
    (prod) =>
      prod.name.toLowerCase().includes(q) ||
      prod.productType.toLowerCase().includes(q) ||
      prod.shortDescription.toLowerCase().includes(q) ||
      prod.description.toLowerCase().includes(q) ||
      prod.ingredients.some((ing) => ing.name.toLowerCase().includes(q))
  );
};
