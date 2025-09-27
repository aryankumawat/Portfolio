"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { Mail, MapPin, Linkedin, Phone } from "lucide-react";

export function AboutHero() {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Penultimate-year Bachelor of Advanced Computing student at The University of Sydney, 
              focusing on data-driven problem solving, financial modeling, and applied analytics.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
                  Who I Am
                </h3>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I'm a passionate student at the intersection of technology and finance, 
                    driven by the belief that data can solve real-world problems. My journey 
                    from Jaipur, India to Sydney, Australia has shaped my perspective on 
                    global challenges and opportunities.
                  </p>
                  <p>
                    As a recipient of the Sydney Scholars India Scholarship and Sydney 
                    International Student Award, I'm committed to academic excellence while 
                    building practical skills that bridge theory and application.
                  </p>
                  <p>
                    I thrive in collaborative environments, having led teams as School Captain, 
                    founded clubs, and currently serve as a Peer Mentor and Digital Impact 
                    Tech Consultant.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Contact & Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-white">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a 
                        href="mailto:kumawataryan23@gmail.com"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        kumawataryan23@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <a 
                        href="tel:+61493322348"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        +61 493 322 348
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-sm text-gray-400">
                        Sydney, Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/aryan-kumawat-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        Aryan Kumawat | LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-purple-500/20">
                  <h4 className="font-semibold mb-3 text-white">Quick Facts</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-purple-500/30 text-purple-300">International Student</Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300">Data Science Focus</Badge>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-300">Finance Specialization</Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300">Leadership Experience</Badge>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-300">Community Impact</Badge>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
