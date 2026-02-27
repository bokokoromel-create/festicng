"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { IconMusic, IconUser, IconLogin, IconUserPlus, IconMenu, IconX } from "@/components/icons";

type Props = {
  onScrollTo: (id: string) => void;
  onOpenAuth: (mode: "login" | "register") => void;
};

export default function Header({ onScrollTo, onOpenAuth }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDropdown, setAuthDropdown] = useState(false);

  const navigate = (to: string) => {
    setMobileMenuOpen(false);
    onScrollTo(to);
  };

  const openAuth = (mode: "login" | "register") => {
    setAuthDropdown(false);
    onOpenAuth(mode);
  };

  return (
    <header
      className="sticky left-0 right-0 top-0 z-50 border-b px-6 py-4 backdrop-blur-xl md:px-16"
      style={{ background: "var(--bg-glass)", borderColor: "var(--border-light)" }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <button onClick={() => navigate("hero")} className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "var(--accent)" }}>
            <IconMusic />
          </div>
          <span className="text-lg font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            FUNKIPHINO
          </span>
        </button>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" style={{ color: "var(--text-secondary)" }}>
          {NAV_LINKS.filter((l) => l.label !== "Gallery").map((l) => (
            <button key={l.label} onClick={() => navigate(l.to)} className="transition-colors hover:text-[var(--accent)]">
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("events")}
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg md:inline-flex"
            style={{ background: "var(--accent)" }}
          >
            Publier un evenement
          </button>

          <div className="relative">
            <button
              onClick={() => setAuthDropdown(!authDropdown)}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:shadow-md"
              style={{ borderColor: "var(--border-medium)", color: "var(--text-secondary)" }}
            >
              <IconUser />
            </button>
            {authDropdown && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setAuthDropdown(false)} />
                <div
                  className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border py-1"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border-light)", boxShadow: "var(--shadow-lg)" }}
                >
                  <button onClick={() => openAuth("login")} className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-gray-50" style={{ color: "var(--text-primary)" }}>
                    <IconLogin /> Connexion
                  </button>
                  <button onClick={() => openAuth("register")} className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-gray-50" style={{ color: "var(--text-primary)" }}>
                    <IconUserPlus /> Inscription
                  </button>
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
            style={{ color: "var(--text-primary)" }}
          >
            {mobileMenuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="absolute left-0 right-0 top-full border-b px-6 py-4 backdrop-blur-xl md:hidden"
          style={{ background: "var(--bg-glass)", borderColor: "var(--border-light)" }}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.label} onClick={() => navigate(l.to)} className="text-left text-base font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
