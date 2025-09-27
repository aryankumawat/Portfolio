"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function Reveal({ 
  children, 
  delay = 0, 
  direction = "up", 
  distance = 24 
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: true, 
    margin: "-10% 0px -10% 0px" 
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
        type: "spring", 
        stiffness: 120, 
        damping: 18,
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}
