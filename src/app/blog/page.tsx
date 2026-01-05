import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export default function Page() {
  // Sort posts by date (latest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    // Parse dates for comparison - handle both DD/MM/YYYY and YYYY-MM-DD formats
    const parseDate = (dateStr: string) => {
      if (dateStr.includes('/')) {
        // DD/MM/YYYY format
        const [day, month, year] = dateStr.split('/');
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      } else {
        // YYYY-MM-DD format
        return new Date(dateStr);
      }
    };
    
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime(); // Latest first
  });
  
  const featuredPosts = sortedPosts.filter(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-hero noise">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                Blog & Insights
              </h1>
              <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto">
                Sharing insights on AI, automation, technology trends, 
                and the future of intelligent systems.
              </p>
            </div>
          </Reveal>

          {/* Featured Posts */}
          <Reveal delay={0.2}>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              Latest Article
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Reveal key={post.title} delay={0.4 + index * 0.2}>
                <Link href={`/blog/${post.id}`} className="block h-full">
                  <GlassCard className="h-full group cursor-pointer hover:border-[#66FCF1]/50 transition-all">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <Badge variant="default" className="text-xs bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
                          Featured
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#66FCF1]">
                        {post.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {(() => {
                            // Handle both DD/MM/YYYY and YYYY-MM-DD formats
                            if (post.date.includes('/')) {
                              // DD/MM/YYYY format
                              const [day, month, year] = post.date.split('/');
                              const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                              return date.toLocaleDateString();
                            } else {
                              // YYYY-MM-DD format
                              return new Date(post.date).toLocaleDateString();
                            }
                          })()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <p className="text-slate-300/80 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="text-sm text-[#66FCF1] font-medium group-hover:text-[#45A29E] transition-colors">
                        Read more →
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Coming Soon */}
          <Reveal delay={1.4}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#66FCF1] to-[#45A29E] text-white rounded-full text-sm font-medium">
                <span>📝</span>
                <span>More articles coming soon!</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}