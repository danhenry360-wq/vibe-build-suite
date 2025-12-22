import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, TrendingDown, ShieldCheck, DollarSign, Clock, Terminal, Zap } from "lucide-react";
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
    name: "STARTER",
    price: "$997",
    period: "one-time",
    description: "Establish a professional digital presence with core functionality.",
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
    delivery: "1-2 WEEK DELIVERY",
    cta: "Initialize_Starter",
    popular: false,
  },
  {
    name: "PROFESSIONAL",
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
    delivery: "2-4 WEEK DELIVERY",
    cta: "Initialize_Professional",
    popular: true,
  },
  {
    name: "ENTERPRISE",
    price: "CUSTOM",
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
    delivery: "SCOPED TIMELINE",
    cta: "Request_Proposal",
    popular: false,
  },
];

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
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative">
          <SectionHeader
            label="// INVESTMENT_OPTIONS"
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
                className={`card-cyber p-8 relative ${plan.popular ? "border-primary/50 glow-primary" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-cyber text-primary-foreground text-xs font-mono font-bold px-4 py-1 rounded-sm flex items-center gap-1 uppercase tracking-wider">
                      <Star className="w-3 h-3" /> RECOMMENDED
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-mono font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 font-light">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-mono font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2 text-xs font-mono">/{plan.period}</span>
                </div>

                <p className="text-xs text-primary font-mono mb-6 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {plan.delivery}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-xs text-foreground font-mono">
                      <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full font-mono uppercase tracking-wide text-xs ${plan.popular
                    ? "bg-gradient-cyber text-primary-foreground hover:opacity-90 glow-primary-sm"
                    : "bg-muted text-foreground hover:bg-muted/80 border border-primary/20"
                  }`}
                >
                  <Link to="/contact">
                    {plan.cta} <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="card-cyber p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-dense opacity-20" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-4">
                SATISFACTION_GUARANTEE
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-light">
                We revise until deliverables meet specifications. If we cannot fulfill documented requirements, we refund your deposit. Our <span className="text-primary font-mono">100%</span> success rate reflects this commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TCO Comparison Section */}
      <section className="section-padding bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative z-10">
          <SectionHeader
            label="// TOTAL_COST_OF_OWNERSHIP"
            title="Traditional Agencies vs. SharkVibe"
            description="The math is simple. Stop paying for overhead and start paying for results."
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="card-cyber overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/30 p-6 border-b border-primary/10">
                <div className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">METRIC</div>
                <div className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider text-center">TRADITIONAL</div>
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider text-center">SHARKVIBE</div>
              </div>

              {/* Metric 1 */}
              <div className="grid grid-cols-3 p-6 border-b border-primary/10 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-muted/50 border border-primary/10 flex items-center justify-center">
                    <Star className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm font-bold">Initial_Build</p>
                    <p className="text-[10px] text-muted-foreground font-mono">Setup & Design</p>
                  </div>
                </div>
                <div className="text-center font-mono text-sm text-muted-foreground line-through opacity-70">$10,000+</div>
                <div className="text-center">
                  <span className="text-2xl font-mono font-bold text-primary">$2,997</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="grid grid-cols-3 p-6 border-b border-primary/10 items-center bg-card/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-muted/50 border border-primary/10 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm font-bold">Monthly_Fees</p>
                    <p className="text-[10px] text-muted-foreground font-mono">"Retainer" costs</p>
                  </div>
                </div>
                <div className="text-center font-mono text-sm text-muted-foreground">$2,500/mo</div>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-sm bg-primary/10 border border-primary/30 text-primary text-xs font-mono">
                    $0/mo
                  </span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="grid grid-cols-3 p-6 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-muted/50 border border-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm font-bold">3-Year_Total</p>
                    <p className="text-[10px] text-muted-foreground font-mono">Lifetime Value</p>
                  </div>
                </div>
                <div className="text-center font-mono text-sm text-muted-foreground">$100,000+</div>
                <div className="text-center">
                  <p className="text-3xl font-mono font-black text-foreground">~$3,000</p>
                  <div className="flex items-center justify-center gap-1 text-[10px] text-green-500 font-mono font-bold uppercase">
                    <TrendingDown size={10} /> 97% REDUCTION
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="bg-gradient-cyber p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-20" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm bg-background/20 backdrop-blur flex items-center justify-center border border-background/20">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-primary-foreground/80 text-xs font-mono uppercase tracking-wide">Capital_Saved</p>
                      <h4 className="text-3xl md:text-4xl font-mono font-black text-white">$97,000</h4>
                    </div>
                  </div>
                  <div className="h-12 w-px bg-white/20 hidden md:block" />
                  <p className="text-primary-foreground/90 max-w-[240px] text-sm font-light">
                    Capital you can reinvest into growth, not into agency overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-custom relative">
          <SectionHeader
            label="// FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about working with SharkVibe."
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-cyber px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary font-mono text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm font-light">
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
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">// READY_TO_DEPLOY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to <span className="text-gradient">Discuss</span> Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Initialize a consultation. We'll scope your requirements and provide a detailed proposal.
          </p>
          <Button asChild size="lg" className="bg-gradient-cyber text-primary-foreground hover:opacity-90 font-mono uppercase tracking-wide glow-primary-sm">
            <Link to="/contact">
              <Terminal className="w-4 h-4 mr-2" />
              Initialize_Consultation
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}