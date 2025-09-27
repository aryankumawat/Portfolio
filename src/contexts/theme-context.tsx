"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Theme, themes, applyTheme, getInitialTheme } from "@/lib/theme";

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
  theme: "aurora",
  setTheme: () => null,
  availableThemes: themes,
  currentThemeConfig: themes.aurora,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "aurora",
  storageKey = "aryan-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    applyTheme(theme);
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (mounted) {
        localStorage?.setItem(storageKey, newTheme);
        applyTheme(newTheme);
      }
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
