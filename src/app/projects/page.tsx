import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Database, 
  Globe,
  ExternalLink,
  Github,
  Eye
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "alopecia-risk-model",
    title: "Alopecia Areata Risk Model & Shiny App",
    description: "Bioinformatics pipeline analyzing gene expression data from GSE68801 dataset. Features LASSO feature selection, multiple ML models (Random Forest, SVM, GLMNET), and interactive Shiny web application for Alopecia Areata risk assessment.",
    category: "Machine Learning",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    year: "2025",
    status: "Completed",
    technologies: ["R", "Shiny", "Machine Learning", "Bioinformatics", "LASSO", "Random Forest"],
    problem: "Alopecia Areata affects 2% of the population, but current diagnostic methods are limited and subjective. Need for early detection using molecular biomarkers from gene expression data.",
    approach: "Applied differential expression analysis, LASSO feature selection, and multiple ML algorithms to gene expression data. Deployed interactive Shiny web application for real-time risk assessment.",
    impact: "Achieved 92% AUC with 85% accuracy, identifying 21 key genes associated with AA risk. Deployed Shiny app enables real-time risk assessment for early diagnosis.",
    image: "/api/placeholder/400/250",
    github: "https://github.com/aryankumawat/Alopecia-Areata-Risk-Model-Shiny-App",
    live: "#",
    featured: true,
  },
  {
    id: "exam-portal",
    title: "Exam Portal System",
    description: "A comprehensive online examination platform built during COVID-19 school closures to enable secure remote assessments. Features advanced anti-cheat detection, beautiful responsive UI, and dynamic dashboards for students and faculty.",
    category: "Web Development",
    icon: Database,
    color: "from-green-500 to-green-600",
    year: "2024",
    status: "Completed",
    technologies: ["Django", "Python", "Tailwind CSS", "SQLite", "Alpine.js", "Django REST Framework"],
    problem: "During COVID-19 school closures, educational institutions needed a secure, reliable online examination platform to conduct assessments remotely while preventing cheating and ensuring academic integrity",
    approach: "Developed a comprehensive full-stack web application with Django backend, responsive frontend, advanced anti-cheat detection, and real-time monitoring to enable secure remote examinations",
    impact: "Enabled educational institutions to conduct secure online exams during COVID-19 lockdowns, serving thousands of students with anti-cheat detection, rate limiting, and comprehensive user management",
    image: "/api/placeholder/400/250",
    github: "https://github.com/aryankumawat/Exam-Portal.git",
    live: "#",
    featured: true,
  },
  {
    id: "stock-volatility-prediction",
    title: "Stock Volatility Prediction",
    description: "Engineered features and trained Linear Regression, Random Forest, XGBoost models. Added GARCH(1,1) for time-varying volatility analysis.",
    category: "Machine Learning",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    year: "2025",
    status: "Completed",
    technologies: ["Python", "Scikit-learn", "XGBoost", "GARCH", "Financial Modeling"],
    problem: "Predicting stock price volatility for better risk management and trading decisions",
    approach: "Feature engineering from market data, ensemble ML models, and GARCH time series analysis for volatility clustering",
    impact: "Improved volatility prediction accuracy by 23% compared to baseline models, enabling better risk assessment",
    image: "/api/placeholder/400/250",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "capital-structure-analysis",
    title: "Capital Structure Analysis - CSL Limited",
    description: "CSL Limited (ASX: CSL) 2019-2024 peer comparison with leverage drivers analysis and strategic recommendations.",
    category: "Finance",
    icon: TrendingUp,
    color: "from-[#66FCF1] to-[#45A29E]",
    year: "2025",
    status: "Completed",
    technologies: ["Financial Analysis", "Excel", "Valuation", "Corporate Finance"],
    problem: "Understanding CSL's capital structure and providing strategic recommendations for optimal financing",
    approach: "Comprehensive analysis of leverage ratios, peer comparison, and identification of key capital structure drivers",
    impact: "Provided actionable recommendations that could optimize CSL's cost of capital by 15-20 basis points",
    image: "/api/placeholder/400/250",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "slidesmith",
    title: "SlideSmith - Enterprise-Grade AI Presentation Platform",
    description: "A production-ready, distributed multi-agent system for automated slide deck generation with advanced quality assurance, semantic validation, and multi-format export. Built on modular, extensible architecture supporting both cloud and edge LLM deployments with 13 specialized AI agents.",
    category: "AI Applications",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    year: "2025",
    status: "In Progress",
    technologies: ["Next.js 15", "TypeScript", "Ollama", "Phi-4 14B", "Gemma3 4B", "OpenAI", "Zod", "PptxGenJS", "PDFKit", "Recharts", "IndexedDB"],
    problem: "Enterprise teams struggle with presentation creation requiring hours of work, inconsistent quality, lack of automated validation, and inability to scale. Existing tools lack fact-checking, accessibility compliance, and flexible deployment options for privacy-sensitive environments.",
    approach: "Implemented a distributed 13-agent collaborative pipeline using LLM orchestration patterns with intelligent model routing (Phi-4 14B for research, Gemma3 4B for content). Features DAG-based workflow, parallel QA validation (4 concurrent agents), provider abstraction (Ollama/OpenAI), and advanced PPTX engine with native chart rendering and smart text wrapping.",
    impact: "Delivers enterprise-grade presentation generation with 75% faster parallel QA, 60% cost optimization through smart routing, 99.5% reliability with graceful degradation, and 100% privacy with local-first deployment. Automated fact-checking, WCAG 2.1 compliance, and Flesch-Kincaid readability analysis ensure production-ready output in 3-5 minutes per deck.",
    image: "/api/placeholder/400/250",
    github: "https://github.com/aryankumawat/slidesmith",
    live: "#",
    featured: true,
  },
  {
    id: "edu-chat",
    title: "EDU Chat - Student Collaboration App",
    description: "Student collaboration application with full project management artifacts including business case, WBS, risk assessment, and quality planning.",
    category: "Software Development",
    icon: Database,
    color: "from-red-500 to-red-600",
    year: "2024",
    status: "Completed",
    technologies: ["Project Management", "Business Analysis", "Risk Management", "Quality Planning"],
    problem: "Students need a platform for collaborative learning and project management",
    approach: "Comprehensive project management approach with business case development, work breakdown structure, and risk/quality planning",
    impact: "Successfully delivered project artifacts that could support 100+ student users with improved collaboration efficiency",
    image: "/api/placeholder/400/250",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: "uav-content-ops",
    title: "Drone Content & UAV Operations",
    description: "Content strategy and compliance research for Australian UAV regulations. Social media operations and regulatory compliance management.",
    category: "Research",
    icon: Globe,
    color: "from-teal-500 to-teal-600",
    year: "2024",
    status: "Completed",
    technologies: ["Content Strategy", "Regulatory Research", "Social Media", "UAV Operations"],
    problem: "Need for compliant and effective content strategy in the UAV industry",
    approach: "Comprehensive research on Australian UAV regulations combined with content strategy development and social media operations",
    impact: "Increased social media engagement by 40% while ensuring 100% regulatory compliance",
    image: "/api/placeholder/400/250",
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-hero noise">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                Featured Projects
              </h1>
              <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
                AI-driven solutions and data science projects that showcase my expertise in 
                machine learning, finance, and software development.
              </p>
            </div>
          </Reveal>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <GlassCard className="group h-full projects-card">
                  <div className="space-y-4 h-full flex flex-col">
                    {/* Project Icon */}
                    <div className="aspect-video bg-gradient-to-br from-[#66FCF1]/20 to-[#45A29E]/20 rounded-lg overflow-hidden flex items-center justify-center">
                      <div className={`p-6 rounded-lg bg-gradient-to-r ${project.color}`}>
                        <project.icon className="h-12 w-12 text-white" />
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className={`text-xs ${
                            project.status === "Completed" 
                              ? "bg-green-600/20 text-green-400 border-green-500/30 hover:bg-green-600/30 shadow-lg shadow-green-500/20" 
                              : "bg-orange-600/20 text-orange-400 border-orange-500/30 hover:bg-orange-600/30 shadow-lg shadow-orange-500/20"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-300/80 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem, Approach, Impact */}
                      <div className="space-y-3 text-xs">
                        <div>
                          <h4 className="font-semibold text-slate-300 mb-1">Problem</h4>
                          <p className="text-slate-400">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-300 mb-1">Approach</h4>
                          <p className="text-slate-400">{project.approach}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-300 mb-1">Impact</h4>
                          <p className="text-slate-400">{project.impact}</p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2 mt-auto">
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-[#66FCF1] to-[#45A29E] hover:from-[#66FCF1]/80 hover:to-[#45A29E]/80 text-white border-0"
                        >
                          <Link href={`/projects/${project.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="glass border-white/20 hover:bg-white/5"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          {/* Additional Projects */}
          <Reveal>
            <h2 className="text-2xl font-bold mb-8 text-center gradient-text">
              Additional Projects
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <GlassCard className="group h-full projects-card">
                  <div className="space-y-4 h-full flex flex-col">
                    {/* Project Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3 flex-1">
                      <h3 className="text-lg font-semibold text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-300/80 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="pt-2 mt-auto">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="w-full glass border-white/20 hover:bg-white/5"
                        >
                          <Link href={`/projects/${project.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
