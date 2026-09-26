import React from "react";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-forest py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Reveal><p className="eyebrow">Customer reviews</p></Reveal>
          <Reveal delay={0.1}><h2 className="display mt-5 text-5xl text-cream md:text-7xl">Real results. <span className="italic text-gold-soft">Real people.</span></h2></Reveal>
        </div>
        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={0.06 * (i % 3)} className="mb-6 break-inside-avoid">
              <figure className="rounded-[24px] border border-cream/10 bg-forest-2 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30">
                <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-5 font-display text-2xl leading-snug text-cream/90">"{r.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-verdant font-semibold text-cream">{r.name[0]}</span>
                  <span><span className="block text-sm font-semibold text-cream">{r.name}</span><span className="block text-xs text-cream/50">{r.city}</span></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}