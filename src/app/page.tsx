import { Hero } from "@/components/hero";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Code, TrendingUp, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-hero noise">
      {/* Hero Section */}
      <Hero />

      {/* What I Do Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">
                What I Do
              </h2>
              <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
                Combining data science, finance, and software development to create innovative solutions
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <GlassCard className="text-center group">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    Data Science
                  </h3>
                  <p className="text-slate-300/80">
                    Machine learning, statistical analysis, and data-driven insights for real-world applications
                  </p>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <GlassCard className="text-center group">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    Finance
                  </h3>
                  <p className="text-slate-300/80">
                    Financial modeling, investment analysis, and market research with quantitative approaches
                  </p>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.3}>
              <GlassCard className="text-center group">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    Software
                  </h3>
                  <p className="text-slate-300/80">
                    Full-stack development, APIs, and scalable solutions with modern technologies
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">
                Explore My Work
              </h2>
              <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
                Discover my projects, experience, and get to know more about my journey
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <GlassCard className="group">
                <Link href="/experience" className="block">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      Experience
                    </h3>
                    <p className="text-slate-300/80 mb-4">
                      View my professional journey, internships, and key achievements
                    </p>
                    <div className="flex items-center text-purple-400 font-medium">
                      <span>Explore Experience</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <GlassCard className="group">
                <Link href="/projects" className="block">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      Projects
                    </h3>
                    <p className="text-slate-300/80 mb-4">
                      Check out my technical projects, research work, and case studies
                    </p>
                    <div className="flex items-center text-purple-400 font-medium">
                      <span>View Projects</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.3}>
              <GlassCard className="group">
                <Link href="/about" className="block">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      About
                    </h3>
                    <p className="text-slate-300/80 mb-4">
                      Learn more about my background, skills, and educational journey
                    </p>
                    <div className="flex items-center text-purple-400 font-medium">
                      <span>About Me</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.4}>
              <GlassCard className="group">
                <Link href="/contact" className="block">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      Contact
                    </h3>
                    <p className="text-slate-300/80 mb-4">
                      Get in touch for opportunities, collaboration, or just to say hello
                    </p>
                    <div className="flex items-center text-purple-400 font-medium">
                      <span>Get in Touch</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
