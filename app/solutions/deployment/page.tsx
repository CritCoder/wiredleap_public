import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function DeploymentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Easy</span> Deployment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deploy your applications with confidence using our streamlined deployment process. Vercel integration with Wiredleap branding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Streamlined Deployment</h3>
                <p className="text-muted-foreground">
                  Deploy your applications instantly with our one-click deployment system. Integrated with Vercel for maximum reliability and performance.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Deployment Made Simple</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">One-click Deployment</h3>
                    <p className="text-muted-foreground">Deploy instantly with a single click.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Vercel Integration</h3>
                    <p className="text-muted-foreground">Built-in integration with Vercel's platform.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Custom Branding</h3>
                    <p className="text-muted-foreground">Deploy with Wiredleap branding and customization.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Zero Configuration</h3>
                    <p className="text-muted-foreground">No complex setup or configuration required.</p>
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