"use client"

import { Card, CardContent } from "@/components/ui/card"
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
    <section className="w-full py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-alliance2 font-light">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground">
            Everything you need to know about Wiredleap's intelligence platform
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-border/50">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="px-5 py-4 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-medium text-sm md:text-base text-foreground/90">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <Card className="border border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-base font-medium mb-3">Still have questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our intelligence experts are here to help you understand how Wiredleap can 
                transform your security operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Badge variant="outline" className="px-3 py-1 text-xs">
                  📞 Schedule a Call
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-xs">
                  📧 Contact Sales
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-xs">
                  📋 Request Demo
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
