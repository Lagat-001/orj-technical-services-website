import { Metadata } from "next";
import ProjectsGallery from "@/components/portfolio/ProjectsGallery";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Portfolio — ORJ Technical Services L.L.C.",
  description:
    "View completed AC, fit-out, ventilation, and maintenance projects by ORJ Technical Services in Dubai.",
};

export default function PortfolioPage() {
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
            Our Work
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Project Portfolio</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            A selection of completed projects across Dubai and the UAE.
            Each project is delivered with quality and care.
          </p>
        </div>
      </section>

      <ProjectsGallery />
      <CTASection />
    </>
  );
}
