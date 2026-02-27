"use client";

import { useState } from "react";
import { CATEGORIES, type EventData } from "@/lib/constants";
import { IconClose, IconSearch } from "@/components/icons";
import EventCard from "@/components/EventCard";

type Props = {
  events: EventData[];
  likedEvents: Set<number>;
  onToggleLike: (id: number) => void;
  onBuyTicket: (event: EventData) => void;
};

export default function EventsSection({ events, likedEvents, onToggleLike, onBuyTicket }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = events.filter((e) => {
    const matchesCat = activeCategory === "all" || e.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q) || e.date.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const resetFilters = () => { setActiveCategory("all"); setSearchQuery(""); };

  return (
    <section id="events" className="px-6 py-20 md:px-16" style={{ background: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[3px]" style={{ color: "var(--accent)" }}>Don&apos;t miss out</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>Upcoming Events</h2>
          </div>
          <button onClick={resetFilters} className="text-sm font-semibold transition-colors" style={{ color: "var(--text-link)" }}>
            View All Events &rarr;
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" className="absolute left-4 top-1/2 -translate-y-1/2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <input
            type="text"
            placeholder="Rechercher un evenement, un lieu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border py-3 pl-11 pr-10 text-sm outline-none transition-all focus:ring-2"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-light)", color: "var(--text-primary)", "--tw-ring-color": "var(--accent)" } as React.CSSProperties}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-gray-100" style={{ color: "var(--text-muted)" }}>
              <IconClose size={14} />
            </button>
          )}
        </div>

        {/* Category chips */}
        <div className="hide-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all hover:scale-105"
              style={{ background: activeCategory === cat.id ? "var(--accent)" : "var(--bg-chip)", color: activeCategory === cat.id ? "white" : "var(--text-secondary)" }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="mb-6 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
          <span className="font-bold" style={{ color: "var(--text-primary)" }}>{filtered.length}</span> evenement{filtered.length > 1 ? "s" : ""} trouve{filtered.length > 1 ? "s" : ""}
        </p>

        {/* Grid or empty state */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <IconSearch size={48} />
            <p className="mt-4 text-lg font-semibold" style={{ color: "var(--text-secondary)" }}>
              {searchQuery ? `Aucun resultat pour "${searchQuery}"` : "Aucun evenement dans cette categorie"}
            </p>
            <button onClick={resetFilters} className="mt-3 text-sm font-semibold underline" style={{ color: "var(--accent)" }}>
              Voir tous les evenements
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                liked={likedEvents.has(event.id)}
                onLike={() => onToggleLike(event.id)}
                onBuy={() => onBuyTicket(event)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
