export type Theme = 'aurora' | 'ultraviolet' | 'neon-cyan' | 'deep-space';

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
  aurora: {
    name: 'Aurora',
    description: 'Violet to cyan gradients with deep space background',
    colors: {
      primary: '#7C3AED',
      secondary: '#8B5CF6',
      accent: '#22D3EE',
      background: '#0B1020',
    },
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #22D3EE 100%)',
  },
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
  'deep-space': {
    name: 'Deep Space',
    description: 'Dark navy with purple accents for maximum depth',
    colors: {
      primary: '#6D28D9',
      secondary: '#7C3AED',
      accent: '#1E40AF',
      background: '#0A0B0F',
    },
    gradient: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 50%, #1E40AF 100%)',
  },
};

export const defaultTheme: Theme = 'aurora';

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
