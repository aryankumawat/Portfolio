"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Simplified theme context - only ultraviolet theme
type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: "ultraviolet";
};

const initialState: ThemeProviderState = {
  theme: "ultraviolet",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const root = document.documentElement;
    
    // Always apply ultraviolet theme
    root.classList.remove('theme-ultraviolet', 'theme-deep-space');
    root.classList.add('theme-ultraviolet');
  }, []);

  const value = {
    theme: "ultraviolet" as const,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
