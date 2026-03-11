"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/config/company";
import { fadeUp, staggerContainer } from "@/lib/motion";

const highlights = [
  "Licensed & Insured in UAE",
  "Certified Engineers",
  "24/7 Emergency Support",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
        alt="Dubai skyline"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,31,63,0.93) 0%, rgba(15,52,96,0.82) 60%, rgba(0,31,63,0.70) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Decorative gold orb */}
      <div
        className="absolute top-[-160px] right-[-160px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ backgroundColor: "var(--color-gold)", opacity: 0.05 }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ backgroundColor: "var(--color-accent)", opacity: 0.04 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative w-full px-6 lg:px-12 py-24">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 text-white tracking-wide"
              style={{
                backgroundColor: "rgba(212,175,55,0.15)",
                border: "1px solid rgba(212,175,55,0.45)",
              }}
            >
              <span style={{ color: "var(--color-gold)" }}>●</span>
              Dubai — United Arab Emirates
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5 tracking-tight"
          >
            Beat the Dubai Heat —{" "}
            <span style={{ color: "var(--color-gold)" }}>AC, Ventilation</span>{" "}
            &amp; Fit-Out Experts
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg mb-6 leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            ORJ Technical Services L.L.C. delivers world-class air conditioning, HVAC,
            interior fit-outs, tiling, electrical, plumbing, and more.
            Trusted by businesses and residents across the UAE since 2014.
          </motion.p>

          {/* Trust highlights */}
          <motion.ul variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                <CheckCircle2 size={15} style={{ color: "var(--color-gold)" }} />
                {h}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${COMPANY.phone1WA}?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-white transition-opacity hover:opacity-90 text-sm shadow-lg"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={18} />
              WhatsApp for a Free Quote
            </a>
            <a
              href={`tel:${COMPANY.phone1WA}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-white text-sm transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <Phone size={18} />
              {COMPANY.phone1Display}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold transition-opacity hover:opacity-90 text-sm"
              style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}
            >
              View Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} style={{ color: "rgba(255,255,255,0.4)" }} />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48L480 8L960 28L1440 0V48H0Z" fill="var(--color-surface)" />
        </svg>
      </div>
    </section>
  );
}
