import { Metadata } from "next";
import ServicesGrid from "@/components/services/ServicesGrid";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services — ORJ Technical Services L.L.C.",
  description:
    "AC installation, ventilation, fit-out works, maintenance contracts, and technical services in Dubai, UAE.",
};

export default function ServicesPage() {
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
            What We Offer
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Comprehensive technical services for commercial, residential, and industrial
            clients across Dubai and the UAE.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <CTASection />
    </>
  );
}
