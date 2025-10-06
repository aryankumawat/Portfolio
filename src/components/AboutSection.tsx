"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { GraduationCap, MapPin, Music, Camera, Plane } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              About Me
            </h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              Passionate about transforming data into actionable insights and building innovative solutions
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <Reveal delay={0.2}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Glass Frame */}
                <div className="glass rounded-full p-2 group hover:scale-105 transition-all duration-500">
                  <div className="w-80 h-80 rounded-full bg-white/10 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                      <div className="text-6xl font-black text-white">AK</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 glass-sm rounded-full p-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <GraduationCap className="h-6 w-6 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 glass-sm rounded-full p-3"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <MapPin className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.4}>
            <div className="space-y-8">
              {/* Academic Background */}
              <GlassCard className="group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/10">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Academic Excellence</h3>
                  </div>
                  <p className="text-slate-300/90 mb-4">
                    Pursuing <span className="text-white font-semibold">Bachelor of Advanced Computing</span> at the University of Sydney, 
                    specializing in Computational Data Science and Finance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Data Science</Badge>
                    <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                    <Badge variant="outline" className="text-xs">Financial Modeling</Badge>
                    <Badge variant="outline" className="text-xs">Statistics</Badge>
                  </div>
                </div>
              </GlassCard>

              {/* Career Focus */}
              <GlassCard className="group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/10">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Career Focus</h3>
                  </div>
                  <p className="text-slate-300/90">
                    Building AI-driven solutions that bridge the gap between complex data and business value. 
                    Passionate about creating innovative tools that make data science accessible and impactful.
                  </p>
                </div>
              </GlassCard>

              {/* Personal Interests */}
              <GlassCard className="group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Beyond Code</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center group/item">
                      <div className="p-3 rounded-lg bg-white/10 mb-2 group-hover/item:scale-110 transition-transform">
                        <Music className="h-6 w-6 text-white mx-auto" />
                      </div>
                      <p className="text-sm text-slate-400">Music</p>
                    </div>
                    <div className="text-center group/item">
                      <div className="p-3 rounded-lg bg-white/10 mb-2 group-hover/item:scale-110 transition-transform">
                        <Plane className="h-6 w-6 text-white mx-auto" />
                      </div>
                      <p className="text-sm text-slate-400">Drones</p>
                    </div>
                    <div className="text-center group/item">
                      <div className="p-3 rounded-lg bg-white/10 mb-2 group-hover/item:scale-110 transition-transform">
                        <Camera className="h-6 w-6 text-white mx-auto" />
                      </div>
                      <p className="text-sm text-slate-400">Photography</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
