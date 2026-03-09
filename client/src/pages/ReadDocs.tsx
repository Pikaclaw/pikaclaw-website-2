import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Code2, BookOpen, FileText } from "lucide-react";
import { useState } from "react";

/**
 * Read Docs Page - Documentation hub
 * Design: Cyberpunk Elegance with organized documentation sections
 */

export default function ReadDocs() {
  const [activeTab, setActiveTab] = useState('overview');

  const docSections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: BookOpen,
      content: `
        Pikaclaw is a comprehensive framework for building autonomous AI trading agents on BNB Chain.
        It combines advanced trading algorithms, deterministic risk management, and blockchain integration
        into a single, elegant package.
        
        ## Key Features
        - **Autonomous Trading**: Execute trades 24/7 without human intervention
        - **Risk Management**: Deterministic controls with stop-loss and drawdown limits
        - **On-Chain Identity**: ERC-8004 NFT identity for agent verification
        - **BNB Chain**: Fast, low-cost blockchain for all operations
        - **Model Context Protocol**: AI agent integration via MCP
      `
    },
    {
      id: 'skills',
      title: 'Skills Repository',
      icon: Code2,
      content: `
        The Skill Repository contains all core trading and risk management skills.
        
        ## Available Skills
        - **TradingSkill**: Market analysis and order execution
        - **RiskManagementSkill**: Position sizing and risk controls
        - **BlockchainSkill**: BNB Chain integration
        
        ## Quick Start
        \`\`\`typescript
        import { TradingSkill } from '@pikaclaw/skill-repo';
        
        const trading = new TradingSkill();
        const analysis = await trading.analyzeMarket('BTCUSDT', '1h', ['RSI', 'MACD']);
        \`\`\`
      `
    },
    {
      id: 'bnb',
      title: 'BNB Skills',
      icon: FileText,
      content: `
        BNB Skills provides specialized blockchain integration for BNB Chain.
        
        ## Modules
        - **WalletManager**: Secure wallet operations
        - **TokenOperations**: Token swaps and transfers
        - **ERC8004Identity**: NFT identity management
        - **SmartContractInteraction**: Contract method calls
        - **GasOptimizer**: Gas price optimization
        
        ## Example: Token Swap
        \`\`\`typescript
        import { TokenOperations } from '@pikaclaw/bnb-skills';
        
        const tokens = new TokenOperations();
        const result = await tokens.swap({
          fromToken: 'USDT',
          toToken: 'BTC',
          amount: 1000,
          slippage: 0.5
        });
        \`\`\`
      `
    },
    {
      id: 'mcp',
      title: 'MCP Protocol',
      icon: FileText,
      content: `
        Model Context Protocol integration enables AI agents to use Pikaclaw tools.
        
        ## Available Tools
        - **Trading Tools**: analyze_market, execute_trade, get_position
        - **Risk Tools**: check_risk_limits, calculate_position_size, get_account_stats
        - **Blockchain Tools**: mint_agent_nft, get_agent_identity, swap_tokens
        
        ## Integration with Claude
        Use Pikaclaw tools directly in Claude conversations for autonomous trading.
      `
    }
  ];

  const activeSection = docSections.find(s => s.id === activeTab);
  const ActiveIcon = activeSection?.icon || BookOpen;

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
            <a href="/get-started" className="text-sm hover:text-primary transition-colors">Get Started</a>
            <a href="/docs" className="text-sm text-primary">Docs</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <h1 className="text-5xl font-mono font-bold mb-6">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Complete API reference, guides, and examples for building with Pikaclaw.
          </p>
        </div>
      </section>

      {/* Documentation Tabs */}
      <section className="py-16 border-t border-neon">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-2 sticky top-24">
                {docSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all border ${
                      activeTab === section.id
                        ? 'bg-primary text-primary-foreground border-primary glow-yellow'
                        : 'bg-card border-neon hover:border-primary text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <section.icon className="h-4 w-4" />
                      <span className="font-mono text-sm font-bold">{section.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="p-8 bg-card border border-neon rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <ActiveIcon className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-mono font-bold">{activeSection?.title}</h2>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    {activeSection?.content.split('\n').map((line: string, idx: number) => {
                      if (line.startsWith('##')) {
                        return (
                          <h3 key={idx} className="text-xl font-mono font-bold text-primary mt-6 mb-3">
                            {line.replace('## ', '')}
                          </h3>
                        );
                      }
                      if (line.startsWith('- ')) {
                        return (
                          <div key={idx} className="flex gap-3 ml-4">
                            <span className="text-primary">•</span>
                            <span>{line.replace('- ', '')}</span>
                          </div>
                        );
                      }
                      if (line.startsWith('```')) {
                        return null;
                      }
                      if (line.trim() === '') {
                        return <div key={idx} className="h-2" />;
                      }
                      return (
                        <p key={idx} className="text-sm">
                          {line}
                        </p>
                      );
                    })}
                  </div>

                  {/* Code Examples */}
                  {activeSection?.id === 'skills' && (
                    <div className="mt-8 p-4 bg-background rounded border border-neon font-mono text-xs overflow-x-auto">
                      <code className="text-secondary">
                        import &#123;TradingSkill, RiskManagementSkill&#125; from '@pikaclaw/skill-repo';<br/>
                        <br/>
                        const trading = new TradingSkill();<br/>
                        const analysis = await trading.analyzeMarket('BTCUSDT', '1h', ['RSI', 'MACD']);
                      </code>
                    </div>
                  )}

                  {activeSection?.id === 'bnb' && (
                    <div className="mt-8 p-4 bg-background rounded border border-neon font-mono text-xs overflow-x-auto">
                      <code className="text-secondary">
                        import &#123;TokenOperations&#125; from '@pikaclaw/bnb-skills';<br/>
                        <br/>
                        const tokens = new TokenOperations();<br/>
                        const result = await tokens.swap(&#123;fromToken: 'USDT', toToken: 'BTC'&#125;);
                      </code>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference Quick Links */}
      <section className="py-16 border-t border-neon">
        <div className="container">
          <h2 className="text-3xl font-mono font-bold mb-12">API Reference</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trading API */}
            <div className="p-6 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover">
              <h3 className="font-mono font-bold text-lg mb-4 text-primary">Trading API</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• analyzeMarket(pair, timeframe, indicators)</li>
                <li>• executeTrade(pair, side, amount, orderType)</li>
                <li>• getPosition(pair)</li>
                <li>• closePosition(pair, positionId)</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                View Full API
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>

            {/* Risk Management API */}
            <div className="p-6 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover">
              <h3 className="font-mono font-bold text-lg mb-4 text-primary">Risk Management API</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• calculatePositionSize(equity, risk, entry, stop)</li>
                <li>• checkRiskLimits(period)</li>
                <li>• applyStopLoss(current, entry, percent)</li>
                <li>• getAccountStats()</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                View Full API
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>

            {/* Blockchain API */}
            <div className="p-6 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover">
              <h3 className="font-mono font-bold text-lg mb-4 text-primary">Blockchain API</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• getWalletBalance(tokens)</li>
                <li>• mintAgentNFT(name, strategy, version)</li>
                <li>• swapTokens(fromToken, toToken, amount)</li>
                <li>• executeContractMethod(address, method, params)</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                View Full API
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>

            {/* MCP Tools */}
            <div className="p-6 bg-card border border-neon rounded-lg hover:border-primary transition-all glow-hover">
              <h3 className="font-mono font-bold text-lg mb-4 text-primary">MCP Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Trading tools for AI agents</li>
                <li>• Risk management automation</li>
                <li>• Blockchain operations</li>
                <li>• Claude integration</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-neon text-primary hover:bg-card"
              >
                View Full API
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 border-t border-neon">
        <div className="container">
          <h2 className="text-3xl font-mono font-bold mb-12">Code Examples</h2>

          <div className="space-y-8">
            {/* Example 1 */}
            <div className="p-6 bg-card border border-neon rounded-lg">
              <h3 className="font-mono font-bold text-lg mb-4 text-primary">Basic Trading Strategy</h3>
              <div className="bg-background p-4 rounded border border-neon font-mono text-xs overflow-x-auto">
                <code className="text-secondary">
                  const trading = new TradingSkill();<br/>
                  const riskMgmt = new RiskManagementSkill();<br/>
                  <br/>
                  const analysis = await trading.analyzeMarket('BTCUSDT', '1h', ['RSI', 'MACD']);<br/>
                                 if ((await riskMgmt.checkRiskLimits('DAILY')).canTrade) &#123;<br/>
                  &nbsp;&nbsp;if (analysis.signal === 'BUY') &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;await trading.executeTrade('BTCUSDT', 'BUY', 1000);<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;           </code>
              </div>
            </div>

            {/* Example 2 */}
            <div className="p-6 bg-card border border-neon rounded-lg">
              <h3 className="font-mono font-bold text-lg mb-4 text-primary">Minting Agent NFT</h3>
              <div className="bg-background p-4 rounded border border-neon font-mono text-xs overflow-x-auto">
                <code className="text-secondary">
                  const identity = new ERC8004Identity();<br/>
                  <br/>
                  const nft = await identity.mintAgentNFT(&#123;<br/>
                  &nbsp;&nbsp;name: 'EliteTrader-v1',<br/>
                  &nbsp;&nbsp;strategy: 'momentum-breakout',<br/>
                  &nbsp;&nbsp;version: '1.0.0'<br/>
                  &#125;);<br/>
                  <br/>
                  console.log(`Agent NFT minted: $&#123;nft.tokenId&#125;`);<br/>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-neon">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-mono font-bold">Need More Help?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out our GitHub repository, join our community, or contact us on Twitter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Pikaclaw/" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-accent glow-hover font-mono font-bold"
              >
                GitHub Repository
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="https://twitter.com/pikaclaw_bsc" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="border-neon text-primary hover:bg-card"
              >
                Twitter @pikaclaw_bsc
              </Button>
            </a>
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
