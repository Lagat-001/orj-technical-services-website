import {
  AcIcon,
  VentIcon,
  MepIcon,
  BoltIcon,
  DropIcon,
  ManpowerIcon,
  DoubleRule,
} from "@/components/ui/Icons";

// The six headline services from the approved reference.
// The /services route still lists the full nine.
const services = [
  {
    icon: <AcIcon />,
    title: "AC Installation & Maintenance",
    desc: "Split, ducted and VRF systems — supply, installation, servicing, gas charging and annual maintenance contracts.",
  },
  {
    icon: <VentIcon />,
    title: "HVAC & Ventilation",
    desc: "Kitchen extract hoods, fresh-air systems, duct fabrication, installation and deep cleaning.",
  },
  {
    icon: <MepIcon />,
    title: "Electromechanical (MEP)",
    desc: "Integrated MEP maintenance for villas, offices, retail and industrial facilities across the UAE.",
  },
  {
    icon: <BoltIcon />,
    title: "Electrical Works",
    desc: "DEWA-compliant wiring, distribution boards, lighting, fault-finding and capacity upgrades.",
  },
  {
    icon: <DropIcon />,
    title: "Plumbing & Sanitary",
    desc: "Water supply, drainage, pumps, water heaters, leak detection and rapid repairs.",
  },
  {
    icon: <ManpowerIcon />,
    title: "Technical Manpower Supply",
    desc: "Certified technicians and skilled trades on flexible hourly or project terms.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="sect tinted" id="services">
      <div className="wrap">
        <div className="s-head center">
          <span className="s-eyebrow">What we do</span>
          <h2 className="s-title">Technical services, end to end</h2>
          <DoubleRule center />
          <p className="s-sub">
            From a single split AC to full facility MEP maintenance — one licensed team, one point
            of contact.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((s) => (
            <article className="svc" key={s.title}>
              <span className="ic">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
