import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Claude vs ChatGPT: Which is Better for Coding?",
    excerpt: "A deep dive into the strengths and weaknesses of the two leading AI assistants for development work.",
    category: "AI Tools",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "🤖",
  },
  {
    id: 2,
    title: "Getting Started with Cursor: A Complete Guide",
    excerpt: "Everything you need to know to supercharge your development workflow with the AI-first code editor.",
    category: "Tutorials",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    image: "💻",
  },
  {
    id: 3,
    title: "How We Built a Full E-commerce Site in 2 Weeks",
    excerpt: "A behind-the-scenes look at our process for delivering a complex project in record time.",
    category: "Case Study",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    image: "🛒",
  },
  {
    id: 4,
    title: "n8n vs Make vs Zapier: Automation Showdown",
    excerpt: "Comparing the top automation platforms to help you choose the right one for your needs.",
    category: "Comparisons",
    date: "Dec 8, 2024",
    readTime: "15 min read",
    image: "⚙️",
  },
  {
    id: 5,
    title: "5 AI Tools Every Developer Should Know in 2024",
    excerpt: "The essential AI tools that are transforming how we build software.",
    category: "Resources",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    image: "🛠️",
  },
  {
    id: 6,
    title: "The Rise of Vibe Coding: What It Means for You",
    excerpt: "Understanding the new paradigm of AI-assisted development and how to leverage it.",
    category: "Industry",
    date: "Dec 1, 2024",
    readTime: "7 min read",
    image: "🚀",
  },
];

const categoryColors: Record<string, string> = {
  "AI Tools": "bg-primary/20 text-primary",
  Tutorials: "bg-secondary/20 text-secondary",
  "Case Study": "bg-tertiary/20 text-tertiary",
  Comparisons: "bg-yellow-500/20 text-yellow-500",
  Resources: "bg-green-500/20 text-green-500",
  Industry: "bg-orange-500/20 text-orange-500",
};

export default function Blog() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Insights & Updates"
            title="The SharkVibe Blog"
            description="AI tools, tutorials, case studies, and industry insights to help you build better."
          />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      categoryColors[post.category] || "bg-muted text-muted-foreground"
                    }`}
                  >
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get AI Insights Delivered
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our newsletter for the latest AI tools, tutorials, and industry updates. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border flex-1"
                required
              />
              <Button type="submit" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
