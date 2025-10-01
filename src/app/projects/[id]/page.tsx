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
  Play
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
  dataset: {
    name: string;
    platform: string;
    samples: string;
    genes: string;
    source: string;
    url: string;
  };
  methodology: {
    dataProcessing: string[];
    featureSelection: string[];
    models: Array<{
      name: string;
      description: string;
      performance: string;
    }>;
    evaluation: string[];
  };
  shinyApp: {
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
  results: {
    keyMetrics: {
      bestModel: string;
      auc: string;
      accuracy: string;
      sensitivity: string;
      specificity: string;
      f1Score: string;
    };
    selectedGenes: string[];
    clinicalSignificance: string[];
  };
  technicalDetails: {
    packages: string[];
    dataProcessing: string;
    featureSelection: string;
    modelTraining: string;
    geneAnnotation: string;
    visualization: string;
  };
  repository: {
    structure: string[];
    documentation: string;
    codeQuality: string;
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

          {/* Dataset Information */}
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
                      <span className="text-white text-sm">{project.dataset.source}</span>
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

          {/* Methodology */}
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

          {/* Results */}
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
                    {project.results.selectedGenes.map((gene, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {gene}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Shiny App Features */}
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
