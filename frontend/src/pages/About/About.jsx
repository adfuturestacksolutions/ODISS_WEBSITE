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
  const [activeDiffCard, setActiveDiffCard] = useState(0); // 0 = Default, 1-4 = Specific cards
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSide, setHoveredSide] = useState('none');
  const [activeApproachNode, setActiveApproachNode] = useState(1);
  const approachSectionRef = useRef(null);

  // Auto-advance timeline
  useEffect(() => {
    let interval;
    if (activeApproachNode < 4) {
      interval = setTimeout(() => {
        setActiveApproachNode((prev) => prev + 1);
      }, 4000); // 4 seconds delay for each step
    }
    return () => clearTimeout(interval);
  }, [activeApproachNode]);

  // Reset timeline on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveApproachNode(1);
        }
      });
    }, { threshold: 0.3 });

    if (approachSectionRef.current) {
      observer.observe(approachSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
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
          <source src="/Create_product_commercial_video_202609021443.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
        <div className="hero-content-center">
          <div className="hero-content">
            <h1 className="dissolve-in stagger-1 text-white">
              Making Oral Dissolvable Delivery<br />
              <span className="text-premium-gradient">Effortless.</span>
            </h1>
            <p className="dissolve-in stagger-2 text-white">
              <span style={{ display: 'inline-flex', alignItems: 'center', margin: '0 6px', verticalAlign: 'middle' }}><img src="/odiss_logo.png" alt="ODISS" style={{ height: '2.8em', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.9))' }} /><sup style={{ fontSize: '0.6em', fontWeight: 800, color: '#000', transform: 'translateY(-1.2em)' }}>®</sup></span> is shaping a smarter approach to oral dissolvable delivery through innovative dissolving strip technology — bringing together science, convenience and precision in a format designed for modern healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION (Single Sheet Glassmorphism) */}
      <section className={`about-section vision-mission-section single-sheet-section bg-cinematic-split hover-state-${hoveredSide}`}>
        <div className="about-container" style={{ display: 'flex', justifyContent: 'center' }}>
          
          <div 
            className={`single-sheet-glass ${hoveredSide !== 'none' ? 'is-hovered' : ''}`}
            onMouseLeave={() => setHoveredSide('none')}
          >
            {/* Split Background Effects */}
            <div className="sheet-bg-split left-glow"></div>
            <div className="sheet-bg-split right-glow"></div>

            {/* Left Side: VISION */}
            <div 
              className="sheet-side side-vision"
              onMouseEnter={() => setHoveredSide('left')}
            >
              <div className="side-content dissolve-in stagger-1">
                <span className="section-label label-vision">Vision</span>
                <h2>A Future Where Better Delivery Feels Simple.</h2>
                <p>
                  To help shape the next generation of oral dissolvable delivery by making innovative healthcare formats more accessible, convenient and relevant to everyday life for our international clients and partners.
                </p>
              </div>
            </div>
            
            {/* Center: CINEMATIC ANIMATION */}
            <div className={`sheet-center peel-up stagger-2 ${hoveredSide === 'left' ? 'shift-right' : hoveredSide === 'right' ? 'shift-left' : ''}`}>
              <div className="cinematic-glow"></div>
              
              <div className="cinematic-animation-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: '24px' }}>
                <img 
                  src="/vision_mission_center.png" 
                  alt="Vision and Mission" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.1)' }} 
                />
              </div>
            </div>

            {/* Right Side: MISSION */}
            <div 
              className="sheet-side side-mission"
              onMouseEnter={() => setHoveredSide('right')}
            >
              <div className="side-content dissolve-in stagger-3">
                <span className="section-label label-mission">Mission</span>
                <h2>Purpose-Driven Precision.</h2>
                <p>
                  To develop thoughtful oral dissolving strip solutions by bringing together formulation science, technology and manufacturing excellence — creating products that make delivery simpler without compromising on purpose.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. QUALITY & GLOBAL VISION */}
      {/* 3. QUALITY & GLOBAL VISION */}
      {/* 3. QUALITY & GLOBAL VISION */}
      <section className="about-section bg-soft-blue" style={{ padding: '40px 0' }}>
        <div className="about-container split-grid reverse-mobile" style={{ alignItems: 'center' }}>
          
          <div className="split-visual strip-slide-right stagger-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Premium Circular "Lens" Crop: This physically cuts the video into a perfect circle, eliminating the black background entirely while keeping 100% original video colors */}
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '380px', 
              aspectRatio: '1/1', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 0 0 8px rgba(255,255,255,0.6)', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              background: '#000'
            }}>
              <video 
                src="/gl.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ 
                  objectFit: 'cover', 
                  width: '100%', 
                  height: '100%',
                  border: 'none', 
                  outline: 'none',
                  transform: 'scale(1.35)' /* Zoom in so the globe perfectly fills the circle, pushing the black background and watermark completely out of view! */
                }}
              />
            </div>
          </div>

          <div className="split-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 className="dissolve-in stagger-1" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', marginBottom: '16px', lineHeight: '1.2', color: '#0f172a' }}>Innovation Without Borders.</h2>
            <p className="dissolve-in stagger-2 mb-20" style={{ fontSize: '16px', lineHeight: '1.6', color: '#475569' }}>
              Healthcare is evolving across borders. <span style={{ display: 'inline-flex', alignItems: 'center', margin: '0 6px', verticalAlign: 'middle' }}><img src="/odiss_logo.png" alt="ODISS" style={{ height: '2.8em', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} /><sup style={{ fontSize: '0.6em', fontWeight: 800, color: '#0f172a', transform: 'translateY(-1.2em)' }}>®</sup></span> is being built with a global perspective — combining modern oral dissolvable delivery thinking with a commitment to quality, adaptability and long-term innovation.
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
      <section className="about-section text-center about-difference bg-cinematic-split">
        <div className="about-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="diff-sheet" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(241, 245, 249, 0.6)', backdropFilter: 'blur(20px)', width: '100%', maxWidth: '1100px', padding: '50px 30px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', border: '1px solid rgba(255,255,255,0.8)' }}>
            <h2 className="dissolve-in stagger-1">Thin by <span className="text-aqua">Design</span>,<br/>Thoughtful by <span className="text-lavender">Nature</span>.</h2>

            
            <div className="diff-visual-wrapper dissolve-in stagger-3" style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
              <div className="center-video-container" style={{ position: 'relative', width: 'clamp(260px, 42vh, 400px)', aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: '24px' }}>
                {/* Default Video */}
                <video src="/Animate_thin_film_technology_video_202609030638.mp4" autoPlay loop muted playsInline className={`diff-center-video crossfade-video ${activeDiffCard === 0 ? 'active' : ''}`} style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '24px', opacity: activeDiffCard === 0 ? 1 : 0, transition: 'opacity 600ms ease-in-out', transform: 'scale(2.0)' }} />
                
                {/* Card 1 Video */}
                <video src="/Animate_thin_film_technology_video_202609030638.mp4" autoPlay loop muted playsInline className={`diff-center-video crossfade-video ${activeDiffCard === 1 ? 'active' : ''}`} style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '24px', opacity: activeDiffCard === 1 ? 1 : 0, transition: 'opacity 600ms ease-in-out', transform: 'scale(2.0)' }} />
                
                {/* Card 2 Video */}
                <video src="/Animate_thin_film_technology_video_202609030638.mp4" autoPlay loop muted playsInline className={`diff-center-video crossfade-video ${activeDiffCard === 2 ? 'active' : ''}`} style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '24px', opacity: activeDiffCard === 2 ? 1 : 0, transition: 'opacity 600ms ease-in-out', transform: 'scale(2.0)' }} />

                {/* Card 3 Video */}
                <video src="/Animate_thin_film_technology_video_202609030638.mp4" autoPlay loop muted playsInline className={`diff-center-video crossfade-video ${activeDiffCard === 3 ? 'active' : ''}`} style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '24px', opacity: activeDiffCard === 3 ? 1 : 0, transition: 'opacity 600ms ease-in-out', transform: 'scale(2.0)' }} />

                {/* Card 4 Video */}
                <video src="/Animate_thin_film_technology_video_202609030638.mp4" autoPlay loop muted playsInline className={`diff-center-video crossfade-video ${activeDiffCard === 4 ? 'active' : ''}`} style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '24px', opacity: activeDiffCard === 4 ? 1 : 0, transition: 'opacity 600ms ease-in-out', transform: 'scale(2.0)' }} />
              </div>
              
              <div className="diff-pulse diff-pulse-1"></div>
              <div 
                className={`diff-feature diff-f1 ${activeDiffCard === 1 ? 'active' : ''}`}
                onClick={() => setActiveDiffCard(1)}
              >
                <img src="/icons/premium/water_free.jpg" alt="Water-Free Icon" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '15px', display: 'block', border: '2px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                <h4 style={{ color: '#0f172a' }}>WATER-FREE</h4>
                <p style={{ color: '#334155' }}>Designed for convenient oral use without the need for water.</p>
              </div>

              <div className="diff-pulse diff-pulse-2"></div>
              <div 
                className={`diff-feature diff-f2 ${activeDiffCard === 2 ? 'active' : ''}`}
                onClick={() => setActiveDiffCard(2)}
              >
                <img src="/icons/premium/thin_portable.jpg" alt="Thin & Portable Icon" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '15px', display: 'block', border: '2px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                <h4 style={{ color: '#0f172a' }}>THIN & PORTABLE</h4>
                <p style={{ color: '#334155' }}>A slim, lightweight format designed to fit naturally into everyday routines.</p>
              </div>

              <div className="diff-pulse diff-pulse-3"></div>
              <div 
                className={`diff-feature diff-f3 ${activeDiffCard === 3 ? 'active' : ''}`}
                onClick={() => setActiveDiffCard(3)}
              >
                <img src="/icons/premium/fast_seamless.jpg" alt="Fast Seamless Use Icon" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '15px', display: 'block', border: '2px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                <h4 style={{ color: '#0f172a' }}>FAST, SEAMLESS USE</h4>
                <p style={{ color: '#334155' }}>A simple format designed to fit naturally into everyday moments, with no preparation or complicated steps.</p>
              </div>

              <div className="diff-pulse diff-pulse-4"></div>
              <div 
                className={`diff-feature diff-f4 ${activeDiffCard === 4 ? 'active' : ''}`}
                onClick={() => setActiveDiffCard(4)}
              >
                <img src="/icons/premium/everyday_wellness.jpg" alt="Everyday Wellness Icon" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', marginBottom: '15px', display: 'block', border: '2px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                <h4 style={{ color: '#0f172a' }}>EVERYDAY WELLNESS</h4>
                <p style={{ color: '#334155' }}>Thoughtfully developed to make consistent wellness simpler, more convenient and more natural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 OUR APPROACH (Horizontal Timeline) */}
      <section className="about-section approach-section bg-soft-blue" ref={approachSectionRef}>
        <div className="about-container text-center dissolve-in" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1200px', padding: '50px 30px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', marginBottom: '16px', color: '#0f172a' }}>From Insight to Impact.</h2>
          <p style={{ maxWidth: '750px', margin: '0 auto 30px', fontSize: '16px', color: '#475569', lineHeight: '1.6' }}>
            Every <span style={{ display: 'inline-flex', alignItems: 'center', margin: '0 6px', verticalAlign: 'middle' }}><img src="/odiss_logo.png" alt="ODISS" style={{ height: '2.8em', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} /><sup style={{ fontSize: '0.6em', fontWeight: 800, color: '#0f172a', transform: 'translateY(-1.2em)' }}>®</sup></span> solution begins with a clear understanding of the need, then moves through disciplined formulation, rigorous refinement and purposeful development to create oral dissolving formats built for real-world use.
          </p>

        <div className="approach-timeline-container dissolve-in stagger-2">
          {/* Continuous elegant line */}
          <div className="approach-line">
            <div 
              className="approach-line-progress" 
              style={{ width: `${(activeApproachNode - 1) * 33.33}%` }}
            ></div>
          </div>

          <div className="approach-nodes">
            
            {/* 01 DISCOVER */}
            <div 
              className={`approach-node ${activeApproachNode === 1 ? 'active' : activeApproachNode > 1 ? 'unlocked' : 'locked'}`}
              onClick={() => { if (activeApproachNode === 1) setActiveApproachNode(2); }}
            >
              <div className="peel-up stagger-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="node-marker gold-marker">
                  <div className="node-visual-wrapper">
                    <img src="/pillar_patient_1787832190133.jpg" alt="Discover" className="node-visual" />
                  </div>
                </div>
                <div className="node-content">
                  <h4>Discover</h4>
                  <p>We begin by understanding the need behind the product — its purpose, users and the experience it is expected to deliver.</p>
                </div>
              </div>
            </div>

            {/* 02 FORMULATE */}
            <div 
              className={`approach-node ${activeApproachNode === 2 ? 'active' : activeApproachNode > 2 ? 'unlocked' : 'locked'}`}
              onClick={() => { if (activeApproachNode === 2) setActiveApproachNode(3); }}
            >
              <div className="peel-up stagger-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="node-marker amber-marker">
                  <div className="node-visual-wrapper">
                    <img src="/strip_dissolve.jpg" alt="Formulate" className="node-visual" />
                  </div>
                </div>
                <div className="node-content">
                  <h4>Formulate</h4>
                  <p>Formulation science and film engineering come together to shape the right balance of performance, precision and usability.</p>
                </div>
              </div>
            </div>

            {/* 03 VALIDATE */}
            <div 
              className={`approach-node ${activeApproachNode === 3 ? 'active' : activeApproachNode > 3 ? 'unlocked' : 'locked'}`}
              onClick={() => { if (activeApproachNode === 3) setActiveApproachNode(4); }}
            >
              <div className="peel-up stagger-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="node-marker coral-marker">
                  <div className="node-visual-wrapper">
                    <img src="/pillar_quality_1787832172716.jpg" alt="Validate" className="node-visual" />
                  </div>
                </div>
                <div className="node-content">
                  <h4>Validate</h4>
                  <p>Each development is refined through careful evaluation, with close attention to consistency, quality and performance.</p>
                </div>
              </div>
            </div>

            {/* 04 ADVANCE */}
            <div 
              className={`approach-node ${activeApproachNode === 4 ? 'active' : activeApproachNode > 4 ? 'unlocked' : 'locked'}`}
              onClick={() => { if (activeApproachNode === 4) setActiveApproachNode(1); /* Loop back or just stay */ }}
            >
              <div className="peel-up stagger-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="node-marker sage-marker">
                  <div className="node-visual-wrapper">
                    <img src="/global_reach_mild.jpg" alt="Advance" className="node-visual" />
                  </div>
                </div>
                <div className="node-content">
                  <h4>Advance</h4>
                  <p>Refined solutions move forward with a focus on scalability, practical application and long-term value.</p>
                </div>
              </div>
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
                  src="/final_uncompromising.jpg" 
                  alt="Uncompromising Quality" 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
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
                  src="/final_patient_centricity.jpg" 
                  alt="Patient-Centricity" 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
                  src="/final_smarter_delivery.jpg" 
                  alt="Smarter Delivery" 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
                  src="/final_consistent.jpg" 
                  alt="Consistent Performance" 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
          <p className="peel-up stagger-1 mb-40">Explore what <span style={{ display: 'inline-flex', alignItems: 'center', margin: '0 6px', verticalAlign: 'middle' }}><img src="/odiss_logo.png" alt="ODISS" style={{ height: '2.8em', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} /><sup style={{ fontSize: '0.6em', fontWeight: 800, color: '#0f172a', transform: 'translateY(-1.2em)' }}>®</sup></span> can make possible.</p>
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
