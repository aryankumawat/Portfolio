"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Code, 
  TrendingUp, 
  Globe,
  Building2,
  Lightbulb
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "University of Sydney",
    description: "Bachelor of Advanced Computing (Data Science + Finance)",
    badge: "2022-2026",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    title: "Sydney India Scholar",
    description: "Recipient of prestigious scholarship for academic excellence",
    badge: "Merit-based",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Leadership Experience",
    description: "School Captain, Club Founder, Design Director roles",
    badge: "5+ years",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Code,
    title: "Technical Skills",
    description: "Python, R, Java, ML, Data Analysis, Cybersecurity",
    badge: "Advanced",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Finance Focus",
    description: "Equity analysis, financial modeling, impact investing",
    badge: "Specialized",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Globe,
    title: "International Impact",
    description: "Volunteering across India, supporting 300+ beneficiaries",
    badge: "Global",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Building2,
    title: "Consulting Experience",
    description: "Digital Impact Tech Consultant at 180 Degrees Consulting",
    badge: "Current",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation Projects",
    description: "AI agents, ML models, financial analysis tools",
    badge: "Active",
    color: "from-yellow-500 to-yellow-600",
  },
];

export function Highlights() {
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Work With Me?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unique blend of technical expertise, financial acumen, and proven leadership 
            that drives real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${highlight.color}`}>
                      <highlight.icon className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {highlight.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric to-electric-light text-white rounded-full text-sm font-medium">
            <span>🚀</span>
            <span>Ready to collaborate on your next project?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
