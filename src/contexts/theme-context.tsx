"use client";

import { createContext, useContext, useEffect, useState } from "react";
type Theme = "ultraviolet" | "deep-space";

interface ThemeConfig {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  gradient: string;
}

const themes: Record<Theme, ThemeConfig> = {
  ultraviolet: {
    name: 'Ultraviolet',
    description: 'Purple gradients with tech vibes',
    colors: {
      primary: '#8B5CF6',
      secondary: '#A855F7',
      accent: '#7C3AED',
      background: '#000000',
    },
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #7C3AED 100%)',
  },
  'deep-space': {
    name: 'Deep Space',
    description: 'Cosmic space with shooting stars',
    colors: {
      primary: '#4C1D95',
      secondary: '#7C3AED',
      accent: '#2563EB',
      background: '#000000',
    },
    gradient: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #2563EB 100%)',
  },
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: typeof themes;
  currentThemeConfig: typeof themes[Theme];
};

const initialState: ThemeProviderState = {
  theme: "ultraviolet",
  setTheme: () => null,
  availableThemes: themes,
  currentThemeConfig: themes.ultraviolet,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "ultraviolet",
  storageKey = "aryan-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage?.getItem(storageKey) as Theme;
    if (stored && themes[stored]) {
      setTheme(stored);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('theme-ultraviolet', 'theme-deep-space'); // Only two themes now
    
    // Apply new theme
    root.classList.add(`theme-${theme}`);
    
    // Store in localStorage
    localStorage?.setItem(storageKey, theme);
  }, [theme, mounted, storageKey]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
    },
    availableThemes: themes,
    currentThemeConfig: themes[theme],
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
