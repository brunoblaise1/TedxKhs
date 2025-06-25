import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
// import WhatIsTedx from "@/components/what-is-tedx";
import { EventTheme } from "@/components/event-theme";
// import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
// import { SpeakersSection } from "@/components/speakers-section";
// import { PartnersSection } from "@/components/partners-section";
// import { Particles } from "@/components/particles";

export default function Home() {
  return (
    <main className="min-h-screen  text-white relative">
      {/* <Particles /> */}
      <Navbar />
      <HeroSection />
      {/* {/ <WhatIsTedx /> */} 
      <EventTheme />
      {/* <SpeakersSection />
      <PartnersSection />
      <CTASection /> */}
      <Footer />
      <div className="noise"></div>
    </main>
  );
}
