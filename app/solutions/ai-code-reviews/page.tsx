import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function AICodeReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">AI</span> Code Reviews
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get intelligent code suggestions and reviews in real-time as you write. Our AI analyzes your code for best practices, potential bugs, and optimization opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Intelligent Analysis</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Real-time Suggestions</h3>
                    <p className="text-muted-foreground">Get instant feedback as you code with smart recommendations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Best Practice Recommendations</h3>
                    <p className="text-muted-foreground">Follow industry standards with automated guidance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Bug Detection</h3>
                    <p className="text-muted-foreground">Identify potential issues before they become problems.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Performance Optimization</h3>
                    <p className="text-muted-foreground">Improve code efficiency with intelligent suggestions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Code Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI-powered code review system analyzes your code in real-time, providing intelligent suggestions and identifying potential issues before they impact your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}