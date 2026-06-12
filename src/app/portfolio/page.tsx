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
    <div className="orj-home">
      {/* Page header */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--navy-900)", color: "#fff", padding: "76px 0 84px" }}
      >
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow on-dark">Our work</span>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 700,
              marginTop: 16,
            }}
          >
            Project portfolio
          </h1>
          <p
            style={{
              color: "rgba(233,244,251,0.82)",
              fontSize: "1.08rem",
              marginTop: 16,
              maxWidth: 620,
            }}
          >
            A selection of completed projects across Dubai and the UAE — each delivered
            with quality and care.
          </p>
        </div>
      </section>

      <ProjectsGallery />
      <CTASection />
    </div>
  );
}
