# Portfolio Revamp Plan - Dynamic UI

## Overview
Transform the existing portfolio into a high-performance, ultra-modern website that meets Apple/Netflix standards while preserving all existing content and routing.

## Current State Analysis

### Existing Structure (Keep)
- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ Framer Motion (already installed)
- ✅ shadcn/ui components
- ✅ All existing pages and routes
- ✅ Vercel Analytics integration

### Files to Migrate/Refactor
- `src/app/layout.tsx` - Add theming system and new layout
- `src/app/globals.css` - New design tokens and theme presets
- `src/components/` - Refactor with new design system
- `src/contexts/theme-context.tsx` - Enhanced theming with presets
- `tailwind.config.ts` - New design tokens and utilities

### Files to Add
- `src/lib/theme.ts` - Theme management utilities
- `src/lib/content.ts` - Content management
- `src/components/command-palette.tsx` - CMD+K functionality
- `src/components/particles.tsx` - Hero background effects
- `src/data/` - JSON/MDX content sources
- `src/styles/` - Additional CSS modules

## Design System Implementation

### Color Palette (Primary Dark)
```css
:root {
  --bg-primary: #0B1020;
  --bg-secondary: rgba(255,255,255,0.04);
  --accent-violet: #7C3AED;
  --accent-purple: #8B5CF6;
  --accent-indigo: #6D28D9;
  --accent-blue: #0EA5E9;
  --accent-cyan: #22D3EE;
  --text-primary: #F4F4F5;
  --text-muted: #94A3B8;
}
```

### Theme Presets
1. **Aurora** - Violet to cyan gradients
2. **Ultraviolet** - Deep purple focus
3. **NeonCyan** - Electric blue/cyan
4. **Deep Space** - Dark navy with purple accents

### Typography
- Primary: Inter (body text)
- Headings: Inter Tight
- Code: JetBrains Mono
- Display: Custom gradient text

## New Dependencies

### Core
- `@lenis/react` - Smooth scrolling
- `contentlayer2` - MDX content management
- `@next/mdx` - MDX support
- `remark` & `rehype` - MDX processing
- `shiki` - Syntax highlighting

### UI/UX
- `@tsparticles/react` - Particle effects
- `react-intersection-observer` - Scroll animations
- `cmdk` - Command palette
- `fuse.js` - Fuzzy search

### Performance
- `next-themes` - Theme management
- `react-use` - Hooks utilities
- `use-debounce` - Debounced search

## Component Architecture

### Layout System
```
src/
├── app/
│   ├── layout.tsx (enhanced with theming)
│   └── globals.css (design tokens)
├── components/
│   ├── ui/ (shadcn/ui components)
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   ├── interactive/
│   │   ├── command-palette.tsx
│   │   ├── particles.tsx
│   │   └── cursor-trail.tsx
│   └── content/
│       ├── mdx-content.tsx
│       ├── code-block.tsx
│       └── project-card.tsx
```

## Content Strategy

### Projects (MDX + JSON)
- Move project data to `src/data/projects/`
- Create MDX files for detailed case studies
- Add filtering and search capabilities
- Implement project detail pages

### Blog/Notes (MDX)
- Set up Contentlayer for blog posts
- Add tags, search, and TOC
- Implement RSS feed generation
- Add estimated read time

### Resume (JSON-driven)
- Create `src/data/profile.json`
- Build PDF generation with `react-pdf`
- Add downloadable resume functionality

## Performance Targets

### Lighthouse Scores
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

### Core Web Vitals
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

## Implementation Phases

### Phase 1: Foundation (Current)
- [x] Create revamp branch
- [ ] Install new dependencies
- [ ] Set up design system
- [ ] Configure theming

### Phase 2: Layout & Navigation
- [ ] Enhanced layout with theming
- [ ] Sticky navigation with blur
- [ ] Mobile-responsive menu
- [ ] Command palette

### Phase 3: Content & Pages
- [ ] Hero section with animations
- [ ] Projects with MDX integration
- [ ] Blog with Contentlayer
- [ ] Experience timeline

### Phase 4: Interactions & Polish
- [ ] Micro-interactions
- [ ] Particle effects
- [ ] Performance optimization
- [ ] Accessibility audit

### Phase 5: Deployment & Documentation
- [ ] Vercel deployment
- [ ] Documentation
- [ ] Performance testing
- [ ] Final QA

## Migration Strategy

### Content Preservation
- Keep all existing page routes
- Maintain SEO metadata
- Preserve existing content structure
- Add progressive enhancement

### Backward Compatibility
- Ensure site works without JS
- Maintain existing URLs
- Keep core functionality intact
- Add enhancements progressively

## Success Metrics

### Technical
- Build time <2 minutes
- Bundle size <500KB (gzipped)
- Zero TypeScript errors
- Zero ESLint warnings

### User Experience
- Smooth 60fps animations
- Instant page transitions
- Keyboard navigation
- Mobile-first responsive

### Content
- All existing content preserved
- New content management system
- Search functionality
- RSS feed generation

## Timeline
- Phase 1-2: 2-3 hours
- Phase 3-4: 3-4 hours  
- Phase 5: 1 hour
- **Total: 6-8 hours**

## Next Steps
1. Install dependencies
2. Configure design system
3. Implement new layout
4. Migrate content
5. Add interactions
6. Performance optimization
7. Documentation
