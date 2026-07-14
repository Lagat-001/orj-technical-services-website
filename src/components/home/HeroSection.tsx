import Image from "next/image";
import { COMPANY } from "@/config/company";
import {
  ShieldIcon,
  StarIcon,
  ClockIcon,
  CheckIcon,
  EngineerIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const chips = [
  { icon: <ShieldIcon />, label: "Licensed & Insured" },
  { icon: <StarIcon />, label: "Certified Engineers" },
  { icon: <ClockIcon />, label: "24/7 Emergency Support" },
];

const trust = [
  { icon: <ShieldIcon />, label: "Fully Licensed in the UAE" },
  { icon: <CheckIcon />, label: "DEWA-Approved Works" },
  { icon: <EngineerIcon />, label: "Certified Engineers" },
  { icon: <ClockIcon />, label: "Response Within 1 Hour" },
];

export default function HeroSection() {
  return (
    <>
      <section className="hero" id="top">
        {/* Existing photography retained, sitting beneath the green brand wash */}
        <div className="hero-photo" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wm" aria-hidden="true" />

        <div className="wrap in">
          <span className="eyebrow">Dubai — United Arab Emirates</span>
          <h1>
            Beat the Dubai heat. Stay <span className="hl">cool</span>, year round.
          </h1>
          <p className="lede">
            Air conditioning, ventilation, fit-out and full technical services — engineered by
            certified specialists and trusted across the UAE since 2014.
          </p>

          <div className="chips">
            {chips.map((c) => (
              <span className="chip" key={c.label}>
                {c.icon}
                {c.label}
              </span>
            ))}
          </div>

          <div className="hero-cta">
            <a
              className="btn btn-wa"
              href={`https://wa.me/${COMPANY.phone1WA}?text=${COMPANY.quoteMsg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp for a free quote
            </a>
            <a className="btn btn-ghost" href={`tel:+${COMPANY.phone1WA}`}>
              Call {COMPANY.phone1Display}
            </a>
          </div>
        </div>
      </section>

      <div className="trust" role="list" aria-label="Trust points">
        <div className="wrap grid">
          {trust.map((t) => (
            <div className="item" role="listitem" key={t.label}>
              <span className="ic">{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
