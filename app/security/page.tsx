import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Shield, Lock, Eye, AlertTriangle, Award, Clock, FileCheck, Users } from "lucide-react"

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      icon: Lock,
      description: "All data is encrypted in transit and at rest using AES-256 encryption",
      details: ["TLS 1.3 for data transmission", "AES-256 encryption at rest", "Hardware Security Modules (HSM)", "Key rotation and management"]
    },
    {
      title: "Multi-Factor Authentication",
      icon: Shield,
      description: "Strong authentication required for all user accounts",
      details: ["TOTP authenticator apps", "SMS verification", "Hardware security keys", "Single Sign-On (SSO) integration"]
    },
    {
      title: "Zero Trust Architecture",
      icon: Eye,
      description: "Comprehensive security model with continuous verification",
      details: ["Identity-based access control", "Micro-segmentation", "Continuous monitoring", "Least privilege access"]
    },
    {
      title: "Advanced Threat Detection",
      icon: AlertTriangle,
      description: "AI-powered threat detection and response systems",
      details: ["Real-time threat monitoring", "Behavioral analysis", "Automated incident response", "Security information and event management (SIEM)"]
    }
  ]

  const certifications = [
    {
      title: "SOC 2 Type II",
      icon: Award,
      description: "Comprehensive security, availability, and confidentiality controls",
      status: "Certified"
    },
    {
      title: "ISO 27001",
      icon: FileCheck,
      description: "International standard for information security management",
      status: "Certified"
    },
    {
      title: "FedRAMP",
      icon: Shield,
      description: "Federal Risk and Authorization Management Program compliance",
      status: "Authorized"
    },
    {
      title: "FIPS 140-2",
      icon: Lock,
      description: "Federal Information Processing Standard for cryptographic modules",
      status: "Level 3 Validated"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-alliance2">
            Security First
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade security measures protecting your most sensitive intelligence operations.
          </p>
        </section>

        {/* Security Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Security Commitment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Security is not just a feature at Wiredleap—it's the foundation of everything we do. Our platform 
                  is designed specifically for government agencies and enterprise organizations handling sensitive 
                  and classified information.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest security standards through continuous monitoring, regular audits, 
                  and compliance with international security frameworks. Your data protection is our top priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{cert.description}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Infrastructure Security</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Physical Security</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tier III/IV data centers with 24/7 monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Biometric access controls and surveillance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Environmental controls and redundancy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Secure hardware destruction protocols</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Network Security</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Next-generation firewalls and intrusion prevention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>DDoS protection and traffic analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Network segmentation and isolation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Continuous network monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">24/7 Incident Response</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our dedicated Security Operations Center (SOC) provides round-the-clock monitoring and 
                  immediate response to security incidents. We maintain strict incident response procedures 
                  and notification protocols.
                </p>
                <div class="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-1">&lt; 15 min</div>
                    <div className="text-sm text-muted-foreground">Detection Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-1">&lt; 1 hour</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Team */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Security Team</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our security team consists of cybersecurity experts, former government security specialists, 
                  and industry veterans with decades of experience in protecting sensitive information systems.
                </p>
                <h4 className="font-semibold text-foreground mb-3">Team Expertise</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Certified Information Systems Security Professionals (CISSP)</li>
                  <li>• Certified Information Security Managers (CISM)</li>
                  <li>• Former NSA and DoD security personnel</li>
                  <li>• Penetration testing and ethical hacking specialists</li>
                  <li>• Compliance and risk management experts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Security Training</h4>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Regular security awareness training for all staff</li>
                  <li>• Annual background checks and security clearances</li>
                  <li>• Continuous professional development</li>
                  <li>• Incident response simulation exercises</li>
                </ul>
                <div className="bg-background rounded-lg p-4">
                  <strong className="text-foreground">Security Contact:</strong>
                  <div className="text-muted-foreground">security@wiredleap.com</div>
                  <div className="text-sm text-muted-foreground mt-1">24/7 Emergency Response Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerability Management */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Vulnerability Management</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Regular Assessments</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Monthly automated vulnerability scans</li>
                  <li>• Quarterly penetration testing by third parties</li>
                  <li>• Annual security audits and assessments</li>
                  <li>• Continuous security monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Bug Bounty Program</h4>
                <p className="text-muted-foreground mb-3">
                  We maintain a responsible disclosure program and work with security researchers 
                  to identify and fix vulnerabilities.
                </p>
                <a href="mailto:security@wiredleap.com" className="text-primary hover:underline">
                  Report Security Issue →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Security Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our security team is available to discuss your specific security requirements and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Security Team:</strong>
                <div className="text-muted-foreground">security@wiredleap.com</div>
              </div>
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Emergency:</strong>
                <div className="text-muted-foreground">+1 (555) 911-SECURITY</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}