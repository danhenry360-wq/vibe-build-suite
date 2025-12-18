import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Search, Clock, Calendar } from "lucide-react";
import { blogPosts, categoryColors } from "@/data/blog";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <Reveal>
            <SectionHeader
              label="Insights & Updates"
              title="The SharkVibe Blog"
              description="AI tools, tutorials, case studies, and industry insights to help you build better."
            />
          </Reveal>

          {/* Search Bar */}
          <Reveal delay={0.1}>
            <div className="max-w-md mx-auto mt-8 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card/50 backdrop-blur border-border/50 text-lg focus:ring-primary/50"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <Dialog key={post.id}>
                  <Reveal delay={index * 0.1}>
                    <DialogTrigger asChild>
                      <article
                        className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer h-full flex flex-col"
                      >
                        <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary relative overflow-hidden">
                          <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                            <post.image size={32} />
                          </div>
                          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-primary-foreground font-bold flex items-center gap-2">
                              Read Article <ArrowRight size={16} />
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category] || "bg-muted text-muted-foreground"
                                }`}
                            >
                              {post.category}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 text-pretty flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                          </div>
                        </div>
                      </article>
                    </DialogTrigger>
                  </Reveal>

                  <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category] || "bg-muted text-muted-foreground"
                            }`}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <DialogTitle className="text-3xl font-bold leading-tight mb-4">
                        {post.title}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-foreground/80 font-medium">
                        {post.excerpt}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                      {/* Render HTML content safely since it's from our own file */}
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <div className="mt-8 pt-8 border-t border-border flex justify-between items-center bg-muted/20 p-4 rounded-xl">
                      <div className="text-sm text-muted-foreground">
                        Posted on <span className="font-medium text-foreground">{post.date}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent("Check out this article: " + window.location.href)}`}>
                          Share Article
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No articles found matching "{searchQuery}"</p>
              <Button
                variant="link"
                onClick={() => setSearchQuery("")}
                className="mt-2 text-primary"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <Reveal>
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
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
