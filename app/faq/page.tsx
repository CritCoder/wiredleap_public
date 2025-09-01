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
          answer: "Wiredleap is an AI-powered development platform designed for developers, teams, and organizations who want to accelerate their coding workflow. It's perfect for both individual developers looking to enhance their productivity and teams seeking seamless collaboration tools."
        },
        {
          question: "How does Wiredleap's AI code review work?",
          answer: "Our AI analyzes your code in real-time, providing intelligent suggestions for improvements, catching potential bugs, and ensuring best practices. It learns from your coding patterns and adapts to your team's standards, making code reviews faster and more consistent."
        },
        {
          question: "What programming languages does Wiredleap support?",
          answer: "Wiredleap supports all major programming languages including JavaScript, TypeScript, Python, Java, C++, Go, Rust, and many more. Our AI models are trained on a diverse range of codebases to provide accurate suggestions across different languages and frameworks."
        }
      ]
    },
    {
      title: "Integrations & Setup",
      questions: [
        {
          question: "Can I integrate Wiredleap with my existing tools?",
          answer: "Yes! Wiredleap offers one-click integrations with popular development tools including GitHub, GitLab, VS Code, Slack, and many more. Our MCP connectivity allows you to easily manage and configure server access across your entire development stack."
        },
        {
          question: "How long does it take to set up Wiredleap?",
          answer: "Setup takes just a few minutes. Install our CLI or VS Code extension, connect your repository, and you're ready to start coding with AI assistance. No complex configuration required."
        },
        {
          question: "Do I need to change my existing workflow?",
          answer: "No, Wiredleap integrates seamlessly with your existing workflow. You can continue using your preferred tools and processes while getting AI assistance and real-time previews."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      questions: [
        {
          question: "What's included in the free plan?",
          answer: "The free plan includes real-time code suggestions, basic integrations, single MCP server connection, up to 2 AI coding agents, and Vercel deployments with Wiredleap branding. It's perfect for individual developers getting started."
        },
        {
          question: "Can I upgrade or downgrade my plan anytime?",
          answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle. We also offer a 30-day money-back guarantee."
        },
        {
          question: "Do you offer discounts for teams?",
          answer: "Yes, we offer volume discounts for teams of 5 or more users. Contact our sales team for custom pricing and enterprise features."
        }
      ]
    },
    {
      title: "Security & Privacy",
      questions: [
        {
          question: "Is my code secure with Wiredleap?",
          answer: "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data transmission, and compliance with industry standards. Your code never leaves your secure environment without your explicit permission, and we offer on-premises deployment options for enterprise customers."
        },
        {
          question: "Does Wiredleap store my code?",
          answer: "No, Wiredleap does not store your source code. We process code in memory for AI analysis and discard it immediately. We only store metadata and configuration settings."
        },
        {
          question: "What compliance standards does Wiredleap meet?",
          answer: "Wiredleap is SOC 2 Type II compliant and follows GDPR guidelines. We're also working towards additional compliance certifications based on customer needs."
        }
      ]
    },
    {
      title: "Technical",
      questions: [
        {
          question: "How do parallel coding agents work?",
          answer: "Our parallel coding agents can work on different parts of your codebase simultaneously, solving complex problems faster than traditional single-threaded approaches. You can launch multiple agents to handle different tasks like bug fixes, feature development, and code optimization concurrently."
        },
        {
          question: "What's the difference between real-time previews and traditional builds?",
          answer: "Real-time previews show your changes instantly without waiting for full builds or deployments. They use intelligent caching and incremental updates to provide immediate feedback, making development much faster and more interactive."
        },
        {
          question: "Can I use Wiredleap offline?",
          answer: "Some features work offline, but for the full AI-powered experience, an internet connection is required. We're working on more offline capabilities for future releases."
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Wiredleap and how it can transform your development workflow.
          </p>
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

