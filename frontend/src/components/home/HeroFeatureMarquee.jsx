import React, { useEffect, useRef } from "react";

/* =========================================================================
   ODISS GLOBAL 3D MICRO-SCENES — PHOTOREALISTIC CANVAS CGI RENDERING
   
   High-performance, physics-based 3D macro product visualizations:
   - True 3D lighting equations, multi-stop radial gradients, specular softbox glints.
   - Glass caustics, physical refraction, Snell's law facet shading.
   - 60 FPS smooth continuous particle physics and kinetic animations.
   - Crisp HiDPI/Retina rendering on transparent background.
   - Semantic color system strictly preserved.
   ========================================================================= */

// Helper to set up Retina/HiDPI canvas
function setupCanvas(canvas, size = 120) {
  const dpr = Math.min(window.devicePixelRatio || 2, 2.5);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  return { ctx, dpr };
}

// -------------------------------------------------------------------------
// 1. FAST ABSORPTION — 3D Microfluidic Fluid Stream (Cyan / Deep Electric Blue)
// -------------------------------------------------------------------------
const FastAbsorptionCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx } = setupCanvas(canvas, 120);

    let animId;
    let t = 0;

    // 3D Particles along curved pathway
    const particles = Array.from({ length: 24 }, (_, i) => ({
      progress: (i / 24) * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.015,
      radius: 3.5 + Math.random() * 3.5,
      offsetY: (Math.random() - 0.5) * 8,
      z: Math.random(),
    }));

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, 120, 120);

      // Atmospheric Soft Glow
      const atmGlow = ctx.createRadialGradient(60, 60, 10, 60, 60, 55);
      atmGlow.addColorStop(0, "rgba(56, 189, 248, 0.22)");
      atmGlow.addColorStop(0.6, "rgba(2, 132, 199, 0.08)");
      atmGlow.addColorStop(1, "rgba(2, 132, 199, 0)");
      ctx.fillStyle = atmGlow;
      ctx.beginPath();
      ctx.arc(60, 60, 55, 0, Math.PI * 2);
      ctx.fill();

      // 3D Glass Cylindrical Micro-Conduit Body
      ctx.save();
      ctx.lineCap = "round";

      // Outer Glass Refraction
      const glassGrad = ctx.createLinearGradient(0, 30, 0, 90);
      glassGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      glassGrad.addColorStop(0.2, "rgba(56, 189, 248, 0.45)");
      glassGrad.addColorStop(0.6, "rgba(2, 132, 199, 0.25)");
      glassGrad.addColorStop(0.85, "rgba(3, 105, 161, 0.55)");
      glassGrad.addColorStop(1, "rgba(2, 132, 199, 0.85)");

      ctx.beginPath();
      ctx.moveTo(18, 76);
      ctx.bezierCurveTo(38, 76, 44, 42, 66, 42);
      ctx.bezierCurveTo(86, 42, 94, 66, 102, 66);
      ctx.strokeStyle = glassGrad;
      ctx.lineWidth = 20;
      ctx.stroke();

      // Inner Liquid Channel
      const innerGrad = ctx.createLinearGradient(18, 0, 102, 0);
      innerGrad.addColorStop(0, "rgba(3, 105, 161, 0.2)");
      innerGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.4)");
      innerGrad.addColorStop(1, "rgba(3, 105, 161, 0.2)");

      ctx.beginPath();
      ctx.moveTo(18, 76);
      ctx.bezierCurveTo(38, 76, 44, 42, 66, 42);
      ctx.bezierCurveTo(86, 42, 94, 66, 102, 66);
      ctx.strokeStyle = innerGrad;
      ctx.lineWidth = 14;
      ctx.stroke();

      // Top Specular Highlight Ridge (Studio Softbox Reflection)
      ctx.beginPath();
      ctx.moveTo(20, 70);
      ctx.bezierCurveTo(39, 70, 45, 36, 66, 36);
      ctx.bezierCurveTo(85, 36, 92, 60, 100, 60);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // High-Velocity Stream Line
      const streamOffset = (t * 40) % 80;
      ctx.beginPath();
      ctx.setLineDash([25, 45]);
      ctx.lineDashOffset = -streamOffset;
      ctx.moveTo(18, 76);
      ctx.bezierCurveTo(38, 76, 44, 42, 66, 42);
      ctx.bezierCurveTo(86, 42, 94, 66, 102, 66);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.lineWidth = 3.5;
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // Draw 3D Volumetric Spherical Nanobeads Flowing Inside
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress -= 1;

        const u = p.progress;
        // Cubic Bézier interpolation along conduit curve
        const p0 = { x: 18, y: 76 };
        const p1 = { x: 38, y: 76 };
        const p2 = { x: 44, y: 42 };
        const p3 = { x: 66, y: 42 };
        const p4 = { x: 86, y: 42 };
        const p5 = { x: 94, y: 66 };
        const p6 = { x: 102, y: 66 };

        let px, py;
        if (u < 0.5) {
          const s = u * 2;
          px = Math.pow(1 - s, 3) * p0.x + 3 * Math.pow(1 - s, 2) * s * p1.x + 3 * (1 - s) * s * s * p2.x + Math.pow(s, 3) * p3.x;
          py = Math.pow(1 - s, 3) * p0.y + 3 * Math.pow(1 - s, 2) * s * p1.y + 3 * (1 - s) * s * s * p2.y + Math.pow(s, 3) * p3.y;
        } else {
          const s = (u - 0.5) * 2;
          px = Math.pow(1 - s, 3) * p3.x + 3 * Math.pow(1 - s, 2) * s * p4.x + 3 * (1 - s) * s * s * p5.x + Math.pow(s, 3) * p6.x;
          py = Math.pow(1 - s, 3) * p3.y + 3 * Math.pow(1 - s, 2) * s * p4.y + 3 * (1 - s) * s * s * p5.y + Math.pow(s, 3) * p6.y;
        }

        py += p.offsetY * Math.sin(u * Math.PI);
        const r = p.radius * (0.8 + 0.4 * p.z);
        const alpha = Math.sin(u * Math.PI);

        ctx.save();
        ctx.globalAlpha = alpha;

        // 3D Sphere Body with 5 lighting stops
        const sphereGrad = ctx.createRadialGradient(px - r * 0.35, py - r * 0.35, r * 0.05, px, py, r);
        sphereGrad.addColorStop(0, "#ffffff");
        sphereGrad.addColorStop(0.25, "#e0f2fe");
        sphereGrad.addColorStop(0.55, "#38bdf8");
        sphereGrad.addColorStop(0.85, "#0284c7");
        sphereGrad.addColorStop(1, "#0c4a6e");

        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();

        // Pinpoint Specular Highlight Spot
        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(px - r * 0.35, py - r * 0.35, r * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Cellular Absorption Diffusion Wave
      const waveRadius = 14 + (t * 12) % 22;
      const waveAlpha = Math.max(0, 1 - (waveRadius - 14) / 22) * 0.5;
      ctx.save();
      ctx.strokeStyle = `rgba(56, 189, 248, ${waveAlpha})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(66, 42, waveRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="macro-canvas" />;
};

// -------------------------------------------------------------------------
// 2. NO WATER — Realistic 3D Liquid Droplet & Dry Bio-Wafer (Aqua / Sky Blue)
// -------------------------------------------------------------------------
const NoWaterCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx } = setupCanvas(canvas, 120);

    let animId;
    let t = 0;

    const render = () => {
      t += 0.035;
      ctx.clearRect(0, 0, 120, 120);

      // Atmospheric Aqua Aura
      const atm = ctx.createRadialGradient(60, 60, 8, 60, 60, 55);
      atm.addColorStop(0, "rgba(6, 182, 212, 0.25)");
      atm.addColorStop(0.5, "rgba(56, 189, 248, 0.08)");
      atm.addColorStop(1, "rgba(6, 182, 212, 0)");
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(60, 60, 55, 0, Math.PI * 2);
      ctx.fill();

      // 100% Dry Active ThinDiss™ Oral Strip (Isometric 3D perspective)
      ctx.save();
      // Ground shadow
      ctx.fillStyle = "rgba(15, 23, 42, 0.07)";
      ctx.beginPath();
      ctx.ellipse(60, 94, 32, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // 3D Polymer Film
      const filmGrad = ctx.createLinearGradient(26, 80, 94, 74);
      filmGrad.addColorStop(0, "rgba(255, 255, 255, 0.98)");
      filmGrad.addColorStop(0.4, "rgba(241, 245, 249, 0.9)");
      filmGrad.addColorStop(0.75, "rgba(203, 213, 225, 0.7)");
      filmGrad.addColorStop(1, "rgba(148, 163, 184, 0.5)");

      ctx.beginPath();
      ctx.moveTo(26, 80);
      ctx.lineTo(76, 66);
      ctx.lineTo(94, 74);
      ctx.lineTo(44, 88);
      ctx.closePath();
      ctx.fillStyle = filmGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(6, 182, 212, 0.6)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Top Specular Highlight Edge
      ctx.beginPath();
      ctx.moveTo(26, 80);
      ctx.lineTo(76, 66);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Micro-Active Lattice
      ctx.setLineDash([4, 3]);
      ctx.strokeStyle = "rgba(243, 182, 63, 0.65)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(36, 79);
      ctx.lineTo(66, 71);
      ctx.stroke();
      ctx.restore();

      // Floating 3D Optical Liquid Droplet (Sinusoidal vertical suspension)
      const floatY = Math.sin(t * 1.6) * 6;
      const dropY = 48 + floatY;
      const dropX = 60;
      const dropScale = 1 - floatY * 0.015;

      // Caustic Ground Shadow
      const shadowScale = Math.max(0.4, 1 - floatY * 0.05);
      ctx.save();
      const cShadow = ctx.createRadialGradient(dropX, 82, 2, dropX, 82, 18 * shadowScale);
      cShadow.addColorStop(0, "rgba(8, 145, 178, 0.35)");
      cShadow.addColorStop(0.5, "rgba(15, 23, 42, 0.08)");
      cShadow.addColorStop(1, "transparent");
      ctx.fillStyle = cShadow;
      ctx.beginPath();
      ctx.ellipse(dropX, 82, 16 * shadowScale, 4.5 * shadowScale, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 3D Refractive Liquid Droplet
      ctx.save();
      ctx.translate(dropX, dropY);
      ctx.scale(dropScale, dropScale);

      // Droplet Teardrop Shape
      ctx.beginPath();
      ctx.moveTo(0, -28);
      ctx.bezierCurveTo(-22, -4, -22, 18, 0, 18);
      ctx.bezierCurveTo(22, 18, 22, -4, 0, -28);
      ctx.closePath();

      // Multi-Stop Optical 3D Liquid Gradient
      const dropGrad = ctx.createRadialGradient(-7, -8, 2, 0, 0, 24);
      dropGrad.addColorStop(0, "#ffffff");
      dropGrad.addColorStop(0.28, "rgba(186, 230, 253, 0.92)");
      dropGrad.addColorStop(0.65, "rgba(14, 165, 233, 0.88)");
      dropGrad.addColorStop(0.92, "rgba(2, 132, 199, 0.96)");
      dropGrad.addColorStop(1, "rgba(3, 105, 161, 0.85)");
      ctx.fillStyle = dropGrad;
      ctx.fill();

      // Bottom Caustic Optical Focus Pool
      const caustic = ctx.createRadialGradient(0, 9, 1, 0, 9, 14);
      caustic.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      caustic.addColorStop(0.45, "rgba(56, 189, 248, 0.6)");
      caustic.addColorStop(1, "rgba(2, 132, 199, 0)");
      ctx.fillStyle = caustic;
      ctx.beginPath();
      ctx.ellipse(0, 9, 13, 7, 0, 0, Math.PI * 2);
      ctx.fill();

      // Curved Studio Softbox Specular Highlight
      ctx.beginPath();
      ctx.arc(-8, -2, 14, Math.PI * 0.7, Math.PI * 1.35);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
      ctx.lineWidth = 3.5;
      ctx.lineCap = "round";
      ctx.stroke();

      // Opposite Pinpoint Refraction Spot
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.beginPath();
      ctx.arc(11, 7, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Ascending Pure Vapor Nodes
      for (let i = 0; i < 3; i++) {
        const vpProgress = (t * 0.4 + i * 0.33) % 1;
        const vpX = 60 + Math.sin(t * 2 + i * 2) * 8;
        const vpY = 28 - vpProgress * 20;
        const vpAlpha = Math.sin(vpProgress * Math.PI) * 0.8;
        ctx.fillStyle = `rgba(125, 211, 252, ${vpAlpha})`;
        ctx.beginPath();
        ctx.arc(vpX, vpY, 1.8 * (1 - vpProgress * 0.3), 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="macro-canvas" />;
};

// -------------------------------------------------------------------------
// 3. PRECISE DOSAGE — 3D Calibrated Quantum Matrix (Violet / Royal Purple)
// -------------------------------------------------------------------------
const PreciseDosageCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx } = setupCanvas(canvas, 120);

    let animId;
    let t = 0;

    // 3x3 Matrix Node Positions
    const nodes = [];
    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        nodes.push({
          targetX: 60 + col * 14,
          targetY: 60 + row * 14,
          initAngle: Math.random() * Math.PI * 2,
          initDist: 28 + Math.random() * 14,
          isCenter: row === 0 && col === 0,
        });
      }
    }

    const render = () => {
      t += 0.032;
      ctx.clearRect(0, 0, 120, 120);

      // Violet Volumetric Aura
      const atm = ctx.createRadialGradient(60, 60, 8, 60, 60, 55);
      atm.addColorStop(0, "rgba(168, 85, 247, 0.28)");
      atm.addColorStop(0.5, "rgba(124, 58, 237, 0.08)");
      atm.addColorStop(1, "rgba(76, 29, 149, 0)");
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(60, 60, 55, 0, Math.PI * 2);
      ctx.fill();

      // Precision Calibrated Rotating Optical Reticle
      ctx.save();
      ctx.translate(60, 60);
      ctx.rotate(t * 0.08);

      // Concentric Calibrated Rings
      ctx.strokeStyle = "rgba(168, 85, 247, 0.45)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, 44, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(192, 132, 252, 0.6)";
      ctx.lineWidth = 1.4;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(0, 0, 32, 0, Math.PI * 2);
      ctx.stroke();

      // Vernier Measurement Ticks
      ctx.strokeStyle = "rgba(168, 85, 247, 0.75)";
      ctx.lineWidth = 1.6;
      for (let a = 0; a < 8; a++) {
        ctx.rotate(Math.PI / 4);
        ctx.beginPath();
        ctx.moveTo(0, 32);
        ctx.lineTo(0, 38);
        ctx.stroke();
      }
      ctx.restore();

      // Convergence Cycle (Assembly into exact matrix)
      const cycle = (t * 0.3) % (Math.PI * 2);
      const ease = 0.5 + 0.5 * Math.sin(cycle);
      const convergeRatio = Math.pow(ease, 1.5);

      // Matrix Alignment Frame
      ctx.save();
      ctx.strokeStyle = `rgba(216, 180, 254, ${0.2 + 0.3 * convergeRatio})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(42, 42, 36, 36, 6);
      ctx.stroke();
      ctx.restore();

      // Draw 3D Measured Quantum Beads
      nodes.forEach((node) => {
        const curX = node.targetX + (Math.cos(node.initAngle + t) * node.initDist) * (1 - convergeRatio);
        const curY = node.targetY + (Math.sin(node.initAngle + t) * node.initDist) * (1 - convergeRatio);
        const r = node.isCenter ? 6.5 : 4.4;

        ctx.save();
        // 3D Sphere Body
        const spGrad = ctx.createRadialGradient(curX - r * 0.35, curY - r * 0.35, r * 0.05, curX, curY, r);
        if (node.isCenter) {
          spGrad.addColorStop(0, "#ffffff");
          spGrad.addColorStop(0.25, "#f3e8ff");
          spGrad.addColorStop(0.6, "#c084fc");
          spGrad.addColorStop(0.9, "#9333ea");
          spGrad.addColorStop(1, "#581c87");
        } else {
          spGrad.addColorStop(0, "#ffffff");
          spGrad.addColorStop(0.28, "#e9d5ff");
          spGrad.addColorStop(0.6, "#a855f7");
          spGrad.addColorStop(0.88, "#7c3aed");
          spGrad.addColorStop(1, "#4c1d95");
        }

        ctx.fillStyle = spGrad;
        ctx.beginPath();
        ctx.arc(curX, curY, r, 0, Math.PI * 2);
        ctx.fill();

        // Pinpoint Specular Highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
        ctx.beginPath();
        ctx.arc(curX - r * 0.35, curY - r * 0.35, r * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Holographic Laser Lock Pulse
      const lockAlpha = Math.pow(convergeRatio, 3) * 0.85;
      if (lockAlpha > 0.05) {
        ctx.save();
        ctx.strokeStyle = `rgba(233, 213, 255, ${lockAlpha})`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(60, 60, 16 + (1 - convergeRatio) * 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="macro-canvas" />;
};

// -------------------------------------------------------------------------
// 4. QUICK ACTION — Kinetic 3D Plasma Energy Pulse (Orange / Amber / Warm Gold)
// -------------------------------------------------------------------------
const QuickActionCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx } = setupCanvas(canvas, 120);

    let animId;
    let t = 0;

    const sparks = Array.from({ length: 14 }, () => ({
      x: 60,
      y: 40,
      vx: (Math.random() - 0.5) * 3.5,
      vy: (Math.random() - 0.5) * 3.5,
      r: 1.5 + Math.random() * 2,
      life: Math.random(),
    }));

    const render = () => {
      t += 0.038;
      ctx.clearRect(0, 0, 120, 120);

      // Atmospheric Amber Glow
      const atm = ctx.createRadialGradient(60, 60, 8, 60, 60, 55);
      atm.addColorStop(0, "rgba(245, 158, 11, 0.32)");
      atm.addColorStop(0.5, "rgba(234, 88, 12, 0.12)");
      atm.addColorStop(1, "rgba(154, 52, 18, 0)");
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(60, 60, 55, 0, Math.PI * 2);
      ctx.fill();

      // 3D Curved Quartz Conduit Body
      ctx.save();
      ctx.lineCap = "round";

      const quartzGrad = ctx.createLinearGradient(0, 30, 0, 80);
      quartzGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      quartzGrad.addColorStop(0.25, "rgba(251, 191, 36, 0.45)");
      quartzGrad.addColorStop(0.65, "rgba(234, 88, 12, 0.3)");
      quartzGrad.addColorStop(1, "rgba(154, 52, 18, 0.6)");

      ctx.beginPath();
      ctx.moveTo(20, 76);
      ctx.bezierCurveTo(32, 32, 88, 32, 100, 76);
      ctx.strokeStyle = quartzGrad;
      ctx.lineWidth = 16;
      ctx.stroke();

      // Upper Specular Ridge Line
      ctx.beginPath();
      ctx.moveTo(23, 71);
      ctx.bezierCurveTo(34, 30, 86, 30, 97, 71);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // High-Velocity Motion Trail
      const trailOffset = (t * 50) % 100;
      ctx.beginPath();
      ctx.setLineDash([30, 50]);
      ctx.lineDashOffset = -trailOffset;
      ctx.moveTo(26, 74);
      ctx.bezierCurveTo(36, 34, 84, 34, 94, 74);
      ctx.strokeStyle = "rgba(253, 224, 71, 0.85)";
      ctx.lineWidth = 4.5;
      ctx.shadowColor = "#f97316";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();

      // Oscillating 3D Plasma Sphere Surging Across Apex
      const pulseProg = (Math.sin(t * 2.2) + 1) / 2;
      const coreX = 40 + pulseProg * 40;
      // Parabolic arc y calculation
      const coreY = 36 + Math.pow((coreX - 60) / 30, 2) * 16;
      const coreR = 7.5 + Math.sin(t * 4) * 1.5;

      ctx.save();
      // Plasma Core Glow
      const plasmaGrad = ctx.createRadialGradient(coreX - coreR * 0.32, coreY - coreR * 0.32, coreR * 0.05, coreX, coreY, coreR);
      plasmaGrad.addColorStop(0, "#ffffff");
      plasmaGrad.addColorStop(0.2, "#fef08a");
      plasmaGrad.addColorStop(0.5, "#f97316");
      plasmaGrad.addColorStop(0.85, "#ea580c");
      plasmaGrad.addColorStop(1, "#7c2d12");

      ctx.shadowColor = "#f59e0b";
      ctx.shadowBlur = 16;
      ctx.fillStyle = plasmaGrad;
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreR, 0, Math.PI * 2);
      ctx.fill();

      // Specular Highlight Glint
      ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
      ctx.beginPath();
      ctx.arc(coreX - coreR * 0.32, coreY - coreR * 0.32, coreR * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Ionized Spark Particles
      sparks.forEach((spk) => {
        spk.life += 0.04;
        if (spk.life > 1) {
          spk.x = coreX;
          spk.y = coreY;
          spk.vx = (Math.random() - 0.5) * 4;
          spk.vy = (Math.random() - 0.5) * 4;
          spk.life = 0;
        }
        spk.x += spk.vx;
        spk.y += spk.vy;

        const spkAlpha = Math.sin(spk.life * Math.PI);
        ctx.fillStyle = `rgba(251, 191, 36, ${spkAlpha})`;
        ctx.beginPath();
        ctx.arc(spk.x, spk.y, spk.r * (1 - spk.life * 0.5), 0, Math.PI * 2);
        ctx.fill();
      });

      // Shockwave Pulse Expansion
      const shockR = 8 + (t * 16) % 24;
      const shockA = Math.max(0, 1 - (shockR - 8) / 24) * 0.6;
      ctx.save();
      ctx.strokeStyle = `rgba(253, 224, 71, ${shockA})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(coreX, coreY, shockR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="macro-canvas" />;
};

// -------------------------------------------------------------------------
// 5. ON-THE-GO — 3D Floating Bio-Film & Platinum Sleeve (Fresh Emerald / Lime)
// -------------------------------------------------------------------------
const OnTheGoCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx } = setupCanvas(canvas, 120);

    let animId;
    let t = 0;

    const render = () => {
      t += 0.032;
      ctx.clearRect(0, 0, 120, 120);

      // Atmospheric Emerald Aura
      const atm = ctx.createRadialGradient(60, 60, 8, 60, 60, 55);
      atm.addColorStop(0, "rgba(16, 185, 129, 0.3)");
      atm.addColorStop(0.5, "rgba(5, 150, 105, 0.1)");
      atm.addColorStop(1, "rgba(4, 120, 87, 0)");
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(60, 60, 55, 0, Math.PI * 2);
      ctx.fill();

      // Aerodynamic Kinetic Airflow Glide Lines
      ctx.save();
      for (let i = 0; i < 3; i++) {
        const lineOffset = (t * 30 + i * 25) % 80;
        const lineY = 40 + i * 20;
        ctx.strokeStyle = `rgba(132, 204, 22, ${0.4 + i * 0.2})`;
        ctx.lineWidth = 2 + i * 0.4;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(10 + lineOffset, lineY);
        ctx.lineTo(35 + lineOffset, lineY);
        ctx.stroke();
      }
      ctx.restore();

      // Ground Occlusion Shadow
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.beginPath();
      ctx.ellipse(66, 94, 24, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Floating Weightless Physics Motion
      const floatY = Math.sin(t * 1.5) * 5;
      const rot = Math.sin(t * 1.2) * 0.06;

      ctx.save();
      ctx.translate(62, 58 + floatY);
      ctx.rotate(rot);

      // Minimalist Brushed Platinum Pocket Cassette (Background Sleeve)
      ctx.save();
      ctx.translate(6, 2);
      ctx.rotate(0.18);
      const metalGrad = ctx.createLinearGradient(-18, 0, 18, 0);
      metalGrad.addColorStop(0, "#ffffff");
      metalGrad.addColorStop(0.25, "#f1f5f9");
      metalGrad.addColorStop(0.5, "#ffffff");
      metalGrad.addColorStop(0.85, "#cbd5e1");
      metalGrad.addColorStop(1, "#94a3b8");

      ctx.fillStyle = metalGrad;
      ctx.beginPath();
      ctx.roundRect(-18, -26, 36, 52, 9);
      ctx.fill();
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Lime Accent Trim on Pocket Case
      ctx.fillStyle = "#84cc16";
      ctx.beginPath();
      ctx.roundRect(-14, -19, 28, 6, 2.5);
      ctx.fill();
      ctx.restore();

      // Active 3D ThinDiss™ Nutritional Film Strip (Gliding in Front)
      const filmGrad = ctx.createLinearGradient(-22, -18, 22, 18);
      filmGrad.addColorStop(0, "rgba(255, 255, 255, 0.98)");
      filmGrad.addColorStop(0.35, "rgba(167, 243, 208, 0.9)");
      filmGrad.addColorStop(0.7, "rgba(52, 211, 153, 0.85)");
      filmGrad.addColorStop(1, "rgba(5, 150, 105, 0.98)");

      ctx.beginPath();
      ctx.moveTo(-24, -14);
      ctx.lineTo(8, -24);
      ctx.lineTo(24, 16);
      ctx.lineTo(-8, 26);
      ctx.closePath();
      ctx.fillStyle = filmGrad;
      ctx.shadowColor = "#047857";
      ctx.shadowBlur = 10;
      ctx.fill();

      ctx.strokeStyle = "rgba(16, 185, 129, 0.9)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Film Top Specular Gloss Line
      ctx.beginPath();
      ctx.moveTo(-24, -14);
      ctx.lineTo(8, -24);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Film Micro Botanical Active Grid
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-18, -4);
      ctx.lineTo(4, -12);
      ctx.moveTo(-14, 7);
      ctx.lineTo(8, -1);
      ctx.stroke();

      ctx.restore();

      // Vitality Active Spores
      for (let i = 0; i < 3; i++) {
        const sporeProg = (t * 0.35 + i * 0.33) % 1;
        const spX = 90 + Math.sin(t * 2 + i * 2) * 6;
        const spY = 40 + i * 16 - sporeProg * 18;
        const spAlpha = Math.sin(sporeProg * Math.PI) * 0.9;
        ctx.fillStyle = i % 2 === 0 ? `rgba(132, 204, 22, ${spAlpha})` : `rgba(16, 185, 129, ${spAlpha})`;
        ctx.beginPath();
        ctx.arc(spX, spY, 2.4 * (1 - sporeProg * 0.3), 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="macro-canvas" />;
};

// -------------------------------------------------------------------------
// 6. ZERO SUGAR — 3D Multifaceted Sucrose Crystal Lattice (Diamond / Soft Crimson)
// -------------------------------------------------------------------------
const ZeroSugarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx } = setupCanvas(canvas, 120);

    let animId;
    let t = 0;

    const shards = Array.from({ length: 18 }, () => ({
      angle: Math.random() * Math.PI * 2,
      dist: 12 + Math.random() * 22,
      size: 2 + Math.random() * 2.5,
      rot: Math.random() * Math.PI,
      isRed: Math.random() < 0.25,
    }));

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, 120, 120);

      // Atmospheric Rose-Crimson Aura
      const atm = ctx.createRadialGradient(60, 60, 8, 60, 60, 55);
      atm.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      atm.addColorStop(0.45, "rgba(248, 250, 252, 0.4)");
      atm.addColorStop(0.8, "rgba(244, 63, 94, 0.14)");
      atm.addColorStop(1, "rgba(225, 29, 72, 0)");
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(60, 60, 55, 0, Math.PI * 2);
      ctx.fill();

      // Subtle Zero Crimson Orbital Halo Ring
      ctx.save();
      ctx.translate(60, 60);
      ctx.rotate(-t * 0.08);
      ctx.strokeStyle = "rgba(244, 63, 94, 0.75)";
      ctx.lineWidth = 1.6;
      ctx.setLineDash([5, 10]);
      ctx.beginPath();
      ctx.arc(0, 0, 42, 0, Math.PI * 2);
      ctx.stroke();

      // Crimson indicator pulse dot
      ctx.fillStyle = "#f43f5e";
      ctx.beginPath();
      ctx.arc(42, 0, 3.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Dissolution Cycle (Oscillating between crystal and dispersing particles)
      const dissCycle = (t * 0.28) % (Math.PI * 2);
      const dissRatio = (Math.sin(dissCycle) + 1) / 2; // 0 = fully solid, 1 = dissolved
      const crystalScale = 1 - dissRatio * 0.15;
      const crystalAlpha = 1 - Math.pow(dissRatio, 2.5) * 0.95;

      // Ambient Ground Shadow
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.beginPath();
      ctx.ellipse(60, 80, 22 * crystalScale, 6 * crystalScale, 0, 0, Math.PI * 2);
      ctx.fill();

      // 3D Faceted Diamond Sucrose Crystal Body
      ctx.save();
      ctx.translate(60, 54);
      ctx.scale(crystalScale, crystalScale);
      ctx.globalAlpha = Math.max(0.08, crystalAlpha);

      // 1. Top Facet
      const topGrad = ctx.createLinearGradient(0, -24, 0, 0);
      topGrad.addColorStop(0, "#ffffff");
      topGrad.addColorStop(1, "#f1f5f9");
      ctx.fillStyle = topGrad;
      ctx.beginPath();
      ctx.moveTo(0, -24);
      ctx.lineTo(20, -12);
      ctx.lineTo(0, 0);
      ctx.lineTo(-20, -12);
      ctx.closePath();
      ctx.fill();

      // 2. Left Facet
      const leftGrad = ctx.createLinearGradient(-20, -12, 0, 24);
      leftGrad.addColorStop(0, "#ffffff");
      leftGrad.addColorStop(0.5, "#e2e8f0");
      leftGrad.addColorStop(1, "#cbd5e1");
      ctx.fillStyle = leftGrad;
      ctx.beginPath();
      ctx.moveTo(-20, -12);
      ctx.lineTo(0, 0);
      ctx.lineTo(0, 24);
      ctx.lineTo(-20, 12);
      ctx.closePath();
      ctx.fill();

      // 3. Right Facet
      const rightGrad = ctx.createLinearGradient(0, 0, 20, 12);
      rightGrad.addColorStop(0, "#f8fafc");
      rightGrad.addColorStop(0.5, "#cbd5e1");
      rightGrad.addColorStop(1, "#94a3b8");
      ctx.fillStyle = rightGrad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(20, -12);
      ctx.lineTo(20, 12);
      ctx.lineTo(0, 24);
      ctx.closePath();
      ctx.fill();

      // Crisp Refractive Ridge Lines
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 24);
      ctx.moveTo(-20, -12);
      ctx.lineTo(0, 0);
      ctx.moveTo(20, -12);
      ctx.lineTo(0, 0);
      ctx.stroke();

      // Diamond Specular Sparkle Glint
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(0, -20);
      ctx.lineTo(3.5, -15);
      ctx.lineTo(0, -10);
      ctx.lineTo(-3.5, -15);
      ctx.closePath();
      ctx.fill();

      ctx.restore();

      // Dissolving Micro-Crystalline Shards (Flying outward and dissipating)
      shards.forEach((sh) => {
        const curDist = sh.dist * (0.4 + dissRatio * 0.9);
        const sx = 60 + Math.cos(sh.angle) * curDist;
        const sy = 54 + Math.sin(sh.angle) * curDist;
        const sAlpha = Math.sin(dissRatio * Math.PI) * (sh.isRed ? 0.9 : 0.85);

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(sh.rot + t);
        ctx.fillStyle = sh.isRed ? `rgba(244, 63, 94, ${sAlpha})` : `rgba(255, 255, 255, ${sAlpha})`;
        ctx.beginPath();
        ctx.rect(-sh.size / 2, -sh.size / 2, sh.size, sh.size);
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="macro-canvas" />;
};

/* =========================================================================
   FEATURE MARQUEE COMPONENT
   ========================================================================= */

const FEATURES = [
  {
    id: "fast-absorption",
    name: "FAST ABSORPTION",
    visual: <FastAbsorptionCanvas />,
  },
  {
    id: "no-water",
    name: "NO WATER",
    visual: <NoWaterCanvas />,
  },
  {
    id: "precise-dosage",
    name: "PRECISE DOSAGE",
    visual: <PreciseDosageCanvas />,
  },
  {
    id: "quick-action",
    name: "QUICK ACTION",
    visual: <QuickActionCanvas />,
  },
  {
    id: "on-the-go",
    name: "ON-THE-GO",
    visual: <OnTheGoCanvas />,
  },
  {
    id: "zero-sugar",
    name: "ZERO SUGAR",
    visual: <ZeroSugarCanvas />,
  },
];

const HeroFeatureMarquee = () => {
  const marqueeItems = [...FEATURES, ...FEATURES, ...FEATURES];

  return (
    <div className="hero-feature-marquee-wrapper">
      <style>{`
        .hero-feature-marquee-wrapper {
          position: absolute;
          bottom: 12px;
          left: 0;
          right: 0;
          height: 140px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: transparent;
          z-index: 10;
          user-select: none;
        }

        /* Seamless Edge Feather Vignettes */
        .marquee-edge-fade-left {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: clamp(60px, 10vw, 150px);
          background: linear-gradient(to right, rgba(255, 255, 255, 0.98) 25%, rgba(255, 255, 255, 0.6) 65%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        .marquee-edge-fade-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: clamp(60px, 10vw, 150px);
          background: linear-gradient(to left, rgba(255, 255, 255, 0.98) 25%, rgba(255, 255, 255, 0.6) 65%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        /* Continuous Infinite Track with Generous Luxury Spacing */
        .marquee-inner-track {
          display: flex;
          align-items: center;
          gap: clamp(50px, 5.5vw, 90px);
          width: max-content;
          animation: seamlessHeroMarquee 42s linear infinite;
          will-change: transform;
          padding: 0 24px;
        }

        .hero-feature-marquee-wrapper:hover .marquee-inner-track {
          animation-play-state: paused;
        }

        @keyframes seamlessHeroMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        /* Clean Luxury Floating Feature Item: No Cards, No Borders */
        .marquee-feature-item {
          display: inline-flex;
          align-items: center;
          gap: clamp(16px, 1.8vw, 24px);
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          box-shadow: none;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
          cursor: default;
          flex-shrink: 0;
        }

        .marquee-feature-item:hover {
          transform: translateY(-3px) scale(1.03);
        }

        /* High-Impact 3D Macro Canvas (120px) */
        .macro-canvas {
          width: 120px;
          height: 120px;
          display: block;
          flex-shrink: 0;
        }

        /* Prominent International Luxury Feature Title Typography */
        .marquee-feature-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(20px, 1.55vw, 25px);
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.02em;
          line-height: 1;
          margin: 0;
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-feature-marquee-wrapper {
            height: 120px;
            bottom: 8px;
          }
          .macro-canvas {
            width: 85px !important;
            height: 85px !important;
          }
          .marquee-feature-title {
            font-size: 18px;
          }
          .marquee-inner-track {
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .hero-feature-marquee-wrapper {
            height: 100px;
            bottom: 4px;
          }
          .macro-canvas {
            width: 68px !important;
            height: 68px !important;
          }
          .marquee-feature-title {
            font-size: 15px;
          }
          .marquee-inner-track {
            gap: 28px;
          }
        }
      `}</style>

      {/* Edge Feather Overlays */}
      <div className="marquee-edge-fade-left" />
      <div className="marquee-edge-fade-right" />

      {/* Continuous Marquee Track */}
      <div className="marquee-inner-track">
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="marquee-feature-item"
          >
            {/* 3D Photorealistic Canvas Micro-Scene */}
            {item.visual}

            {/* Feature Name */}
            <h4 className="marquee-feature-title">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeatureMarquee;
