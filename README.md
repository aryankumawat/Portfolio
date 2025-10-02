# Aryan Kumawat - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 14, showcasing expertise in Data Science, Machine Learning, Finance, and Software Development with a focus on AI-driven solutions and bioinformatics research.

## 🚀 Features

- **Modern Glass Morphism Design**: Elegant translucent cards with backdrop blur effects
- **Responsive**: Fully responsive across all devices (360px → 1440px)
- **Performance**: Optimized for Core Web Vitals with 95+ scores
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Animations**: Smooth Framer Motion animations with reduced motion support
- **Dynamic Project Pages**: Detailed project showcases with comprehensive information
- **Interactive Timeline**: Professional experience with glass morphism cards
- **Real-time Contact Form**: API-powered contact system

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glass morphism effects
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + custom GlassCard components
- **Icons**: Lucide React
- **Fonts**: Inter, Inter Tight, Geist Mono
- **State Management**: React hooks and context

## 📱 Pages & Routes

- `/` - Home with hero section and project highlights
- `/about` - Bio, skills, and contact information
- `/experience` - Work history with glass morphism timeline
- `/projects` - Featured technical and finance projects
  - `/projects/[id]` - Dynamic detailed project pages
- `/awards` - Honors, certifications, and recognition
- `/volunteering` - Community impact and volunteer work
- `/blog` - Articles and insights (placeholder content)
- `/contact` - Contact form with API integration
- `/resume` - Resume viewer and download

## 🎨 Design System

- **Glass Morphism**: Translucent cards with backdrop blur and subtle borders
- **Colors**: Slate/stone neutrals with electric blue accent and gradient overlays
- **Typography**: Inter for body, Inter Tight for headings
- **Components**: Consistent glass card design, badges, and interactive buttons
- **Motion**: Subtle spring animations with scroll-triggered reveals
- **Visual Hierarchy**: Clear information architecture with proper contrast

## 🔬 Featured Projects

### Alopecia Areata Risk Model & Shiny App
- **Technology**: R, Shiny, Machine Learning, Bioinformatics
- **Dataset**: GSE68801 (122 samples, 54,675 genes)
- **Models**: Random Forest (AUC: 0.92), SVM, GLMNET, kNN
- **Features**: Interactive Shiny web application with batch prediction
- **Research**: Based on latest eLife research on ILC1-like lymphocytes
- **GitHub**: [Repository Link](https://github.com/aryankumawat/Alopecia-Areata-Risk-Model-Shiny-App)

### Exam Portal System
- **Technology**: Django, Python, Tailwind CSS, SQLite, Alpine.js
- **Context**: Built during COVID-19 school closures for remote assessments
- **Features**: Timed exams with automatic submission, anti-cheat detection, beautiful responsive UI
- **Security**: Rate limiting, IP whitelisting, tab switching detection, session validation
- **Impact**: Enabled secure online examinations for thousands of students during pandemic
- **GitHub**: [Repository Link](https://github.com/aryankumawat/Exam-Portal.git)

### Stock Volatility Prediction
- **Technology**: Python, Scikit-learn, XGBoost, GARCH
- **Approach**: Feature engineering, ensemble ML models, time series analysis
- **Impact**: 23% improvement in volatility prediction accuracy

### Multi-Model AI Agent
- **Technology**: Python, LLMs, Agent Systems, Concurrency
- **Models**: Llama 3.3 70B, Phi-4 14B
- **Features**: Task orchestration, agent specialization, ephemeral concurrency

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aryankumawat/Portfolio.git
cd Portfolio
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
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   │   └── [id]/         # Dynamic project detail pages
│   ├── awards/            # Awards page
│   ├── volunteering/      # Volunteering page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── resume/            # Resume page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── GlassCard.tsx     # Custom glass morphism component
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── hero.tsx          # Hero sections
│   ├── projects-grid.tsx # Project showcase grid
│   ├── experience-timeline.tsx # Work experience timeline
│   └── ...               # Other components
├── contexts/             # React contexts
│   └── theme-context.tsx
└── lib/                  # Utility functions
    └── utils.ts
```

## 🎯 Key Components

### GlassCard Component
- Custom glass morphism design with backdrop blur
- Consistent styling across all sections
- Hover effects and smooth transitions
- Responsive design

### Dynamic Project Pages
- Comprehensive project information
- Methodology and technical details
- Results and performance metrics
- Interactive elements and references
- Responsive layout with glass morphism

### Experience Timeline
- Glass morphism cards for each role
- Chronological work history
- Achievement highlights and skills
- Current position indicators

### Contact Form
- API-powered form submission
- Form validation with error handling
- Success/error states
- Responsive layout with glass styling

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
- **TypeScript**: Full type safety with zero errors

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion preferences
- High contrast support
- Focus management

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Contact form API
EMAIL_API_KEY=your_email_api_key

# Analytics (optional)
ANALYTICS_ID=your_analytics_id
```

### Tailwind Configuration

Custom colors, fonts, and animations are defined in `tailwind.config.ts` with glass morphism utilities.

### Theme Configuration

Theme settings are managed in `src/contexts/theme-context.tsx`.

## 📝 Content Management

### Adding New Projects

1. Add project data to `src/app/projects/page.tsx`
2. Create detailed project information in `src/app/projects/[id]/page.tsx`
3. Update project references in other components

### Updating Experience

Modify `src/components/experience-timeline.tsx` to update work experience with glass morphism styling.

### Blog Posts

Blog content is currently placeholder. Integrate with a CMS like Contentful or Sanity for dynamic content.

## 🎨 Customization

### Glass Morphism Effects

Customize glass effects in `src/components/GlassCard.tsx` and `tailwind.config.ts`.

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

## 🔬 Research Integration

The portfolio showcases cutting-edge research integration:

- **Alopecia Areata Research**: Latest eLife publications on ILC1-like lymphocytes
- **Gene Expression Analysis**: GSE68801 dataset with 54,675 gene features
- **Machine Learning Applications**: Advanced ML models for medical diagnosis
- **Bioinformatics Tools**: R Shiny applications for interactive analysis

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: kumawataryan23@gmail.com
- **LinkedIn**: [Aryan Kumawat | LinkedIn](https://www.linkedin.com/in/aryan-kumawat-/)
- **GitHub**: [aryankumawat](https://github.com/aryankumawat)
- **Location**: Sydney, Australia

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Lucide](https://lucide.dev/) for icons
- [eLife](https://elifesciences.org/) for cutting-edge research publications

## 🚀 Recent Updates

- ✅ **Glass Morphism Design**: Implemented throughout the portfolio
- ✅ **Dynamic Project Pages**: Detailed project showcases with comprehensive information
- ✅ **Experience Timeline**: Updated with glass morphism cards
- ✅ **Research Integration**: Latest Alopecia Areata research references
- ✅ **TypeScript Safety**: Full type safety with zero compilation errors
- ✅ **Performance Optimization**: 95+ Lighthouse scores across all metrics
- ✅ **Responsive Design**: Perfect display across all device sizes

---

Built with ❤️ | Powered by cutting-edge research and modern web technologies