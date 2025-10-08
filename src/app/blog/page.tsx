import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "chatgpt-agentkit-competitor-n8n",
    title: "ChatGPT's New AgentKit: A Competitor to n8n?",
    excerpt: "The automation landscape just got more interesting. OpenAI's latest release, AgentKit, transforms ChatGPT from a conversational AI into something far more powerful: a true autonomous agent capable of planning, executing, and adapting in real-time.",
    category: "AI & Automation",
    date: "2025-10-08",
    readTime: "8 min read",
    author: "Aryan Kumawat",
    tags: ["AI", "ChatGPT", "AgentKit", "n8n", "Automation"],
    featured: true,
    content: `The automation landscape just got more interesting. OpenAI's latest release, AgentKit, transforms ChatGPT from a conversational AI into something far more powerful: a true autonomous agent capable of planning, executing, and adapting in real-time.

Unlike traditional chatbots that simply respond to prompts, AgentKit enables ChatGPT to break down complex tasks, make decisions on the fly, and interact with the digital world through browsers, code execution, and file management. This isn't just another AI tool—it's a glimpse into the future of intelligent automation.

But here's the million-dollar question: How does this stack up against established workflow automation platforms like n8n?

## What Makes AgentKit Revolutionary?

**Dynamic Reasoning & Execution**: AgentKit doesn't just follow predefined scripts—it thinks, plans, and adapts its approach based on real-time feedback. It can branch into different strategies, reflect on its progress, and course-correct when things don't go as expected.

**Human-in-the-Loop Control**: Unlike black-box automation, AgentKit allows you to pause, redirect, or intervene at any point without losing context. This makes it perfect for complex, multi-step processes where human oversight is crucial.

**Real-World Tool Integration**: With access to web browsers, code execution environments, and file systems, AgentKit can perform actual work beyond just generating text. It can research, analyze data, write code, and manage files—essentially acting as a digital assistant that can handle end-to-end tasks.

## Where n8n Maintains Its Edge

n8n has earned its reputation as the go-to platform for workflow automation, and for good reason. Its visual drag-and-drop interface makes complex integrations accessible to non-technical users, while its extensive library of 400+ integrations covers virtually every business application you can think of.

**Production-Ready Reliability**: n8n excels at handling concurrency, error recovery, and observability—critical features for enterprise environments where downtime isn't an option. It's battle-tested in production environments with robust monitoring and alerting capabilities.

**Scalability & Performance**: When you need to process thousands of workflows simultaneously, n8n's architecture is designed to handle the load. AgentKit, while powerful, is still primarily designed for individual task execution.

**Ecosystem Maturity**: Years of development have created a mature ecosystem around n8n, including community contributions, extensive documentation, and enterprise support options.

## The Future: Competition or Collaboration?

The most exciting possibility isn't choosing between these tools—it's combining them. Here's how they could work together:

**AgentKit as the Strategic Brain**: Use AgentKit for complex reasoning, dynamic decision-making, and tasks that require creative problem-solving. Its ability to adapt and learn makes it perfect for handling novel situations.

**n8n as the Execution Engine**: Leverage n8n for reliable, scalable execution of well-defined processes. Its robust infrastructure and extensive integrations make it ideal for handling the heavy lifting of automation.

**Hybrid Workflows**: Imagine AgentKit analyzing a complex business problem, breaking it down into actionable steps, and then orchestrating n8n workflows to execute the solution. The AI handles the thinking, n8n handles the doing.

## The Bottom Line

AgentKit represents a significant leap forward in AI capabilities, pushing us closer to true artificial intelligence that can reason, plan, and act autonomously. It's not just another automation tool—it's a digital teammate that can adapt and learn.

However, n8n remains the gold standard for production-grade automation, offering the reliability, scalability, and ecosystem that businesses need for mission-critical workflows.

The real opportunity lies in their combination: AgentKit's intelligence paired with n8n's execution power could create automation solutions that are both smart and reliable. As these technologies mature, we might see a new category of hybrid AI-automation platforms that offer the best of both worlds.

The future of automation isn't about choosing between intelligence and reliability—it's about having both.`
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
                    
                    <Link href={`/blog/${post.id}`} className="text-sm text-[#66FCF1] font-medium hover:text-[#45A29E] transition-colors">
                      Read more →
                    </Link>
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
