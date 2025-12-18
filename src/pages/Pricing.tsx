import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
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
    description: "Perfect for getting started with a professional online presence.",
    features: [
      "Single page website/landing page",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "1 revision round",
      "Deployment & documentation",
      "Source code ownership",
    ],
    delivery: "~1-2 week delivery",
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,997",
    period: "one-time",
    description: "Comprehensive solution for growing businesses.",
    features: [
      "Multi-page site (up to 7 pages)",
      "Custom design & animations",
      "Advanced SEO & analytics",
      "CMS integration",
      "1 automation workflow",
      "3 revision rounds",
      "30 days support",
      "Source code ownership",
    ],
    delivery: "~2-4 week delivery",
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "Full-scale solutions for complex requirements.",
    features: [
      "Web applications",
      "Full automation suites",
      "AI/ML integrations",
      "E-commerce solutions",
      "API development",
      "Unlimited revisions",
      "Priority support",
      "Dedicated project manager",
    ],
    delivery: "Tailored timeline",
    cta: "Contact Us",
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in the one-time fee?",
    answer: "Everything you need to launch: design, development, testing, deployment, documentation, and source code. You own everything we create, including full rights to the code and assets.",
  },
  {
    question: "Do I need to pay monthly hosting?",
    answer: "We deploy to platforms like Vercel or Netlify which offer generous free tiers. Most small to medium sites cost $0/month to host. For larger sites, hosting typically costs $10-20/month.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "Minor updates and bug fixes are included in your support period. For new features or major changes, we offer hourly rates ($150/hr) or can scope a new project at discounted rates for existing clients.",
  },
  {
    question: "How fast can you deliver?",
    answer: "Starter projects typically launch in 1-2 weeks. Professional projects take 2-4 weeks. Enterprise timelines vary based on scope. We use AI-powered development tools to move 10x faster than traditional agencies.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We typically split larger projects 50/50 (half upfront, half on completion). For Enterprise projects, we can arrange custom payment schedules.",
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We revise until you love it. If we can't meet your expectations after reasonable revisions, we'll refund your deposit. Your satisfaction is our priority.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Transparent Pricing"
            title="One-Time Fee, Lifetime Value"
            description="No subscriptions, no hidden costs. Pay once and own everything."
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
                      <Star className="w-3 h-3" /> MOST POPULAR
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

      {/* Guarantee */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">💯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Satisfaction Guarantee
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not happy? We revise until you love it or refund your deposit. We're confident in our work and committed to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Why One-Time Fees */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why One-Time Fees?
              </h2>
              <p className="text-muted-foreground mb-6">
                Traditional agencies lock you into $500-2,000/month retainers for "maintenance" that often amounts to very little actual work. We believe you should own your digital presence outright.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Full ownership of code and assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">No vendor lock-in or hidden costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Free to host anywhere you choose</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Support when you need it, not forced</span>
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-4">Traditional Agency</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Initial build: $5,000+ <br />
                Monthly retainer: $500-2,000 <br />
                Year 1 total: $11,000-29,000
              </p>
              <div className="h-px bg-border my-6" />
              <h3 className="text-lg font-bold text-primary mb-4">SharkVibe</h3>
              <p className="text-muted-foreground text-sm">
                One-time fee: $997-2,997 <br />
                Monthly hosting: $0-20 <br />
                Year 1 total: $997-3,237
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Questions?"
            title="Frequently Asked Questions"
            description="Everything you need to know about our services and pricing."
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
            Ready to Start?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your budget.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Link to="/contact">
              Get Your Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
