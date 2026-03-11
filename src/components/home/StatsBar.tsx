"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "9", label: "Services Offered" },
];

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: "var(--color-navy)" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="py-2"
            >
              <div
                className="text-4xl sm:text-5xl font-extrabold mb-1 tracking-tight"
                style={{ color: "var(--color-gold)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
