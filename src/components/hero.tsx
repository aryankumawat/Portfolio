"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles, Zap, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Apple/Netflix-Inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/30 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,_#6D28D9_0deg,_#8B5CF6_60deg,_#3B82F6_120deg,_#A259FF_180deg,_#6D28D9_360deg)] opacity-25" />
      </div>

      {/* Apple/Netflix Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/40 to-violet-500/40 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-600/40 to-indigo-500/40 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Glassmorphic Hero Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex items-center justify-center min-h-screen px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Role Badges */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-4 mb-8"
            >
              <div className="glass-sm rounded-full px-4 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300 hover:bg-purple-500/5">
                <Code2 className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Computational Data Science</span>
              </div>
              <div className="glass-sm rounded-full px-4 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300 hover:bg-blue-500/5">
                <Zap className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                <span className="text-sm font-medium text-white">Finance</span>
              </div>
              <div className="glass-sm rounded-full px-4 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300 hover:bg-purple-500/5">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-white">AI & ML</span>
              </div>
            </motion.div>
          </Reveal>

          {/* Main Headline */}
          <Reveal>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-6"
              >
                <span className="block bg-gradient-to-r from-purple-600 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                  Aryan
                </span>
                <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                  Kumawat
                </span>
              </motion.h1>
          </Reveal>

          {/* Tagline */}
          <Reveal delay={0.6}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-12 font-light"
              >
                Building data-driven solutions at the intersection of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-semibold">
                  technology & finance
                </span>
              </motion.p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
                  <Button 
                    asChild 
                    size="lg" 
                    className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 px-8 py-4 text-lg font-semibold neon-glow-button transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/projects" className="flex items-center gap-3">
                      <span>View Projects</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="group glass-sm border-purple-500/30 hover:border-purple-400/30 hover:bg-purple-500/5 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/contact#contact-form" className="flex items-center gap-3 text-white">
                      <span>Get in Touch</span>
                      <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </Button>
            </motion.div>
          </Reveal>

          {/* Quick Info */}
          <Reveal delay={1.0}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400"
                >
                  <Link
                    href="mailto:kumawataryan23@gmail.com"
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    kumawataryan23@gmail.com
                  </Link>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    Sydney, Australia
                  </span>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    University of Sydney
                  </span>
                </motion.div>
          </Reveal>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-purple-400/30 rounded-full flex justify-center group cursor-pointer hover:border-purple-300/40 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mt-2"
              />
            </motion.div>
      </motion.div>
    </main>
  );
}
