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

  // Auto-play the coverflow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCardClass = (index, activeIndex) => {
    if (index === activeIndex) return "cf-center";
    if (index === (activeIndex + 2) % 3) return "cf-left";
    if (index === (activeIndex + 1) % 3) return "cf-right";
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
            <span className="section-label dissolve-in">About ODISS</span>
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

      {/* 2. MISSION & VISION (Unique Layout) */}
      <section className="about-section vision-mission-section bg-soft-cream">
        <div className="about-container">
          <div className="vm-unique-layout">
            <div className="vm-text-block vm-vision dissolve-in stagger-1">
              <span className="section-label">Vision</span>
              <h2>A Future Where Better Delivery Feels Simple.</h2>
              <p>
                To help shape the next generation of oral dissolvable delivery by making innovative healthcare formats more accessible, convenient and relevant to everyday life for our international clients and partners.
              </p>
            </div>
            
            <div className="vm-image-center peel-up stagger-2">
              <div className="image-glow"></div>
              <img 
                src="/media_1788004463035.jpg" 
                alt="Vision and Mission Central Image" 
                className="animated-premium-img" 
                style={{ filter: 'hue-rotate(150deg) saturate(1.2)' }}
              />
            </div>

            <div className="vm-text-block vm-mission dissolve-in stagger-3">
              <span className="section-label">Mission</span>
              <h2>Purpose-Driven Precision.</h2>
              <p>
                To develop thoughtful oral dissolving strip solutions by bringing together formulation science, technology and manufacturing excellence — creating products that make delivery simpler without compromising on purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY & GLOBAL VISION */}
      <section className="about-section bg-soft-blue">
        <div className="about-container split-grid reverse-mobile">
          <div className="split-visual strip-slide-right stagger-1">
            <div className="global-perspective-visual">
              <div className="global-halo"></div>
              <div className="image-globe-wrapper">
                <img src="/professional_blue_globe.jpg" alt="ODISS Global Reach" className="globe-picture" />
              </div>
              
              <div className="floating-points-container">
                <div className="floating-point point-1 stagger-2">
                  <div className="floating-point-dot dot-gold"></div>
                  <div className="floating-point-card card-border-gold">
                    <h4 className="text-gold">Quality Focused</h4>
                    <p>Every stage approached with consistency and care.</p>
                  </div>
                </div>
                
                <div className="floating-point point-2 stagger-3">
                  <div className="floating-point-dot dot-blue"></div>
                  <div className="floating-point-card card-border-blue">
                    <h4 className="text-blue">Science Driven</h4>
                    <p>Innovation begins with formulation, technology and research.</p>
                  </div>
                </div>
                
                <div className="floating-point point-3 stagger-4">
                  <div className="floating-point-dot dot-green"></div>
                  <div className="floating-point-card card-border-green">
                    <h4 className="text-green">Scalable Innovation</h4>
                    <p>Building solutions with broader opportunities in mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="split-content">
            <span className="section-label dissolve-in">Global Reach</span>
            <h2 className="dissolve-in stagger-1">Innovation Without Borders.</h2>
            <p className="dissolve-in stagger-2 mb-40">
              Healthcare is evolving across borders. ODISS is being built with a global perspective — combining modern oral dissolvable delivery thinking with a commitment to quality, adaptability and long-term innovation.
            </p>
          </div>
        </div>
      </section>


      {/* 4. THE ODISS DIFFERENCE (Thin By Design) */}
      <section className="about-section text-center about-difference bg-soft-peach">
        <div className="about-container">
          <h2 className="dissolve-in stagger-1">Thin by Design.<br/>Thoughtful by Nature.</h2>
          
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

      {/* 5. SCIENTIFIC FOUNDATION (3D Coverflow Layout) */}
      <section className="about-section coverflow-section bg-soft-sage">
        <div className="about-container">
          <div className="section-header text-center dissolve-in">
            <span className="section-label">Our Core Focus</span>
            <h2>Scientific Foundation</h2>
            <p>The principles that drive our innovation and manufacturing.</p>
          </div>
          
          <div className="coverflow-wrapper dissolve-in stagger-2">
            
            <div 
              className={`coverflow-card ${getCardClass(0, activeCard)}`}
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
              className={`coverflow-card ${getCardClass(1, activeCard)}`}
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
              className={`coverflow-card ${getCardClass(2, activeCard)}`}
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