import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const useIntersectionObserver = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const timeoutId = setTimeout(() => {
      const elements = containerRef.current?.querySelectorAll(
        ".dissolve-in, .peel-up, .strip-slide-left, .strip-slide-right"
      );
      elements?.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return containerRef;
};

const About = () => {
  const containerRef = useIntersectionObserver();
  const [activeCard, setActiveCard] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEndEvent = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setActiveCard((prev) => (prev + 1) % 5);
    }
    if (isRightSwipe) {
      setActiveCard((prev) => (prev - 1 + 5) % 5);
    }
  };

  // Auto-play the coverflow
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getCardClass = (index, activeIndex) => {
    if (index === activeIndex) return "cf-center";
    if (index === (activeIndex + 4) % 5) return "cf-left"; // Previous card
    if (index === (activeIndex + 1) % 5) return "cf-right"; // Next card
    if (index === (activeIndex + 3) % 5) return "cf-left-outer"; // Two cards back
    if (index === (activeIndex + 2) % 5) return "cf-right-outer"; // Two cards forward
  };



  return (
    <main className="about-page snap-container" ref={containerRef}>
      
      {/* Subdued Ambient Background Animation */}
      <div className="ambient-background">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
      </div>
      
      {/* 1. HERO SECTION (Full Background Video) */}
      <section className="about-hero-full-video">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-background-video" 
        >
          <source src="/Create_a_premium_cinematic_BAC.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="hero-content-left">
          <div className="hero-content">
            <h1 className="dissolve-in stagger-1 text-black">
              Making Oral Dissolvable Delivery<br />
              <span className="text-gold">Effortless.</span>
            </h1>
            <p className="dissolve-in stagger-2 text-black">
              ODISS is shaping a smarter approach to oral dissolvable delivery through innovative dissolving strip technology — bringing together science, convenience and precision in a format designed for modern healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION (Cinematic Video Layout) */}
      <section className="about-section vision-mission-section bg-cinematic-split">
        <div className="about-container">
          <div className="vm-unique-layout cinematic-layout">
            
            {/* VISION - LEFT (Warm Gold / Amber) */}
            <div className="vm-text-block vm-vision dissolve-in stagger-1">
              <span className="section-label label-vision">Vision</span>
              <h2>A Future Where Better Delivery Feels Simple.</h2>
              <p>
                To help shape the next generation of oral dissolvable delivery by making innovative healthcare formats more accessible, convenient and relevant to everyday life for our international clients and partners.
              </p>
            </div>
            
            {/* CINEMATIC ANIMATION - CENTER */}
            <div className="vm-video-center peel-up stagger-2">
              <div className="cinematic-glow"></div>
              
              <div className="cinematic-animation-container">
                {/* Vision Layer: Golden Amber Network */}
                <div className="anim-vision-layer">
                  <div className="gold-orb orb-1"></div>
                  <div className="gold-orb orb-2"></div>
                  <div className="gold-orb orb-3"></div>
                  <div className="gold-line line-1"></div>
                  <div className="gold-line line-2"></div>
                </div>

                {/* Mission Layer: Scientific Precision */}
                <div className="anim-mission-layer">
                  <div className="sage-particle p-1"></div>
                  <div className="sage-particle p-2"></div>
                  <div className="sage-particle p-3"></div>
                  <div className="sage-particle p-4"></div>
                  <div className="sage-droplet drop-1"></div>
                  <div className="sage-droplet drop-2"></div>
                </div>

                {/* Center Layer: Oral Dissolving Film */}
                <div className="anim-center-layer">
                  <div className="odf-film">
                    <div className="odf-sheen"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* MISSION - RIGHT (Soft Sage) */}
            <div className="vm-text-block vm-mission dissolve-in stagger-3">
              <span className="section-label label-mission">Mission</span>
              <h2>Purpose-Driven Precision.</h2>
              <p>
                To develop thoughtful oral dissolving strip solutions by bringing together formulation science, technology and manufacturing excellence — creating products that make delivery simpler without compromising on purpose.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. QUALITY & GLOBAL VISION */}
      <section className="about-section bg-soft-blue" style={{ padding: '40px 0' }}>
        <div className="about-container split-grid reverse-mobile" style={{ alignItems: 'center' }}>
          
          <div className="split-visual strip-slide-right stagger-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mixBlendMode: 'multiply' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '550px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent' }}>
              <video 
                src="/globe vedio.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ 
                  objectFit: 'contain', 
                  width: '100%', 
                  maxHeight: '400px',
                  border: 'none', 
                  outline: 'none',
                  filter: 'brightness(1.16) contrast(1.05) saturate(1.2)' // Mathematically pushes the sandal bg (#f5f5dc) to pure white so multiply completely hides it, without burning the globe.
                }}
              />
            </div>
          </div>

          <div className="split-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 className="dissolve-in stagger-1" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', marginBottom: '16px', lineHeight: '1.2', color: '#0f172a' }}>Innovation Without Borders.</h2>
            <p className="dissolve-in stagger-2 mb-20" style={{ fontSize: '16px', lineHeight: '1.6', color: '#475569' }}>
              Healthcare is evolving across borders. ODISS is being built with a global perspective — combining modern oral dissolvable delivery thinking with a commitment to quality, adaptability and long-term innovation.
            </p>
            
            {/* Highly Compact Layout to Prevent Overflow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
              <div className="dissolve-in stagger-3" style={{ background: '#ffffff', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(217, 155, 47, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d99b2f' }}></div>
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', margin: '0 0 2px 0', fontSize: '15px', fontWeight: '700' }}>Global Standards</h4>
                  <p style={{ color: '#475569', margin: 0, fontSize: '13px', lineHeight: '1.3' }}>Meeting rigorous international compliance and quality benchmarks.</p>
                </div>
              </div>

              <div className="dissolve-in stagger-4" style={{ background: '#ffffff', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }}></div>
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', margin: '0 0 2px 0', fontSize: '15px', fontWeight: '700' }}>Borderless Accessibility</h4>
                  <p style={{ color: '#475569', margin: 0, fontSize: '13px', lineHeight: '1.3' }}>Designing delivery solutions that scale seamlessly for worldwide markets.</p>
                </div>
              </div>

              <div className="dissolve-in stagger-5" style={{ background: '#ffffff', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(74, 222, 128, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }}></div>
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', margin: '0 0 2px 0', fontSize: '15px', fontWeight: '700' }}>Strategic Partnerships</h4>
                  <p style={{ color: '#475569', margin: 0, fontSize: '13px', lineHeight: '1.3' }}>Collaborating with leaders to drive healthcare innovation across continents.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 4. THE ODISS DIFFERENCE (Thin By Design) */}
      <section className="about-section text-center about-difference bg-soft-peach">
        <div className="about-container">
          <h2 className="dissolve-in stagger-1">Thin by <span className="shimmer-purple">Design.</span><br/>Thoughtful by <span className="shimmer-ruby">Nature.</span></h2>
          
          <div className="diff-visual-wrapper dissolve-in stagger-2">
            <div className="center-video-container">
              {/* Central Video */}
              <video 
                src="/Create_a_premium_professional.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="diff-center-video animated-strip-image"
                style={{ objectFit: 'cover', aspectRatio: '1/1', filter: 'hue-rotate(280deg) saturate(1.5)' }}
              />
            </div>
            
            <div className="diff-pulse diff-pulse-1"></div>
            <div className="diff-feature diff-f1 peel-up stagger-2">
              <h4 className="text-blue">WATER-FREE</h4>
              <p>Designed for convenient oral use without depending on water.</p>
            </div>

            <div className="diff-pulse diff-pulse-2"></div>
            <div className="diff-feature diff-f2 peel-up stagger-3">
              <h4 className="text-peach">FAST DISSOLUTION</h4>
              <p>A thin-film format designed to dissolve quickly in the mouth.</p>
            </div>

            <div className="diff-pulse diff-pulse-3"></div>
            <div className="diff-feature diff-f3 peel-up stagger-4">
              <h4 className="text-gold">PORTABLE</h4>
              <p>Slim, lightweight and easy to carry wherever you go.</p>
            </div>

            <div className="diff-pulse diff-pulse-4"></div>
            <div className="diff-feature diff-f4 peel-up stagger-5">
              <h4 className="text-green">SIMPLE EXPERIENCE</h4>
              <p>A delivery format built around everyday convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 OUR APPROACH (Horizontal Timeline) */}
      <section className="about-section approach-section bg-soft-blue">
        <div className="about-container text-center dissolve-in">
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', marginBottom: '16px', color: '#0f172a' }}>From Insight to Impact.</h2>
          <p style={{ maxWidth: '750px', margin: '0 auto 30px', fontSize: '16px', color: '#475569', lineHeight: '1.6' }}>
            Every ODISS solution begins with a clear understanding of the need, then moves through disciplined formulation, rigorous refinement and purposeful development to create oral dissolving formats built for real-world use.
          </p>
        </div>

        <div className="approach-timeline-container dissolve-in stagger-2">
          {/* Continuous elegant line */}
          <div className="approach-line"></div>

          <div className="approach-nodes">
            
            {/* 01 DISCOVER */}
            <div className="approach-node">
              <div className="peel-up stagger-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="node-marker gold-marker">
                  <div className="node-visual-wrapper">
                    <img src="/pillar_patient_1787832190133.jpg" alt="Discover" className="node-visual" />
                  </div>
                  <span className="node-number">01</span>
                </div>
                <div className="node-content">
                  <h4>Discover</h4>
                  <p>We begin by understanding the need behind the product — its purpose, users and the experience it is expected to deliver.</p>
                </div>
              </div>
            </div>

            {/* 02 FORMULATE */}
            <div className="approach-node">
              <div className="peel-up stagger-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="node-marker amber-marker">
                  <div className="node-visual-wrapper">
                    <img src="/strip_dissolve.jpg" alt="Formulate" className="node-visual" />
                  </div>
                  <span className="node-number">02</span>
                </div>
                <div className="node-content">
                  <h4>Formulate</h4>
                  <p>Formulation science and film engineering come together to shape the right balance of performance, precision and usability.</p>
                </div>
              </div>
            </div>

            {/* 03 VALIDATE */}
            <div className="approach-node">
              <div className="peel-up stagger-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="node-marker coral-marker">
                  <div className="node-visual-wrapper">
                    <img src="/pillar_quality_1787832172716.jpg" alt="Validate" className="node-visual" />
                  </div>
                  <span className="node-number">03</span>
                </div>
                <div className="node-content">
                  <h4>Validate</h4>
                  <p>Each development is refined through careful evaluation, with close attention to consistency, quality and performance.</p>
                </div>
              </div>
            </div>

            {/* 04 ADVANCE */}
            <div className="approach-node">
              <div className="peel-up stagger-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="node-marker sage-marker">
                  <div className="node-visual-wrapper">
                    <img src="/global_reach_mild.jpg" alt="Advance" className="node-visual" />
                  </div>
                  <span className="node-number">04</span>
                </div>
                <div className="node-content">
                  <h4>Advance</h4>
                  <p>Refined solutions move forward with a focus on scalability, practical application and the evolving needs of modern healthcare.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SCIENTIFIC FOUNDATION (3D Coverflow Layout) */}
      <section className="about-section coverflow-section bg-soft-sage">
        <div className="about-container">
          <div className="section-header text-center dissolve-in">
            <h2>Scientific Foundation</h2>
            <p>The principles that drive our innovation and manufacturing.</p>
          </div>
          
          <div 
            className="coverflow-wrapper dissolve-in stagger-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEndEvent}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            <div 
              className={`coverflow-card card-gold ${getCardClass(0, activeCard)}`}
              onClick={() => setActiveCard(0)}
            >
              <div className="cf-media">
                <img 
                  src="/hero_strip_clean_2.jpg" 
                  alt="Precision Formulation" 
                  style={{ filter: 'hue-rotate(180deg) saturate(1.5)' }} 
                />
                {/* You can easily replace the <img> with a <video autoPlay loop muted> here for animations */}
              </div>
              <div className="cf-content">
                <h3>Precision Formulation</h3>
                <p>Advanced R&D capabilities ensuring exact dosing, optimal bioavailability, and exceptional stability across all environments.</p>
              </div>
            </div>

            <div 
              className={`coverflow-card card-blue ${getCardClass(1, activeCard)}`}
              onClick={() => setActiveCard(1)}
            >
              <div className="cf-media">
                <img 
                  src="/about_hero_dynamic.jpg" 
                  alt="Uncompromising Quality" 
                  style={{ filter: 'hue-rotate(-30deg) saturate(1.2)' }} 
                />
              </div>
              <div className="cf-content">
                <h3>Uncompromising Quality</h3>
                <p>Operating under strict global manufacturing standards to deliver flawless, safe, and highly effective products every time.</p>
              </div>
            </div>

            <div 
              className={`coverflow-card card-peach ${getCardClass(2, activeCard)}`}
              onClick={() => setActiveCard(2)}
            >
              <div className="cf-media">
                <img 
                  src="/new_pillar_patient_1787833063887.jpg" 
                  alt="Patient-Centricity" 
                  style={{ objectPosition: 'center center' }}
                />
              </div>
              <div className="cf-content">
                <h3>Patient-Centricity</h3>
                <p>Designing convenient formats that prioritize end-user compliance and everyday lifestyle needs.</p>
              </div>
            </div>

            <div 
              className={`coverflow-card card-green ${getCardClass(3, activeCard)}`}
              onClick={() => setActiveCard(3)}
            >
              <div className="cf-media">
                <img 
                  src="/strip_blue.jpg" 
                  alt="Smarter Delivery" 
                  style={{ filter: 'hue-rotate(20deg) saturate(1.1)' }}
                />
              </div>
              <div className="cf-content">
                <h3>Smarter Delivery</h3>
                <p>Advanced film-based delivery designed to bring active ingredients into a thin, convenient and easy-to-use format.</p>
              </div>
            </div>

            <div 
              className={`coverflow-card card-purple ${getCardClass(4, activeCard)}`}
              onClick={() => setActiveCard(4)}
            >
              <div className="cf-media">
                <img 
                  src="/strip_amber.jpg" 
                  alt="Consistent Performance" 
                  style={{ filter: 'saturate(1.2)' }}
                />
              </div>
              <div className="cf-content">
                <h3>Consistent Performance</h3>
                <p>Carefully engineered film properties support reliable performance across every thoughtfully developed strip.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="about-section text-center cta-section bg-soft-slate">
        <div className="about-container">
          <h2 className="peel-up">The Future of Oral Dissolvable Delivery<br/>Is Taking Shape.</h2>
          <p className="peel-up stagger-1 mb-40">Explore what ODISS can make possible.</p>
          <div className="cta-buttons peel-up stagger-2">
            <a href="/products" className="btn-primary">
              EXPLORE PRODUCTS <span>→</span>
            </a>
            <a href="/contact" className="btn-secondary">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
