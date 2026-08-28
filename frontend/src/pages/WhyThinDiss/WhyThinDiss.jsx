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
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Patented Low-Temperature Drying",
    description: "State-of-the-art gentle thermal processing protects heat-sensitive vitamins, probiotics, and botanical extracts.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
  {
    title: "Enhanced Stability & Shelf Life",
    description: "Hermetically engineered matrix prevents crystallization and moisture ingress, ensuring 24+ months of full potency.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="6" height="6" rx="1" />
        <rect x="16" y="7" width="6" height="6" rx="1" />
        <path d="M5 13v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3" />
        <polygon points="12 17 9 22 15 22 12 17" />
      </svg>
    ),
  },
  {
    title: "Customized Combinations & Dosages",
    description: "Versatile formulation platform enables multi-active ingredient blending with accurate micro-gram to milli-gram payloads.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l-2 18H8L6 3z" />
        <line x1="6" y1="8" x2="11" y2="8" />
        <line x1="7" y1="12" x2="11" y2="12" />
        <line x1="7.5" y1="16" x2="11" y2="16" />
      </svg>
    ),
  },
  {
    title: "Synergistic Bio-Active Blending",
    description: "Harmonizes co-factors and active nutrients to maximize metabolic uptake and cellular bioavailability.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <line x1="14" y1="10" x2="17.5" y2="6.5" />
        <line x1="10" y1="14" x2="6.5" y2="17.5" />
      </svg>
    ),
  },
  {
    title: "Rapid Dissolution & Absorption",
    description: "Mouth-melting sublingual strips dissolve within 5-10 seconds without water, entering the bloodstream instantly.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Water-Free Sublingual Delivery",
    description: "Eliminates pill swallowing aversion, throat friction, and water dependence for seamless on-the-go lifestyle convenience.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <line x1="2" y1="2" x2="22" y2="22" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "High Active Payload Capacity",
    description: "Accommodates high nutrient densities per strip while retaining featherlight thickness and instantaneous dissolution.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Slot-Die Precision Coating",
    description: "Pharmaceutical-grade coating technology ensures ±1.5% micro-precision dosage uniformity across every single strip.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "100% Sugar-Free & Zero Residue",
    description: "Formulated without synthetic binders, sugars, or tooth-decaying starches, leaving a clean, refreshing mouthfeel.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "Advanced Taste-Masking Matrix",
    description: "Neutralizes bitter or astringent active botanicals with natural fruit extracts for an indulgent, delightful flavor experience.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      </svg>
    ),
  },
  {
    title: "Moisture-Lock Cassette Packaging",
    description: "Slim, pocket-sized cassettes protect strips against ambient humidity while allowing effortless single-strip dispensing.",
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d99b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
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
    video: "/3.mp4",
  },
  {
    number: "04",
    title: "Feel",
    description: "Experience a simple, modern delivery format designed around everyday convenience. Because of the rapid absorption rate, you will feel the desired effects much faster compared to conventional methods. ThinDiss™ provides a discreet, highly effective, and travel-friendly way to seamlessly manage your daily wellness routine.",
    video: "/4.mp4",
  },
];

const processBgColors = [
  "#FFE0B2", // Orange (inspired by D-THINK)
  "#FFCDD2", // Pink/Red (inspired by FERROSTRIPS)
  "#E1BEE7", // Purple (inspired by CARDIOSTRIPS)
  "#B2DFDB", // Teal (inspired by COBAMELT)
];

/* =========================================================
   COMPARISON TABLE DATA
========================================================= */
const comparisonData = [
  { feature: "Active Ingredients", thindiss: "Very High", gummies: "Low", capsules: "Low", tablets: "Low" },
  { feature: "Bioavailability", thindiss: true, gummies: false, capsules: false, tablets: false },
  { feature: "Added Sugar", thindiss: "Zero", gummies: "High", capsules: "Mild", tablets: "Mild" },
  { feature: "High Absorption", thindiss: true, gummies: false, capsules: false, tablets: false },
  { feature: "Precise Dosage", thindiss: true, gummies: false, capsules: false, tablets: false },
  { feature: "Quick Action", thindiss: true, gummies: false, capsules: false, tablets: false },
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
      title: "Booming Market",
      content:
        "The global dietary supplements' market size was valued at approximately $152 billion in 2021 and is expected to expand at a compound annual growth rate of 8.9% from 2022 to 2030. This reflects a market ripe for more targeted innovations.",
      image: "/booming_market.png",
      imageAlt: "Global dietary supplements booming market growth analytics",
    },
    {
      title: "Disruptive Technology",
      content:
        "ThinDiss™ introduces breakthrough oral thin film technology that delivers rapid mucosal absorption, superior bioavailability, and unmatched convenience without water. By bypassing the digestive tract and first-pass metabolism, it replaces bulky pills and sugar-loaded gummies with modern, precision-engineered wellness delivery.",
      image: "/hero_strip_clean_2.jpg",
      imageAlt: "Advanced ThinDiss oral dissolving strip technology",
    },
    {
      title: "Portfolio Expansion",
      content:
        "OTFs provide solutions to many challenges common among supplement formulators and brand marketers. They can help older brands refresh and spur growth, and can increase consumer engagement for brands that feel stagnant. This is accomplished in part by our ability to source exotic flavors throughout the globe, and skillful blending of complementary, synergistic ingredients into a single strip.",
      image: "/pharma_card.jpg",
      imageAlt: "Exotic natural flavors, ingredients and portfolio expansion",
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
            <h2>Dissolve & Resolve™</h2>
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
          COMPARISON TABLE SECTION
      ===================================================== */}
      <section className="comparison-section">
        <div className="comparison-container reveal-up">
          <h2>OTFs are 10x times better than any other alternative in the market</h2>

          <div className="table-responsive-wrapper reveal-card">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="th-feature">Particulars</th>
                  <th className="th-thindiss">
                    <span className="brand-name">ThinDiss™</span>
                    <span className="brand-sub">MOUTH MELTING STRIPS</span>
                  </th>
                  <th>Gummies <span className="emoji-icon">🍓</span></th>
                  <th>Capsules <span className="emoji-icon">💊</span></th>
                  <th>Tablets <span className="emoji-icon">⚪</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="td-feature">{row.feature}</td>

                    <td className="td-thindiss">
                      {typeof row.thindiss === "boolean" ? (
                        row.thindiss ? <span className="icon-check">✓</span> : <span className="icon-cross">✕</span>
                      ) : (
                        row.thindiss
                      )}
                    </td>

                    <td>
                      {typeof row.gummies === "boolean" ? (
                        row.gummies ? <span className="icon-check">✓</span> : <span className="icon-cross">✕</span>
                      ) : (
                        row.gummies
                      )}
                    </td>

                    <td>
                      {typeof row.capsules === "boolean" ? (
                        row.capsules ? <span className="icon-check">✓</span> : <span className="icon-cross">✕</span>
                      ) : (
                        row.capsules
                      )}
                    </td>

                    <td>
                      {typeof row.tablets === "boolean" ? (
                        row.tablets ? <span className="icon-check">✓</span> : <span className="icon-cross">✕</span>
                      ) : (
                        row.tablets
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            src="/5.png"
            alt="Business collaboration handshake"
          />
        </div>
      </section>

    </main>
  );
};

export default WhyThinDiss;