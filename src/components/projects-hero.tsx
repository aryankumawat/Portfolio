"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, BarChart3, TrendingUp, Brain, Database, Globe } from "lucide-react";

const projectCategories = [
  {
    icon: Code,
    label: "Machine Learning",
    count: "3",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BarChart3,
    label: "Data Analysis",
    count: "2",
    color: "from-green-500 to-green-600",
  },
  {
    icon: TrendingUp,
    label: "Finance",
    count: "1",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Brain,
    label: "AI Agents",
    count: "1",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Database,
    label: "Software Dev",
    count: "2",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Globe,
    label: "Research",
    count: "1",
    color: "from-teal-500 to-teal-600",
  },
];

export function ProjectsHero() {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A collection of technical projects, research initiatives, and practical 
            applications showcasing my skills in data science, machine learning, 
            finance, and software development.
          </motion.p>
        </motion.div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {projectCategories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {category.count}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {category.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                My Project Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric to-electric-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Problem Definition</h4>
                  <p className="text-sm text-muted-foreground">
                    Identify real-world challenges and define clear objectives
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric to-electric-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Technical Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    Design and implement data-driven solutions using appropriate tools
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric to-electric-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Impact & Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Evaluate results, document learnings, and iterate for improvement
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
