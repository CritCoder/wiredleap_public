import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SocialMediaIntelligence() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Social Intelligence
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Social Media Signal Processing</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          Monitor the digital pulse of your city. Real-time analysis of social media signals for early threat detection
          and public sentiment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">1M+</div>
          <div className="text-sm text-muted-foreground">Posts analyzed per hour</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
          <div className="text-sm text-muted-foreground">Languages supported</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-purple-500 mb-2">Real-time</div>
          <div className="text-sm text-muted-foreground">Threat detection</div>
        </Card>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Detection Capabilities</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Violence and threat indicators</li>
            <li>• Public safety concerns</li>
            <li>• Emergency situations</li>
            <li>• Crowd sentiment analysis</li>
            <li>• Misinformation detection</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Intelligence Outputs</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Real-time alerts and notifications</li>
            <li>• Sentiment trend analysis</li>
            <li>• Geographic threat mapping</li>
            <li>• Predictive risk assessment</li>
            <li>• Actionable intelligence reports</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
