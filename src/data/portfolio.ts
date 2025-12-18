import { LucideIcon, ShoppingBag, BarChart3, Rocket, Settings, Camera, Bot } from "lucide-react";

export type Category = "Websites" | "Automation" | "AI Integration";

export interface ProjectStats {
    time: string;
    improvement: string;
}

export interface Project {
    id: number;
    icon: LucideIcon;
    title: string;
    tags: string[];
    category: Category;
    description: string;
    challenge: string;
    solution: string;
    stack: string[];
    stats: ProjectStats;
}

export const categories: (Category | "All")[] = ["All", "Websites", "Automation", "AI Integration"];

export const projects: Project[] = [
    {
        id: 1,
        icon: ShoppingBag,
        title: "Artisan Goods Marketplace",
        tags: ["E-commerce", "Automation"],
        category: "Websites",
        description: "Full-featured marketplace with automated inventory management and vendor onboarding.",
        challenge: "The client needed a scalable platform for 50+ vendors with manual processes slowing down onboarding.",
        solution: "We built a custom multi-vendor marketplace with automated Stripe Onboarding and n8n workflows for inventory sync.",
        stack: ["React", "Node.js", "Stripe Connect", "n8n"],
        stats: { time: "3 weeks", improvement: "200% sales" },
    },
    {
        id: 2,
        icon: BarChart3,
        title: "SaaS Analytics Dashboard",
        tags: ["Dashboard", "Analytics"],
        category: "Websites",
        description: "Real-time analytics dashboard with AI-powered insights and custom reporting.",
        challenge: "Users were overwhelmed by raw data CSVs and lacked actionable insights.",
        solution: "Developed an interactive dashboard with Recharts and an integrated AI agent to summarize trends in plain English.",
        stack: ["Next.js", "Tremor", "OpenAI API", "PostgreSQL"],
        stats: { time: "4 weeks", improvement: "50% faster decisions" },
    },
    {
        id: 3,
        icon: Rocket,
        title: "FinTech Startup Launch",
        tags: ["Landing Page", "AI Chatbot"],
        category: "AI Integration",
        description: "High-converting landing page with integrated AI support chatbot.",
        challenge: "The startup needed to capture leads and answer complex FAQ queries 24/7 without a support team.",
        solution: "Designed a high-velocity landing page and integrated a custom-trained ChatGPT assistant for instant support.",
        stack: ["React", "Tailwind CSS", "LangChain", "Supabase"],
        stats: { time: "2 weeks", improvement: "35% conversion rate" },
    },
    {
        id: 4,
        icon: Settings,
        title: "Agency Workflow Suite",
        tags: ["n8n", "Automation"],
        category: "Automation",
        description: "Complete automation suite connecting CRM, invoicing, and project management.",
        challenge: "The agency was losing 15+ hours a week on manual data entry between HubSpot and Xero.",
        solution: "Orchestrated a complex n8n workflow to sync leads, generate invoices, and alert the team on Slack.",
        stack: ["n8n", "HubSpot API", "Xero API", "Slack Webhooks"],
        stats: { time: "2 weeks", improvement: "15 hrs/week saved" },
    },
    {
        id: 5,
        icon: Camera,
        title: "Photographer Portfolio",
        tags: ["Portfolio", "CMS"],
        category: "Websites",
        description: "Stunning portfolio with custom CMS for easy gallery management.",
        challenge: "The photographer needed a visually immersive site that was also easy to update without code.",
        solution: "Built a visually rich frontend connected to Sanity CMS for drag-and-drop image management.",
        stack: ["Astro", "Sanity CMS", "Framer Motion"],
        stats: { time: "1 week", improvement: "10x more inquiries" },
    },
    {
        id: 6,
        icon: Bot,
        title: "Knowledge Base AI",
        tags: ["AI", "RAG"],
        category: "AI Integration",
        description: "RAG-powered Q&A system trained on company documentation.",
        challenge: "Internal employees wasted hours searching through thousands of PDF docs.",
        solution: "Implemented a RAG (Retrieval-Augmented Generation) system to provide instant, cited answers from their knowledge base.",
        stack: ["Python", "Pinecone", "LangChain", "FastAPI"],
        stats: { time: "3 weeks", improvement: "80% faster support" },
    },
];
