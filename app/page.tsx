import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
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
      <CtaBanner />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
