import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function IntegrationsPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Security Integrations</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">Connect SIEM, VMS, and notification systems for end‑to‑end incident management and reporting.</p>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">One‑Click Connections</h3>
                <p className="text-muted-foreground">Connect Splunk, QRadar, Genetec, Milestone, PagerDuty, Slack, and more with guided setup.</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Ecosystem</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Seamless Setup</h3>
                    <p className="text-muted-foreground">Guided flows for SIEM, VMS, and alerting tools.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Broad Support</h3>
                    <p className="text-muted-foreground">Splunk, QRadar, Datadog, PagerDuty, ServiceNow, Slack.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Open Protocols</h3>
                    <p className="text-muted-foreground">RTSP, ONVIF, MQTT, webhooks, and syslog support.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Incident Routing</h3>
                    <p className="text-muted-foreground">Automated escalation to the right teams and channels.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold text-foreground text-center mb-8">Available Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {["Splunk","QRadar","Datadog","PagerDuty","ServiceNow","Slack","Genetec","Milestone","Axis","ONVIF","RTSP","MQTT"].map((integration, index) => (
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
