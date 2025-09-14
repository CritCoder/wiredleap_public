"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating: number
}

export function TestimonialGridSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: TestimonialCardProps[] = [
    {
      quote: "Wiredleap has revolutionized our threat detection capabilities. The AI-powered intelligence platform gives us unprecedented visibility into emerging threats.",
      author: "Sarah Chen",
      role: "Chief Information Security Officer",
      company: "Global Financial Corp",
      avatar: "/images/avatars/sarah-chen.png",
      rating: 5
    },
    {
      quote: "The real-time analytics and predictive threat detection have transformed our security operations. We've reduced response times by 80%.",
      author: "Michael Rodriguez",
      role: "Director of Security",
      company: "Defense Systems Inc",
      avatar: "/images/avatars/michael-rodriguez.png",
      rating: 5
    },
    {
      quote: "Enterprise-grade security with the performance we need for mission-critical operations. Wiredleap is a game-changer for intelligence teams.",
      author: "Dr. Emily Watson",
      role: "Head of Intelligence",
      company: "National Security Agency",
      avatar: "/images/avatars/emily-watson.png",
      rating: 5
    },
    {
      quote: "The signal intelligence engine and multi-source integration capabilities are unmatched. This platform has become essential to our operations.",
      author: "James Thompson",
      role: "Security Operations Manager",
      company: "Critical Infrastructure Corp",
      avatar: "/images/avatars/james-thompson.png",
      rating: 5
    },
    {
      quote: "Wiredleap's proactive threat detection and global intelligence network provide the comprehensive coverage we need for our international operations.",
      author: "Lisa Park",
      role: "VP of Security",
      company: "International Defense Group",
      avatar: "/images/avatars/lisa-park.png",
      rating: 5
    },
    {
      quote: "The visual intelligence capabilities and advanced analytics have given us insights we never had before. This is the future of security intelligence.",
      author: "David Kim",
      role: "Chief Technology Officer",
      company: "Cyber Security Solutions",
      avatar: "/images/avatars/david-kim.png",
      rating: 5
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
            Hear how security professionals and intelligence teams achieve unprecedented threat detection 
            and operational efficiency using Wiredleap's advanced AI-powered platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-white/70">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-white/5 border border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Join the Intelligence Revolution</h3>
              <p className="text-white/70 mb-6">
                See how Wiredleap is transforming security operations for government agencies, 
                Fortune 500 companies, and critical infrastructure organizations worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="border-white/20 text-white/80">Government Approved</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Fortune 500 Trusted</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Enterprise Grade</Badge>
                <Badge variant="outline" className="border-white/20 text-white/80">Mission Critical</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
