"use client";

import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon, Video, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";

const MotionLink = motion.create(Link);

export default function FeaturedWork() {
  const reduce = useReducedMotion();

  // Manifest is ordered most-recent first.
  const featured = projects.slice(0, 4);
  if (featured.length === 0) return null;

  return (
    <section className="section ice">
      <div className="wrap">
        <motion.div
          className="sec-head center"
          variants={reduce ? undefined : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="eyebrow">Featured work</span>
          <h2>Recent projects across the UAE</h2>
          <p>Real photos and clips from jobs our team has delivered on the ground.</p>
        </motion.div>

        <motion.div
          className="proj-grid"
          variants={reduce ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featured.map((p) => (
            <MotionLink
              key={p.slug}
              href="/portfolio"
              className="proj-card"
              variants={reduce ? undefined : fadeUp}
              whileHover={reduce ? undefined : { y: -6 }}
              aria-label={`${p.title} — view in portfolio`}
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
            </MotionLink>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          variants={reduce ? undefined : fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link href="/portfolio" className="btn btn-cyan">
            View all projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
