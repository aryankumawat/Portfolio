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
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-xl bg-black/20 border border-purple-500/20 shadow-2xl group",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:to-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        magnetic && "cursor-pointer",
        className
      )}
    >
      {/* Inner highlight */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ 
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)" 
        }}
      />
      
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div 
          className="absolute inset-0 rounded-2xl p-[1px]"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
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
