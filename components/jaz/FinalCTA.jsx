import React from "react";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES, PRODUCTS } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";
import Leaf from "@/components/jaz/Leaf";

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden py-24">
      <div className="animate-kenburns absolute inset-0">
        <Image src={IMAGES.finalCta} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-forest/55" />
      <Leaf className="animate-sway absolute -left-10 bottom-0 w-40 rotate-12 opacity-70" tone="#163326" />
      <Leaf className="animate-sway absolute -right-8 top-10 w-32 -rotate-[140deg] opacity-60" tone="#2D4F3C" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <Reveal>
          <div className="animate-float-slow w-40 overflow-hidden rounded-t-full rounded-b-3xl border border-gold/40 p-1.5 md:w-48">
            <img src={PRODUCTS[0].image} alt="JAZ Herbal Hair Oil bottle" className="aspect-[3/4] w-full rounded-t-full rounded-b-[20px] object-contain" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={0.1}><h2 className="display mt-12 text-5xl text-cream md:text-8xl">Bring nature back to your <span className="italic text-gold-soft">hair ritual.</span></h2></Reveal>
        <Reveal delay={0.2}><a href="#product" className="btn-gold mt-12"><span>Shop JAZ Herbal Hair Oil</span><ArrowRight className="h-4 w-4" /></a></Reveal>
      </div>
    </section>
  );
}