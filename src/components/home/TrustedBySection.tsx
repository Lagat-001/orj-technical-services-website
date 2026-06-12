"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const clients = [
  { name: "Azizi Developments", src: "/azizi.png", w: 400, h: 223 },
  { name: "DAMAC Properties", src: "/damac.jpg", w: 447, h: 447 },
  { name: "Vision Packing", src: "/vision.png", w: 254, h: 36 },
  { name: "Wavex", src: "/wavex.png", w: 512, h: 157 },
];

export default function TrustedBySection() {
  return (
    <section className="section">
      <div className="wrap clients">
        <motion.div
          className="sec-head center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="eyebrow">Trusted by</span>
          <h2>Leading companies in the UAE</h2>
        </motion.div>

        <motion.div
          className="client-row"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {clients.map((c) => (
            <figure key={c.name}>
              <Image
                src={c.src}
                alt={c.name}
                width={c.w}
                height={c.h}
                className="h-[54px] w-auto object-contain"
              />
              <figcaption>{c.name}</figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
