import { Wind, Thermometer, HardHat, Wrench, Settings, Zap } from "lucide-react";

const services = [
  {
    id: "ac",
    icon: Thermometer,
    title: "Air Conditioning Systems",
    description:
      "Supply, installation, and commissioning of split, VRF/VRV, chiller, and central AC systems. Suitable for villas, offices, retail, and industrial facilities.",
    subServices: [
      "Split AC installation & removal",
      "VRF/VRV multi-zone systems",
      "Chiller & AHU systems",
      "Ducted central AC",
      "AC relocation",
    ],
  },
  {
    id: "ventilation",
    icon: Wind,
    title: "Ventilation & HVAC",
    description:
      "Design and installation of mechanical ventilation systems, fresh air units, exhaust fans, and ductwork for commercial and residential spaces.",
    subServices: [
      "Mechanical ventilation design",
      "Fresh air handling units (AHU/FCU)",
      "Kitchen & toilet exhaust systems",
      "Duct fabrication & installation",
      "Indoor air quality solutions",
    ],
  },
  {
    id: "fitout",
    icon: HardHat,
    title: "Fit-Out Works",
    description:
      "Complete interior fit-out from shell & core to full handover. We handle partitions, ceilings, flooring, joinery, painting, and all MEP works.",
    subServices: [
      "Office & retail fit-out",
      "False ceiling & partition systems",
      "Flooring & tiling",
      "Joinery & carpentry",
      "Electrical & plumbing works",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance Contracts",
    description:
      "Planned preventive maintenance (PPM) contracts that keep your AC and building systems in peak condition year-round.",
    subServices: [
      "Annual AC service contracts",
      "Filter cleaning & chemical wash",
      "Refrigerant top-up & leak checks",
      "Emergency call-out response",
      "Comprehensive site reports",
    ],
  },
  {
    id: "technical",
    icon: Settings,
    title: "Technical Services",
    description:
      "General technical and MEP services for facilities management, including plumbing, electrical, civil, and painting works.",
    subServices: [
      "Plumbing & drainage",
      "General electrical works",
      "Civil & masonry repairs",
      "Painting & waterproofing",
      "Handyman & FM support",
    ],
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Works",
    description:
      "Low-voltage electrical installations, panel upgrades, lighting design, and DEWA-approved works for commercial and residential projects.",
    subServices: [
      "DB board installation & upgrade",
      "Lighting design & installation",
      "Cable laying & containment",
      "DEWA submissions & approvals",
      "Emergency lighting & exit signs",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.subServices.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--color-gold)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
