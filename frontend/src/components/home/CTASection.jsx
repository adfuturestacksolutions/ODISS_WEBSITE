import React, { useState } from "react";

const CTASection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: "How do ODISS ThinDiss™ strips work?",
      answer: "ODISS strips dissolve on your tongue in under 10 seconds without water. Micronutrients absorb directly through the oral mucosa into your bloodstream, delivering 95%+ bioavailability instantly.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
      alt: "Sublingual Absorption Strips",
    },
    {
      question: "Why are ODISS strips better than pills and gummies?",
      answer: "Pills lose up to 80% of nutrients in stomach acids, and gummies are loaded with sugars. ODISS strips are 100% sugar-free, eliminate swallowing discomfort, and provide fast, direct absorption.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
      alt: "Superior Bioavailability",
    },
    {
      question: "How do I use and carry ODISS strips daily?",
      answer: "Each pack comes in an ultra-slim pocket cassette. Simply slide open and place one strip on your tongue. No water or chewing required—convenient anytime, anywhere.",
      image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&auto=format&fit=crop&q=80",
      alt: "Portable Daily Routine",
    },
    {
      question: "Are ODISS strips safe, certified, and sugar-free?",
      answer: "Yes. All ODISS products are 100% sugar-free, vegan, non-GMO, gluten-free, and manufactured in GMP-certified facilities with rigorous purity testing.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80",
      alt: "Certified Lab Purity & Safety",
    },
  ];

  return (
    <section 
      style={{ 
        padding: "90px 0 100px", 
        backgroundColor: "#fcf9f2", 
        fontFamily: "'Montserrat', sans-serif",
        borderTop: "1px solid rgba(36, 36, 36, 0.06)"
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 
            style={{ 
              fontSize: "clamp(30px, 3.4vw, 44px)", 
              fontWeight: 800, 
              color: "#1e293b", 
              margin: 0,
              lineHeight: 1.25,
              letterSpacing: "-0.02em"
            }}
          >
            Frequently Asked <span style={{ color: "#f3b63f" }}>Questions</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "600px", margin: "14px auto 0", lineHeight: 1.6 }}>
            Quick answers to common questions about ODISS and ThinDiss™ oral strip technology.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  border: isOpen ? "1.5px solid #f3b63f" : "1px solid rgba(226, 232, 240, 0.8)",
                  boxShadow: isOpen ? "0 10px 28px rgba(243, 182, 63, 0.12)" : "0 2px 8px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  overflow: "hidden",
                }}
              >
                {/* Header / Question row (No Badges) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 28px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "20px",
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1e293b", margin: 0, lineHeight: 1.4, flex: 1 }}>
                    {item.question}
                  </h3>

                  {/* Toggle Arrow */}
                  <div 
                    style={{ 
                      width: "34px", 
                      height: "34px", 
                      borderRadius: "50%", 
                      background: isOpen ? "#f3b63f" : "#f8fafc", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      color: isOpen ? "#1c1917" : "#64748b",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease, background 0.3s ease",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* Collapsible Answer & Real Image */}
                {isOpen && (
                  <div 
                    style={{ 
                      padding: "0 28px 28px", 
                      borderTop: "1px solid #f8fafc",
                      display: "grid",
                      gridTemplateColumns: "1.4fr 1fr",
                      gap: "28px",
                      alignItems: "center"
                    }}
                  >
                    {/* Simplified Answer */}
                    <div>
                      <p style={{ fontSize: "16px", color: "#334155", lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                        {item.answer}
                      </p>
                    </div>

                    {/* Image */}
                    <div style={{ borderRadius: "14px", overflow: "hidden", height: "140px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)", border: "1px solid #f1f5f9" }}>
                      <img 
                        src={item.image} 
                        alt={item.alt}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CTASection;
