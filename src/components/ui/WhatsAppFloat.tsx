import { COMPANY } from "@/config/company";
import { WhatsAppIcon } from "@/components/ui/Icons";

const bubbles = [
  { label: "Sales", number: COMPANY.phone1WA, display: COMPANY.phone1Display },
  { label: "Support", number: COMPANY.phone2WA, display: COMPANY.phone2Display },
];

export default function WhatsAppFloat() {
  return (
    <div className="fab-stack">
      {bubbles.map((b) => (
        <span className="fab-item" key={b.number}>
          <span className="fab-label" aria-hidden="true">
            {b.label} · {b.display}
          </span>
          <a
            className="fab"
            href={`https://wa.me/${b.number}?text=${COMPANY.whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${b.label} — ${b.display}`}
          >
            <WhatsAppIcon />
          </a>
        </span>
      ))}
    </div>
  );
}
