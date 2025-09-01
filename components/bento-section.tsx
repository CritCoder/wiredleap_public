import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Eye, Globe, Shield, TrendingUp } from "lucide-react"

export function BentoSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-alliance2 font-light">
            Advanced Intelligence Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Wiredleap combines cutting-edge AI with comprehensive data integration to deliver 
            actionable intelligence for enterprise security and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Signal Intelligence Engine */}
          <Card className="border border-border/50 lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <Badge variant="secondary">Core Feature</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-4">Signal Intelligence Engine</h3>
              <p className="text-muted-foreground mb-6">
                Advanced pattern recognition and anomaly detection across multiple data streams, 
                providing real-time threat assessment and predictive analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Pattern Recognition</Badge>
                <Badge variant="outline">Anomaly Detection</Badge>
                <Badge variant="outline">Predictive Analytics</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Dashboards */}
          <Card className="border border-border/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Live Intelligence Dashboards</h3>
              <p className="text-muted-foreground">
                Real-time monitoring and visualization of threats, patterns, and operational metrics.
              </p>
            </CardContent>
          </Card>

          {/* Data Integration */}
          <Card className="border border-border/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Multi-Source Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly connect and analyze data from internal systems, external feeds, and open sources.
              </p>
            </CardContent>
          </Card>

          {/* Threat Detection */}
          <Card className="border border-border/50 lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <Badge variant="secondary">Advanced</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-4">Proactive Threat Detection</h3>
              <p className="text-muted-foreground mb-6">
                AI-powered threat hunting and early warning systems that identify risks before they materialize, 
                enabling proactive response and mitigation strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Threat Hunting</Badge>
                <Badge variant="outline">Early Warning</Badge>
                <Badge variant="outline">Risk Assessment</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Global Intelligence */}
          <Card className="border border-border/50">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Global Intelligence Network</h3>
              <p className="text-muted-foreground">
                Access to worldwide threat intelligence and geopolitical analysis for comprehensive risk assessment.
              </p>
            </CardContent>
          </Card>

          {/* Visual Intelligence - Now spans 2 columns */}
          <Card className="border border-border/50 lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-indigo-600" />
                </div>
                <Badge variant="secondary">Advanced</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-4">Visual Intelligence</h3>
              <p className="text-muted-foreground mb-6">
                Advanced image and video analysis for surveillance, monitoring, and threat identification. 
                Our AI-powered visual recognition systems can detect patterns, objects, and anomalies in real-time.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Image Analysis</Badge>
                <Badge variant="outline">Video Processing</Badge>
                <Badge variant="outline">Object Detection</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
