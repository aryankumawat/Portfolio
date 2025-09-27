"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Instagram, Send, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              Ready to collaborate on your next data-driven project? Let's build something amazing together.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <GlassCard className="group hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors">
                    Let's Connect
                  </h3>
                  <p className="text-slate-300/80 mb-8 leading-relaxed">
                    I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                    or simply chat about data science, finance, and technology. Feel free to reach out!
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    <Link
                      href="mailto:akum9196@uni.sydney.edu.au"
                      className="flex items-center gap-4 p-4 glass-sm rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-medium">Email</p>
                        <p className="text-slate-400 text-sm">akum9196@uni.sydney.edu.au</p>
                      </div>
                    </Link>

                    <div className="flex items-center gap-4 p-4 glass-sm rounded-lg">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-medium">Location</p>
                        <p className="text-slate-400 text-sm">Sydney, Australia</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 glass-sm rounded-lg">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-medium">Availability</p>
                        <p className="text-slate-400 text-sm">Open to new opportunities</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                      <Link
                        href="https://github.com/aryankumawat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-sm rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <Github className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/aryan-kumawat-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-sm rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
                      </Link>
                      <Link
                        href="https://instagram.com/aryankumawat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-sm rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <Instagram className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.4}>
            <GlassCard className="group hover:scale-105 transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors">
                  Send a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-white/20 bg-white/5 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-white/20 bg-white/5 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-white/20 bg-white/5 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-white/20 bg-white/5 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>

                <p className="text-xs text-slate-400 text-center mt-4">
                  I'll get back to you within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>

        {/* Footer */}
        <Reveal delay={0.6}>
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-slate-400 text-sm">
                © 2024 Aryan Kumawat. Built with Next.js, TypeScript, and lots of ☕
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
