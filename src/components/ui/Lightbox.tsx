"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, MapPin } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  category: string;
  image: string;
}

interface LightboxProps {
  project: Project | null;
  onClose: () => void;
}

export default function Lightbox({ project, onClose }: LightboxProps) {
  const shouldReduceMotion = useReducedMotion();

  // Close on ESC key
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="lightbox-backdrop"
            className="fixed inset-0 z-[60] bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReduceMotion ? 0.8 : 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="lightbox-modal"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={onClose}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority
                />
                {/* Close button */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                >
                  <X size={18} className="text-white" />
                </button>
                {/* Category badge on image */}
                <span
                  className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(212,175,55,0.9)", color: "#001F3F" }}
                >
                  {project.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2" style={{ color: "var(--color-navy)" }}>
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                  {project.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "#9CA3AF" }}>
                  <MapPin size={13} />
                  {project.location}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
