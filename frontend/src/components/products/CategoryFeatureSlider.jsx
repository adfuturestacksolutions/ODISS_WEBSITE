import React, { useState, useEffect, useRef } from "react";

// Category Card Showcase Images (using existing high quality public assets)
const slides = [
  { id: 1, src: "/home product/1.jpeg", alt: "ODISS Sublingual Strip Range Showcase 1" },
  { id: 2, src: "/home product/2.jpeg", alt: "ODISS Sublingual Strip Range Showcase 2" },
  { id: 3, src: "/home product/3.jpeg", alt: "ODISS Sublingual Strip Range Showcase 3" },
  { id: 4, src: "/home product/4.jpeg", alt: "ODISS Sublingual Strip Range Showcase 4" },
];

/**
 * CategoryFeatureSlider - Minimal Luxury 9:16 Showcase Slideshow
 * Automatically changes every 5 seconds without arrows or picture count.
 */
const CategoryFeatureSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  return (
    <div
      className="category-feature-card ratio-9-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Category Showcase Slideshow"
    >
      {/* 9:16 Aspect Ratio Slider Container */}
      <div className="category-slider-wrapper">
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.id}
              className={`category-slider-slide ${isActive ? "active" : ""}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="category-slider-img"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* Dark Ambient Gradient Overlay */}
        <div className="category-slider-overlay" />

        {/* Minimal Luxury Bottom Progress Bar Lines */}
        <div className="category-slider-pagination">
          {slides.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                className={`category-slider-progress-item ${isActive ? "active" : ""}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className="progress-fill"
                  style={{
                    animationDuration: isActive && !isPaused ? "5000ms" : "0ms",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFeatureSlider;
