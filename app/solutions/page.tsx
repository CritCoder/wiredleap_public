import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "AI Code Reviews",
      description: "Get intelligent code suggestions and reviews in real-time as you write. Our AI analyzes your code for best practices, potential bugs, and optimization opportunities.",
      icon: "🔍",
      benefits: ["Real-time suggestions", "Best practice recommendations", "Bug detection", "Performance optimization"]
    },
    {
      title: "Real-time Previews",
      description: "See your changes instantly with live previews. No more waiting for builds or deployments to see your work in action.",
      icon: "⚡",
      benefits: ["Instant feedback", "Live collaboration", "No build delays", "Visual debugging"]
    },
    {
      title: "Parallel Coding Agents",
      description: "Work on multiple tasks simultaneously with our parallel coding agents. Handle complex problems faster than traditional single-threaded approaches.",
      icon: "🚀",
      benefits: ["Multi-task processing", "Faster development", "Complex problem solving", "Concurrent workflows"]
    },
    {
      title: "One-click Integrations",
      description: "Connect with your favorite tools instantly. GitHub, GitLab, VS Code, Slack, and many more integrations available.",
      icon: "🔗",
      benefits: ["Seamless setup", "Popular tools support", "No configuration", "Team collaboration"]
    },
    {
      title: "MCP Connectivity",
      description: "Advanced server connectivity for managing and configuring server access across your entire development stack.",
      icon: "🌐",
      benefits: ["Server management", "Secure connections", "Cross-platform", "Enterprise ready"]
    },
    {
      title: "Easy Deployment",
      description: "Deploy your applications with confidence using our streamlined deployment process. Vercel integration with Wiredleap branding.",
      icon: "🚀",
      benefits: ["One-click deployment", "Vercel integration", "Custom branding", "Zero configuration"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/40 z-5" />
          <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
          
          {/* Feature-themed animated elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400 rounded-lg animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-purple-400 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Floating feature icons */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-16 right-10 text-4xl animate-float">⚡</div>
            <div className="absolute bottom-20 left-16 text-3xl animate-float" style={{animationDelay: '1.5s'}}>🚀</div>
            <div className="absolute top-1/2 left-10 text-3xl animate-float" style={{animationDelay: '0.8s'}}>🔍</div>
            <div className="absolute bottom-1/4 right-20 text-3xl animate-float" style={{animationDelay: '2.2s'}}>🌐</div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Complete</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive AI-powered solutions designed to revolutionize your development process and maximize team productivity.
            </p>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Solutions Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold text-foreground text-center mb-8">Integrations</h2>
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
        </section>

        {/* Comparison Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-8">Why Choose Wiredleap?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">10x Faster</h3>
              <p className="text-muted-foreground">
                Complete development tasks in a fraction of the time with AI assistance and parallel processing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Higher Quality</h3>
              <p className="text-muted-foreground">
                AI-powered code reviews and suggestions help maintain high code quality and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Better Collaboration</h3>
              <p className="text-muted-foreground">
                Real-time previews and seamless integrations make team collaboration more effective.
              </p>
            </div>
          </div>
        </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of developers who are already using Wiredleap to build better software faster.
              </p>
              <a href="/get-started" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Get Started Today
              </a>
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}

