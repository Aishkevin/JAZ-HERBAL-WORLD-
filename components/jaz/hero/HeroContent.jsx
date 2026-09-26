import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LINES = [
  [{ t: "Nature's Secret" }],
  [{ t: "for " }, { t: "Beautiful,", em: true }],
  [{ t: "Healthy Hair.", em: true }],
];
const ease = [0.22, 1, 0.36, 1];
const fade = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d, ease } });

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <motion.p className="eyebrow flex items-center gap-3" {...fade(0.9)}>
        <span className="h-px w-8 bg-gold" /> JAZ Herbal World
      </motion.p>
      <h1 className="display mt-6 text-[3.1rem] text-cream sm:text-6xl lg:text-[5.4rem]">
        {LINES.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-1">
            <motion.span className="block" {...fade(1 + i * 0.12)}>
              {line.map((w, j) => (
                <span key={j} className={w.em ? "italic text-gold-soft" : ""}>{w.t}</span>
              ))}
            </motion.span>
          </span>
        ))}
      </h1>
      <motion.p className="mt-7 max-w-md text-[17px] leading-[1.7] text-cream/75" {...fade(1.4)}>
        A 100% natural hair oil crafted from a blend of <span className="text-cream">25+ traditional herbs</span> to care for your scalp and hair. No chemicals. No side effects.
      </motion.p>
      <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(1.55)}>
        <a href="#product" className="btn-gold"><span>Explore the Oil</span><ArrowRight className="h-4 w-4" /></a>
        <a href="#order" className="btn-ghost">Shop Now</a>
      </motion.div>
      <motion.dl className="mt-12 flex gap-10 border-t border-cream/10 pt-6" {...fade(1.7)}>
        {[["25+", "Herbs"], ["45", "Days to results"], ["0", "Chemicals"]].map(([n, l]) => (
          <div key={l}>
            <dt className="sr-only">{l}</dt>
            <dd className="display text-3xl text-cream">{n}</dd>
            <dd className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/50">{l}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  );
}