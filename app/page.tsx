import { HeroSection } from "@/components/hero-section"
import { BentoSection } from "@/components/bento-section"
import { ProblemStatement } from "@/components/problem-statement"
import { TechnologyStack } from "@/components/technology-stack"
import { SocialProof } from "@/components/social-proof"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <ProblemStatement />
        <BentoSection />
        <TechnologyStack />
        <SocialProof />
        <TestimonialGridSection />
        <LargeTestimonial />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  )
}
