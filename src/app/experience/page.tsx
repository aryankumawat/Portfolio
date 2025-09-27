import { ExperienceHero } from "@/components/experience-hero";
import { ExperienceTimeline } from "@/components/experience-timeline";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black">
      <ExperienceHero />
      <ExperienceTimeline />
    </div>
  );
}
