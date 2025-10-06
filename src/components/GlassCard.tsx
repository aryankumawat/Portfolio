"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { memo } from "react";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  magnetic?: boolean;
}

export const GlassCard = memo(function GlassCard({ 
  className, 
  children, 
  hover = true, 
  magnetic = false 
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { 
        scale: 1.005, // Reduced scale for better performance
        y: -1, // Reduced movement
        transition: { duration: 0.2, ease: "easeOut" }
      } : {}}
      transition={{ 
        type: "tween", 
        duration: 0.2,
        ease: "easeOut"
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-lg bg-black/20 border border-white/10 shadow-2xl group",
        magnetic && "cursor-pointer",
        "transform-gpu will-change-transform",
        className
      )}
      style={{ 
        willChange: hover ? 'transform' : 'auto',
        transform: 'translateZ(0)' // Force GPU acceleration
      }}
    >
      {/* Simple inner highlight */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ 
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)" 
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
});
