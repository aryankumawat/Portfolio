"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function FeaturedProjects() {
  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Project
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Showcasing enterprise-grade solutions with cutting-edge technology
            </p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.2}>
          <GlassCard className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Project Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    SlideSmith
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">
                    Enterprise-grade <span className="text-white font-semibold">AI slide generation</span> with a 13-agent DAG pipeline, <span className="text-white font-semibold">policy-based model routing</span> (cloud or local via Ollama), <span className="text-white font-semibold">parallel QA</span>, and <span className="text-white font-semibold">semantic PPTX/PDF export</span>.
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">
                        75% faster end-to-end via parallel validation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">
                        60% cost savings with task-aware routing
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">
                        Native PowerPoint charts + theme-aware PDF
                      </span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="group bg-white text-black hover:bg-gray-100"
                    >
                      <Link href="/projects/slidesmith" className="flex items-center gap-2">
                        View Case Study
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 hover:border-white/40 hover:bg-white/5"
                    >
                      <Link
                        href="https://github.com/aryankumawat/SlideSmith"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        View Repository
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js 15",
                      "TypeScript",
                      "Ollama",
                      "OpenAI",
                      "Phi-4 14B",
                      "Gemma3 4B",
                      "Zod",
                      "PptxGenJS",
                      "PDFKit",
                      "Recharts"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      13-agent DAG pipeline with parallel execution
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      Policy-based routing (quality/speed/balanced/local)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      Parallel QA: facts, accessibility, readability
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      Provider abstraction (Ollama/OpenAI/OpenRouter)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      Theme-consistent PPTX/PDF export
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Performance Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">3-5 min</div>
                      <div className="text-xs text-gray-400">Deck Generation</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">99.5%</div>
                      <div className="text-xs text-gray-400">Reliability</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </Reveal>

        {/* View All Projects Link */}
        <Reveal delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
            >
              <span className="text-lg font-medium">View All Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

