import { ResumeHero } from "@/components/resume-hero";
import { ResumeViewer } from "@/components/resume-viewer";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-hero noise">
      <ResumeHero />
      <ResumeViewer />
    </div>
  );
}
