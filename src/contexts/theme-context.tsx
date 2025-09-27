"use client";

import { createContext, useContext, useEffect, useState } from "react";
type Theme = "ultraviolet" | "deep-space" | "neon-cyan";

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
    description: 'Deep purple focus with cosmic vibes',
    colors: {
      primary: '#8B5CF6',
      secondary: '#A855F7',
      accent: '#7C3AED',
      background: '#0A0A0F',
    },
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #7C3AED 100%)',
  },
  'deep-space': {
    name: 'Deep Space',
    description: 'Dark navy with purple accents for maximum depth',
    colors: {
      primary: '#6D28D9',
      secondary: '#7C3AED',
      accent: '#2563EB',
      background: '#0A0B0F',
    },
    gradient: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 50%, #2563EB 100%)',
  },
  'neon-cyan': {
    name: 'Neon Cyan',
    description: 'Electric blue and cyan with high contrast',
    colors: {
      primary: '#0EA5E9',
      secondary: '#22D3EE',
      accent: '#10B981',
      background: '#0C0F1A',
    },
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #22D3EE 50%, #10B981 100%)',
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
    root.classList.remove('theme-ultraviolet', 'theme-deep-space', 'theme-neon-cyan');
    
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
