import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Shield, Lock, Eye, FileText, Users, Clock } from "lucide-react"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        "Account information including name, email address, and organization details",
        "Usage data and analytics about how you interact with our platform",
        "Technical information such as IP addresses, browser type, and device information",
        "Code and project data necessary to provide our AI-powered services",
        "Communication records when you contact our support team"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "Provide and improve our AI-powered intelligence platform",
        "Authenticate users and prevent unauthorized access",
        "Analyze usage patterns to enhance platform performance",
        "Send important service updates and security notifications",
        "Provide customer support and respond to inquiries",
        "Comply with legal obligations and protect against threats"
      ]
    },
    {
      title: "Data Security",
      icon: Shield,
      content: [
        "End-to-end encryption for all data transmission",
        "SOC 2 Type II compliant infrastructure",
        "Regular security audits and penetration testing",
        "Multi-factor authentication and access controls",
        "Secure data centers with 24/7 monitoring",
        "Employee security training and background checks"
      ]
    },
    {
      title: "Data Retention",
      icon: Clock,
      content: [
        "Account data retained for the duration of your subscription",
        "Usage logs retained for 90 days for security and compliance",
        "Code analysis data processed in memory and not persistently stored",
        "Backup data securely deleted within 30 days of account closure",
        "Legal compliance data retained as required by applicable law"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-alliance2">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Your privacy and data security are fundamental to everything we do at Wiredleap.
          </p>
          <div className="text-sm text-muted-foreground">
            <strong>Last updated:</strong> January 1, 2025
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wiredleap Technology Pvt. Ltd.. ("Wiredleap," "we," "our," or "us") is committed to protecting your privacy 
                  and maintaining the security of your personal information. This Privacy Policy explains how we collect, 
                  use, protect, and share information when you use our AI-powered intelligence platform and services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a provider of enterprise-grade intelligence solutions, we understand the critical importance of data 
                  security and compliance. This policy reflects our dedication to transparency and your control over your information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
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
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Data Sharing Section */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Data Sharing and Third Parties</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Service Providers:</strong> Trusted third-party vendors who help us operate our platform under strict confidentiality agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with advance notice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Security:</strong> To protect against fraud, abuse, or threats to platform security</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Your Rights and Choices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Access & Portability</h4>
                  <p className="text-sm text-muted-foreground">Request copies of your personal data in a portable format</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Correction</h4>
                  <p className="text-sm text-muted-foreground">Update or correct inaccurate personal information</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Deletion</h4>
                  <p className="text-sm text-muted-foreground">Request deletion of your account and associated data</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Processing Restriction</h4>
                  <p className="text-sm text-muted-foreground">Limit how we process your personal information</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Objection</h4>
                  <p className="text-sm text-muted-foreground">Object to certain processing of your personal data</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Opt-out</h4>
                  <p className="text-sm text-muted-foreground">Unsubscribe from marketing communications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Questions About Privacy?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have questions about this Privacy Policy or how we handle your data, please contact our Data Protection Officer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Email:</strong>
                <div className="text-muted-foreground">privacy@wiredleap.com</div>
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