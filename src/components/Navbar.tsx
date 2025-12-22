import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CyberLogo } from "./CyberLogo";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Tools", href: "/tools" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/10 py-2" 
          : "py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <CyberLogo size="md" />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`
                  px-3 py-2 text-xs font-mono uppercase tracking-wider transition-all relative
                  ${location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {location.pathname === link.href && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="hidden xl:inline">SYSTEMS_ONLINE</span>
          </div>

          <Button 
            asChild 
            className="bg-gradient-cyber text-primary-foreground hover:opacity-90 transition-opacity font-mono uppercase tracking-wide text-xs glow-primary-sm"
          >
            <Link to="/contact">
              <Terminal className="w-3 h-3 mr-2" />
              Initialize
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground border border-primary/30 rounded-sm hover:bg-primary/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-primary/20 animate-fade-in">
          <div className="container-custom py-6">
            {/* System status */}
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-6 pb-4 border-b border-primary/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              NAVIGATION_ACTIVE
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`
                      flex items-center gap-3 py-3 px-4 font-mono text-sm uppercase tracking-wide transition-all rounded-sm
                      ${location.pathname === link.href
                        ? "text-primary bg-primary/10 border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }
                    `}
                  >
                    <span className="text-primary/50 text-xs">0{index + 1}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t border-primary/10">
                <Button 
                  asChild 
                  className="w-full bg-gradient-cyber text-primary-foreground font-mono uppercase tracking-wide glow-primary-sm"
                >
                  <Link to="/contact">
                    <Terminal className="w-4 h-4 mr-2" />
                    Initialize_Project
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}