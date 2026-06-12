"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 12, suffix: "+", label: "Years Experience" },
  { target: 35, suffix: "+", label: "Projects Completed" },
  { target: 15, suffix: "+", label: "Happy Clients" },
  { target: 9, suffix: "", label: "Services Offered" },
];

const DURATION = 1400; // ms
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [values, setValues] = useState<number[]>(() => stats.map(() => 0));

  useEffect(() => {
    let raf = 0;

    // Respect reduced motion: show final numbers immediately (next frame).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(() => setValues(stats.map((s) => s.target)));
      return () => cancelAnimationFrame(raf);
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();

        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / DURATION, 1);
          const eased = easeOutCubic(p);
          setValues(stats.map((s) => Math.round(s.target * eased)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="section stats">
      <div className="wrap">
        <div className="stats-grid" ref={ref}>
          {stats.map((s, i) => (
            <div className="stat" key={s.label}>
              <div className="num">
                <span className="val">{values[i].toLocaleString()}</span>
                <span className="suf">{s.suffix}</span>
              </div>
              <div className="lbl">{s.label}</div>
              <div className="bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
