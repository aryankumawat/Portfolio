"use client";

import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

// Blog post data - in a real app, this would come from a CMS or API
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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const slug = params.slug as string;
      console.log('Blog post slug:', slug);
      
      const postData = blogPosts.find(p => p.id === slug) || null;
      console.log('Blog post data:', postData);
      
      if (postData) {
        setPost(postData);
      } else {
        setError(`Blog post with slug "${slug}" not found`);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error loading blog post:', err);
      setError('Failed to load blog post');
      setLoading(false);
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-hero noise flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-hero noise flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Error</h1>
          <p className="text-red-400 mb-4">{error}</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-hero noise flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Function to render markdown-like content
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-slate-300">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-6 border-b border-slate-600 pb-2">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 4) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-[#66FCF1] mt-6 mb-4">
            {trimmedLine.replace(/\*\*/g, '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          flushList();
          inList = true;
        }
        listItems.push(trimmedLine.replace('- ', ''));
      } else if (trimmedLine === '') {
        flushList();
        elements.push(<div key={index} className="h-4" />);
      } else if (trimmedLine.length > 0) {
        flushList();
        elements.push(
          <p key={index} className="text-slate-300 leading-relaxed mb-6 text-base">
            {trimmedLine}
          </p>
        );
      }
    });

    flushList(); // Flush any remaining list items
    return elements;
  };

  return (
    <div className="min-h-screen bg-hero noise">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="outline" className="mb-6 glass border-white/20 hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard className="p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-sm">
                    {post.category}
                  </Badge>
                  <Badge variant="default" className="text-sm bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
                    Featured
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <p className="text-lg text-slate-300/90 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.4}>
            <GlassCard className="p-8">
              <div className="max-w-none">
                <div className="space-y-6">
                  {renderContent(post.content)}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to All Articles
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
