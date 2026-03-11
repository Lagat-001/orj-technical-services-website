"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { COMPANY } from "@/config/company";

const services = [
  {
    id: "ac",
    title: "Air-Conditioning Installation & Maintenance",
    description:
      "Supply, installation, and commissioning of split, VRF/VRV, chiller, and central AC systems — for villas, offices, retail, and industrial facilities.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    subServices: [
      "Split AC installation & removal",
      "VRF/VRV multi-zone systems",
      "Chiller & AHU systems",
      "Ducted central AC",
      "AC relocation & gas top-up",
    ],
  },
  {
    id: "ventilation",
    title: "Ventilation Systems",
    description:
      "Design and installation of mechanical ventilation, fresh air handling units, exhaust systems, and ductwork for commercial and residential spaces.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    subServices: [
      "Mechanical ventilation design",
      "Fresh air handling units (AHU/FCU)",
      "Kitchen & toilet exhaust systems",
      "Duct fabrication & installation",
      "Indoor air quality solutions",
    ],
  },
  {
    id: "fitout",
    title: "Interior Fit-Outs & Space Enhancements",
    description:
      "Complete interior fit-out from shell & core to full handover — partitions, ceilings, flooring, joinery, painting, and all MEP works.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    subServices: [
      "Office & retail fit-out",
      "False ceiling & partition systems",
      "Joinery & carpentry",
      "Painting & finishing",
      "Full MEP works",
    ],
  },
  {
    id: "tiling",
    title: "Tiling Works",
    description:
      "Professional floor and wall tiling services for residential, commercial, and hospitality projects — all tile types and formats.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    subServices: [
      "Floor & wall tiling",
      "Large-format porcelain & marble",
      "Grouting & waterproofing",
      "Pool & bathroom tiling",
      "Tile repair & replacement",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Services",
    description:
      "Low-voltage electrical installations, panel upgrades, lighting design, and DEWA-approved works for commercial and residential projects.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    subServices: [
      "DB board installation & upgrade",
      "Lighting design & installation",
      "Cable laying & containment",
      "DEWA submissions & approvals",
      "Emergency lighting & exit signs",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    description:
      "Full-scope plumbing works including supply, drainage, hot water systems, and leak detection for residential and commercial properties.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
    subServices: [
      "Supply & drainage pipe works",
      "Hot water system installation",
      "Leak detection & repair",
      "Sanitary ware installation",
      "Water pump supply & installation",
    ],
  },
  {
    id: "manpower",
    title: "Manpower Supply",
    description:
      "Skilled and semi-skilled technical manpower for short-term and long-term projects across construction, MEP, and facilities management.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    subServices: [
      "AC technicians & helpers",
      "Electricians & plumbers",
      "Tilers & carpenters",
      "Labourers & site workers",
      "Long-term secondment contracts",
    ],
  },
  {
    id: "moving",
    title: "Packing & Moving Services",
    description:
      "Reliable, professional packing and relocation services for homes, offices, and commercial spaces across the UAE.",
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&q=80",
    subServices: [
      "Residential & office moving",
      "Professional packing & wrapping",
      "Furniture disassembly & assembly",
      "Secure loading & transport",
      "Storage solutions",
    ],
  },
  {
    id: "robotics",
    title: "Robotics & Modern Construction Systems",
    description:
      "Integration of modern robotic systems and smart technologies into construction and facility management for efficiency and precision.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    subServices: [
      "Robotic surface preparation",
      "Automated inspection systems",
      "Smart HVAC control systems",
      "BMS integration",
      "Technology-driven FM solutions",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col cursor-default"
              style={{ willChange: "transform" }}
            >
              {/* Service image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay on image */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,31,63,0.4) 0%, transparent 60%)" }}
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: "var(--color-navy)" }}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {service.subServices.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                        style={{ backgroundColor: "var(--color-gold)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${COMPANY.phone1WA}?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={15} />
                  Get a Quote
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90 shadow-sm"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
