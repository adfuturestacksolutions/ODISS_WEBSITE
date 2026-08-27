import React, { useState, useRef, useEffect } from "react";
import heroVideo from "../../assets/products/Hero/Product Hero Banner_gwr_video_mvp.mp4";

const ProductHero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Auto pause/play on scroll visibility to conserve system resources
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !video.paused) {
            video.pause();
          } else if (entry.isIntersecting && video.paused) {
            video.play().catch(() => {});
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="product-hero-container" ref={heroRef}>
      {/* Pure Ambient Background Video */}
      <div className="product-hero-video-wrapper">
        <video
          ref={videoRef}
          className={`product-hero-video ${isVideoLoaded ? "loaded" : ""}`}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          aria-label="ODISS Product Video Banner"
        />
      </div>
    </section>
  );
};

export default ProductHero;
