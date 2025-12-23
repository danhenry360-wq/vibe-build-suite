import { useState, useEffect } from "react";
import { Terminal, X, Minus, Maximize2, Activity, Cpu, Zap, Globe, Clock } from "lucide-react";

interface SystemMetric {
  label: string;
  value: string;
  icon: React.ElementType;
  status: "online" | "active" | "standby";
}

const getRandomLatency = () => Math.floor(Math.random() * 20 + 25);
const getRandomUptime = () => (99.9 + Math.random() * 0.09).toFixed(2);

export function SystemTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [metrics, setMetrics] = useState<SystemMetric[]>([
    { label: "API_GATEWAY", value: "ONLINE", icon: Globe, status: "online" },
    { label: "AI_CLUSTER", value: "ACTIVE", icon: Cpu, status: "active" },
    { label: "LATENCY", value: `${getRandomLatency()}ms`, icon: Activity, status: "online" },
    { label: "UPTIME", value: `${getRandomUptime()}%`, icon: Zap, status: "online" },
  ]);

  const [logs, setLogs] = useState<string[]>([
    "> System initialized",
    "> AI nodes connected: 3/3",
    "> Ready for deployment",
  ]);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live metric updates
  useEffect(() => {
    if (!isOpen || isMinimized) return;

    const interval = setInterval(() => {
      setMetrics(prev => prev.map(m => {
        if (m.label === "LATENCY") {
          return { ...m, value: `${getRandomLatency()}ms` };
        }
        if (m.label === "UPTIME") {
          return { ...m, value: `${getRandomUptime()}%` };
        }
        return m;
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isOpen, isMinimized]);

  // Add random logs
  useEffect(() => {
    if (!isOpen || isMinimized) return;

    const logMessages = [
      "> Heartbeat: OK",
      "> Cache refreshed",
      "> AI response: 200 OK",
      "> Query optimized",
      "> Connection stable",
      "> Memory: optimal",
      "> Thread pool: healthy",
    ];

    const interval = setInterval(() => {
      const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)];
      setLogs(prev => [...prev.slice(-6), randomLog]);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, isMinimized]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 border flex items-center justify-center transition-all duration-300 group ${
          isOpen 
            ? "bg-primary border-primary text-primary-foreground" 
            : "bg-black/80 border-primary/50 text-primary hover:border-primary hover:bg-primary/10"
        }`}
        aria-label="Toggle system terminal"
      >
        <Terminal size={20} className={isOpen ? "" : "group-hover:animate-pulse"} />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        )}
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div 
          className={`fixed bottom-20 right-6 z-50 w-80 md:w-96 bg-black border border-primary/50 shadow-2xl shadow-primary/20 transition-all duration-300 ${
            isMinimized ? "h-10" : "h-auto"
          }`}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-primary/30 bg-primary/10">
            <div className="flex gap-1.5">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
              />
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"
              />
              <button className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
            </div>
            <span className="text-[10px] font-mono text-primary/80 ml-2 flex-1">system_monitor.sh</span>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-primary/60">
              <Clock size={10} />
              {formatTime(currentTime)}
            </div>
          </div>

          {/* Terminal Content */}
          {!isMinimized && (
            <div className="p-3 space-y-3 max-h-[400px] overflow-y-auto">
              {/* Status Header */}
              <div className="flex items-center justify-between pb-2 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-green-400">SYSTEM OPERATIONAL</span>
                </div>
                <span className="text-[9px] font-mono text-primary/40">v2.4.1</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2">
                {metrics.map((metric) => (
                  <div 
                    key={metric.label}
                    className="bg-primary/5 border border-primary/20 p-2 rounded-sm"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <metric.icon size={10} className="text-primary/60" />
                      <span className="text-[9px] font-mono text-primary/60 uppercase">{metric.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-mono font-bold ${
                        metric.status === "online" ? "text-green-400" :
                        metric.status === "active" ? "text-cyan-400" :
                        "text-yellow-400"
                      }`}>
                        {metric.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity Graph */}
              <div className="bg-primary/5 border border-primary/20 p-2 rounded-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <Activity size={10} className="text-primary/60" />
                  <span className="text-[9px] font-mono text-primary/60">NETWORK_ACTIVITY</span>
                </div>
                <div className="flex items-end gap-0.5 h-8">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/40 rounded-t-sm transition-all duration-300"
                      style={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        animationDelay: `${i * 50}ms`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Live Logs */}
              <div className="bg-black border border-primary/20 p-2 rounded-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <Terminal size={10} className="text-primary/60" />
                  <span className="text-[9px] font-mono text-primary/60">LIVE_LOGS</span>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="space-y-0.5 font-mono text-[10px]">
                  {logs.map((log, i) => (
                    <div 
                      key={i} 
                      className={`text-primary/70 ${i === logs.length - 1 ? "text-primary" : ""}`}
                    >
                      {log}
                    </div>
                  ))}
                  <div className="text-primary animate-pulse">{">"} _</div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-primary/20">
                <span className="text-[9px] font-mono text-primary/40">SharkVibe Systems</span>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-mono text-primary/40">Nodes:</span>
                  <span className="text-[9px] font-mono text-green-400">3/3</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
