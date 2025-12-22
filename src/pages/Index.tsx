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

const codeSnippet = `// SharkVibe.synthesize()
const pipeline = await SharkVibe.init({
  objective: client.businessProblem,
  methodology: "VELOCITY_PROTOCOL",
  constraints: { timeline: "weeks" }
});

await pipeline.engineer({
  agents: ["Claude", "GPT-4o", "Gemini"],
  stack: ["Next.js", "Supabase", "n8n"],
  ownership: "CLIENT_ABSOLUTE"
});

// Output: Production-Ready Solution`;

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
                <span className="font-mono text-xs">SYSTEM_STATUS: OPERATIONAL</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                We Engineer{" "}
                <span className="text-gradient text-glow">Business Solutions</span>
                <br />
                <span className="text-muted-foreground">With Autonomous AI.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl font-light">
                SharkVibe synthesizes human intelligence with AI agents to deliver enterprise-grade software at impossible speeds. 
                <span className="text-primary font-medium"> Weeks, not months.</span>
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-cyber text-primary-foreground hover:opacity-90 transition-opacity glow-primary-sm font-mono uppercase tracking-wide">
                  <Link to="/contact">
                    Initialize Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 font-mono uppercase tracking-wide">
                  <Link to="/audit">
                    Run System Audit
                  </Link>
                </Button>
              </div>

              {/* Value Props - Cyber Style */}
              <div className="mt-12 flex flex-wrap gap-4">
                <div className="card-cyber px-4 py-3 flex items-center gap-3 float">
                  <div className="w-10 h-10 rounded-sm bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground font-mono">VELOCITY_MODE</p>
                    <p className="text-xs text-muted-foreground">Weeks, Not Months</p>
                  </div>
                </div>
                <div className="card-cyber px-4 py-3 flex items-center gap-3 float-delayed">
                  <div className="w-10 h-10 rounded-sm bg-secondary/20 flex items-center justify-center border border-secondary/30">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground font-mono">IP_SOVEREIGNTY</p>
                    <p className="text-xs text-muted-foreground">100% Client Ownership</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Terminal Window */}
            <div className="relative">
              <div className="code-window glow-primary">
                <div className="code-header">
                  <div className="code-dot bg-destructive" />
                  <div className="code-dot bg-yellow-500" />
                  <div className="code-dot bg-green-500" />
                  <span className="ml-3 text-xs text-primary font-mono">sharkvibe_protocol.ts</span>
                  <span className="ml-auto text-xs text-muted-foreground font-mono">v2.0.0</span>
                </div>
                <pre className="p-6 text-sm font-mono overflow-x-auto bg-cyber-dark">
                  <code>
                    <div className="text-muted-foreground">// SharkVibe.synthesize()</div>
                    <div><span className="text-tertiary">const</span> <span className="text-foreground">pipeline</span> <span className="text-muted-foreground">=</span> <span className="text-tertiary">await</span> <span className="text-primary">SharkVibe</span><span className="text-foreground">.init({"{"}</span></div>
                    <div className="pl-4"><span className="text-secondary">objective</span><span className="text-foreground">:</span> <span className="text-foreground">client</span><span className="text-muted-foreground">.</span><span className="text-foreground">businessProblem</span><span className="text-foreground">,</span></div>
                    <div className="pl-4"><span className="text-secondary">methodology</span><span className="text-foreground">:</span> <span className="text-primary">"VELOCITY_PROTOCOL"</span><span className="text-foreground">,</span></div>
                    <div className="pl-4"><span className="text-secondary">constraints</span><span className="text-foreground">:</span> <span className="text-foreground">{"{"}</span> <span className="text-secondary">timeline</span><span className="text-foreground">:</span> <span className="text-primary">"weeks"</span> <span className="text-foreground">{"}"}</span></div>
                    <div><span className="text-foreground">{"})"}</span><span className="text-muted-foreground">;</span></div>
                    <div className="mt-2"></div>
                    <div><span className="text-tertiary">await</span> <span className="text-foreground">pipeline</span><span className="text-muted-foreground">.</span><span className="text-secondary">engineer</span><span className="text-foreground">({"{"}</span></div>
                    <div className="pl-4"><span className="text-secondary">agents</span><span className="text-foreground">:</span> <span className="text-foreground">[</span><span className="text-primary">"Claude"</span><span className="text-foreground">,</span> <span className="text-primary">"GPT-4o"</span><span className="text-foreground">,</span> <span className="text-primary">"Gemini"</span><span className="text-foreground">],</span></div>
                    <div className="pl-4"><span className="text-secondary">stack</span><span className="text-foreground">:</span> <span className="text-foreground">[</span><span className="text-primary">"Next.js"</span><span className="text-foreground">,</span> <span className="text-primary">"Supabase"</span><span className="text-foreground">,</span> <span className="text-primary">"n8n"</span><span className="text-foreground">],</span></div>
                    <div className="pl-4"><span className="text-secondary">ownership</span><span className="text-foreground">:</span> <span className="text-primary">"CLIENT_ABSOLUTE"</span></div>
                    <div><span className="text-foreground">{"})"}</span><span className="text-muted-foreground">;</span></div>
                    <div className="mt-2"></div>
                    <div className="text-muted-foreground">// Output: Production-Ready Solution</div>
                  </code>
                </pre>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-secondary/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-primary/10 bg-cyber-dark relative">
        <div className="absolute inset-0 bg-grid-dense opacity-30" />
        <div className="container-custom relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient font-mono mb-2">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding relative">
        <div className="container-custom">
          <SectionHeader
            label="// CAPABILITIES"
            title="Engineered Solutions, Measurable Results"
            description="We don't just build—we synthesize solutions that drive quantifiable business outcomes."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-cyber p-8 card-hover group"
              >
                <div className="w-14 h-14 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-mono">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 bg-primary glow-primary-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-mono text-sm mt-6 hover:gap-3 transition-all uppercase tracking-wide"
                >
                  Explore_Module <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work / Success Stories */}
      <section className="section-padding bg-cyber-dark relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative">
          <SectionHeader
            label="// CASE_STUDIES"
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
                  className="card-cyber overflow-hidden card-hover group"
                >
                  {project.image_url ? (
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={project.image_url} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-grid-dense opacity-30" />
                      <Globe className="w-16 h-16 text-primary/30" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {project.tags?.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-sm bg-primary/10 text-primary font-mono uppercase border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    {project.stats_improvement && (
                      <div className="pt-3 border-t border-primary/20">
                        <p className="text-sm font-mono text-primary">{project.stats_improvement}</p>
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
                <div key={project.title} className="card-cyber overflow-hidden card-hover group">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-grid-dense opacity-30" />
                    <Globe className="w-16 h-16 text-primary/30" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2"><span className="text-primary font-mono">PROBLEM:</span> {project.problem}</p>
                    <div className="pt-3 border-t border-primary/20">
                      <p className="text-sm font-mono text-secondary"><span className="text-primary">RESULT:</span> {project.result}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 font-mono uppercase tracking-wide">
              <Link to="/portfolio">
                View_All_Cases <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-lg overflow-hidden border border-primary/30">
            <div className="absolute inset-0 bg-gradient-cyber opacity-20" />
            <div className="absolute inset-0 bg-grid-dense opacity-30" />
            <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">// INITIALIZE_PROTOCOL</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to <span className="text-gradient">Eliminate Inefficiency</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
                Initialize a consultation to discuss your challenges. We synthesize a clear roadmap with projected outcomes.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-cyber text-primary-foreground hover:opacity-90 glow-primary-sm font-mono uppercase tracking-wide"
              >
                <Link to="/contact">
                  Initialize_Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
