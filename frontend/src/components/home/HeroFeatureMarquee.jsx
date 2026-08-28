import React from "react";

/* =========================================================================
   ODISS LUXURY FEATURE MARQUEE
   - Utilizes precision-cropped, high-res transparent icons from icons.jpeg
   - Micro-animated with organic floating physics, subtle glow aura, and interactive 3D hover
   ========================================================================= */

const FEATURES = [
  {
    id: "fast-absorption",
    name: "ZERO SUGAR",
    iconSrc: "/homepage/icons_marquee/fast-absorption.png",
    glowColor: "rgba(16, 185, 129, 0.28)",
    hoverGlow: "rgba(16, 185, 129, 0.45)",
    delay: "0s",
  },
  {
    id: "no-water",
    name: "FAST ABSORPTION",
    iconSrc: "/homepage/icons_marquee/no-water.png",
    glowColor: "rgba(236, 72, 153, 0.25)",
    hoverGlow: "rgba(236, 72, 153, 0.45)",
    delay: "0.4s",
  },
  {
    id: "precise-dosage",
    name: "PRECISE DOSAGE",
    iconSrc: "/homepage/icons_marquee/precise-dosage.png",
    glowColor: "rgba(168, 85, 247, 0.28)",
    hoverGlow: "rgba(168, 85, 247, 0.48)",
    delay: "0.8s",
  },
  {
    id: "quick-action",
    name: "QUICK ACTION",
    iconSrc: "/homepage/icons_marquee/quick-action.png",
    glowColor: "rgba(249, 115, 22, 0.28)",
    hoverGlow: "rgba(249, 115, 22, 0.48)",
    delay: "1.2s",
  },
  {
    id: "on-the-go",
    name: "ON-THE-GO",
    iconSrc: "/homepage/icons_marquee/on-the-go.png",
    glowColor: "rgba(243, 182, 63, 0.28)",
    hoverGlow: "rgba(243, 182, 63, 0.48)",
    delay: "1.6s",
  },
  {
    id: "zero-sugar",
    name: "NO WATER",
    iconSrc: "/homepage/icons_marquee/zero-sugar.png",
    glowColor: "rgba(20, 184, 166, 0.28)",
    hoverGlow: "rgba(20, 184, 166, 0.48)",
    delay: "2.0s",
  },
];

const HeroFeatureMarquee = () => {
  const marqueeItems = [...FEATURES, ...FEATURES, ...FEATURES];

  return (
    <div className="hero-feature-marquee-wrapper">
      <style>{`
        .hero-feature-marquee-wrapper {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          height: 105px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: transparent;
          z-index: 10;
          user-select: none;
        }

        /* Seamless Edge Feather Vignettes */
        .marquee-edge-fade-left {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: clamp(50px, 8vw, 120px);
          background: linear-gradient(to right, rgba(255, 255, 255, 0.98) 25%, rgba(255, 255, 255, 0.6) 65%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        .marquee-edge-fade-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: clamp(50px, 8vw, 120px);
          background: linear-gradient(to left, rgba(255, 255, 255, 0.98) 25%, rgba(255, 255, 255, 0.6) 65%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        /* Continuous Infinite Track with Generous Luxury Spacing */
        .marquee-inner-track {
          display: flex;
          align-items: center;
          gap: clamp(120px, 10vw, 220px);
          width: max-content;
          animation: seamlessHeroMarquee 58s linear infinite;
          will-change: transform;
          padding: 0 24px;
        }

        .hero-feature-marquee-wrapper:hover .marquee-inner-track {
          animation-play-state: paused;
        }

        @keyframes seamlessHeroMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        /* Feature Item Wrapper */
        .marquee-feature-item {
          display: inline-flex;
          align-items: center;
          gap: clamp(10px, 1.1vw, 16px);
          padding: 4px 8px;
          background: transparent;
          border: none;
          outline: none;
          box-shadow: none;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
          cursor: default;
          flex-shrink: 0;
        }

        .marquee-feature-item:hover {
          transform: translateY(-3px) scale(1.03);
        }

        /* Animated Icon Frame */
        .marquee-icon-box {
          position: relative;
          width: clamp(48px, 4vw, 62px);
          height: clamp(48px, 4vw, 62px);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: iconFloat 4.5s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(2deg);
          }
        }

        /* Atmospheric Ambient Soft Glow Aura */
        .marquee-icon-aura {
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0.55;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
          animation: auraPulse 4.5s ease-in-out infinite;
        }

        @keyframes auraPulse {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.75;
          }
        }

        .marquee-feature-item:hover .marquee-icon-aura {
          opacity: 0.95;
          transform: scale(1.25);
          filter: blur(14px);
        }

        /* High-Definition Icon Image */
        .marquee-icon-img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.07));
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease;
          pointer-events: none;
        }

        .marquee-feature-item:hover .marquee-icon-img {
          transform: scale(1.08) rotate(-2.5deg);
          filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.14));
        }

        /* Prominent International Luxury Feature Title Typography */
        .marquee-feature-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(14px, 1.05vw, 17px);
          font-weight: 650;
          color: #1e293b;
          letter-spacing: -0.015em;
          line-height: 1;
          margin: 0;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .marquee-feature-item:hover .marquee-feature-title {
          color: #d99b2f;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-feature-marquee-wrapper {
            height: 90px;
            bottom: 6px;
          }
          .marquee-icon-box {
            width: 44px;
            height: 44px;
          }
          .marquee-feature-title {
            font-size: 13.5px;
          }
          .marquee-inner-track {
            gap: 58px;
          }
        }

        @media (max-width: 600px) {
          .hero-feature-marquee-wrapper {
            height: 78px;
            bottom: 3px;
          }
          .marquee-icon-box {
            width: 38px;
            height: 38px;
          }
          .marquee-feature-title {
            font-size: 12.5px;
          }
          .marquee-inner-track {
            gap: 38px;
          }
        }
      `}</style>

      {/* Edge Feather Overlays */}
      <div className="marquee-edge-fade-left" />
      <div className="marquee-edge-fade-right" />

      {/* Continuous Marquee Track */}
      <div className="marquee-inner-track">
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="marquee-feature-item"
          >
            {/* Animative Icon Frame */}
            <div
              className="marquee-icon-box"
              style={{ animationDelay: item.delay }}
            >
              <div
                className="marquee-icon-aura"
                style={{
                  background: item.glowColor,
                  animationDelay: item.delay,
                }}
              />
              <img
                src={item.iconSrc}
                alt={item.name}
                className="marquee-icon-img"
                draggable={false}
              />
            </div>

            {/* Feature Name */}
            <h4 className="marquee-feature-title">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeatureMarquee;
