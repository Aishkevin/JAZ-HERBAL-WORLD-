import React, { useEffect, useState } from "react";
import { Lock, Truck, Phone } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/jazData";
import Reveal from "@/components/jaz/Reveal";
import OrderFields from "@/components/jaz/OrderFields";

const EMPTY = { name: "", phone: "", product: "", qty: "1", pay: "Cash on Delivery", addr: "", notes: "" };
const TRUST = [
  { Icon: Lock, t: "Safe & secure", d: "Your details are only used to process your order. Never shared." },
  { Icon: Truck, t: "Cash on delivery", d: "Pay when you receive — no advance needed. UPI also accepted." },
  { Icon: Phone, t: "Direct WhatsApp support", d: `Call or WhatsApp us anytime: ${PHONE_DISPLAY}` },
];

export default function OrderForm({ preset }) {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  useEffect(() => { if (preset) setForm((f) => ({ ...f, product: preset.value })); }, [preset]);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const { name, phone, product, qty, pay, addr, notes } = form;
    if (!name.trim() || !phone.trim() || !product || !addr.trim()) return setError("Please fill all required fields (*).");
    setError("");
    const msg = `🌿 *New Order — JAZ Herbal World*\n\n👤 *Name:* ${name.trim()}\n📞 *Phone:* ${phone.trim()}\n🛒 *Product:* ${product}\n📦 *Quantity:* ${qty || "1"}\n💳 *Payment:* ${pay}\n📍 *Address:* ${addr.trim()}` + (notes.trim() ? `\n📝 *Notes:* ${notes.trim()}` : "") + `\n\n_Order placed via JAZ Herbal World website_`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="order" className="bg-forest-2 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal><p className="eyebrow">Place your order</p></Reveal>
          <Reveal delay={0.1}><h2 className="display mt-5 text-5xl text-cream md:text-6xl">Ready to transform <span className="italic text-gold-soft">your hair?</span></h2></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-cream/65">Fill in your details and we'll confirm your order on WhatsApp within minutes.</p></Reveal>
          <ul className="mt-10 space-y-6">
            {TRUST.map(({ Icon, t, d }) => (
              <li key={t} className="flex gap-4"><Icon className="mt-1 h-5 w-5 shrink-0 text-gold" /><div><p className="font-semibold text-cream">{t}</p><p className="text-sm text-cream/55">{d}</p></div></li>
            ))}
          </ul>
        </div>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-[28px] border border-cream/10 bg-forest-3/60 p-6 md:p-10" noValidate>
            <OrderFields form={form} set={set} />
            {error && <p role="alert" className="mt-5 text-sm text-red-300">{error}</p>}
            <button type="submit" className="btn-gold mt-8 w-full"><span>Send order via WhatsApp</span></button>
            <p className="mt-4 text-center text-xs text-cream/45">Your order goes directly to our team at {PHONE_DISPLAY}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}