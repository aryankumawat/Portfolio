"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { 
  GraduationCap, 
  Award, 
  Shield,
  Calendar,
  MapPin,
  Star
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Advanced Computing (Data Science + Finance)",
    institution: "The University of Sydney",
    location: "Sydney, Australia",
    duration: "2022 - 2026",
    description: "Penultimate-year student focusing on computational data science and financial modeling. Core coursework includes machine learning, statistical analysis, financial mathematics, and software engineering.",
    achievements: [
      "Sydney India Scholar - Merit-based scholarship for academic excellence",
      "Sydney International Student Award - Recognition for international students",
      "Relevant coursework: Data Science, Machine Learning, Financial Mathematics, Statistics, Software Engineering"
    ],
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    current: true,
  },
  {
    degree: "International Baccalaureate Diploma Programme (IBDP)",
    institution: "Jayshree Periwal International School",
    location: "Jaipur, India",
    duration: "2020 - 2022",
    description: "Completed IBDP with focus on STEM subjects and economics. Achieved excellent results across all subjects.",
    achievements: [
      "Subject Excellence in Physics, Mathematics AA, Computer Science, Economics, English, Hindi",
      "Extended Essay in Computer Science",
      "Theory of Knowledge (TOK) distinction",
      "CAS (Creativity, Activity, Service) completion with leadership projects"
    ],
    icon: GraduationCap,
    color: "from-green-500 to-green-600",
    current: false,
  },
  {
    degree: "Cybersecurity Bootcamp",
    institution: "edX × University of Sydney",
    location: "Online",
    duration: "January - July 2024",
    description: "Comprehensive cybersecurity program covering offensive and defensive security, system administration, and network security.",
    achievements: [
      "Offensive Security: Penetration testing, ethical hacking, vulnerability assessment",
      "Defensive Security: Incident response, threat hunting, security monitoring",
      "System Administration: Linux/Windows security, access control, configuration management",
      "Network Security: Network protocols, firewall configuration, intrusion detection",
      "Practical hands-on labs and real-world scenarios"
    ],
    icon: Shield,
    color: "from-orange-500 to-orange-600",
    current: false,
  },
];

const additionalCertifications = [
  {
    name: "Trinity College of London (Traditional) Grade 4",
    date: "July 2021",
    description: "Achieved Grade 4 in traditional music performance",
    icon: Award,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Best Intern Award - Akross Solutions",
    date: "2020",
    description: "Recognized for outstanding performance and innovation during internship",
    icon: Star,
    color: "from-yellow-500 to-yellow-600",
  },
];

export function EducationSection() {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
            Education & Certifications
          </h2>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
            A strong academic foundation combined with specialized training in 
            cybersecurity and continuous learning in emerging technologies.
          </p>
        </motion.div>

        {/* Main Education */}
        <div className="space-y-8 mb-16">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/80">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {item.institution}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {item.duration}
                          </div>
                          {item.current && (
                            <Badge variant="success">Current</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-slate-300/80 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-white">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-slate-300/80">
                            <span className="text-electric mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Additional Certifications & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}>
                        <cert.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-white">{cert.name}</h4>
                        <p className="text-sm text-slate-300/80 mb-2">
                          {cert.description}
                        </p>
                        <p className="text-xs text-slate-400">
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
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
            <span>🎓</span>
            <span>Committed to lifelong learning and skill development</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
