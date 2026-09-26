import React from "react";
import { STEPS } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-forest py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal><p className="eyebrow">How it works</p></Reveal>
        <Reveal delay={0.1}><h2 className="display mt-5 max-w-3xl text-5xl text-cream md:text-7xl">From our herbs to your door in <span className="italic text-gold-soft">four steps.</span></h2></Reveal>
        <ol className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-8">
          <span className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 md:block" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={0.1 * i} className="relative">
              <span className="relative grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-forest font-display text-xl italic text-gold">{i + 1}</span>
              <h3 className="display mt-6 text-3xl text-cream">{s.title}</h3>
              <p className="mt-2 text-cream/60">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}