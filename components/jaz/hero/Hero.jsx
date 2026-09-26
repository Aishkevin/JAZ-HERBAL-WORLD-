import React, { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import useHeroPointer from "@/hooks/useHeroPointer";
import HeroScene from "@/components/jaz/hero/HeroScene";
import HeroAtmosphere from "@/components/jaz/hero/HeroAtmosphere";
import HeroContent from "@/components/jaz/hero/HeroContent";

export default function Hero() {
  const rootRef = useRef(null);
  const revealRef = useRef(null);
  const reduce = useReducedMotion();
  useHeroPointer(rootRef, revealRef, reduce);

  return (
    <section id="home" ref={rootRef} aria-label="JAZ Herbal Hair Oil" className="relative min-h-[100svh] overflow-hidden bg-forest">
      <HeroScene ref={revealRef} />
      <HeroAtmosphere />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-28 md:px-8 lg:pb-10">
        <HeroContent />
      </div>
      <p className="absolute bottom-6 right-6 z-10 hidden text-[10px] uppercase tracking-[0.3em] text-cream/40 md:block">Move to reveal the world of herbs</p>
    </section>
  );
}