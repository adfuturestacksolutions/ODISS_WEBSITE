import React, { useEffect, useRef, useState } from "react";
import "./WhyThinDiss.css";

const brandColor = "#F4B83F";

/* =========================================================
   INNOVATION CARDS (MATCHING REFERENCE DESIGN)
========================================================= */
const innovationCards = [
  {
    title: "Microencapsulation Technology",
    description: "Multi-layered protective polymer coating shields delicate actives from premature degradation and environmental humidity.",
    svg: <img src="/icons/icon_1.png" alt="Microencapsulation" className="anim-float" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
  },
  {
    title: "Patented Low-Temperature Drying",
    description: "State-of-the-art gentle thermal processing protects heat-sensitive vitamins, probiotics, and botanical extracts.",
    svg: <img src="/icons/icon_2.png" alt="Drying" className="anim-pulse" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.2s" }} />
  },
  {
    title: "Enhanced Stability & Shelf Life",
    description: "Hermetically engineered matrix prevents crystallization and moisture ingress, ensuring 24+ months of full potency.",
    svg: <img src="/icons/icon_3.png" alt="Stability" className="anim-float" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.4s" }} />
  },
  {
    title: "Customized Combinations & Dosages",
    description: "Versatile formulation platform enables multi-active ingredient blending with accurate micro-gram to milli-gram payloads.",
    svg: <img src="/icons/icon_4.png" alt="Combinations" className="anim-pulse" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.6s" }} />
  },
  {
    title: "Synergistic Bio-Active Blending",
    description: "Harmonizes co-factors and active nutrients to maximize metabolic uptake and cellular bioavailability.",
    svg: <img src="/icons/icon_5.png" alt="Blending" className="anim-float" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.8s" }} />
  },
  {
    title: "Rapid Dissolution & Absorption",
    description: "Mouth-melting sublingual strips dissolve within 5-10 seconds without water, entering the bloodstream instantly.",
    svg: <img src="/icons/icon_6.png" alt="Absorption" className="anim-pulse" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "1s" }} />
  },
  {
    title: "Water-Free Sublingual Delivery",
    description: "Eliminates pill swallowing aversion, throat friction, and water dependence for seamless on-the-go lifestyle convenience.",
    svg: <img src="/icons/icon_7.png" alt="Delivery" className="anim-float" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.1s" }} />
  },
  {
    title: "High Active Payload Capacity",
    description: "Accommodates high nutrient densities per strip while retaining featherlight thickness and instantaneous dissolution.",
    svg: <img src="/icons/icon_8.png" alt="Capacity" className="anim-pulse" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.3s" }} />
  },
  {
    title: "Slot-Die Precision Coating",
    description: "Pharmaceutical-grade coating technology ensures ±1.5% micro-precision dosage uniformity across every single strip.",
    svg: <img src="/icons/icon_9.png" alt="Coating" className="anim-float" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.5s" }} />
  },
  {
    title: "100% Sugar-Free & Zero Residue",
    description: "Formulated without synthetic binders, sugars, or tooth-decaying starches, leaving a clean, refreshing mouthfeel.",
    svg: <img src="/icons/icon_10.png" alt="Sugar-Free" className="anim-pulse" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.7s" }} />
  },
  {
    title: "Advanced Taste-Masking Matrix",
    description: "Neutralizes bitter or astringent active botanicals with natural fruit extracts for an indulgent, delightful flavor experience.",
    svg: <img src="/icons/icon_11.png" alt="Taste-Masking" className="anim-float" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "0.9s" }} />
  },
  {
    title: "Moisture-Lock Cassette Packaging",
    description: "Slim, pocket-sized cassettes protect strips against ambient humidity while allowing effortless single-strip dispensing.",
    svg: <img src="/icons/icon_12.png" alt="Packaging" className="anim-pulse" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: "1.1s" }} />
  },
];

