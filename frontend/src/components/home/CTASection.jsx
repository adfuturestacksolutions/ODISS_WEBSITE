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
      image: "/homepage/faq/faq-1-dissolve.jpg",
      alt: "Sublingual Absorption Strips",
    },
    {
      question: "Why are ODISS strips better than pills and gummies?",
      answer: "Pills lose up to 80% of nutrients in stomach acids, and gummies are loaded with sugars. ODISS strips are 100% sugar-free, eliminate swallowing discomfort, and provide fast, direct absorption.",
      image: "/homepage/faq/faq-2-comparison.jpg",
      alt: "Superior Bioavailability",
    },
    {
      question: "How do I use and carry ODISS strips daily?",
      answer: "Each pack comes in an ultra-slim pocket cassette. Simply slide open and place one strip on your tongue. No water or chewing required—convenient anytime, anywhere.",
      image: "/homepage/faq/faq-3-portable.jpg",
      alt: "Portable Daily Routine",
    },
    {
      question: "Are ODISS strips safe, certified, and sugar-free?",
      answer: "Yes. All ODISS products are 100% sugar-free, vegan, non-GMO, gluten-free, and manufactured in GMP-certified facilities with rigorous purity testing.",
      image: "/homepage/faq/faq-4-lab-safety.jpg",
      alt: "Certified Lab Purity & Safety",
    },
    {
      question: "How fast do I feel the effects after taking a strip?",
      answer: "Because sublingual absorption bypasses the 45-minute digestive delay, active compounds enter your bloodstream within minutes, delivering rapid and noticeable benefits.",
      image: "/homepage/faq/faq-5-fast-acting.jpg",
      alt: "Fast-Acting Direct Absorption",
    },
    {
      question: "Can I take different ODISS strips throughout the day?",
      answer: "Yes. You can stack different formulations—such as Breath Freshener in the morning, Energizz during work, and Silenzz before bedtime—to support your 24-hour lifestyle.",
      image: "/homepage/faq/faq-6-daily-stack.jpg",
      alt: "Daily Customized Supplement Stack",
    },
  ];

  return (
    <section
      className="faq-section"
      style={{
        padding: "55px 0 60px",
        backgroundColor: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
        borderTop: "1px solid rgba(36, 36, 36, 0.06)"
      }}
    >
      <style>{`
        .faq-answer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 20px;
          align-items: center;
          padding: 0 22px 20px;
          border-top: 1px solid #f8fafc;
        }
        @media (max-width: 640px) {
          .faq-section {
            padding: 45px 0 50px !important;
          }
          .faq-answer-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            padding: 0 16px 18px !important;
          }
          .faq-answer-img {
            height: 140px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "920px", margin: "0 auto", padding: "0 20px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 700,
              color: "#1e293b",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: "-0.02em"
            }}
          >
            Frequently Asked <span style={{ color: "#f3b63f" }}>Questions</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "620px", margin: "8px auto 0", lineHeight: 1.6 }}>
            Quick answers to common questions about ODISS and ThinDiss™ oral strip technology.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: isOpen ? "1.5px solid #f3b63f" : "1px solid rgba(226, 232, 240, 0.9)",
                  boxShadow: isOpen ? "0 8px 24px rgba(243, 182, 63, 0.12)" : "0 2px 8px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.25s ease",
                  overflow: "hidden",
                }}
              >
                {/* Header / Question row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "14px",
                  }}
                >
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.35, flex: 1 }}>
                    {item.question}
                  </h3>

                  {/* Toggle Arrow */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isOpen ? "#f3b63f" : "#f8fafc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "#1c1917" : "#64748b",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease, background 0.25s ease",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* Collapsible Answer & Real Image */}
                {isOpen && (
                  <div className="faq-answer-grid">
                    {/* Simplified Answer */}
                    <div>
                      <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
                        {item.answer}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="faq-answer-img" style={{ borderRadius: "12px", overflow: "hidden", height: "115px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", border: "1px solid #f1f5f9" }}>
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

