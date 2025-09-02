import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function RealTimePreviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Real-time</span> Previews
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See your changes instantly with live previews. No more waiting for builds or deployments to see your work in action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Lightning Fast Updates</h3>
                <p className="text-muted-foreground">
                  Experience instant feedback with our real-time preview system that updates as you type, eliminating build delays and accelerating your development workflow.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Instant Feedback</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Instant Feedback</h3>
                    <p className="text-muted-foreground">See changes immediately without waiting for builds.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Live Collaboration</h3>
                    <p className="text-muted-foreground">Share previews with team members in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">No Build Delays</h3>
                    <p className="text-muted-foreground">Skip the wait time and iterate faster.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visual Debugging</h3>
                    <p className="text-muted-foreground">Debug visually with instant preview updates.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}