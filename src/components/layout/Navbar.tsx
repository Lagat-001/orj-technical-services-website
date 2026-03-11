"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
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
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: "var(--color-navy)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ORJ Technical Services"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-white font-bold text-sm leading-tight hidden sm:block">
              ORJ Technical<br />
              <span style={{ color: "var(--color-gold)" }}>Services L.L.C.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? ""
                    : "text-gray-300 hover:text-white"
                }`}
                style={pathname === link.href ? { color: "var(--color-gold)" } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone1WA}`}
              className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} />
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

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-blue-900" style={{ backgroundColor: "var(--color-navy)" }}>
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-3 px-2 rounded-md transition-colors ${
                  pathname === link.href
                    ? "bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                style={pathname === link.href ? { color: "var(--color-gold)" } : {}}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-blue-900">
              <a
                href={`tel:${COMPANY.phone1WA}`}
                className="flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium text-gray-200 border border-white/20"
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
        </div>
      )}
    </header>
  );
}
