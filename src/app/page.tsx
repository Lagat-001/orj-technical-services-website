import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsBar from "@/components/home/StatsBar";
import TrustedBySection from "@/components/home/TrustedBySection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <StatsBar />
      <TrustedBySection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
