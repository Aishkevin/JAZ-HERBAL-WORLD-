import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/jazData";
import BrandMark from "@/components/jaz/BrandMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "home";
      NAV.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`transition-all duration-700 ${scrolled ? "bg-forest/80 backdrop-blur-md border-b border-cream/5" : "bg-transparent"}`}>
        <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#home" aria-label="JAZ Herbal World — home"><BrandMark /></a>
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={`relative text-[13px] tracking-wide transition-colors ${active === n.id ? "text-cream" : "text-cream/60 hover:text-cream"}`}>
                  {n.label}
                  <span className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ${active === n.id ? "w-full" : "w-0"}`} />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="#order" className="btn-gold hidden !px-5 !py-2.5 !text-[11px] sm:inline-flex"><span>Shop Now</span></a>
            <button onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col bg-forest px-6 py-5 lg:hidden" role="dialog" aria-modal="true">
            <div className="flex items-center justify-between">
              <BrandMark />
              <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-cream/20" aria-label="Close menu"><X className="h-5 w-5" /></button>
            </div>
            <ul className="mt-14 space-y-2">
              {NAV.map((n, i) => (
                <motion.li key={n.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className="display block py-1.5 text-4xl text-cream">{n.label}</a>
                </motion.li>
              ))}
            </ul>
            <a href="#order" onClick={() => setOpen(false)} className="btn-gold mt-auto"><span>Shop Now</span></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}