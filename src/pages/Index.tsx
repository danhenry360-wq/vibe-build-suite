import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, DollarSign, Globe, Cog, Bot, Loader2, Shield, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useSiteStats } from "@/hooks/useSiteStats";
import { usePortfolioProjects } from "@/hooks/usePortfolioProjects";

const fallbackStats = [
  { value: "50+", label: "Solutions Delivered" },
  { value: "2,400+", label: "Hours Saved for Clients" },
  { value: "$1.2M+", label: "Revenue Generated" },
  { value: "100%", label: "Project Success Rate" },
];

const services = [
  {
    icon: Globe,
    title: "Custom Web Solutions",
    description: "Revenue-focused websites engineered for conversion. Every element is designed to drive measurable business outcomes.",
    features: ["Conversion-Optimized Landing Pages", "Scalable E-commerce Platforms", "Enterprise Web Applications"],
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Eliminate manual tasks and human error. Our automation solutions typically save 15-40 hours per week.",
    features: ["End-to-End Workflow Automation", "CRM & Data Pipeline Integration", "Custom API Development"],
  },
  {
    icon: Bot,
    title: "AI Implementation",
    description: "Deploy production-ready AI systems that enhance customer experience and operational efficiency.",
    features: ["Intelligent Customer Assistants", "Automated Content Systems", "Custom RAG Solutions"],
  },
];

const codeSnippet = `const solution = SharkVibe.engineer({
  problem: "your challenge",
  approach: ["strategic", "systematic"],
  outcome: "measurable results",
  ownership: "complete"
});
// Delivered in weeks, not months`;

export default function Index() {
  const { data: siteStats, isLoading: statsLoading } = useSiteStats();
  const { data: featuredProjects, isLoading: projectsLoading } = usePortfolioProjects(true);

  const stats = siteStats?.length ? siteStats.map(s => ({ value: s.stat_value, label: s.stat_label })) : fallbackStats;

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
                AI Automation Engineering
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                We Solve Business Problems{" "}
                <span className="text-gradient">With AI.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                SharkVibe engineers custom AI solutions that save time, eliminate errors, and generate revenue. One-time investment, complete ownership, no ongoing fees.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary-sm">
                  <Link to="/contact">
                    Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted">
                  <Link to="/audit">
                    Free Technical Audit
                  </Link>
                </Button>
              </div>

              {/* Value Props */}
              <div className="mt-12 flex flex-wrap gap-4">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 float">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Weeks, Not Months</p>
                    <p className="text-xs text-muted-foreground">Accelerated Delivery</p>
                  </div>
                </div>
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 float-delayed">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Complete Ownership</p>
                    <p className="text-xs text-muted-foreground">One-Time Investment</p>
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
                  <span className="ml-3 text-xs text-muted-foreground font-mono">solution.ts</span>
                </div>
                <pre className="p-6 text-sm font-mono overflow-x-auto">
                  <code className="text-muted-foreground">
                    {codeSnippet.split('\n').map((line, i) => (
                      <div key={i} className="leading-relaxed">
                        {line.includes('const') && (
                          <span>
                            <span className="text-tertiary">const</span>
                            <span className="text-foreground"> solution</span>
                            <span className="text-muted-foreground"> = </span>
                            <span className="text-primary">SharkVibe</span>
                            <span className="text-foreground">.engineer({"{"}</span>
                          </span>
                        )}
                        {line.includes('problem:') && (
                          <span className="pl-4">
                            <span className="text-secondary">problem</span>
                            <span className="text-foreground">: </span>
                            <span className="text-primary">"your challenge"</span>
                            <span className="text-foreground">,</span>
                          </span>
                        )}
                        {line.includes('approach:') && (
                          <span className="pl-4">
                            <span className="text-secondary">approach</span>
                            <span className="text-foreground">: [</span>
                            <span className="text-primary">"strategic"</span>
                            <span className="text-foreground">, </span>
                            <span className="text-primary">"systematic"</span>
                            <span className="text-foreground">],</span>
                          </span>
                        )}
                        {line.includes('outcome:') && (
                          <span className="pl-4">
                            <span className="text-secondary">outcome</span>
                            <span className="text-foreground">: </span>
                            <span className="text-primary">"measurable results"</span>
                            <span className="text-foreground">,</span>
                          </span>
                        )}
                        {line.includes('ownership:') && (
                          <span className="pl-4">
                            <span className="text-secondary">ownership</span>
                            <span className="text-foreground">: </span>
                            <span className="text-primary">"complete"</span>
                          </span>
                        )}
                        {line.includes('});') && (
                          <span className="text-foreground">{"})"}</span>
                        )}
                        {line.includes('// Delivered') && (
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
            label="Our Expertise"
            title="Engineered Solutions, Measurable Results"
            description="We don't just build—we engineer solutions that drive quantifiable business outcomes."
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
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work / Success Stories */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Success Stories"
            title="Proven Results for Our Clients"
            description="Every project follows our Problem → Solution → Result methodology."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {projectsLoading ? (
              <div className="col-span-3 flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : featuredProjects?.length ? (
              featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass rounded-2xl overflow-hidden card-hover group"
                >
                  {project.image_url ? (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image_url} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                      🚀
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {project.tags?.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    {project.stats_improvement && (
                      <div className="pt-3 border-t border-border/50">
                        <p className="text-sm font-semibold text-primary">{project.stats_improvement}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              // Placeholder cards when no projects
              [
                { title: "E-commerce Platform", problem: "Manual inventory consuming 20+ hrs/week", result: "92% time reduction, $50K first-month revenue" },
                { title: "SaaS Dashboard", problem: "No visibility into real-time metrics", result: "40% faster decision-making" },
                { title: "Lead Generation System", problem: "Inconsistent lead qualification", result: "3x qualified leads, 60% less manual review" },
              ].map((project) => (
                <div key={project.title} className="glass rounded-2xl overflow-hidden card-hover group">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-6xl">📊</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Problem:</strong> {project.problem}</p>
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-sm font-semibold text-primary"><strong>Result:</strong> {project.result}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-border hover:bg-muted">
              <Link to="/portfolio">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
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
                Ready to Eliminate Inefficiency?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation to discuss your challenges. We will provide a clear roadmap with projected outcomes.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact">
                  Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
