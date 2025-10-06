"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only initialize on client side
    if (typeof window === 'undefined') return;

    lenisRef.current = new Lenis({
      duration: 1.0, // Slightly faster for better responsiveness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Optimize RAF loop
    let rafId: number;
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Handle resize
    const handleResize = () => {
      lenisRef.current?.resize();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenisRef.current?.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
}
