import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal - IntersectionObserver Reveal Wrapper Component
 * Triggers a smooth reveal animation when elements enter the viewport.
 */
const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.12,
  delay = 0,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isRevealed ? "is-revealed" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
