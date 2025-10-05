import { AboutHero } from "@/components/about-hero";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { Reveal } from "@/components/Reveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-hero noise">
      <AboutHero />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
