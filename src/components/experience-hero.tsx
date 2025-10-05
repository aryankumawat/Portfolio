"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { Briefcase, Users, Target, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    label: "Years of Experience",
    value: "5+",
    description: "In leadership and technical roles",
  },
  {
    icon: Users,
    label: "Teams Led",
    value: "10+",
    description: "Across various organizations",
  },
  {
    icon: Target,
    label: "Projects Completed",
    value: "25+",
    description: "Technical and community initiatives",
  },
  {
    icon: TrendingUp,
    label: "Impact Scale",
    value: "300+",
    description: "Beneficiaries supported",
  },
];

export function ExperienceHero() {
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
            className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text"
          >
            Professional Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto"
          >
            A diverse portfolio of roles spanning consulting, technology, education, 
            and community impact. Each position has contributed to my growth as a 
            leader and technical professional.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <GlassCard className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm mb-1 text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.description}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard>
            <h3 className="text-2xl font-heading font-semibold mb-6 text-center text-white">
              What I Bring to the Table
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-[#66FCF1]">Leadership & Management</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#66FCF1] mt-1">•</span>
                    Proven track record of leading teams and organizations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#66FCF1] mt-1">•</span>
                    Strategic planning and project management expertise
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#66FCF1] mt-1">•</span>
                    Mentoring and developing team members
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-blue-400">Technical & Domain</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Data science and machine learning applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Financial modeling and analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Software development and cybersecurity
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
