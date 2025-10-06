"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles, Zap, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function Hero() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-black" />


      {/* Glassmorphic Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Role Badges */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-4 mb-8"
            >
              <div className="glass-sm rounded-full px-4 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300 hover:bg-white/5">
                <Code2 className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Computational Data Science</span>
              </div>
              <div className="glass-sm rounded-full px-4 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300 hover:bg-white/5">
                <Zap className="h-4 w-4 text-white group-hover:text-gray-300" />
                <span className="text-sm font-medium text-white">Finance</span>
              </div>
              <div className="glass-sm rounded-full px-4 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300 hover:bg-white/5">
                <Sparkles className="h-4 w-4 text-white" />
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
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-6 text-white"
              >
                <span className="block">
                  Aryan
                </span>
                <span className="block">
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
                <span className="text-white font-semibold">
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
                    className="group relative overflow-hidden bg-white text-black border-0 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-100"
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
                    className="group border-white/30 hover:border-white/40 hover:bg-white/5 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
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
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Sydney, Australia
                  </span>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    University of Sydney
                  </span>
                </motion.div>
          </Reveal>
        </div>
      </div>

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
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group cursor-pointer hover:border-white/40 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </motion.div>
      </motion.div>
    </main>
  );
}
