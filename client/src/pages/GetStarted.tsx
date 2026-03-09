import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code2, Zap, BookOpen } from "lucide-react";

/**
 * Get Started Page - Installation and setup guide
 * Design: Cyberpunk Elegance with terminal-style code blocks
 */

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-neon">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg font-bold text-primary">PIKACLAW</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm hover:text-primary transition-colors">Home</a>
            <a href="/docs" className="text-sm hover:text-primary transition-colors">Docs</a>
            <a href="/" className="text-sm text-primary">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <h1 className="text-5xl font-mono font-bold mb-6">Get Started with Pikaclaw</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Deploy your autonomous trading agent in minutes. Follow this step-by-step guide to install Pikaclaw skills and start trading on BNB Chain.
          </p>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 border-t border-neon">
        <div className="container">
          <h2 className="text-3xl font-mono font-bold mb-12">Installation Steps</h2>

          {/* Step 1 */}
          <div className="mb-12 p-8 bg-card border border-neon rounded-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-mono font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-mono font-bold mb-4">Clone the Repository</h3>
                <p className="text-muted-foreground mb-6">
                  Download the Pikaclaw skills repository to your local machine.
                </p>
                <div className="bg-background p-4 rounded border border-neon font-mono text-sm overflow-x-auto">
                  <code className="text-secondary">
                    $ git clone https://github.com/Pikaclaw/skill-repo.git<br/>
                    $ cd pikaclaw-skill-repo
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-12 p-8 bg-card border border-neon rounded-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-mono font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-mono font-bold mb-4">Install Dependencies</h3>
                <p className="text-muted-foreground mb-6">
                  Install all required Node.js packages using pnpm or npm.
                </p>
                <div className="bg-background p-4 rounded border border-neon font-mono text-sm overflow-x-auto">
                  <code className="text-secondary">
                    $ pnpm install<br/>
                    # or<br/>
                    $ npm install
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-12 p-8 bg-card border border-neon rounded-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-mono font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-mono font-bold mb-4">Configure Environment</h3>
                <p className="text-muted-foreground mb-6">
                  Create and configure your environment variables for BNB Chain connection.
                </p>
                <div className="bg-background p-4 rounded border border-neon font-mono text-sm overflow-x-auto">
                  <code className="text-secondary">
                    $ cp .env.example .env<br/>
                    # Edit .env with your settings<br/>
                    BNB_RPC_URL=https://bsc-dataseed.bnbchain.org<br/>
                    AGENT_PRIVATE_KEY=your_private_key<br/>
                    NETWORK=mainnet
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-12 p-8 bg-card border border-neon rounded-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-mono font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-mono font-bold mb-4">Build the Skills</h3>
                <p className="text-muted-foreground mb-6">
                  Compile TypeScript skills to JavaScript.
                </p>
                <div className="bg-background p-4 rounded border border-neon font-mono text-sm overflow-x-auto">
                  <code className="text-secondary">
                    $ pnpm build
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-12 p-8 bg-card border border-neon rounded-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-mono font-bold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-mono font-bold mb-4">Initialize Your Agent</h3>
                <p className="text-muted-foreground mb-6">
                  Create a new agent and start trading.
                </p>
                <div className="bg-background p-4 rounded border border-neon font-mono text-sm overflow-x-auto">
                  <code className="text-secondary">
                    import {'{TradingSkill, RiskManagementSkill}'} from '@pikaclaw/skill-repo';<br/>
                    <br/>
                    const trading = new TradingSkill();<br/>
                    const riskMgmt = new RiskManagementSkill();<br/>
                    <br/>
                    const analysis = await trading.analyzeMarket('BTCUSDT', '1h', ['RSI', 'MACD']);
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 border-t border-neon">
        <div className="container">
          <h2 className="text-3xl font-mono font-bold mb-12">Quick Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Repo */}
            <div className="p-8 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
                <h3 className="font-mono font-bold text-lg">Skill Repository</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Access the complete Pikaclaw skill repository with all modules and source code.
              </p>
              <a href="https://github.com/Pikaclaw/" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-neon text-primary hover:bg-card"
                >
                  View Repo
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </a>
            </div>

            {/* Documentation */}
            <div className="p-8 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="font-mono font-bold text-lg">Full Documentation</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Complete API reference, examples, and best practices for Pikaclaw.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                Read Docs
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>

            {/* Download Skills */}
            <div className="p-8 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover">
              <div className="flex items-center gap-3 mb-4">
                <Download className="h-6 w-6 text-primary" />
                <h3 className="font-mono font-bold text-lg">Download Skills</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Download complete skill packages including Skill Repo, BNB Skills, and MCP.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                Download ZIP
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 border-t border-neon">
        <div className="container">
          <h2 className="text-3xl font-mono font-bold mb-12">Troubleshooting</h2>

          <div className="space-y-6">
            <div className="p-6 bg-card border border-neon rounded-lg">
              <h3 className="font-mono font-bold text-lg mb-3">❌ "Module not found" error</h3>
              <p className="text-muted-foreground">
                Make sure you've installed all dependencies with <code className="bg-background px-2 py-1 rounded">pnpm install</code> and built the project with <code className="bg-background px-2 py-1 rounded">pnpm build</code>.
              </p>
            </div>

            <div className="p-6 bg-card border border-neon rounded-lg">
              <h3 className="font-mono font-bold text-lg mb-3">⛓️ "RPC connection failed"</h3>
              <p className="text-muted-foreground">
                Check your BNB_RPC_URL in .env file. For mainnet, use <code className="bg-background px-2 py-1 rounded">https://bsc-dataseed.bnbchain.org</code>. For testnet, use <code className="bg-background px-2 py-1 rounded">https://data-seed-prebsc-1-b.binance.org:8545</code>.
              </p>
            </div>

            <div className="p-6 bg-card border border-neon rounded-lg">
              <h3 className="font-mono font-bold text-lg mb-3">🔑 "Invalid private key"</h3>
              <p className="text-muted-foreground">
                Ensure your private key is in the correct format (64 hex characters without 0x prefix) and stored securely in your .env file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-neon">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-mono font-bold">Ready to Trade?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your autonomous trading agent is ready. Deploy it now and start earning passive income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-accent glow-hover font-mono font-bold"
            >
              Deploy Agent
              <Zap className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-neon text-primary hover:bg-card"
            >
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon py-12 bg-card/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Pikaclaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
