"use client";

import { useState } from "react";
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
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 shadow-lg"
      style={{ backgroundColor: "var(--color-navy)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Full-stretch inner — no max-w constraint */}
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="ORJ Technical Services"
              width={44}
              height={44}
              className="object-contain"
            />
            <span className="text-white font-bold text-sm leading-tight hidden sm:block">
              ORJ Technical<br />
              <span style={{ color: "var(--color-gold)" }}>Services L.L.C.</span>
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-7 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium transition-colors group"
                style={pathname === link.href ? { color: "var(--color-gold)" } : { color: "rgba(255,255,255,0.8)" }}
              >
                {link.label}
                {/* Active underline */}
                {pathname === link.href && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--color-gold)" }}
                  />
                )}
                {/* Hover underline */}
                {pathname !== link.href && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY.phone1WA}`}
              className="flex items-center gap-1.5 text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              <Phone size={13} />
              {COMPANY.phone1Display}
            </a>
            <a
              href={`https://wa.me/${COMPANY.phone1WA}?text=${COMPANY.whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
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
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu — animated slide down */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--color-navy)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-3 px-3 rounded-md transition-colors"
                  style={
                    pathname === link.href
                      ? { color: "var(--color-gold)", backgroundColor: "rgba(255,255,255,0.07)" }
                      : { color: "rgba(255,255,255,0.75)" }
                  }
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <a
                  href={`tel:${COMPANY.phone1WA}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <Phone size={15} />
                  {COMPANY.phone1Display}
                </a>
                <a
                  href={`https://wa.me/${COMPANY.phone1WA}?text=${COMPANY.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-md text-sm font-semibold text-white text-center"
                  style={{ backgroundColor: "#25D366" }}
                >
                  WhatsApp Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
