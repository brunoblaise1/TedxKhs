"use client";
import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 32;
const COLORS = ["#e62b1e", "#fff", "#222", "#ffb300"];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useRef<
    {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
      el: HTMLDivElement;
    }[]
  >([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Create particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const el = document.createElement("div");
      const size = random(6, 16);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.position = "absolute";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.borderRadius = "50%";
      el.style.background = color;
      el.style.opacity = "0.18";
      el.style.left = `${random(0, width)}px`;
      el.style.top = `${random(0, height)}px`;
      el.style.pointerEvents = "none";
      el.style.transition = "background 0.3s";
      container.appendChild(el);
      particles.current.push({
        x: random(0, width),
        y: random(0, height),
        dx: random(-0.2, 0.2),
        dy: random(-0.2, 0.2),
        size,
        color,
        el,
      });
    }
    let animationId: number;
    const animate = () => {
      for (const p of particles.current) {
        p.x += p.dx;
        p.y += p.dy;
        // Bounce off edges
        if (p.x < 0 || p.x > width - p.size) p.dx *= -1;
        if (p.y < 0 || p.y > height - p.size) p.dy *= -1;
        p.el.style.left = `${p.x}px`;
        p.el.style.top = `${p.y}px`;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animationId);
      for (const p of particles.current) {
        container.removeChild(p.el);
      }
      particles.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}
