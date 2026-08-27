import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAllProducts } from "../../services/productService";
import ProductFilters from "./ProductFilters";
import ProductTopBar from "./ProductTopBar";
import ProductGrid from "./ProductGrid";
import ProductPagination from "./ProductPagination";

/**
 * ProductShowcaseSection - Left Sidebar Product Showcase & Filtering System
 * Integrates 2-column sidebar layout, multi-facet filtering, URL sync, and pagination.
 */
const ProductShowcaseSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Initialize activeCategory from URL parameter if present
  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("all");
  const [selectedFlavor, setSelectedFlavor] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync state when URL search params change externally
  useEffect(() => {
    const paramCategory = searchParams.get("category") || "all";
    if (paramCategory !== activeCategory) {
      setActiveCategory(paramCategory);
      setCurrentPage(1);
    }
  }, [searchParams]);

  // All published products list
  const allProducts = useMemo(() => getAllProducts(), []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = {
      all: allProducts.length,
      "adults-range": 0,
      "womens-range": 0,
      "kids-range": 0,
      "vitals-range": 0,
    };
    allProducts.forEach((p) => {
      if (p.categorySlug && counts[p.categorySlug] !== undefined) {
        counts[p.categorySlug]++;
      }
    });
    return counts;
  }, [allProducts]);

  // Compute available product types & flavors
  const { availableTypes, availableFlavors } = useMemo(() => {
    const typesSet = new Set();
    const flavorsSet = new Set();

    allProducts.forEach((p) => {
      if (p.productType) typesSet.add(p.productType);
      if (p.flavors && Array.isArray(p.flavors)) {
        p.flavors.forEach((f) => flavorsSet.add(f));
      }
    });

    return {
      availableTypes: Array.from(typesSet).sort(),
      availableFlavors: Array.from(flavorsSet).sort(),
    };
  }, [allProducts]);

  // Reset pagination page to 1 whenever any filter changes
  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
    setCurrentPage(1);
    if (newCategory === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: newCategory }, { replace: true });
    }
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleProductTypeChange = (type) => {
    setSelectedProductType(type);
    setCurrentPage(1);
  };

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(flavor);
    setCurrentPage(1);
  };

  const handleFeaturedToggle = (isFeatured) => {
    setFeaturedOnly(isFeatured);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setSelectedProductType("all");
    setSelectedFlavor("all");
    setFeaturedOnly(false);
    setSortBy("featured");
    setCurrentPage(1);
    searchParams.delete("category");
    setSearchParams(searchParams, { replace: true });
  };

  // Multi-facet Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let list = [...allProducts];

    // 1. Filter by category
    if (activeCategory !== "all") {
      list = list.filter((p) => p.categorySlug === activeCategory);
    }

    // 2. Filter by Product Type
    if (selectedProductType !== "all") {
      list = list.filter((p) => p.productType === selectedProductType);
    }

    // 3. Filter by Flavor
    if (selectedFlavor !== "all") {
      list = list.filter(
        (p) => p.flavors && p.flavors.includes(selectedFlavor)
      );
    }

    // 4. Filter by Featured Only
    if (featuredOnly) {
      list = list.filter((p) => p.isFeatured);
    }

    // 5. Filter by Search Query
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.productType.toLowerCase().includes(q) ||
          p.shortDescription?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.ingredients?.some((ing) => ing.name.toLowerCase().includes(q)) ||
          p.flavors?.some((flv) => flv.toLowerCase().includes(q))
      );
    }

    // 6. Sort products
    return list.sort((a, b) => {
      if (sortBy === "featured") {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === "category") {
        return (a.categorySlug || "").localeCompare(b.categorySlug || "");
      }
      return 0;
    });
  }, [
    allProducts,
    activeCategory,
    selectedProductType,
    selectedFlavor,
    featuredOnly,
    searchQuery,
    sortBy,
  ]);

  // Paginated Slice of Products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Handle Page Change with Smooth Scroll
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const catalogSection = document.getElementById("product-catalog-section");
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="product-catalog-section" className="products-showcase-section">
      <div className="products-showcase-container">
        {/* Section Header */}
        <div className="products-showcase-header">
          <span className="products-showcase-tag">Formulation Portfolio</span>
          <h2 className="products-showcase-title">
            Engineered for Rapid Performance
          </h2>
          <p className="products-showcase-desc">
            Explore our complete portfolio of high-potency sublingual oral dissolving strip 
            matrix solutions, engineered for pharmaceutical, nutraceutical, and personal health.
          </p>
        </div>

        {/* Responsive Category Pills Bar */}
        <div className="product-category-pills-bar">
          {[
            { id: "all", label: "All Formulations" },
            { id: "adults-range", label: "Adults Range" },
            { id: "womens-range", label: "Women's Range" },
            { id: "kids-range", label: "Kids Range" },
            { id: "vitals-range", label: "Vitals Range" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`product-category-pill-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              <span>{cat.label}</span>
              {categoryCounts[cat.id] !== undefined && (
                <span className="product-category-pill-count">
                  {categoryCounts[cat.id]}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 2-Column Split Layout: Left Sidebar + Right Showcase Area */}
        <div className="product-layout-split">
          {/* Left Sidebar Filter */}
          <ProductFilters
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedProductType={selectedProductType}
            onProductTypeChange={handleProductTypeChange}
            selectedFlavor={selectedFlavor}
            onFlavorChange={handleFlavorChange}
            featuredOnly={featuredOnly}
            onFeaturedToggle={handleFeaturedToggle}
            onResetFilters={handleResetFilters}
            categoryCounts={categoryCounts}
            availableTypes={availableTypes}
            availableFlavors={availableFlavors}
            isMobileOpen={isMobileFiltersOpen}
            onMobileClose={() => setIsMobileFiltersOpen(false)}
          />

          {/* Right Product Content Area */}
          <div className="product-main-content">
            {/* Top Toolbar Bar */}
            <ProductTopBar
              activeCategory={activeCategory}
              selectedProductType={selectedProductType}
              selectedFlavor={selectedFlavor}
              searchQuery={searchQuery}
              featuredOnly={featuredOnly}
              onRemoveCategory={() => handleCategoryChange("all")}
              onRemoveProductType={() => handleProductTypeChange("all")}
              onRemoveFlavor={() => handleFlavorChange("all")}
              onRemoveSearch={() => handleSearchChange("")}
              onRemoveFeatured={() => handleFeaturedToggle(false)}
              onClearAll={handleResetFilters}
              sortBy={sortBy}
              onSortChange={handleSortChange}
              totalCount={filteredProducts.length}
              onOpenMobileFilters={() => setIsMobileFiltersOpen(true)}
            />

            {/* Product Cards Grid (Paginated) */}
            <ProductGrid
              products={paginatedProducts}
              useTransparentImage={true}
              onSelectProduct={(product) => navigate(`/product/${product.slug}`)}
              onResetFilters={handleResetFilters}
            />

            {/* Pagination Controls */}
            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={filteredProducts.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
