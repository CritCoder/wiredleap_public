import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function RealTimePreviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section (match Contact hero) */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/40 z-5" />
          <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Real-time Monitoring</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">Live multi‑camera views, alert overlays, and operator tools with sub‑second latency for rapid incident response.</p>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Live Dashboards</h3>
                <p className="text-muted-foreground">Unified wallboards with camera health, alert overlays, and PTZ controls for on‑site teams.</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Operations Toolkit</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Instant Alerts</h3>
                    <p className="text-muted-foreground">Receive and triage alerts in under a second.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Multi‑View Walls</h3>
                    <p className="text-muted-foreground">Custom layouts for control rooms and field units.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Low Latency</h3>
                    <p className="text-muted-foreground">Optimized pipelines for sub‑second glass‑to‑glass.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Operator Tools</h3>
                    <p className="text-muted-foreground">PTZ control, bookmarking, and audit trails built‑in.</p>
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
