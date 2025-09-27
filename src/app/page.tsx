"use client";

import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { ParticleBackground } from "@/components/ParticleBackground";
import { SpaceBackground } from "@/components/SpaceBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { useTheme } from "@/contexts/theme-context";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Conditional Background */}
      {theme === 'deep-space' ? <SpaceBackground /> : <ParticleBackground />}
      
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
