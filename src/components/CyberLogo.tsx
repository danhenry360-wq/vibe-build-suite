import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface CyberLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function CyberLogo({ size = "md", showText = true, className = "" }: CyberLogoProps) {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Random glitch effect
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        {/* Glow effect */}
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-sm bg-primary/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Main logo container */}
        <div 
          className={`
            ${sizeClasses[size]} 
            relative rounded-sm 
            bg-gradient-to-br from-primary/20 to-secondary/20 
            border border-primary/50
            flex items-center justify-center 
            transition-all duration-300
            group-hover:border-primary
            group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]
            overflow-hidden
          `}
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-grid-dense opacity-30" />
          
          {/* Animated scan line */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-[scan_2s_linear_infinite]" />
          </div>

          {/* Logo text */}
          <span 
            className={`
              font-mono font-bold text-primary relative z-10
              ${size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg"}
              ${glitchActive ? "animate-[glitch_0.15s_ease-in-out]" : ""}
            `}
          >
            SV
          </span>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
        </div>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`
              ${textSizes[size]} 
              font-bold text-foreground font-mono tracking-tight
              ${glitchActive ? "animate-[glitch_0.15s_ease-in-out]" : ""}
            `}
          >
            SHARK<span className="text-primary">VIBE</span>
          </span>
          <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em] -mt-1">
            AI Automation
          </span>
        </div>
      )}
    </Link>
  );
}

// Add custom keyframes to index.css or include inline styles
// These are added via Tailwind config or index.css