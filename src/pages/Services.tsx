import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cog, Search, Bot, CheckCircle2, FileCheck, ClipboardCheck, Settings, Rocket, Zap, Crosshair, Brain, Network, ShieldAlert, Cpu, Terminal } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "High-Velocity Web Architecture",
    description: "Revenue-focused digital infrastructure engineered for speed, conversion, and global scalability.",
    impact: "IMPACT: 50% faster TTI and 2x average conversion lift.",
    features: [
      "Conversion-Optimized Landing Vectors",
      "Headless CMS Architectures",
      "Progressive Web Application (PWA) Standards",
      "API-First Data Systems",
      "Global CDN Edge Deployment",
    ],
    cta: "Initialize_Architecture",
    ctaLink: "/contact",
  },
  {
    id: "automation",
    icon: Cog,
    title: "Autonomous Workflow Orchestration",
    description: "Eliminate operational friction. We replace manual human dependencies with fault-tolerant, self-healing automated systems.",
    impact: "IMPACT: 15-40 hr/week overhead reduction per department.",
    features: [
      "End-to-End Logic Automation",
      "CRM/ERP Bi-Directional Sync",
      "Data Pipeline Engineering",
      "Webhook & API Orchestration",
      "Automated Reporting Intelligence",
    ],
    cta: "Automate_Operations",
    ctaLink: "/contact",
  },
  {
    id: "audits",
    icon: Search,
    title: "Technical Infrastructure Forensics",
    description: "Deep-dive analysis of your existing stack. We identify invisible bottlenecks, security risks, and optimization vectors.",
    impact: "IMPACT: Identify avg 12 critical vulnerabilities or blockers.",
    features: [
      "Core Web Vitals Forensics",
      "Technical SEO Audits",
      "Security Vulnerability Scanning",
      "Codebase Health Assessment",
      "Accessibility Compliance (WCAG)",
    ],
    cta: "Request_Forensic_Audit",
    ctaLink: "/audit",
  },
  {
    id: "ai",
    icon: Bot,
    title: "Applied Intelligence Systems",
    description: "Move beyond the hype. Deploy specialized AI agents that function as 24/7 autonomous specialized employees.",
    impact: "IMPACT: 24/7 Coverage and instant data synthesis at scale.",
    features: [
      "Autonomous Customer Agents",
      "RAG (Retrieval-Augmented Generation) Systems",
      "Predictive Analytics Engines",
      "Automated Content Foundries",
      "Voice & Vision Integration",
    ],
    cta: "Deploy_Intelligence",
    ctaLink: "/contact",
  },
];

const process = [
  {
    step: "01",
    title: "Systems_Reconnaissance",
    icon: Search,
    description: "Forensic assessment of your current infrastructure, objectives, and market positioning. Zero assumptions.",
  },
  {
    step: "02",
    title: "Strategic_Blueprinting",
    icon: Crosshair,
    description: "Our engineers architect a comprehensive battle plan detailing technology stack, data flow, and exact milestones.",
  },
  {
    step: "03",
    title: "Agile_Execution",
    icon: Zap,
    description: "Rapid iteration cycles with functional deliverables at every sprint. Visual progress, not just promises.",
  },
  {
    step: "04",
    title: "Validation_Protocol",
    icon: ClipboardCheck,
    description: "Stress testing across security, load, and responsiveness vectors. We break it before your users can.",
  },
  {
    step: "05",
    title: "Deployment_Handover",
    icon: Rocket,
    description: "Zero-downtime launch sequence. Full source code ownership transfer and team training for autonomy.",
  },
];

