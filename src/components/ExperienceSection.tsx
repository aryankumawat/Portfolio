"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Building, Award, Users, Target } from "lucide-react";

const experiences = [
  {
    title: "Data Science Intern",
    company: "TechCorp Analytics",
    location: "Sydney, Australia",
    duration: "2024 - Present",
    type: "Internship",
    description: "Developing machine learning models for predictive analytics and building automated data pipelines for real-time insights.",
    achievements: [
      "Built ML pipeline that improved prediction accuracy by 25%",
      "Automated data processing reducing manual work by 60%",
      "Collaborated with cross-functional teams on 5+ projects"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker"],
    icon: Building,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Financial Modeling Consultant",
    company: "FinanceFlow Solutions",
    location: "Remote",
    duration: "2023 - 2024",
    type: "Consulting",
    description: "Provided financial modeling and risk analysis services for startups and mid-size companies, focusing on valuation and investment strategies.",
    achievements: [
      "Created valuation models for 10+ companies",
      "Developed risk assessment frameworks",
      "Improved client portfolio performance by 15%"
    ],
    technologies: ["Excel", "Python", "R", "Bloomberg Terminal"],
    icon: Target,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Research Assistant",
    company: "University of Sydney",
    location: "Sydney, Australia",
    duration: "2023 - 2024",
    type: "Research",
    description: "Conducted research on machine learning applications in healthcare, focusing on early disease detection and treatment optimization.",
    achievements: [
      "Published 2 research papers in peer-reviewed journals",
      "Presented findings at 3 international conferences",
      "Mentored 5 undergraduate students"
    ],
    technologies: ["R", "Python", "MATLAB", "Statistical Analysis"],
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Community Impact Lead",
    company: "Aasha Foundation",
    location: "Madhya Pradesh, India",
    duration: "2020 - 2022",
    type: "Volunteer",
    description: "Founded and led educational initiatives to support underprivileged children's education, raising funds and organizing programs.",
    achievements: [
      "Raised INR 3.5 Lakh for education of 150+ children",
      "Organized 40+ educational sessions",
      "Built partnerships with 5 local organizations"
    ],
    technologies: ["Project Management", "Community Outreach", "Fundraising"],
    icon: Users,
    color: "from-orange-500 to-red-500",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              Professional journey spanning data science, finance, research, and community impact
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={exp.title} delay={index * 0.2}>
                <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <GlassCard className="group hover:scale-105 transition-all duration-300">
                      <div className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} group-hover:scale-110 transition-transform`}>
                              <exp.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                {exp.title}
                              </h3>
                              <p className="text-slate-400 font-medium">{exp.company}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>

                        {/* Details */}
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300/80 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-slate-400 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs hover:bg-white/10 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* View Full Experience Button */}
        <Reveal delay={1.0}>
          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlassCard className="inline-block group cursor-pointer">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    View Complete Experience
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Explore my full professional journey, internships, and achievements
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
