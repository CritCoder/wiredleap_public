import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function VideoSignals() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Video Intelligence
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Next-Generation Video Cognition</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          Beyond traditional video analytics. Our AI understands context, predicts behavior, and identifies threats
          before they materialize.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-4">Traditional Analytics</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Object detection and tracking</li>
            <li>• Motion analysis</li>
            <li>• Face recognition</li>
            <li>• License plate reading</li>
            <li>• Basic behavior analysis</li>
          </ul>
        </Card>

        <Card className="p-8 border-primary">
          <h3 className="text-xl font-semibold mb-4">Next-Gen Cognition</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Crowd surge prediction</li>
            <li>• Weapon detection</li>
            <li>• Fire and smoke detection</li>
            <li>• Behavioral anomaly prediction</li>
            <li>• Context-aware threat assessment</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
