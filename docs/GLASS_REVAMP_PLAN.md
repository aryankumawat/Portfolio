# Glass Tech Revamp Plan

## Overview
Transform the existing portfolio into an ultra-modern, glassmorphic experience with Apple-grade polish while preserving all content, URLs, and SEO.

## Current Repository Audit

### Files to Keep (Content & Routing)
- ✅ All page routes in `src/app/` (about, awards, blog, contact, experience, projects, resume, volunteering)
- ✅ All existing content components
- ✅ SEO metadata and structure
- ✅ Vercel Analytics integration

### Files to Refactor
- `src/app/globals.css` - Add glass design system tokens
- `src/app/layout.tsx` - Update with glass theme
- `src/components/header.tsx` → `GlassNav.tsx`
- `src/components/footer.tsx` → `GlassFooter.tsx`
- `src/components/hero.tsx` - Ultra-modern glass hero
- `src/components/ui/card.tsx` → `GlassCard.tsx`
- `tailwind.config.ts` - Add glass utilities

### Files to Add
- `src/components/GlassCard.tsx` - Universal glass card component
- `src/components/GlassNav.tsx` - Sticky glass navigation
- `src/components/GlassFooter.tsx` - Glass footer with theme toggle
- `src/components/Reveal.tsx` - Scroll reveal animations
- `src/components/CommandPalette.tsx` - ⌘K search functionality
- `src/lib/glass-theme.ts` - Glass theme management
- `src/data/` - MDX/JSON content structure

## Glass Design System Implementation

### CSS Variables (globals.css)
```css
:root {
  --bg: #090F22;
  --text: #E6E8EC;
  --surface: 255,255,255; /* for alpha glass */
  --primary: #8B5CF6;
  --primary-2: #7C3AED;
  --cyan: #22D3EE;
  --glass-bg: rgba(var(--surface), 0.06);
  --glass-stroke: rgba(255,255,255, 0.12);
  --glass-highlight: rgba(255,255,255, 0.35);
  --shadow-1: 0 10px 30px rgba(0,0,0,.35);
}
```

### Tailwind Utilities
- `.glass` - Backdrop blur with glass background
- `.hairline` - 1px hairline borders
- `.noise` - Subtle film grain overlay
- `.gradient-text` - Animated gradient text
- `.bg-hero` - Layered radial gradients

### Theme Presets
1. **Ultraviolet** - Deep purple focus
2. **Deep Space** - Navy with blue accents
3. **Neon Cyan** - Electric blue/cyan

## Component Architecture

### Glass Components
```
src/components/
├── glass/
│   ├── GlassCard.tsx
│   ├── GlassNav.tsx
│   ├── GlassFooter.tsx
│   ├── GlassSection.tsx
│   └── GlassButton.tsx
├── animations/
│   ├── Reveal.tsx
│   ├── Parallax.tsx
│   └── Magnetic.tsx
├── interactive/
│   ├── CommandPalette.tsx
│   ├── SearchIndex.tsx
│   └── ThemeToggle.tsx
└── content/
    ├── ProjectCard.tsx
    ├── BlogCard.tsx
    └── ExperienceCard.tsx
```

## Hero Section Design

### Visual Elements
- **Background**: Layered radial gradients (violet→indigo→blue)
- **Headline**: Giant animated gradient text
- **Subcopy**: Clean, readable typography
- **Pill CTA**: Glass search bar with ⌘K shortcut
- **Motion**: Slow parallax gradient orbs
- **Noise**: Subtle film grain overlay

### Content Structure
```tsx
<main className="relative bg-hero noise">
  <section className="mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
    <motion.h1 className="text-5xl md:text-7xl font-extrabold gradient-text">
      Turn ideas into live experiences
    </motion.h1>
    <p className="mt-6 text-lg text-slate-300/90">
      CS-engineered portfolio • AI-first • smooth, fast, and glassy ✨
    </p>
    <div className="mt-10 glass hairline rounded-full px-6 py-3">
      Search projects or posts… ⌘K
    </div>
  </section>
</main>
```

## Motion System (Framer Motion)

### Animation Rules
- **Enter**: 20-40px Y, 10-16% opacity → fade/slide with spring
- **Hover**: Glass cards scale 1.02 + gradient border sweep
- **Route transitions**: Hero backdrop cross-fade + light blur
- **Respect prefers-reduced-motion**

### Scroll Reveal
```tsx
<Reveal>
  <GlassCard>Content</GlassCard>
</Reveal>
```

## Performance & Accessibility

### Performance Targets
- **Lighthouse ≥95** (Perf/A11y/SEO/PWA)
- **Core Web Vitals** green
- **Bundle size** <500KB gzipped
- **LCP** <2.5s

### Accessibility Features
- Keyboard navigation everywhere
- Focus rings and skip links
- ARIA labels for interactive elements
- Screen reader compatibility
- Reduced motion support

## Implementation Phases

### Phase 1: Glass Design System
1. Add CSS variables and Tailwind utilities
2. Create GlassCard component
3. Update theme system with glass presets
4. Add noise overlay and gradient backgrounds

### Phase 2: Hero & Navigation
1. Build ultra-modern hero section
2. Create GlassNav with sticky blur
3. Implement theme toggle
4. Add smooth scrolling with Lenis

### Phase 3: Content Components
1. Migrate projects to GlassCard
2. Create blog cards with glass styling
3. Update experience timeline
4. Add scroll reveal animations

### Phase 4: Interactive Features
1. Implement Command Palette (⌘K)
2. Add search functionality
3. Create magnetic hover effects
4. Add route transitions

### Phase 5: Performance & Polish
1. Optimize images and fonts
2. Add accessibility features
3. Performance audit
4. Final testing and deployment

## Content Strategy

### MDX Integration
- Projects: JSON data + MDX case studies
- Blog: MDX posts with Shiki syntax highlighting
- Experience: Animated timeline with glass cards
- Gallery: Responsive lightbox with glass modals

### SEO Preservation
- All existing URLs maintained
- Meta tags and OpenGraph preserved
- Structured data updated
- Sitemap and robots.txt maintained

## Success Metrics

### Technical
- Build time <2 minutes
- Zero TypeScript errors
- Zero ESLint warnings
- Lighthouse 95+ scores

### User Experience
- Smooth 60fps animations
- Instant page transitions
- Keyboard navigation
- Mobile-first responsive

### Content
- All existing content preserved
- Enhanced visual presentation
- Improved readability
- Better engagement

## Timeline
- Phase 1-2: 2-3 hours
- Phase 3-4: 3-4 hours
- Phase 5: 1-2 hours
- **Total: 6-9 hours**

## Next Steps
1. Implement glass design system
2. Create hero section
3. Build glass components
4. Add motion and interactions
5. Performance optimization
6. Testing and deployment
