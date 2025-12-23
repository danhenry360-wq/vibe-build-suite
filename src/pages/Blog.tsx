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
import { ArrowRight, Search, Clock, Calendar, Terminal, ChevronRight, Rss } from "lucide-react";
import { blogPosts, categoryColors } from "@/data/blog";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative z-10">
          <Reveal>
            <Badge className="badge-glow mb-6">
              <span className="pulse-dot mr-2" />
              KNOWLEDGE_BASE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-mono mb-6">
              Intel <span className="text-gradient">Archive</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl font-mono">
              {">"} AI automation insights, engineering tutorials, and case studies from the SharkVibe foundry.
            </p>
          </Reveal>

          {/* Search Bar */}
          <Reveal delay={0.1}>
            <div className="max-w-md mt-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center border-r border-primary/30 bg-primary/5">
                <Search className="text-primary w-4 h-4" />
              </div>
              <Input
                type="text"
                placeholder="search --query=''"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 h-12 bg-black border-primary/30 font-mono text-sm focus:border-primary"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 md:pb-24 relative">
        <div className="absolute inset-0 bg-grid-dense opacity-10" />
        <div className="container-custom relative z-10">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <Dialog key={post.id}>
                  <Reveal delay={index * 0.1}>
                    <DialogTrigger asChild>
                      <article className="card-cyber overflow-hidden cursor-pointer h-full flex flex-col group">
                        {/* Terminal header */}
                        <div className="flex items-center gap-2 p-3 border-b border-primary/20 bg-primary/5">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/60" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                            <div className="w-2 h-2 rounded-full bg-green-500/60" />
                          </div>
                          <span className="text-[10px] font-mono text-primary/60 ml-2">article_{post.id}.md</span>
                        </div>
                        
                        {/* Icon area */}
                        <div className="h-40 bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
                          <div className="w-16 h-16 border border-primary/30 bg-black/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <post.image size={28} className="text-primary" />
                          </div>
                          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-primary-foreground font-mono font-bold flex items-center gap-2">
                              READ_FILE <ChevronRight size={14} />
                            </span>
                          </div>
                          {/* Scanline effect */}
                          <div className="absolute inset-0 scanlines opacity-30" />
                        </div>
                        
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="text-[10px] font-mono border-primary/30 text-primary px-2 py-0">
                              {post.category}
                            </Badge>
                          </div>
                          <h2 className="text-lg font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex justify-between text-[10px] text-primary/60 pt-3 border-t border-primary/20 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar size={10} /> {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={10} /> {post.readTime}
                            </span>
                          </div>
                        </div>
                      </article>
                    </DialogTrigger>
                  </Reveal>

                  <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-black border-primary/30">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-[10px] font-mono border-primary/30 text-primary px-2 py-0">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-primary/60 font-mono flex items-center gap-1">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                      <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight mb-4 font-mono">
                        {post.title}
                      </DialogTitle>
                      <DialogDescription className="text-base text-muted-foreground font-mono">
                        {">"} {post.excerpt}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 prose prose-invert max-w-none prose-headings:font-mono prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <div className="mt-8 pt-6 border-t border-primary/20 flex justify-between items-center bg-primary/5 p-4">
                      <div className="text-xs text-muted-foreground font-mono">
                        PUBLISHED: <span className="text-primary">{post.date}</span>
                      </div>
                      <Button variant="outline" size="sm" className="font-mono text-xs border-primary/30 hover:bg-primary/10" asChild>
                        <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent("Check out this article: " + window.location.href)}`}>
                          SHARE_INTEL
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 card-cyber max-w-md mx-auto">
              <Terminal className="w-12 h-12 text-primary/40 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground font-mono mb-4">
                {">"} No articles found for "{searchQuery}"
              </p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="font-mono text-xs border-primary/30"
              >
                CLEAR_QUERY
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="card-cyber p-8 md:p-12 max-w-2xl mx-auto text-center">
              {/* Terminal header */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <Rss className="text-primary" size={20} />
                <span className="text-sm font-mono text-primary">DATA_STREAM</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
                Subscribe to <span className="text-gradient">Intel Feed</span>
              </h2>
              <p className="text-muted-foreground mb-8 font-mono text-sm">
                {">"} Get AI automation insights delivered to your inbox. Zero spam. Unsubscribe anytime.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black border-primary/30 font-mono h-12"
                    required
                  />
                </div>
                <Button type="submit" className="bg-primary text-primary-foreground font-mono font-bold h-12 px-6 glow-primary-sm">
                  SUBSCRIBE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
