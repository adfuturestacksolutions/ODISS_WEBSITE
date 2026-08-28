import React from "react";
import categories from "../../data/categories";
import CategoryCard from "./CategoryCard";
import CategoryFeatureSlider from "./CategoryFeatureSlider";

/**
 * CategoryExplore - Category Showcase Section
 * Placed directly below the Product Hero section.
 */
const CategoryExplore = () => {
  return (
    <section id="category-explore" className="category-explore-section">
      <div className="category-explore-container">
        {/* Section Header */}
        <div className="category-explore-header">
          <span className="category-explore-tag">Targeted Wellness Matrix</span>
          <h2 className="category-explore-title">
            Explore Formulations by Category
          </h2>
        </div>

        {/* Bento Grid: Featured Slideshow Card (Left) + Category Cards Grid (Right) */}
        <div className="category-bento-grid">
          {/* Left Feature 9:16 Slideshow Card */}
          <CategoryFeatureSlider />

          {/* Right 2x2 Category Cards Grid */}
          <div className="category-cards-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category._id || category.slug}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryExplore;
