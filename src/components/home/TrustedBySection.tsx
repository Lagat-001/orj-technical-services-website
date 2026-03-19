"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

const clients = [
  { name: "Azizi Developments", src: "/azizi.png"  },
  { name: "DAMAC Properties",   src: "/damac.jpg"  },
  { name: "Vision Packing",     src: "/vision.png" },
  { name: "Wavex",              src: "/wavex.png"  },
];

export default function TrustedBySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-16"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e8ecf0",
        borderBottom: "1px solid #e8ecf0",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.25em] block mb-2"
            style={{ color: "var(--color-gold)" }}
          >
            Trusted By
          </span>
          <h2
            className="text-2xl font-bold tracking-tight"
            style={{ color: "var(--color-navy)" }}
          >
            Leading Companies
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center"
          variants={shouldReduceMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={shouldReduceMotion ? {} : fadeUp}
              className="group flex flex-col items-center gap-3 cursor-default select-none"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-12 w-28"
              >
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                  sizes="112px"
                />
              </motion.div>
              <p
                className="text-[11px] font-medium text-center leading-snug max-w-[108px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
