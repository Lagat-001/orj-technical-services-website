"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

const stats = [
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 500, suffix: "+", label: "Projects Completed" },
  { end: 200, suffix: "+", label: "Happy Clients" },
  { end: 9, suffix: "", label: "Services Offered" },
];

function useCountUp(end: number, active: boolean, duration = 1.8) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = end / (duration * 60);
    const id = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [active, end, duration]);
  return count;
}

function CountUpStat({
  end,
  suffix,
  label,
  shouldReduceMotion,
}: {
  end: number;
  suffix: string;
  label: string;
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  // If reduced motion, skip count-up and show final value immediately
  const active = shouldReduceMotion ? true : inView;
  const count = useCountUp(end, active, shouldReduceMotion ? 0 : 1.8);

  return (
    <motion.div
      ref={ref}
      variants={shouldReduceMotion ? {} : fadeUp}
      className="py-2"
    >
      <div
        className="text-4xl sm:text-5xl font-extrabold mb-1 tracking-tight tabular-nums"
        style={{ color: "var(--color-gold)" }}
      >
        {count}{suffix}
      </div>
      <div
        className="text-sm font-medium uppercase tracking-wider"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section style={{ backgroundColor: "var(--color-navy)" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={shouldReduceMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <CountUpStat
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
