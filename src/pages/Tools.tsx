import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

const toolCategories = [
  {
    title: "AI Assistants & Models",
    icon: "🤖",
    tools: [
      { name: "Claude", company: "Anthropic", description: "Advanced reasoning & coding" },
      { name: "ChatGPT / GPT-4", company: "OpenAI", description: "Versatile AI assistant" },
      { name: "Gemini", company: "Google", description: "Multimodal capabilities" },
      { name: "Llama", company: "Meta", description: "Open-source models" },
    ],
  },
  {
    title: "AI Development Environments",
    icon: "💻",
    tools: [
      { name: "Cursor", company: "Cursor", description: "AI-first code editor" },
      { name: "GitHub Copilot", company: "GitHub", description: "AI pair programmer" },
      { name: "VS Code", company: "Microsoft", description: "Code editor with extensions" },
      { name: "Windsurf", company: "Codeium", description: "AI coding assistant" },
    ],
  },
  {
    title: "AI Website Builders",
    icon: "🏗️",
    tools: [
      { name: "Lovable", company: "Lovable", description: "AI app builder" },
      { name: "Bolt.new", company: "StackBlitz", description: "Rapid AI development" },
      { name: "v0", company: "Vercel", description: "AI UI generation" },
      { name: "Replit", company: "Replit", description: "AI-powered IDE" },
    ],
  },
  {
    title: "Automation Platforms",
    icon: "⚙️",
    tools: [
      { name: "n8n", company: "n8n", description: "Self-hosted automation" },
      { name: "Make", company: "Make", description: "Visual automation" },
      { name: "Zapier", company: "Zapier", description: "App integrations" },
      { name: "Activepieces", company: "Activepieces", description: "Open-source option" },
    ],
  },
  {
    title: "AI Image & Design",
    icon: "🎨",
    tools: [
      { name: "Midjourney", company: "Midjourney", description: "AI image generation" },
      { name: "DALL·E", company: "OpenAI", description: "AI image creation" },
      { name: "Figma", company: "Figma", description: "Design & prototyping" },
      { name: "Stable Diffusion", company: "Stability AI", description: "Open-source image AI" },
    ],
  },
  {
    title: "Deployment & Infrastructure",
    icon: "🚀",
    tools: [
      { name: "Vercel", company: "Vercel", description: "Frontend deployment" },
      { name: "Netlify", company: "Netlify", description: "Web hosting & CI/CD" },
      { name: "Supabase", company: "Supabase", description: "Backend as a service" },
      { name: "Railway", company: "Railway", description: "App deployment" },
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
          <SectionHeader
            label="Our Tech Stack"
            title="Powered by the Best AI Tools"
            description="We master the entire AI ecosystem to deliver exceptional results. Here's what's in our toolkit."
          />
        </div>
      </section>

      {/* Tool Categories */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom space-y-12">
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
                    className="glass rounded-xl p-5 card-hover"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 text-xl font-bold text-primary-foreground">
                      {tool.name.charAt(0)}
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{tool.name}</h3>
                    <p className="text-xs text-primary mb-2">{tool.company}</p>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
            {whyMultiple.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-8 text-center">
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