/* =========================================================
   HOW IT WORKS / SCROLL CONTENT
========================================================= */
const processSteps = [
  {
    number: "01",
    title: "Place",
    description: "Place the strip comfortably on your tongue and let the delivery process begin. Unlike traditional pills or capsules that require water and can be difficult to swallow, our oral strips are designed for ultimate convenience. Simply take one out of its compact packaging and rest it on your tongue anytime, anywhere without any hassle.",
    video: "/video1.mp4",
  },
  {
    number: "02",
    title: "Dissolve",
    description: "The thin format begins dissolving quickly, creating a simple and convenient experience. Within seconds, our proprietary formulation breaks down seamlessly upon contact with your saliva. There is no gritty residue or unpleasant aftertaste, just a smooth, instant transition that prepares the active ingredients for action.",
    video: "/video2.mp4",
  },
  {
    number: "03",
    title: "Absorb",
    description: "The active ingredients are delivered directly into your system through advanced oral delivery. By bypassing the harsh acidic environment of the stomach and digestive tract, this sublingual absorption method ensures that a significantly higher percentage of the nutrients enters your bloodstream instantly, maximizing bioavailability.",
    video: "/video3.mp4",
  },
  {
    number: "04",
    title: "Feel",
    description: "Experience a simple, modern delivery format designed around everyday convenience. Because of the rapid absorption rate, you will feel the desired effects much faster compared to conventional methods. ThinDiss™ provides a discreet, highly effective, and travel-friendly way to seamlessly manage your daily wellness routine.",
    video: "/video4.mp4",
  },
];

const processBgColors = [
  "#FFF3E0", // Light Orange
  "#FFEBEE", // Light Pink
  "#F3E5F5", // Light Purple
  "#E0F2F1", // Light Teal
];



