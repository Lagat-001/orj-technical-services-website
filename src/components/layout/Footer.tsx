import { COMPANY } from "@/config/company";
import { PhoneIcon, MailIcon, PinIcon, GlobeIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer>
      <div className="f-accent" aria-hidden="true" />
      <div className="f-main">
        <div className="wrap">
          <div className="f-addr">
            <PinIcon />
            {COMPANY.address}
          </div>

          <div className="f-contacts">
            <a href={`tel:+${COMPANY.phone1WA}`}>
              <PhoneIcon />
              {COMPANY.phone1Display}
            </a>
            <span className="dot">•</span>
            <a href={`tel:+${COMPANY.phone2WA}`}>
              <PhoneIcon />
              {COMPANY.phone2Display}
            </a>
            <span className="dot">•</span>
            <a href={`mailto:${COMPANY.email}`}>
              <MailIcon />
              {COMPANY.email}
            </a>
            <span className="dot">•</span>
            <a href={`https://${COMPANY.website}`}>
              <GlobeIcon />
              {COMPANY.website}
            </a>
          </div>

          <div className="f-ar" lang="ar" dir="rtl">
            {COMPANY.nameArabic}
          </div>

          <div className="f-copy">
            © {new Date().getFullYear()} {COMPANY.name} · Trade License No. {COMPANY.tradeLicense} ·
            Dubai, United Arab Emirates
          </div>
        </div>
      </div>
    </footer>
  );
}
