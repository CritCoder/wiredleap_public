import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { ProblemStatement } from "@/components/problem-statement"
import { BeyondSeeing } from "@/components/beyond-seeing"
import { SignalIntelligenceEngine } from "@/components/signal-intelligence-engine"
import { VideoSignals } from "@/components/video-signals"
import { SocialMediaIntelligence } from "@/components/social-media-intelligence"
import { OSINTCapabilities } from "@/components/osint-capabilities"
import { LiveDashboards } from "@/components/live-dashboards"
import { TeamCredentials } from "@/components/team-credentials"
import { MarketImpact } from "@/components/market-impact"
import { TechnologyStack } from "@/components/technology-stack"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-150px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>

        {/* Section 3: Social Proof */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-[400px]" delay={0.1}>
          <SocialProof />
        </AnimatedSection>

        {/* Section 4: Problem Statement */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <ProblemStatement />
        </AnimatedSection>

        {/* Section 5: Beyond Seeing */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <BeyondSeeing />
        </AnimatedSection>

        {/* Section 6: Signal Intelligence Engine */}
        <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <SignalIntelligenceEngine />
        </AnimatedSection>

        {/* Section 7: Video Signals */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <VideoSignals />
        </AnimatedSection>

        {/* Section 8: Social Media Intelligence */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <SocialMediaIntelligence />
        </AnimatedSection>

        {/* Section 9: OSINT++ Capabilities */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <OSINTCapabilities />
        </AnimatedSection>

        {/* Section 10: Live Dashboards */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <LiveDashboards />
        </AnimatedSection>

        {/* Section 11: Team & Credentials */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <TeamCredentials />
        </AnimatedSection>

        {/* Section 12: Market Impact */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <MarketImpact />
        </AnimatedSection>

        {/* Section 13: Technology Stack */}
        <AnimatedSection id="technology-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <TechnologyStack />
        </AnimatedSection>

        {/* Section 14: FAQ */}
        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <FAQSection />
        </AnimatedSection>

        {/* Section 15: CTA & Footer */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <CTASection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
