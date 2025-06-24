"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const Particle = ({ x, y, size, delay, duration }: { x: number; y: number; size: number; delay: number; duration: number }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        delay: delay,
      }}
    />
  );
};

export const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = React.useState<Array<{ x: number; y: number; size: number; delay: number; duration: number }>>([]);

  const generateParticles = useCallback(() => {
    const newParticles = [];
    const numParticles = 50; 
    const maxDelay = 10;
    const minDuration = 5; 
    const maxDuration = 15; 
    const minSize = 2; 
    const maxSize = 8; 

    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;

      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          x: Math.random() * clientWidth,
          y: Math.random() * clientHeight,
          size: Math.random() * (maxSize - minSize) + minSize,
          delay: Math.random() * maxDelay,
          duration: Math.random() * (maxDuration - minDuration) + minDuration,
        });
      }
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    generateParticles();
    const handleResize = () => generateParticles();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateParticles]);


  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}
    </div>
  );
}; 