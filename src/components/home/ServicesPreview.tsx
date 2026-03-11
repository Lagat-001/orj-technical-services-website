"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const featured = [
  {
    title: "AC & Ventilation",
    description:
      "Full installation, commissioning, and maintenance of air conditioning and ventilation systems for commercial and residential properties.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    href: "/services#ac",
  },
  {
    title: "Fit-Out Works",
    description:
      "Complete interior fit-out solutions including partitions, ceilings, flooring, electrical, and MEP works for offices and retail spaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    href: "/services#fitout",
  },
  {
    title: "Electrical Services",
    description:
      "DEWA-approved low-voltage installations, panel upgrades, and lighting design. Residential and commercial specialists.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    href: "/services#electrical",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)" }}
          >
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
            Our Core Services
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            End-to-end technical services delivered by certified engineers. On time, on budget.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featured.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-muted)" }}>
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: "var(--color-steel)" }}
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            View All 9 Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
