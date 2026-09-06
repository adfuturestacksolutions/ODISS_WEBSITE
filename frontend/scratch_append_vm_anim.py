import sys

filepath = r"c:\Users\ksafr\ODISS_WEBSITE\frontend\src\pages\About\About.css"

with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_css = """

/* --------------------------------------------------------------------------
   Animations for Vision & Mission Center Visuals
-------------------------------------------------------------------------- */
.orbit-path-green, .orbit-path-blue {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: drawOrbitPath 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  animation-delay: 0.8s;
}

@keyframes drawOrbitPath {
  to {
    stroke-dashoffset: 0;
  }
}

.orbit-dot-green, .orbit-dot-blue {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  transform: scale(0.5);
  animation: popOrbitDot 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: 2.2s;
}

@keyframes popOrbitDot {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.vm-glass-orb {
  animation: floatOrb 6s ease-in-out infinite;
}

@keyframes floatOrb {
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, calc(-50% - 10px));
  }
}

.vm-leaf-green {
  animation: leafFloat1 8s ease-in-out infinite;
}

.vm-leaf-blue {
  animation: leafFloat2 7s ease-in-out infinite reverse;
}

@keyframes leafFloat1 {
  0%, 100% { transform: rotate(-15deg) translateY(0); }
  50% { transform: rotate(-10deg) translateY(-5px); }
}

@keyframes leafFloat2 {
  0%, 100% { transform: rotate(25deg) translateY(0); }
  50% { transform: rotate(20deg) translateY(-5px); }
}

"""

with open(filepath, "a", encoding="utf-8") as f:
    f.write(new_css)
print("Appended animations CSS successfully!")
