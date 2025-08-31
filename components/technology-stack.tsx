import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TechnologyStack() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Technology
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Enterprise-Grade Platform</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          Built on cutting-edge AI and cloud technologies for maximum scalability, reliability, and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <h3 className="font-semibold mb-3">AI & Machine Learning</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Deep Learning Models</li>
            <li>• Computer Vision</li>
            <li>• Natural Language Processing</li>
            <li>• Predictive Analytics</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Cloud Infrastructure</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Multi-cloud deployment</li>
            <li>• Auto-scaling architecture</li>
            <li>• Edge computing</li>
            <li>• 99.9% uptime SLA</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Security & Compliance</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• End-to-end encryption</li>
            <li>• SOC 2 compliance</li>
            <li>• GDPR compliant</li>
            <li>• Zero-trust architecture</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Data Processing</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Real-time streaming</li>
            <li>• Petabyte-scale storage</li>
            <li>• Data lake architecture</li>
            <li>• Advanced analytics</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Integration</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• RESTful APIs</li>
            <li>• Webhook support</li>
            <li>• SDK libraries</li>
            <li>• Custom connectors</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Monitoring</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Real-time dashboards</li>
            <li>• Custom alerts</li>
            <li>• Performance metrics</li>
            <li>• Audit trails</li>
          </ul>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Request Technical Documentation
        </Button>
      </div>
    </section>
  )
}
