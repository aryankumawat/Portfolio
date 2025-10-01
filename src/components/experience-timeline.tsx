"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { 
  Briefcase, 
  Users, 
  GraduationCap, 
  Globe,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react";
import { formatDateRange } from "@/lib/utils";

const experiences = [
  {
    title: "Digital Impact Tech Consultant",
    company: "180 Degrees Consulting Sydney",
    location: "Sydney, Australia",
    duration: { start: "2024-05", end: null },
    type: "Consulting",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600",
    current: true,
    description: "Providing technology consulting services to non-profit organizations and social enterprises, helping them leverage digital solutions for greater impact.",
    achievements: [
      "Developed digital transformation strategies for 3+ client organizations",
      "Implemented data-driven solutions to improve operational efficiency",
      "Led technology assessment and recommendation projects",
      "Collaborated with cross-functional teams to deliver client solutions"
    ],
    skills: ["Digital Strategy", "Data Analysis", "Project Management", "Client Consulting"]
  },
  {
    title: "Social Media Officer (Operations)",
    company: "Sydney UAV Engineering",
    location: "Sydney, Australia",
    duration: { start: "2024-08", end: null },
    type: "Operations",
    icon: Users,
    color: "from-green-500 to-green-600",
    current: true,
    description: "Managing social media operations and content strategy for UAV engineering company, ensuring compliance with Australian aviation regulations.",
    achievements: [
      "Developed and executed comprehensive social media content strategy",
      "Researched and ensured compliance with Australian UAV regulations",
      "Increased social media engagement by 40% through strategic content planning",
      "Managed community interactions and customer inquiries"
    ],
    skills: ["Social Media Management", "Content Strategy", "Regulatory Compliance", "Community Management"]
  },
  {
    title: "Academic Tutor",
    company: "Ezy Math Tutoring",
    location: "Sydney, Australia",
    duration: { start: "2024-05", end: null },
    type: "Education",
    icon: GraduationCap,
    color: "from-purple-500 to-purple-600",
    current: true,
    description: "Providing personalized mathematics and science tutoring to high school students, helping them achieve academic excellence.",
    achievements: [
      "Tutored 15+ students in mathematics, physics, and computer science",
      "Developed customized learning plans based on individual student needs",
      "Improved student performance by an average of 2 grade levels",
      "Received 100% positive feedback from students and parents"
    ],
    skills: ["Mathematics", "Physics", "Computer Science", "Personalized Teaching", "Student Assessment"]
  },
  {
    title: "ENGO Peer Mentor",
    company: "University of Sydney",
    location: "Sydney, Australia",
    duration: { start: "2023-08", end: null },
    type: "Mentoring",
    icon: Users,
    color: "from-indigo-500 to-indigo-600",
    current: true,
    description: "Supporting first-year engineering students in their academic journey, providing guidance on coursework, study strategies, and university life.",
    achievements: [
      "Mentored 20+ first-year engineering students",
      "Conducted weekly study sessions and academic workshops",
      "Provided guidance on course selection and career planning",
      "Organized social events to build community among engineering students"
    ],
    skills: ["Student Mentoring", "Academic Support", "Workshop Facilitation", "Community Building"]
  },
  {
    title: "Analyst Trainee",
    company: "Sydney Impact Investing (SUIIS)",
    location: "Sydney, Australia",
    duration: { start: "2024-08", end: "2024-09" },
    type: "Finance",
    icon: Briefcase,
    color: "from-emerald-500 to-emerald-600",
    current: false,
    description: "Conducted research and analysis on impact investment opportunities, focusing on social and environmental returns alongside financial performance.",
    achievements: [
      "Analyzed 10+ impact investment opportunities across various sectors",
      "Developed financial models for social enterprise valuations",
      "Researched ESG metrics and impact measurement frameworks",
      "Contributed to investment committee presentations and reports"
    ],
    skills: ["Financial Analysis", "Impact Investing", "ESG Analysis", "Valuation Modeling"]
  },
  {
    title: "Design Director",
    company: "Sydney University Mathematics Society (SUMS)",
    location: "Sydney, Australia",
    duration: { start: "2023-03", end: "2024-01" },
    type: "Leadership",
    icon: Users,
    color: "from-orange-500 to-orange-600",
    current: false,
    description: "Led the design and branding initiatives for the mathematics society, creating visual content and managing the organization's public image.",
    achievements: [
      "Designed marketing materials for 15+ society events",
      "Created and maintained consistent brand identity across all platforms",
      "Increased event attendance by 35% through improved visual communication",
      "Managed a team of 3 design volunteers"
    ],
    skills: ["Graphic Design", "Brand Management", "Team Leadership", "Event Marketing"]
  },
  {
    title: "Founder",
    company: "The Astronomy Club",
    location: "Jaipur, India",
    duration: { start: "2020", end: "2022" },
    type: "Leadership",
    icon: Globe,
    color: "from-rose-500 to-rose-600",
    current: false,
    description: "Founded and led an astronomy club to promote scientific curiosity and space education among high school students.",
    achievements: [
      "Built a community of 50+ astronomy enthusiasts",
      "Organized 20+ stargazing events and educational workshops",
      "Collaborated with local science institutions for resources and expertise",
      "Received recognition from school administration for educational impact"
    ],
    skills: ["Club Leadership", "Event Organization", "Science Education", "Community Building"]
  },
  {
    title: "School Captain",
    company: "Jayshree Periwal International School",
    location: "Jaipur, India",
    duration: { start: "2020", end: "2022" },
    type: "Leadership",
    icon: Users,
    color: "from-yellow-500 to-yellow-600",
    current: false,
    description: "Served as the elected leader of the student body, representing student interests and organizing school-wide events and initiatives.",
    achievements: [
      "Represented 800+ students to school administration and staff",
      "Organized 10+ school-wide events including cultural festivals and sports meets",
      "Led student council meetings and coordinated with various student committees",
      "Implemented student feedback system for continuous improvement"
    ],
    skills: ["Student Leadership", "Event Management", "Representation", "Committee Coordination"]
  },
  {
    title: "Outgoing Global Volunteer",
    company: "AIESEC Australia",
    location: "Sydney, Australia",
    duration: { start: "2024-08", end: null },
    type: "Volunteering",
    icon: Globe,
    color: "from-teal-500 to-teal-600",
    current: true,
    description: "Participating in global volunteer programs to support community development projects and gain international experience.",
    achievements: [
      "Participated in cross-cultural exchange programs",
      "Contributed to community development projects",
      "Developed global perspective and cultural awareness",
      "Built international network of volunteers and professionals"
    ],
    skills: ["Cross-cultural Communication", "Community Development", "Global Perspective", "International Networking"]
  },
  {
    title: "Teaching Assistant",
    company: "Pushpak Tutorials",
    location: "Jaipur, India",
    duration: { start: "2019", end: "2020" },
    type: "Education",
    icon: GraduationCap,
    color: "from-slate-500 to-slate-600",
    current: false,
    description: "Assisted in teaching mathematics and science to middle and high school students, supporting their academic development.",
    achievements: [
      "Assisted in teaching 30+ students in mathematics and science",
      "Provided one-on-one support to struggling students",
      "Helped develop study materials and practice problems",
      "Received positive feedback from students and supervising teachers"
    ],
    skills: ["Mathematics", "Science", "Student Support", "Teaching Assistance"]
  },
  {
    title: "Software Intern",
    company: "BYJU'S",
    location: "Bangalore, India",
    duration: { start: "2020", end: "2020" },
    type: "Technology",
    icon: Briefcase,
    color: "from-cyan-500 to-cyan-600",
    current: false,
    description: "Worked on cloud e-learning platform integration, contributing to the development of educational technology solutions.",
    achievements: [
      "Contributed to cloud platform integration for e-learning modules",
      "Assisted in API development and testing",
      "Participated in agile development processes",
      "Gained experience with cloud technologies and e-learning platforms"
    ],
    skills: ["Cloud Integration", "API Development", "Agile Development", "E-learning Platforms"]
  },
  {
    title: "Tech & Research Intern",
    company: "Akross Solutions",
    location: "Jaipur, India",
    duration: { start: "2020", end: "2020" },
    type: "Technology",
    icon: Briefcase,
    color: "from-violet-500 to-violet-600",
    current: false,
    description: "Conducted research and development on sanitization tunnel technology, contributing to innovative solutions for public health.",
    achievements: [
      "Researched and developed sanitization tunnel technology",
      "Conducted feasibility studies and prototype testing",
      "Collaborated with engineering team on technical specifications",
      "Received Best Intern Award for outstanding performance and innovation"
    ],
    skills: ["Research & Development", "Prototype Testing", "Technical Documentation", "Innovation"]
  },
  {
    title: "Software Intern",
    company: "SRD Softech",
    location: "Jaipur, India",
    duration: { start: "2020", end: "2020" },
    type: "Technology",
    icon: Briefcase,
    color: "from-amber-500 to-amber-600",
    current: false,
    description: "Worked on role-based access prediction systems, contributing to cybersecurity and access control solutions.",
    achievements: [
      "Developed role-based access control algorithms",
      "Implemented machine learning models for access prediction",
      "Conducted security testing and vulnerability assessment",
      "Documented system architecture and user guides"
    ],
    skills: ["Access Control", "Machine Learning", "Security Testing", "System Documentation"]
  },
];

export function ExperienceTimeline() {
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
            Work Experience Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A chronological journey through my professional roles, showcasing growth, 
            leadership, and diverse experience across multiple domains.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${experience.color}`} />
                  
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${experience.color}`}>
                          <experience.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white">
                              {experience.title}
                            </h3>
                            {experience.current && (
                              <Badge variant="success">Current</Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/80 mb-2">
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {experience.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {experience.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDateRange(experience.duration.start, experience.duration.end)}
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300/80 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm text-slate-300/80">
                              <span className="text-electric mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-white mb-2">Skills Applied:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric to-electric-light text-white rounded-full text-sm font-medium">
            <span>🚀</span>
            <span>Ready for the next challenge and opportunity</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
