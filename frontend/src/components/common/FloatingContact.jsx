import React, { useState } from "react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  // Contact configurations (can be easily customized)
  const whatsappNumber = "919876543210"; // Placeholder business WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello ODISS! I would like to inquire about ThinDiss™ mouth melting strips.");
  const emailAddress = "info@odiss.in";
  const emailSubject = encodeURIComponent("Inquiry regarding ODISS ThinDiss™ Technology");

  return (
    <aside
      aria-label="Quick Contact Options"
      className="floating-contact-container"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "14px",
        fontFamily: "'Montserrat', sans-serif",
        pointerEvents: "auto",
      }}
    >
      {/* Dynamic Keyframe Animations */}
      <style>{`
        @keyframes floatPulseRing {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.25); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        @keyframes floatIdleBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(16px) scale(0.85); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .float-action-btn {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .float-action-btn:hover {
          transform: scale(1.1) translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24), 0 4px 12px rgba(0, 0, 0, 0.12);
        }
        @media (max-width: 480px) {
          .floating-contact-container {
            bottom: 18px !important;
            right: 18px !important;
            gap: 10px !important;
          }
          .float-action-mail {
            width: 46px !important;
            height: 46px !important;
          }
          .float-action-whatsapp {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>

      {/* STACKED ACTION BUTTONS: WhatsApp & Mail (Always visible or toggleable) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "flex-end",
        }}
      >
        {/* =========================================
            1. MAIL FLOATING BUTTON
        ========================================= */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Tooltip Label */}
          <div
            style={{
              opacity: hoveredBtn === "mail" ? 1 : 0,
              visibility: hoveredBtn === "mail" ? "visible" : "hidden",
              transform: hoveredBtn === "mail" ? "translateX(0)" : "translateX(8px)",
              transition: "all 0.25s ease",
              backgroundColor: "#1e293b",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: "20px",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              pointerEvents: "none",
            }}
          >
            Email Us
          </div>

          <a
            href={`mailto:${emailAddress}?subject=${emailSubject}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email to ODISS"
            className="float-action-btn float-action-mail"
            onMouseEnter={() => setHoveredBtn("mail")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "2px solid #f3b63f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d99b2f",
              textDecoration: "none",
              position: "relative",
              animation: "floatIdleBounce 4s ease-in-out infinite alternate",
            }}
          >
            {/* Mail SVG Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* =========================================
            2. WHATSAPP FLOATING BUTTON
        ========================================= */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Tooltip Label */}
          <div
            style={{
              opacity: hoveredBtn === "whatsapp" ? 1 : 0,
              visibility: hoveredBtn === "whatsapp" ? "visible" : "hidden",
              transform: hoveredBtn === "whatsapp" ? "translateX(0)" : "translateX(8px)",
              transition: "all 0.25s ease",
              backgroundColor: "#1e293b",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: "20px",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              pointerEvents: "none",
            }}
          >
            Chat on WhatsApp
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with ODISS on WhatsApp"
            className="float-action-btn float-action-whatsapp"
            onMouseEnter={() => setHoveredBtn("whatsapp")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              textDecoration: "none",
              position: "relative",
              animation: "floatIdleBounce 3.6s ease-in-out infinite alternate",
            }}
          >
            {/* Pulse Ring Behind WhatsApp */}
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "50%",
                backgroundColor: "#25D366",
                animation: "floatPulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                zIndex: -1,
              }}
            />

            {/* Official WhatsApp SVG Icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.834.496 3.616 1.433 5.176L2 22l4.922-1.391a10.02 10.02 0 0 0 5.109 1.422h.005c5.531 0 10.027-4.496 10.027-10.027A10.007 10.007 0 0 0 12.031 2zm0 18.336h-.004a8.337 8.337 0 0 1-4.246-1.162l-.305-.181-3.156.892.894-3.08-.198-.316a8.318 8.318 0 0 1-1.275-4.458c0-4.604 3.746-8.35 8.355-8.35 2.23 0 4.328.869 5.906 2.447a8.312 8.312 0 0 1 2.445 5.906c0 4.608-3.746 8.352-8.422 8.352zm4.582-6.246c-.251-.125-1.488-.734-1.719-.818-.23-.084-.398-.125-.566.125-.168.251-.652.818-.799.986-.147.168-.293.188-.545.063-.251-.125-1.06-.391-2.02-1.246-.746-.666-1.25-1.488-1.396-1.74-.147-.251-.016-.387.11-.512.113-.113.251-.293.377-.44.125-.147.168-.251.251-.418.084-.168.042-.314-.021-.44-.063-.125-.566-1.365-.777-1.871-.205-.494-.413-.427-.566-.435-.147-.008-.314-.01-.482-.01-.168 0-.44.063-.67.314-.23.251-.88.861-.88 2.1 0 1.238.901 2.436 1.027 2.604.125.168 1.774 2.709 4.3 3.799.601.259 1.07.414 1.436.53.604.192 1.153.165 1.587.1.484-.072 1.488-.608 1.697-1.196.21-.587.21-1.09.147-1.196-.063-.105-.23-.168-.482-.293z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default FloatingContact;
