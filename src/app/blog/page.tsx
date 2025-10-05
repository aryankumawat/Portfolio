import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "Building Multi-Model AI Agents: A Technical Deep Dive",
    excerpt: "Exploring the architecture and implementation of local LLM workflows with task orchestration and agent specialization.",
    category: "AI & Machine Learning",
    date: "2025-01-15",
    readTime: "8 min read",
    author: "Aryan Kumawat",
    tags: ["AI", "LLMs", "Python", "Architecture"],
    featured: true,
  },
  {
    title: "Financial Modeling in Python: From Theory to Practice",
    excerpt: "A comprehensive guide to implementing financial models using Python, covering valuation, risk analysis, and portfolio optimization.",
    category: "Finance & Data",
    date: "2024-12-20",
    readTime: "12 min read",
    author: "Aryan Kumawat",
    tags: ["Python", "Finance", "Data Analysis", "Modeling"],
    featured: true,
  },
  {
    title: "The Future of Data Science in Healthcare",
    excerpt: "Examining how machine learning and data analytics are transforming healthcare delivery and patient outcomes.",
    category: "Healthcare & Data",
    date: "2024-11-30",
    readTime: "10 min read",
    author: "Aryan Kumawat",
    tags: ["Healthcare", "Data Science", "ML", "Analytics"],
    featured: false,
  },
  {
    title: "Cybersecurity Bootcamp: Lessons Learned",
    excerpt: "Reflections on my cybersecurity training journey and key insights for aspiring security professionals.",
    category: "Cybersecurity",
    date: "2024-10-15",
    readTime: "6 min read",
    author: "Aryan Kumawat",
    tags: ["Cybersecurity", "Training", "Career", "Learning"],
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
                Sharing knowledge and experiences in data science, finance, 
                technology, and career development.
              </p>
            </div>
          </Reveal>

          {/* Featured Posts */}
          <Reveal delay={0.2}>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              Featured Articles
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Reveal key={post.title} delay={0.4 + index * 0.2}>
                <GlassCard className="h-full group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <Badge variant="default" className="text-xs bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
                        Featured
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white transition-colors">
                      {post.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
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
                    
                    <div className="text-sm text-[#66FCF1] font-medium">
                      Read more →
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          {/* Regular Posts */}
          <Reveal delay={0.8}>
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
              Latest Articles
            </h3>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <Reveal key={post.title} delay={1 + index * 0.1}>
                <GlassCard className="h-full group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-slate-300/80">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="text-[#66FCF1] font-medium">Read more →</span>
                    </div>
                  </div>
                </GlassCard>
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
