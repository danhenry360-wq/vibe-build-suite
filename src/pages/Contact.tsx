import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/Layout";
import { Mail, Clock, Globe, ArrowRight, Terminal, Send, Calendar, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "COMM_LINK",
    value: "hello@sharkvibe.com",
    code: "EMAIL"
  },
  {
    icon: Clock,
    label: "RESPONSE_TIME",
    value: "< 24 hours",
    code: "LATENCY"
  },
  {
    icon: Globe,
    label: "LOCATION",
    value: "Remote - Worldwide",
    code: "GLOBAL"
  },
];

const projectTypes = [
  "Website Development",
  "Workflow Automation",
  "Site Audit",
  "AI Integration",
  "Other",
];

const budgetRanges = [
  "< $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Transmission Successful",
      description: "We'll respond within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative z-10">
          <Reveal>
            <Badge className="badge-glow mb-6">
              <span className="pulse-dot mr-2" />
              COMM_INTERFACE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-mono mb-6">
              Initialize <span className="text-gradient">Connection</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl font-mono">
              {">"} Tell us about your project. We'll respond within 24 hours with a strategic assessment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 md:pb-24 relative">
        <div className="absolute inset-0 bg-grid-dense opacity-10" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal>
                <div className="card-cyber p-6">
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b border-primary/20">
                    <Terminal size={16} className="text-primary" />
                    <span className="text-sm font-mono text-primary">CONTACT_INFO</span>
                  </div>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4 p-3 bg-primary/5 border border-primary/20 rounded">
                        <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0 bg-black">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] text-primary/60 uppercase tracking-widest font-mono">{item.label}</p>
                          <p className="text-foreground font-mono text-sm">{item.value}</p>
                        </div>
                        <span className="text-[9px] font-mono text-primary/40">[{item.code}]</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card-cyber p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-sm font-mono text-primary">QUICK_SYNC</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 font-mono">
                    {">"} Book a free 15-minute discovery call to discuss your project scope.
                  </p>
                  <Button variant="outline" className="w-full font-mono text-xs border-primary/30 hover:bg-primary/10">
                    SCHEDULE_CALL
                    <ChevronRight size={14} className="ml-2" />
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/sharkvibe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 border border-primary/30 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-primary-foreground transition-all font-mono text-sm"
                  >
                    𝕏
                  </a>
                  <a
                    href="https://linkedin.com/company/sharkvibe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 border border-primary/30 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-primary-foreground transition-all font-mono text-sm font-bold"
                  >
                    in
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div className="card-cyber overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 p-4 border-b border-primary/20 bg-primary/5">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[10px] font-mono text-primary/60 ml-2">project_inquiry.form</span>
                    <div className="ml-auto flex items-center gap-2">
                      <Send size={12} className="text-primary/60" />
                      <span className="text-[10px] font-mono text-primary/60">READY</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-2">
                          NAME *
                        </label>
                        <Input
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-black border-primary/30 font-mono h-11"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-2">
                          EMAIL *
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-black border-primary/30 font-mono h-11"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-2">
                        COMPANY / WEBSITE
                      </label>
                      <Input
                        placeholder="Your company or existing website"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-black border-primary/30 font-mono h-11"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-2">
                          PROJECT_TYPE
                        </label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                        >
                          <SelectTrigger className="bg-black border-primary/30 font-mono h-11">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-primary/30">
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type} className="font-mono text-sm">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-2">
                          BUDGET_RANGE
                        </label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                        >
                          <SelectTrigger className="bg-black border-primary/30 font-mono h-11">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-primary/30">
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range} className="font-mono text-sm">
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-2">
                        PROJECT_DESCRIPTION *
                      </label>
                      <Textarea
                        required
                        placeholder="> Describe your project, goals, and timeline..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-black border-primary/30 font-mono resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground font-mono font-bold h-12 glow-primary-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">TRANSMITTING</span>
                          <span className="ml-2 animate-spin">◌</span>
                        </>
                      ) : (
                        <>
                          SUBMIT_INQUIRY
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-center text-[10px] text-muted-foreground font-mono">
                      {">"} Expected response time: &lt; 24 hours
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
