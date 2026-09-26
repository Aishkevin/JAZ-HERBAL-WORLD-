import React from "react";
import { WHY } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";

export default function WhyJaz() {
  return (
    <section className="bg-forest py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal><p className="eyebrow">Why people choose JAZ</p></Reveal>
            <Reveal delay={0.1}><h2 className="display mt-5 text-5xl text-cream md:text-7xl">The JAZ <span className="italic text-gold-soft">difference.</span></h2></Reveal>
          </div>
          <Reveal delay={0.2}><p className="max-w-sm text-cream/60">We don't just sell oil — we deliver a natural hair care experience you can trust.</p></Reveal>
        </div>
        <div className="mt-16 grid border-t border-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={0.06 * i} className="group border-b border-cream/10 py-10 transition-colors duration-500 hover:bg-forest-2 sm:px-8 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r">
              <span className="font-display text-lg italic text-gold">0{i + 1}</span>
              <h3 className="display mt-4 text-3xl text-cream transition-transform duration-500 group-hover:translate-x-1">{w.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-cream/60">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}