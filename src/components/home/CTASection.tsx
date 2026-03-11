"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { COMPANY } from "@/config/company";

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-steel) 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ backgroundColor: "var(--color-gold)", opacity: 0.06 }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ backgroundColor: "var(--color-accent)", opacity: 0.06 }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-gold)" }}
          >
            Get Started Today
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-8 text-lg"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Contact us for a free consultation and quote.
            Our team responds within 1 hour.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={`https://wa.me/${COMPANY.phone1WA}?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={18} />
              WhatsApp for a Free Quote
            </a>
            <a
              href={`tel:${COMPANY.phone1WA}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white border hover:bg-white/10 transition-colors text-sm"
              style={{ borderColor: "rgba(255,255,255,0.35)" }}
            >
              <Phone size={18} />
              {COMPANY.phone1Display}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
