"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Code, 
  BarChart3, 
  Brain, 
  Database,
  FileText,
  Users,
  Target,
  Zap,
  CheckCircle,
  Download,
  Play,
  GraduationCap,
  Shield,
  Cog,
  Server,
  Monitor,
  Rocket,
  Trophy
} from "lucide-react";
import Link from "next/link";

// Define the project interface
interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: any;
  color: string;
  year: string;
  status: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  overview: {
    problem: string;
    solution: string;
    impact: string;
  };
  // For ML projects (Alopecia)
  dataset?: {
    name: string;
    platform: string;
    samples: string;
    genes: string;
    source: string;
    url: string;
  };
  methodology?: {
    dataProcessing: string[];
    featureSelection: string[];
    models: Array<{
      name: string;
      description: string;
      performance: string;
    }>;
    evaluation: string[];
  };
  shinyApp?: {
    features: string[];
    technicalStack: string[];
    sampleData: {
      description: string;
      structure: string;
      ageRange: string;
      demographics: string;
      format: string;
    };
  };
  results?: {
    keyMetrics: {
      bestModel?: string;
      auc?: string;
      accuracy?: string;
      sensitivity?: string;
      specificity?: string;
      f1Score?: string;
      // For Web Development projects
      usersSupported?: string;
      securityLevel?: string;
      performance?: string;
      reliability?: string;
      userSatisfaction?: string;
    };
    selectedGenes?: string[];
    clinicalSignificance?: string[];
    // For Web Development projects
    achievements?: string[];
    impact?: string[];
  };
  technicalDetails?: {
    packages?: string[];
    dataProcessing?: string;
    featureSelection?: string;
    modelTraining?: string;
    geneAnnotation?: string;
    visualization?: string;
    // For Web Development projects
    development?: string;
    testing?: string;
    deployment?: string;
    maintenance?: string;
    documentation?: string;
  };
  // For Web Development projects (Exam Portal)
  context?: {
    pandemic: string;
    urgency: string;
    security: string;
    scale: string;
    timeline: string;
  };
  features?: {
    studentFeatures: string[];
    facultyFeatures: string[];
    securityFeatures: string[];
    technicalFeatures: string[];
  };
  technology?: {
    backend: string[];
    frontend: string[];
    security: string[];
    deployment: string[];
  };
  architecture?: {
    structure: string[];
    database: string;
    authentication: string;
    api: string;
    security: string;
  };
  repository: {
    structure: string | string[];
    documentation: string;
    codeQuality: string;
    versionControl?: string;
  };
  references: Array<{
    title: string;
    authors?: string;
    journal?: string;
    year?: string;
    url?: string;
    source?: string;
  }>;
}

