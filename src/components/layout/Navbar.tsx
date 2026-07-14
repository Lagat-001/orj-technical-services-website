"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/config/company";
import { PhoneIcon } from "@/components/ui/Icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="site-header">
        <div className="wrap in">
          <Link className="brand" href="/" aria-label="ORJ Technical Services — home">
            <Image
              src="/emblem.png"
              alt="ORJ emblem"
              width={44}
              height={44}
              priority
              style={{ height: 44, width: "auto" }}
            />
            <span>
              <span className="brand-name">ORJ Technical Services</span>
              <span className="brand-sub" aria-hidden="true">
                DUBAI · UAE · EST. 2014
              </span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "active" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a className="head-phone" href={`tel:+${COMPANY.phone1WA}`}>
            <PhoneIcon />
            {COMPANY.phone1Display}
          </a>

          <Link className="btn btn-quote" href="/contact">
            Free Quote
          </Link>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        id="mobile-menu"
        className={open ? "mobile-menu open" : "mobile-menu"}
        aria-label="Mobile"
      >
        {navLinks.map((l) => (
          <Link key={l.href} className="mlink" href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="m-cta">
          <a className="btn btn-call" href={`tel:+${COMPANY.phone1WA}`}>
            <PhoneIcon />
            Call {COMPANY.phone1Display}
          </a>
          <Link
            className="btn btn-quote"
            href="/contact"
            style={{ minHeight: 50 }}
            onClick={() => setOpen(false)}
          >
            Free Quote
          </Link>
        </div>
      </nav>
    </>
  );
}
