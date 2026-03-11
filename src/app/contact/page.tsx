import { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact — ORJ Technical Services L.L.C.",
  description:
    "Contact ORJ Technical Services in Dubai. WhatsApp, call, or email us for a free quote.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-steel) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
            Reach Us
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Get a free consultation and quote. We respond within 1 hour.
          </p>
        </div>
      </section>

      <ContactContent />
    </>
  );
}
