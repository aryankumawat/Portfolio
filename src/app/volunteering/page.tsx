import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Globe, Target, Calendar, MapPin } from "lucide-react";

const volunteering = [
  {
    title: "Founder - Aasha",
    organization: "Smile Foundation Collaboration",
    location: "Amba Kheda, Madhya Pradesh, India",
    duration: "2020-2022",
    description: "Founded and led an educational initiative to support underprivileged children's education.",
    impact: "Raised INR 3.5 Lakh for education of 150+ children",
    role: "Founder & Lead",
    icon: Heart,
    color: "from-red-500 to-red-600",
    featured: true,
  },
  {
    title: "Director of Fundraising - Dalhousie COVID-19 Resource",
    organization: "Dalhousie COVID-19 Resource",
    location: "Mumbai, India",
    duration: "2020",
    description: "Led fundraising efforts to support frontline workers during the COVID-19 pandemic.",
    impact: "Raised funds for 300+ police personnel (safety kits, multivitamins)",
    role: "Director",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    featured: true,
  },
  {
    title: "Core Team Lead - Rising Hopes",
    organization: "Rising Hopes",
    location: "Rajasthan, India",
    duration: "2020",
    description: "Led educational programs and community development initiatives in rural areas.",
    impact: "Taught 70 children over 2 months, 40 sessions",
    role: "Team Lead",
    icon: Users,
    color: "from-green-500 to-green-600",
    featured: true,
  },
  {
    title: "Fundraiser - The Meal Project",
    organization: "The Meal Project",
    location: "Mumbai, India",
    duration: "2019-2020",
    description: "Participated in fundraising activities to provide meals to underprivileged communities.",
    impact: "Contributed to meal distribution programs",
    role: "Volunteer",
    icon: Heart,
    color: "from-orange-500 to-orange-600",
    featured: false,
  },
  {
    title: "Volunteer - Robin Hood Army",
    organization: "Robin Hood Army",
    location: "Rajasthan, India",
    duration: "2019-2020",
    description: "Participated in food collection and distribution drives to combat hunger.",
    impact: "Supported food security initiatives",
    role: "Volunteer",
    icon: Globe,
    color: "from-purple-500 to-purple-600",
    featured: false,
  },
];

const impactStats = [
  {
    label: "Children Supported",
    value: "220+",
    description: "Through educational initiatives",
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Funds Raised",
    value: "INR 4L+",
    description: "For community projects",
    color: "from-green-500 to-green-600",
  },
  {
    label: "Communities Served",
    value: "5+",
    description: "Across different regions",
    color: "from-purple-500 to-purple-600",
  },
  {
    label: "Volunteer Hours",
    value: "500+",
    description: "Dedicated to community service",
    color: "from-orange-500 to-orange-600",
  },
];

export default function VolunteeringPage() {
  const featuredVolunteering = volunteering.filter(v => v.featured);
  const otherVolunteering = volunteering.filter(v => !v.featured);

  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Community Impact & Volunteering
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to making a positive difference in communities through 
            education, healthcare support, and social development initiatives.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                      <Target className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Featured Volunteering */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Key Initiatives
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredVolunteering.map((item, index) => (
              <div
                key={item.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.role}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {item.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.organization}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.duration}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.location}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-sm text-foreground mb-1">Impact:</h4>
                      <p className="text-sm text-muted-foreground">{item.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Other Volunteering */}
        <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">
            Additional Community Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherVolunteering.map((item, index) => (
              <div
                key={item.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.role}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.organization}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {item.duration}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric to-electric-light text-white rounded-full text-sm font-medium">
            <span>❤️</span>
            <span>Committed to making a positive impact in communities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
