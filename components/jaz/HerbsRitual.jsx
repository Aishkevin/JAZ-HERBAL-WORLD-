import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PILLARS } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";
import HerbOrbit from "@/components/jaz/HerbOrbit";

export default function HerbsRitual() {
  const [active, setActive] = useState(0);
  const p = PILLARS[active];
  return (
    <section id="herbs" className="relative overflow-hidden bg-forest py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal><p className="eyebrow">Ingredients</p></Reveal>
          <Reveal delay={0.1}><h2 className="display mt-6 text-5xl text-cream md:text-7xl">25+ herbs.<br /><span className="italic text-gold-soft">One hair ritual.</span></h2></Reveal>
          <Reveal delay={0.2}><p className="mt-8 max-w-md text-[17px] leading-[1.75] text-cream/70">Every bottle carries the same traditional formula — a blend of more than twenty-five potent natural herbs, prepared the way it has been for generations.</p></Reveal>
          <div className="mt-10 min-h-[120px] border-l border-gold/40 pl-6" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45 }}>
                <p className="display text-3xl text-cream">{p.title}</p>
                <p className="mt-2 max-w-sm text-cream/65">{p.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <Reveal delay={0.15}><HerbOrbit active={active} onActive={setActive} /></Reveal>
      </div>
    </section>
  );
}