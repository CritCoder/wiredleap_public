import { Badge } from "@/components/ui/badge"
import { Shield, Users, Globe, Award } from "lucide-react"

export function SocialProof() {
  const stats = [
    {
      number: "500+",
      label: "Enterprise Clients",
      description: "Fortune 500 companies trust Wiredleap",
      icon: Shield,
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "99.9%",
      label: "Uptime SLA",
      description: "Mission-critical reliability guaranteed",
      icon: Award,
      color: "bg-green-100 text-green-600"
    },
    {
      number: "50+",
      label: "Countries",
      description: "Global intelligence network coverage",
      icon: Globe,
      color: "bg-purple-100 text-purple-600"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Round-the-clock security operations",
      icon: Users,
      color: "bg-orange-100 text-orange-600"
    }
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-alliance2 font-light">
            Trusted by Intelligence Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join leading government agencies and Fortune 500 companies who trust Wiredleap 
            for their most critical intelligence and security operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold mb-2">{stat.number}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-alliance2 font-light mb-8">Certifications & Partnerships</h3>
          <div className="flex justify-center items-center gap-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-gray-600" />
              </div>
              <span className="text-sm font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Globe className="w-8 h-8 text-gray-600" />
              </div>
              <span className="text-sm font-medium">FedRAMP Ready</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <span className="text-sm font-medium">Government Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
