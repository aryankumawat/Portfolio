import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "ChatGPT's New AgentKit: A Competitor to n8n?",
    excerpt: "OpenAI recently introduced AgentKit, a framework that takes ChatGPT beyond simple Q&A into true autonomous agents. Instead of just generating text, AgentKit lets ChatGPT plan tasks, break them into steps, and act inside a virtual environment — browsing the web, running code, managing files, and more.",
    category: "AI & Automation",
    date: "2025-01-20",
    readTime: "5 min read",
    author: "Aryan Kumawat",
    tags: ["AI", "ChatGPT", "AgentKit", "n8n", "Automation"],
    featured: true,
    content: `OpenAI recently introduced AgentKit, a framework that takes ChatGPT beyond simple Q&A into true autonomous agents. Instead of just generating text, AgentKit lets ChatGPT plan tasks, break them into steps, and act inside a virtual environment — browsing the web, running code, managing files, and more.

This raises the question: how does it compare to existing automation platforms like n8n?

## What Makes AgentKit Different?

**Reasoning + Action Together**: AgentKit doesn't just think, it executes — dynamically branching, reflecting, and correcting itself along the way.

**Interactive & Steerable**: You can pause or redirect mid-run without losing context.

**Hands-On Tools**: With access to browsers, code, and files, ChatGPT agents can perform real-world tasks beyond prompts.

## Where n8n Still Shines

n8n is already a favorite for workflow automation, with its drag-and-drop interface and hundreds of integrations. It handles concurrency, error-handling, and observability better than AgentKit. Think of n8n as the production-grade automation tool, while AgentKit is the flexible AI brain.

## Competition or Collaboration?

It doesn't have to be one or the other:

- Use AgentKit for dynamic reasoning and complex planning.
- Use n8n for reliability, integrations, and scale.
- Together, they can form a hybrid system where ChatGPT agents think and n8n executes.

## Final Thoughts

AgentKit is exciting because it pushes AI toward true agency — planning, acting, and adapting like a digital teammate. But n8n remains a powerhouse for safe, scalable automation.

The real win might not be AgentKit versus n8n, but AgentKit + n8n working together.`
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
