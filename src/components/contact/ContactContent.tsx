"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/config/company";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: FormData) {
    const subject = encodeURIComponent(`Service Inquiry: ${data.service}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "N/A"}\nService: ${data.service}\n\nMessage:\n${data.message || "N/A"}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Contact info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
              Get in Touch
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
              Contact Us
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We respond to all inquiries within 1 hour during business hours.
              For urgent requests, WhatsApp gets the fastest response.
            </p>

            <div className="space-y-4">
              {/* WhatsApp 1 */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#25D366" }}>
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-navy)" }}>WhatsApp — Sales</p>
                  <a href={`https://wa.me/${COMPANY.phone1WA}?text=${COMPANY.whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "#25D366" }}>
                    {COMPANY.phone1Display} →
                  </a>
                </div>
              </div>

              {/* WhatsApp 2 */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#25D366" }}>
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-navy)" }}>WhatsApp — Support</p>
                  <a href={`https://wa.me/${COMPANY.phone2WA}?text=${COMPANY.whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "#25D366" }}>
                    {COMPANY.phone2Display} →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-steel)" }}>
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-navy)" }}>Phone</p>
                  <a href={`tel:${COMPANY.phone1WA}`} className="text-sm text-gray-600 hover:underline block">{COMPANY.phone1Display}</a>
                  <a href={`tel:${COMPANY.phone2WA}`} className="text-sm text-gray-600 hover:underline block">{COMPANY.phone2Display}</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-steel)" }}>
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-navy)" }}>Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-sm text-gray-600 hover:underline">{COMPANY.email}</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-navy)" }}>
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-navy)" }}>Address</p>
                  <p className="text-sm text-gray-600">{COMPANY.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-gold)" }}>
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-navy)" }}>Working Hours</p>
                  <p className="text-sm text-gray-600">{COMPANY.workingHours}</p>
                  <p className="text-sm text-gray-600">{COMPANY.emergencySupport}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <CheckCircle2 size={56} className="mb-4" style={{ color: "#25D366" }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-navy)" }}>Message Sent!</h3>
                <p className="text-gray-500 text-sm">
                  Your email client should have opened. If not, email us directly at{" "}
                  <a href={`mailto:${COMPANY.email}`} className="underline" style={{ color: "var(--color-steel)" }}>
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--color-navy)" }}>
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register("name")}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      {...register("phone")}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Email (optional)</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      {...register("email")}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Service Required *</label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    >
                      <option value="">Select a service</option>
                      <option>AC Installation</option>
                      <option>AC Maintenance</option>
                      <option>Ventilation System</option>
                      <option>Fit-Out Works</option>
                      <option>Electrical Works</option>
                      <option>Other / General Inquiry</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your requirement..."
                      {...register("message")}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "var(--color-navy)" }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    Or reach us instantly via{" "}
                    <a href={`https://wa.me/${COMPANY.phone1WA}`} target="_blank" rel="noopener noreferrer" className="font-medium" style={{ color: "#25D366" }}>
                      WhatsApp
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231612.2847684268!2d55.07873055!3d25.20484445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ORJ Technical Services Location — Dubai, UAE"
          />
        </div>
      </div>
    </section>
  );
}
