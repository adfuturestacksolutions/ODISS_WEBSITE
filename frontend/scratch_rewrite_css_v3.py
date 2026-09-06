import sys

filepath = r"c:\Users\ksafr\ODISS_WEBSITE\frontend\src\pages\About\About.css"

with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

start_index = -1
for i, line in enumerate(lines):
    if "VISION & MISSION (PREMIUM CORPORATE SPLIT SCREEN" in line:
        start_index = i - 1
        break

if start_index != -1:
    lines = lines[:start_index]

new_css = """
/* =========================================================
   VISION & MISSION (PREMIUM CORPORATE SPLIT SCREEN - ORIGINAL FULL WIDTH)
========================================================= */
.vm-corporate-section {
  width: 100%;
  position: relative;
  /* PERFECT CONTAINMENT AT SECTION LEVEL */
  overflow: hidden;
  display: flex;
  min-height: 650px; /* Proper height to fit the cards */
  background: #fdfdfc;
}

/* Left Panel */
.vm-corp-left {
  flex: 0 0 42%;
  background: #11362d;
  background: linear-gradient(135deg, #18473c 0%, #0c2620 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 4% 80px 6%;
  z-index: 1;
}

.vm-corp-bg-texture {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle at top right, rgba(163, 217, 188, 0.15) 0%, transparent 60%);
  z-index: -1;
  pointer-events: none;
}

.vm-corp-globe {
  position: absolute;
  bottom: -5%;
  left: -15%;
  width: 120%;
  max-width: 600px;
  opacity: 0.25;
  mix-blend-mode: screen;
  z-index: 0;
  pointer-events: none;
  filter: hue-rotate(90deg) contrast(1.2);
}

.vm-corp-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 420px;
}

.vm-corp-label {
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 4px;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
  margin-bottom: 24px;
  display: block;
}

.vm-corp-heading {
  font-family: var(--font-serif);
  font-size: clamp(42px, 4.5vw, 64px);
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 24px;
  color: #ffffff;
}

.vm-corp-heading .text-mint {
  color: #a3d9bc;
}

.vm-corp-divider {
  width: 40px;
  height: 2px;
  background: #ffffff;
  margin-bottom: 24px;
}

.vm-corp-slogan {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
}

/* Right Panel */
.vm-corp-right {
  flex: 0 0 58%;
  background: #fdfdfc;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align content to the left of the right panel */
  padding: 80px 6% 80px 10%; /* Extra left padding so cards don't touch the orb */
  z-index: 1;
}

.vm-corp-cards-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 580px;
  position: relative;
  z-index: 2;
}

/* Center Visuals Overlay */
.vm-center-visuals {
  position: absolute;
  top: 50%;
  left: 42%; /* EXACTLY on the border */
  width: 0;
  height: 0;
  z-index: 10;
  pointer-events: none;
}

.vm-glass-orb {
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 220px;
  transform: translate(-50%, -50%); /* perfectly centered on the border */
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1), inset 0 0 30px rgba(255,255,255,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.vm-leaf-container {
  position: relative;
  width: 140px;
  height: 140px;
}
.vm-leaf-green, .vm-leaf-blue {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 0 100% 0 100%;
  opacity: 0.9;
}
.vm-leaf-green {
  background: linear-gradient(135deg, #a3d9bc 0%, #4a9b76 100%);
  top: 10px; left: 10px;
  transform: rotate(-15deg);
  box-shadow: inset 0 0 20px rgba(255,255,255,0.4);
}
.vm-leaf-blue {
  background: linear-gradient(135deg, #a4c8e1 0%, #4a7b9b 100%);
  bottom: 10px; right: 10px;
  transform: rotate(25deg);
  box-shadow: inset 0 0 20px rgba(255,255,255,0.4);
}

/* Cards */
.vm-corp-card {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 25px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.03), 0 5px 15px rgba(0,0,0,0.01);
  border: 1px solid rgba(240,244,242,1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vision-card {
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,252,249,1) 100%);
}
.mission-card {
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,250,255,1) 100%);
}

.vm-corp-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 45px rgba(0,0,0,0.05);
}

.vm-corp-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid;
  position: relative;
  flex-shrink: 0;
}

.icon-vision-accent {
  border-color: rgba(74, 155, 118, 0.3);
  color: #2b5e46;
}
.icon-vision-accent::after {
  content: ''; position: absolute; width: 70px; height: 70px; border-radius: 50%; border: 1px solid rgba(74, 155, 118, 0.15);
}

.icon-mission-accent {
  border-color: rgba(62, 107, 160, 0.3);
  color: #28476a;
}
.icon-mission-accent::after {
  content: ''; position: absolute; width: 70px; height: 70px; border-radius: 50%; border: 1px solid rgba(62, 107, 160, 0.15);
}

.vm-corp-icon {
  width: 28px;
  height: 28px;
}

.vm-corp-card-text-col {
  flex: 1;
}

.vm-corp-card-title {
  font-family: var(--font-main);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 3px;
  margin-top: 5px;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.title-vision-accent { color: #357556; }
.title-mission-accent { color: #355785; }

.vm-corp-card-body p {
  font-family: var(--font-main);
  font-size: 15px;
  line-height: 1.6;
  color: #475569;
  margin: 0;
}

.dissolve-in {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.dissolve-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Tablet & Mobile Responsiveness */
@media (max-width: 1024px) {
  .vm-corporate-section {
    flex-direction: column;
  }
  
  .vm-corp-left {
    flex: 0 0 auto;
    width: 100%;
    padding: 80px 40px;
    text-align: center;
  }
  
  .vm-corp-content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .vm-corp-globe {
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  
  .vm-center-visuals {
    display: none; /* Hide cross-boundary elements on mobile */
  }
  
  .vm-corp-right {
    flex: 0 0 auto;
    width: 100%;
    padding: 60px 40px;
  }
  
  .vm-corp-cards-container {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .vm-corp-left {
    padding: 60px 20px;
  }
  
  .vm-corp-right {
    padding: 40px 20px;
  }
  
  .vm-corp-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
  }
  
  .vm-corp-heading {
    font-size: 36px;
  }
}
"""

with open(filepath, "w", encoding="utf-8") as f:
    f.writelines(lines)
    f.write(new_css)
print("Replaced CSS successfully!")
