"use client";

import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#C5C6C7] overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

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
