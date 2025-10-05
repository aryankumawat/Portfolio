"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
    description: "Gene expression classification using GSE68801 dataset. Built LASSO/SVM/Random Forest models with deployed Shiny risk calculator.",
    category: "Machine Learning",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    year: "2025",
    status: "Completed",
    technologies: ["R", "Shiny", "Machine Learning", "Bioinformatics"],
    problem: "Need for early detection and risk assessment of Alopecia Areata using gene expression data",
    approach: "Applied multiple ML algorithms (LASSO, SVM, Random Forest) to gene expression data and deployed interactive Shiny app for risk calculation",
    impact: "ROC analysis showed 85% accuracy, with high sensitivity and specificity for early detection",
    image: "/api/placeholder/400/250",
    github: "https://github.com/aryankumawat/Alopecia-Areata-Risk-Model-Shiny-App",
    live: "#",
    featured: true,
  },
  {
    id: "exam-portal",
    title: "Modern Exam Portal System",
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
    color: "from-purple-500 to-purple-600",
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
    id: "ai-slide-maker",
    title: "AI Slide Maker (Multi-Model)",
    description: "Generate polished, animated slide decks from any topic—powered by a multi-model agent pipeline with smart model routing, live widgets, and one-click export to PDF/PPTX.",
    category: "AI Applications",
    icon: Brain,
    color: "from-orange-500 to-orange-600",
    year: "2025",
    status: "In Progress",
    technologies: ["Next.js 14", "React 18", "TypeScript", "Multi-Model AI", "Playwright", "PptxGenJS", "Ollama"],
    problem: "Decks are slow to make, inconsistent to style, and painful to update. Teams need fast first drafts that still look professional, with the option to go 'live' during presentations.",
    approach: "Multi-model architecture with orchestrator that classifies each step and routes to the best model for quality, cost, and latency. Features outline planning, slide writing, styling, and live widgets.",
    impact: "Enables rapid creation of professional slide decks with one-prompt generation, per-slide regeneration, live widgets for real-time data, and faithful PDF/PPTX exports with speaker notes.",
    image: "/api/placeholder/400/250",
    github: "#",
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

export function ProjectsGrid() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-padding">
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${project.color}`}>
                      <project.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Problem</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Approach</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.approach}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Impact</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.impact}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link href={`/projects/${project.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">
            Additional Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                        <project.icon className="h-4 w-4 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/projects/${project.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric to-electric-light text-white rounded-full text-sm font-medium">
            <span>💻</span>
            <span>More projects coming soon!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
