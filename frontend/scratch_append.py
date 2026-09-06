import sys
import os

filepath = r"c:\Users\ksafr\ODISS_WEBSITE\frontend\src\pages\About\About.css"

new_css = """
/* =========================================================
   VISION & MISSION (PREMIUM SPLIT SCREEN)
========================================================= */
.vm-premium-section {
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #fdfcf9;
}

.vm-split-layout {
  display: flex;
  width: 100%;
  min-height: 700px;
  position: relative;
}

/* Left Panel (Dark Teal) */
.vm-left-panel {
  flex: 0 0 42%;
  background: linear-gradient(145deg, #0f2c25 0%, #061612 100%);
  position: relative;
  display: flex;
  align-items: center;
  padding: 80px 6%;
  overflow: hidden;
  z-index: 1;
}

.vm-left-bg-texture {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle at top right, rgba(29, 94, 71, 0.3) 0%, transparent 65%),
              radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.08) 0%, transparent 50%);
  filter: blur(40px);
  z-index: -1;
  animation: slowPulse 10s ease-in-out infinite alternate;
}

@keyframes slowPulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.05); opacity: 1; }
}

.vm-left-globe {
  position: absolute;
  bottom: -15%;
  left: -20%;
  width: 140%;
  opacity: 0.12;
  mix-blend-mode: screen;
  z-index: 0;
  pointer-events: none;
  filter: hue-rotate(90deg) contrast(1.1) brightness(1.2);
}

.vm-left-content {
  position: relative;
  z-index: 2;
  max-width: 400px;
}

.vm-main-heading {
  font-family: var(--font-serif);
  font-size: clamp(42px, 4.5vw, 64px);
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}

.vm-main-heading .text-white {
  color: #ffffff;
}

.vm-main-heading .text-mint {
  color: #9cdbbf;
}

.vm-divider-line {
  width: 45px;
  height: 3px;
  background: #ffffff;
  margin-bottom: 24px;
  border-radius: 2px;
  opacity: 0.9;
}

.vm-slogan {
  font-size: clamp(17px, 1.3vw, 20px);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 0.3px;
}

/* Right Panel (Light Ivory) */
.vm-right-panel {
  flex: 0 0 58%;
  background: #fdfcf9;
  position: relative;
  display: flex;
  align-items: center;
  padding: 80px 8% 80px 10%; /* Extra left padding to push cards past orb */
  z-index: 1;
}

.vm-cards-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 650px;
  position: relative;
  z-index: 2;
}

.vm-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  gap: 25px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.03), 0 4px 10px rgba(0,0,0,0.02);
  border: 1px solid rgba(220, 228, 224, 0.6);
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.vm-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 45px rgba(0,0,0,0.06), 0 10px 20px rgba(0,0,0,0.03);
}

/* Subtle corner gradients for cards */
.vision-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 200px; height: 200px;
  background: radial-gradient(circle at top left, rgba(74, 222, 128, 0.06) 0%, transparent 70%);
  pointer-events: none;
}
.mission-card::before {
  content: '';
  position: absolute;
  bottom: 0; right: 0; width: 200px; height: 200px;
  background: radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.vm-card-icon-wrapper {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  position: relative;
}

.vision-card .vm-card-icon-wrapper {
  box-shadow: 0 0 0 1px rgba(74, 222, 128, 0.4), 0 8px 20px rgba(74, 222, 128, 0.15);
}
.vision-card .vm-card-icon-wrapper::after {
  content: ''; position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px;
  border: 1px solid rgba(74, 222, 128, 0.2); border-radius: 50%;
}

.mission-card .vm-card-icon-wrapper {
  box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.4), 0 8px 20px rgba(56, 189, 248, 0.15);
}
.mission-card .vm-card-icon-wrapper::after {
  content: ''; position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px;
  border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 50%;
}

.vm-card-icon {
  width: 30px;
  height: 30px;
}
.icon-green { color: #357a53; }
.icon-blue { color: #254a85; }

.vm-card-text {
  flex: 1;
}

.vm-card-title {
  font-family: var(--font-main);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 2.5px;
  margin-bottom: 14px;
  text-transform: uppercase;
}

.title-green { color: #43875e; }
.title-blue { color: #325a99; }

.vm-card-text p {
  font-family: var(--font-main);
  font-size: 15.5px;
  line-height: 1.65;
  color: #334155;
  margin: 0;
}

/* Central Circular Visual */
.vm-center-visual {
  position: absolute;
  top: 50%;
  left: 42%; /* Align exactly with the split ratio (42%) */
  transform: translate(-50%, -50%);
  width: 260px;
  height: 260px;
  z-index: 10;
  pointer-events: none;
}

.vm-glass-orb {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 2px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 30px 60px rgba(0,0,0,0.12), inset 0 0 35px rgba(255,255,255,0.7);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Outer rings for the orb */
.vm-glass-orb::before {
  content: '';
  position: absolute;
  top: -20px; left: -20px; right: -20px; bottom: -20px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.5);
  box-shadow: 0 0 20px rgba(0,0,0,0.02);
  pointer-events: none;
}

/* Stylized CSS Leaves replacing the image */
.vm-leaf {
  width: 90px;
  height: 90px;
  position: absolute;
  border-radius: 0 100% 0 100%;
  box-shadow: inset 0 0 25px rgba(255,255,255,0.6);
  opacity: 0.9;
}

.leaf-green {
  background: linear-gradient(135deg, #a7d163 0%, #43a047 100%);
  top: 25%; left: 20%;
  transform: rotate(-10deg);
}

.leaf-blue {
  background: linear-gradient(135deg, #7ec8e3 0%, #1e88e5 100%);
  bottom: 25%; right: 20%;
  transform: rotate(35deg);
}

/* Tiny detail dots inside leaves */
.leaf-green::after, .leaf-blue::after {
  content: '';
  position: absolute;
  width: 4px; height: 4px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.6;
  top: 30%; left: 30%;
  box-shadow: 10px 10px 0 #fff, -5px 15px 0 #fff, 15px -5px 0 #fff;
}

/* Connecting Lines */
.vm-node-line {
  position: absolute;
  height: 1px;
  background: rgba(0,0,0,0.1);
  z-index: -1;
}

.line-to-vision {
  width: 140px;
  top: 25%;
  right: -100px;
  transform: rotate(-18deg);
  background: linear-gradient(90deg, rgba(74, 222, 128, 0.4), transparent);
}

.line-to-mission {
  width: 140px;
  bottom: 25%;
  right: -100px;
  transform: rotate(18deg);
  background: linear-gradient(90deg, rgba(56, 189, 248, 0.4), transparent);
}

.vm-node-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
}

.dot-vision {
  top: 18%;
  right: -45px;
  border: 2px solid #5b946d;
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.3);
}

.dot-mission {
  bottom: 18%;
  right: -45px;
  border: 2px solid #4a6fa8;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
}

/* Responsive Design for Premium VM Section */
@media (max-width: 1024px) {
  .vm-split-layout {
    flex-direction: column;
  }
  
  .vm-left-panel {
    flex: 0 0 auto;
    width: 100%;
    padding: 80px 5% 150px; /* Extra bottom padding for orb overlap */
    text-align: center;
  }
  
  .vm-left-content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .vm-right-panel {
    flex: 0 0 auto;
    width: 100%;
    padding: 120px 5% 80px;
  }
  
  .vm-cards-container {
    margin-left: 0;
    margin: 0 auto;
  }
  
  .vm-center-visual {
    left: 50%;
    top: auto;
    bottom: calc(100% - 130px); /* Position exactly between the stacked panels */
    transform: translateX(-50%);
  }
  
  .vm-node-line, .vm-node-dot {
    display: none; /* Hide connecting lines on mobile layout */
  }
}

@media (max-width: 768px) {
  .vm-main-heading {
    font-size: clamp(36px, 8vw, 42px);
  }
  .vm-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
  }
  .vm-card-title {
    justify-content: center;
    display: flex;
  }
  .vm-center-visual {
    width: 200px;
    height: 200px;
    bottom: calc(100% - 100px);
  }
  .vm-leaf {
    width: 70px;
    height: 70px;
  }
}
"""

with open(filepath, "a", encoding="utf-8") as f:
    f.write(new_css)
print("Appended CSS successfully!")
