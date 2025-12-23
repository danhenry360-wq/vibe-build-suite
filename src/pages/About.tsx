import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Zap, Shield, Trophy, Rocket, Terminal, Cpu, Network, Lock, Activity, Bot, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const values = [
    {
        title: "Velocity",
        description: "Speed is the only currency that matters. We synthesize weeks of work into hours.",
        icon: Zap,
        code: "SPEED_MAX"
    },
    {
        title: "Precision",
        description: "Zero bloat. Zero legacy debt. We deploy surgical, high-performance code.",
        icon: Trophy,
        code: "ERR_RATE_0"
    },
    {
        title: "Sovereignty",
        description: "You own the IP. You own the code. No golden handcuffs.",
        icon: Lock,
        code: "IP_100%"
    },
    {
        title: "Evolution",
        description: "We don't follow trends. We weaponize emerging tech for your competitive edge.",
        icon: Rocket,
        code: "TECH_EDGE"
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
        nodeId: "NODE_001",
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
        nodeId: "NODE_002",
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
        nodeId: "NODE_003",
        stats: {
            "Creativity": "MAX",
            "Uptime": "99.9%"
        }
    },
];

const stats = [
    { label: "Lines Synthesized", value: "1.2M+", unit: "loc" },
    { label: "AI Models Active", value: "15+", unit: "nodes" },
    { label: "Client Hours Saved", value: "4,500+", unit: "hrs" },
    { label: "Success Rate", value: "100", unit: "%" },
];

const HolographicWorkspace = () => {
    return (
        <div className="relative w-full h-full bg-black overflow-hidden border border-primary/30 rounded-lg">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            
            {/* Scanlines */}
            <div className="absolute inset-0 scanlines opacity-20" />

            {/* Floating Interfaces */}
            <div className="absolute top-6 left-6 p-3 bg-black/80 border border-primary/40 backdrop-blur-sm w-44 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 mb-2 border-b border-primary/20 pb-2">
                    <Terminal size={12} className="text-primary" />
                    <span className="text-[10px] font-mono text-primary">TERMINAL_01</span>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="space-y-1 font-mono text-[9px] text-primary/60">
                    <div>{">"} init_workflow()</div>
                    <div>{">"} deploy --prod</div>
                    <div className="text-primary">✓ SUCCESS</div>
                </div>
            </div>

            <div className="absolute bottom-12 right-6 p-3 bg-black/80 border border-cyan-500/40 backdrop-blur-sm w-36 animate-[float_5s_ease-in-out_infinite_reverse]">
                <div className="flex items-center gap-2 mb-2 border-b border-cyan-500/20 pb-2">
                    <Activity size={12} className="text-cyan-400" />
                    <span className="text-[10px] font-mono text-cyan-400">SYS_HEALTH</span>
                </div>
                <div className="flex gap-1 h-8 items-end">
                    {[100, 75, 50, 100, 66, 80, 90].map((h, i) => (
                        <div 
                            key={i}
                            className="w-1 bg-cyan-500/60 animate-pulse" 
                            style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
                        />
                    ))}
                </div>
            </div>

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="w-28 h-28 rounded-full border border-primary/50 animate-[spin_10s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" />
                    </div>
                    <div className="absolute inset-3 rounded-full border border-primary/30 animate-[spin_5s_linear_infinite_reverse]">
                        <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 translate-y-1/2 bg-cyan-400 rounded-full" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu size={36} className="text-primary" />
                    </div>
                </div>
            </div>

            {/* Scanning Line */}
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent top-0 animate-scan" />
            
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-primary/50" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-primary/50" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-primary/50" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-primary/50" />
        </div>
    );
};

