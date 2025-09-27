import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Trophy, Calendar } from "lucide-react";

const awards = [
  {
    title: "Trinity College of London (Traditional) Grade 4",
    date: "July 2021",
    description: "Achieved Grade 4 in traditional music performance",
    category: "Music",
    icon: Award,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Best Intern Award - Akross Solutions",
    date: "2020",
    description: "Recognized for outstanding performance and innovation during internship",
    category: "Work",
    icon: Star,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Sydney India Scholar",
    date: "2022",
    description: "Merit-based scholarship for academic excellence at University of Sydney",
    category: "Academic",
    icon: Trophy,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Sydney International Student Award",
    date: "2022",
    description: "Recognition for international students at University of Sydney",
    category: "Academic",
    icon: Award,
    color: "from-green-500 to-green-600",
  },
];

const certificates = [
  "Multiple Letters/Certificates of Appreciation (Rising Hopes, DSP Dalhousie, Smile Foundation, Akross Solutions, Chairman Municipal Council Sikar, MLA)",
  "Subject Excellence in Physics, Mathematics AA, Computer Science, Economics, English, Hindi",
  "Theory of Knowledge (TOK) distinction",
  "CAS (Creativity, Activity, Service) completion with leadership projects",
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-hero noise">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                Honors & Awards
              </h1>
              <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
                Recognition for academic excellence, professional achievements, and 
                contributions to community and organizations.
              </p>
            </div>
          </Reveal>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {awards.map((award, index) => (
              <Reveal key={award.title} delay={index * 0.1}>
                <GlassCard className="h-full group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${award.color}`}>
                        <award.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {award.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {award.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-4 w-4" />
                      {award.date}
                    </div>
                    
                    <p className="text-slate-300/80 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          {/* Additional Recognition */}
          <Reveal delay={0.8}>
            <GlassCard>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                  Additional Recognition & Certificates
                </h3>
                <div className="space-y-3">
                  {certificates.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 glass-sm rounded-lg">
                      <Star className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-slate-300">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