const WhyThinDiss = () => {
  /* -------------------------------------------------------
     CAROUSEL SCROLL STATE & REFS
  ------------------------------------------------------- */
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  const nextCards = () => {
    if (carouselRef.current) {
      const cardEl = carouselRef.current.querySelector('.innovation-card-wrapper');
      const scrollAmount = cardEl ? cardEl.offsetWidth * 1.5 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const previousCards = () => {
    if (carouselRef.current) {
      const cardEl = carouselRef.current.querySelector('.innovation-card-wrapper');
      const scrollAmount = cardEl ? cardEl.offsetWidth * 1.5 : 320;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };


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

  /* -------------------------------------------------------
     WHY ADOPT THIS TECHNOLOGY (ACCORDION & DYNAMIC VISUAL)
  ------------------------------------------------------- */
  const [openAdoptIndex, setOpenAdoptIndex] = useState(0);

  const adoptItems = [
    {
      title: "A Growing Market",
      content:
        "Consumer demand is moving toward simpler, more convenient wellness formats. Oral thin-film technology offers brands an opportunity to move beyond conventional tablets, capsules and gummies with a modern format designed around convenience, portability and ease of use.",
      image: "/grow.png",
      imageAlt: "A Growing Market",
    },
    {
      title: "Smarter Delivery Technology",
      content:
        "ThinDiss™ transforms active ingredients into a convenient oral dissolving format. The thin-film platform is designed to dissolve in the mouth, eliminating the need for water and traditional swallowing. This creates a simple, user-friendly delivery experience while supporting efficient formulation and consistent dosing.",
      image: "/strip_dissolve.jpg",
      imageAlt: "Smarter Delivery Technology",
    },
    {
      title: "Built for Brand Expansion",
      content:
        "One technology. Multiple possibilities. ThinDiss™ can be developed across a wide range of wellness and nutraceutical applications, with flexibility in formulations, flavours, dosages and packaging. This gives brands the freedom to create differentiated products for evolving consumer needs.",
      image: "/portfolio_expansion.jpg",
      imageAlt: "Built for Brand Expansion",
    },
  ];

  const toggleAdopt = (index) => {
    setOpenAdoptIndex(openAdoptIndex === index ? -1 : index);
  };

  return (
    <main className="why-thindiss-page">

      {/* =====================================================
          HERO SECTION - FULL SCREEN IMMERSIVE VIDEO
      ===================================================== */}
      <section className="thindiss-hero-immersive">
        <div className="hero-immersive-bg">
          <video autoPlay loop muted playsInline className="hero-bg-video">
            <source src="/hero-video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hero-immersive-container">
          <div className="hero-content-right reveal-up">
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

            <button className="outline-button-pill anim-card-hover">
              Discover ThinDiss <span>↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          INNOVATION CAROUSEL SECTION (MATCHING REFERENCE)
      ===================================================== */}
      <section className="innovation-section">
        <div className="innovation-header reveal-up">
          <div className="section-label centered">
            <span />
            <span>ENGINEERED FOR EXCELLENCE</span>
            <span />
          </div>
          <h2>Innovation in Every Strip</h2>
        </div>

        <div className="carousel-wrapper">
          <div
            className="innovation-carousel"
            ref={carouselRef}
            onScroll={handleCarouselScroll}
          >
            <div className="innovation-track reveal-stagger">
              {innovationCards.map((card, index) => (
                <div className={`innovation-card-wrapper reveal-card anim-card-hover stagger-${(index % 6) + 1}`} key={index}>
                  <article className="innovation-card">
                    <div className="innovation-card-content">
                      <h3 className="innovation-card-title">{card.title}</h3>
                      <p className="innovation-card-desc">{card.description}</p>
                    </div>
                    <div className="innovation-card-icon-wrap">
                      {card.svg}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Controls: Progress bar on left, Arrows on right */}
        <div className="innovation-controls-row reveal-up">
          <div className="carousel-progress-bar">
            <span style={{ width: `${Math.max(12, scrollProgress)}%` }}></span>
          </div>

          <div className="carousel-nav-arrows">
            <button className="carousel-arrow-btn" onClick={previousCards} aria-label="Previous slide">
              ←
            </button>
            <button className="carousel-arrow-btn" onClick={nextCards} aria-label="Next slide">
              →
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS (STICKY SECTION)
      ===================================================== */}
      <section
        className="process-section-wrapper"
        ref={scrollContainerRef}
        style={{
          backgroundColor: processBgColors[activeStep] || "var(--cream)",
          transition: "background-color 0.6s ease"
        }}
      >
        <div className="process-sticky-container">

          <div className="process-header reveal-up">
            <div className="section-label">
              <span />
              <span>HOW IT WORKS</span>
            </div>
            <h2> ODFs</h2>
            <p className="process-intro-paragraph">
              With more than 25 packaging styles and customisation options, we create a product that stands out. ThinDiss™ ensures rapid absorption and maximum bioavailability, bypassing the digestive system to deliver active ingredients directly into your bloodstream.
            </p>
          </div>

          <div className="process-content-area">

            <div className="process-visual-area reveal-left">
              <div className="process-circle-frame">
                {processSteps.map((step, index) => (
                  <video
                    key={`video-${index}`}
                    src={step.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`process-dynamic-img ${index === activeStep ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>

            <div className="process-text-area reveal-right">
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
          WHY ADOPT THIS TECHNOLOGY (ACCORDION & DYNAMIC VISUAL)
      ===================================================== */}
      <section className="why-adopt-section">
        <div className="why-adopt-container">
          <div className="why-adopt-header reveal-up">
            <h2>Why should you adopt this technology?</h2>
          </div>

          <div className="why-adopt-grid">
            {/* Left Column: Accordion */}
            <div className="why-adopt-accordion reveal-left">
              {adoptItems.map((item, idx) => {
                const isOpen = openAdoptIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`why-adopt-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      className="why-adopt-trigger"
                      onClick={() => toggleAdopt(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="why-adopt-item-title">{item.title}</span>
                      <span className="why-adopt-icon">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="why-adopt-content">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Dynamic Graphic */}
            <div className="why-adopt-visual reveal-right">
              <div className="why-adopt-img-frame">
                {adoptItems.map((item, idx) => {
                  const isActive = (openAdoptIndex === -1 ? 0 : openAdoptIndex) === idx;
                  return (
                    <img
                      key={idx}
                      src={item.image}
                      alt={item.imageAlt}
                      className={`why-adopt-img ${isActive ? "active" : ""}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPARISON VIDEO SECTION
      ===================================================== */}
      <section className="comparison-video-section">
        <div className="comparison-video-container reveal-up">
          <h2 className="showcase-title">The Future of Wellness Delivery.</h2>

          <div className="video-player-wrapper reveal-card">
            <video
              className="comparison-video showcase-video"
              autoPlay
              muted
              loop
              playsInline
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none' }}
            >
              <source src="/tablevideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER SECTION
      ===================================================== */}
      <section className="partner-section">
        <div className="partner-content reveal-left">
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
          <button className="brand-button anim-card-hover">
            Let's Collaborate <span>↗</span>
          </button>
        </div>

        <div className="partner-image reveal-right">
          <img
            src="why_adopt_analytics.jpg"
            alt="Business collaboration handshake"
          />
        </div>
      </section>

    </main>
  );
};

export default WhyThinDiss;