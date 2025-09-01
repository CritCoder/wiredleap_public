import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Book, Code, Zap, Users, Shield, Settings } from "lucide-react"

export default function DocsPage() {
  const categories = [
    {
      title: "Getting Started",
      description: "Quick start guides and tutorials",
      icon: Book,
      guides: [
        "Installation Guide",
        "First Project Setup",
        "Basic Configuration",
        "Hello World Example"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      icon: Code,
      guides: [
        "Authentication",
        "Code Review API",
        "Real-time Previews",
        "Parallel Agents API"
      ]
    },
    {
      title: "Integrations",
      description: "Connect with your favorite tools",
      icon: Zap,
      guides: [
        "GitHub Integration",
        "VS Code Extension",
        "Slack Bot Setup",
        "Custom Webhooks"
      ]
    },
    {
      title: "Team Collaboration",
      description: "Work together effectively",
      icon: Users,
      guides: [
        "Team Setup",
        "Role Management",
        "Code Review Workflows",
        "Collaboration Best Practices"
      ]
    },
    {
      title: "Security",
      description: "Security and compliance",
      icon: Shield,
      guides: [
        "Data Protection",
        "Access Control",
        "Audit Logs",
        "Compliance Standards"
      ]
    },
    {
      title: "Advanced Configuration",
      description: "Customize your experience",
      icon: Settings,
      guides: [
        "Custom AI Models",
        "Performance Tuning",
        "Deployment Options",
        "Monitoring & Analytics"
      ]
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
          
          {/* Code-themed animated elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 text-6xl text-cyan-400 animate-pulse">{`</>`}</div>
            <div className="absolute top-1/3 right-20 text-4xl text-blue-400 animate-bounce" style={{animationDelay: '1s'}}>{`{}`}</div>
            <div className="absolute bottom-1/3 left-1/4 text-5xl text-purple-400 animate-pulse" style={{animationDelay: '2s'}}>[]</div>
            <div className="absolute top-1/2 right-1/3 text-3xl text-green-400 animate-bounce" style={{animationDelay: '0.5s'}}>()</div>
          </div>
          
          {/* Floating code blocks */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 right-10 bg-gray-800 rounded-lg p-3 text-xs text-green-400 font-mono animate-float">
              console.log('Hello');
            </div>
            <div className="absolute bottom-20 left-16 bg-gray-800 rounded-lg p-3 text-xs text-blue-400 font-mono animate-float" style={{animationDelay: '1.5s'}}>
              function() {`{}`}
            </div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to know about using Wiredleap. From quick start guides to advanced API documentation.
            </p>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Search Section */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <span className="text-muted-foreground">⌘K</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Quick Start</h2>
            <p className="text-muted-foreground mb-6">
              Get up and running with Wiredleap in under 5 minutes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">1</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Install</h3>
                <p className="text-muted-foreground text-sm">
                  Install the Wiredleap CLI or VS Code extension
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">2</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Connect</h3>
                <p className="text-muted-foreground text-sm">
                  Connect your GitHub repository and configure integrations
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Start Coding</h3>
                <p className="text-muted-foreground text-sm">
                  Begin coding with AI assistance and real-time previews
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Documentation Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.guides.map((guide, guideIndex) => (
                    <li key={guideIndex}>
                      <a href={`/docs/${guide.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {guide}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Code Examples</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Basic Setup</h3>
              <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-muted-foreground">
{`# Install Wiredleap CLI
npm install -g @wiredleap/cli

# Initialize project
wiredleap init

# Start development
wiredleap dev`}
                </code>
              </pre>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">API Example</h3>
              <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-muted-foreground">
{`// Code review request
const review = await wiredleap.review({
  code: sourceCode,
  language: 'javascript',
  context: 'React component'
});

console.log(review.suggestions);`}
                </code>
              </pre>
            </div>
          </div>
        </section>

          {/* Community Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our community and support team are here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Join Community
                </button>
                <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}

