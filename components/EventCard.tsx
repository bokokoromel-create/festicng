import Image from "next/image";
import { type EventData, getCatColor } from "@/lib/constants";
import { IconHeart, IconCalendar, IconMapPin } from "@/components/icons";

type Props = {
  event: EventData;
  liked: boolean;
  onLike: () => void;
  onBuy: () => void;
};

export default function EventCard({ event, liked, onLike, onBuy }: Props) {
  const cat = getCatColor(event.category);
  const isFree = event.price === "FREE";

  return (
    <div className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ borderRadius: "var(--radius-lg)", background: "var(--bg-card)", boxShadow: "var(--shadow-card)" }}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold capitalize" style={{ background: cat.bg, color: cat.color, backdropFilter: "blur(8px)" }}>
          {event.category}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onLike(); }}
          className="absolute right-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm transition-all hover:scale-110"
          style={{ background: liked ? "rgba(239,68,68,0.7)" : "rgba(0,0,0,0.4)" }}
        >
          <IconHeart filled={liked} />
          {event.views + (liked ? 1 : 0)}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-bold leading-snug" style={{ color: "var(--text-primary)" }}>{event.title}</h3>
        <p className="mb-1 flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
          <IconCalendar /> {event.date}
        </p>
        <p className="mb-3 text-sm font-semibold" style={{ color: isFree ? "var(--text-price-free)" : "var(--text-price)" }}>
          {isFree ? "Gratuit" : `A partir de ${event.price}`}
        </p>
        <p className="mt-auto flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
          <IconMapPin /> {event.location}
        </p>
      </div>

      <div className="border-t px-4 py-3" style={{ borderColor: "var(--border-light)" }}>
        <button onClick={onBuy} className="flex w-full items-center justify-center rounded-lg py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:opacity-90 active:scale-[0.97]" style={{ background: "var(--accent)" }}>
          {event.cta ?? "Acheter tickets"}
        </button>
      </div>
    </div>
  );
}
