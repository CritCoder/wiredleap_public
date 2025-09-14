import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function DeploymentPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Deployment Options</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">Deploy in the cloud, on‑premises, or at the edge with centralized management, secure updates, and full observability.</p>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Streamlined Rollout</h3>
                <p className="text-muted-foreground">Automated updates, edge provisioning, and health monitoring across all sites.</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Flexible Models</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Cloud / On‑Prem</h3>
                    <p className="text-muted-foreground">Choose fully managed cloud or self‑hosted deployment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Edge Gateways</h3>
                    <p className="text-muted-foreground">Deploy compute near cameras for low latency.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Zero‑Trust Security</h3>
                    <p className="text-muted-foreground">Sensible defaults with hardened endpoints and SSO.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Observability</h3>
                    <p className="text-muted-foreground">Full telemetry, logs, and audit trails for compliance.</p>
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
