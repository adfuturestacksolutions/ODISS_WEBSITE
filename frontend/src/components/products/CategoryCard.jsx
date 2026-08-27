import React from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * CategoryCard - Minimalist Animated Category Card
 * Displays category image, name, short description and direct navigation CTA.
 * Clicking navigates directly to the category products showcase.
 */
const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/category/${category.slug}`);
  };

  return (
    <div className="category-card" onClick={handleCardClick}>
      {/* Background/Image Container */}
      <div className="category-card-media">
        <img
          src={category.image?.url}
          alt={category.image?.alt || category.name}
          className="category-card-img"
          loading="lazy"
        />
        <div className="category-card-overlay" />
        
        {/* Shimmer sweep effect */}
        <div className="category-card-shimmer" />
      </div>

      {/* Content Area */}
      <div className="category-card-content">
        <div className="category-card-header">
          <span className="category-card-tag">ODISS Range</span>
          <h3 className="category-card-title">{category.name}</h3>
        </div>

        <p className="category-card-desc">{category.shortDescription}</p>

        {/* Bottom CTA Row */}
        <div className="category-card-footer">
          <Link
            to={`/category/${category.slug}`}
            className="category-card-link"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
          >
            <span>Explore Range</span>
            <svg
              className="category-card-arrow"
              width="18"
              height="18"
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
