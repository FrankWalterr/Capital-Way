import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { RoutesSection } from "@/components/routes-section";
import { ComfortSection } from "@/components/comfort-section";
import { CargoSection } from "@/components/cargo-section";
import { TerminalsSection } from "@/components/terminals-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-[#050a12]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ComfortSection />
      <RoutesSection />
      <CargoSection />
      <TerminalsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
