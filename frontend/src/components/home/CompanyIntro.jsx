import React, { useEffect, useState } from "react";

const CompanyIntro = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <section 
      style={{ 
        height: "calc(100vh - 94px)",
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
        padding: "0 40px"
      }}
    >
      <div style={{ maxWidth: "1350px", margin: "0 auto", width: "100%" }}>
        
        {/* --- TOP: Centered Heading --- */}
        <div style={{ textAlign: "center", marginBottom: "60px", opacity: animate ? 1 : 0, transform: animate ? "translateY(0)" : "translateY(-20px)", transition: "all 0.8s ease-out" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 800, color: "#1e293b", margin: 0, lineHeight: 1.2 }}>
            The Next Evolution in Nutritional Supplements
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "center" }}>
          
          {/* --- LEFT: Original Text Content --- */}
          <div style={{ opacity: animate ? 1 : 0, transform: animate ? "translateX(0)" : "translateX(-30px)", transition: "all 1s ease-out 0.2s" }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#0f172a", marginBottom: "20px", lineHeight: 1.5 }}>
              Over 45% of consumers struggle with traditional pills, including children, the elderly, and those with active lifestyles.
            </p>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "16px" }}>
              Traditional capsules and tablets often suffer from poor absorption, as their active ingredients are degraded by stomach acids before reaching the bloodstream. 
            </p>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7 }}>
              While intravenous delivery offers high absorption, it's painful and impractical. Gummies are popular but come loaded with sticky sugars. <strong style={{color: "#f3b63f"}}>ThinDiss™</strong> bridges the gap, delivering maximum bioavailability directly and effortlessly.
            </p>
          </div>

          {/* --- RIGHT: Animated SVG Visualization --- */}
          <div style={{ 
            position: "relative", 
            backgroundColor: "#fefce8", 
            borderRadius: "16px", 
            padding: "40px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            opacity: animate ? 1 : 0,
            transform: animate ? "scale(1)" : "scale(0.95)",
            transition: "all 1s ease-out 0.4s"
          }}>
            <svg width="100%" height="300" viewBox="0 0 600 300" fill="none" style={{ overflow: "visible" }}>
              {/* Grid Lines */}
              <line x1="0" y1="50" x2="600" y2="50" stroke="#e2e8f0" strokeDasharray="4 4" />
              <line x1="0" y1="150" x2="600" y2="150" stroke="#e2e8f0" strokeDasharray="4 4" />
              <line x1="0" y1="250" x2="600" y2="250" stroke="#e2e8f0" strokeDasharray="4 4" />

              {/* Curve Line (Animated) */}
              <path 
                d="M 50 80 C 120 80, 150 120, 200 130 C 300 150, 320 280, 400 270 C 480 260, 520 240, 560 230" 
                stroke="#f3b63f" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round"
                strokeDasharray="1000"
                strokeDashoffset={animate ? 0 : 1000}
                style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s" }}
              />

              {/* Data Points (Fading in sequentially) */}
              {/* Intravenous */}
              <g transform="translate(50, 80)" style={{ opacity: animate ? 1 : 0, transition: "opacity 0.5s ease-out 1s" }}>
                <circle cx="0" cy="0" r="24" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M-6 6 L6 -6 M4 -8 L8 -4 M-8 4 L-4 8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                <text x="0" y="-35" textAnchor="middle" fontSize="14" fontWeight="600" fill="#475569">Intravenous</text>
                <text x="0" y="-18" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">Very High</text>
              </g>

              {/* ThinDiss Strips */}
              <g transform="translate(200, 130)" style={{ opacity: animate ? 1 : 0, transition: "opacity 0.5s ease-out 1.3s" }}>
                <circle cx="0" cy="0" r="32" fill="#dcfce7" stroke="#86efac" strokeWidth="2" />
                <rect x="-12" y="-10" width="24" height="20" rx="2" fill="#22c55e" transform="rotate(-15)" />
                <text x="0" y="-45" textAnchor="middle" fontSize="15" fontWeight="700" fill="#2563eb">ThinDiss™</text>
                <text x="0" y="-26" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1e293b">High</text>
              </g>

              {/* Tablets */}
              <g transform="translate(400, 270)" style={{ opacity: animate ? 1 : 0, transition: "opacity 0.5s ease-out 1.7s" }}>
                <circle cx="0" cy="0" r="20" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="0" cy="0" r="8" fill="#cbd5e1" />
                <text x="0" y="-30" textAnchor="middle" fontSize="14" fontWeight="600" fill="#475569">Tablets</text>
                <text x="0" y="-15" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">Very Low</text>
              </g>

              {/* Capsules */}
              <g transform="translate(480, 255)" style={{ opacity: animate ? 1 : 0, transition: "opacity 0.5s ease-out 1.9s" }}>
                <circle cx="0" cy="0" r="20" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="-6" y="-10" width="12" height="20" rx="6" fill="#ef4444" />
                <rect x="-6" y="-10" width="12" height="10" rx="6" fill="#f87171" />
                <text x="0" y="-30" textAnchor="middle" fontSize="14" fontWeight="600" fill="#475569">Capsules</text>
                <text x="0" y="-15" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">Low</text>
              </g>

              {/* Gummies */}
              <g transform="translate(560, 235)" style={{ opacity: animate ? 1 : 0, transition: "opacity 0.5s ease-out 2.1s" }}>
                <circle cx="0" cy="0" r="20" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M-8 6 Q 0 -10 8 6 Z" fill="#ec4899" />
                <text x="0" y="-30" textAnchor="middle" fontSize="14" fontWeight="600" fill="#475569">Gummies</text>
                <text x="0" y="-15" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">Low</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
