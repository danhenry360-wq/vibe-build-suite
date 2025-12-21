import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cog, Search, Bot, CheckCircle2, FileCheck, ClipboardCheck, Settings, Rocket, Zap, Crosshair, Brain, Network, ShieldAlert, Cpu } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "High-Velocity Web Architecture",
    description: "Revenue-focused digital infrastructure engineered for speed, conversion, and global scalability.",
    impact: "Impact: 50% faster TTI (Time to Interactive) and 2x average conversion lift.",
    features: [
      "Conversion-Optimized Landing Vectors",
      "Headless CMS Architectures",
      "Progressive Web Application (PWA) Standards",
      "API-First Data Systems",
      "Global CDN Edge Deployment",
    ],
    cta: "Initiate Architecture",
    ctaLink: "/contact",
  },
  {
    id: "automation",
    icon: Cog,
    title: "Autonomous Workflow Orchestration",
    description: "Eliminate operational friction. We replace manual human dependencies with fault-tolerant, self-healing automated systems.",
    impact: "Impact: Typical 15-40 hr/week overhead reduction per department.",
    features: [
      "End-to-End Logic Automation",
      "CRM/ERP Bi-Directional Sync",
      "Data Pipeline Engineering",
      "Webhook & API Orchestration",
      "Automated Reporting Intelligence",
    ],
    cta: "Automate Operations",
    ctaLink: "/contact",
  },
  {
    id: "audits",
    icon: Search,
    title: "Technical Infrastructure Forensics",
    description: "Deep-dive analysis of your existing stack. We identify invisible bottlenecks, security risks, and optimization vectors.",
    impact: "Impact: Identify an average of 12 critical vulnerabilities or performance blockers.",
    features: [
      "Core Web Vitals Forensics",
      "Technical SEO Audits",
      "Security Vulnerability Scanning",
      "Codebase Health Assessment",
      "Accessibility Compliance (WCAG)",
    ],
    cta: "Request Forensic Audit",
    ctaLink: "/audit",
  },
  {
    id: "ai",
    icon: Bot,
    title: "Applied Intelligence Systems",
    description: "Move beyond the hype. Deploy specialized AI agents that function as 24/7 autonomous specialized employees.",
    impact: "Impact: 24/7 Customer Coverage and instant data synthesis at scale.",
    features: [
      "Autonomous Customer Agents",
      "RAG (Retrieval-Augmented Generation) Systems",
      "Predictive Analytics Engines",
      "Automated Content Foundries",
      "Voice & Vision Integration",
    ],
    cta: "Deploy Intelligence",
    ctaLink: "/contact",
  },
];

const process = [
  {
    step: "01",
    title: "Systems Reconnaissance",
    icon: Search,
    description: "We conduct a forensic assessment of your current infrastructure, objectives, and market positioning. Zero assumptions.",
  },
  {
    step: "02",
    title: "Strategic Blueprinting",
    icon: Crosshair,
    description: "Our engineers architect a comprehensive battle plan detailing technology stack, data flow, and exact milestones.",
  },
  {
    step: "03",
    title: "Agile Execution",
    icon: Zap,
    description: "Rapid iteration cycles with functional deliverables at every sprint. Visual progress, not just promises.",
  },
  {
    step: "04",
    title: "Military-Grade Validation",
    icon: ClipboardCheck,
    description: "Stress testing across security, load, and responsiveness vectors. We break it before your users can.",
  },
  {
    step: "05",
    title: "Deployment & Handover",
    icon: Rocket,
    description: "Zero-downtime launch sequence. We transfer full source code ownership and train your team for autonomy.",
  },
];

const ServiceVisual = ({ id }: { id: string }) => {
  if (id === "websites") {
    return (
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/services/web-architecture.png"
          alt="Web Architecture"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
    );
  }

  if (id === "automation") {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        {/* Main Gear */}
        <div className="absolute animate-[spin_10s_linear_infinite] opacity-30 text-primary">
          <Cog size={240} strokeWidth={0.5} />
        </div>
        {/* Secondary Gears */}
        <div className="absolute top-10 right-10 animate-[spin_5s_linear_infinite_reverse] opacity-20 text-blue-500">
          <Settings size={120} strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 left-10 animate-[spin_7s_linear_infinite] opacity-20 text-purple-500">
          <Cog size={100} strokeWidth={1} />
        </div>
        {/* Connecting Lines (Simulated) */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/2" />
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent left-1/2" />
      </div>
    );
  }

  if (id === "audits") {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-background to-background" />
        {/* Radar Scanner Effect */}
        <div className="absolute inset-0 border-2 border-red-500/10 rounded-full scale-150 animate-pulse" />
        <div className="absolute inset-0 border-2 border-red-500/10 rounded-full scale-100 animate-pulse delay-75" />

        <div className="z-10 bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
          <ShieldAlert size={80} className="text-red-500" />
        </div>

        {/* Searching Nodes */}
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-100 opacity-50">
          <Search size={24} className="text-red-400" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-bounce delay-300 opacity-50">
          <FileCheck size={24} className="text-red-400" />
        </div>
      </div>
    );
  }

  if (id === "ai") {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Neural Network Connections */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary animate-pulse" />
            <line x1="50" y1="50" x2="20" y2="20" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
            <line x1="50" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
            <line x1="50" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
            <line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
          </svg>
        </div>

        {/* Central Brain */}
        <div className="z-10 float">
          <Brain size={120} className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
        </div>

        {/* Floating Nodes */}
        <div className="absolute top-10 left-1/2 float-delayed opacity-60">
          <Network size={40} className="text-purple-400" />
        </div>
        <div className="absolute bottom-10 right-1/3 float opacity-60">
          <Cpu size={30} className="text-blue-400" />
        </div>
      </div>
    );
  }

  return null;
}

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <Reveal>
            <SectionHeader
              label="Our Expertise"
              title="Engineering Excellence, Delivered"
              description="We combine deep technical expertise with AI-accelerated development to deliver enterprise-grade solutions at unprecedented speed."
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  {/* Business Impact Badge */}
                  <div className="mb-6">
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary px-3 py-1 text-sm font-medium">
                      <TrendingUp className="w-3 h-3 mr-2 inline" />
                      {service.impact}
                    </Badge>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                    <Link to={service.ctaLink}>
                      {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="glass rounded-3xl h-[400px] w-full flex items-center justify-center border border-white/5 relative overflow-hidden group shadow-2xl">
                    <ServiceVisual id={service.id} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Methodology"
            title="The Engineering Protocol"
            description="Our proven five-phase engagement model ensures predictability and transparency."
          />

          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {process.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1} className="relative">
                <div className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black text-foreground/20">{step.step}</span>
                  </div>

                  <div className="mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/20">
                    <ArrowRight className="w-6 h-6" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a high-level consultation to explore how our engineering capabilities can accelerate your objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">View Investment Options</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
