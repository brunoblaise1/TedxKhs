import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatIsTEDx } from "@/components/what-is-tedx"
import { EventTheme } from "@/components/event-theme"
import { SponsorshipSection } from "@/components/sponsorship-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { SpeakersSection } from "@/components/speakers-section"
import { PartnersSection } from "@/components/partners-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <WhatIsTEDx />
      <EventTheme />
      <SpeakersSection />
      <PartnersSection />
      <SponsorshipSection />
      <CTASection />
      <Footer />
    </main>
  )
}
