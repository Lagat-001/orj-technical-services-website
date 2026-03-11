"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

type Category = "All" | "AC & HVAC" | "Fit-Out" | "Ventilation" | "Maintenance";

const categories: Category[] = ["All", "AC & HVAC", "Fit-Out", "Ventilation", "Maintenance"];

const projects = [
  {
    id: 1,
    title: "Office Complex AC Overhaul",
    category: "AC & HVAC" as Category,
    location: "Business Bay, Dubai",
    description: "Complete VRF system installation for a 3-floor, 15,000 sqft office complex.",
    // Industrial HVAC / AC units on rooftop
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
  },
  {
    id: 2,
    title: "Retail Showroom Fit-Out",
    category: "Fit-Out" as Category,
    location: "Dubai Mall Area",
    description: "Full fit-out including false ceiling, partitions, flooring, and MEP for a 2,500 sqft showroom.",
    // Modern office interior fit-out
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: 3,
    title: "Hotel Kitchen Ventilation",
    category: "Ventilation" as Category,
    location: "Deira, Dubai",
    description: "Industrial kitchen exhaust and fresh air system for a 4-star hotel kitchen.",
    // Industrial ventilation / ductwork
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    id: 4,
    title: "Villa AC Maintenance Contract",
    category: "Maintenance" as Category,
    location: "Jumeirah, Dubai",
    description: "Annual PPM contract covering 12 split units across a luxury villa compound.",
    // Technician working on AC unit
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    id: 5,
    title: "Warehouse HVAC System",
    category: "AC & HVAC" as Category,
    location: "Al Quoz Industrial, Dubai",
    description: "Supply and installation of industrial cooling and ventilation for 8,000 sqft warehouse.",
    // Large industrial warehouse interior
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    id: 6,
    title: "Restaurant Fit-Out",
    category: "Fit-Out" as Category,
    location: "JBR, Dubai",
    description: "Complete restaurant fit-out including kitchen, dining area, and all MEP works.",
    // Restaurant interior modern
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  },
  {
    id: 7,
    title: "School Ventilation Upgrade",
    category: "Ventilation" as Category,
    location: "Mirdif, Dubai",
    description: "Mechanical ventilation retrofit for 20 classrooms to improve indoor air quality.",
    // Ceiling ductwork / ventilation grills
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&q=80",
  },
  {
    id: 8,
    title: "Medical Centre Maintenance",
    category: "Maintenance" as Category,
    location: "Healthcare City, Dubai",
    description: "Full facilities maintenance contract for a multi-specialty medical centre.",
    // Maintenance technician / tools
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600&q=80",
  },
  {
    id: 9,
    title: "Gym & Fitness Centre AC",
    category: "AC & HVAC" as Category,
    location: "Downtown Dubai",
    description: "High-capacity split and concealed AC system for a 4,000 sqft fitness centre.",
    // Modern gym / fitness interior
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
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
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-200"
              }`}
              style={active === cat ? { backgroundColor: "var(--color-navy)" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Project photo */}
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
                  style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "var(--color-gold)" }}
                >
                  {project.category}
                </span>
                <h3 className="font-bold text-base mt-2 mb-1" style={{ color: "var(--color-navy)" }}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">{project.description}</p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <MapPin size={12} />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
