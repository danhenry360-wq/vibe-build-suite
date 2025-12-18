import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const checkItems = [
  "Core Web Vitals (LCP, FID, CLS)",
  "Mobile Friendliness",
  "Meta Tags & Structured Data",
  "Image Optimization",
  "Security Headers",
  "Accessibility Issues",
];

export default function Audit() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
  } | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    setResults(null);

    // Simulate audit (in production, integrate with PageSpeed Insights API)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setResults({
      performance: Math.floor(Math.random() * 30) + 65,
      seo: Math.floor(Math.random() * 25) + 70,
      accessibility: Math.floor(Math.random() * 20) + 75,
      bestPractices: Math.floor(Math.random() * 25) + 70,
    });

    setIsLoading(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-500/20";
    if (score >= 70) return "bg-yellow-500/20";
    return "bg-red-500/20";
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Free Tool"
            title="Instant Site Audit"
            description="Get a quick health check of your website. Enter your URL to analyze performance, SEO, and more."
          />
        </div>
      </section>

      {/* Audit Tool */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleAudit} className="glass rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-background border-border flex-1"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze Site <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              {/* Loading Animation */}
              {isLoading && (
                <div className="mt-8 flex justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-3 h-3 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-3 h-3 rounded-full bg-tertiary animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}

              {/* Results */}
              {results && (
                <div className="mt-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Performance", score: results.performance },
                      { label: "SEO", score: results.seo },
                      { label: "Accessibility", score: results.accessibility },
                      { label: "Best Practices", score: results.bestPractices },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-xl p-4 text-center ${getScoreBg(item.score)}`}
                      >
                        <div className={`text-3xl font-bold ${getScoreColor(item.score)}`}>
                          {item.score}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Want a detailed report with actionable recommendations?
                    </p>
                    <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                      <Link to="/contact">
                        Get Detailed Report <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            label="Comprehensive Analysis"
            title="What We Check"
            description="Our audit covers all the critical aspects of website performance and optimization."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {checkItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Help Improving Your Scores?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can optimize your website for better performance, SEO, and user experience.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Link to="/contact">
              Get Expert Help <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
