import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Cookie, Settings, Eye, Shield, BarChart3, Users } from "lucide-react"

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Shield,
      description: "Required for basic functionality and security",
      duration: "Session or 1 year",
      canDisable: false,
      examples: [
        "Authentication tokens",
        "Security preferences",
        "Session management",
        "CSRF protection"
      ]
    },
    {
      title: "Analytics Cookies",
      icon: BarChart3,
      description: "Help us understand how users interact with our platform",
      duration: "Up to 2 years",
      canDisable: true,
      examples: [
        "Page views and user flows",
        "Feature usage statistics",
        "Performance metrics",
        "Error tracking"
      ]
    },
    {
      title: "Functional Cookies",
      icon: Settings,
      description: "Remember your preferences and settings",
      duration: "Up to 1 year",
      canDisable: true,
      examples: [
        "Language preferences",
        "Theme settings",
        "Dashboard layout",
        "Notification preferences"
      ]
    },
    {
      title: "Targeting Cookies",
      icon: Users,
      description: "Used to deliver relevant content and advertisements",
      duration: "Up to 2 years",
      canDisable: true,
      examples: [
        "Marketing campaign tracking",
        "Personalized content",
        "Social media integration",
        "Cross-platform analytics"
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
            Cookie Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Learn how Wiredleap uses cookies and similar technologies to enhance your experience.
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
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files stored on your device when you visit our website. They help us 
                  provide you with a better experience by remembering your preferences, analyzing how you use 
                  our platform, and ensuring security.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Wiredleap, we use cookies responsibly and transparently, giving you control over your 
                  cookie preferences while maintaining the functionality and security of our AI-powered platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Types of Cookies We Use</h2>
          <div className="space-y-8">
            {cookieTypes.map((cookieType, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cookieType.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold text-foreground">{cookieType.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cookieType.canDisable 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {cookieType.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {cookieType.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                        <p className="text-muted-foreground text-sm">{cookieType.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Examples</h4>
                        <ul className="space-y-1">
                          {cookieType.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Third-Party Services</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We work with trusted third-party services that may also set cookies on your device. 
              These partners help us provide better services and analytics.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                <p className="text-sm text-muted-foreground mb-2">Website analytics and user behavior</p>
                <a href="https://policies.google.com/privacy" className="text-primary text-sm hover:underline">
                  Privacy Policy
                </a>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Vercel Analytics</h4>
                <p className="text-sm text-muted-foreground mb-2">Performance monitoring and optimization</p>
                <a href="https://vercel.com/legal/privacy-policy" className="text-primary text-sm hover:underline">
                  Privacy Policy
                </a>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Intercom</h4>
                <p className="text-sm text-muted-foreground mb-2">Customer support and messaging</p>
                <a href="https://www.intercom.com/legal/privacy" className="text-primary text-sm hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Managing Your Cookie Preferences</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Cookie Settings</h4>
                <p className="text-muted-foreground mb-4">
                  You can manage your cookie preferences at any time using our cookie consent banner 
                  or through your browser settings.
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <Settings className="w-4 h-4 inline mr-2" />
                  Manage Cookie Preferences
                </button>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Browser Controls</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Block all cookies through browser settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Delete existing cookies from your device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Set preferences for specific websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Enable private/incognito browsing mode</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Disabling Cookies */}
        <section className="mb-16">
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Eye className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Impact of Disabling Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  While you have the right to disable cookies, doing so may affect your experience with our platform:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>You may need to log in repeatedly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Your preferences and settings may not be saved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Some features may not function properly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>You may see less relevant content and recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Updates to Policy */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Updates to This Policy</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                technologies, or legal requirements. When we make significant changes, we will:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Notify you through email or platform notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Update the "Last updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Request your consent for new cookie categories if required</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Questions About Cookies?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have questions about our use of cookies or need help managing your preferences, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Email:</strong>
                <div className="text-muted-foreground">privacy@wiredleap.com</div>
              </div>
              <div className="text-left bg-background rounded-lg p-4">
                <strong className="text-foreground">Support:</strong>
                <div className="text-muted-foreground">support@wiredleap.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}