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
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden group",
        magnetic && "cursor-pointer",
        className
      )}
    >
      {/* Inner highlight */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ 
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.25)" 
        }}
      />
      
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div 
          className="absolute inset-0 rounded-2xl p-[1px]"
          style={{
            background: "linear-gradient(135deg, var(--primary), var(--cyan))"
          }}
        >
          <div className="w-full h-full rounded-2xl bg-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
