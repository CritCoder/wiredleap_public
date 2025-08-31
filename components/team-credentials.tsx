import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Shield } from "lucide-react"

export function TeamCredentials() {
  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Leadership
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">World-Class Team & Credentials</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
          Led by industry veterans with proven track records in AI, public safety, and smart city technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
            RK
          </div>
          <h3 className="font-semibold mb-2">Ravi Kauri</h3>
          <p className="text-sm text-muted-foreground">CEO & Co-founder</p>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
            SC
          </div>
          <h3 className="font-semibold mb-2">Subhash Chaudhary</h3>
          <p className="text-sm text-muted-foreground">CTO & Co-founder</p>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
            SS
          </div>
          <h3 className="font-semibold mb-2">Suumit Shah</h3>
          <p className="text-sm text-muted-foreground">Co-founder</p>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <Award className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <h3 className="font-semibold mb-2">ISO Certified</h3>
          <p className="text-sm text-muted-foreground">International quality standards</p>
        </Card>

        <Card className="p-6 text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-green-500" />
          <h3 className="font-semibold mb-2">Government Recognized</h3>
          <p className="text-sm text-muted-foreground">Trusted by public sector</p>
        </Card>

        <Card className="p-6 text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <h3 className="font-semibold mb-2">AI Research Published</h3>
          <p className="text-sm text-muted-foreground">Peer-reviewed publications</p>
        </Card>
      </div>
    </section>
  )
}
