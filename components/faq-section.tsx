"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What makes Wiredleap different from other intelligence platforms?",
      answer: "Wiredleap combines advanced AI with real-time data fusion, providing predictive threat detection and actionable intelligence that traditional platforms can't match. Our platform integrates multiple data sources and uses machine learning to identify patterns before they become threats."
    },
    {
      question: "How does Wiredleap ensure data security and compliance?",
      answer: "We maintain the highest security standards with SOC 2 Type II, ISO 27001, and FedRAMP certifications. All data is encrypted in transit and at rest, with enterprise-grade access controls and audit trails. We're also GDPR compliant and HIPAA ready."
    },
    {
      question: "What types of organizations use Wiredleap?",
      answer: "Wiredleap serves government agencies, Fortune 500 companies, financial institutions, defense contractors, and critical infrastructure organizations. Our platform is designed for mission-critical operations requiring real-time intelligence and threat detection."
    },
    {
      question: "How quickly can we deploy Wiredleap in our environment?",
      answer: "Enterprise deployments typically take 2-4 weeks, depending on your infrastructure and integration requirements. We provide dedicated support throughout the implementation process, including custom training and configuration."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 dedicated support with former intelligence professionals. This includes real-time monitoring, threat analysis, incident response, and ongoing platform optimization. Enterprise clients receive dedicated account managers and priority support."
    },
    {
      question: "Can Wiredleap integrate with our existing security tools?",
      answer: "Yes, Wiredleap integrates with most major SIEM platforms, threat intelligence feeds, and security tools through our comprehensive API. We also support custom integrations for specialized requirements."
    }
  ]

  return (
    <section data-snap-section className="snap-start w-full min-h-screen bg-black text-white grid place-items-center">
      <div className="max-w-3xl mx-auto px-6 py-8 w-full">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-alliance2 font-light">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-white/70">
            Everything you need to know about Wiredleap's intelligence platform
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white/5 border border-white/10">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="px-5 py-4 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-medium text-sm md:text-base text-white/90">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4">
                  <p className="text-sm text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>

        <div className="mt-12">
          <div className="max-w-3xl mx-auto">
            {/* Gradient border wrapper for premium feel */}
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20">
              <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
                {/* subtle background accent */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70%] h-48 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]" />
                </div>
                <CardContent className="relative p-8 md:p-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-alliance2 font-light text-white mb-4">
                    Still have questions?
                  </h3>
                  <p className="text-base text-white/80 max-w-2xl mx-auto mb-6">
                    Our intelligence experts are here to help you understand how Wiredleap can transform your security operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild className="rounded-xl px-6 md:px-8 py-3 bg-white text-black hover:bg-white/90 font-medium">
                      <a href="#contact">📞 Schedule a Call</a>
                    </Button>
                    <Button asChild variant="ghost" className="rounded-xl h-12 px-6 md:px-8 text-white hover:bg-white/10 font-medium">
                      <a href="#sales">📧 Contact Sales</a>
                    </Button>
                    <Button asChild variant="ghost" className="rounded-xl h-12 px-6 md:px-8 text-white hover:bg-white/10 font-medium">
                      <a href="#demo">📋 Request Demo</a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
