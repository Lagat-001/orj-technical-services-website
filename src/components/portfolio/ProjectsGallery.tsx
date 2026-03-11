"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

type Category = "All" | "AC & HVAC" | "Fit-Out" | "Ventilation" | "Maintenance" | "Other";

const categories: Category[] = ["All", "AC & HVAC", "Fit-Out", "Ventilation", "Maintenance", "Other"];

const projects = [
  {
    id: 1,
    title: "Office Complex AC Overhaul",
    category: "AC & HVAC" as Category,
    location: "Business Bay, Dubai",
    description: "Complete VRF system installation for a 3-floor, 15,000 sqft office complex.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
  },
  {
    id: 2,
    title: "Retail Showroom Fit-Out",
    category: "Fit-Out" as Category,
    location: "Dubai Mall Area",
    description: "Full fit-out including false ceiling, partitions, flooring, and MEP for a 2,500 sqft showroom.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: 3,
    title: "Hotel Kitchen Ventilation",
    category: "Ventilation" as Category,
    location: "Deira, Dubai",
    description: "Industrial kitchen exhaust and fresh air system for a 4-star hotel kitchen.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    id: 4,
    title: "Villa AC Maintenance Contract",
    category: "Maintenance" as Category,
    location: "Jumeirah, Dubai",
    description: "Annual PPM contract covering 12 split units across a luxury villa compound.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    id: 5,
    title: "Warehouse HVAC System",
    category: "AC & HVAC" as Category,
    location: "Al Quoz Industrial, Dubai",
    description: "Supply and installation of industrial cooling and ventilation for 8,000 sqft warehouse.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    id: 6,
    title: "Restaurant Fit-Out",
    category: "Fit-Out" as Category,
    location: "JBR, Dubai",
    description: "Complete restaurant fit-out including kitchen, dining area, and all MEP works.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  },
  {
    id: 7,
    title: "School Ventilation Upgrade",
    category: "Ventilation" as Category,
    location: "Mirdif, Dubai",
    description: "Mechanical ventilation retrofit for 20 classrooms to improve indoor air quality.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&q=80",
  },
  {
    id: 8,
    title: "Medical Centre Maintenance",
    category: "Maintenance" as Category,
    location: "Healthcare City, Dubai",
    description: "Full facilities maintenance contract for a multi-specialty medical centre.",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600&q=80",
  },
  {
    id: 9,
    title: "Gym & Fitness Centre AC",
    category: "AC & HVAC" as Category,
    location: "Downtown Dubai",
    description: "High-capacity split and concealed AC system for a 4,000 sqft fitness centre.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    id: 10,
    title: "Luxury Villa Tiling",
    category: "Other" as Category,
    location: "Palm Jumeirah, Dubai",
    description: "Full floor and wall marble tiling for a 6,000 sqft luxury villa.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 11,
    title: "Commercial Electrical Upgrade",
    category: "Other" as Category,
    location: "DIFC, Dubai",
    description: "DB board upgrade and lighting redesign for a multi-floor commercial tower.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
  },
  {
    id: 12,
    title: "Office Relocation & Packing",
    category: "Other" as Category,
    location: "Business Bay, Dubai",
    description: "Full office packing, transport, and reinstallation for a 50-seat corporate office.",
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&q=80",
  },
];

export default function ProjectsGallery() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={
                active === cat
                  ? { backgroundColor: "var(--color-navy)", color: "white" }
                  : { backgroundColor: "white", color: "#6B7280", border: "1px solid #E5E7EB" }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="sync">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                layout
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(212,175,55,0.15)", color: "var(--color-gold)" }}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-bold text-base mt-2 mb-1" style={{ color: "var(--color-navy)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF" }}>
                    <MapPin size={12} />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
