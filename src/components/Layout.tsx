import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SystemTerminal } from "./SystemTerminal";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      
      {/* Content */}
      <Navbar />
      <main className="relative pt-20">
        {children}
      </main>
      <Footer />
      
      {/* Floating System Terminal */}
      <SystemTerminal />
    </div>
  );
}
