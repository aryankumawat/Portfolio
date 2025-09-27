"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles, Zap, Code } from "lucide-react";
import { Button } from "./ui/button";
import { Particles } from "./particles";

const roles = [
  { name: "Data Science", icon: Sparkles, color: "from-accent-violet to-accent-purple" },
  { name: "Finance", icon: Zap, color: "from-accent-blue to-accent-cyan" },
  { name: "Software Development", icon: Code, color: "from-accent-cyan to-accent-emerald" },
];

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 via-transparent to-accent-cyan/5" />
      </div>
      
      {/* Particle System */}
      <Particles />
      
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-accent-violet/20 to-accent-purple/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent-cyan/10 to-accent-emerald/10 rounded-full blur-3xl"
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

      <motion.div 
        style={{ y, opacity }}
        className="container-padding relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted mb-4 font-mono"
          >
            Hello, I'm
          </motion.p>

          {/* Name with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
          >
            <span className="gradient-text bg-gradient-primary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
              Aryan Kumawat
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-3xl text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Data & Finance at USYD — building{" "}
            <span className="gradient-text-secondary">AI-driven</span>, real-world solutions.
          </motion.p>

          {/* Roles with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div className={`px-6 py-3 bg-gradient-to-r ${role.color} rounded-full text-white font-medium text-sm flex items-center gap-2 shadow-glow hover:shadow-glow transition-all duration-300`}>
                  <role.icon className="h-4 w-4" />
                  {role.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="group bg-gradient-primary hover:opacity-90 text-white border-0 px-8 py-4 text-lg font-semibold shadow-glow hover:shadow-glow transition-all duration-300"
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
              className="group glass border-border-primary hover:bg-bg-glass px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-muted"
          >
            <Link
              href="mailto:akum9196@uni.sydney.edu.au"
              className="flex items-center gap-2 hover:text-text-primary transition-colors group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              akum9196@uni.sydney.edu.au
            </Link>
            <span className="hidden sm:inline text-text-subtle">•</span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
              Sydney, Australia
            </span>
          </motion.div>
        </motion.div>
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
          className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center group cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
