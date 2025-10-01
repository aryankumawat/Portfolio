"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { 
  Code, 
  Database, 
  BarChart3, 
  Shield, 
  Users, 
  Lightbulb,
  TrendingUp,
  Globe
} from "lucide-react";

const technicalSkills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: "Advanced", icon: Code },
      { name: "R", level: "Advanced", icon: Code },
      { name: "Java", level: "Intermediate", icon: Code },
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Data Analysis", level: "Advanced", icon: Database },
      { name: "Machine Learning", level: "Advanced", icon: BarChart3 },
      { name: "Statistical Modeling", level: "Advanced", icon: BarChart3 },
      { name: "Tableau", level: "Intermediate", icon: BarChart3 },
    ],
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Offensive Security", level: "Intermediate", icon: Shield },
      { name: "Defensive Security", level: "Intermediate", icon: Shield },
      { name: "Network Security", level: "Intermediate", icon: Shield },
      { name: "System Administration", level: "Intermediate", icon: Shield },
    ],
  },
  {
    category: "Software Development",
    skills: [
      { name: "Software Development", level: "Intermediate", icon: Code },
      { name: "Cloud Integration", level: "Intermediate", icon: Code },
      { name: "API Development", level: "Intermediate", icon: Code },
    ],
  },
];

const softSkills = [
  {
    category: "Leadership & Management",
    skills: [
      { name: "Team Leadership", level: "Advanced", icon: Users },
      { name: "Project Management", level: "Intermediate", icon: Users },
      { name: "Strategic Planning", level: "Intermediate", icon: Lightbulb },
    ],
  },
  {
    category: "Communication & Collaboration",
    skills: [
      { name: "Problem Solving", level: "Advanced", icon: Lightbulb },
      { name: "Decision Making", level: "Advanced", icon: Lightbulb },
      { name: "Collaboration", level: "Advanced", icon: Users },
      { name: "Mentoring", level: "Intermediate", icon: Users },
    ],
  },
  {
    category: "Business & Finance",
    skills: [
      { name: "Financial Modeling", level: "Intermediate", icon: TrendingUp },
      { name: "Equity Analysis", level: "Intermediate", icon: TrendingUp },
      { name: "Impact Investing", level: "Intermediate", icon: TrendingUp },
    ],
  },
  {
    category: "Global Perspective",
    skills: [
      { name: "Cross-cultural Communication", level: "Advanced", icon: Globe },
      { name: "International Experience", level: "Advanced", icon: Globe },
      { name: "Community Impact", level: "Advanced", icon: Globe },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "from-green-500 to-green-600";
    case "Intermediate":
      return "from-blue-500 to-blue-600";
    case "Beginner":
      return "from-yellow-500 to-yellow-600";
    default:
      return "from-gray-500 to-gray-600";
  }
};

export function SkillsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
            A comprehensive skill set spanning technical capabilities, leadership, 
            and domain expertise in data science and finance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                  <Code className="h-5 w-5 text-electric" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                {technicalSkills.map((category, categoryIndex) => (
                  <div key={category.category}>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                      {category.category}
                    </h4>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <skill.icon className="h-4 w-4 text-electric" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <Badge 
                            variant="secondary"
                            className={`bg-gradient-to-r ${getLevelColor(skill.level)} text-white border-0`}
                          >
                            {skill.level}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                  <Users className="h-5 w-5 text-electric" />
                  Soft Skills & Leadership
                </h3>
                <div className="space-y-6">
                {softSkills.map((category, categoryIndex) => (
                  <div key={category.category}>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                      {category.category}
                    </h4>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <skill.icon className="h-4 w-4 text-electric" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <Badge 
                            variant="secondary"
                            className={`bg-gradient-to-r ${getLevelColor(skill.level)} text-white border-0`}
                          >
                            {skill.level}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric to-electric-light text-white rounded-full text-sm font-medium">
            <span>💡</span>
            <span>Continuously learning and expanding my skill set</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
