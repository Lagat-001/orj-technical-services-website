import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { COMPANY } from "@/config/company";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-navy)" }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="ORJ Technical Services"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-white font-bold text-sm leading-tight">
                ORJ Technical<br />
                <span style={{ color: "var(--color-gold)" }}>Services L.L.C.</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Dubai&apos;s trusted partner for AC, ventilation, fit-outs, and technical maintenance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>AC Installation &amp; Maintenance</li>
              <li>Ventilation Systems</li>
              <li>Interior Fit-Outs</li>
              <li>Tiling Works</li>
              <li>Electrical &amp; Plumbing</li>
              <li>Manpower Supply</li>
              <li>Packing &amp; Moving</li>
              <li>Robotics &amp; Construction</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} style={{ color: "var(--color-gold)" }} />
                <a href={`tel:${COMPANY.phone1WA}`} className="hover:text-white transition-colors">
                  {COMPANY.phone1Display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} style={{ color: "var(--color-gold)" }} />
                <a href={`tel:${COMPANY.phone2WA}`} className="hover:text-white transition-colors">
                  {COMPANY.phone2Display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} style={{ color: "var(--color-gold)" }} />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.phone1WA}?text=${COMPANY.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white mt-1"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-10 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Dubai, UAE — Trade License No: {COMPANY.tradeLicense}</p>
        </div>
      </div>
    </footer>
  );
}
