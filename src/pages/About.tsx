import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Zap, Shield, Trophy, Rocket, Terminal, Cpu, Network, Lock, Activity, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const values = [
    {
        title: "Velocity",
        description: "Speed is the only currency that matters. We synthesize weeks of work into hours.",
        icon: Zap,
    },
    {
        title: "Precision",
        description: "Zero bloat. Zero legacy debt. We deploy surgical, high-performance code.",
        icon: Trophy,
    },
    {
        title: "Sovereignty",
        description: "You own the IP. You own the code. No golden handcuffs.",
        icon: Lock,
    },
    {
        title: "Evolution",
        description: "We don't follow trends. We weaponize emerging tech for your competitive edge.",
        icon: Rocket,
    },
];

const team = [
    {
        name: "Dan Henry",
        role: "Lead Architect / Operator",
        status: "Online",
        bio: "Full-stack engineer & AI orchestrator. Bridging the gap between human intent and machine execution.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dan&backgroundColor=b6e3f4",
        isAi: false,
        stats: {
            "Deployments": "500+",
            "Latency": "34ms"
        }
    },
    {
        name: "Claude 3.5 Sonnet",
        role: "Cognitive Engine",
        status: "Active",
        bio: "Specialized in complex architectural reasoning and secure code synthesis. 200k context window active.",
        image: "https://api.dicebear.com/7.x/bottts/svg?seed=Claude&backgroundColor=ffdfbf",
        isAi: true,
        stats: {
            "Tokens/Sec": "120",
            "Accuracy": "99.8%"
        }
    },
    {
        name: "Omni-GPT-4o",
        role: "Creative Matrix",
        status: "Active",
        bio: "Multimodal generative agent. Handling rapid prototyping, aesthetics, and copywriting vectors.",
        image: "https://api.dicebear.com/7.x/bottts/svg?seed=GPT&backgroundColor=c0aede",
        isAi: true,
        stats: {
            "Creativity": "MAX",
            "Uptime": "99.9%"
        }
    },
];

const stats = [
    { label: "Lines of Code Synthesized", value: "1.2M+" },
    { label: "AI Models Integrated", value: "15+" },
    { label: "Client Hours Saved", value: "4,500+" },
    { label: "Success Rate", value: "100%" },
];

