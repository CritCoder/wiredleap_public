import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Seamless</span> Integrations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with your favorite tools instantly. GitHub, GitLab, VS Code, Slack, and many more integrations available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">One-Click Connections</h3>
                <p className="text-muted-foreground">
                  Connect all your essential development tools with simple one-click integrations. No complex configurations or lengthy setup processes required.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Tool Ecosystem</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Seamless Setup</h3>
                    <p className="text-muted-foreground">Quick and easy integration with zero configuration.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Popular Tools Support</h3>
                    <p className="text-muted-foreground">Works with GitHub, GitLab, VS Code, Slack, and more.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">No Configuration</h3>
                    <p className="text-muted-foreground">Start using integrations immediately without setup.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Team Collaboration</h3>
                    <p className="text-muted-foreground">Enhanced team workflows across all platforms.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold text-foreground text-center mb-8">Available Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "GitHub", "GitLab", "VS Code", "Slack", "Discord", "Jira",
                "Notion", "Figma", "Linear", "Trello", "Asana", "Confluence"
              ].map((integration, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-background rounded-lg mx-auto mb-3 flex items-center justify-center border border-border">
                    <span className="text-lg font-semibold text-muted-foreground">{integration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{integration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}