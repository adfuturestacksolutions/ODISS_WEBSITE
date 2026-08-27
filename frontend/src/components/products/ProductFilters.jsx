import React from "react";

/**
 * ProductFilters - International Standard Left Sidebar Filter Component
 * Renders Search, Category Radio List with counts, Product Types, Flavors & Featured Toggle.
 */
const ProductFilters = ({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  selectedProductType,
  onProductTypeChange,
  selectedFlavor,
  onFlavorChange,
  featuredOnly,
  onFeaturedToggle,
  onResetFilters,
  categoryCounts = {},
  availableTypes = [],
  availableFlavors = [],
  isMobileOpen = false,
  onMobileClose,
}) => {
  const categoryOptions = [
    { id: "all", label: "All Formulations" },
    { id: "adults-range", label: "Adults Range" },
    { id: "womens-range", label: "Women's Range" },
    { id: "kids-range", label: "Kids Range" },
    { id: "vitals-range", label: "Vitals Range" },
  ];

  const hasActiveFilters =
    activeCategory !== "all" ||
    searchQuery.trim() !== "" ||
    selectedProductType !== "all" ||
    selectedFlavor !== "all" ||
    featuredOnly;

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div className="product-sidebar-backdrop" onClick={onMobileClose} />
      )}

      <aside className={`product-sidebar-filter ${isMobileOpen ? "mobile-open" : ""}`}>
        {/* Sidebar Header */}
        <div className="product-sidebar-header">
          <div className="product-sidebar-title-group">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <h3 className="product-sidebar-title">Filter Portfolio</h3>
          </div>

          {isMobileOpen && (
            <button
              type="button"
              className="product-sidebar-mobile-close"
              onClick={onMobileClose}
              aria-label="Close filters"
            >
              &times;
            </button>
          )}
        </div>

        {/* Search Input Box */}
        <div className="product-sidebar-section">
          <label className="product-sidebar-label">Search Formulations</label>
          <div className="product-sidebar-search">
            <svg
              className="product-sidebar-search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="product-sidebar-search-input"
              placeholder="Name, active, ingredient..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="product-sidebar-search-clear"
                onClick={() => onSearchChange("")}
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Categories Selector */}
        <div className="product-sidebar-section">
          <label className="product-sidebar-label">Product Categories</label>
          <div className="product-sidebar-category-list">
            {categoryOptions.map((cat) => {
              const count = categoryCounts[cat.id] ?? 0;
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`product-sidebar-category-item ${isSelected ? "active" : ""}`}
                  onClick={() => onCategoryChange(cat.id)}
                >
                  <div className="product-sidebar-category-radio">
                    <span className="product-sidebar-radio-dot" />
                  </div>
                  <span className="product-sidebar-category-name">{cat.label}</span>
                  <span className="product-sidebar-category-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Type Filter */}
        {availableTypes && availableTypes.length > 0 && (
          <div className="product-sidebar-section">
            <label className="product-sidebar-label">Therapeutic Type</label>
            <select
              className="product-sidebar-select"
              value={selectedProductType}
              onChange={(e) => onProductTypeChange(e.target.value)}
            >
              <option value="all">All Product Types ({availableTypes.length})</option>
              {availableTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Flavor Notes Filter */}
        {availableFlavors && availableFlavors.length > 0 && (
          <div className="product-sidebar-section">
            <label className="product-sidebar-label">Flavor Options</label>
            <div className="product-sidebar-flavor-pills">
              <button
                type="button"
                className={`product-sidebar-flavor-pill ${
                  selectedFlavor === "all" ? "active" : ""
                }`}
                onClick={() => onFlavorChange("all")}
              >
                All Flavors
              </button>
              {availableFlavors.map((flv) => (
                <button
                  key={flv}
                  type="button"
                  className={`product-sidebar-flavor-pill ${
                    selectedFlavor === flv ? "active" : ""
                  }`}
                  onClick={() => onFlavorChange(flv)}
                >
                  {flv}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Featured Formulations Toggle */}
        <div className="product-sidebar-section">
          <div className="product-sidebar-toggle-row">
            <span className="product-sidebar-toggle-label">Featured Formulations</span>
            <label className="product-sidebar-switch">
              <input
                type="checkbox"
                checked={featuredOnly}
                onChange={(e) => onFeaturedToggle(e.target.checked)}
              />
              <span className="product-sidebar-slider" />
            </label>
          </div>
        </div>

        {/* Mobile Apply Filters CTA */}
        {isMobileOpen && (
          <div className="product-sidebar-mobile-apply">
            <button
              type="button"
              className="product-sidebar-apply-btn"
              onClick={onMobileClose}
            >
              Apply & Show Results
            </button>
          </div>
        )}

        {/* Reset Filters CTA */}
        {hasActiveFilters && (
          <div className="product-sidebar-footer">
            <button
              type="button"
              className="product-sidebar-reset-btn"
              onClick={onResetFilters}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default ProductFilters;