const HolographicWorkspace = () => {
    return (
        <div className="relative w-full h-full bg-black/40 overflow-hidden border border-primary/20 rounded-2xl">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid opacity-20 animate-[pulse_4s_ease-in-out_infinite]" />

            {/* Floating Interfaces */}
            <div className="absolute top-10 left-10 p-4 rounded-lg bg-primary/5 border border-primary/30 backdrop-blur-md w-48 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 mb-2 border-b border-primary/20 pb-1">
                    <Terminal size={14} className="text-primary" />
                    <span className="text-[10px] font-mono text-primary/80">TERMINAL_01</span>
                </div>
                <div className="space-y-1">
                    <div className="h-1 w-3/4 bg-primary/20 rounded"></div>
                    <div className="h-1 w-1/2 bg-primary/20 rounded"></div>
                    <div className="h-1 w-full bg-primary/20 rounded"></div>
                </div>
            </div>

            <div className="absolute bottom-20 right-10 p-4 rounded-lg bg-blue-500/5 border border-blue-500/30 backdrop-blur-md w-40 animate-[float_5s_ease-in-out_infinite_reverse]">
                <div className="flex items-center gap-2 mb-2 border-b border-blue-500/20 pb-1">
                    <Activity size={14} className="text-blue-400" />
                    <span className="text-[10px] font-mono text-blue-400/80">SYSTEM_HEALTH</span>
                </div>
                <div className="flex gap-1 h-8 items-end">
                    <div className="w-1 bg-blue-500/40 h-full animate-pulse"></div>
                    <div className="w-1 bg-blue-500/40 h-3/4 animate-pulse delay-75"></div>
                    <div className="w-1 bg-blue-500/40 h-1/2 animate-pulse delay-100"></div>
                    <div className="w-1 bg-blue-500/40 h-full animate-pulse delay-150"></div>
                    <div className="w-1 bg-blue-500/40 h-2/3 animate-pulse delay-200"></div>
                </div>
            </div>

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full border-2 border-primary/50 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-2 rounded-full border border-primary/30 animate-[spin_5s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu size={48} className="text-primary animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Scanning Line */}
            <div className="absolute w-full h-[1px] bg-primary/50 top-0 animate-[scan_3s_linear_infinite] shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
        </div>
    );
};

export default function About() {
    return (
        <Layout>
            {/* Manifesto Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 select-none pointer-events-none">
                    <Network size={600} />
                </div>
                <div className="container-custom relative z-10">
                    <Reveal>
                        <div className="max-w-4xl">
                            <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/5 py-1 px-4 text-sm tracking-wider uppercase">
                                <span className="pulse-dot mr-2" />
                                Mission Statement
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight tracking-tight">
                                The Agency Model is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Broken</span>. <br />
                                We <span className="text-primary">Fixed It</span>.
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary pl-6">
                                We don't just write code; we orchestrate intelligence. SharkVibe combines elite human engineering with autonomous AI agents to deliver enterprise-grade software at speeds that shouldn't be possible.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Live Metrics Ticker */}
            <div className="w-full bg-card/60 border-y border-white/5 backdrop-blur-sm overflow-hidden py-4">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-baseline gap-2 group cursor-default">
                                <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">{stat.label}</span>
                                <span className="text-xl font-bold font-mono text-foreground">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Origin Story / Dashboard */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Reveal>
                            <div className="h-[400px] w-full relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <HolographicWorkspace />
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Terminal className="text-primary" />
                                The Origin Protocol
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-6">
                                <p>
                                    <strong className="text-foreground">We saw the bottleneck.</strong> Traditional development is plagued by bloated meetings, slow iterations, and manual redundancy.
                                </p>
                                <p>
                                    I engineered SharkVibe to be different. By mastering the API layer between human intent and AI execution (Claude, GPT-4, v0), we've created a workflow that feels less like coding and more like <span className="text-primary italic">manifesting software</span>.
                                </p>
                                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                    <p className="text-sm font-mono text-primary/80 m-0">
                                        &gt; "SharkVibe is not an agency. It is a high-velocity software foundry."
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Values DNA */}
            <section className="section-padding bg-card/30">
                <div className="container-custom">
                    <SectionHeader
                        label="Source Code"
                        title="Our DNA"
                        description="The immutable principles compiled into every decision we make."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {values.map((value, index) => (
                            <Reveal key={value.title} delay={index * 0.1}>
                                <div className="glass p-8 rounded-2xl h-full card-hover group border border-white/5 hover:border-primary/50 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <value.icon size={80} />
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-6 shadow-lg shadow-primary/20">
                                        <value.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Neural Network Team */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeader
                        label="The Neural Network"
                        title="Active Nodes"
                        description="A hybrid architecture of biological creativity and silicon processing power."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {team.map((member, index) => (
                            <Reveal key={member.name} delay={index * 0.1}>
                                <div className="group relative overflow-hidden rounded-2xl glass border border-white/5 hover:border-primary/50 transition-all duration-300">
                                    {/* Header / Image */}
                                    <div className="p-6 pb-0 flex items-center gap-4">
                                        <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center overflow-hidden bg-background ${member.isAi ? 'border-primary' : 'border-blue-400'}`}>
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">{member.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className={`w-2 h-2 rounded-full ${member.status === 'Online' || member.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                                                <span className="text-xs font-mono text-muted-foreground uppercase">{member.status}</span>
                                            </div>
                                        </div>
                                        {member.isAi && (
                                            <div className="ml-auto">
                                                <Bot className="text-primary/50" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Badge variant="secondary" className="font-mono text-[10px] tracking-wider bg-white/5 hover:bg-white/10 text-white/70">
                                                {member.role}
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-6 min-h-[60px]">
                                            {member.bio}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                                            {Object.entries(member.stats).map(([key, value]) => (
                                                <div key={key}>
                                                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{key}</div>
                                                    <div className="font-mono font-bold text-foreground text-sm">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-[length:100%_4px]" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
