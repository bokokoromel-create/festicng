"use client";

import { useState, useCallback } from "react";
import { EVENTS, type EventData } from "@/lib/constants";

import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import PerformanceBanner from "@/components/PerformanceBanner";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import TicketModal from "@/components/TicketModal";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const [likedEvents, setLikedEvents] = useState<Set<number>>(new Set());
  const [ticketModal, setTicketModal] = useState<EventData | null>(null);
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const toggleLike = useCallback((id: number) => {
    setLikedEvents((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header onScrollTo={scrollTo} onOpenAuth={setAuthModal} />
      <HeroCarousel onScrollTo={scrollTo} />
      <EventsSection events={EVENTS} likedEvents={likedEvents} onToggleLike={toggleLike} onBuyTicket={setTicketModal} />
      <AboutSection onScrollTo={scrollTo} />
      <PerformanceBanner />
      <GallerySection />
      <Footer onScrollTo={scrollTo} onBuyTicket={setTicketModal} />

      {ticketModal && <TicketModal event={ticketModal} onClose={() => setTicketModal(null)} />}
      {authModal && <AuthModal mode={authModal} onClose={() => setAuthModal(null)} onSwitchMode={setAuthModal} />}
    </div>
  );
}
