import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { FileText, Shield, Globe, Users, Lock, Scale } from "lucide-react"

export default function DataProcessingAgreementPage() {
  const sections = [
    {
      title: "Scope and Purpose",
      icon: Globe,
      content: "This Data Processing Agreement (DPA) governs the processing of personal data by Wiredleap Technologies, Inc. on behalf of our enterprise customers. This agreement ensures compliance with GDPR, CCPA, and other applicable data protection regulations while maintaining the security and confidentiality of your data."
    },
    {
      title: "Data Processing Activities",
      icon: FileText,
      content: "Wiredleap processes personal data solely for the purpose of providing our AI-powered intelligence platform services. Processing activities include data analysis, threat detection, pattern recognition, and generating intelligence insights as specified in your service agreement."
    },
    {
      title: "Security Measures",
      icon: Shield,
      content: "We implement comprehensive technical and organizational security measures including end-to-end encryption, access controls, audit logging, SOC 2 Type II compliance, and regular security assessments to protect personal data against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      title: "Data Subject Rights",
      icon: Users,
      content: "We support your obligations to respond to data subject requests including access, rectification, erasure, data portability, and objection rights. We provide necessary assistance and technical measures to facilitate these rights in accordance with applicable data protection laws."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-alliance2">
            Data Processing Agreement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Our commitment to secure and compliant data processing for enterprise customers.
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
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Legal Framework</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This Data Processing Agreement ("DPA") forms an integral part of your service agreement with 
                  Wiredleap Technologies, Inc. ("Wiredleap," "Processor") and governs the processing of personal 
                  data performed by Wiredleap on behalf of the Customer ("Controller").
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This DPA ensures compliance with applicable data protection regulations including the EU General 
                  Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant 
                  privacy laws where our services are used.
                </p>
              </div>
            </div>
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
            {/* Categories of Data */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Categories of Personal Data</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Identity Data:</strong> Names, usernames, employee IDs, job titles
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Contact Data:</strong> Email addresses, phone numbers, business addresses
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Technical Data:</strong> IP addresses, device information, system logs
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Usage Data:</strong> Platform interactions, feature usage, analytics data
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Content Data:</strong> Files, documents, and data uploaded to the platform
                  </div>
                </li>
              </ul>
            </div>

            {/* Data Subjects */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Categories of Data Subjects</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Employees:</strong> Customer's employees using our platform
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Contractors:</strong> Third-party contractors authorized by customer
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Agents:</strong> Government agents and authorized personnel
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>End Users:</strong> Individuals whose data may be analyzed through the platform
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Contacts:</strong> Business contacts and communication partners
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Technical and Organizational Measures</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technical Safeguards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end encryption (AES-256)</li>
                  <li>• Transport Layer Security (TLS 1.3)</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Intrusion detection systems</li>
                  <li>• Automated security monitoring</li>
                  <li>• Regular vulnerability assessments</li>
                  <li>• Secure data centers (Tier III/IV)</li>
                  <li>• Backup and disaster recovery</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Organizational Measures</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Data Protection Officer (DPO)</li>
                  <li>• Privacy by design principles</li>
                  <li>• Staff security training</li>
                  <li>• Access control and authorization</li>
                  <li>• Incident response procedures</li>
                  <li>• Regular compliance audits</li>
                  <li>• Vendor due diligence</li>
                  <li>• Data retention policies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* International Transfers */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">International Data Transfers</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Primary Processing:</strong> All personal data is primarily processed within the United States 
                using secure, SOC 2 Type II certified infrastructure.
              </p>
              <p>
                <strong>Transfer Mechanisms:</strong> Where international transfers are necessary, we rely on:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• EU-US Data Privacy Framework certification</li>
                <li>• Standard Contractual Clauses (SCCs) approved by EU Commission</li>
                <li>• Adequacy decisions by relevant data protection authorities</li>
                <li>• Binding Corporate Rules where applicable</li>
              </ul>
              <p>
                <strong>Additional Safeguards:</strong> We implement supplementary measures including technical 
                safeguards, contractual protections, and regular compliance assessments to ensure data protection 
                equivalent to that required under applicable laws.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-processors */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Sub-processors</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Wiredleap may engage trusted sub-processors to assist in providing our services. We maintain 
                strict oversight and contractual requirements for all sub-processors.
              </p>
              <div className="bg-background rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-4">Current Sub-processors</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <div>
                      <strong className="text-foreground">Amazon Web Services (AWS)</strong>
                      <p className="text-sm text-muted-foreground">Cloud infrastructure and hosting services</p>
                    </div>
                    <span className="text-xs text-muted-foreground">United States</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <div>
                      <strong className="text-foreground">Cloudflare</strong>
                      <p className="text-sm text-muted-foreground">Security and content delivery network</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Global</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <div>
                      <strong className="text-foreground">MongoDB Atlas</strong>
                      <p className="text-sm text-muted-foreground">Database services</p>
                    </div>
                    <span className="text-xs text-muted-foreground">United States</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Data Protection Inquiries</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For questions about data processing, compliance, or to exercise data subject rights, contact our Data Protection Officer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">DPO Email:</strong>
                <div className="text-muted-foreground">dpo@wiredleap.com</div>
              </div>
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Privacy Team:</strong>
                <div className="text-muted-foreground">privacy@wiredleap.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}