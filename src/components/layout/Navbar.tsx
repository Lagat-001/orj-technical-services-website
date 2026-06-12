"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/config/company";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const quoteMsg = "Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all"
      style={{
        backgroundColor: scrolled ? "rgba(10,26,47,0.92)" : "var(--navy-900)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 10px 30px -18px rgba(0,0,0,0.7)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="w-full max-w-[1180px] mx-auto px-6">
        <div
          className="flex items-center justify-between transition-all"
          style={{ height: scrolled ? 68 : 84 }}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0" aria-label="ORJ Technical Services home">
            <span
              className="relative block transition-all"
              style={{
                height: scrolled ? 46 : 58,
                width: scrolled ? 46 : 58,
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
              }}
            >
              <Image
                src="/emblem.png"
                alt="ORJ Technical Services logo"
                fill
                className="object-contain"
                priority
                sizes="58px"
              />
            </span>
            <span className="hidden sm:flex flex-col leading-[1.05]">
              <b
                className="font-bold text-white tracking-[0.01em]"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.05rem" }}
              >
                ORJ Technical Services
              </b>
              <span
                className="uppercase"
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  color: "var(--cyan-300)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                }}
              >
                Dubai · UAE · Est. 2014
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[0.95rem] font-medium py-1 transition-colors group"
                  style={{ color: active ? "#fff" : "rgba(255,255,255,0.86)" }}
                >
                  {link.label}
                  <span
                    className="absolute left-0 -bottom-0.5 h-0.5 rounded-full transition-all"
                    style={{
                      width: active ? "100%" : "0%",
                      backgroundColor: "var(--cyan-400)",
                    }}
                  />
                  {!active && (
                    <span
                      className="absolute left-0 -bottom-0.5 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform"
                      style={{ width: "100%", backgroundColor: "var(--cyan-400)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3.5 shrink-0">
            <a
              href={`tel:${COMPANY.phone1WA}`}
              className="flex items-center gap-2 text-[0.95rem] font-semibold text-white transition-colors hover:text-[var(--cyan-300)]"
            >
              <Phone size={16} style={{ color: "var(--cyan-300)" }} />
              {COMPANY.phone1Display}
            </a>
            <a
              href={`https://wa.me/${COMPANY.phone1WA}?text=${quoteMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-[11px] text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--cyan-400)",
                color: "#04243a",
                boxShadow: "0 10px 26px -10px rgba(28,169,227,0.75)",
              }}
            >
              Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(10,26,47,0.98)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid var(--line-d)",
            }}
          >
            <nav className="px-6 py-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[0.95rem] font-medium py-3.5 transition-colors"
                  style={{
                    color: pathname === link.href ? "var(--cyan-300)" : "rgba(255,255,255,0.86)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div
                className="flex flex-col gap-2.5 mt-3 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <a
                  href={`tel:${COMPANY.phone1WA}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-[11px] text-sm font-medium text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <Phone size={15} style={{ color: "var(--cyan-300)" }} />
                  {COMPANY.phone1Display}
                </a>
                <a
                  href={`https://wa.me/${COMPANY.phone1WA}?text=${quoteMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-[11px] text-sm font-semibold text-center"
                  style={{ backgroundColor: "var(--cyan-400)", color: "#04243a" }}
                >
                  Free Quote
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
