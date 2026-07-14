// Inline SVG icon set ported verbatim from the approved reference.
// Stroke icons inherit currentColor; sizing comes from the parent CSS.

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon() {
  return (
    <svg {...stroke}>
      <path d="M4.5 5.5c0 8 6 14 14 14 .9 0 1.5-.6 1.5-1.5v-2.3c0-.7-.4-1.2-1-1.4l-3-1c-.6-.2-1.2 0-1.5.5l-.8 1.1a11 11 0 0 1-4.9-4.9l1.1-.8c.5-.3.7-.9.5-1.5l-1-3c-.2-.6-.7-1-1.4-1H6C5.1 4 4.5 4.6 4.5 5.5z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3.5,6.5 12,13 20.5,6.5" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg {...stroke}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg {...stroke}>
      <path d="M12 3l7 2.6v5.1c0 4.6-3 8.2-7 9.6-4-1.4-7-5-7-9.6V5.6z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg {...stroke}>
      <path d="M12 3.5l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function EngineerIcon() {
  return (
    <svg {...stroke}>
      <circle cx="12" cy="8.5" r="3.2" />
      <path d="M5 19.5c.7-3.4 3.4-5.3 7-5.3s6.3 1.9 7 5.3" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg {...stroke}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.2 1.1-1.7 1.2-.4 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.3.5c-.2.2-.3.4-.1.7.1.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.3.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3 0 .1 0 .7-.3 1.7z" />
    </svg>
  );
}

/* ---- Service icons (reference) ---- */
const svc = { ...stroke, strokeWidth: 1.9 };

export function AcIcon() {
  return (
    <svg {...svc}>
      <path d="M12 2.5v19M4.5 6.5l15 11M19.5 6.5l-15 11M12 2.5l-2 2M12 2.5l2 2M12 21.5l-2-2M12 21.5l2-2" />
    </svg>
  );
}

export function VentIcon() {
  return (
    <svg {...svc}>
      <path d="M3 8h9.5a3 3 0 1 0-3-3M3 12h13.5a3 3 0 1 1-3 3M3 16h7a2.5 2.5 0 1 1-2.5 2.5" />
    </svg>
  );
}

export function MepIcon() {
  return (
    <svg {...svc}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
    </svg>
  );
}

export function BoltIcon() {
  return (
    <svg {...svc}>
      <path d="M13 2 4.5 13.5H11L9.8 22 18.5 10H12z" />
    </svg>
  );
}

export function DropIcon() {
  return (
    <svg {...svc}>
      <path d="M12 3.5s6 6.2 6 10.5a6 6 0 0 1-12 0C6 9.7 12 3.5 12 3.5z" />
    </svg>
  );
}

export function ManpowerIcon() {
  return (
    <svg {...svc}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c.6-3 2.9-4.6 5.5-4.6s4.9 1.6 5.5 4.6" />
      <circle cx="16.8" cy="9.5" r="2.4" />
      <path d="M15.8 14.7c2.2.3 3.9 1.8 4.5 4.3" />
    </svg>
  );
}

/* ---- Media count badges ---- */
export function PhotoIcon() {
  return (
    <svg {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="M21 16l-5-5-6 6" />
    </svg>
  );
}

export function VideoIcon() {
  return (
    <svg {...stroke}>
      <rect x="2.5" y="6" width="13" height="12" rx="2" />
      <path d="M15.5 10.5l6-3v9l-6-3z" />
    </svg>
  );
}

/** Letterhead double-rule motif used beneath section headings. */
export function DoubleRule({ center = false }: { center?: boolean }) {
  return (
    <div className={center ? "dbl center" : "dbl"} aria-hidden="true">
      <i />
      <em />
    </div>
  );
}
