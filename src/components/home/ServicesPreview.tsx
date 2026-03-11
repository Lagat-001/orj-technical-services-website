import Link from "next/link";
import { Wind, Wrench, HardHat, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "AC & Ventilation",
    description:
      "Full installation, commissioning, and maintenance of air conditioning and ventilation systems for commercial and residential properties.",
    href: "/services#ac",
  },
  {
    icon: HardHat,
    title: "Fit-Out Works",
    description:
      "Complete interior fit-out solutions including partitions, ceilings, flooring, electrical, and MEP works for offices and retail spaces.",
    href: "/services#fitout",
  },
  {
    icon: Wrench,
    title: "Maintenance Contracts",
    description:
      "Scheduled preventive maintenance and emergency response contracts to keep your systems running at peak efficiency.",
    href: "/services#maintenance",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
            Our Core Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            End-to-end technical services delivered by certified engineers. On time, on budget.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(30,58,95,0.08)" }}
                >
                  <Icon size={24} style={{ color: "var(--color-steel)" }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy)" }}>
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium transition-colors group-hover:gap-2"
                  style={{ color: "var(--color-steel)" }}
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
