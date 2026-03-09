import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Twitter, Code2, Zap, Shield, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Cyberpunk Elegance with Electric Minimalism
 * - Deep black background with electric yellow/gold accents
 * - Neon cyan borders and supporting elements
 * - Asymmetric layouts avoiding centered grids
 * - Space Mono for headings (technical authenticity), Inter for body
 * - Smooth animations with glow effects on hover
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-neon">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663067330132/hLUg3pGvoTKyNDBJJoEo4i/pikaclaw_logo_555fa3f5.png" 
              alt="Pikaclaw" 
              className="h-8 w-8"
            />
            <span className="font-mono text-lg font-bold text-primary">PIKACLAW</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#protocol" className="text-sm hover:text-primary transition-colors">Protocol</a>
            <a href="#developers" className="text-sm hover:text-primary transition-colors">Developers</a>
            <a href="https://twitter.com/pikaclaw_bsc" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetric Layout */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logo with Glow */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 glow-yellow rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663067330132/hLUg3pGvoTKyNDBJJoEo4i/pikaclaw_logo_555fa3f5.png" 
                  alt="Pikaclaw Logo" 
                  className="h-64 w-64 relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right: Tagline and CTA */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-mono font-bold text-primary leading-tight">
                  PIKACLAW
                </h1>
                <p className="text-xl text-muted-foreground font-sans">
                  Transform any AI agent into an autonomous trader on BNB Chain. Powered by OpenClaw protocol, Fourmeme integration, and deterministic risk controls.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-accent glow-hover font-mono font-bold"
                >
                  Get Started
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neon text-primary hover:bg-card"
                >
                  Read Docs
                </Button>
              </div>

              {/* Infrastructure Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 bg-card border border-neon rounded text-xs font-mono text-secondary">OpenClaw</span>
                <span className="px-3 py-1 bg-card border border-neon rounded text-xs font-mono text-secondary">BNB Chain</span>
                <span className="px-3 py-1 bg-card border border-neon rounded text-xs font-mono text-secondary">ERC-8004</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-neon">
        <div className="container">
          <h2 className="text-4xl font-mono font-bold mb-16 text-center">Core Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature Card 1 */}
            <div className="group p-6 bg-card border border-neon rounded-lg hover:border-primary transition-all duration-300 glow-hover">
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Live Trade Execution</h3>
                  <p className="text-muted-foreground text-sm">Your agent analyzes markets in real-time and executes perpetual futures orders on Aster DEX without human intervention.</p>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group p-6 bg-card border border-neon rounded-lg hover:border-primary transition-all duration-300 glow-hover">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Deterministic Risk Controls</h3>
                  <p className="text-muted-foreground text-sm">Enforced stop-loss, maximum drawdown limits, per-trade risk caps, and cooldown periods configured in TOOLS.md.</p>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group p-6 bg-card border border-neon rounded-lg hover:border-primary transition-all duration-300 glow-hover">
              <div className="flex items-start gap-4">
                <Code2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">On-Chain Identity (ERC-8004)</h3>
                  <p className="text-muted-foreground text-sm">Each agent is minted as an ERC-8004 NFT on BNB Chain. Verifiable ownership and permanent on-chain track record.</p>
                </div>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="group p-6 bg-card border border-neon rounded-lg hover:border-primary transition-all duration-300 glow-hover">
              <div className="flex items-start gap-4">
                <Cpu className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-mono font-bold text-lg mb-2">Enhanced State Tracking</h3>
                  <p className="text-muted-foreground text-sm">Live position monitoring with clawster-state.json, detailed trade logs, and full observability into every decision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section id="protocol" className="py-20 border-t border-neon">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Protocol Info */}
            <div className="space-y-6">
              <h2 className="text-4xl font-mono font-bold">Protocol Stack</h2>
              <p className="text-lg text-muted-foreground">
                Pikaclaw is built on a robust infrastructure combining the latest in AI agent technology and blockchain integration.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-card border border-neon rounded">
                  <h4 className="font-mono font-bold text-primary mb-2">OpenClaw Protocol</h4>
                  <p className="text-sm text-muted-foreground">Advanced agent framework for autonomous trading logic</p>
                </div>
                <div className="p-4 bg-card border border-neon rounded">
                  <h4 className="font-mono font-bold text-primary mb-2">Fourmeme Integration</h4>
                  <p className="text-sm text-muted-foreground">Seamless meme token trading capabilities</p>
                </div>
                <div className="p-4 bg-card border border-neon rounded">
                  <h4 className="font-mono font-bold text-primary mb-2">BNB Chain</h4>
                  <p className="text-sm text-muted-foreground">Fast, low-cost blockchain for on-chain operations</p>
                </div>
              </div>
            </div>

            {/* Right: Infrastructure Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card border border-neon rounded-lg text-center hover:border-primary transition-all glow-hover">
                <div className="font-mono font-bold text-primary text-2xl mb-2">OpenClaw</div>
                <p className="text-xs text-muted-foreground">Agent Framework</p>
              </div>
              <div className="p-6 bg-card border border-neon rounded-lg text-center hover:border-primary transition-all glow-hover">
                <div className="font-mono font-bold text-primary text-2xl mb-2">Aster DEX</div>
                <p className="text-xs text-muted-foreground">Trading Venue</p>
              </div>
              <div className="p-6 bg-card border border-neon rounded-lg text-center hover:border-primary transition-all glow-hover">
                <div className="font-mono font-bold text-primary text-2xl mb-2">ERC-8004</div>
                <p className="text-xs text-muted-foreground">Identity Standard</p>
              </div>
              <div className="p-6 bg-card border border-neon rounded-lg text-center hover:border-primary transition-all glow-hover">
                <div className="font-mono font-bold text-primary text-2xl mb-2">BNB Chain</div>
                <p className="text-xs text-muted-foreground">L1 Blockchain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Resources Section */}
      <section id="developers" className="py-20 border-t border-neon">
        <div className="container">
          <h2 className="text-4xl font-mono font-bold mb-16">Developer Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Repo */}
            <div className="p-8 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover group">
              <div className="flex items-center gap-3 mb-4">
                <Github className="h-6 w-6 text-primary" />
                <h3 className="font-mono font-bold text-lg">Skill Repo</h3>
              </div>
              <p className="text-muted-foreground mb-6">Access the complete Pikaclaw skill repository with all modules and dependencies.</p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                View Repository
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>

            {/* BNB Skills */}
            <div className="p-8 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover group">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
                <h3 className="font-mono font-bold text-lg">BNB Skills</h3>
              </div>
              <p className="text-muted-foreground mb-6">Specialized BNB Chain integration skills for enhanced blockchain operations.</p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                Explore Skills
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>

            {/* MCP Integration */}
            <div className="p-8 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover group">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-primary" />
                <h3 className="font-mono font-bold text-lg">MCP Protocol</h3>
              </div>
              <p className="text-muted-foreground mb-6">Model Context Protocol integration for advanced AI agent communication.</p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                Learn More
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Documentation Links */}
          <div className="mt-16 p-8 bg-card border border-neon rounded-lg">
            <h3 className="font-mono font-bold text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-background rounded transition-colors">
                <ExternalLink className="h-4 w-4 text-primary" />
                <span className="text-sm">Read Documentation</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-background rounded transition-colors">
                <ExternalLink className="h-4 w-4 text-primary" />
                <span className="text-sm">Skill Hub</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-background rounded transition-colors">
                <ExternalLink className="h-4 w-4 text-primary" />
                <span className="text-sm">Pika Skill Repo</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 hover:bg-background rounded transition-colors">
                <ExternalLink className="h-4 w-4 text-primary" />
                <span className="text-sm">API Reference</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-neon">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-mono font-bold">Ready to Deploy?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clone the Pikaclaw skill, run the installer, and your OpenClaw agent will handle the rest. Start trading autonomously today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-accent glow-hover font-mono font-bold"
            >
              Install Skills
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-neon text-primary hover:bg-card"
            >
              View Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon py-12 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663067330132/hLUg3pGvoTKyNDBJJoEo4i/pikaclaw_logo_555fa3f5.png" 
                  alt="Pikaclaw" 
                  className="h-6 w-6"
                />
                <span className="font-mono font-bold text-primary">PIKACLAW</span>
              </div>
              <p className="text-sm text-muted-foreground">Autonomous AI Agent Trading on BNB Chain</p>
            </div>

            {/* Protocol */}
            <div className="space-y-4">
              <h4 className="font-mono font-bold">Protocol</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">OpenClaw</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fourmeme</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">BNB Chain</a></li>
              </ul>
            </div>

            {/* Developers */}
            <div className="space-y-4">
              <h4 className="font-mono font-bold">Developers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Skill Repo</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">BNB Skills</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">MCP</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-mono font-bold">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://twitter.com/pikaclaw_bsc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Twitter size={16} /> Twitter
                  </a>
                </li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-neon pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Pikaclaw. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
