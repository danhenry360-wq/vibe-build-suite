import { Link } from "react-router-dom";
import { CyberLogo } from "./CyberLogo";
import { Terminal, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web_Architecture", href: "/services" },
    { name: "Workflow_Automation", href: "/services" },
    { name: "System_Audits", href: "/audit" },
    { name: "AI_Integration", href: "/services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Case_Studies", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Free_Audit", href: "/audit" },
    { name: "Tech_Stack", href: "/tools" },
    { name: "Documentation", href: "/portfolio" },
  ],
};

const socialLinks = [
  { name: "X", href: "https://x.com/sharkvibe", label: "X_SOCIAL" },
  { name: "LinkedIn", href: "https://linkedin.com/company/sharkvibe", label: "LINKEDIN" },
  { name: "YouTube", href: "https://youtube.com/@sharkvibe", label: "YOUTUBE" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-cyber-dark relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <CyberLogo size="md" className="mb-6" />
            <p className="text-muted-foreground text-sm font-light mb-6 leading-relaxed">
              High-velocity AI automation engineering. 
              <span className="text-primary"> Weeks, not months.</span>
            </p>
            
            {/* System Status */}
            <div className="card-cyber p-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                <Terminal className="w-3 h-3 text-primary" />
                SYSTEM_STATUS
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-green-500">ALL_SYSTEMS_OPERATIONAL</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-sm bg-muted/50 border border-primary/10 text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center gap-1"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-primary mb-4 uppercase tracking-wider">
              // Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/30 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono font-bold text-primary mb-4 uppercase tracking-wider">
              // Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/30 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono font-bold text-primary mb-4 uppercase tracking-wider">
              // Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/30 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Contact */}
            <div className="mt-6 pt-6 border-t border-primary/10">
              <Link 
                to="/contact"
                className="card-cyber px-4 py-3 flex items-center justify-between group hover:border-primary/40 transition-colors"
              >
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  Initialize_Contact
                </span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            © {new Date().getFullYear()} SharkVibe. <span className="text-primary/50">ALL_RIGHTS_RESERVED</span>
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Privacy_Policy
            </Link>
            <Link to="/terms" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Terms_of_Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}