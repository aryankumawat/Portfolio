"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Download, 
  Eye, 
  FileText, 
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Award
} from "lucide-react";
import Link from "next/link";

const resumeHighlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Bachelor of Advanced Computing",
    description: "Data Science + Finance at USYD",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "5+ Years",
    description: "Leadership & Technical Roles",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Award,
    label: "Scholarships",
    value: "Sydney India Scholar",
    description: "Merit-based Excellence",
    color: "from-[#66FCF1] to-[#45A29E]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sydney, Australia",
    description: "Open to Remote Opportunities",
    color: "from-orange-500 to-orange-600",
  },
];

const skills = [
  "Python", "R", "Java", "Machine Learning", "Data Analysis",
  "Financial Modeling", "Cybersecurity", "Leadership", "Project Management"
];

export function ResumeHero() {
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
            Resume & CV
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Download my comprehensive resume or view it online. My experience spans 
            data science, finance, software development, and leadership roles.
          </motion.p>
        </motion.div>

        {/* Download Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-electric to-electric-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-2">
                  Download Resume
                </h3>
                <p className="text-muted-foreground">
                  Get my complete professional profile in PDF format
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="gradient" size="lg" className="flex-1">
                  <a href="/resume/Aryan_Web_CV.pdf" download="Aryan_Kumawat_CV.pdf">
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link href="#resume-viewer">
                    <Eye className="h-5 w-5 mr-2" />
                    View Online
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${highlight.color}`}>
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{highlight.label}</h4>
                  <div className="text-xl font-bold text-foreground mb-1">
                    {highlight.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                Key Skills & Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  My resume includes detailed information about my technical skills, 
                  work experience, education, and achievements. Feel free to reach out 
                  if you have any questions!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
