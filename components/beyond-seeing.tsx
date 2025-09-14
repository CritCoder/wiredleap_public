import { Card } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

export function BeyondSeeing() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Beyond Seeing: The Signal Age</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          WiredLeap begins where the Information Age ends. We don't just process data - we understand signals and
          predict the future.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-semibold">Traditional Analytics</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Reactive - responds after events occur</li>
            <li>• Siloed - analyzes data streams separately</li>
            <li>• Historical - focuses on what happened</li>
            <li>• Limited - constrained by human interpretation</li>
            <li>• Delayed - minutes to hours response time</li>
          </ul>
        </Card>

        <Card className="p-8 border-primary">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-semibold">WiredLeap Intelligence</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Predictive - anticipates events before they happen</li>
            <li>• Unified - fuses multiple signal streams</li>
            <li>• Future-focused - predicts what will happen</li>
            <li>• AI-powered - superhuman pattern recognition</li>
            <li>• Real-time - seconds response time</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
