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
  Bot, Building2, MousePointer2, FileCode,
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
    title: "AI Assistants & Models",
    icon: "🤖",
    tools: [
      { name: "Claude", company: "Anthropic", description: "Advanced reasoning & coding", icon: siAnthropic },
      { name: "ChatGPT / GPT-4", company: "OpenAI", description: "Versatile AI assistant", icon: Bot, isLucide: true },
      { name: "Gemini", company: "Google", description: "Multimodal capabilities", icon: siGoogle },
      { name: "Llama", company: "Meta", description: "Open-source models", icon: siMeta },
    ],
  },
  {
    title: "AI Development Environments",
    icon: "💻",
    tools: [
      { name: "Cursor", company: "Cursor", description: "AI-first code editor", icon: MousePointer2, isLucide: true },
      { name: "GitHub Copilot", company: "GitHub", description: "AI pair programmer", icon: siGithub },
      { name: "VS Code", company: "Microsoft", description: "Code editor with extensions", icon: FileCode, isLucide: true },
      { name: "Windsurf", company: "Codeium", description: "AI coding assistant", icon: Terminal, isLucide: true },
    ],
  },
  {
    title: "AI Website Builders",
    icon: "🏗️",
    tools: [
      { name: "Lovable", company: "Lovable", description: "AI app builder", icon: Heart, isLucide: true },
      { name: "Bolt.new", company: "StackBlitz", description: "Rapid AI development", icon: siStackblitz },
      { name: "v0", company: "Vercel", description: "AI UI generation", icon: siVercel },
      { name: "Replit", company: "Replit", description: "AI-powered IDE", icon: siReplit },
    ],
  },
  {
    title: "Automation Platforms",
    icon: "⚙️",
    tools: [
      { name: "n8n", company: "n8n", description: "Self-hosted automation", icon: siN8n },
      { name: "Make", company: "Make", description: "Visual automation", icon: siMake },
      { name: "Zapier", company: "Zapier", description: "App integrations", icon: siZapier },
      { name: "Activepieces", company: "Activepieces", description: "Open-source option", icon: Puzzle, isLucide: true },
    ],
  },
  {
    title: "AI Image & Design",
    icon: "🎨",
    tools: [
      { name: "Midjourney", company: "Midjourney", description: "AI image generation", icon: Palette, isLucide: true },
      { name: "DALL·E", company: "OpenAI", description: "AI image creation", icon: ImageIcon, isLucide: true },
      { name: "Figma", company: "Figma", description: "Design & prototyping", icon: siFigma },
      { name: "Stable Diffusion", company: "Stability AI", description: "Open-source image AI", icon: Sparkles, isLucide: true },
    ],
  },
  {
    title: "Deployment & Infrastructure",
    icon: "🚀",
    tools: [
      { name: "Vercel", company: "Vercel", description: "Frontend deployment", icon: siVercel },
      { name: "Netlify", company: "Netlify", description: "Web hosting & CI/CD", icon: siNetlify },
      { name: "Supabase", company: "Supabase", description: "Backend as a service", icon: siSupabase },
      { name: "Railway", company: "Railway", description: "App deployment", icon: siRailway },
    ],
  },
];

const whyMultiple = [
  {
    title: "Right Tool, Right Job",
    description: "Each AI tool excels at specific tasks. We pick the best one for each part of your project.",
  },
  {
    title: "Maximum Speed",
    description: "By combining specialized tools, we achieve development speeds that single-tool approaches can't match.",
  },
  {
    title: "No Lock-In",
    description: "We use standard technologies and open formats. Your project isn't tied to any single platform.",
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
              label="Our Tech Stack"
              title="Powered by the Best AI Tools"
              description="We master the entire AI ecosystem to deliver exceptional results. Here's what's in our toolkit."
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
              {toolCategories.map((category, index) => (
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
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
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
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
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
            title="Why Multiple Tools?"
            description="We don't believe in one-size-fits-all. Here's why our multi-tool approach delivers better results."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {whyMultiple.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="glass rounded-2xl p-8 text-center h-full">
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
