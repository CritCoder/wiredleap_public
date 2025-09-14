import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Eye, Globe, Shield, TrendingUp } from "lucide-react"

export function BentoSection() {
  return (
    <section data-snap-section className="snap-start w-full min-h-screen bg-black text-white grid place-items-center">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-alliance2 font-light">
            Advanced Intelligence Platform
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Wiredleap combines cutting-edge AI with comprehensive data integration to deliver 
            actionable intelligence for enterprise security and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Signal Intelligence Engine */}
          <Card className="bg-white/5 border border-white/10 lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Core Feature</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-4">Signal Intelligence Engine</h3>
              <p className="text-white/70 mb-6">
                Advanced pattern recognition and anomaly detection across multiple data streams, 
                providing real-time threat assessment and predictive analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-white/20 text-white/80">Pattern Recognition</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Anomaly Detection</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Predictive Analytics</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Dashboards */}
          <Card className="bg-white/5 border border-white/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Live Intelligence Dashboards</h3>
              <p className="text-white/70">
                Real-time monitoring and visualization of threats, patterns, and operational metrics.
              </p>
            </CardContent>
          </Card>

          {/* Data Integration */}
          <Card className="bg-white/5 border border-white/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Multi-Source Integration</h3>
              <p className="text-white/70">
                Seamlessly connect and analyze data from internal systems, external feeds, and open sources.
              </p>
            </CardContent>
          </Card>

          {/* Threat Detection */}
          <Card className="bg-white/5 border border-white/10 lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Advanced</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-4">Proactive Threat Detection</h3>
              <p className="text-white/70 mb-6">
                AI-powered threat hunting and early warning systems that identify risks before they materialize, 
                enabling proactive response and mitigation strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-white/20 text-white/80">Threat Hunting</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Early Warning</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Risk Assessment</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Global Intelligence */}
          <Card className="bg-white/5 border border-white/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Global Intelligence Network</h3>
              <p className="text-white/70">
                Access to worldwide threat intelligence and geopolitical analysis for comprehensive risk assessment.
              </p>
            </CardContent>
          </Card>

          {/* Visual Intelligence - Now spans 2 columns */}
          <Card className="bg-white/5 border border-white/10 lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-indigo-400" />
                </div>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Advanced</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-4">Visual Intelligence</h3>
              <p className="text-white/70 mb-6">
                Advanced image and video analysis for surveillance, monitoring, and threat identification. 
                Our AI-powered visual recognition systems can detect patterns, objects, and anomalies in real-time.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-white/20 text-white/80">Image Analysis</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Video Processing</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Object Detection</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
