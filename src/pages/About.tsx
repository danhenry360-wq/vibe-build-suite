import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Zap, Shield, Users, Trophy, Bot, Rocket } from "lucide-react";

const values = [
    {
        title: "Speed",
        description: "We move fast. In the AI era, speed is the ultimate competitive advantage.",
        icon: Zap,
    },
    {
        title: "Quality",
        description: "We don't just ship fast; we ship excellence. High-performance code is our standard.",
        icon: Trophy,
    },
    {
        title: "Transparency",
        description: "No hidden fees, no jargon. Just clear communication and results.",
        icon: Shield,
    },
    {
        title: "Innovation",
        description: "We're constantly exploring the bleeding edge of AI to bring you the best tools.",
        icon: Rocket,
    },
];

const team = [
    {
        name: "Dan Henry",
        role: "Founder & Lead Developer",
        bio: "Full-stack developer with a passion for AI. Obsessed with building tools that amplify human creativity.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dan&backgroundColor=b6e3f4",
        isAi: false,
    },
    {
        name: "Claude 3.5 Sonnet",
        role: "Senior AI Architect",
        bio: "Expert in complex logical reasoning and architectural planning. Never sleeps, always coding.",
        image: "https://api.dicebear.com/7.x/bottts/svg?seed=Claude&backgroundColor=ffdfbf",
        isAi: true,
    },
    {
        name: "ChatGPT-4o",
        role: "Creative Director (AI)",
        bio: "Specializes in creative copy, ideation, and rapid prototyping. A true jack-of-all-trades.",
        image: "https://api.dicebear.com/7.x/bottts/svg?seed=GPT&backgroundColor=c0aede",
        isAi: true,
    },
];

export default function About() {
    return (
        <Layout>
            {/* Hero / Mission */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Bot size={400} />
                </div>
                <div className="container-custom relative z-10">
                    <Reveal>
                        <div className="max-w-3xl">
                            <div className="badge-glow mb-6">
                                <span className="pulse-dot" />
                                Our Mission
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                Building the Future of <span className="text-primary">Web Development</span> with AI.
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                At SharkVibe, we believe that AI isn't just a tool—it's a catalyst.
                                We combine human expertise with the raw power of artificial intelligence to build
                                web experiences that are faster, smarter, and more impactful than ever before.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Founder Story */}
            <section className="section-padding bg-card/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 aspect-video md:aspect-square flex items-center justify-center">
                                <span className="text-9xl">🦈</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h2 className="text-3xl font-bold mb-6">The Story</h2>
                            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                                <p className="mb-4">
                                    It started with a simple realization: Traditional web development was becoming too slow.
                                    Clients were waiting months for MVPs, and costs were skyrocketing.
                                </p>
                                <p className="mb-4">
                                    I saw an opportunity to change the game using AI. By mastering tools like Cursor,
                                    Claude, and v0, I realized I could deliver agency-level quality at freelance speeds.
                                </p>
                                <p>
                                    SharkVibe was born from this vision. "Shark" representing our aggressive pursuit of speed
                                    and efficiency, and "Vibe" representing the flow state of modern, AI-assisted coding.
                                    We don't just write code; we curate the best AI solutions to bring your vision to life.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeader
                        label="Our DNA"
                        title="Core Values"
                        description="The principles that guide every line of code we write."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {values.map((value, index) => (
                            <Reveal key={value.title} delay={index * 0.1}>
                                <div className="glass p-6 rounded-2xl h-full card-hover">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                                        <value.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-card/30">
                <div className="container-custom">
                    <SectionHeader
                        label="The Squad"
                        title="Meet the Team"
                        description="A hybrid team of human creativity and artificial intelligence."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {team.map((member, index) => (
                            <Reveal key={member.name} delay={index * 0.1}>
                                <div className="group relative overflow-hidden rounded-2xl glass p-8 text-center transition-all hover:-translate-y-2">
                                    <div className={`w-32 h-32 mx-auto rounded-full mb-6 border-4 flex items-center justify-center overflow-hidden bg-background ${member.isAi ? 'border-primary/50' : 'border-secondary'}`}>
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    {member.isAi && (
                                        <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            AI Agent
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-primary font-medium mb-4">{member.role}</p>
                                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
