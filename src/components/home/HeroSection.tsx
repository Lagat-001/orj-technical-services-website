import Link from "next/link";
import { MessageCircle, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/config/company";

const highlights = [
  "Licensed & Insured in UAE",
  "Certified Engineers",
  "24/7 Emergency Support",
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-steel) 100%)",
      }}
    >
      {/* Geometric grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Decorative gold circle */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ backgroundColor: "var(--color-gold)", opacity: 0.06 }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 text-white tracking-wide"
            style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.5)" }}
          >
            <span style={{ color: "var(--color-gold)" }}>●</span>
            Dubai — United Arab Emirates
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Your Trusted Partner for{" "}
            <span style={{ color: "var(--color-gold)" }}>AC, Ventilation</span>{" "}
            &amp; Fit-Out in Dubai
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            ORJ Technical Services L.L.C. delivers expert air conditioning installation,
            HVAC systems, interior fit-outs, and maintenance. Trusted by businesses
            and residents across the UAE.
          </p>

          {/* Trust highlights */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 size={15} style={{ color: "var(--color-gold)" }} />
                {h}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-sm"
            >
              <Phone size={18} />
              {COMPANY.phone1Display}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold transition-colors text-sm"
              style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}
            >
              View Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48L480 8L960 28L1440 0V48H0Z" fill="var(--color-surface)" />
        </svg>
      </div>
    </section>
  );
}
