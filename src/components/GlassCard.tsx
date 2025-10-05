"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  magnetic?: boolean;
}

export function GlassCard({ 
  className, 
  children, 
  hover = true, 
  magnetic = false 
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { 
        scale: 1.01, 
        y: -2,
        transition: { duration: 0.15, ease: "easeOut" }
      } : {}}
      transition={{ 
        type: "tween", 
        duration: 0.15,
        ease: "easeOut"
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-xl bg-black/20 border border-[#66FCF1]/20 shadow-2xl group",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#66FCF1]/3 before:to-[#45A29E]/3 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        magnetic && "cursor-pointer",
        "transform-gpu will-change-transform",
        className
      )}
      style={{ willChange: hover ? 'transform' : 'auto' }}
    >
      {/* Inner highlight */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ 
          boxShadow: "inset 0 1px 0 rgba(162, 89, 255, 0.3)" 
        }}
      />
      
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div 
          className="absolute inset-0 rounded-2xl p-[1px]"
          style={{
            background: "linear-gradient(135deg, #6D28D9, #8B5CF6, #3B82F6)"
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
}
