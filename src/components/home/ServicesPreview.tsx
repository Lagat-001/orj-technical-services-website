"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const MotionLink = motion.create(Link);

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    title: "AC Installation & Maintenance",
    desc: "Supply, installation, commissioning and service of split, ducted and central cooling systems.",
    icon: (
      <svg {...svgProps}>
        <path d="M12 2v20M12 6l3-2M12 6L9 4M12 18l3 2M12 18l-3 2M2 12h20M6 12l-2 3M6 12l-2-3M18 12l2 3M18 12l2-3" />
      </svg>
    ),
  },
  {
    title: "Ventilation Systems",
    desc: "Ductwork, exhaust and fresh-air systems designed and balanced for healthy indoor air.",
    icon: (
      <svg {...svgProps}>
        <path d="M3 8h11a3 3 0 1 0-3-3M3 14h15a3 3 0 1 1-3 3M3 11h9" />
      </svg>
    ),
  },
  {
    title: "Interior Fit-Outs",
    desc: "Partitions, ceilings, flooring and MEP works for offices, retail and residential spaces.",
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Electrical Services",
    desc: "DEWA-approved low-voltage installations, panel upgrades and lighting design.",
    icon: (
      <svg {...svgProps}>
        <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
      </svg>
    ),
  },
  {
    title: "Plumbing Works",
    desc: "Water supply, drainage and sanitary installations, tested and certified to standard.",
    icon: (
      <svg {...svgProps}>
        <path d="M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />
      </svg>
    ),
  },
  {
    title: "Tiling Works",
    desc: "Precise floor and wall tiling with a clean, durable, high-end finish.",
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Manpower Supply",
    desc: "Skilled, vetted technicians and labourers deployed to your site on demand.",
    icon: (
      <svg {...svgProps}>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21a6 6 0 0 1 12 0" />
        <path d="M16 3.5a3 3 0 0 1 0 7M21 21a6 6 0 0 0-5-5.9" />
      </svg>
    ),
  },
  {
    title: "Packing & Moving",
    desc: "Careful packing and relocation services for homes, offices and warehouses.",
    icon: (
      <svg {...svgProps}>
        <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
        <path d="M3.3 7L12 12l8.7-5M12 22V12" />
      </svg>
    ),
  },
  {
    title: "Robotics & Construction",
    desc: "Modern construction support and automation for forward-looking projects.",
    icon: (
      <svg {...svgProps}>
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 8V4M9 2h6M8 14h.01M16 14h.01M9 18h6" />
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <motion.div
          className="sec-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="eyebrow">What we do</span>
          <h2>Nine services, one trusted team</h2>
          <p>
            End-to-end technical works delivered by certified engineers — on time,
            on budget, and built to last in the Gulf climate.
          </p>
        </motion.div>

        <motion.div
          className="svc-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((s) => (
            <MotionLink key={s.title} href="/services" className="svc" variants={fadeUp}>
              <div className="svc-ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="more">Learn more →</span>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
