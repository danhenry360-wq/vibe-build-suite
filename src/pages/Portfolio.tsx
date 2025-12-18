import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingBag, BarChart3, Rocket, Settings, Camera, Bot } from "lucide-react";

const categories = ["All", "Websites", "Automation", "AI Integration"];

const projects = [
  {
    id: 1,
    icon: ShoppingBag,
    title: "Artisan Goods Marketplace",
    tags: ["E-commerce", "Automation"],
    category: "Websites",
    description: "Full-featured marketplace with automated inventory management and vendor onboarding.",
    challenge: "The client needed a scalable platform for 50+ vendors with manual processes slowing down onboarding.",
    solution: "We built a custom multi-vendor marketplace with automated Stripe Onboarding and n8n workflows for inventory sync.",
    stack: ["React", "Node.js", "Stripe Connect", "n8n"],
    stats: { time: "3 weeks", improvement: "200% sales" },
  },
  {
    id: 2,
    icon: BarChart3,
    title: "SaaS Analytics Dashboard",
    tags: ["Dashboard", "Analytics"],
    category: "Websites",
    description: "Real-time analytics dashboard with AI-powered insights and custom reporting.",
    challenge: "Users were overwhelmed by raw data CSVs and lacked actionable insights.",
    solution: "Developed an interactive dashboard with Recharts and an integrated AI agent to summarize trends in plain English.",
    stack: ["Next.js", "Tremor", "OpenAI API", "PostgreSQL"],
    stats: { time: "4 weeks", improvement: "50% faster decisions" },
  },
  {
    id: 3,
    icon: Rocket,
    title: "FinTech Startup Launch",
    tags: ["Landing Page", "AI Chatbot"],
    category: "AI Integration",
    description: "High-converting landing page with integrated AI support chatbot.",
    challenge: "The startup needed to capture leads and answer complex FAQ queries 24/7 without a support team.",
    solution: "Designed a high-velocity landing page and integrated a custom-trained ChatGPT assistant for instant support.",
    stack: ["React", "Tailwind CSS", "LangChain", "Supabase"],
    stats: { time: "2 weeks", improvement: "35% conversion rate" },
  },
  {
    id: 4,
    icon: Settings,
    title: "Agency Workflow Suite",
    tags: ["n8n", "Automation"],
    category: "Automation",
    description: "Complete automation suite connecting CRM, invoicing, and project management.",
    challenge: "The agency was losing 15+ hours a week on manual data entry between HubSpot and Xero.",
    solution: "Orchestrated a complex n8n workflow to sync leads, generate invoices, and alert the team on Slack.",
    stack: ["n8n", "HubSpot API", "Xero API", "Slack Webhooks"],
    stats: { time: "2 weeks", improvement: "15 hrs/week saved" },
  },
  {
    id: 5,
    icon: Camera,
    title: "Photographer Portfolio",
    tags: ["Portfolio", "CMS"],
    category: "Websites",
    description: "Stunning portfolio with custom CMS for easy gallery management.",
    challenge: "The photographer needed a visually immersive site that was also easy to update without code.",
    solution: "Built a visually rich frontend connected to Sanity CMS for drag-and-drop image management.",
    stack: ["Astro", "Sanity CMS", "Framer Motion"],
    stats: { time: "1 week", improvement: "10x more inquiries" },
  },
  {
    id: 6,
    icon: Bot,
    title: "Knowledge Base AI",
    tags: ["AI", "RAG"],
    category: "AI Integration",
    description: "RAG-powered Q&A system trained on company documentation.",
    challenge: "Internal employees wasted hours searching through thousands of PDF docs.",
    solution: "Implemented a RAG (Retrieval-Augmented Generation) system to provide instant, cited answers from their knowledge base.",
    stack: ["Python", "Pinecone", "LangChain", "FastAPI"],
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
          <Reveal>
            <SectionHeader
              label="Our Work"
              title="Projects We're Proud Of"
              description="Real results for real clients. Click on any project to see the full case study."
            />
          </Reveal>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          {/* Filter Buttons */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                      ? "bg-gradient-primary text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Dialog key={project.id}>
                <Reveal delay={index * 0.1}>
                  <DialogTrigger asChild>
                    <div className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer h-full flex flex-col">
                      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                        <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-lg">
                          <project.icon size={32} />
                        </div>
                        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-primary-foreground font-bold flex items-center gap-2">
                            View Case Study <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-3 flex-wrap">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                        <div className="flex justify-between items-center pt-4 border-t border-border/50">
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Timeline</p>
                            <p className="font-bold text-primary">{project.stats.time}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Result</p>
                            <p className="font-bold text-secondary">{project.stats.improvement}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                </Reveal>

                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <project.icon size={20} />
                      </div>
                      {project.title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass p-4 rounded-xl">
                        <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                        <p className="text-xl font-bold text-primary">{project.stats.time}</p>
                      </div>
                      <div className="glass p-4 rounded-xl">
                        <p className="text-sm text-muted-foreground mb-1">Impact</p>
                        <p className="text-xl font-bold text-secondary">{project.stats.improvement}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.1}>
                <div className="glass rounded-2xl p-8 h-full">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want Similar Results?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into reality with AI-powered speed.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

