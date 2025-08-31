import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Globe, Database, Zap } from "lucide-react"

export function OSINTCapabilities() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          OSINT++
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Superhuman Search Capabilities</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          OSINT++ goes beyond traditional open source intelligence. AI-powered search that finds connections humans
          miss.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="p-6 text-center">
          <Search className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <h3 className="font-semibold mb-2">Deep Search</h3>
          <p className="text-sm text-muted-foreground">AI-powered pattern recognition</p>
        </Card>

        <Card className="p-6 text-center">
          <Globe className="w-12 h-12 mx-auto mb-4 text-green-500" />
          <h3 className="font-semibold mb-2">Global Coverage</h3>
          <p className="text-sm text-muted-foreground">Worldwide data sources</p>
        </Card>

        <Card className="p-6 text-center">
          <Database className="w-12 h-12 mx-auto mb-4 text-purple-500" />
          <h3 className="font-semibold mb-2">Data Fusion</h3>
          <p className="text-sm text-muted-foreground">Multiple source correlation</p>
        </Card>

        <Card className="p-6 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-orange-500" />
          <h3 className="font-semibold mb-2">Real-time</h3>
          <p className="text-sm text-muted-foreground">Instant intelligence delivery</p>
        </Card>
      </div>

      <Card className="p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">OSINT++ vs Traditional OSINT</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3 text-muted-foreground">Traditional OSINT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Manual search processes</li>
              <li>• Limited data correlation</li>
              <li>• Time-intensive analysis</li>
              <li>• Human-dependent insights</li>
              <li>• Reactive intelligence</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">OSINT++</h4>
            <ul className="space-y-2 text-sm">
              <li>• AI-automated discovery</li>
              <li>• Multi-source data fusion</li>
              <li>• Real-time processing</li>
              <li>• Machine-generated insights</li>
              <li>• Predictive intelligence</li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  )
}
