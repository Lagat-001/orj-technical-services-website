"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { COMPANY } from "@/config/company";

const quoteHref = `https://wa.me/${COMPANY.phone1WA}?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote.`;

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.5-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-[1180px] mx-auto px-6">
        <motion.div
          className="relative overflow-hidden text-center"
          style={{
            background: "linear-gradient(120deg, var(--navy-900), var(--cyan-600))",
            borderRadius: 26,
          }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Blueprint grid overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
              backgroundSize: "46px 46px",
              WebkitMaskImage: "radial-gradient(600px 300px at 50% 0,#000,transparent 75%)",
              maskImage: "radial-gradient(600px 300px at 50% 0,#000,transparent 75%)",
              opacity: 0.5,
            }}
          />

          <div className="relative z-[2] max-w-[640px] mx-auto px-6 sm:px-12 py-12 sm:py-16">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center justify-center gap-2.5 mb-3.5"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--cyan-300)",
                fontWeight: 700,
              }}
            >
              <span
                style={{ width: 30, height: 3, borderRadius: 2, background: "var(--thermal)" }}
              />
              Get started today
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-white font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.9rem)",
                lineHeight: 1.08,
              }}
            >
              Ready to get started?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3.5"
              style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem" }}
            >
              Contact us for a free consultation and quote. Our team responds within the hour.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3.5 justify-center mt-8"
            >
              <a
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-semibold transition-transform hover:-translate-y-0.5"
                style={{
                  padding: "14px 22px",
                  borderRadius: 11,
                  fontSize: "0.95rem",
                  background: "#25D366",
                  color: "#06351b",
                  boxShadow: "0 10px 26px -10px rgba(37,211,102,0.7)",
                }}
              >
                <WhatsAppGlyph />
                WhatsApp for a free quote
              </a>
              <a
                href={`tel:${COMPANY.phone1WA}`}
                className="inline-flex items-center gap-2.5 font-semibold text-white transition-colors hover:bg-white/10"
                style={{
                  padding: "14px 22px",
                  borderRadius: 11,
                  fontSize: "0.95rem",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                }}
              >
                Call {COMPANY.phone1Display}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
