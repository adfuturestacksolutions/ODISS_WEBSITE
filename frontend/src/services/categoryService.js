/**
 * Category Service
 * Currently serves data from local store.
 * Replace with API calls when backend is connected.
 */

import categories from "../data/categories";

/**
 * Get all published categories sorted by displayOrder.
 */
export const getAllCategories = () => {
  return categories
    .filter((cat) => cat.status === "published")
    .sort((a, b) => a.displayOrder - b.displayOrder);
};

/**
 * Get featured categories only.
 */
export const getFeaturedCategories = () => {
  return getAllCategories().filter((cat) => cat.isFeatured);
};

/**
 * Get a single category by its slug.
 */
export const getCategoryBySlug = (slug) => {
  return categories.find((cat) => cat.slug === slug) || null;
};

/**
 * Get a single category by its ID.
 */
export const getCategoryById = (id) => {
  return categories.find((cat) => cat._id === id) || null;
};
