# Theming System Documentation

## Overview

The portfolio uses a sophisticated theming system with CSS variables and multiple theme presets. This allows for dynamic theme switching while maintaining consistent design tokens.

## Theme Presets

### Aurora (Default)
- **Background**: Deep navy (#0B1020)
- **Primary Colors**: Violet to cyan gradients
- **Accent**: Electric blue and purple
- **Best for**: Professional, modern look

### Ultraviolet
- **Background**: Dark purple (#0A0A0F)
- **Primary Colors**: Deep purple focus
- **Accent**: Cosmic purple tones
- **Best for**: Creative, artistic portfolios

### Neon Cyan
- **Background**: Dark blue (#0C0F1A)
- **Primary Colors**: Electric blue and cyan
- **Accent**: High contrast neon
- **Best for**: Tech-focused, futuristic look

### Deep Space
- **Background**: Dark navy (#0A0B0F)
- **Primary Colors**: Navy with purple accents
- **Accent**: Maximum depth and contrast
- **Best for**: Minimalist, sophisticated design

## Adding New Themes

1. **Update CSS Variables** in `src/app/globals.css`:
```css
.theme-your-theme {
  --bg-primary: #your-color;
  --accent-violet: #your-color;
  --accent-purple: #your-color;
  --gradient-primary: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

2. **Add Theme Configuration** in `src/lib/theme.ts`:
```typescript
export const themes: Record<Theme, ThemeConfig> = {
  // ... existing themes
  'your-theme': {
    name: 'Your Theme',
    description: 'Description of your theme',
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
      background: '#your-color',
    },
    gradient: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
  },
};
```

3. **Add Theme Icon** in `src/components/theme-toggle.tsx`:
```typescript
const themeIcons = {
  // ... existing icons
  'your-theme': YourIcon,
};
```

## CSS Variables

### Background Colors
- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background (cards, modals)
- `--bg-tertiary`: Tertiary background (subtle elements)
- `--bg-glass`: Glass morphism background

### Accent Colors
- `--accent-violet`: Primary violet
- `--accent-purple`: Primary purple
- `--accent-indigo`: Indigo accent
- `--accent-blue`: Blue accent
- `--accent-cyan`: Cyan accent
- `--accent-emerald`: Emerald accent

### Text Colors
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--text-muted`: Muted text color
- `--text-subtle`: Subtle text color

### Gradients
- `--gradient-primary`: Main gradient
- `--gradient-secondary`: Secondary gradient
- `--gradient-accent`: Accent gradient
- `--gradient-radial`: Radial gradient

## Usage in Components

### Using CSS Variables
```tsx
<div className="bg-bg-primary text-text-primary">
  <h1 className="gradient-text">Title</h1>
</div>
```

### Using Tailwind Classes
```tsx
<div className="bg-bg-primary text-text-primary border-border-primary">
  Content
</div>
```

### Using Gradients
```tsx
<div className="bg-gradient-primary text-white">
  Gradient background
</div>
```

## Theme Switching

The theme can be switched programmatically:

```tsx
import { useTheme } from '@/contexts/theme-context';

function MyComponent() {
  const { theme, setTheme, availableThemes } = useTheme();
  
  return (
    <select onChange={(e) => setTheme(e.target.value as Theme)}>
      {Object.entries(availableThemes).map(([key, config]) => (
        <option key={key} value={key}>
          {config.name}
        </option>
      ))}
    </select>
  );
}
```

## Best Practices

1. **Always use CSS variables** instead of hardcoded colors
2. **Test all themes** when adding new components
3. **Maintain contrast ratios** for accessibility
4. **Use semantic color names** (primary, secondary, accent)
5. **Keep gradients consistent** across themes
6. **Test in both light and dark contexts** (if applicable)

## Accessibility

- All themes maintain WCAG AA contrast ratios
- Color is never the only way to convey information
- Focus states are clearly visible in all themes
- Reduced motion preferences are respected
