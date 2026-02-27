"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { HERO_SLIDES } from "@/lib/constants";
import { IconStar, IconBolt, IconChevronLeft, IconChevronRight } from "@/components/icons";

type Props = {
  onScrollTo: (id: string) => void;
};

export default function HeroCarousel({ onScrollTo }: Props) {
  const [slide, setSlide] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [resetTimer]);

  const prev = () => { setSlide((s) => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length); resetTimer(); };
  const next = () => { setSlide((s) => (s + 1) % HERO_SLIDES.length); resetTimer(); };

  return (
    <section id="hero" className="relative flex min-h-[85vh] items-center overflow-hidden">
      {HERO_SLIDES.map((s, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: slide === i ? 1 : 0, zIndex: slide === i ? 1 : 0 }}>
          <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="100vw" priority={i === 0} unoptimized={s.src.startsWith("http")} />
        </div>
      ))}

      <div className="absolute inset-0 z-[2]" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 100%)" }} />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-28 md:px-16">
        <div className="relative">
          <div className="animate-float absolute -left-2 top-4 z-20 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold md:left-8 md:top-12" style={{ background: "rgba(255,255,255,0.95)", color: "var(--text-primary)", boxShadow: "var(--shadow-card)" }}>
            <IconStar /> LiveMusic
          </div>
          <div className="animate-float-reverse absolute -right-2 top-2 z-20 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold md:right-12 md:top-6" style={{ background: "rgba(255,255,255,0.95)", color: "var(--text-primary)", boxShadow: "var(--shadow-card)" }}>
            <IconBolt /> FestivalVibes
          </div>

          <div className="relative z-10 pt-16 text-center md:pt-28">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[5px] text-white/80">Colorado&apos;s Favorite Band</p>
            <h2 className="font-['Dancing_Script'] text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">Funkiphino</h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/80">
              13 members. Explosive horn lines. Intoxicating harmonies. Denver&apos;s high-energy funk experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => onScrollTo("events")} className="rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105" style={{ background: "var(--accent)", boxShadow: "var(--shadow-pill)" }}>
                Acheter tickets
              </button>
              <button onClick={() => onScrollTo("about")} className="rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105 hover:border-white/80">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:left-6 md:h-12 md:w-12">
        <IconChevronLeft />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:right-6 md:h-12 md:w-12">
        <IconChevronRight />
      </button>

      <div className="animate-float-reverse pointer-events-none absolute bottom-20 right-6 z-10 rotate-12 md:right-20">
        <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.95)", boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center gap-2 text-xs font-bold uppercase" style={{ color: "var(--accent)" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
            Musical Festival 2026
          </div>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Start Your Journey</p>
        </div>
      </div>
    </section>
  );
}
