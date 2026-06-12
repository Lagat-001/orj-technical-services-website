"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

type Media = { type: "image" | "video"; src: string };

interface LightboxProps {
  project: Project | null;
  onClose: () => void;
}

// Plain <video src>/poster need encoded URLs; next/image encodes on its own.
const enc = (p: string) => encodeURI(p);

export default function Lightbox({ project, onClose }: LightboxProps) {
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const [prevSlug, setPrevSlug] = useState<string | null>(null);

  // Reset to the first item when a new project opens (adjust state during render
  // — React's recommended alternative to a setState-in-effect).
  const slug = project?.slug ?? null;
  if (slug !== prevSlug) {
    setPrevSlug(slug);
    setIndex(0);
  }

  const media: Media[] = useMemo(() => {
    if (!project) return [];
    return [
      ...project.images.map((src) => ({ type: "image" as const, src })),
      ...project.videos.map((src) => ({ type: "video" as const, src })),
    ];
  }, [project]);

  const count = media.length;
  const go = useCallback(
    (dir: number) => setIndex((i) => (count ? (i + dir + count) % count : 0)),
    [count]
  );

  // Lock body scroll while open.
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [project]);

  // Keyboard: Esc to close, arrows to navigate, Tab trapped within the dialog.
  useEffect(() => {
    if (!project) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    // Move focus into the dialog on open.
    const focusTimer = window.setTimeout(() => dialogRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" && count > 1) {
        e.preventDefault();
        go(-1);
        return;
      }
      if (e.key === "ArrowRight" && count > 1) {
        e.preventDefault();
        go(1);
        return;
      }
      if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;
        const focusable = root.querySelectorAll<HTMLElement>(
          'button, a[href], video, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const activeEl = document.activeElement;
        if (e.shiftKey && (activeEl === first || activeEl === root)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && activeEl === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      restoreFocusRef.current?.focus?.();
    };
  }, [project, count, go, onClose]);

  const current = media[index];

  return (
    <AnimatePresence>
      {project && current && (
        <motion.div
          ref={dialogRef}
          className="orj-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — media viewer`}
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
        >
          {/* Header */}
          <div className="orj-lightbox-head">
            <div>
              <div className="orj-lightbox-title">{project.title}</div>
              <div className="orj-lightbox-cat">{project.category}</div>
            </div>
            <button className="orj-lb-btn" onClick={onClose} aria-label="Close viewer">
              <X size={20} />
            </button>
          </div>

          {/* Stage */}
          <div className="orj-lightbox-stage">
            {count > 1 && (
              <button
                className="orj-lb-btn orj-lb-nav prev"
                onClick={() => go(-1)}
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <div className="orj-lightbox-media">
              {current.type === "image" ? (
                <Image
                  key={current.src}
                  src={current.src}
                  alt={`${project.title} — image ${index + 1}`}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              ) : (
                <video
                  key={current.src}
                  controls
                  preload="metadata"
                  playsInline
                  poster={project.cover ? enc(project.cover) : undefined}
                >
                  <source src={enc(current.src)} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {count > 1 && (
              <button
                className="orj-lb-btn orj-lb-nav next"
                onClick={() => go(1)}
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Footer counter */}
          <div className="orj-lightbox-foot">
            {current.type === "video" ? "VIDEO · " : ""}
            {index + 1} / {count}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
