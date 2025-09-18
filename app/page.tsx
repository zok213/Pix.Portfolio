import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ServicesSection } from '@/components/sections/services'
import { ProductsSection } from '@/components/sections/products'
import { CommunitySection } from '@/components/sections/community'
import { TeamSection } from '@/components/sections/team'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { FAQSection } from '@/components/sections/faq'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <CommunitySection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}