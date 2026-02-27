"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { type EventData, getCatColor } from "@/lib/constants";
import { IconClose, IconCheckLarge } from "@/components/icons";

type Props = {
  event: EventData;
  onClose: () => void;
};

export default function TicketModal({ event, onClose }: Props) {
  const [qty, setQty] = useState(1);
  const [success, setSuccess] = useState(false);

  const confirm = useCallback(() => {
    setSuccess(true);
    setTimeout(onClose, 2000);
  }, [onClose]);

  const cat = getCatColor(event.category);
  const isFree = event.price === "FREE";
  const unitPrice = isFree ? 0 : parseInt(event.price.replace("$", ""));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-md animate-slide-up overflow-hidden rounded-2xl" style={{ background: "var(--bg-card)", boxShadow: "var(--shadow-xl)" }} onClick={(e) => e.stopPropagation()}>
        <div className="relative h-48 overflow-hidden">
          <Image src={event.image} alt={event.title} fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button onClick={onClose} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60">
            <IconClose size={16} />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="rounded-full px-3 py-1 text-[11px] font-bold capitalize text-white" style={{ background: cat.color }}>
              {event.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          {success ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "var(--color-success-bg)" }}>
                <IconCheckLarge />
              </div>
              <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>Reservation confirmee !</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{qty} ticket{qty > 1 ? "s" : ""} pour {event.title}</p>
            </div>
          ) : (
            <>
              <h3 className="mb-1 text-lg font-bold" style={{ color: "var(--text-primary)" }}>{event.title}</h3>
              <p className="mb-1 text-sm" style={{ color: "var(--text-muted)" }}>{event.date}</p>
              <p className="mb-4 text-sm" style={{ color: "var(--text-muted)" }}>{event.location}</p>

              <div className="mb-4 flex items-center justify-between rounded-xl p-4" style={{ background: "var(--bg-chip)" }}>
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Prix unitaire</span>
                <span className="text-lg font-extrabold" style={{ color: isFree ? "var(--color-success)" : "var(--accent)" }}>
                  {isFree ? "Gratuit" : event.price}
                </span>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Quantite</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="flex h-10 w-10 items-center justify-center rounded-lg border text-lg font-bold transition-colors hover:bg-gray-100" style={{ borderColor: "var(--border-medium)", color: "var(--text-primary)" }}>-</button>
                  <span className="w-12 text-center text-xl font-extrabold" style={{ color: "var(--text-primary)" }}>{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(10, q + 1))} className="flex h-10 w-10 items-center justify-center rounded-lg border text-lg font-bold transition-colors hover:bg-gray-100" style={{ borderColor: "var(--border-medium)", color: "var(--text-primary)" }}>+</button>
                </div>
              </div>

              {!isFree && (
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Total</span>
                  <span className="text-xl font-extrabold" style={{ color: "var(--accent)" }}>${unitPrice * qty}</span>
                </div>
              )}

              <button onClick={confirm} className="w-full rounded-full py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ background: "var(--accent)", boxShadow: "var(--shadow-pill)" }}>
                {isFree ? "Reserver gratuitement" : "Acheter maintenant"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
