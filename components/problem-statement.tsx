import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Shield, Target } from "lucide-react"

export function ProblemStatement() {
  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-alliance2 font-light">
            The Intelligence Challenge
          </h2>
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The world is overwatched and under-informed
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cameras watch, analysts watch, worry systems silo, emergencies don't wait.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Overfeed</h3>
              <p className="text-muted-foreground">
                1 billion plus cameras but less than 20% truly intelligent
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Slow Response Times</h3>
              <p className="text-muted-foreground">
                Manual analysis and disconnected systems coupled with human fatigue create delays that can mean the difference between prevention and disaster
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Silos</h3>
              <p className="text-muted-foreground">
                Valuable intelligence is trapped in isolated systems, preventing comprehensive 
                threat assessment and strategic planning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
