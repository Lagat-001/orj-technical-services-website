import { Metadata } from "next";
import ProjectsGallery from "@/components/portfolio/ProjectsGallery";
import CTASection from "@/components/home/CTASection";
import { DoubleRule } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Portfolio — ORJ Technical Services L.L.C.",
  description:
    "View completed AC, fit-out, ventilation, and maintenance projects by ORJ Technical Services in Dubai.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="hero" style={{ borderBottomWidth: 5 }}>
        <div className="wm" aria-hidden="true" />
        <div className="wrap in" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <span className="eyebrow">Our work</span>
          <h1 style={{ fontSize: "clamp(2rem, 4.4vw, 3.2rem)", maxWidth: "18ch" }}>
            Projects across Dubai
          </h1>
          <p className="lede">
            A selection of completed projects across Dubai and the UAE — each delivered with quality
            and care.
          </p>
          <DoubleRule />
        </div>
      </section>

      <ProjectsGallery />
      <CTASection />
    </>
  );
}
