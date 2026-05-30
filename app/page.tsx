import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { MembershipPurchaseSection } from "@/components/membership-purchase-section"
import { CtaBanner } from "@/components/cta-banner"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <GallerySection />
      <PricingSection />
      <MembershipPurchaseSection />
      <CtaBanner />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export const metadata = {
  title: "POWERHUB — Siłownia 24/7 | Trening, sprzęt, trenerzy",
  description:
    "POWERHUB — lokalna siłownia otwarta 24/7. Nowoczesny sprzęt, zajęcia grupowe i trenerzy personalni. Sprawdź ofertę i dołącz!",
};
