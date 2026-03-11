import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/config/company";

export default function CTASection() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-steel) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Contact us for a free consultation and quote. Our team responds within 1 hour.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${COMPANY.phone1WA}?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle size={18} />
            WhatsApp for a Free Quote
          </a>
          <a
            href={`tel:${COMPANY.phone1WA}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors text-sm"
          >
            <Phone size={18} />
            {COMPANY.phone1Display}
          </a>
        </div>
      </div>
    </section>
  );
}
