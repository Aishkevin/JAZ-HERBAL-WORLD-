import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";

export default function ProductShowcase({ onOrder }) {
  const [sel, setSel] = useState(PRODUCTS[1]);
  return (
    <section id="product" className="relative overflow-hidden bg-cream-2 py-28 text-forest md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute inset-8 rounded-full bg-gold/30 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div key={sel.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-t-full rounded-b-[32px] border border-forest/10 bg-cream p-3 shadow-[0_40px_80px_-30px_rgba(10,26,20,.45)] transition-transform duration-700 hover:-translate-y-1">
              <div className="aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[24px]">
                <img src={sel.image} alt={`JAZ Herbal Hair Oil ${sel.size} bottle`} className="h-full w-full object-contain" loading="lazy" width="1200" height="1600" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div>
          <Reveal><p className="eyebrow !text-earth">The Oil</p></Reveal>
          <Reveal delay={0.1}><h2 className="display mt-5 text-5xl md:text-7xl">JAZ Herbal <span className="italic text-verdant">Hair Oil</span></h2></Reveal>
          <Reveal delay={0.15}><p className="mt-4 text-forest/60">Blend of 25+ herbs · Long &amp; Strong · 100% pure &amp; natural</p></Reveal>
          <div className="mt-10 grid grid-cols-3 gap-3" role="radiogroup" aria-label="Choose size">
            {PRODUCTS.map((p) => (
              <button key={p.id} role="radio" aria-checked={sel.id === p.id} onClick={() => setSel(p)}
                className={`relative rounded-2xl border px-3 py-4 text-left transition-all duration-500 ${sel.id === p.id ? "border-forest bg-forest text-cream" : "border-forest/15 hover:border-forest/40"}`}>
                {p.best && <span className="absolute -top-2.5 right-3 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-forest">Best value</span>}
                <span className="block text-sm font-semibold">{p.size}</span>
                <span className="block text-[11px] opacity-60">{p.pack}</span>
                <span className="display mt-2 block text-2xl">₹{p.price}</span>
              </button>
            ))}
          </div>
          <ul className="mt-8 space-y-2.5">
            {sel.benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-forest/75"><Check className="h-4 w-4 text-verdant" />{b}</li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button onClick={() => onOrder(sel.label)} className="btn-gold !bg-forest !text-cream"><span>Order {sel.size} — ₹{sel.price}</span><ArrowRight className="h-4 w-4" /></button>
            <p className="text-sm text-forest/60">Free delivery above ₹500 · COD available</p>
          </div>
        </div>
      </div>
    </section>
  );
}