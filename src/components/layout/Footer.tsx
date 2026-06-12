import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { COMPANY } from "@/config/company";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "AC Installation & Maintenance",
  "Ventilation Systems",
  "Interior Fit-Outs",
  "Tiling Works",
  "Electrical & Plumbing",
  "Manpower Supply",
  "Packing & Moving",
  "Robotics & Construction",
];

const waPills = [
  { label: "Sales", number: COMPANY.phone1WA, display: COMPANY.phone1Display },
  { label: "Support", number: COMPANY.phone2WA, display: COMPANY.phone2Display },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy-950)", color: "#b9cee0" }}>
      <div className="max-w-[1180px] mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.2fr_1.3fr] gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative block" style={{ width: 60, height: 60 }}>
                <Image
                  src="/emblem.png"
                  alt="ORJ Technical Services"
                  fill
                  className="object-contain"
                  sizes="60px"
                />
              </span>
              <span className="flex flex-col leading-[1.05]">
                <b
                  className="text-white font-bold"
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
            </div>
            <p className="text-sm max-w-[300px]" style={{ color: "#9fb6cb" }}>
              Dubai&apos;s trusted partner for AC, ventilation, fit-outs and technical
              maintenance — licensed and operating since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-h">Quick Links</h4>
            <ul className="space-y-2.5 text-[0.93rem]">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-h">Services</h4>
            <ul className="space-y-2.5 text-[0.93rem]" style={{ color: "#9fb6cb" }}>
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-h">Contact Us</h4>
            <ul className="space-y-3 text-[0.93rem]" style={{ color: "#9fb6cb" }}>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--cyan-400)" }} />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0" style={{ color: "var(--cyan-400)" }} />
                <a href={`tel:${COMPANY.phone1WA}`} className="footer-link">
                  {COMPANY.phone1Display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0" style={{ color: "var(--cyan-400)" }} />
                <a href={`tel:${COMPANY.phone2WA}`} className="footer-link">
                  {COMPANY.phone2Display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0" style={{ color: "var(--cyan-400)" }} />
                <a href={`mailto:${COMPANY.email}`} className="footer-link break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.phone1WA}?text=${COMPANY.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 footer-link"
                >
                  <MessageCircle size={16} style={{ color: "#25D366" }} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: "1px solid var(--line-d)" }}
        >
          <p className="text-[0.85rem]" style={{ color: "#7f99b0" }}>
            © {new Date().getFullYear()} {COMPANY.name} · Trade License No. {COMPANY.tradeLicense} · All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {waPills.map((p) => (
              <a
                key={p.number}
                href={`https://wa.me/${p.number}?text=${COMPANY.whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.82rem] px-3.5 py-2 rounded-full transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--line-d)",
                  color: "#cfe1f0",
                }}
              >
                <MessageCircle size={14} style={{ color: "#25D366" }} />
                {p.label} · {p.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
