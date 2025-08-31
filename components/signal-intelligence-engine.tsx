import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, MessageSquare, Search, Brain } from "lucide-react"

export function SignalIntelligenceEngine() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Core Platform
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Unified Signal Intelligence Engine</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          The brain behind the sensors. Our platform fuses video and social media signals into actionable intelligence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <Video className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <h3 className="font-semibold mb-2">Video Signals</h3>
          <p className="text-sm text-muted-foreground">Traditional analytics + next-gen cognition</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-green-500" />
          <h3 className="font-semibold mb-2">Social Media</h3>
          <p className="text-sm text-muted-foreground">Real-time sentiment and trend analysis</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <Search className="w-12 h-12 mx-auto mb-4 text-purple-500" />
          <h3 className="font-semibold mb-2">OSINT++</h3>
          <p className="text-sm text-muted-foreground">Superhuman search capabilities</p>
        </Card>

        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <Brain className="w-12 h-12 mx-auto mb-4 text-orange-500" />
          <h3 className="font-semibold mb-2">Predictive AI</h3>
          <p className="text-sm text-muted-foreground">Anticipates events before they happen</p>
        </Card>
      </div>
    </section>
  )
}
