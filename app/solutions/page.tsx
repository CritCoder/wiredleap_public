import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "AI Threat Detection",
      description: "Detect people, vehicles, and anomalies in real‑time. Define zones, rules, and behaviors to trigger instant alerts.",
      icon: "🔍",
      benefits: ["Real-time detection", "Anomaly analysis", "Intrusion alerts", "Behavior rules"]
    },
    {
      title: "Real-time Monitoring",
      description: "Live multi‑camera dashboards with sub‑second latency, health status, and alert overlays for rapid response.",
      icon: "⚡",
      benefits: ["Instant alerts", "Multi‑view walls", "Low‑latency streams", "Operator workflows"]
    },
    {
      title: "Multi-Stream Processing",
      description: "Ingest and process dozens of camera feeds concurrently with efficient GPU/edge utilization.",
      icon: "🚀",
      benefits: ["Parallel ingest", "Edge/offline mode", "Adaptive quality", "Scalable pipelines"]
    },
    {
      title: "Security Integrations",
      description: "Connect SIEM, VMS, and notification systems for end‑to‑end incident management.",
      icon: "🔗",
      benefits: ["Splunk/QRadar", "Genetec/Milestone", "PagerDuty/Slack", "Webhooks/Syslog"]
    },
    {
      title: "Sensor Connectivity",
      description: "RTSP, ONVIF, and MQTT support for cameras, drones, and IoT sensors. Simple onboarding at scale.",
      icon: "🌐",
      benefits: ["RTSP/ONVIF", "MQTT/REST", "Device health", "Bulk onboarding"]
    },
    {
      title: "Deployment Options",
      description: "Run in the cloud, on‑prem, or at the edge. Automated updates and centralized management.",
      icon: "🛡️",
      benefits: ["Cloud/On‑prem", "Edge gateways", "Zero‑trust", "Observability"]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/60 z-5" />
          <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,black_75%)]" />
          
          {/* Feature-themed animated elements - neutral colors */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/30 rounded-lg animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-white/20 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-white/30 to-white/20 rounded-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Floating feature icons */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-16 right-10 text-4xl animate-float">⚡</div>
            <div className="absolute bottom-20 left-16 text-3xl animate-float" style={{animationDelay: '1.5s'}}>🚀</div>
            <div className="absolute top-1/2 left-10 text-3xl animate-float" style={{animationDelay: '0.8s'}}>🔍</div>
            <div className="absolute bottom-1/4 right-20 text-3xl animate-float" style={{animationDelay: '2.2s'}}>🌐</div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Security Solutions</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              AI-powered surveillance intelligence for real-time monitoring, detection, and incident response across your operations.
            </p>
          </div>
        </section>
        
        {/* Solutions Grid */}
        <section className="min-h-[70vh] flex items-center bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-black border border-white/20 rounded-xl p-6 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="min-h-[70vh] flex items-center bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16 w-full">
            <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8">
              <h2 className="text-3xl font-semibold text-white text-center mb-8">Security Integrations</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  "Splunk", "QRadar", "Datadog", "PagerDuty", "ServiceNow", "Slack",
                  "Genetec", "Milestone", "Axis", "ONVIF", "RTSP", "MQTT"
                ].map((integration, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-black rounded-lg mx-auto mb-3 flex items-center justify-center border border-white/20">
                      <span className="text-lg font-semibold text-white/70">{integration}</span>
                    </div>
                    <p className="text-sm text-white/60">{integration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="min-h-[70vh] flex items-center bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16 w-full">
            <h2 className="text-3xl font-semibold text-white text-center mb-8">Why Choose Wiredleap?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Faster Response</h3>
                <p className="text-white/70">Real-time alerts and triage to reduce incident response time.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Accurate Detection</h3>
                <p className="text-white/70">AI models tuned for people, vehicles, anomalies, and behavior.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Unified Operations</h3>
                <p className="text-white/70">Seamless SIEM/VMS integration and operator‑friendly workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-[70vh] flex items-center bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16 w-full">
            <div className="text-center">
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">Trusted by security teams worldwide for real‑time monitoring and incident detection.</p>
                <a href="/get-started" className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">Request a Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
