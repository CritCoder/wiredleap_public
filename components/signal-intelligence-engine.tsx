import { Card, CardContent } from "@/components/ui/card"
import { Video, MessageSquare, Search, Brain } from "lucide-react"

export function SignalIntelligenceEngine() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Signal Intelligence Engine</h2>
          <p className="text-hero text-foreground/70 max-w-3xl mx-auto">
            Our advanced AI processes multiple data streams simultaneously, providing comprehensive intelligence insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 text-center border border-border/50 hover:border-border transition-colors">
            <Video className="w-8 h-8 mx-auto mb-3 text-blue-500" />
            <h3 className="text-base font-semibold mb-2">Video Signals</h3>
            <p className="text-xs text-muted-foreground">Traditional analytics + next-gen cognition</p>
          </Card>

          <Card className="p-4 text-center border border-border/50 hover:border-border transition-colors">
            <MessageSquare className="w-8 h-8 mx-auto mb-3 text-green-500" />
            <h3 className="text-base font-semibold mb-2">Social Media</h3>
            <p className="text-xs text-muted-foreground">Real-time sentiment and trend analysis</p>
          </Card>

          <Card className="p-4 text-center border border-border/50 hover:border-border transition-colors">
            <Search className="w-8 h-8 mx-auto mb-3 text-purple-500" />
            <h3 className="text-base font-semibold mb-2">OSINT++</h3>
            <p className="text-xs text-muted-foreground">Superhuman search capabilities</p>
          </Card>

          <Card className="p-4 text-center border border-border/50 hover:border-border transition-colors">
            <Brain className="w-8 h-8 mx-auto mb-3 text-orange-500" />
            <h3 className="text-base font-semibold mb-2">Predictive AI</h3>
            <p className="text-xs text-muted-foreground">Anticipates events before they happen</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
