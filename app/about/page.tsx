import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section (match Docs hero) */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/40 z-5" />
          <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />

          {/* Code-themed animated elements (monochrome) */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 text-6xl text-white/30 animate-pulse">{`</>`}</div>
            <div className="absolute top-1/3 right-20 text-4xl text-white/30 animate-bounce" style={{animationDelay: '1s'}}>{`{}`}</div>
            <div className="absolute bottom-1/3 left-1/4 text-5xl text-white/30 animate-pulse" style={{animationDelay: '2s'}}>[]</div>
            <div className="absolute top-1/2 right-1/3 text-3xl text-white/30 animate-bounce" style={{animationDelay: '0.5s'}}>()</div>
          </div>

          {/* Floating code blocks (monochrome) */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 right-10 bg-gray-800 rounded-lg p-3 text-xs text-white/70 font-mono animate-float">
              console.log('Hello');
            </div>
            <div className="absolute bottom-20 left-16 bg-gray-800 rounded-lg p-3 text-xs text-white/70 font-mono animate-float" style={{animationDelay: '1.5s'}}>
              function() {`{}`}
            </div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">About Wiredleap</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              We're building the future of AI-powered development, where every developer can harness the power of intelligent coding assistance.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
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
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
