import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Shield, FileCheck, Globe, Users, Award, Eye, Lock, Scale } from "lucide-react"

export default function CompliancePage() {
  const standards = [
    {
      title: "GDPR Compliance",
      icon: Globe,
      region: "European Union",
      description: "Full compliance with General Data Protection Regulation",
      features: ["Data minimization", "Right to erasure", "Privacy by design", "Data protection officer", "Regular audits"]
    },
    {
      title: "CCPA/CPRA Compliance",
      icon: Scale,
      region: "California, USA",
      description: "California Consumer Privacy Act and Privacy Rights Act compliance",
      features: ["Consumer rights", "Data mapping", "Privacy notices", "Opt-out mechanisms", "Third-party disclosures"]
    },
    {
      title: "HIPAA Ready",
      icon: Shield,
      region: "United States",
      description: "Healthcare Information Portability and Accountability Act readiness",
      features: ["PHI protection", "Administrative safeguards", "Physical safeguards", "Technical safeguards", "Business associate agreements"]
    },
    {
      title: "FedRAMP Authorized",
      icon: Award,
      region: "US Government",
      description: "Federal Risk and Authorization Management Program",
      features: ["Continuous monitoring", "Security assessments", "Authorization to operate", "Government cloud services", "FISMA compliance"]
    }
  ]

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security, Availability, Processing Integrity, Confidentiality, and Privacy",
      issuer: "AICPA",
      validity: "Annual",
      status: "Current"
    },
    {
      name: "ISO 27001:2013",
      description: "Information Security Management Systems",
      issuer: "ISO",
      validity: "3 Years",
      status: "Current"
    },
    {
      name: "ISO 27018",
      description: "Cloud Privacy Standard",
      issuer: "ISO",
      validity: "3 Years",
      status: "Current"
    },
    {
      name: "CSA STAR",
      description: "Cloud Security Alliance Security, Trust & Assurance Registry",
      issuer: "CSA",
      validity: "Annual",
      status: "Current"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-alliance2">
            Compliance & Governance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meeting the highest standards for data protection, privacy, and regulatory compliance across industries.
          </p>
        </section>

        {/* Compliance Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Comprehensive Compliance Framework</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wiredleap maintains comprehensive compliance with international data protection regulations, 
                  industry standards, and government security requirements. Our compliance program ensures 
                  that your organization can confidently use our platform while meeting your regulatory obligations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We work with leading compliance firms and undergo regular third-party audits to validate 
                  our security posture and maintain certifications across multiple frameworks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Regulatory Standards</h2>
          <div className="space-y-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <standard.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold text-foreground">{standard.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-sm font-medium">
                        {standard.region}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {standard.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {standard.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Current Certifications</h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-border last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-muted-foreground mb-1">{cert.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Issued by: <strong>{cert.issuer}</strong></span>
                        <span>Valid for: <strong>{cert.validity}</strong></span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-sm font-medium">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Compliance */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Government & Defense Compliance</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Wiredleap is designed to meet the stringent security and compliance requirements of government 
                  agencies and defense organizations. We maintain specialized compliance frameworks for public sector use.
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Security Frameworks</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• NIST Cybersecurity Framework</li>
                      <li>• FISMA (Federal Information Security Modernization Act)</li>
                      <li>• DFARS (Defense Federal Acquisition Regulation Supplement)</li>
                      <li>• ITAR (International Traffic in Arms Regulations)</li>
                      <li>• EAR (Export Administration Regulations)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Clearance Levels</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Public Trust clearances</li>
                      <li>• Secret clearances</li>
                      <li>• Top Secret clearances</li>
                      <li>• Compartmented information handling</li>
                      <li>• Special Access Program (SAP) support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Compliance */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">International Compliance</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Europe</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• GDPR (General Data Protection Regulation)</li>
                  <li>• ePrivacy Directive</li>
                  <li>• NIS Directive</li>
                  <li>• Digital Services Act</li>
                  <li>• AI Act compliance readiness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Asia Pacific</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• PDPA Singapore</li>
                  <li>• Privacy Act Australia</li>
                  <li>• PIPEDA Canada</li>
                  <li>• K-ISMS South Korea</li>
                  <li>• PIPL China (where applicable)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Americas</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• CCPA/CPRA California</li>
                  <li>• LGPD Brazil</li>
                  <li>• PIPEDA Canada</li>
                  <li>• State privacy laws (US)</li>
                  <li>• LATAM data protection laws</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Audit & Transparency */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Audit & Transparency</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Regular Audits</h4>
                <p className="text-muted-foreground mb-4">
                  We undergo comprehensive third-party audits to validate our compliance posture and 
                  maintain our certifications.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Annual SOC 2 Type II audits</li>
                  <li>• ISO 27001 surveillance audits</li>
                  <li>• Penetration testing (quarterly)</li>
                  <li>• Compliance assessments</li>
                  <li>• Internal security reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Transparency Reports</h4>
                <p className="text-muted-foreground mb-4">
                  We believe in transparency and provide regular reports on our security and compliance posture.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Annual security reports</li>
                  <li>• Compliance status updates</li>
                  <li>• Incident transparency reports</li>
                  <li>• Data breach notifications</li>
                  <li>• Regulatory change notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Rights */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Privacy Rights Management</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              We provide comprehensive tools and processes to help you manage privacy rights and respond 
              to data subject requests efficiently and in compliance with applicable laws.
            </p>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Access Rights</h4>
                <p className="text-xs text-muted-foreground">Data portability and access requests</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Deletion Rights</h4>
                <p className="text-xs text-muted-foreground">Right to erasure and data removal</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <FileCheck className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Correction Rights</h4>
                <p className="text-xs text-muted-foreground">Data accuracy and rectification</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Processing Rights</h4>
                <p className="text-xs text-muted-foreground">Opt-out and processing restrictions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Compliance Team */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Compliance Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our compliance team is here to help with your regulatory requirements and compliance questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Compliance Officer:</strong>
                <div className="text-muted-foreground">compliance@wiredleap.com</div>
              </div>
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Data Protection Officer:</strong>
                <div className="text-muted-foreground">dpo@wiredleap.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}