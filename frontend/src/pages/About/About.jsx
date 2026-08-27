import React, { useEffect, useRef } from "react";
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

  return (
    <main className="about-page" ref={containerRef}>
      
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
          <source src="/Create_a_high_end_cinematic_br.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
        
        <div className="about-container hero-content-overlay">
          <div className="hero-content text-center">
            <span className="section-label dissolve-in">About ODISS</span>
            <h1 className="dissolve-in stagger-1 text-black">
              Making Oral Delivery<br />
              <span className="text-gold">Effortless.</span>
            </h1>
            <p className="dissolve-in stagger-2 text-black">
              ODISS is shaping a smarter approach to oral delivery through innovative dissolving strip technology — bringing together science, convenience and precision in a format designed for modern healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION (Unique Layout) */}
      <section className="about-section vision-mission-section">
        <div className="about-container">
          <div className="vm-unique-layout">
            <div className="vm-text-block vm-vision dissolve-in stagger-1">
              <span className="section-label">Our Vision</span>
              <h2>A Future Where Better Delivery Feels Simple.</h2>
              <p>
                To help shape the next generation of oral delivery by making innovative healthcare formats more accessible, convenient and relevant to everyday life for our international clients and partners.
              </p>
            </div>
            
            <div className="vm-image-center peel-up stagger-2">
              <div className="image-glow"></div>
              <img src="/vision_strip_custom.jpg" alt="Unique Oral Strip Innovation" />
            </div>

            <div className="vm-text-block vm-mission dissolve-in stagger-3">
              <span className="section-label">Our Mission</span>
              <h2>Purpose-Driven Precision.</h2>
              <p>
                To develop thoughtful oral dissolving strip solutions by bringing together formulation science, technology and manufacturing excellence — creating products that make delivery simpler without compromising on purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY & GLOBAL VISION */}
      <section className="about-section">
        <div className="about-container split-grid reverse-mobile">
          <div className="split-visual strip-slide-right stagger-1">
            <div className="global-perspective-visual">
              <div className="global-halo"></div>
              <div className="image-globe-wrapper">
                <img src="/global_vision_custom.jpg" alt="ODISS Global Reach" className="globe-picture" />
              </div>
              
              <div className="floating-points-container">
                <div className="floating-point point-1 stagger-2">
                  <div className="floating-point-dot"></div>
                  <div className="floating-point-card">
                    <h4>Quality Focused</h4>
                    <p>Every stage approached with consistency and care.</p>
                  </div>
                </div>
                
                <div className="floating-point point-2 stagger-3">
                  <div className="floating-point-dot"></div>
                  <div className="floating-point-card">
                    <h4>Science Driven</h4>
                    <p>Innovation begins with formulation, technology and research.</p>
                  </div>
                </div>
                
                <div className="floating-point point-3 stagger-4">
                  <div className="floating-point-dot"></div>
                  <div className="floating-point-card">
                    <h4>Scalable Innovation</h4>
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
              Healthcare is evolving across borders. ODISS is being built with a global perspective — combining modern oral delivery thinking with a commitment to quality, adaptability and long-term innovation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE ODISS DIFFERENCE (Thin By Design) */}
      <section className="about-section text-center about-difference">
        <div className="about-container">
          <span className="section-label dissolve-in">The ODISS Difference</span>
          <h2 className="dissolve-in stagger-1">Thin by Design.<br/>Thoughtful by Nature.</h2>
          
          <div className="diff-visual-wrapper dissolve-in stagger-2">
            <div className="center-video-container">
              {/* Unique animated image acting as a video substitute */}
              <img src="/animation_strip_custom.jpg" alt="Glowing animated strip" className="diff-center-video animated-strip-image" />
              <div className="video-glow-ring"></div>
            </div>
            
            <div className="diff-pulse diff-pulse-1"></div>
            <div className="diff-feature diff-f1 peel-up stagger-2">
              <h4>WATER-FREE</h4>
              <p>Designed for convenient oral use without depending on water.</p>
            </div>

            <div className="diff-pulse diff-pulse-2"></div>
            <div className="diff-feature diff-f2 peel-up stagger-3">
              <h4>FAST DISSOLUTION</h4>
              <p>A thin-film format designed to dissolve quickly in the mouth.</p>
            </div>

            <div className="diff-pulse diff-pulse-3"></div>
            <div className="diff-feature diff-f3 peel-up stagger-4">
              <h4>PORTABLE</h4>
              <p>Slim, lightweight and easy to carry wherever you go.</p>
            </div>

            <div className="diff-pulse diff-pulse-4"></div>
            <div className="diff-feature diff-f4 peel-up stagger-5">
              <h4>SIMPLE EXPERIENCE</h4>
              <p>A delivery format built around everyday convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PILLARS OF EXCELLENCE (New Extra Content) */}
      <section className="about-section pillars-section">
        <div className="about-container">
          <div className="pillars-header dissolve-in">
            <span className="section-label">Our Standards</span>
            <h2>Pillars of Excellence</h2>
            <p>The core principles that drive our innovation and manufacturing processes.</p>
          </div>
          
          <div className="pillars-feature-layout">
            <div className="pillar-feature-block dissolve-in stagger-1">
              <div className="pillar-feature-image">
                <img src="/new_pillar_precision_1787832855884.jpg" alt="Precision Formulation" />
                <div className="image-overlay"></div>
              </div>
              <div className="pillar-feature-content">
                <span className="pillar-subtitle">01 / Formulation</span>
                <h3>Precision Formulation</h3>
                <p>Advanced R&D capabilities ensuring exact dosing, optimal bioavailability, and exceptional stability across all environments.</p>
              </div>
            </div>
            
            <div className="pillar-feature-block reverse dissolve-in stagger-2">
              <div className="pillar-feature-image">
                <img src="/new_pillar_quality_1787833011092.jpg" alt="Uncompromising Quality" />
                <div className="image-overlay"></div>
              </div>
              <div className="pillar-feature-content">
                <span className="pillar-subtitle">02 / Standard</span>
                <h3>Uncompromising Quality</h3>
                <p>Operating under strict global manufacturing standards to deliver flawless, safe, and highly effective products every single time.</p>
              </div>
            </div>
            
            <div className="pillar-feature-block dissolve-in stagger-3">
              <div className="pillar-feature-image">
                <img src="/new_pillar_patient_1787833063887.jpg" alt="Patient-Centricity" />
                <div className="image-overlay"></div>
              </div>
              <div className="pillar-feature-content">
                <span className="pillar-subtitle">03 / Experience</span>
                <h3>Patient-Centricity</h3>
                <p>Designing convenient, effortless formats that prioritize end-user compliance, comfort, and everyday lifestyle needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="about-section text-center cta-section">
        <div className="about-container">
          <h2 className="peel-up">The Future of Oral Delivery<br/>Is Taking Shape.</h2>
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