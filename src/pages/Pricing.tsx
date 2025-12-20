import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Calculator } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingPlans = [
  {
    name: "Starter",
    price: "$997",
    period: "one-time",
    description: "Ideal for establishing a professional digital presence with core functionality.",
    features: [
      "Single-page website or landing page",
      "Mobile-first responsive design",
      "Foundational SEO implementation",
      "Contact form with email integration",
      "Performance optimization (90+ Lighthouse)",
      "1 revision round",
      "Deployment & technical documentation",
      "Full source code ownership",
    ],
    delivery: "1-2 week delivery",
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,997",
    period: "one-time",
    description: "Comprehensive solution for businesses requiring advanced functionality and scalability.",
    features: [
      "Multi-page site (up to 7 pages)",
      "Custom design with micro-animations",
      "Advanced technical SEO & schema markup",
      "CMS integration (Sanity, Strapi, or similar)",
      "Analytics & conversion tracking setup",
      "1 automation workflow included",
      "3 revision rounds",
      "30 days post-launch support",
      "Full source code ownership",
    ],
    delivery: "2-4 week delivery",
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "scoped",
    description: "Full-scale solutions for complex requirements and enterprise-grade implementations.",
    features: [
      "Custom web applications",
      "Comprehensive automation suites",
      "AI/ML system integration",
      "E-commerce platforms with payment processing",
      "Custom API development",
      "Database architecture & optimization",
      "Unlimited revisions within scope",
      "Priority support channel",
      "Dedicated project manager",
    ],
    delivery: "Scoped timeline",
    cta: "Request Proposal",
    popular: false,
  },
];

const tcoComparison = {
  traditional: {
    label: "Traditional Agency",
    initialBuild: "$8,000 - $25,000",
    monthlyRetainer: "$1,500 - $3,000/mo",
    year1Total: "$26,000 - $61,000",
    year3Total: "$62,000 - $133,000",
    notes: [
      "Locked into ongoing contracts",
      "Vendor dependency for changes",
      "Limited code access",
      "Scope creep charges",
    ],
  },
  sharkvibe: {
    label: "SharkVibe",
    initialBuild: "$997 - $2,997",
    monthlyRetainer: "$0",
    year1Total: "$997 - $3,237",
    year3Total: "$997 - $3,237",
    notes: [
      "Complete ownership from day one",
      "Zero vendor lock-in",
      "Full source code access",
      "Optional support when needed",
    ],
  },
};

const faqs = [
  {
    question: "What exactly is included in the one-time fee?",
    answer: "Everything required for a production-ready launch: requirements analysis, design, development, testing, deployment, technical documentation, and complete source code transfer. You own 100% of what we create, including all intellectual property rights.",
  },
  {
    question: "What are the ongoing hosting costs?",
    answer: "We deploy to platforms like Vercel, Netlify, or your preferred infrastructure. Most projects qualify for free-tier hosting ($0/month). Larger applications with significant traffic typically cost $10-50/month depending on usage.",
  },
  {
    question: "How do you handle changes after launch?",
    answer: "Minor updates and bug fixes are covered during your support period. For new features or scope expansion, we offer hourly consulting ($150/hr) or can scope additional project phases at preferred rates for existing clients.",
  },
  {
    question: "What makes your delivery timeline so fast?",
    answer: "We leverage AI-accelerated development methodologies across our entire workflow—from code generation to testing to documentation. This allows us to deliver in weeks what traditionally takes months, without compromising quality or maintainability.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. Standard projects are split 50/50 (half upfront, half on completion). Enterprise engagements can be structured with milestone-based payments. We can discuss arrangements during your consultation.",
  },
  {
    question: "What is your satisfaction guarantee?",
    answer: "We revise until the deliverables meet the agreed specifications. If we fundamentally cannot meet your documented requirements, we will refund your deposit. Our 100% project success rate reflects our commitment to client satisfaction.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Investment Options"
            title="Transparent Pricing, Complete Ownership"
            description="One-time investment. No subscriptions. No hidden costs. You own everything."
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`glass rounded-2xl p-8 relative ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> RECOMMENDED
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                
                <p className="text-sm text-primary font-medium mb-6">{plan.delivery}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  <Link to="/contact">
                    {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Total Cost of Ownership Comparison */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Total Cost of Ownership Analysis</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The True Cost Comparison
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Traditional agencies profit from ongoing retainers. We believe you should own your digital assets outright.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Agency */}
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">{tcoComparison.traditional.label}</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Initial Build</span>
                  <span className="text-foreground font-medium">{tcoComparison.traditional.initialBuild}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Retainer</span>
                  <span className="text-foreground font-medium">{tcoComparison.traditional.monthlyRetainer}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year 1 Total</span>
                  <span className="text-foreground font-bold">{tcoComparison.traditional.year1Total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">3-Year Total</span>
                  <span className="text-foreground font-bold">{tcoComparison.traditional.year3Total}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {tcoComparison.traditional.notes.map((note) => (
                  <li key={note} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* SharkVibe */}
            <div className="glass rounded-2xl p-8 ring-2 ring-primary">
              <h3 className="text-xl font-bold text-primary mb-6">{tcoComparison.sharkvibe.label}</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Initial Build</span>
                  <span className="text-foreground font-medium">{tcoComparison.sharkvibe.initialBuild}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Retainer</span>
                  <span className="text-primary font-bold">{tcoComparison.sharkvibe.monthlyRetainer}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year 1 Total</span>
                  <span className="text-primary font-bold">{tcoComparison.sharkvibe.year1Total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">3-Year Total</span>
                  <span className="text-primary font-bold">{tcoComparison.sharkvibe.year3Total}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {tcoComparison.sharkvibe.notes.map((note) => (
                  <li key={note} className="text-sm text-foreground flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 glass rounded-xl p-6 text-center">
            <p className="text-lg font-medium text-foreground">
              Average 3-year savings with SharkVibe: <span className="text-primary font-bold">$60,000 - $130,000</span>
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🛡️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Satisfaction Guarantee
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We revise until deliverables meet specifications. If we cannot fulfill documented requirements, we refund your deposit. Our 100% success rate reflects this commitment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know about working with SharkVibe."
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            Schedule a consultation. We will scope your requirements and provide a detailed proposal.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Link to="/contact">
              Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
