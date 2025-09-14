import { Badge } from "@/components/ui/badge"
import { Shield, Users, Globe, Award } from "lucide-react"
import { Soc2BadgeIcon, IsoBadgeIcon, FedrampBadgeIcon, GovernmentBadgeIcon } from "@/components/icons/cert-badges"

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
    <section data-snap-section className="snap-start w-full min-h-screen bg-black text-white grid place-items-center">
      <div className="max-w-6xl mx-auto px-6 py-8 w-full">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-alliance2 font-light">
            Trusted by Intelligence Leaders
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Join leading government agencies and Fortune 500 companies who trust Wiredleap 
            for their most critical intelligence and security operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-6 h-6 text-white/80" />
              </div>
              <div className="text-2xl font-bold mb-2">{stat.number}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-white/70">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Subtle separator */}
        <div className="mt-12 mb-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-alliance2 font-light mb-8">Certifications & Partnerships</h3>
          <div className="flex justify-center items-start gap-12">
            <div className="flex flex-col items-center gap-3">
              <Soc2BadgeIcon size={72} />
              <span className="text-sm font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <IsoBadgeIcon size={72} />
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FedrampBadgeIcon size={72} />
              <span className="text-sm font-medium">FedRAMP Ready</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <GovernmentBadgeIcon size={72} />
              <span className="text-sm font-medium">Government Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
