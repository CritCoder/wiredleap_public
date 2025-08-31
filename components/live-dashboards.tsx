import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LiveDashboards() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Live Monitoring
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Real-Time Intelligence Dashboards</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          Six specialized dashboards providing comprehensive situational awareness for smart cities and public safety.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-3">City Overview</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Comprehensive city-wide monitoring with real-time metrics and alerts.
          </p>
          <div className="text-xs text-muted-foreground">• Population density • Traffic flow • Emergency status</div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Public Safety</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Real-time threat detection and emergency response coordination.
          </p>
          <div className="text-xs text-muted-foreground">• Threat alerts • Response times • Resource allocation</div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Traffic Management</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Intelligent traffic monitoring and congestion prediction.
          </p>
          <div className="text-xs text-muted-foreground">
            • Traffic flow • Congestion prediction • Route optimization
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Social Sentiment</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Real-time social media monitoring and sentiment analysis.
          </p>
          <div className="text-xs text-muted-foreground">• Sentiment trends • Public opinion • Social alerts</div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Environmental</h3>
          <p className="text-sm text-muted-foreground mb-4">Environmental monitoring and air quality management.</p>
          <div className="text-xs text-muted-foreground">• Air quality • Weather patterns • Environmental alerts</div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Analytics Hub</h3>
          <p className="text-sm text-muted-foreground mb-4">Advanced analytics and predictive intelligence center.</p>
          <div className="text-xs text-muted-foreground">• Predictive models • Data insights • Custom reports</div>
        </Card>
      </div>
    </section>
  )
}
