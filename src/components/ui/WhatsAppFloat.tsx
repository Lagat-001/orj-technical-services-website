"use client";

import { motion, useReducedMotion } from "framer-motion";
import { COMPANY } from "@/config/company";

// Official WhatsApp icon — inline SVG, no external dependency
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 3C9.373 3 4 8.373 4 15c0 2.385.697 4.607 1.898 6.484L4 29l7.703-1.873A11.946 11.946 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
        fill="white"
      />
      <path
        d="M16 5.5c-5.238 0-9.5 4.262-9.5 9.5 0 2.02.63 3.894 1.706 5.432l-1.12 4.082 4.216-1.094A9.45 9.45 0 0016 24.5c5.238 0 9.5-4.262 9.5-9.5S21.238 5.5 16 5.5zm4.658 13.415c-.195.543-1.13 1.04-1.565 1.106-.4.06-.906.085-1.46-.092-.336-.107-.768-.25-1.32-.49-2.32-1.003-3.836-3.35-3.952-3.506-.115-.156-.94-1.25-.94-2.382 0-1.133.594-1.69.803-1.922.21-.232.458-.29.61-.29.154 0 .307.001.441.008.14.007.33-.053.517.394.195.464.66 1.607.717 1.724.057.117.095.254.019.41-.077.156-.115.253-.23.39-.115.137-.241.306-.345.41-.115.116-.235.242-.1.474.133.232.59.974 1.267 1.577.87.775 1.603 1.015 1.835 1.13.232.116.368.097.503-.058.136-.155.578-.674.733-.906.154-.232.308-.193.518-.116.21.077 1.336.63 1.565.745.23.116.384.174.44.27.057.097.057.56-.137 1.103z"
        fill="#25D366"
      />
    </svg>
  );
}

const bubbles = [
  { label: "Sales", number: COMPANY.phone1WA, display: COMPANY.phone1Display },
  { label: "Support", number: COMPANY.phone2WA, display: COMPANY.phone2Display },
];

export default function WhatsAppFloat() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {bubbles.map((b, i) => (
        <motion.a
          key={b.number}
          href={`https://wa.me/${b.number}?text=${COMPANY.whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${b.label} — ${b.display}`}
          className="group flex items-center gap-2 justify-end"
          // Staggered pulse animation — each bubble offset slightly
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.08, 1] }
          }
          transition={
            shouldReduceMotion
              ? {}
              : {
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 3 + i * 1.2,
                  ease: "easeInOut",
                  delay: i * 0.6,
                }
          }
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Label pill — appears on hover */}
          <span
            className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 text-xs font-semibold text-white px-3 py-1.5 rounded-full shadow-md whitespace-nowrap"
            style={{ backgroundColor: "#075E54" }}
          >
            {b.label} · {b.display}
          </span>

          {/* Bubble */}
          <span
            className="flex items-center justify-center rounded-full shadow-xl"
            style={{
              backgroundColor: "#25D366",
              width: 52,
              height: 52,
              boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
            }}
          >
            <WhatsAppIcon size={28} />
          </span>
        </motion.a>
      ))}
    </div>
  );
}
