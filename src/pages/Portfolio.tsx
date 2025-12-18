import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Websites", "Automation", "AI Integration"];

const projects = [
  {
    id: 1,
    icon: "🏪",
    title: "Artisan Goods Marketplace",
    tags: ["E-commerce", "Automation"],
    category: "Websites",
    description: "Full-featured marketplace with automated inventory management and vendor onboarding.",
    stats: { time: "3 weeks", improvement: "200% sales" },
  },
  {
    id: 2,
    icon: "📊",
    title: "SaaS Analytics Dashboard",
    tags: ["Dashboard", "Analytics"],
    category: "Websites",
    description: "Real-time analytics dashboard with AI-powered insights and custom reporting.",
    stats: { time: "4 weeks", improvement: "50% faster decisions" },
  },
  {
    id: 3,
    icon: "🚀",
    title: "FinTech Startup Launch",
    tags: ["Landing Page", "AI Chatbot"],
    category: "AI Integration",
    description: "High-converting landing page with integrated AI support chatbot.",
    stats: { time: "2 weeks", improvement: "35% conversion rate" },
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Agency Workflow Suite",
    tags: ["n8n", "Automation"],
    category: "Automation",
    description: "Complete automation suite connecting CRM, invoicing, and project management.",
    stats: { time: "2 weeks", improvement: "15 hrs/week saved" },
  },
  {
    id: 5,
    icon: "🎨",
    title: "Photographer Portfolio",
    tags: ["Portfolio", "CMS"],
    category: "Websites",
    description: "Stunning portfolio with custom CMS for easy gallery management.",
    stats: { time: "1 week", improvement: "10x more inquiries" },
  },
  {
    id: 6,
    icon: "🤖",
    title: "Knowledge Base AI",
    tags: ["AI", "RAG"],
    category: "AI Integration",
    description: "RAG-powered Q&A system trained on company documentation.",
    stats: { time: "3 weeks", improvement: "80% faster support" },
  },
];

const testimonials = [
  {
    quote: "SharkVibe delivered our entire e-commerce platform in just 3 weeks. The quality exceeded our expectations.",
    name: "Sarah Chen",
    title: "Founder, Artisan Collective",
    avatar: "👩‍💼",
  },
  {
    quote: "The automation workflow they built saves our team 15+ hours every week. Best investment we've made.",
    name: "Marcus Johnson",
    title: "Operations Director",
    avatar: "👨‍💻",
  },
  {
    quote: "Professional, fast, and incredibly talented. They made the entire process seamless from start to finish.",
    name: "Emily Rodriguez",
    title: "Creative Director",
    avatar: "👩‍🎨",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Projects We're Proud Of"
            description="Real results for real clients. Here's a selection of our recent work."
          />
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl relative overflow-hidden">
                  <span className="group-hover:scale-125 transition-transform duration-500">
                    {project.icon}
                  </span>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-foreground font-medium">View Case Study</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-primary">{project.stats.time} to launch</span>
                    <span className="text-secondary">{project.stats.improvement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Client Love"
            title="What Our Clients Say"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="glass rounded-2xl p-8">
                <p className="text-foreground italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Want Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your ideas into reality.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
