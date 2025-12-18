import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, DollarSign, Globe, Cog, Bot, Search } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "AI Tools Mastered" },
  { value: "24h", label: "Response Time" },
  { value: "100%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Globe,
    title: "AI-Powered Websites",
    description: "Custom websites built with cutting-edge AI tools. No templates, no compromises.",
    features: ["Landing Pages", "E-commerce", "Web Applications"],
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description: "Intelligent automations that save you hours every week.",
    features: ["n8n Workflows", "Make.com", "Custom APIs"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Embed intelligent features into your existing systems.",
    features: ["AI Chatbots", "Content Generation", "RAG Systems"],
  },
];

const projects = [
  {
    icon: "🏪",
    title: "Artisan Marketplace",
    tags: ["E-commerce", "Automation"],
    description: "Full-featured marketplace with automated inventory management.",
  },
  {
    icon: "📊",
    title: "SaaS Dashboard",
    tags: ["Dashboard", "Analytics"],
    description: "Real-time analytics dashboard with AI-powered insights.",
  },
  {
    icon: "🚀",
    title: "Startup Launch",
    tags: ["Landing Page", "AI Chatbot"],
    description: "High-converting landing page with integrated AI support.",
  },
];

const codeSnippet = `const project = vibeCode({
  idea: "your vision",
  tools: ["Claude", "Cursor"],
  speed: "lightning",
  quality: "exceptional"
});
// Ship in days, not months 🚀`;

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="badge-glow mb-6">
                <span className="pulse-dot" />
                AI-Powered Development
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Build Smarter.{" "}
                <span className="text-gradient">Vibe Faster.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                We transform your ideas into stunning websites and automated workflows using cutting-edge AI tools. One-time fee, no subscriptions, no hassle.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary-sm">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted">
                  <Link to="/audit">
                    Free Site Audit
                  </Link>
                </Button>
              </div>

              {/* Floating Cards */}
              <div className="mt-12 flex flex-wrap gap-4">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 float">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">10x Faster</p>
                    <p className="text-xs text-muted-foreground">Development Speed</p>
                  </div>
                </div>
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 float-delayed">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">One-Time Fee</p>
                    <p className="text-xs text-muted-foreground">No Subscriptions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Code Window */}
            <div className="relative">
              <div className="code-window glow-primary">
                <div className="code-header">
                  <div className="code-dot bg-red-500" />
                  <div className="code-dot bg-yellow-500" />
                  <div className="code-dot bg-green-500" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">sharkvibe.js</span>
                </div>
                <pre className="p-6 text-sm font-mono overflow-x-auto">
                  <code className="text-muted-foreground">
                    {codeSnippet.split('\n').map((line, i) => (
                      <div key={i} className="leading-relaxed">
                        {line.includes('const') && (
                          <span>
                            <span className="text-tertiary">const</span>
                            <span className="text-foreground"> project</span>
                            <span className="text-muted-foreground"> = </span>
                            <span className="text-primary">vibeCode</span>
                            <span className="text-foreground">({"{"}</span>
                          </span>
                        )}
                        {line.includes('idea:') && (
                          <span className="pl-4">
                            <span className="text-secondary">idea</span>
                            <span className="text-foreground">: </span>
                            <span className="text-primary">"your vision"</span>
                            <span className="text-foreground">,</span>
                          </span>
                        )}
                        {line.includes('tools:') && (
                          <span className="pl-4">
                            <span className="text-secondary">tools</span>
                            <span className="text-foreground">: [</span>
                            <span className="text-primary">"Claude"</span>
                            <span className="text-foreground">, </span>
                            <span className="text-primary">"Cursor"</span>
                            <span className="text-foreground">],</span>
                          </span>
                        )}
                        {line.includes('speed:') && (
                          <span className="pl-4">
                            <span className="text-secondary">speed</span>
                            <span className="text-foreground">: </span>
                            <span className="text-primary">"lightning"</span>
                            <span className="text-foreground">,</span>
                          </span>
                        )}
                        {line.includes('quality:') && (
                          <span className="pl-4">
                            <span className="text-secondary">quality</span>
                            <span className="text-foreground">: </span>
                            <span className="text-primary">"exceptional"</span>
                          </span>
                        )}
                        {line.includes('});') && (
                          <span className="text-foreground">{"})"}</span>
                        )}
                        {line.includes('// Ship') && (
                          <span className="text-muted-foreground">{line}</span>
                        )}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="What We Do"
            title="Services That Transform"
            description="From stunning websites to intelligent automations, we build digital experiences that drive results."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium mt-6 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Featured Projects"
            description="A glimpse of what we've built for clients around the world."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-border hover:bg-muted">
              <Link to="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-full opacity-90" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's turn your vision into reality. Get started with a free consultation today.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
