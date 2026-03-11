import { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us — ORJ Technical Services L.L.C.",
  description:
    "Dubai-based technical services company. Learn about ORJ's story, mission, and values.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-steel) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
            About Us
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Our Company</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            A Dubai-based team dedicated to delivering quality technical services
            with professionalism and care.
          </p>
        </div>
      </section>

      <AboutContent />
      <CTASection />
    </>
  );
}
