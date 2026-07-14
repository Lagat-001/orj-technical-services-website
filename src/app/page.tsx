import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FactsBand from "@/components/home/FactsBand";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedWork from "@/components/home/FeaturedWork";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <FactsBand />
      <AboutPreview />
      <WhyChooseUs />
      <FeaturedWork />
      <CTASection />
    </>
  );
}
