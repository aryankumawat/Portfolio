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
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
}

export function SpaceBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Create static stars
    const createStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() > 0.7,
        });
      }
      setStars(newStars);
    };

    // Create shooting stars
    const createShootingStars = () => {
      const newShootingStars: ShootingStar[] = [];
      for (let i = 0; i < 3; i++) {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight * 0.3;
        const endX = startX + (Math.random() - 0.5) * 200;
        const endY = startY + Math.random() * 300 + 200;
        
        newShootingStars.push({
          id: i,
          startX,
          startY,
          endX,
          endY,
          duration: Math.random() * 2 + 1,
          delay: Math.random() * 5,
        });
      }
      setShootingStars(newShootingStars);
    };

    createStars();
    createShootingStars();

    // Regenerate shooting stars periodically
    const interval = setInterval(createShootingStars, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Static Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={star.twinkle ? {
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
          } : {}}
          transition={{
            duration: 2 + Math.random() * 2,
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
              className="absolute w-20 h-0.5 bg-gradient-to-r from-white via-blue-300 to-transparent opacity-80"
              style={{
                transform: `rotate(${Math.atan2(star.endY - star.startY, star.endX - star.startX) * 180 / Math.PI}deg)`,
                transformOrigin: 'left center',
              }}
            />
            {/* Shooting star head */}
            <div className="absolute w-1 h-1 bg-white rounded-full shadow-lg shadow-blue-300" />
          </div>
        </motion.div>
      ))}

      {/* Nebula Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
