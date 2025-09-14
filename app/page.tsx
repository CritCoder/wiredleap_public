import { HeroSection } from "@/components/hero-section"
import { BentoSection } from "@/components/bento-section"
import { ProblemStatement } from "@/components/problem-statement"
import { TechnologyStack } from "@/components/technology-stack"
import { SocialProof } from "@/components/social-proof"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import { FullPageScroll } from "@/components/fullpage-scroll"
import { PhotoShowcase } from "@/components/photo-showcase"

export default function HomePage() {
  return (
    <div id="home-scroll-container" className="dark h-screen overflow-y-auto snap-y snap-proximity bg-black text-white scroll-smooth">
      <FullPageScroll />
      <main>
        <HeroSection />
        <PhotoShowcase />
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
