import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MarketImpact() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Market Impact
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Deployed at Scale</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          Already protecting millions of citizens across multiple cities with proven results and measurable impact.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
          <div className="text-sm text-muted-foreground">Cities Deployed</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-green-500 mb-2">20M+</div>
          <div className="text-sm text-muted-foreground">Citizens Protected</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
          <div className="text-sm text-muted-foreground">Continuous Monitoring</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">99.9%</div>
          <div className="text-sm text-muted-foreground">System Uptime</div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-4">Current Deployments</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Smart city infrastructure monitoring</li>
            <li>• Public safety and emergency response</li>
            <li>• Traffic management systems</li>
            <li>• Social media threat detection</li>
            <li>• Environmental monitoring</li>
          </ul>
        </Card>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>• 40% faster emergency response times</li>
            <li>• 60% reduction in false alarms</li>
            <li>• 25% improvement in traffic flow</li>
            <li>• 80% faster threat detection</li>
            <li>• 90% accuracy in predictions</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
