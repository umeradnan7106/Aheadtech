// app/page.tsx
// ── COMPLETE HOME PAGE — all sections ──

import HeroSection from '@/components/sections/HeroSection'
import ProofBar from '@/components/sections/ProofBar'
import PainSection from '@/components/sections/PainSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview'
import ProcessSection from '@/components/sections/ProcessSection'
import StoryTeaserSection from '@/components/sections/StoryTeaserSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import GuaranteeBar from '@/components/sections/GuaranteeBar'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection
        ghlFormUrl="https://api.aheadtech360.com/widget/form/2iokn70lrSkwL0q1jp4a"
      />
      <ProofBar />
      <PainSection />
      <ServicesSection />
      <CaseStudiesPreview />
      <ProcessSection />
      <StoryTeaserSection
        ghlFormUrl="https://api.aheadtech360.com/widget/form/UprfaLZ4XlDE5nxsjX16"
      />
      <TestimonialsSection />
      <FAQSection />
      <GuaranteeBar />
      <FinalCTA
        ghlFormUrl="https://api.aheadtech360.com/widget/form/2iokn70lrSkwL0q1jp4a"
      />
    </>
  )
}