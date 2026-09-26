import React from "react";
import { PRODUCTS } from "@/lib/jazData";

const field = "mt-2 w-full rounded-xl border border-cream/15 bg-forest px-4 py-3.5 text-cream placeholder:text-cream/30 transition-colors focus:border-gold focus:outline-none";
const labelCls = "text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/60";

export default function OrderFields({ form, set }) {
  const on = (k) => (e) => set(k, e.target.value);
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <label className={labelCls}>Full name *<input className={field} value={form.name} onChange={on("name")} autoComplete="name" /></label>
      <label className={labelCls}>WhatsApp / Phone *<input className={field} value={form.phone} onChange={on("phone")} type="tel" autoComplete="tel" /></label>
      <label className={`${labelCls} sm:col-span-2`}>Product &amp; size *
        <select className={field} value={form.product} onChange={on("product")}>
          <option value="">— Choose a product —</option>
          {PRODUCTS.map((p) => <option key={p.id} value={p.label}>{p.label}</option>)}
        </select>
      </label>
      <label className={labelCls}>Quantity *<input className={field} value={form.qty} onChange={on("qty")} type="number" min="1" /></label>
      <label className={labelCls}>Payment method
        <select className={field} value={form.pay} onChange={on("pay")}>
          <option>Cash on Delivery</option>
          <option>UPI</option>
        </select>
      </label>
      <label className={`${labelCls} sm:col-span-2`}>Delivery address *<textarea className={field} rows={3} value={form.addr} onChange={on("addr")} autoComplete="street-address" /></label>
      <label className={`${labelCls} sm:col-span-2`}>Notes (optional)<textarea className={field} rows={2} value={form.notes} onChange={on("notes")} /></label>
    </div>
  );
}