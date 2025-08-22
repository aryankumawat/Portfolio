import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  "IBDP Final Score: 39/45 (Top 10% globally)",
  "Theory of Knowledge (TOK) distinction",
  "CAS (Creativity, Activity, Service) completion with leadership projects",
];

export default function AwardsPage() {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Honors & Awards
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for academic excellence, professional achievements, and 
            contributions to community and organizations.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${award.color}`}>
                      <award.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {award.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {award.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {award.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                Additional Recognition & Certificates
              </h3>
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <Star className="h-4 w-4 text-electric mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