const ServiceVisual = ({ id }: { id: string }) => {
  if (id === "websites") {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-cyber-dark">
        <div className="absolute inset-0 bg-grid-dense opacity-40" />
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-12 h-12 rounded-sm border border-primary/30 bg-primary/5 flex items-center justify-center float" style={{ animationDelay: `${i * 0.2}s` }}>
              <Globe size={20} className="text-primary/60" />
            </div>
          ))}
        </div>
        {/* Data Streams */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-[1px] h-[80px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-40 data-stream"
              style={{ left: `${20 + i * 15}%`, animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (id === "automation") {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-cyber-dark">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute animate-[spin_10s_linear_infinite] opacity-20 text-primary">
          <Cog size={200} strokeWidth={0.5} />
        </div>
        <div className="absolute top-8 right-8 animate-[spin_5s_linear_infinite_reverse] opacity-15 text-secondary">
          <Settings size={100} strokeWidth={1} />
        </div>
        <div className="absolute bottom-8 left-8 animate-[spin_7s_linear_infinite] opacity-15 text-tertiary">
          <Cog size={80} strokeWidth={1} />
        </div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/2" />
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent left-1/2" />
      </div>
    );
  }

  if (id === "audits") {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-cyber-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive/10 via-background to-background" />
        <div className="absolute inset-0 border border-destructive/10 rounded-full scale-150 animate-pulse" />
        <div className="absolute inset-0 border border-destructive/10 rounded-full scale-100 animate-pulse delay-75" />
        <div className="z-10 bg-background/50 backdrop-blur-sm p-6 rounded-sm border border-destructive/30 shadow-[0_0_30px_hsl(var(--destructive)/0.2)]">
          <ShieldAlert size={60} className="text-destructive" />
        </div>
      </div>
    );
  }

  if (id === "ai") {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-cyber-dark">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary animate-pulse" />
            <line x1="50" y1="50" x2="20" y2="20" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
            <line x1="50" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
            <line x1="50" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
            <line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
          </svg>
        </div>
        <div className="z-10 float">
          <Brain size={100} className="text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />
        </div>
        <div className="absolute top-10 left-1/2 float-delayed opacity-50">
          <Network size={36} className="text-secondary" />
        </div>
        <div className="absolute bottom-10 right-1/3 float opacity-50">
          <Cpu size={28} className="text-tertiary" />
        </div>
      </div>
    );
  }

  return null;
};

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative">
          <Reveal>
            <SectionHeader
              label="// CAPABILITIES"
              title="Engineering Excellence, Delivered"
              description="We synthesize deep technical expertise with AI-accelerated development to deliver enterprise-grade solutions at impossible speeds."
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-mono">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 font-light">
                    {service.description}
                  </p>

                  {/* Business Impact Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wide">
                      <Zap className="w-3 h-3" />
                      {service.impact}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground font-mono text-sm">
                        <span className="w-1.5 h-1.5 bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-gradient-cyber text-primary-foreground hover:opacity-90 font-mono uppercase tracking-wide glow-primary-sm">
                    <Link to={service.ctaLink}>
                      {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="card-cyber h-[400px] w-full flex items-center justify-center relative overflow-hidden">
                    <ServiceVisual id={service.id} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-cyber-dark relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative">
          <SectionHeader
            label="// METHODOLOGY"
            title="The Engineering Protocol"
            description="Our proven five-phase engagement model ensures predictability and transparency."
          />

          <div className="grid md:grid-cols-5 gap-4 mt-12">
            {process.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1} className="relative">
                <div className="card-cyber p-6 h-full group hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-mono font-black text-primary/30">{step.step}</span>
                  </div>

                  <div className="mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xs font-mono font-bold text-foreground mb-2 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary/30">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <Reveal>
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">// READY_TO_DEPLOY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to <span className="text-gradient">Upgrade</span> Your Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Initialize a high-level consultation to explore how our engineering capabilities can accelerate your objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-cyber text-primary-foreground hover:opacity-90 font-mono uppercase tracking-wide glow-primary-sm">
                <Link to="/contact">
                  <Terminal className="w-4 h-4 mr-2" />
                  Initialize_Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 font-mono uppercase tracking-wide">
                <Link to="/pricing">View_Investment_Options</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}