import React from "react";
import { BENEFITS } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";
import BenefitNode from "@/components/jaz/BenefitNode";
import Leaf from "@/components/jaz/Leaf";

const POS = [
  { left: "4%", top: "8%" }, { left: "38%", top: "0%" }, { right: "4%", top: "10%" },
  { left: "0%", top: "56%" }, { right: "0%", top: "58%" },
  { left: "22%", bottom: "0%" }, { right: "22%", bottom: "2%" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-forest via-forest-2 to-forest py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative md:h-[680px]">
          <div className="relative z-10 mb-14 text-center md:absolute md:left-1/2 md:top-1/2 md:mb-0 md:w-[420px] md:-translate-x-1/2 md:-translate-y-1/2">
            <Reveal><p className="eyebrow">7 benefits · one oil</p></Reveal>
            <Reveal delay={0.1}><h2 className="display mt-5 text-6xl text-cream md:text-8xl">Powered by <span className="italic text-gold-soft">nature.</span></h2></Reveal>
            <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-xs text-cream/60">Hover each botanical to discover what our 25+ herb blend is made to do.</p></Reveal>
            <Leaf className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden w-72 -translate-x-1/2 -translate-y-1/2 opacity-20 md:block" tone="#2D4F3C" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:block">
            {BENEFITS.map((b, i) => <BenefitNode key={b.key} benefit={b} index={i} style={POS[i]} />)}
          </div>
        </div>
      </div>
    </section>
  );
}