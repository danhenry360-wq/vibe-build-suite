import { LucideIcon, Bot, Code2, ShoppingBag, Zap, Wrench, Rocket } from "lucide-react";

export type BlogCategory = "AI Tools" | "Tutorials" | "Case Study" | "Comparisons" | "Resources" | "Industry";

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: BlogCategory;
    date: string;
    readTime: string;
    image: LucideIcon;
    content: string; // HTML string or Markdown
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Claude vs ChatGPT: Which is Better for Coding?",
        excerpt: "A deep dive into the strengths and weaknesses of the two leading AI assistants for development work.",
        category: "AI Tools",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        image: Bot,
        content: `
      <h2>The Battle of the AI Giants</h2>
      <p>When it comes to coding, both Claude 3.5 Sonnet and ChatGPT-4o are incredible tools, but they shine in different areas.</p>
      <h3>Claude 3.5 Sonnet</h3>
      <p>Claude is widely regarded as the superior "architect." Its large context window (200k tokens) and ability to maintain complex logic over long conversations make it ideal for refactoring large codebases or planning system architecture.</p>
      <h3>ChatGPT-4o</h3>
      <p>ChatGPT is the "sprinter." It's incredibly fast, great at quick scripts, and its Python analysis features are unmatched for data tasks. However, it can sometimes lose the thread in very long, complex files.</p>
      <h3>The Verdict</h3>
      <p>Use Claude for complex, multi-file projects. Use ChatGPT for rapid prototyping and debugging snippets.</p>
    `,
    },
    {
        id: 2,
        title: "Getting Started with Cursor: A Complete Guide",
        excerpt: "Everything you need to know to supercharge your development workflow with the AI-first code editor.",
        category: "Tutorials",
        date: "Dec 12, 2024",
        readTime: "12 min read",
        image: Code2,
        content: `
      <h2>Why Cursor?</h2>
      <p>Cursor isn't just a plugin; it's a fork of VS Code built from the ground up for AI pairs programming.</p>
      <h3>Key Features</h3>
      <ul>
        <li><strong>Cmd+K</strong>: Edit code in-place with natural language.</li>
        <li><strong>Codebase Chat</strong>: Ask questions about your entire project, avoiding hallucinations about missing files.</li>
        <li><strong>Docs Integration</strong>: Index third-party documentation for library-specific answers.</li>
      </ul>
      <p>If you're still copy-pasting code between ChatGPT and your editor, you're living in the past. Switch to Cursor today.</p>
    `,
    },
    {
        id: 3,
        title: "How We Built a Full E-commerce Site in 2 Weeks",
        excerpt: "A behind-the-scenes look at our process for delivering a complex project in record time.",
        category: "Case Study",
        date: "Dec 10, 2024",
        readTime: "10 min read",
        image: ShoppingBag,
        content: `
      <h2>The Challenge</h2>
      <p>A client needed a fully functional artisan marketplace before the holiday rush—giving us exactly 14 days.</p>
      <h2>The Stack</h2>
      <p>We chose speed and reliability:</p>
      <ul>
        <li><strong>Frontend</strong>: React + Vite + Tailwind CSS for rapid UI development.</li>
        <li><strong>Backend</strong>: Supabase for instant database and auth.</li>
        <li><strong>Payments</strong>: Stripe Connect for handling multi-vendor payouts.</li>
      </ul>
      <h2>The Result</h2>
      <p>By leveraging AI for boilerplate generation and database schema design, we cut development time by 60%. The site launched on time and processed $50k in its first weekend.</p>
    `,
    },
    {
        id: 4,
        title: "n8n vs Make vs Zapier: Automation Showdown",
        excerpt: "Comparing the top automation platforms to help you choose the right one for your needs.",
        category: "Comparisons",
        date: "Dec 8, 2024",
        readTime: "15 min read",
        image: Zap,
        content: `
      <h2>Automation is Eating the World</h2>
      <p>Choosing the right automation platform is crucial for scaling your operations.</p>
      <h3>Zapier</h3>
      <p><strong>Pros</strong>: Easiest to use, massive library.</p>
      <p><strong>Cons</strong>: Expensive at scale.</p>
      <h3>Make (Integromat)</h3>
      <p><strong>Pros</strong>: Visual, complex logic handling, cheaper than Zapier.</p>
      <p><strong>Cons</strong>: Steeper learning curve.</p>
      <h3>n8n</h3>
      <p><strong>Pros</strong>: Open-source, self-hostable, infinite flexibility, fair pricing.</p>
      <p><strong>Cons</strong>: Requires some technical know-how to host.</p>
      <p><strong>Winner</strong>: For developers and agencies, n8n is the clear king of value and power.</p>
    `,
    },
    {
        id: 5,
        title: "5 AI Tools Every Developer Should Know in 2024",
        excerpt: "The essential AI tools that are transforming how we build software.",
        category: "Resources",
        date: "Dec 5, 2024",
        readTime: "6 min read",
        image: Wrench,
        content: `
      <h2>Tool #1: v0.dev</h2>
      <p>Generative UI by Vercel. Describe a component, get React + Tailwind code instantly.</p>
      <h2>Tool #2: Perplexity</h2>
      <p>The Google killer. Get direct answers with citations instead of blue links.</p>
      <h2>Tool #3: Midjourney</h2>
      <p>Still the king of AI image generation for assets and mockups.</p>
      <h2>Tool #4: Lovable</h2>
      <p>Full-stack app generation. Describe your idea, get a working app.</p>
      <h2>Tool #5: Cursor</h2>
      <p>The editor that brings it all together.</p>
    `,
    },
    {
        id: 6,
        title: "The Rise of Vibe Coding: What It Means for You",
        excerpt: "Understanding the new paradigm of AI-assisted development and how to leverage it.",
        category: "Industry",
        date: "Dec 1, 2024",
        readTime: "7 min read",
        image: Rocket,
        content: `
      <h2>It's All About the Vibe</h2>
      <p>"Vibe Coding" isn't about writing syntax; it's about curating logic and flow.</p>
      <p>With AI handling the implementation details, developers are moving up the stack to become <strong>Product Engineers</strong>.</p>
      <p>The skill of the future isn't memorizing the React API; it's knowing how to prompt, how to architect, and how to verify AI output.</p>
      <p>Embrace the vibe. Build faster.</p>
    `,
    },
];

export const categoryColors: Record<BlogCategory, string> = {
    "AI Tools": "bg-primary/20 text-primary",
    "Tutorials": "bg-secondary/20 text-secondary",
    "Case Study": "bg-tertiary/20 text-tertiary",
    "Comparisons": "bg-yellow-500/20 text-yellow-500",
    "Resources": "bg-green-500/20 text-green-500",
    "Industry": "bg-orange-500/20 text-orange-500",
};
