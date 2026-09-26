import React from "react";
import { MessageCircle, Phone, Instagram, Clock } from "lucide-react";
import { NAV, WHATSAPP_NUMBER, PHONE_DISPLAY, INSTAGRAM } from "@/lib/jazData";
import BrandMark from "@/components/jaz/BrandMark";
import Leaf from "@/components/jaz/Leaf";

const CONTACT = [
  { Icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { Icon: Phone, label: "Call us", value: PHONE_DISPLAY, href: "tel:+919360762925" },
  { Icon: Instagram, label: "Instagram", value: "@JAZ_HERBALWORLD", href: INSTAGRAM },
  { Icon: Clock, label: "Working hours", value: "Mon–Sat · 9AM – 7PM" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-cream/5 bg-forest pt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <BrandMark large />
            <p className="mt-6 max-w-xs text-cream/55">100% natural herbal hair oil made from 25+ traditional herbs. Delivering across Tamil Nadu and India.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <nav aria-label="Footer">
              <p className="eyebrow">Explore</p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="text-cream/65 transition-colors hover:text-gold">{n.label}</a></li>)}
              </ul>
            </nav>
            <div>
              <p className="eyebrow">Get in touch</p>
              <ul className="mt-5 space-y-4">
                {CONTACT.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-gold" />
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-cream/75 hover:text-gold">{value}</a> : <span className="text-cream/75">{value}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20 select-none" aria-hidden="true">
        <p className="display text-center text-[28vw] leading-[0.8] text-forest-3">JAZ</p>
        <Leaf className="animate-sway absolute bottom-0 left-[58%] w-[16vw] -rotate-12" tone="#2D4F3C" />
      </div>
      <div className="relative border-t border-cream/5 py-6 text-center text-xs text-cream/40">© {new Date().getFullYear()} JAZ Herbal World. All rights reserved.</div>
    </footer>
  );
}