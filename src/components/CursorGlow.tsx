"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    const currentTime = performance.now();
    
    // Throttle mouse updates to 60fps max
    if (currentTime - lastTimeRef.current < 16) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        lastTimeRef.current = currentTime;
      });
    } else {
      setMousePosition({ x: e.clientX, y: e.clientY });
      lastTimeRef.current = currentTime;
    }
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    // Use event delegation for better performance
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], [data-interactive]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], [data-interactive]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateMousePosition]);

  return (
    <div
      className="fixed pointer-events-none z-50 will-change-transform"
      style={{
        left: mousePosition.x - 20,
        top: mousePosition.y - 20,
        width: 40,
        height: 40,
        background: isHovering 
          ? 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        transform: `translateZ(0) scale(${isHovering ? 1.5 : 1})`,
        transition: 'transform 0.2s ease-out',
      }}
    />
  );
}
