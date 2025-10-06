"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export const Reveal = memo(function Reveal({ 
  children, 
  delay = 0, 
  direction = "up", 
  distance = 24 
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: true, 
    margin: "-5% 0px -5% 0px", // Reduced margin for better performance
    amount: 0.1 // Trigger when 10% visible
  });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionMap[direction]
      }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{ 
        type: "tween", // Use tween instead of spring for better performance
        duration: 0.6,
        ease: "easeOut",
        delay 
      }}
      style={{ willChange: inView ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
});
