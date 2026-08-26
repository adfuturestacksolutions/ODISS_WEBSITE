import React, { useEffect, useRef } from "react";
import "./About.css";

// Utility hook for intersection observer (scroll animations)
const useIntersectionObserver = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("process-step") || entry.target.classList.contains("capabilities-right")) {
             entry.target.classList.add("active");
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const timeoutId = setTimeout(() => {
      const elements = containerRef.current?.querySelectorAll(".fade-up, .fade-left, .fade-right, .process-step, .capabilities-right, .diff-feature, .pillar, .q-card, .j-card");
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

  // Scroll handler for the science process line
  useEffect(() => {
    const handleScroll = () => {
      const processSection = document.getElementById("science-process");
      const lineFill = document.getElementById("process-line-fill");
      if (processSection && lineFill) {
        const rect = processSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollPercent = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0), 1);
          if (window.innerWidth > 992) {
            lineFill.style.width = `${scrollPercent * 100}%`;
          } else {
            lineFill.style.height = `${scrollPercent * 100}%`;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="about-page" ref={containerRef}>
      
      {/* Background Particles / Glow for less emptiness */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-glow bg-glow-3"></div>

      {/* 1. HERO SECTION */}
      <section className="about-hero about-container">
        <div className="bg-pattern"></div>
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-label fade-left">About ODISS</span>
            <h1 className="fade-left stagger-1">
              Making Oral Delivery<br />
              <span>Effortless.</span>
            </h1>
            <p className="fade-left stagger-2">
              ODISS is shaping a smarter approach to oral delivery through innovative dissolving strip technology — bringing together science, convenience and precision in a format designed for modern healthcare.
            </p>
            <div className="fade-left stagger-3">
              <a href="#what-we-do" className="btn-primary">
                DISCOVER OUR APPROACH <span>→</span>
              </a>
            </div>
          </div>
          <div className="hero-visual fade-right stagger-1">
            <div className="hero-gold-line"></div>
            <img src="/hero_strip.jpg" alt="Translucent Oral Dissolving Strip" className="hero-image" />
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE + WHAT WE DO */}
      <section className="about-capabilities about-container" id="what-we-do">
        <div className="bg-pattern bg-pattern-gold"></div>
        <div className="capabilities-grid">
          <div className="capabilities-left">
            <span className="cap-section-label fade-left">Who We Are</span>
            <h2 className="fade-left stagger-1">Science Behind the Simplicity.</h2>
            <p className="fade-left stagger-2">
              We are building ODISS around a simple belief — advanced healthcare delivery should not have to feel complicated.
              Our focus is oral dissolving strip technology, where formulation science and thoughtful design come together to create a more convenient way to deliver active ingredients.
            </p>

            <span className="cap-section-label fade-left stagger-3">What We Do</span>
            <p className="fade-left stagger-3" style={{ fontSize: '1rem', marginBottom: '40px' }}>
              From formulation development and product innovation to scalable strip solutions, we bring together the capabilities needed to transform ideas into practical oral delivery formats.
            </p>

            <div className="cap-list">
              <div className="cap-item fade-left stagger-1">
                <div className="cap-num">01</div>
                <div>
                  <h4>FORMULATE</h4>
                  <p>Developing strip-based delivery solutions around specific active ingredients.</p>
                </div>
              </div>
              <div className="cap-item fade-left stagger-2">
                <div className="cap-num">02</div>
                <div>
                  <h4>ENGINEER</h4>
                  <p>Optimising film characteristics, dissolution and product experience.</p>
                </div>
              </div>
              <div className="cap-item fade-left stagger-3">
                <div className="cap-num">03</div>
                <div>
                  <h4>DELIVER</h4>
                  <p>Building solutions with consistency, scalability and market readiness in mind.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="capabilities-right fade-right stagger-2">
            <img src="/pharma_card.jpg" alt="Premium oral strip capability" />
          </div>
        </div>
      </section>

      {/* 3. THE ODISS DIFFERENCE */}
      <section className="about-difference about-container">
        <div className="bg-pattern"></div>
        <span className="cap-section-label fade-up">The ODISS Difference</span>
        <h2 className="fade-up stagger-1">Thin by Design.<br/>Thoughtful by Nature.</h2>
        
        <div className="diff-visual-wrapper fade-up stagger-2">
          <img src="/strip_alt.jpg" alt="ODISS Central Strip" className="diff-center-strip" style={{ borderRadius: '16px' }} />
          
          <div className="diff-pulse diff-pulse-1"></div>
          <div className="diff-feature diff-f1 fade-right stagger-2">
            <h4>WATER-FREE</h4>
            <p>Designed for convenient oral use without depending on water.</p>
          </div>

          <div className="diff-pulse diff-pulse-2"></div>
          <div className="diff-feature diff-f2 fade-left stagger-3">
            <h4>FAST DISSOLUTION</h4>
            <p>A thin-film format designed to dissolve quickly in the mouth.</p>
          </div>

          <div className="diff-pulse diff-pulse-3"></div>
          <div className="diff-feature diff-f3 fade-right stagger-4">
            <h4>PORTABLE</h4>
            <p>Slim, lightweight and easy to carry.</p>
          </div>

          <div className="diff-pulse diff-pulse-4"></div>
          <div className="diff-feature diff-f4 fade-left stagger-5">
            <h4>SIMPLE EXPERIENCE</h4>
            <p>A delivery format built around everyday convenience.</p>
          </div>
        </div>
      </section>

      {/* 4. THE SCIENCE */}
      <section className="about-science">
        <div className="bg-pattern bg-pattern-gold" style={{ opacity: 0.1 }}></div>
        <div className="about-container">
          <span className="cap-section-label fade-up" style={{ color: 'var(--about-gold)' }}>The Science</span>
          <h2 className="fade-up stagger-1">Where Science<br/>Becomes a Strip.</h2>
          
          <div className="science-process" id="science-process">
            <div className="process-line-bg"></div>
            <div className="process-line-fill" id="process-line-fill"></div>
            
            {[
              { title: "ACTIVE INGREDIENT", desc: "Understanding the ingredient is where every formulation begins." },
              { title: "FORMULATION", desc: "Designing the composition around performance, stability and usability." },
              { title: "FILM ENGINEERING", desc: "Transforming the formulation into a thin, functional oral film." },
              { title: "DISSOLUTION", desc: "Engineering the strip to deliver a consistent dissolving experience." },
              { title: "ORAL DELIVERY", desc: "A compact format designed for convenient oral use." }
            ].map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-dot"></div>
                <h4>0{index + 1} &mdash; {step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MISSION + VISION */}
      <section className="about-mission">
        <div className="mission-bg"></div>
        <div className="bg-pattern" style={{ opacity: 0.2 }}></div>
        <div className="about-container mission-grid">
          <div className="mission-left">
            <h3 className="fade-right">Our Vision</h3>
            <h2 className="fade-right stagger-1">A Future Where Better Delivery Feels Simple.</h2>
            <p className="fade-right stagger-2">
              To help shape the next generation of oral delivery by making innovative healthcare formats more accessible, convenient and relevant to everyday life.
            </p>
            
            <h3 className="fade-right stagger-3" style={{ marginTop: '60px' }}>Our Mission</h3>
            <p className="fade-right stagger-4">
              To develop thoughtful oral dissolving strip solutions by bringing together formulation science, technology and manufacturing excellence — creating products that make delivery simpler without compromising on purpose.
            </p>
          </div>
          
          <div className="mission-cards">
            <div className="m-card fade-left stagger-1">
              <div className="m-icon"></div>
              <div>
                <h4>SIMPLIFY</h4>
                <p>Making oral delivery easier.</p>
              </div>
            </div>
            <div className="m-card fade-left stagger-2">
              <div className="m-icon"></div>
              <div>
                <h4>INNOVATE</h4>
                <p>Exploring better ways to deliver active ingredients.</p>
              </div>
            </div>
            <div className="m-card fade-left stagger-3">
              <div className="m-icon"></div>
              <div>
                <h4>IMPACT</h4>
                <p>Creating solutions designed around real-world needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT JOURNEY */}
      <section className="about-journey">
        <div className="bg-pattern"></div>
        <div className="about-container">
          <div className="journey-header">
            <span className="cap-section-label fade-up">From Concept to Possibility</span>
            <h2 className="fade-up stagger-1">The ODISS Journey.</h2>
          </div>
          
          <div className="journey-scroll fade-up stagger-2">
            {[
              { title: "DISCOVER", desc: "Understanding the opportunity." },
              { title: "FORMULATE", desc: "Building the right formulation." },
              { title: "DEVELOP", desc: "Engineering the oral strip." },
              { title: "REFINE", desc: "Improving performance and consistency." },
              { title: "SCALE", desc: "Preparing solutions for broader markets." }
            ].map((step, index) => (
              <div key={index} className="j-card fade-right" style={{ transitionDelay: `${index * 100}ms` }}>
                <span className="j-num">0{index + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS */}
      <section className="about-apps about-container">
        <span className="cap-section-label fade-up">Built for Possibility</span>
        <h2 className="fade-up stagger-1">One Technology.<br/>Multiple Possibilities.</h2>
        
        <div className="apps-grid fade-up stagger-2">
          {[
            { name: "PHARMACEUTICALS", img: "/app_pharma.jpg" },
            { name: "NUTRACEUTICALS", img: "/app_nutra.jpg" },
            { name: "VITAMINS & SUPPLEMENTS", img: "/app_vitamins.jpg" },
            { name: "HEALTH & WELLNESS", img: "/app_health.jpg" },
            { name: "SPECIALISED ORAL DELIVERY", img: "/app_specialised.jpg" }
          ].map((app, index) => (
             <div key={index} className="app-card">
              <img src={app.img} alt={app.name} className="app-img" />
              <div className="app-overlay">
                <div className="app-content">
                  <h4>{app.name}</h4>
                  <div className="app-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. GLOBAL VISION */}
      <section className="about-global">
        <div className="bg-pattern bg-pattern-gold" style={{ opacity: 0.1 }}></div>
        <div className="about-container">
          <span className="cap-section-label fade-up" style={{ color: 'var(--about-gold)' }}>Global Vision</span>
          <h2 className="fade-up stagger-1">Innovation Without Borders.</h2>
          <p className="fade-up stagger-2" style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>
            Healthcare is evolving across borders. ODISS is being built with a global perspective — combining modern oral delivery thinking with a commitment to quality, adaptability and long-term innovation.
          </p>
          
          <div className="global-showcase fade-up stagger-3">
            <div className="global-map-glow"></div>
            <div className="global-pillars">
              {[
                { title: "SCIENCE", desc: "Evidence-led formulation and development across all product lines." },
                { title: "INNOVATION", desc: "Unlocking new possibilities in advanced oral delivery solutions." },
                { title: "PARTNERSHIPS", desc: "Building meaningful, long-term collaborations worldwide." },
                { title: "SCALABILITY", desc: "Designed with international manufacturing ambitions in mind." }
              ].map((pillar, index) => (
                <div key={index} className="pillar fade-up" style={{ transitionDelay: `${index * 150}ms` }}>
                  <h4>0{index + 1} &mdash; {pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. QUALITY SECTION */}
      <section className="about-quality about-container">
        <div className="bg-pattern"></div>
        <span className="cap-section-label fade-up">Built Around Quality</span>
        <h2 className="fade-up stagger-1">Quality You Can Trust.</h2>
        
        <div className="quality-grid">
          {[
            { title: "QUALITY FOCUSED", desc: "Every stage of development is approached with consistency and care." },
            { title: "SCIENCE DRIVEN", desc: "Our innovation begins with formulation, technology and research." },
            { title: "CONSISTENCY", desc: "Designed around repeatable processes and dependable outcomes." },
            { title: "SCALABLE INNOVATION", desc: "Building solutions with future applications and broader opportunities in mind." }
          ].map((item, index) => (
            <div key={index} className="q-card fade-left" style={{ transitionDelay: `${index * 100}ms` }}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="about-cta">
        <div className="cta-bg-glow"></div>
        <img src="/hero_strip.jpg" alt="Background strip" className="cta-strip" />
        <div className="about-container cta-content">
          <h2 className="fade-up">The Future of Oral Delivery<br/>Is Taking Shape.</h2>
          <p className="fade-up stagger-1">Explore what ODISS can make possible.</p>
          <div className="cta-buttons fade-up stagger-2">
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