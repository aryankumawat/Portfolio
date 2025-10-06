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
        "relative overflow-hidden rounded-2xl backdrop-blur-lg bg-black/20 border border-[#66FCF1]/20 shadow-2xl group",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#66FCF1]/3 before:to-[#45A29E]/3 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        magnetic && "cursor-pointer",
        "transform-gpu will-change-transform",
        className
      )}
      style={{ 
        willChange: hover ? 'transform' : 'auto',
        transform: 'translateZ(0)' // Force GPU acceleration
      }}
    >
      {/* Inner highlight */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ 
          boxShadow: "inset 0 1px 0 rgba(102, 252, 241, 0.2)" 
        }}
      />
      
      {/* Gradient border on hover - cyan/teal theme */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div 
          className="absolute inset-0 rounded-2xl p-[1px]"
          style={{
            background: "linear-gradient(135deg, #66FCF1, #45A29E)"
          }}
        >
          <div className="w-full h-full rounded-2xl bg-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
});
