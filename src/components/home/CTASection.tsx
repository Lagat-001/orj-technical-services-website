import { COMPANY } from "@/config/company";
import {
  CheckIcon,
  PinIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const promises = [
  "Free site assessment",
  "Transparent, itemised quotations",
  "Response within one hour",
];

// The reference contact panel. Also reused on /services, /about and /portfolio.
export default function CTASection() {
  return (
    <section className="sect" id="contact">
      <div className="wrap">
        <div className="contact-panel">
          <div>
            <span className="s-eyebrow">Get in touch</span>
            <h2>Get your free quote today</h2>
            <p className="lede">
              Tell us what you need — we assess, quote and schedule fast, anywhere in Dubai.
            </p>
            <ul className="ticks" style={{ marginTop: 20 }}>
              {promises.map((p) => (
                <li key={p}>
                  <CheckIcon />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="ccard">
            <div className="crow">
              <span className="ic">
                <PinIcon />
              </span>
              <div>
                <small>Visit us</small>
                <div className="v">{COMPANY.address}</div>
              </div>
            </div>

            <div className="crow">
              <span className="ic">
                <PhoneIcon />
              </span>
              <div>
                <small>Call us</small>
                <a href={`tel:+${COMPANY.phone1WA}`}>{COMPANY.phone1Display}</a>
                <a href={`tel:+${COMPANY.phone2WA}`}>{COMPANY.phone2Display}</a>
              </div>
            </div>

            <div className="crow">
              <span className="ic">
                <MailIcon />
              </span>
              <div>
                <small>Email us</small>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </div>

            <div className="btns">
              <a
                className="btn btn-wa"
                href={`https://wa.me/${COMPANY.phone1WA}?text=${COMPANY.quoteMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp us
              </a>
              <a className="btn btn-call" href={`tel:+${COMPANY.phone1WA}`}>
                Call {COMPANY.phone1Display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
