import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, TrendingDown, ShieldCheck, DollarSign, Clock, Calculator } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

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
                className={`glass rounded-2xl p-8 relative ${plan.popular ? "ring-2 ring-primary" : ""
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
                  className={`w-full ${plan.popular
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

      {/* Satisfaction Guarantee */}
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

      {/* TCO Comparison Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left" />
        <div className="container-custom relative z-10">
          <SectionHeader
            label="Total Cost of Ownership"
            title="Traditional Agencies vs. SharkVibe"
            description="The math is simple. Stop paying for overhead and start paying for results."
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="glass rounded-3xl overflow-hidden shadow-2xl border-primary/20">
              <div className="grid grid-cols-3 bg-muted/50 p-6 border-b border-border">
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Metric</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider text-center">Traditional Agency</div>
                <div className="text-sm font-bold text-primary uppercase tracking-wider text-center">SharkVibe</div>
              </div>

              {/* Metric 1 */}
              <div className="grid grid-cols-3 p-8 border-b border-border/50 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Star className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">Initial Build</p>
                    <p className="text-xs text-muted-foreground">Setup & Design</p>
                  </div>
                </div>
                <div className="text-center font-medium text-muted-foreground line-through opacity-70">$10,000+</div>
                <div className="text-center">
                  <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">$2,997</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="grid grid-cols-3 p-8 border-b border-border/50 items-center bg-card/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">Monthly Fees</p>
                    <p className="text-xs text-muted-foreground">"Retainer" costs</p>
                  </div>
                </div>
                <div className="text-center font-medium text-muted-foreground">$2,500/mo</div>
                <div className="text-center">
                  <Badge variant="outline" className="text-primary border-primary bg-primary/5 px-4">
                    $0 /mo
                  </Badge>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="grid grid-cols-3 p-8 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">3-Year Total</p>
                    <p className="text-xs text-muted-foreground">Lifetime Value</p>
                  </div>
                </div>
                <div className="text-center font-medium text-muted-foreground">$100,000+</div>
                <div className="text-center">
                  <div className="scale-110">
                    <p className="text-3xl font-black text-foreground">~$3,000</p>
                    <div className="flex items-center justify-center gap-1 text-[10px] text-green-500 font-bold uppercase">
                      <TrendingDown size={10} /> 97% Lower
                    </div>
                  </div>
                </div>
              </div>

              {/* Bold High-Contrast Callout */}
              <div className="bg-gradient-full p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-primary-foreground/80 text-sm font-medium">Potential Capital Saved</p>
                      <h4 className="text-3xl md:text-4xl font-black text-white">$97,000.00</h4>
                    </div>
                  </div>
                  <div className="h-12 w-px bg-white/20 hidden md:block" />
                  <p className="text-primary-foreground/90 max-w-[240px] text-sm font-medium">
                    That's capital you can reinvest back into your growth, not into an agency's overhead.
                  </p>
                </div>
              </div>
            </div>
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
