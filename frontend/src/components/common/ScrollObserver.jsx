import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollObserver - Global Intersection Observer for Site-Wide Scroll Animations
 * Automatically observes elements marked with animation classes (or matching key layout selectors)
 * and activates their reveal animations smoothly as the user scrolls.
 */
const ScrollObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    let observerInstance = null;

    const observeElements = () => {
      const explicitSelector = [
        ".reveal-up",
        ".reveal-down",
        ".reveal-left",
        ".reveal-right",
        ".reveal-scale",
        ".reveal-card",
        ".reveal-stagger",
        ".scroll-reveal",
        "[data-reveal]",
        ".dissolve-in",
        ".peel-up",
        ".strip-slide-left",
        ".strip-slide-right",
      ].join(", ");

      const autoTargetSelector = [
        ".innovation-card",
        ".why-pillar-item",
        ".stat-item",
        ".value-card",
        ".product-card",
        ".featured-product-card",
        ".contact-card",
        ".tech-badge",
        ".section-header",
      ].join(", ");

      const autoElements = document.querySelectorAll(autoTargetSelector);

      // Auto-tag structural cards that might not have explicit classes
      autoElements.forEach((el) => {
        if (
          !el.classList.contains("reveal-up") &&
          !el.classList.contains("reveal-card") &&
          !el.classList.contains("reveal-left") &&
          !el.classList.contains("reveal-right") &&
          !el.classList.contains("scroll-reveal")
        ) {
          el.classList.add("reveal-card");
        }
      });

      const allTargets = document.querySelectorAll(
        `${explicitSelector}, .reveal-card`
      );

      observerInstance = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              entry.target.classList.add("visible");
              observerInstance.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -35px 0px",
        }
      );

      allTargets.forEach((target) => {
        // If element is already in the viewport upon load, reveal smoothly
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          target.classList.add("is-revealed");
          target.classList.add("visible");
        } else {
          observerInstance.observe(target);
        }
      });
    };

    // Run slightly deferred to ensure React DOM has rendered
    const timer = setTimeout(() => {
      observeElements();
    }, 80);

    return () => {
      clearTimeout(timer);
      if (observerInstance) {
        observerInstance.disconnect();
      }
    };
  }, [pathname]);

  return null;
};

export default ScrollObserver;
