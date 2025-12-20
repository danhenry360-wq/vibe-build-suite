import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cog, Search, Bot, CheckCircle2, FileCheck, ClipboardCheck, Settings, Users, Rocket } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Custom Web Solutions",
    description: "Revenue-focused websites and applications engineered for conversion, performance, and scalability. Every element is designed with your business objectives in mind.",
    features: [
      "Conversion-Optimized Landing Pages",
      "Scalable E-commerce Platforms",
      "Enterprise Web Applications & Dashboards",
      "Progressive Web Apps (PWA)",
      "API-First Architecture",
    ],
    cta: "Discuss Your Project",
    ctaLink: "/contact",
  },
  {
    id: "automation",
    icon: Cog,
    title: "Process Automation Engineering",
    description: "Eliminate manual tasks and human error with intelligent automation. Our solutions typically save clients 15-40 hours per week while improving data accuracy to 99%+.",
    features: [
      "End-to-End Workflow Automation",
      "CRM & ERP Integration",
      "Data Pipeline Engineering",
      "Custom API Development",
      "Email & Notification Systems",
      "Reporting Automation",
    ],
    cta: "Discuss Your Project",
    ctaLink: "/contact",
  },
  {
    id: "audits",
    icon: Search,
    title: "Technical Audit & Optimization",
    description: "Comprehensive analysis of your existing systems with actionable recommendations. We identify bottlenecks, security vulnerabilities, and optimization opportunities.",
    features: [
      "Performance Analysis (Core Web Vitals)",
      "Technical SEO Assessment",
      "Security Vulnerability Scan",
      "Architecture Review",
      "Accessibility Compliance Check",
      "Competitive Technical Analysis",
    ],
    cta: "Request Free Audit",
    ctaLink: "/audit",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Implementation Services",
    description: "Deploy production-ready AI systems that enhance customer experience and operational efficiency. We specialize in practical AI applications with measurable ROI.",
    features: [
      "Intelligent Customer Assistants",
      "Automated Content Generation",
      "Document Processing & Analysis",
      "Custom RAG Systems (Q&A from your data)",
      "Predictive Analytics Integration",
      "AI-Powered Decision Support",
    ],
    cta: "Discuss Your Project",
    ctaLink: "/contact",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    icon: Search,
    description: "We conduct a thorough assessment of your current systems, business objectives, and technical requirements. This phase includes stakeholder interviews and documentation review.",
  },
  {
    step: "02",
    title: "Solution Architecture",
    icon: FileCheck,
    description: "Our engineers design a comprehensive solution with detailed specifications, technology stack recommendations, and a clear implementation roadmap with milestones.",
  },
  {
    step: "03",
    title: "Agile Development",
    icon: Settings,
    description: "We build in iterative sprints with regular progress updates. Each deliverable is tested rigorously before integration. You have visibility at every stage.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    icon: ClipboardCheck,
    description: "Comprehensive testing including functionality, performance, security, and user acceptance. We refine until every requirement is met to specification.",
  },
  {
    step: "05",
    title: "Deployment & Handover",
    icon: Rocket,
    description: "Production deployment with zero-downtime strategies. Complete documentation, source code transfer, and training sessions for your team.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Expertise"
            title="Engineering Excellence, Delivered"
            description="We combine deep technical expertise with AI-accelerated development to deliver enterprise-grade solutions at unprecedented speed."
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
            label="Our Methodology"
            title="A Rigorous Engineering Process"
            description="Every project follows our proven five-phase methodology, ensuring predictable outcomes and transparent communication."
          />
          
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-gradient">{step.step}</span>
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
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
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can solve your specific challenges with a tailored solution.
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
        </div>
      </section>
    </Layout>
  );
}
