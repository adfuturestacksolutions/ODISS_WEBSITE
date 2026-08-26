import React, { useEffect, useRef, useState } from "react";
import "./WhyThinDiss.css";

const brandColor = "#F4B83F";

/* =========================================================
   INNOVATION CARDS
========================================================= */
const innovationCards = [
  {
    title: "Advanced Strip Technology",
    description: "Precision engineered oral strips designed for quick disintegration and effective absorption.",
    icon: "▱",
  },
  {
    title: "Low Temperature Drying",
    description: "A carefully controlled drying process helps protect ingredient integrity and performance.",
    icon: "♨",
  },
  {
    title: "Improved Stability",
    description: "Designed for improved product stability and longer shelf life without compromising quality.",
    icon: "◇",
  },
  {
    title: "Customizable Solutions",
    description: "Flexible formats, flavours and dosages tailored to your product requirements.",
    icon: "≡",
  },
  {
    title: "Faster Dissolution",
    description: "Thin oral formats designed to dissolve quickly for a smooth and convenient experience.",
    icon: "◈",
  },
  {
    title: "Precise Dosage",
    description: "Consistent formulation and dosage options designed around specific product needs.",
    icon: "◎",
  },
  {
    title: "Consumer Friendly",
    description: "A convenient delivery format designed for modern, on-the-go consumer lifestyles.",
    icon: "✦",
  },
];

// Duplicate cards for infinite loop effect
const extendedCards = [...innovationCards, ...innovationCards, ...innovationCards];

/* =========================================================
   HOW IT WORKS / SCROLL CONTENT
========================================================= */
const processSteps = [
  {
    number: "01",
    title: "Place",
    description: "Place the strip comfortably on your tongue and let the delivery process begin.",
    image: "/public/1.png",
  },
  {
    number: "02",
    title: "Dissolve",
    description: "The thin format begins dissolving quickly, creating a simple and convenient experience.",
    image: "/public/2.png",
  },
  {
    number: "03",
    title: "Absorb",
    description: "The active ingredients are delivered through a convenient oral delivery format.",
    image: "/public/3.png",
  },
  {
    number: "04",
    title: "Feel",
    description: "Experience a simple, modern delivery format designed around everyday convenience.",
    image: "/public/4.png",
  },
];

const WhyThinDiss = () => {
  /* -------------------------------------------------------
     INFINITE CAROUSEL STATE
  ------------------------------------------------------- */
  // Start at the middle block (index 7) to allow scrolling left and right infinitely
  const [cardIndex, setCardIndex] = useState(innovationCards.length); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextCards = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setCardIndex((prev) => prev + 1);
  };

  const previousCards = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setCardIndex((prev) => prev - 1);
  };

  // The Magic Trick: Reset index silently without animation when reaching boundaries
  useEffect(() => {
    let timeout;
    if (cardIndex >= innovationCards.length * 2) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCardIndex(cardIndex - innovationCards.length);
      }, 500); // 500ms matches the CSS transition time
    } else if (cardIndex <= 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCardIndex(cardIndex + innovationCards.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [cardIndex]);


  /* -------------------------------------------------------
     SCROLL BASED PROCESS SECTION (STICKY)
  ------------------------------------------------------- */
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const { top, height } = scrollContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = height - windowHeight;
      const scrolled = -top;
      
      if (scrolled >= 0 && scrolled <= scrollableDistance) {
        let progress = scrolled / scrollableDistance;
        let step = Math.floor(progress * processSteps.length);
        step = Math.min(step, processSteps.length - 1);
        setActiveStep(step);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="why-thindiss-page">

      {/* =====================================================
          HERO SECTION - IMMERSIVE
      ===================================================== */}
      <section className="thindiss-hero-immersive">
        <div className="hero-immersive-bg"></div>

        <div className="hero-immersive-container">
          <div className="hero-content-right">
            <div className="section-label">
              <span />
              <span>WHY THINDISS</span>
            </div>

            <h1>
              A smarter way <br />
              to deliver <br />
              <span>wellness.</span>
            </h1>

            <p>
              ThinDiss™ is an advanced oral strip technology
              designed for convenient delivery, simple usage and a
              superior consumer experience.
            </p>

            <button className="outline-button-pill">
              Discover ThinDiss <span>↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          INNOVATION SECTION (CAROUSEL)
      ===================================================== */}
      <section className="innovation-section">
        <div className="innovation-header">
          <div className="section-label centered">
            <span />
            <span>ENGINEERED FOR EXCELLENCE</span>
            <span />
          </div>
          <h2>Innovation in Every Strip</h2>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={previousCards}>←</button>
          
          <div className="innovation-carousel">
            <div 
              className="innovation-track"
              style={{ 
                transform: `translateX(calc(-${cardIndex} * (100% / var(--cards-to-show))))`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {extendedCards.map((card, index) => (
                <div className="innovation-card-wrapper" key={index}>
                  <article className="innovation-card">
                    <div className="innovation-icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow right" onClick={nextCards}>→</button>
        </div>

        {/* Progress Bar mapped to the current actual index */}
        <div className="carousel-progress-bar">
           <span style={{ width: `${(((cardIndex % innovationCards.length) + 1) / innovationCards.length) * 100}%` }}></span>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS (STICKY SECTION)
      ===================================================== */}
      <section className="process-section-wrapper" ref={scrollContainerRef}>
        <div className="process-sticky-container">
          
          <div className="process-header">
            <div className="section-label">
              <span />
              <span>HOW IT WORKS</span>
            </div>
            <h2>Simple. Fast. Effective.</h2>
          </div>

          <div className="process-content-area">
            
            <div className="process-visual-area">
              <div className="process-circle-frame">
                {processSteps.map((step, index) => (
                  <img
                    key={`img-${index}`}
                    src={step.image}
                    alt={step.title}
                    className={`process-dynamic-img ${index === activeStep ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>

            <div className="process-text-area">
              {processSteps.map((step, index) => (
                <div 
                  key={`text-${index}`} 
                  className={`process-dynamic-text ${index === activeStep ? "active" : ""}`}
                >
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
              
              <div className="process-pagination">
                {processSteps.map((_, index) => (
                  <span key={index} className={`dot ${index === activeStep ? "active" : ""}`}></span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER SECTION
      ===================================================== */}
      <section className="partner-section">
        <div className="partner-content">
          <div className="section-label">
            <span />
            <span>PARTNER WITH US</span>
          </div>
          <h2>
            Building a Healthier
            <br />
            Tomorrow Together
          </h2>
          <p>
            At ODISS, we believe in the power of collaboration to drive
            innovation in the nutraceutical industry.
          </p>
          <p>
            By partnering with us, you gain access to <strong>cutting-edge drug delivery technologies</strong> and advanced formulations. Together, we can deliver high-quality products that enhance well-being globally.
          </p>
          <button className="brand-button">
            Let's Collaborate <span>↗</span>
          </button>
        </div>

        <div className="partner-image">
          <img
            src="/public/5.png"
            alt="Business collaboration handshake"
          />
        </div>
      </section>

    </main>
  );
};

export default WhyThinDiss;