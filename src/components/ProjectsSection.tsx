"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Eye, Code, TrendingUp, Brain, Database, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "alopecia-risk-model",
    title: "Alopecia Areata Risk Model",
    description: "Gene expression classification using GSE68801 dataset with LASSO/SVM/Random Forest models and deployed Shiny risk calculator.",
    category: "Machine Learning",
    icon: Brain,
    color: "from-[#66FCF1] to-[#45A29E]",
    technologies: ["R", "Shiny", "Machine Learning", "Bioinformatics"],
    status: "Completed",
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
    technologies: ["Django", "Python", "Tailwind CSS", "SQLite", "Alpine.js"],
    status: "Completed",
    github: "https://github.com/aryankumawat/Exam-Portal.git",
    live: "#",
    featured: true,
  },
  {
    id: "stock-volatility-prediction",
    title: "Stock Volatility Prediction",
    description: "Engineered features and trained Linear Regression, Random Forest, XGBoost models with GARCH(1,1) for time-varying volatility analysis.",
    category: "Finance",
    icon: TrendingUp,
    color: "from-cyan-500 to-cyan-600",
    technologies: ["Python", "Scikit-learn", "XGBoost", "GARCH"],
    status: "Completed",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "multi-model-ai-agent",
    title: "Multi-Model AI Agent",
    description: "Local LLM workflow with task orchestration, agent specialization, and ephemeral concurrency using Llama 3.3 70B and Phi-4 14B.",
    category: "AI Agents",
    icon: Code,
    color: "from-[#66FCF1] to-[#45A29E]",
    technologies: ["Python", "LLMs", "Agent Systems", "Concurrency"],
    status: "In Progress",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "edu-chat",
    title: "EDU Chat - Student Collaboration",
    description: "Student collaboration application with full project management artifacts including business case, WBS, risk assessment, and quality planning.",
    category: "Software Development",
    icon: Database,
    color: "from-pink-500 to-pink-600",
    technologies: ["Project Management", "Business Analysis", "Risk Management"],
    status: "Completed",
    github: "#",
    live: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text bg-gradient-to-r from-[#66FCF1] via-[#45A29E] to-[#C5C6C7] bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              Innovative solutions that showcase my expertise in data science, finance, and AI
            </p>
          </div>
        </Reveal>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.2}>
              <GlassCard className="group h-full hover:scale-105 transition-all duration-500">
                <div className="p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex gap-2">
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
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300/80 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:bg-white/10 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-[#66FCF1] to-[#45A29E] text-white border-0 group/btn"
                    >
                      <Link href={`/projects/${project.id}`}>
                        <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Details
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="glass border-white/20 hover:bg-white/10 group/btn"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="glass border-white/20 hover:bg-white/10 group/btn"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <Reveal delay={0.8}>
              <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
                Additional Projects
              </h3>
            </Reveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Reveal key={project.id} delay={0.8 + index * 0.1}>
                  <GlassCard className="group h-full hover:scale-105 transition-all duration-300">
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform`}>
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-slate-300/80 flex-1 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full glass border-white/20 hover:bg-white/10"
                      >
                        <Link href={`/projects/${project.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {/* View All Projects Button */}
        <Reveal delay={1.2}>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#66FCF1] via-[#45A29E] to-[#1F2833] text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
