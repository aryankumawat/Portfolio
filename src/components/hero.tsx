"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="relative bg-hero noise min-h-screen">
      {/* Soft glow ring */}
      <div aria-hidden className="pointer-events-none absolute -z-10 inset-0">
        <div 
          className="absolute left-1/2 top-[35%] -translate-x-1/2 size-[70vmax] rounded-full blur-3xl opacity-30"
          style={{
            background: "conic-gradient(from 140deg, #7C3AED, #2563EB, #22D3EE, #7C3AED)"
          }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="mx-auto max-w-6xl px-6 pt-28 pb-24 text-center relative z-10"
      >
        <Reveal>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold leading-tight gradient-text-hero"
          >
            Turn ideas into{" "}
            <span className="whitespace-nowrap">live experiences</span>
          </motion.h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
            CS-engineered portfolio • AI-first • smooth, fast, and glassy ✨
          </p>
        </Reveal>

        {/* Glass pill CTA */}
        <Reveal delay={0.4}>
          <div className="mt-10 flex items-center justify-center">
            <div className="glass hairline rounded-full px-4 py-2 md:px-6 md:py-3 w-full max-w-xl flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
              <Search className="h-4 w-4 text-slate-300/80" />
              <span className="text-slate-300/80 flex-1 text-left">Search projects or posts…</span>
              <kbd className="ml-auto text-slate-300/70 text-sm bg-slate-800/50 px-2 py-1 rounded">⌘K</kbd>
            </div>
          </div>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={0.6}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/resume">
                Download Resume
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="group glass border-white/20 hover:bg-white/5 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </Reveal>

        {/* Quick contact */}
        <Reveal delay={0.8}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
            <Link
              href="mailto:akum9196@uni.sydney.edu.au"
              className="flex items-center gap-2 hover:text-slate-300 transition-colors group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              akum9196@uni.sydney.edu.au
            </Link>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Sydney, Australia
            </span>
          </div>
        </Reveal>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400/30 rounded-full flex justify-center group cursor-pointer"
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
