import sys
import os

filepath = r"c:\Users\ksafr\ODISS_WEBSITE\frontend\src\pages\About\About.css"

with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

# find index of the start of previous edit
start_index = -1
for i, line in enumerate(lines):
    if "VISION & MISSION (PREMIUM SPLIT SCREEN)" in line:
        start_index = i - 1
        break

if start_index != -1:
    lines = lines[:start_index]

new_css = """
/* =========================================================
   VISION & MISSION (PREMIUM CORPORATE SPLIT SCREEN)
========================================================= */
.vm-corporate-section {
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #ffffff;
}

.vm-corporate-layout {
  display: flex;
  width: 100%;
  min-height: 700px;
  position: relative;
}

/* Left Panel (40%) */
.vm-corp-left {
  flex: 0 0 40%;
  background: #14322a; /* Refined deep muted teal/green */
  position: relative;
  display: flex;
  align-items: center;
  padding: 80px 5%;
  overflow: hidden;
  z-index: 1;
}

.vm-corp-bg-texture {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle at top right, rgba(38, 92, 75, 0.25) 0%, transparent 65%),
              radial-gradient(circle at bottom left, rgba(20, 50, 42, 0.1) 0%, transparent 50%);
  filter: blur(50px);
  z-index: -1;
  animation: gentlePulse 12s ease-in-out infinite alternate;
}

@keyframes gentlePulse {
  0% { transform: scale(1); opacity: 0.9; }
  100% { transform: scale(1.02); opacity: 1; }
}

.vm-corp-globe {
  position: absolute;
  bottom: -5%;
  left: -10%;
  width: 120%;
  opacity: 0.05; /* Extremely low contrast */
  mix-blend-mode: screen;
  z-index: 0;
  pointer-events: none;
  filter: grayscale(80%) hue-rotate(110deg) contrast(1.1);
  animation: ultraSlowPan 40s linear infinite alternate;
}

@keyframes ultraSlowPan {
  0% { transform: translateX(0) scale(1); }
  100% { transform: translateX(10px) scale(1.02); }
}

.vm-corp-content {
  position: relative;
  z-index: 2;
  max-width: 450px;
  margin: 0 auto;
}

.vm-corp-heading {
  font-family: var(--font-serif);
  font-size: clamp(40px, 4vw, 56px);
  line-height: 1.15;
  font-weight: 700;
  margin-bottom: 24px;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.vm-corp-heading .text-mint {
  color: #8dbfab; /* Subtle muted mint/teal accent */
}

.vm-corp-divider {
  width: 40px;
  height: 2px;
  background: #ffffff;
  margin-bottom: 20px;
  opacity: 0.7;
}

.vm-corp-slogan {
  font-size: clamp(16px, 1.2vw, 18px);
  color: rgba(255, 255, 255, 0.75); /* Clearly visible but subtle */
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
}

/* Right Panel (60%) */
.vm-corp-right {
  flex: 0 0 60%;
  background: #fdfcf9;
  position: relative;
  display: flex;
  align-items: center;
  padding: 80px 8%;
  z-index: 1;
}

.vm-corp-cards-container {
  display: flex;
  flex-direction: column;
  gap: 40px; /* Generous vertical spacing between cards */
  width: 100%;
  max-width: 700px;
  position: relative;
  z-index: 2;
}

/* Cards */
.vm-corp-card {
  background: #ffffff;
  border-radius: 16px; /* Clean rounded corners */
  padding: 45px 50px; /* Generous internal spacing */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 28px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.02), 0 5px 15px rgba(0,0,0,0.015); /* Soft natural shadow */
  border: 1px solid rgba(226, 232, 240, 0.4); /* Extremely subtle border */
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.vm-corp-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 45px rgba(0,0,0,0.04), 0 8px 20px rgba(0,0,0,0.02);
}

.vm-corp-card-icon-col {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.vm-corp-icon-wrapper {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

/* Accent Colors */
.icon-vision-accent {
  background: rgba(74, 155, 118, 0.08); /* Soft green/teal background */
  color: #4a9b76; /* Green/teal icon */
}

.icon-mission-accent {
  background: rgba(62, 107, 160, 0.08); /* Soft blue/teal background */
  color: #3e6ba0; /* Blue/teal icon */
}

.vm-corp-icon {
  width: 24px;
  height: 24px;
}

.vm-corp-card-text-col {
  flex: 1;
}

.vm-corp-card-title {
  font-family: var(--font-main);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-top: 5px;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.title-vision-accent { color: #4a9b76; }
.title-mission-accent { color: #3e6ba0; }

.vm-corp-card-body p {
  font-family: var(--font-main);
  font-size: 16px;
  line-height: 1.7;
  color: #475569; /* Highly readable dark gray */
  margin: 0;
  font-weight: 400;
}

/* Gentle fade-up animation overriding older chaotic ones */
.dissolve-in {
  opacity: 0;
  transform: translateY(15px); /* Soft upward motion instead of zooming */
  transition: opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1),
              transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: none; /* No blur effect for a cleaner corporate look */
}

.dissolve-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
  .vm-corporate-layout {
    flex-direction: column;
  }
  
  .vm-corp-left {
    flex: 0 0 auto;
    width: 100%;
    padding: 80px 5%;
    text-align: center;
  }
  
  .vm-corp-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .vm-corp-right {
    flex: 0 0 auto;
    width: 100%;
    padding: 80px 5%;
  }
  
  .vm-corp-cards-container {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .vm-corp-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 25px;
    gap: 20px;
  }
  
  .vm-corp-heading {
    font-size: clamp(34px, 8vw, 42px);
  }
}
"""

with open(filepath, "w", encoding="utf-8") as f:
    f.writelines(lines)
    f.write(new_css)
print("Replaced CSS successfully!")
