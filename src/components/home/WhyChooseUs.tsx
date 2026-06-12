"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const reasons = [
  {
    title: "Licensed & Insured",
    desc: "Fully licensed in the UAE with comprehensive insurance. Your project is in safe hands.",
    icon: (
      <svg {...svgProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Certified Engineers",
    desc: "Our team holds internationally recognised certifications in HVAC and technical services.",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 13L7 22l5-3 5 3-1.5-9" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    desc: "We respect your schedule. Projects are completed on time and within budget.",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    desc: "A dedicated account manager and a 24/7 emergency line for every client.",
    icon: (
      <svg {...svgProps}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section ice">
      <div className="wrap">
        <motion.div
          className="sec-head center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="eyebrow">Why ORJ</span>
          <h2>Built on trust &amp; excellence</h2>
          <p>
            Developers and businesses across Dubai choose ORJ for professionalism,
            expertise and reliability.
          </p>
        </motion.div>

        <motion.div
          className="why-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((r) => (
            <motion.div className="why" key={r.title} variants={fadeUp}>
              <div className="why-ico">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
