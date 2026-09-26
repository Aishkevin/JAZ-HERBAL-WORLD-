import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";

export default function Lifestyle() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} className="relative flex min-h-[90vh] items-end overflow-hidden">
      <motion.div style={reduce ? undefined : { scale }} className="absolute inset-0">
        <Image src={IMAGES.ritual} alt="Woman with long black hair enjoying a calm hair-care ritual by a sunlit window" focalPointX={0.5} focalPointY={0.4} className="h-full w-full object-cover" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/50 to-forest/10" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 md:px-8">
        <Reveal><p className="eyebrow">A ritual, not a routine</p></Reveal>
        <Reveal delay={0.1}><h2 className="display mt-5 max-w-3xl text-5xl text-cream md:text-7xl">Made for every <span className="italic text-gold-soft">Indian household.</span></h2></Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-lg text-[17px] leading-[1.75] text-cream/75">Thousands of happy customers across Tamil Nadu and India have made JAZ part of their family's hair care.</p>
        </Reveal>
      </div>
    </section>
  );
}