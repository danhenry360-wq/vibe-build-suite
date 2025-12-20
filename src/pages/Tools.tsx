import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import {
  siAnthropic, siGoogle, siMeta,
  siGithub, siStackblitz, siVercel, siReplit,
  siN8n, siMake, siZapier, siFigma, siNetlify, siSupabase, siRailway,
} from "simple-icons/icons";
import {
  Laptop, Heart, Puzzle, Palette, Image as ImageIcon, Sparkles, Terminal,
  Bot, Building2, MousePointer2, FileCode, Shield, Zap, Server,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Helper to render Simple Icons
const SimpleIcon = ({ icon, color }: { icon: any, color?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className="w-6 h-6 fill-current"
    style={{ color: color || 'currentColor' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icon.path} />
  </svg>
);

const toolCategories = [
  {
    title: "AI Models & Reasoning",
    icon: "🧠",
    tools: [
      {
        name: "Claude 3.5",
        company: "Anthropic",
        description: "Our primary engine for advanced reasoning and long-context data processing.",
        insight: "Best for: System design, code refactoring, and multi-file operations. 200K context window excels at maintaining coherence across large codebases.",
        icon: siAnthropic
      },
      {
        name: "GPT-4",
        company: "OpenAI",
        description: "Our versatile utility for high-speed prototyping and diverse task execution.",
        insight: "Best for: Rapid prototyping, API integrations, and data analysis. Exceptional speed for iterative development.",
        icon: Bot,
        isLucide: true
      },
      {
        name: "Gemini",
        company: "Google",
        description: "Selected for deep Google ecosystem integration and massive context capabilities.",
        insight: "Best for: Projects requiring visual understanding and Google ecosystem integration.",
        icon: siGoogle
      },
      {
        name: "Llama",
        company: "Meta",
        description: "The open-source core for privacy-first, custom-deployed intelligence.",
        insight: "Best for: Self-hosted solutions requiring data privacy and custom fine-tuning.",
        icon: siMeta
      },
    ],
  },
  {
    title: "Development Environments",
    icon: "💻",
    tools: [
      {
        name: "Cursor",
        company: "Cursor",
        description: "Our primary AI-native interface for deep codebase awareness and rapid development.",
        insight: "Best for: Complex projects requiring full codebase context. Our primary development environment.",
        icon: MousePointer2,
        isLucide: true
      },
      {
        name: "GitHub Copilot",
        company: "GitHub",
        description: "Integrated for seamless boilerplate reduction within the version control lifecycle.",
        insight: "Best for: Teams already invested in GitHub ecosystem. Excellent for boilerplate generation.",
        icon: siGithub
      },
      {
        name: "VS Code",
        company: "Microsoft",
        description: "The industry-standard foundation for our highly customized, extension-rich workflows.",
        insight: "Best for: Flexibility and customization. Foundation for many AI-enhanced workflows.",
        icon: FileCode,
        isLucide: true
      },
      {
        name: "Windsurf",
        company: "Codeium",
        description: "Chosen for high-fidelity code autocomplete and enterprise-ready collaborative features.",
        insight: "Best for: Cost-conscious projects requiring autocomplete and chat capabilities.",
        icon: Terminal,
        isLucide: true
      },
    ],
  },
  {
    title: "Rapid Application Builders",
    icon: "🏗️",
    tools: [
      {
        name: "Lovable",
        company: "Lovable",
        description: "Our engine for transforming complex logic into production-ready full-stack architectures.",
        insight: "Best for: MVPs and prototypes requiring quick iteration. Excellent React/Supabase integration.",
        icon: Heart,
        isLucide: true
      },
      {
        name: "Bolt.new",
        company: "StackBlitz",
        description: "Utilized for instant, browser-based sandbox environments and direct deployments.",
        insight: "Best for: Quick deployments without local environment setup. WebContainer technology.",
        icon: siStackblitz
      },
      {
        name: "v0",
        company: "Vercel",
        description: "Selected for high-speed UI generation utilizing industry-standard component libraries.",
        insight: "Best for: Rapid UI prototyping with shadcn/ui components. Seamless Vercel deployment.",
        icon: siVercel
      },
      {
        name: "Replit",
        company: "Replit",
        description: "Our platform of choice for collaborative experimentation and cloud-based deployments.",
        insight: "Best for: Team collaboration and educational projects. Multi-language support.",
        icon: siReplit
      },
    ],
  },
  {
    title: "Automation Platforms",
    icon: "⚙️",
    tools: [
      {
        name: "n8n",
        company: "n8n",
        description: "Selected for workflow sovereignty and complex API orchestration.",
        insight: "Best for: Data-sensitive operations requiring self-hosting. No execution limits. Our preferred platform for enterprise clients.",
        icon: siN8n
      },
      {
        name: "Make",
        company: "Make",
        description: "Ideal for complex multi-step visual logic and advanced error handling orchestration.",
        insight: "Best for: Complex multi-step workflows with branching logic. Superior visual debugging.",
        icon: siMake
      },
      {
        name: "Zapier",
        company: "Zapier",
        description: "Our bridge for connecting 6,000+ disparate services with minimal latency.",
        insight: "Best for: Simple integrations requiring minimal setup. 6,000+ app connections.",
        icon: siZapier
      },
      {
        name: "Activepieces",
        company: "Activepieces",
        description: "The open-source alternative for scalable, self-hosted automation workflows.",
        insight: "Best for: Budget-conscious implementations requiring self-hosting flexibility.",
        icon: Puzzle,
        isLucide: true
      },
    ],
  },
  {
    title: "Visual & Design",
    icon: "🎨",
    tools: [
      {
        name: "Midjourney",
        company: "Midjourney",
        description: "Our premium asset for high-concept, photorealistic AI-generated creative imagery.",
        insight: "Best for: Marketing visuals and brand imagery. Highest quality aesthetic output.",
        icon: Palette,
        isLucide: true
      },
      {
        name: "DALL-E 3",
        company: "OpenAI",
        description: "Chosen for precise prompt adherence and technical diagram generation.",
        insight: "Best for: Technical illustrations and precise visual specifications.",
        icon: ImageIcon,
        isLucide: true
      },
      {
        name: "Figma",
        company: "Figma",
        description: "The central hub for our design-to-code synchronization and component systems.",
        insight: "Best for: Design handoff and component systems. Industry standard for web design.",
        icon: siFigma
      },
      {
        name: "Stable Diffusion",
        company: "Stability AI",
        description: "Utilized for custom fine-tuned image pipelines and private creative workflows.",
        insight: "Best for: Self-hosted image generation with custom models and fine-tuning.",
        icon: Sparkles,
        isLucide: true
      },
    ],
  },
  {
    title: "Infrastructure & Deployment",
    icon: "🚀",
    tools: [
      {
        name: "Vercel",
        company: "Vercel",
        description: "Our standard for global edge performance and seamless frontend delivery.",
        insight: "Best for: React/Next.js deployments requiring global edge performance. Excellent DX.",
        icon: siVercel
      },
      {
        name: "Netlify",
        company: "Netlify",
        description: "Selected for robust Jamstack architectures and integrated continuous delivery.",
        insight: "Best for: Static sites and serverless functions. Generous free tier.",
        icon: siNetlify
      },
      {
        name: "Supabase",
        company: "Supabase",
        description: "Chosen for enterprise-grade data security and real-time scalability.",
        insight: "Best for: Full-stack apps requiring auth, database, and real-time. Our default backend.",
        icon: siSupabase
      },
      {
        name: "Railway",
        company: "Railway",
        description: "Our solution for simplified backend infrastructure and Docker-orchestrated services.",
        insight: "Best for: Backend services, databases, and custom Docker deployments.",
        icon: siRailway
      },
    ],
  },
];

const whyMultiple = [
  {
    icon: Zap,
    title: "Optimal Tool Selection",
    description: "Each AI tool excels at specific tasks. We select the optimal tool for each phase of your project, maximizing quality and efficiency.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "No dependency on a single platform. Your project uses standard technologies and open formats, ensuring long-term maintainability.",
  },
  {
    icon: Server,
    title: "Future-Proof Architecture",
    description: "We architect solutions that can adapt as AI capabilities evolve, protecting your investment against technological obsolescence.",
  },
];

export default function Tools() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <Reveal>
            <SectionHeader
              label="Our Technology Stack"
              title="Enterprise-Grade Tools, Expert Implementation"
              description="We maintain deep expertise across the AI ecosystem to deliver optimal solutions for every use case."
            />
          </Reveal>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full">
            <Reveal>
              <TabsList className="w-full flex h-auto p-1 bg-muted/50 rounded-xl overflow-x-auto no-scrollbar justify-start md:justify-center mb-8">
                <TabsTrigger value="all" className="rounded-lg px-4 py-2">
                  All Tools
                </TabsTrigger>
                {toolCategories.map((category) => (
                  <TabsTrigger
                    key={category.title}
                    value={category.title}
                    className="rounded-lg px-4 py-2 whitespace-nowrap"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Reveal>

            <TabsContent value="all" className="space-y-12 animate-in fade-in-50 duration-500">
              {toolCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="glass rounded-xl p-5 card-hover group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                          {tool.isLucide ? (
                            // @ts-ignore
                            <tool.icon className="w-6 h-6 text-foreground" />
                          ) : (
                            <SimpleIcon icon={tool.icon} color="" />
                          )}
                        </div>
                        <h3 className="font-bold text-foreground mb-1">{tool.name}</h3>
                        <p className="text-xs text-primary mb-2">{tool.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                        <div className="pt-3 border-t border-border/50">
                          <p className="text-xs text-muted-foreground italic">{tool.insight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {toolCategories.map((category) => (
              <TabsContent
                key={category.title}
                value={category.title}
                className="animate-in fade-in-50 duration-500"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.tools.map((tool) => (
                    <Reveal key={tool.name}>
                      <div className="glass rounded-xl p-5 card-hover group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                          {tool.isLucide ? (
                            // @ts-ignore
                            <tool.icon className="w-6 h-6 text-foreground" />
                          ) : (
                            <SimpleIcon icon={tool.icon} color="" />
                          )}
                        </div>
                        <h3 className="font-bold text-foreground mb-1">{tool.name}</h3>
                        <p className="text-xs text-primary mb-2">{tool.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                        <div className="pt-3 border-t border-border/50">
                          <p className="text-xs text-muted-foreground italic">{tool.insight}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Multiple Tools */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Our Approach"
            title="Strategic Tool Selection"
            description="We engineer solutions using the optimal combination of tools for your specific requirements."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {whyMultiple.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
