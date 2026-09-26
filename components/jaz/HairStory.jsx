import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";

export default function HairStory() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const clip = useTransform(scrollYProgress, [0, 0.45], ["inset(18% 22% 18% 22% round 999px)", "inset(0% 0% 0% 0% round 28px)"]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden bg-forest py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal><p className="eyebrow">Our Story</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-6 text-5xl text-cream md:text-7xl">Your hair deserves <span className="italic text-gold-soft">more</span> than a quick fix.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-[17px] leading-[1.75] text-cream/70">
              JAZ Herbal World returns to the slow, time-tested way. Our formula is rooted in ancient Siddha and Ayurvedic wisdom — remedies passed down for generations — and made only from pure herbs, exactly as our ancestors used them.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-md text-[17px] leading-[1.75] text-cream/70">Zero chemicals. Zero preservatives. Just 25+ herbs, blended into one oil.</p>
          </Reveal>
        </div>
        <motion.div style={reduce ? undefined : { clipPath: clip }} className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
          <motion.div style={reduce ? undefined : { y }} className="absolute -inset-y-[10%] inset-x-0">
            <Image src={IMAGES.hairStory} alt="Woman with long, flowing black hair in warm golden light" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}