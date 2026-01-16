"use client";

import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

export default function BlogPostPage() {
  const resolvedParams = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const slug = resolvedParams.slug as string;
      console.log('Blog post slug:', slug);
      
      // Sort posts by date (latest first) for consistency
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
        return dateB.getTime() - dateA.getTime();
      });
      
      const postData = sortedPosts.find(p => p.id === slug) || null;
      console.log('Blog post slug:', slug);
      console.log('Total posts available:', sortedPosts.length);
      console.log('Blog post data:', postData ? { id: postData.id, title: postData.title, hasContent: !!postData.content, contentLength: postData.content?.length, contentType: typeof postData.content } : null);
      
      if (postData) {
        if (!postData.content || postData.content.length === 0) {
          console.error('Post found but content is empty!', postData);
          setError('Blog post content is empty');
        } else if (typeof postData.content !== 'string') {
          console.error('Post content is not a string!', typeof postData.content, postData);
          setError('Blog post content is invalid');
        } else {
          console.log('Setting post with content length:', postData.content.length);
        setPost(postData);
        }
      } else {
        console.error('Post not found. Available IDs:', sortedPosts.map(p => p.id));
        setError(`Blog post with slug "${slug}" not found`);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error loading blog post:', err);
      setError('Failed to load blog post');
      setLoading(false);
    }
  }, [resolvedParams.slug]);

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

  return (
    <div className="min-h-screen bg-hero noise">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <GlassCard className="mb-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-sm">
                    {post.category}
                  </Badge>
                  <Link href="/blog">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Blog
                    </Button>
                  </Link>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
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
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <p className="text-lg text-slate-300/90 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="border-t border-slate-600 pt-6">
                  <div className="max-w-none prose prose-invert prose-slate max-w-none">
                    <article className="text-slate-200">
                      {(() => {
                        if (!post || !post.content) {
                          console.error('Post or content is missing!', post);
                          return <p className="text-red-400">Error: Content not available</p>;
                        }
                        if (typeof post.content !== 'string') {
                          console.error('Post content is not a string!', typeof post.content, post);
                          return <p className="text-red-400">Error: Content is not a string</p>;
                        }
                        const paragraphs = post.content.split('\n\n');
                        console.log('Rendering content with', paragraphs.length, 'paragraphs');
                        if (paragraphs.length === 0) {
                          console.error('No paragraphs found after split!');
                          return <p className="text-red-400">Error: No content paragraphs found</p>;
                        }
                        return paragraphs.map((paragraph, idx) => {
                        const trimmed = paragraph.trim();
                        
                        // Skip empty paragraphs
                        if (!trimmed) return null;
                        
                        // Horizontal rule
                        if (trimmed === '---') {
                          return <hr key={idx} className="my-8 border-slate-600" />;
                        }
                        
                        // Heading
                        if (trimmed.startsWith('## ')) {
                          return (
                            <h2 key={idx} className="text-3xl font-bold text-white mt-8 mb-4">
                              {trimmed.replace('## ', '')}
                            </h2>
                          );
                        }
                        
                        // Bold standalone line (subheading)
                        if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes('\n')) {
                          return (
                            <h3 key={idx} className="text-xl font-semibold text-[#66FCF1] mt-6 mb-3">
                              {trimmed.replace(/\*\*/g, '')}
                            </h3>
                          );
                        }
                        
                        // Regular paragraph with bold text
                        const renderWithBold = (text: string) => {
                          const parts = text.split(/(\*\*.*?\*\*)/g);
                          return parts.map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
                            }
                            return <span key={i}>{part}</span>;
                          });
                        };
                        
                        // List items - handle both multi-line lists and single-line lists
                        if (trimmed.includes('\n- ') || (trimmed.startsWith('- ') && trimmed.split('\n').length > 1)) {
                          const items = trimmed.split('\n').filter(line => line.trim().startsWith('- '));
                          if (items.length > 0) {
                            return (
                              <ul key={idx} className="list-disc list-inside space-y-2 my-4 text-slate-200">
                                {items.map((item, i) => (
                                  <li key={i} className="leading-relaxed">
                                    {renderWithBold(item.replace(/^-\s+/, ''))}
                                  </li>
                                ))}
                              </ul>
                            );
                          }
                        }
                        
                        // Single list item as its own paragraph
                        if (trimmed.startsWith('- ') && !trimmed.includes('\n')) {
                          return (
                            <ul key={idx} className="list-disc list-inside space-y-2 my-4 text-slate-200">
                              <li className="leading-relaxed">
                                {renderWithBold(trimmed.replace(/^-\s+/, ''))}
                              </li>
                            </ul>
                          );
                        }
                        
                        return (
                          <p key={idx} className="text-slate-200 leading-relaxed mb-4">
                            {renderWithBold(trimmed)}
                          </p>
                        );
                      });
                      })()}
                    </article>
                  </div>
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