import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Shield, Target } from "lucide-react"

export function ProblemStatement() {
  return (
    <section data-snap-section className="snap-start w-full min-h-screen bg-black text-white grid place-items-center">
      <div className="max-w-6xl mx-auto px-6 py-8 w-full">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-alliance2 font-light">
            The Intelligence Challenge
          </h2>
          <div className="space-y-2">
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              The world is overwatched and under-informed
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Cameras watch, analysts watch, worry systems silo, emergencies don't wait.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/5 border border-white/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Overfeed</h3>
              <p className="text-white/70">
                1 billion plus cameras but less than 20% truly intelligent
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-white/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Slow Response Times</h3>
              <p className="text-white/70">
                Manual analysis and disconnected systems coupled with human fatigue create delays that can mean the difference between prevention and disaster
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-white/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Silos</h3>
              <p className="text-white/70">
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
