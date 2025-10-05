"use client";

import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <div className="min-h-screen bg-hero noise text-[#C5C6C7] overflow-x-hidden">
      {/* Background */}
      <ParticleBackground />
      
      {/* Cursor Glow Effect */}
      <CursorGlow />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
