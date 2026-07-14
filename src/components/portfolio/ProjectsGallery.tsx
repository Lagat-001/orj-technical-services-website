"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";
import { projects, categories, type Project } from "@/data/projects";
import { PhotoIcon, VideoIcon } from "@/components/ui/Icons";

export default function ProjectsGallery() {
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const showFilters = categories.length > 2; // more than just "All" + one category

  return (
    <>
      <Lightbox project={selected} onClose={() => setSelected(null)} />

      <section className="sect tinted">
        <div className="wrap">
          {showFilters && (
            <div className="filter-row">
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
            </div>
          )}

          <div className="pf-grid">
            {filtered.map((p) => (
              <button
                key={p.slug}
                type="button"
                className="pf"
                onClick={() => setSelected(p)}
                aria-label={`View ${p.title} — ${p.images.length} photos${p.videos.length ? `, ${p.videos.length} videos` : ""}`}
              >
                <div className="thumb">
                  {p.cover && (
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  )}
                  <span className="cat">{p.category}</span>
                  <span className="count">
                    <span>
                      <PhotoIcon />
                      {p.images.length}
                    </span>
                    {p.videos.length > 0 && (
                      <span>
                        <VideoIcon />
                        {p.videos.length}
                      </span>
                    )}
                  </span>
                </div>
                <div className="body">
                  <h3>{p.title}</h3>
                  {p.description && <p>{p.description}</p>}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
