"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General",
      questions: [
        {
          question: "What is Wiredleap and who is it for?",
          answer: "Wiredleap is an AI‑powered surveillance intelligence platform for public safety agencies, enterprises, and critical infrastructure operators. It delivers real‑time monitoring, threat detection, and incident response across cameras and sensors."
        },
        {
          question: "How does AI threat detection work?",
          answer: "Our models analyze live video to detect people, vehicles, and anomalous behavior. You can define zones, rules, and dwell times to trigger alerts, which are enriched with context and routed to the right teams."
        },
        {
          question: "What data sources do you support?",
          answer: "We support RTSP and ONVIF cameras, recorded video, drones and mobile feeds, as well as sensor events via MQTT/REST. Integrations include SIEM/VMS and alerting tools."
        }
      ]
    },
    {
      title: "Integrations & Setup",
      questions: [
        {
          question: "Can I integrate Wiredleap with our existing tools?",
          answer: "Yes. We offer guided integrations for Splunk, QRadar, Genetec, Milestone, PagerDuty, Slack, and more. Open protocols like RTSP, ONVIF, MQTT, webhooks, and syslog are supported."
        },
        {
          question: "How long does deployment take?",
          answer: "Typical deployments take 2–4 weeks depending on camera fleet size and integrations. Edge gateways and bulk onboarding tools accelerate large rollouts."
        },
        {
          question: "Do we need to change our workflow?",
          answer: "No. Wiredleap integrates with your existing SIEM/VMS and notification systems. Operators use familiar views while gaining real‑time AI alerts."
        }
      ]
    },
    // Pricing & Plans category removed
    {
      title: "Security & Privacy",
      questions: [
        {
          question: "Is our video data secure?",
          answer: "Yes. We use end‑to‑end encryption in transit and at rest, with RBAC/SSO and audit logs. On‑prem and air‑gapped deployments are available for sensitive environments."
        },
        {
          question: "Do you store our video?",
          answer: "By default we store event metadata and snapshots as configured. Full video retention is optional and policy‑driven based on your requirements."
        },
        {
          question: "What compliance standards do you meet?",
          answer: "Wiredleap follows SOC 2 and GDPR requirements and aligns to ISO 27001 practices. Additional certifications can be supported for enterprise and government deployments."
        }
      ]
    },
    {
      title: "Technical",
      questions: [
        {
          question: "How does multi‑stream processing scale?",
          answer: "We parallelize ingest and inference across nodes with edge acceleration where needed, maintaining low latency and graceful degradation under load."
        },
        {
          question: "What’s the difference between real‑time and historical analytics?",
          answer: "Real‑time monitoring powers immediate alerts and dashboards, while historical analytics provide trend insights, heatmaps, and model tuning."
        },
        {
          question: "Can Wiredleap run offline at the edge?",
          answer: "Yes. Edge gateways process streams locally and sync events when connectivity is restored, enabling remote or bandwidth‑constrained sites."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Everything you need to know about Wiredleap and how it transforms security operations.</p>
        </section>

        {/* FAQ Categories */}
        <section className="mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Still Have Questions */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
      >
        <span className="font-medium text-foreground">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
