"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { 
  Code2, 
  Database, 
  Brain, 
  TrendingUp, 
  Globe, 
  Zap,
  FileText,
  BarChart3,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95, icon: Code2 },
      { name: "R", level: 90, icon: FileText },
      { name: "Java", level: 85, icon: Code2 },
      { name: "SQL", level: 88, icon: Database },
    ]
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Machine Learning", level: 92, icon: Brain },
      { name: "Statistical Analysis", level: 90, icon: BarChart3 },
      { name: "Deep Learning", level: 85, icon: Cpu },
      { name: "Data Visualization", level: 88, icon: TrendingUp },
    ]
  },
  {
    title: "Finance & Analytics",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Financial Modeling", level: 90, icon: TrendingUp },
      { name: "Risk Analysis", level: 87, icon: BarChart3 },
      { name: "Portfolio Optimization", level: 85, icon: Globe },
      { name: "Quantitative Analysis", level: 88, icon: Zap },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Pandas & NumPy", level: 95, icon: Database },
      { name: "Scikit-learn", level: 90, icon: Brain },
      { name: "TensorFlow/PyTorch", level: 85, icon: Cpu },
      { name: "Git & GitHub", level: 88, icon: Code2 },
    ]
  }
];

export function SkillsSection() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-violet-900/20 to-slate-900" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              Core competencies in data science, machine learning, and financial modeling
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.2}>
              <GlassCard className="group hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5 group-hover/skill:bg-white/10 transition-colors">
                              <skill.icon className="h-4 w-4 text-slate-300 group-hover/skill:text-white transition-colors" />
                            </div>
                            <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-slate-400 group-hover/skill:text-slate-300 transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* Additional Skills */}
        <Reveal delay={0.8}>
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Data Visualization", "Statistical Modeling", "Time Series Analysis",
                "Natural Language Processing", "Computer Vision", "Cloud Computing",
                "Docker & Kubernetes", "API Development", "Web Scraping",
                "Business Intelligence", "A/B Testing", "Experimental Design"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
