"use client";

import { Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, staggerContainer } from "@/lib/motion";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every project is executed with accuracy. We follow industry standards on every job.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication from quote to completion. No hidden costs or surprises.",
  },
  {
    icon: Heart,
    title: "Client First",
    description:
      "Your satisfaction is our measure of success. We don't close a job until you're happy.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-gold)" }}
              >
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--color-navy)" }}>
                Who is ORJ Technical Services?
              </h2>
              <div className="space-y-4 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                <p>
                  ORJ Technical Services L.L.C. is a Dubai-based company specializing in
                  air conditioning, ventilation, interior fit-outs, and technical maintenance.
                </p>
                <p>
                  Founded with a commitment to quality and reliability, ORJ has grown into a
                  trusted name for businesses and residents across the UAE. Our team of
                  certified engineers and skilled technicians brings decades of combined
                  experience to every project.
                </p>
                <p>
                  We work with developers, facility managers, contractors, and private
                  clients — delivering tailored solutions that meet each client's unique
                  requirements and budget.
                </p>
              </div>
            </motion.div>

            {/* Stats block */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-steel) 100%)" }}
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { value: "10+", label: "Years in UAE" },
                  { value: "500+", label: "Projects" },
                  { value: "200+", label: "Clients" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="py-4">
                    <div className="text-4xl font-extrabold mb-1" style={{ color: "var(--color-gold)" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Our Values
            </p>
            <h2 className="text-3xl font-bold" style={{ color: "var(--color-navy)" }}>
              What Drives Us
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(0,31,63,0.07)" }}
                  >
                    <Icon size={26} style={{ color: "var(--color-steel)" }} />
                  </div>
                  <h3 className="font-bold mb-2 text-lg" style={{ color: "var(--color-navy)" }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
