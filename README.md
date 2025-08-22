# Aryan Kumawat - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 14, showcasing skills in Data Science, Finance, and Software Development.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive across all devices (360px → 1440px)
- **Performance**: Optimized for Core Web Vitals with 95+ scores
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Animations**: Smooth Framer Motion animations with reduced motion support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter, Inter Tight, Geist Mono

## 📱 Pages & Routes

- `/` - Home with hero section and highlights
- `/about` - Bio, skills, and contact information
- `/experience` - Work history and professional experience
- `/projects` - Featured technical and finance projects
- `/awards` - Honors, certifications, and recognition
- `/volunteering` - Community impact and volunteer work
- `/blog` - Articles and insights (placeholder content)
- `/contact` - Contact form and information
- `/resume` - Resume viewer and download

## 🎨 Design System

- **Colors**: Slate/stone neutrals with electric blue accent
- **Typography**: Inter for body, Inter Tight for headings
- **Components**: Consistent card design, badges, and buttons
- **Motion**: Subtle spring animations with scroll-triggered reveals

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aryan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── experience/     # Experience page
│   ├── projects/       # Projects page
│   ├── awards/         # Awards page
│   ├── volunteering/   # Volunteering page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   ├── resume/         # Resume page
│   ├── globals.css     # Global styles
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   ├── ui/            # shadcn/ui components
│   ├── header.tsx     # Navigation header
│   ├── footer.tsx     # Site footer
│   ├── hero.tsx       # Hero sections
│   └── ...            # Other components
├── contexts/          # React contexts
│   └── theme-context.tsx
└── lib/               # Utility functions
    └── utils.ts
```

## 🎯 Key Components

### Header
- Sticky navigation with glass morphism effect
- Mobile-responsive menu
- Theme toggle (dark/light/system)
- Download resume CTA

### Hero Sections
- Animated text reveals
- Floating background elements
- Call-to-action buttons
- Role highlights

### Project Cards
- Case study format (Problem → Approach → Impact)
- Technology badges
- Interactive hover effects
- Responsive grid layout

### Contact Form
- Form validation with error handling
- Success/error states
- Responsive layout
- Accessibility features

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

- **Lighthouse Scores**: Target 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Tree-shaken and optimized
- **Images**: Next.js Image optimization
- **Fonts**: Optimized font loading

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion preferences
- High contrast support

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Optional: Email service for contact form
EMAIL_API_KEY=your_email_api_key

# Optional: Analytics
ANALYTICS_ID=your_analytics_id
```

### Tailwind Configuration

Custom colors, fonts, and animations are defined in `tailwind.config.ts`.

### Theme Configuration

Theme settings are managed in `src/contexts/theme-context.tsx`.

## 📝 Content Management

### Adding New Projects

Edit `src/components/projects-grid.tsx` to add new projects to the portfolio.

### Updating Experience

Modify `src/components/experience-timeline.tsx` to update work experience.

### Blog Posts

Blog content is currently placeholder. Integrate with a CMS like Contentful or Sanity for dynamic content.

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.ts` and `src/app/globals.css`.

### Fonts
Modify font imports in `src/app/globals.css` and font family settings in `tailwind.config.ts`.

### Animations
Adjust animation timings and effects in component files using Framer Motion.

## 🧪 Testing

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Run build check
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: akum9196@uni.sydney.edu.au
- **LinkedIn**: [Aryan Kumawat | LinkedIn](https://linkedin.com/in/aryan-kumawat)
- **Location**: Sydney, Australia

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Lucide](https://lucide.dev/) for icons

---

Built with ❤️ in Sydney, Australia
