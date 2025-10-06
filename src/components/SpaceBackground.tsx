"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: boolean;
  color: string;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  color: string;
}

interface Planet {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  angle: number;
}

export function SpaceBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    // Create static stars with different colors
    const createStars = () => {
      const newStars: Star[] = [];
      const colors = ['#FFFFFF', '#E0F7FF', '#C7F0FE', '#A5F4FC', '#66FCF1', '#45A29E'];
      
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.9 + 0.1,
          twinkle: Math.random() > 0.6,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setStars(newStars);
    };

    // Create shooting stars with cosmic colors
    const createShootingStars = () => {
      const newShootingStars: ShootingStar[] = [];
      const colors = ['#FFFFFF', '#E0F7FF', '#66FCF1', '#45A29E'];
      
      for (let i = 0; i < 2; i++) {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight * 0.2;
        const endX = startX + (Math.random() - 0.5) * 300;
        const endY = startY + Math.random() * 400 + 300;
        
        newShootingStars.push({
          id: i,
          startX,
          startY,
          endX,
          endY,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setShootingStars(newShootingStars);
    };

    // Create floating planets
    const createPlanets = () => {
      const newPlanets: Planet[] = [];
      const planetColors = ['#66FCF1', '#45A29E', '#1F2833', '#0B0C10', '#3B82F6'];
      
      for (let i = 0; i < 3; i++) {
        newPlanets.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 8 + 4,
          color: planetColors[Math.floor(Math.random() * planetColors.length)],
          orbitRadius: Math.random() * 50 + 20,
          orbitSpeed: Math.random() * 0.02 + 0.01,
          angle: Math.random() * Math.PI * 2,
        });
      }
      setPlanets(newPlanets);
    };

    createStars();
    createShootingStars();
    createPlanets();

    // Animate planets
    const animatePlanets = () => {
      setPlanets(prev => 
        prev.map(planet => ({
          ...planet,
          angle: planet.angle + planet.orbitSpeed,
        }))
      );
    };

    // Regenerate shooting stars periodically
    const shootingStarInterval = setInterval(createShootingStars, 10000);
    const planetInterval = setInterval(animatePlanets, 50);
    
    return () => {
      clearInterval(shootingStarInterval);
      clearInterval(planetInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Static Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
          }}
          animate={star.twinkle ? {
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.3, 1],
          } : {}}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: star.startX,
            top: star.startY,
          }}
          initial={{ opacity: 0 }}
          animate={{
            x: star.endX - star.startX,
            y: star.endY - star.startY,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeOut",
          }}
        >
          <div className="relative">
            {/* Shooting star trail */}
            <div 
              className="absolute w-32 h-0.5 opacity-80"
              style={{
                background: `linear-gradient(to right, ${star.color}, ${star.color}80, transparent)`,
                transform: `rotate(${Math.atan2(star.endY - star.startY, star.endX - star.startX) * 180 / Math.PI}deg)`,
                transformOrigin: 'left center',
                boxShadow: `0 0 10px ${star.color}`,
              }}
            />
            {/* Shooting star head */}
            <div 
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: star.color,
                boxShadow: `0 0 15px ${star.color}`,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Floating Planets */}
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          className="absolute rounded-full"
          style={{
            left: planet.x + Math.cos(planet.angle) * planet.orbitRadius,
            top: planet.y + Math.sin(planet.angle) * planet.orbitRadius,
            width: planet.size,
            height: planet.size,
            backgroundColor: planet.color,
            opacity: 0.6,
            boxShadow: `0 0 ${planet.size * 2}px ${planet.color}`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cosmic Nebula Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.1) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(162, 89, 255, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Cosmic Dust Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
