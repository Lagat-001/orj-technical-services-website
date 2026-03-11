"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/config/company";

const bubbles = [
  { label: "Sales", number: COMPANY.phone1WA, display: COMPANY.phone1Display },
  { label: "Support", number: COMPANY.phone2WA, display: COMPANY.phone2Display },
];

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {bubbles.map((b) => (
        <a
          key={b.number}
          href={`https://wa.me/${b.number}?text=${COMPANY.whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${b.label} — ${b.display}`}
          className="group flex items-center gap-2 justify-end"
        >
          {/* Label pill — shows on hover */}
          <span
            className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 text-xs font-semibold text-white px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
            style={{ backgroundColor: "#128C7E" }}
          >
            {b.label} · {b.display}
          </span>

          {/* Circle bubble */}
          <span
            className="flex items-center justify-center w-13 h-13 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: "#25D366",
              width: 52,
              height: 52,
            }}
          >
            <MessageCircle size={26} className="text-white" />
          </span>
        </a>
      ))}
    </div>
  );
}
