import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="section-padding">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and experiences in data science, finance, 
            technology, and career development.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <div
                key={post.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-3">
                      {post.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-electric font-medium">
                      Read more →
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Posts */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">
            Latest Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <div
                key={post.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="text-electric font-medium">Read more →</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric to-electric-light text-white rounded-full text-sm font-medium">
            <span>📝</span>
            <span>More articles coming soon!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
