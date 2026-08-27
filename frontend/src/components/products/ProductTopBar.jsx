import React from "react";

/**
 * ProductTopBar - Top Bar Component for Right Showcase Content Area
 * Displays mobile filter trigger, active filter chips, sort dropdown & counter.
 */
const ProductTopBar = ({
  activeCategory,
  selectedProductType,
  selectedFlavor,
  searchQuery,
  featuredOnly,
  onRemoveCategory,
  onRemoveProductType,
  onRemoveFlavor,
  onRemoveSearch,
  onRemoveFeatured,
  onClearAll,
  sortBy,
  onSortChange,
  totalCount,
  onOpenMobileFilters,
}) => {
  const categoryLabels = {
    "adults-range": "Adults Range",
    "womens-range": "Women's Range",
    "kids-range": "Kids Range",
    "vitals-range": "Vitals Range",
  };

  // Count active filter count for mobile badge
  let activeFilterCount = 0;
  if (activeCategory !== "all") activeFilterCount++;
  if (selectedProductType !== "all") activeFilterCount++;
  if (selectedFlavor !== "all") activeFilterCount++;
  if (searchQuery.trim() !== "") activeFilterCount++;
  if (featuredOnly) activeFilterCount++;

  return (
    <div className="product-topbar-wrapper">
      {/* Active Filter Chips Bar & Mobile Trigger */}
      <div className="product-topbar-left">
        {/* Mobile Filter Toggle Button */}
        <button
          type="button"
          className="product-topbar-mobile-btn"
          onClick={onOpenMobileFilters}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="product-topbar-mobile-badge">{activeFilterCount}</span>
          )}
        </button>

        {/* Active Chips List */}
        {activeFilterCount > 0 && (
          <div className="product-active-chips">
            {activeCategory !== "all" && (
              <span className="product-chip">
                <span>{categoryLabels[activeCategory] || activeCategory}</span>
                <button
                  type="button"
                  onClick={onRemoveCategory}
                  className="product-chip-remove"
                >
                  &times;
                </button>
              </span>
            )}

            {selectedProductType !== "all" && (
              <span className="product-chip">
                <span>Type: {selectedProductType}</span>
                <button
                  type="button"
                  onClick={onRemoveProductType}
                  className="product-chip-remove"
                >
                  &times;
                </button>
              </span>
            )}

            {selectedFlavor !== "all" && (
              <span className="product-chip">
                <span>Flavor: {selectedFlavor}</span>
                <button
                  type="button"
                  onClick={onRemoveFlavor}
                  className="product-chip-remove"
                >
                  &times;
                </button>
              </span>
            )}

            {searchQuery.trim() !== "" && (
              <span className="product-chip">
                <span>"{searchQuery}"</span>
                <button
                  type="button"
                  onClick={onRemoveSearch}
                  className="product-chip-remove"
                >
                  &times;
                </button>
              </span>
            )}

            {featuredOnly && (
              <span className="product-chip">
                <span>Featured Only</span>
                <button
                  type="button"
                  onClick={onRemoveFeatured}
                  className="product-chip-remove"
                >
                  &times;
                </button>
              </span>
            )}

            <button
              type="button"
              className="product-clear-all-link"
              onClick={onClearAll}
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Right Controls: Sort & Counter */}
      <div className="product-topbar-right">
        <div className="product-topbar-sort">
          <span className="product-topbar-sort-label">Sort:</span>
          <select
            className="product-topbar-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="featured">Featured First</option>
            <option value="name-asc">Alphabetical (A - Z)</option>
            <option value="name-desc">Alphabetical (Z - A)</option>
            <option value="category">By Category</option>
          </select>
        </div>

        <div className="product-topbar-count">
          <span className="product-topbar-count-num">{totalCount}</span>
          <span className="product-topbar-count-label">Formulations</span>
        </div>
      </div>
    </div>
  );
};

export default ProductTopBar;
