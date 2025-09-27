import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Stock Prediction",
    description: "Machine learning model that predicts stock prices using LSTM neural networks and sentiment analysis from news data.",
    technologies: ["Python", "TensorFlow", "LSTM", "Pandas", "Scikit-learn"],
    category: "Data Science",
    status: "Completed",
    image: "/images/projects/stock-prediction.jpg",
    liveUrl: "https://stock-prediction-demo.com",
    githubUrl: "https://github.com/aryankumawat/stock-prediction",
    achievements: [
      "Achieved 85% accuracy in stock price prediction",
      "Reduced prediction error by 30% compared to traditional methods",
      "Processed 10,000+ news articles for sentiment analysis"
    ]
  },
  {
    id: 2,
    title: "Portfolio Analytics Dashboard",
    description: "Real-time financial dashboard for portfolio management with interactive charts and risk analysis tools.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    category: "Web Development",
    status: "In Progress",
    image: "/images/projects/portfolio-dashboard.jpg",
    liveUrl: "https://portfolio-dashboard-demo.com",
    githubUrl: "https://github.com/aryankumawat/portfolio-dashboard",
    achievements: [
      "Built responsive dashboard with 50+ interactive charts",
      "Implemented real-time data updates using WebSockets",
      "Reduced portfolio analysis time by 60%"
    ]
  },
  {
    id: 3,
    title: "Blockchain Trading Bot",
    description: "Automated cryptocurrency trading bot with risk management and portfolio optimization algorithms.",
    technologies: ["Python", "Web3", "Binance API", "PostgreSQL", "Docker"],
    category: "Finance",
    status: "Completed",
    image: "/images/projects/trading-bot.jpg",
    liveUrl: "https://trading-bot-demo.com",
    githubUrl: "https://github.com/aryankumawat/trading-bot",
    achievements: [
      "Generated 25% returns in 6 months of trading",
      "Implemented advanced risk management strategies",
      "Built comprehensive backtesting framework"
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-hero noise">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text-hero">
                Featured Projects
              </h1>
              <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
                AI-driven solutions and data science projects that showcase my expertise in 
                machine learning, finance, and software development.
              </p>
            </div>
          </Reveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <GlassCard className="group">
                  <div className="space-y-4">
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-4xl">🚀</div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-300/80 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-300">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {project.achievements.slice(0, 2).map((achievement, idx) => (
                            <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="glass border-white/20 hover:bg-white/5"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
        </div>
      </section>
    </div>
  );
}
