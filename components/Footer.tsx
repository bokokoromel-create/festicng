"use client";

import { useState, type FormEvent } from "react";
import { EVENTS, type EventData } from "@/lib/constants";
import { IconMusic, IconCheck } from "@/components/icons";

type Props = {
  onScrollTo: (id: string) => void;
  onBuyTicket: (event: EventData) => void;
};

export default function Footer({ onScrollTo, onBuyTicket }: Props) {
  const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formState.firstName.trim()) errors.firstName = "Requis";
    if (!formState.lastName.trim()) errors.lastName = "Requis";
    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email)) errors.email = "Email invalide";
    if (!formState.message.trim()) errors.message = "Requis";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormSuccess(true);
    setFormState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setFormErrors({});
    setTimeout(() => setFormSuccess(false), 4000);
  };

  const inputStyle = { background: "var(--bg-input)", "--tw-ring-color": "var(--accent)" } as React.CSSProperties;
  const inputClass = "w-full rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-2";

  return (
    <footer id="contact" className="px-6 py-20 md:px-16" style={{ background: "var(--bg-dark)" }}>
      <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-2">
        <div>
          <button onClick={() => onScrollTo("hero")} className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "var(--accent)" }}>
              <IconMusic />
            </div>
            <span className="text-lg font-bold text-white">FUNKIPHINO</span>
          </button>
          <h3 className="mb-3 text-2xl font-extrabold text-white">Thanks for visiting</h3>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-white/60">
            Bring on the Funk! Whether it&apos;s a fundraising event, a party, a wedding, a festival, or whatever your unique needs might be, we are the band to make your event shine.
          </p>
          <div className="space-y-4">
            <FooterEvent date="31" month="MAY" venue="Tailgate Tavern" location="Parker, CO" badge="FREE" onAction={() => onBuyTicket(EVENTS[1])} />
            <FooterEvent date="07" month="MAR" venue="Warren Station" location="Keystone, CO" cta="Tickets" onAction={() => onBuyTicket(EVENTS[0])} />
            <FooterEvent date="22" month="FEB" venue="Herbs" location="Denver, CO" badge="FREE" onAction={() => onBuyTicket(EVENTS[2])} />
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold text-white">Get in touch</h3>
          {formSuccess && (
            <div className="mb-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold" style={{ background: "var(--color-success-bg)", color: "var(--color-success)" }}>
              <IconCheck /> Message envoye avec succes !
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input type="text" placeholder="First name *" value={formState.firstName} onChange={(e) => setFormState((s) => ({ ...s, firstName: e.target.value }))} className={`${inputClass} ${formErrors.firstName ? "ring-2 ring-red-500" : ""}`} style={inputStyle} />
                {formErrors.firstName && <p className="mt-1 text-xs text-red-400">{formErrors.firstName}</p>}
              </div>
              <div>
                <input type="text" placeholder="Last name *" value={formState.lastName} onChange={(e) => setFormState((s) => ({ ...s, lastName: e.target.value }))} className={`${inputClass} ${formErrors.lastName ? "ring-2 ring-red-500" : ""}`} style={inputStyle} />
                {formErrors.lastName && <p className="mt-1 text-xs text-red-400">{formErrors.lastName}</p>}
              </div>
            </div>
            <div>
              <input type="email" placeholder="Email address *" value={formState.email} onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))} className={`${inputClass} ${formErrors.email ? "ring-2 ring-red-500" : ""}`} style={inputStyle} />
              {formErrors.email && <p className="mt-1 text-xs text-red-400">{formErrors.email}</p>}
            </div>
            <input type="tel" placeholder="Phone number" value={formState.phone} onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))} className={inputClass} style={inputStyle} />
            <div>
              <textarea rows={3} placeholder="Your message... *" value={formState.message} onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))} className={`resize-none ${inputClass} ${formErrors.message ? "ring-2 ring-red-500" : ""}`} style={inputStyle} />
              {formErrors.message && <p className="mt-1 text-xs text-red-400">{formErrors.message}</p>}
            </div>
            <button type="submit" className="w-full rounded-full py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ background: "var(--accent)", boxShadow: "var(--shadow-pill)" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-xs text-white/40">Hi-Phi Entertainment, 1401 Ken Pratt Blvd. Suite C, Longmont, CO</p>
        <p className="text-xs text-white/40">303-447-0902 &copy; 2026</p>
      </div>
    </footer>
  );
}

function FooterEvent({ date, month, venue, location, cta, badge, onAction }: {
  date: string; month: string; venue: string; location: string; cta?: string; badge?: string; onAction: () => void;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5">
      <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-white/10">
        <span className="text-base font-extrabold text-white">{date}</span>
        <span className="text-[8px] font-bold uppercase tracking-wider text-white/60">{month}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">{venue}</p>
        <p className="text-xs text-white/50">{location}</p>
      </div>
      {cta ? (
        <button onClick={onAction} className="shrink-0 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white transition-all hover:scale-105" style={{ background: "var(--accent)" }}>{cta}</button>
      ) : badge ? (
        <button onClick={onAction} className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-105" style={{ background: "var(--color-success-bg)", color: "var(--color-success)" }}>{badge}</button>
      ) : null}
    </div>
  );
}
