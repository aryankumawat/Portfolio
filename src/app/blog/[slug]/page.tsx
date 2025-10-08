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
    excerpt: "OpenAI recently introduced AgentKit, a framework that takes ChatGPT beyond simple Q&A into true autonomous agents. Instead of just generating text, AgentKit lets ChatGPT plan tasks, break them into steps, and act inside a virtual environment — browsing the web, running code, managing files, and more.",
    category: "AI & Automation",
    date: "2025-10-08",
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

- Use AgentKit for dynamic reasoning and complex planning
- Use n8n for reliability, integrations, and scale
- Together, they can form a hybrid system where ChatGPT agents think and n8n executes

## Final Thoughts

AgentKit is exciting because it pushes AI toward true agency — planning, acting, and adapting like a digital teammate. But n8n remains a powerhouse for safe, scalable automation.

The real win might not be AgentKit versus n8n, but AgentKit + n8n working together.`
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
