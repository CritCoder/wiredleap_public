import { Card } from "@/components/ui/card"

export function ProblemStatement() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Information Age Has Reached Its Limit</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          We're drowning in data but starving for intelligence. Traditional systems can only see what happened, not
          what's about to happen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-red-500 mb-2">2.5 Quintillion</div>
          <div className="text-sm text-muted-foreground">Bytes of data created daily</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">90%</div>
          <div className="text-sm text-muted-foreground">Of data goes unanalyzed</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-yellow-500 mb-2">Minutes</div>
          <div className="text-sm text-muted-foreground">Response time to critical events</div>
        </Card>
      </div>
    </section>
  )
}