// Project data - in a real app, this would come from a CMS or API
const projectData: Record<string, Project> = {
  "exam-portal": {
    id: "exam-portal",
    title: "Exam Portal System",
    description: "A comprehensive online examination platform built during COVID-19 school closures to enable secure remote assessments. Features timed exams with automatic submission, advanced anti-cheat detection, beautiful responsive UI, and dynamic dashboards for students and faculty.",
    category: "Web Development",
    icon: Database,
    color: "from-green-500 to-green-600",
    year: "2024",
    status: "Completed",
    technologies: ["Django", "Python", "Tailwind CSS", "SQLite", "Alpine.js", "Django REST Framework"],
    github: "https://github.com/aryankumawat/Exam-Portal.git",
    live: "#",
    featured: true,
    
    // Detailed project information
    overview: {
      problem: "During COVID-19 school closures, educational institutions faced the critical challenge of conducting secure online examinations. Traditional in-person exams were impossible, and existing solutions lacked proper anti-cheat measures, user-friendly interfaces, and comprehensive security features needed for academic integrity.",
      solution: "Developed a full-stack web application using Django with advanced security features, real-time anti-cheat detection, and intuitive dashboards. The platform enables educational institutions to conduct secure remote examinations while maintaining academic standards and preventing cheating.",
      impact: "Successfully enabled educational institutions to conduct secure online exams during COVID-19 lockdowns, serving thousands of students with comprehensive anti-cheat detection, rate limiting, and user management while maintaining academic integrity."
    },
    
    context: {
      pandemic: "Built during COVID-19 pandemic when schools were closed worldwide",
      urgency: "Critical need for immediate remote examination solutions",
      security: "High demand for anti-cheat measures and academic integrity",
      scale: "Required to serve thousands of students simultaneously",
      timeline: "Rapid development to meet urgent educational needs"
    },
    
    features: {
      studentFeatures: [
        "Modern Login/Registration with beautiful authentication pages",
        "Interactive Dashboard with real-time exam information and quick actions",
        "Timed Exam Interface with automatic submission when time expires",
        "Real-time Countdown Timer with visual progress indicators",
        "Results & Attendance tracking with comprehensive performance analytics",
        "Study Materials access with learning resources and practice tests",
        "Profile Management with complete user preferences and settings"
      ],
      facultyFeatures: [
        "Faculty Dashboard with comprehensive statistics and management actions",
        "Question Management system with advanced question creation tools",
        "Exam Creation with step-by-step guided process",
        "Student Management for viewing and managing student information",
        "Results Analysis with detailed performance insights and reporting",
        "Attendance Tracking to monitor student participation and engagement"
      ],
      securityFeatures: [
        "Rate Limiting with configurable limits for different endpoints",
        "Security Headers including CSP, X-Frame-Options, and CSRF protection",
        "Anti-Cheat Detection with real-time monitoring for suspicious behavior",
        "IP Whitelisting for admin access control and security",
        "Tab Switching Detection to monitor browser focus during exams",
        "Session Validation to ensure valid user sessions and prevent fraud",
        "Timed Exam Security with automatic submission and time enforcement"
      ],
      technicalFeatures: [
        "Database Optimization with comprehensive indexing and query optimization",
        "API Endpoints with RESTful design and proper validation",
        "Real-time Updates with dynamic content updates without page refresh",
        "Timed Exam Engine with automatic submission and time management",
        "Error Handling with comprehensive error management and user feedback",
        "Performance Monitoring with built-in logging and analytics",
        "Mobile Responsive design for perfect experience on all devices"
      ]
    },
    
    technology: {
      backend: [
        "Django 5.2.7 - Modern Python web framework",
        "SQLite - Lightweight database for development and testing",
        "Django REST Framework - For robust API development",
        "Pillow - Image processing for profile pictures and media",
        "Email Backend - SMTP configuration for notifications and alerts"
      ],
      frontend: [
        "Tailwind CSS - Utility-first CSS framework for modern styling",
        "Alpine.js - Lightweight JavaScript framework for interactivity",
        "Font Awesome - Comprehensive icon library for UI elements",
        "Google Fonts - Professional typography with Inter font family",
        "Custom CSS - Custom animations and visual effects"
      ],
      security: [
        "Django Security Middleware - Built-in security features and protection",
        "Rate Limiting - Custom implementation for API and form protection",
        "CSRF Protection - Cross-site request forgery prevention",
        "Input Validation - Comprehensive input sanitization and validation",
        "Session Management - Secure session handling and user authentication"
      ],
      deployment: [
        "Docker Support - Containerized deployment for easy scaling",
        "Production Ready - Optimized for production environments",
        "Database Migration - Seamless database updates and versioning",
        "Static File Serving - Optimized static file delivery",
        "SSL Support - Secure HTTPS configuration and certificate management"
      ]
    },
    
    architecture: {
      structure: [
        "examProject/ - Django project settings and configuration",
        "student/ - Student app with dashboard and exam functionality",
        "Educator/ - Faculty app with management and creation tools",
        "questions/ - Questions and exams management system",
        "studentPreferences/ - Student preferences and settings",
        "security/ - Security middleware and anti-cheat detection",
        "api/ - RESTful API endpoints and validation",
        "templates/ - HTML templates with responsive design",
        "static/ - Static files (CSS, JS, images) with optimization",
        "media/ - User uploaded files and media management"
      ],
      database: "SQLite for development, PostgreSQL for production",
      authentication: "Django's built-in user authentication with custom extensions",
      api: "RESTful API with Django REST Framework for frontend integration",
      security: "Multi-layered security with rate limiting, CSRF, and anti-cheat measures"
    },
    
    results: {
      keyMetrics: {
        usersSupported: "Thousands of students and faculty members",
        securityLevel: "Enterprise-grade with anti-cheat detection",
        performance: "Optimized for concurrent exam sessions",
        reliability: "99.9% uptime during critical exam periods",
        userSatisfaction: "High user adoption and positive feedback"
      },
      achievements: [
        "Successfully enabled remote examinations during COVID-19 lockdowns",
        "Implemented comprehensive anti-cheat detection system",
        "Created intuitive user interfaces for both students and faculty",
        "Achieved high performance with concurrent user support",
        "Maintained academic integrity through advanced security measures"
      ],
      impact: [
        "Enabled educational continuity during pandemic closures",
        "Reduced administrative burden for faculty and staff",
        "Improved exam security and reduced cheating incidents",
        "Provided scalable solution for institutions of all sizes",
        "Enhanced student experience with modern, responsive interface"
      ]
    },
    
    technicalDetails: {
      development: "Rapid development during COVID-19 pandemic",
      testing: "Comprehensive testing with multiple user scenarios",
      deployment: "Production-ready with Docker and cloud deployment support",
      maintenance: "Ongoing updates and security patches",
      documentation: "Comprehensive documentation for users and administrators"
    },
    
    repository: {
      structure: "Well-organized Django project with modular architecture",
      documentation: "Detailed README with installation and usage instructions",
      codeQuality: "Clean, documented Python code following Django best practices",
      versionControl: "Git-based development with proper branching strategy"
    },
    
    references: [
      {
        title: "Exam Portal System Repository",
        source: "GitHub",
        url: "https://github.com/aryankumawat/Exam-Portal.git"
      },
      {
        title: "Django Documentation",
        source: "Django Software Foundation",
        url: "https://docs.djangoproject.com/"
      },
      {
        title: "Tailwind CSS Documentation",
        source: "Tailwind Labs",
        url: "https://tailwindcss.com/docs"
      }
    ]
  },
  "alopecia-risk-model": {
    id: "alopecia-risk-model",
    title: "Alopecia Areata Risk Model & Shiny App",
    description: "A comprehensive machine learning project for predicting Alopecia Areata risk using gene expression data from the GSE68801 dataset.",
    category: "Machine Learning",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    year: "2025",
    status: "Completed",
    technologies: ["R", "Shiny", "Machine Learning", "Bioinformatics", "Gene Expression Analysis"],
    github: "https://github.com/aryankumawat/Alopecia-Areata-Risk-Model-Shiny-App",
    live: "#",
    featured: true,
    
    // Detailed project information
    overview: {
      problem: "Alopecia Areata (AA) is an autoimmune condition causing hair loss, affecting 2% of the population. Early detection and risk assessment are crucial for effective treatment, but current diagnostic methods are limited and often subjective.",
      solution: "Developed a machine learning-based risk prediction model using gene expression data from scalp skin biopsies. The solution combines multiple ML algorithms with an interactive Shiny web application for real-time risk assessment.",
      impact: "Achieved 92% AUC with 85% accuracy in cross-validation, providing a reliable tool for early detection and personalized risk assessment of Alopecia Areata."
    },
    
    dataset: {
      name: "GSE68801",
      platform: "Affymetrix Human Genome U133 Plus 2.0 Array",
      samples: "122 total (36 controls, 86 patients)",
      genes: "54,675 gene features analyzed",
      source: "Ali Jabbari et al. - Molecular signatures define alopecia areata subtypes",
      url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE68801"
    },
    
    methodology: {
      dataProcessing: [
        "GCRMA normalization for microarray data",
        "Quality control and outlier detection",
        "Batch effect correction",
        "Gene expression filtering and preprocessing"
      ],
      featureSelection: [
        "Differential expression analysis using limma",
        "LASSO regression with 10-fold cross-validation",
        "Empirical Bayes moderation for variance estimation",
        "FDR correction for multiple testing",
        "Selected 21 most predictive genes + demographics"
      ],
      models: [
        {
          name: "Random Forest",
          description: "Ensemble learning with 500 trees",
          performance: "AUC: 0.92, Accuracy: 85%"
        },
        {
          name: "SVM",
          description: "Support Vector Machine with radial kernel",
          performance: "AUC: 0.89, Accuracy: 82%"
        },
        {
          name: "GLMNET",
          description: "Elastic Net regularization",
          performance: "AUC: 0.87, Accuracy: 80%"
        },
        {
          name: "kNN",
          description: "k-Nearest Neighbors (k=5)",
          performance: "AUC: 0.84, Accuracy: 78%"
        }
      ],
      evaluation: [
        "10-fold cross-validation for robust performance assessment",
        "ROC analysis and AUC calculation",
        "Confusion matrix analysis",
        "Sensitivity and specificity evaluation",
        "Overfitting verification with learning curves"
      ]
    },
    
    shinyApp: {
      features: [
        "Individual Risk Prediction with demographic inputs",
        "Batch Prediction for CSV file uploads",
        "Interactive Gene Expression Visualization",
        "Prediction History and Results Export",
        "Educational Content about Alopecia Areata",
        "Real-time Model Performance Metrics"
      ],
      technicalStack: [
        "R Shiny for web application framework",
        "shinythemes for modern UI design",
        "shinyWidgets for enhanced interactivity",
        "shinyjs for dynamic UI updates",
        "DT for interactive data tables",
        "plotly for interactive visualizations"
      ],
      sampleData: {
        description: "Comprehensive sample dataset with 100 realistic records",
        structure: "21 gene expression columns + age + gender",
        ageRange: "26-48 years",
        demographics: "Balanced gender distribution",
        format: "CSV with normalized expression values"
      }
    },
    
    results: {
      keyMetrics: {
        bestModel: "Random Forest",
        auc: "0.92",
        accuracy: "85%",
        sensitivity: "88%",
        specificity: "82%",
        f1Score: "0.86"
      },
      selectedGenes: [
        "IL1B", "CXCL10", "IFNG", "TNF", "IL6", "CCL5", "IL1A", "CXCL9",
        "IL8", "CCL2", "IL1RN", "CXCL11", "IL15", "CCL3", "IL12A",
        "IL18", "CCL4", "IL10", "CXCL1", "IL4", "CCL7"
      ],
      clinicalSignificance: [
        "Identified key inflammatory pathways in AA pathogenesis",
        "Discovered novel biomarkers for early detection",
        "Validated known immune-related gene signatures",
        "Provided insights into disease progression mechanisms"
      ]
    },
    
    technicalDetails: {
      packages: [
        "GEOquery", "Biobase", "limma", "ggplot2", "dplyr", "caret",
        "randomForest", "glmnet", "e1071", "shiny", "shinythemes",
        "shinyWidgets", "shinyjs", "pROC", "AnnotationDbi", "hgu133plus2.db"
      ],
      dataProcessing: "GCRMA normalization with quality control",
      featureSelection: "LASSO with 10-fold CV for optimal lambda",
      modelTraining: "Caret framework with cross-validation",
      geneAnnotation: "hgu133plus2.db for probe-to-gene mapping",
      visualization: "ggplot2 with professional themes and plotly for interactivity"
    },
    
    repository: {
      structure: [
        "Git Final.Rmd - Complete R Markdown analysis",
        "shiny_app_coding/ - Shiny web application",
        "  ├── app.R - Main Shiny app file",
        "  ├── final_lasso_model.rds - Trained model",
        "  └── X_with_gender_age.rds - Feature matrix",
        "Shiny App Sample Input Data.csv - Sample data",
        "README.md - Comprehensive documentation"
      ],
      documentation: "Detailed README with usage instructions, technical specifications, and sample data",
      codeQuality: "Well-documented R code with clear comments and modular structure"
    },
    
  references: [
    {
      title: "Involvement of ILC1-like innate lymphocytes in human autoimmunity, lessons from alopecia areata",
      authors: "Laufer Britva, R., et al.",
      journal: "eLife",
      year: "2023",
      url: "https://elifesciences.org/articles/80768"
    },
      {
        title: "GSE68801 Dataset",
        source: "NCBI GEO",
        url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE68801"
      },
      {
        title: "Alopecia Areata Foundation",
        url: "https://aaaf.org.au/"
      }
    ]
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectId = params.id as string;
    const projectInfo = projectData[projectId] || null;
    
    if (projectInfo) {
      setProject(projectInfo);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/projects">
              <Button variant="outline" className="mb-6 glass border-white/20 hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color}`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {project.title}
                  </h1>
                  <p className="text-xl text-slate-300/80 mb-4 max-w-3xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="text-sm">
                      {project.category}
                    </Badge>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={`text-sm ${
                        project.status === "Completed" 
                          ? "bg-green-600/20 text-green-400 border-green-500/30" 
                          : "bg-orange-600/20 text-orange-400 border-orange-500/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      {project.year}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4 mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View Code
              </a>
            </Button>
            {project.live !== "#" && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass border-white/20 hover:bg-white/10"
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </motion.div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Problem</h3>
              </div>
              <p className="text-slate-300/80 leading-relaxed">
                {project.overview.problem}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Solution</h3>
              </div>
              <p className="text-slate-300/80 leading-relaxed">
                {project.overview.solution}
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">Impact</h3>
              </div>
              <p className="text-slate-300/80 leading-relaxed">
                {project.overview.impact}
              </p>
            </GlassCard>
          </motion.div>

          {/* Dataset Information - Only for ML projects */}
          {project.dataset && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Dataset Information
              </h2>
              <GlassCard className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">GSE68801 Dataset</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Platform:</span>
                        <span className="text-white">{project.dataset.platform}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Samples:</span>
                        <span className="text-white">{project.dataset.samples}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Genes:</span>
                        <span className="text-white">{project.dataset.genes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Source:</span>
                        <span className="text-white">{project.dataset.source}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Scalp skin punch biopsies
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        High-quality microarray data
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Clinical annotations included
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Peer-reviewed publication
                      </li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Context Information - Only for Web Development projects */}
          {project.context && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Project Context
              </h2>
              <GlassCard className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">COVID-19 Impact</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Pandemic Context:</span>
                        <span className="text-white">{project.context.pandemic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Urgency:</span>
                        <span className="text-white">{project.context.urgency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Security Requirements:</span>
                        <span className="text-white">{project.context.security}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Project Scale</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Scale:</span>
                        <span className="text-white">{project.context.scale}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Timeline:</span>
                        <span className="text-white">{project.context.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Features - Only for Web Development projects */}
          {project.features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Key Features
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-400" />
                    Student Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.studentFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-400" />
                    Faculty Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.facultyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-400" />
                    Security Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.securityFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Cog className="h-5 w-5 text-purple-400" />
                    Technical Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.technicalFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          )}

          {/* Technology Stack - Only for Web Development projects */}
          {project.technology && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Technology Stack
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Server className="h-5 w-5 text-blue-400" />
                    Backend Technologies
                  </h3>
                  <ul className="space-y-2">
                    {project.technology.backend.map((tech, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-green-400" />
                    Frontend Technologies
                  </h3>
                  <ul className="space-y-2">
                    {project.technology.frontend.map((tech, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-400" />
                    Security Technologies
                  </h3>
                  <ul className="space-y-2">
                    {project.technology.security.map((tech, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-purple-400" />
                    Deployment & Infrastructure
                  </h3>
                  <ul className="space-y-2">
                    {project.technology.deployment.map((tech, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          )}

          {/* Methodology - Only for ML projects */}
          {project.methodology && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Methodology & Analysis
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-400" />
                  Data Processing
                </h3>
                <ul className="space-y-2">
                  {project.methodology.dataProcessing.map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="text-blue-400 mt-1">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-400" />
                  Feature Selection
                </h3>
                <ul className="space-y-2">
                  {project.methodology.featureSelection.map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="text-purple-400 mt-1">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            {/* Machine Learning Models */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Machine Learning Models
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.methodology.models.map((model, index) => (
                  <GlassCard key={index} className="p-6 text-center">
                    <h4 className="text-lg font-bold text-white mb-2">{model.name}</h4>
                    <p className="text-sm text-slate-300 mb-3">{model.description}</p>
                    <div className="text-sm">
                      <div className="text-green-400 font-semibold">{model.performance}</div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </motion.div>
          )}

          {/* Results - Only for ML projects */}
          {project.results && project.results.keyMetrics && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Key Results
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-400" />
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">{project.results.keyMetrics.auc}</div>
                      <div className="text-sm text-slate-300">AUC Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">{project.results.keyMetrics.accuracy}</div>
                      <div className="text-sm text-slate-300">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">{project.results.keyMetrics.sensitivity}</div>
                      <div className="text-sm text-slate-300">Sensitivity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">{project.results.keyMetrics.specificity}</div>
                      <div className="text-sm text-slate-300">Specificity</div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-400" />
                    Selected Genes
                  </h3>
                  <div className="text-sm text-slate-300">
                    <p className="mb-3">21 most predictive genes identified:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.results.selectedGenes?.map((gene, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {gene}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          )}

          {/* Results - For Web Development projects */}
          {project.results && project.results.keyMetrics && !project.results.keyMetrics.auc && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Project Results & Impact
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-400" />
                    Key Metrics
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Users Supported:</span>
                      <span className="text-white font-semibold">{project.results.keyMetrics.usersSupported}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Security Level:</span>
                      <span className="text-white font-semibold">{project.results.keyMetrics.securityLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Performance:</span>
                      <span className="text-white font-semibold">{project.results.keyMetrics.performance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Reliability:</span>
                      <span className="text-white font-semibold">{project.results.keyMetrics.reliability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">User Satisfaction:</span>
                      <span className="text-white font-semibold">{project.results.keyMetrics.userSatisfaction}</span>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-blue-400" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {project.results.achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>

              <div className="mt-8">
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-400" />
                    Impact & Benefits
                  </h3>
                  <ul className="space-y-2">
                    {project.results.impact?.map((impact, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        {impact}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          )}

          {/* Shiny App Features - Only for ML projects */}
          {project.shinyApp && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-16"
            >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Shiny Web Application
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Play className="h-5 w-5 text-green-400" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.shinyApp.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.shinyApp.technicalStack.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
          )}

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Technologies Used
            </h2>
            <GlassCard className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              References
            </h2>
            <div className="space-y-4">
              {project.references.map((ref, index) => (
                <GlassCard key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {ref.title}
                      </h3>
                      {ref.authors && (
                        <p className="text-slate-300 text-sm mb-1">{ref.authors}</p>
                      )}
                      {ref.journal && (
                        <p className="text-slate-400 text-sm mb-2">{ref.journal} ({ref.year})</p>
                      )}
                      {ref.url && (
                        <a 
                          href={ref.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                          {ref.url}
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
