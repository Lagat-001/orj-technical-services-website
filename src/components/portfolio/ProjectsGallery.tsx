"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Video } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/motion";
import Lightbox from "@/components/ui/Lightbox";
import { projects, categories, type Project } from "@/data/projects";

export default function ProjectsGallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const showFilters = categories.length > 2; // more than just "All" + one category

  return (
    <>
      <Lightbox project={selected} onClose={() => setSelected(null)} />

      <section className="section">
        <div className="wrap">
          {showFilters && (
            <motion.div
              className="filter-row"
              variants={reduce ? undefined : fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`chip-btn${active === cat ? " active" : ""}`}
                  onClick={() => setActive(cat)}
                  aria-pressed={active === cat}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}

          <motion.div
            key={active}
            className="proj-grid"
            variants={reduce ? undefined : staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="sync">
              {filtered.map((p) => (
                <motion.button
                  key={p.slug}
                  type="button"
                  className="proj-card"
                  variants={reduce ? undefined : fadeUp}
                  layout={!reduce}
                  whileHover={reduce ? undefined : { y: -6 }}
                  onClick={() => setSelected(p)}
                  aria-label={`View ${p.title} — ${p.images.length} photos${p.videos.length ? `, ${p.videos.length} videos` : ""}`}
                >
                  <div className="proj-cover">
                    {p.cover && (
                      <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                    <div className="proj-badge">
                      <span>
                        <ImageIcon aria-hidden="true" />
                        {p.images.length}
                      </span>
                      {p.videos.length > 0 && (
                        <span>
                          <Video aria-hidden="true" />
                          {p.videos.length}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="proj-body">
                    <span className="proj-cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    {p.description && <p>{p.description}</p>}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
