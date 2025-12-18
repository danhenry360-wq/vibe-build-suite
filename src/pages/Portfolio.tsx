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
import { ArrowRight } from "lucide-react";
import { projects, categories } from "../data/portfolio";

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