export default function About() {
    return (
        <Layout>
            {/* Manifesto Hero */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute top-0 right-0 p-12 opacity-5 select-none pointer-events-none">
                    <Network size={600} />
                </div>
                <div className="container-custom relative z-10">
                    <Reveal>
                        <div className="max-w-4xl">
                            <Badge className="badge-glow mb-6">
                                <span className="pulse-dot mr-2" />
                                MISSION_STATEMENT
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight tracking-tight font-mono">
                                The Agency Model is <span className="text-red-500 line-through opacity-60">Broken</span>. <br />
                                We <span className="text-gradient">Fixed It</span>.
                            </h1>
                            <div className="border-l-2 border-primary pl-6">
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-mono">
                                    {">"} We don't just write code; we orchestrate intelligence. SharkVibe combines elite human engineering with autonomous AI agents to deliver enterprise-grade software at speeds that shouldn't be possible.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Live Metrics Ticker */}
            <div className="w-full bg-black border-y border-primary/20 overflow-hidden py-4">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex items-baseline gap-2 group cursor-default font-mono">
                                <span className="text-[10px] text-primary/60 uppercase tracking-widest">{stat.label}:</span>
                                <span className="text-xl font-bold text-primary">{stat.value}</span>
                                <span className="text-xs text-muted-foreground">{stat.unit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Origin Story / Dashboard */}
            <section className="section-padding relative">
                <div className="absolute inset-0 bg-grid-dense opacity-10" />
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div className="h-[400px] w-full relative group">
                                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-cyan-500 to-primary rounded-lg opacity-50 blur-sm group-hover:opacity-75 transition duration-500" />
                                <HolographicWorkspace />
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="card-cyber p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Terminal className="text-primary" size={20} />
                                    <h2 className="text-2xl font-bold font-mono text-gradient">The Origin Protocol</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground font-mono text-sm">
                                    <p>
                                        <span className="text-primary">{">"}</span> <strong className="text-foreground">We saw the bottleneck.</strong> Traditional development is plagued by bloated meetings, slow iterations, and manual redundancy.
                                    </p>
                                    <p>
                                        <span className="text-primary">{">"}</span> I engineered SharkVibe to be different. By mastering the API layer between human intent and AI execution (Claude, GPT-4, v0), we've created a workflow that feels less like coding and more like <span className="text-primary italic">manifesting software</span>.
                                    </p>
                                    <div className="p-4 bg-primary/5 border border-primary/30 mt-6">
                                        <p className="text-primary m-0">
                                            // "SharkVibe is not an agency. It is a high-velocity software foundry."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Values DNA */}
            <section className="section-padding relative">
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div className="container-custom relative z-10">
                    <SectionHeader
                        label="SOURCE_CODE"
                        title="Core DNA"
                        description="The immutable principles compiled into every decision we make."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                        {values.map((value, index) => (
                            <Reveal key={value.title} delay={index * 0.1}>
                                <div className="card-cyber p-6 h-full group relative overflow-hidden">
                                    {/* Terminal header */}
                                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/20">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                            <div className="w-2 h-2 rounded-full bg-green-500/60" />
                                        </div>
                                        <span className="text-[10px] font-mono text-primary/60 ml-2">{value.code}</span>
                                    </div>
                                    
                                    <div className="w-10 h-10 rounded bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <value.icon size={20} className="text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 font-mono group-hover:text-primary transition-colors">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                    
                                    {/* Hover glow */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Neural Network Team */}
            <section className="section-padding relative">
                <div className="absolute inset-0 bg-grid-dense opacity-10" />
                <div className="container-custom relative z-10">
                    <SectionHeader
                        label="NEURAL_NETWORK"
                        title="Active Nodes"
                        description="A hybrid architecture of biological creativity and silicon processing power."
                    />
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        {team.map((member, index) => (
                            <Reveal key={member.name} delay={index * 0.1}>
                                <div className="card-cyber overflow-hidden group">
                                    {/* Terminal header */}
                                    <div className="flex items-center gap-2 p-4 border-b border-primary/20 bg-primary/5">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                            <div className="w-2 h-2 rounded-full bg-green-500/60" />
                                        </div>
                                        <span className="text-[10px] font-mono text-primary/60 ml-2">{member.nodeId}</span>
                                        <div className="ml-auto flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${member.status === 'Online' || member.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                                            <span className="text-[10px] font-mono text-muted-foreground uppercase">{member.status}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-14 h-14 rounded border flex items-center justify-center overflow-hidden bg-black ${member.isAi ? 'border-primary/50' : 'border-cyan-500/50'}`}>
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold font-mono">{member.name}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Badge variant="outline" className="text-[9px] font-mono border-primary/30 text-primary/80 px-2 py-0">
                                                        {member.role}
                                                    </Badge>
                                                    {member.isAi && <Bot size={12} className="text-primary/50" />}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-muted-foreground text-sm mb-6 min-h-[60px] font-mono leading-relaxed">
                                            <span className="text-primary">{">"}</span> {member.bio}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary/20">
                                            {Object.entries(member.stats).map(([key, value]) => (
                                                <div key={key} className="bg-primary/5 border border-primary/20 p-2 rounded">
                                                    <div className="text-[9px] text-primary/60 uppercase tracking-widest mb-1 font-mono">{key}</div>
                                                    <div className="font-mono font-bold text-foreground text-sm">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
                <div className="container-custom relative z-10">
                    <Reveal>
                        <div className="card-cyber p-8 md:p-12 text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
                                Ready to <span className="text-gradient">Initialize</span>?
                            </h2>
                            <p className="text-muted-foreground mb-8 font-mono">
                                {">"} Start your project with the SharkVibe foundry.
                            </p>
                            <a 
                                href="/contact" 
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-mono font-bold hover:bg-primary/90 transition-colors glow-primary-sm"
                            >
                                Initialize Consultation
                                <ChevronRight size={16} />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </Layout>
    );
}
