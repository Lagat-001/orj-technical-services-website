"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { COMPANY } from "@/config/company";

const quoteHref = `https://wa.me/${COMPANY.phone1WA}?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote.`;

/* Inline icons ported from the reference */
function ShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21 8 14 2 9.4h7.6z" />
    </svg>
  );
}
function Clock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Engineer() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}
function ClockCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}
function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.5-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z" />
    </svg>
  );
}

const chips = [
  { icon: <ShieldCheck />, label: "Licensed & Insured" },
  { icon: <Star />, label: "Certified Engineers" },
  { icon: <Clock />, label: "24/7 Emergency Support" },
];

const trust = [
  { icon: <ShieldCheck />, label: "Fully Licensed in the UAE" },
  { icon: <Check />, label: "DEWA-Approved Works" },
  { icon: <Engineer />, label: "Certified Engineers" },
  { icon: <ClockCheck />, label: "Response Within 1 Hour" },
];

export default function HeroSection() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: "easeOut" as const, delay },
        };

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Dubai skyline"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-grid" aria-hidden="true" />

        <div className="wrap hero-inner">
          <motion.div className="hero-loc" {...fade(0)}>
            <span className="dot" />
            Dubai — United Arab Emirates
          </motion.div>

          <motion.h1 {...fade(0.08)}>
            Beat the Dubai heat.
            <br />
            Stay <span className="cool">cool</span>, year round.
          </motion.h1>

          <motion.p className="lead" {...fade(0.16)}>
            Air conditioning, ventilation, fit-out and full technical services —
            engineered by certified specialists and trusted across the UAE since 2014.
          </motion.p>

          <motion.div className="hero-chips" {...fade(0.24)}>
            {chips.map((c) => (
              <span className="chip" key={c.label}>
                {c.icon}
                {c.label}
              </span>
            ))}
          </motion.div>

          <motion.div className="hero-actions" {...fade(0.32)}>
            <a className="btn btn-wa" href={quoteHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppGlyph />
              WhatsApp for a free quote
            </a>
            <a className="btn btn-ghost" href={`tel:${COMPANY.phone1WA}`}>
              Call {COMPANY.phone1Display}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust">
        <div className="wrap trust-inner">
          {trust.map((t) => (
            <div className="trust-item" key={t.label}>
              {t.icon}
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
