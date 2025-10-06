"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  initialOpacity: number;
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const createParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 20 : 30; // Reduce on mobile
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1, // Smaller particles
        speedX: (Math.random() - 0.5) * 0.3, // Slower movement
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1, // Lower opacity
        initialOpacity: Math.random() * 0.3 + 0.1,
      });
    }
    setParticles(newParticles);
  }, []);

  const animateParticles = useCallback((currentTime: number) => {
    if (currentTime - lastTimeRef.current < 100) { // Throttle to 10fps
      animationRef.current = requestAnimationFrame(animateParticles);
      return;
    }
    
    lastTimeRef.current = currentTime;
    
    setParticles(prev => 
      prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        
        // Wrap around screen edges
        if (newX > window.innerWidth) newX = 0;
        if (newX < 0) newX = window.innerWidth;
        if (newY > window.innerHeight) newY = 0;
        if (newY < 0) newY = window.innerHeight;
        
        return {
          ...particle,
          x: newX,
          y: newY,
        };
      })
    );
    
    animationRef.current = requestAnimationFrame(animateParticles);
  }, []);

  useEffect(() => {
    createParticles();
    animationRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticles, animateParticles]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#66FCF1] to-[#45A29E] will-change-transform"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        />
      ))}
    </div>
  );
}
