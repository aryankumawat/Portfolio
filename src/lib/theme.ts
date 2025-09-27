export type Theme = 'ultraviolet' | 'deep-space';

export interface ThemeConfig {
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

export const themes: Record<Theme, ThemeConfig> = {
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

export const defaultTheme: Theme = 'ultraviolet';

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  
  // Remove existing theme classes
  Object.keys(themes).forEach(t => {
    root.classList.remove(`theme-${t}`);
  });
  
  // Apply new theme
  root.classList.add(`theme-${theme}`);
  
  // Store in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
}

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return defaultTheme;
  
  const stored = localStorage.getItem('theme');
  return (stored as Theme) || defaultTheme;
}

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getInitialTheme(): Theme {
  const stored = getStoredTheme();
  const system = getSystemTheme();
  
  // Always default to dark themes for this portfolio
  return stored || defaultTheme;
}
