import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMAGES, PILLARS } from "@/lib/jazData";

const DOTS = Array.from({ length: 25 }, (_, i) => i);

export default function HerbOrbit({ active, onActive }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });
  const wx = useTransform(sx, (v) => v * -18);
  const wy = useTransform(sy, (v) => v * -18);

  const onMove = (e) => {
    if (reduce) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div ref={ref} onPointerMove={onMove} className="relative mx-auto aspect-square w-full max-w-[560px]">
      <motion.div style={{ x: wx, y: wy }} className="absolute inset-[12%] overflow-hidden rounded-full">
        <Image src={IMAGES.herbWreath} alt="A wreath of dried herbs, roots, leaves and flower petals" className="h-full w-full object-cover" loading="lazy" />
      </motion.div>
      <div className="animate-spin-slow absolute inset-0">
        {DOTS.map((i) => (
          <span key={i} className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/70 shadow-[0_0_8px_#C4A468]" style={{ left: `${50 + Math.cos((i / 25) * Math.PI * 2) * 40}%`, top: `${50 + Math.sin((i / 25) * Math.PI * 2) * 40}%` }} />
        ))}
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="display text-7xl text-cream md:text-8xl">25+</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-cream/70">Traditional herbs</p>
        </div>
      </div>
      {PILLARS.map((p, i) => {
        const a = (i / PILLARS.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <button key={p.title} type="button" onMouseEnter={() => onActive(i)} onFocus={() => onActive(i)} onClick={() => onActive(i)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] backdrop-blur transition-all duration-500 md:px-4 md:py-2 ${active === i ? "scale-110 border-gold bg-gold text-forest" : "border-cream/20 bg-forest/70 text-cream/80 hover:border-gold/60"}`}
            style={{ left: `${50 + Math.cos(a) * 46}%`, top: `${50 + Math.sin(a) * 46}%` }}>
            {p.title}
          </button>
        );
      })}
    </div>
  );
}