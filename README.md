# Aryan Kumawat - Personal Portfolio

A futuristic, interactive, and responsive portfolio website built with **Next.js 15**, showcasing expertise in **Data Science**, **AI Engineering**, and **Full-Stack Development**. The site features a **premium glass-morphism design**, immersive space-themed backgrounds, and smooth scroll animations.

![Portfolio Preview](public/og-image.png)

## 🚀 Features

- **Futuristic Design System**:
  - **Glass Morphism**: Translucent cards with backdrop blur, noise textures, and subtle border gradients.
  - **Immersive Backgrounds**: Dynamic particle systems (`@tsparticles`) and space-themed parallax effects.
  - **Smooth Animations**: Powered by **Framer Motion** for revealing elements and **Lenis** for buttery smooth scrolling.

- **Content-Rich Sections**:
  - **Dynamic Project Showcase**: Detailed technical deep-dives into projects like **SlideSmith**.
  - **Interactive Experience Timeline**: Glass-styled chronological work history.
  - **Research Integration**: Highlights from bioinformatics and ML research (Alopecia Areata).
  - **Blog System**: A fully functional blog sharing insights on AI innovations (Kiro, Google Antigravity).

- **Performance & Tech**:
  - **Next.js 15 (App Router)**: Creating a fast, server-rendered React application.
  - **Responsive**: Flawless experience from mobile (360px) to ultra-wide (1440px+).
  - **Accessibility**: Semantic HTML and ARIA labels.
  - **SEO Optimized**: Meta tags and OpenGraph support.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/), Lucide React
- **Particles**: [@tsparticles/react](https://particles.js.org/)
- **Content**: Custom Markdown rendering

## 📂 Project Structure

```bash
src/
├── app/                    # Next.js App Router
│   ├── about/              # Bio & Skills
│   ├── blog/               # AI & Tech Articles
│   ├── contact/            # Contact Form
│   ├── experience/         # Career Timeline
│   ├── projects/           # Technical Showcase
│   ├── awards/             # Recognition
│   ├── volunteering/       # Community Work
│   └── globals.css         # Global Styles & Tailwind Directives
├── components/             # Reusable UI & Layouts
│   ├── ui/                 # Shadcn primitives
│   ├── GlassCard.tsx       # Core glass-morphism container
│   ├── SpaceBackground.tsx # Specialized background component
│   ├── particles.tsx       # Interactive particle effects
│   ├── hero.tsx            # Hero section variants
│   └── ...
├── lib/                    # Utilities & Helpers
└── contexts/               # Global State (Theme, etc.)
```

## 🌟 Featured Projects

### **SlideSmith - Multi-Agent AI Slide Maker** 🚧
An autonomous 13-agent AI system that transforms prompts into professional presentation slides.
- **Stack**: Next.js 15, Ollama, Phi-4, Gemma3-4B, Playwright.
- **Highlights**: 60% speed improvement via parallel processing, local AI inference for privacy.

### **Alopecia Areata Risk Model & Shiny App** 🧬
Bioinformatics research application for predicting disease risk.
- **Stack**: R, Shiny, Random Forest, LASSO.
- **Impact**: Identification of 21 key biomarkers with 85% model accuracy.

### **Exam Portal System** 🎓
Secure remote assessment platform built during the pandemic.
- **Stack**: Django, Python, Tailwind CSS.
- **Features**: Anti-cheat detection, automated grading, scalable architecture.

## 📝 Recent Blog Posts

- **Kiro: The AI IDE That Turns Ideas Into Production-Ready Code** (Dec 2025) exploring the shift to intent-driven engineering.
- **Google Antigravity** (Dec 2025) deep-dive into autonomous coding agents.
- **Meta In-Display Glasses** (Oct 2025) analyzing the future of AR.
- **Genspark & n8n** articles covering the latest in automation tools.

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aryankumawat/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

Optimized for deployment on **Vercel**:
1. Push to GitHub.
2. Import project into Vercel.
3. Add environment variables (if any).
4. Deploy!

## 📬 Contact

- **Email**: [kumawataryan23@gmail.com](mailto:kumawataryan23@gmail.com)
- **LinkedIn**: [Aryan Kumawat](https://www.linkedin.com/in/aryan-kumawat-/)
- **GitHub**: [aryankumawat](https://github.com/aryankumawat)

---
*© 2025 Aryan Kumawat. Built with ❤️ and Next.js.*