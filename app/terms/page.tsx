import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { FileText, Shield, Scale, Clock, AlertTriangle, Users } from "lucide-react"

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: Scale,
      content: "By accessing or using Wiredleap's AI-powered intelligence platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not access or use our services. These terms apply to all users, including individuals, organizations, and government entities."
    },
    {
      title: "Service Description",
      icon: FileText,
      content: "Wiredleap provides AI-powered intelligence solutions for enterprise operations, including but not limited to threat detection, signal intelligence, real-time analytics, and strategic decision-making tools. Our platform is designed for authorized use by government agencies, enterprise organizations, and qualified security professionals."
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: "You are responsible for maintaining the security of your account credentials, ensuring compliance with applicable laws and regulations, using the service only for authorized and lawful purposes, and protecting any sensitive or classified information processed through our platform."
    },
    {
      title: "Prohibited Uses",
      icon: AlertTriangle,
      content: "You may not use our services for any unlawful, harmful, or malicious activities, including but not limited to unauthorized surveillance, violation of privacy rights, circumvention of security measures, or any activities that could compromise national security or public safety."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-alliance2">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Please read these terms carefully before using Wiredleap's intelligence platform.
          </p>
          <div className="text-sm text-muted-foreground">
            <strong>Last updated:</strong> January 1, 2025
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of Wiredleap Technologies, Inc.'s 
              ("Wiredleap," "we," "our," or "us") AI-powered intelligence platform and related services. 
              As a provider of enterprise-grade intelligence solutions, we maintain strict terms to ensure 
              compliance with national security requirements and industry regulations.
            </p>
          </div>
        </section>

        {/* Main Sections */}
        <section className="mb-16">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{section.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Terms */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Data and Security */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold text-foreground">Data and Security</h4>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>All data transmission is encrypted end-to-end</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>SOC 2 Type II and ISO 27001 compliance maintained</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>FedRAMP authorization for government use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Regular security audits and vulnerability assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Incident response procedures and reporting</span>
                </li>
              </ul>
            </div>

            {/* Service Availability */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold text-foreground">Service Availability</h4>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>99.9% uptime service level agreement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Scheduled maintenance notifications provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>24/7 enterprise support for critical systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Disaster recovery and business continuity plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Redundant infrastructure across multiple regions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Intellectual Property Rights</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Wiredleap retains all rights, title, and interest in and to the platform, including all 
                intellectual property rights. You retain all rights to your data and content, while granting 
                us limited rights to process your data solely to provide our services.
              </p>
              <p>
                Our AI models and algorithms are proprietary and protected by trade secrets, patents, and 
                copyrights. Reverse engineering, decompilation, or attempts to extract our proprietary 
                technology are strictly prohibited.
              </p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Limitation of Liability</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>DISCLAIMER:</strong> WIREDLEAP PROVIDES THE PLATFORM "AS IS" WITHOUT WARRANTIES OF ANY KIND. 
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WIREDLEAP DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED.
              </p>
              <p>
                <strong>LIMITATION:</strong> IN NO EVENT SHALL WIREDLEAP BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, 
                DATA, USE, OR GOODWILL.
              </p>
              <p>
                <strong>MAXIMUM LIABILITY:</strong> OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU 
                FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Account Termination</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">By You</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cancel anytime with 30-day notice</li>
                  <li>• Data export available upon request</li>
                  <li>• Refunds subject to our refund policy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">By Wiredleap</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Violation of terms or acceptable use</li>
                  <li>• Non-payment or breach of contract</li>
                  <li>• Security or compliance violations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Governing Law and Disputes</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                These Terms are governed by the laws of the State of Delaware and the United States, 
                without regard to conflict of law principles. Any disputes will be resolved through 
                binding arbitration in San Francisco, California.
              </p>
              <p>
                For government customers, disputes may be subject to special procedures as outlined 
                in your specific contract or applicable regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Questions About These Terms?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have questions about these Terms of Service or need clarification on any provision, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Email:</strong>
                <div className="text-muted-foreground">legal@wiredleap.com</div>
              </div>
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Address:</strong>
                <div className="text-muted-foreground">123 Innovation Drive<br/>San Francisco, CA 94105</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}