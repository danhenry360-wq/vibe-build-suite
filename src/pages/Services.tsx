import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cog, Search, Bot, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "AI-Powered Website Development",
    description: "Custom websites built with cutting-edge AI tools. No templates, no compromises. Every site is tailored to your brand and optimized for performance.",
    features: [
      "Landing Pages & Marketing Sites",
      "E-commerce Stores",
      "Web Applications & Dashboards",
      "Portfolio & Personal Sites",
      "SaaS Product Pages",
    ],
    cta: "Get Started",
    ctaLink: "/contact",
  },
  {
    id: "automation",
    icon: Cog,
    title: "Workflow Automation",
    description: "Intelligent automations that save you hours every week. We connect your tools and eliminate repetitive tasks so you can focus on what matters.",
    features: [
      "n8n Workflows (self-hosted)",
      "Make.com Automations",
      "Zapier Integrations",
      "Custom API Connections",
      "Email Sequences",
      "Data Pipelines",
    ],
    cta: "Get Started",
    ctaLink: "/contact",
  },
  {
    id: "audits",
    icon: Search,
    title: "Site Audits & Optimization",
    description: "Comprehensive analysis of your existing website with actionable recommendations to improve performance, SEO, and user experience.",
    features: [
      "Performance Analysis (Core Web Vitals)",
      "SEO Health Check",
      "Accessibility Review",
      "Mobile Responsiveness",
      "Security Assessment",
      "Competitor Analysis",
    ],
    cta: "Try Free Audit",
    ctaLink: "/audit",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Integration Services",
    description: "Embed intelligent features into your products using the latest AI models. From chatbots to content generation, we make AI accessible.",
    features: [
      "AI Chatbots & Assistants",
      "Content Generation Systems",
      "Image & Video AI",
      "Voice Assistants",
      "RAG Systems (Q&A from your data)",
      "Custom AI Solutions",
    ],
    cta: "Get Started",
    ctaLink: "/contact",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your vision, goals, and requirements through a detailed consultation.",
  },
  {
    step: "02",
    title: "Proposal",
    description: "You receive a clear quote with timeline, deliverables, and transparent pricing.",
  },
  {
    step: "03",
    title: "Build",
    description: "We develop your project using AI-powered tools for maximum speed and quality.",
  },
  {
    step: "04",
    title: "Review",
    description: "You provide feedback and we make refinements until everything is perfect.",
  },
  {
    step: "05",
    title: "Launch",
    description: "We deploy your project and provide documentation for ongoing success.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="What We Do"
            title="Services That Transform Ideas"
            description="We combine cutting-edge AI tools with expert craftsmanship to deliver exceptional digital experiences. Fast, affordable, and built to last."
          />
        </div>
      </section>

      {/* Services */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
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
                <div className="glass rounded-3xl p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-8xl">
                    {service.id === "websites" && "🌐"}
                    {service.id === "automation" && "⚙️"}
                    {service.id === "audits" && "🔍"}
                    {service.id === "ai" && "🤖"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Our Process"
            title="How We Work"
            description="A simple, transparent process designed to deliver results efficiently."
          />
          
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="glass rounded-2xl p-6 h-full">
                  <span className="text-4xl font-bold text-gradient mb-4 block">{step.step}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
