import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Wiredleap
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building the future of AI-powered development, where every developer can harness the power of intelligent coding assistance.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Wiredleap, we believe that the future of software development lies in the seamless collaboration between human creativity and artificial intelligence.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to democratize access to advanced AI coding tools, making them available to developers of all skill levels and backgrounds.
              </p>
              <p className="text-lg text-muted-foreground">
                We're committed to building tools that not only enhance productivity but also foster learning, collaboration, and innovation in the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Key Values</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Innovation through AI</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Developer empowerment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Community collaboration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Continuous learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">John Doe</h3>
              <p className="text-muted-foreground mb-2">CEO & Founder</p>
              <p className="text-sm text-muted-foreground">
                Former senior engineer at major tech companies with 15+ years of experience in AI and software development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Jane Smith</h3>
              <p className="text-muted-foreground mb-2">CTO</p>
              <p className="text-sm text-muted-foreground">
                Expert in machine learning and distributed systems with a passion for building scalable AI solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">MJ</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mike Johnson</h3>
              <p className="text-muted-foreground mb-2">Head of Product</p>
              <p className="text-sm text-muted-foreground">
                Product leader with experience building developer tools and growing developer communities.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
                <div className="text-muted-foreground">Active Developers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">1M+</div>
                <div className="text-muted-foreground">Lines of Code Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Integrations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}

