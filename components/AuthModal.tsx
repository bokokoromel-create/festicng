"use client";

import { useState, type FormEvent } from "react";
import { IconClose, IconCheckLarge, IconGoogle, IconApple } from "@/components/icons";

type Props = {
  mode: "login" | "register";
  onClose: () => void;
  onSwitchMode: (mode: "login" | "register") => void;
};

export default function AuthModal({ mode, onClose, onSwitchMode }: Props) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (mode === "register" && !form.name.trim()) errs.name = "Requis";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email invalide";
    if (!form.password.trim() || form.password.length < 6) errs.password = "6 caracteres min.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSuccess(true);
    setTimeout(onClose, 2000);
  };

  const switchMode = (m: "login" | "register") => {
    setForm({ name: "", email: "", password: "" });
    setErrors({});
    setSuccess(false);
    onSwitchMode(m);
  };

  const fieldStyle = (hasError: boolean) => ({
    borderColor: hasError ? undefined : "var(--border-light)",
    color: "var(--text-primary)",
    "--tw-ring-color": "var(--accent)",
  } as React.CSSProperties);

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2 ${hasError ? "border-red-400 ring-2 ring-red-200" : ""}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-sm animate-slide-up overflow-hidden rounded-2xl" style={{ background: "var(--bg-card)", boxShadow: "var(--shadow-xl)" }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: "var(--border-light)" }}>
          <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
            {mode === "login" ? "Connexion" : "Inscription"}
          </h3>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100" style={{ color: "var(--text-muted)" }}>
            <IconClose size={16} />
          </button>
        </div>

        <div className="p-6">
          {success ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "var(--color-success-bg)" }}>
                <IconCheckLarge />
              </div>
              <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                {mode === "login" ? "Connexion reussie !" : "Compte cree avec succes !"}
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "register" && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Nom complet</label>
                  <input type="text" placeholder="Jean Dupont" value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} className={fieldClass(!!errors.name)} style={fieldStyle(!!errors.name)} />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
              )}
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Email</label>
                <input type="email" placeholder="email@exemple.com" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} className={fieldClass(!!errors.email)} style={fieldStyle(!!errors.email)} />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Mot de passe</label>
                <input type="password" placeholder="••••••••" value={form.password} onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))} className={fieldClass(!!errors.password)} style={fieldStyle(!!errors.password)} />
                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
              </div>

              <button type="submit" className="w-full rounded-full py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ background: "var(--accent)", boxShadow: "var(--shadow-pill)" }}>
                {mode === "login" ? "Se connecter" : "Creer un compte"}
              </button>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1" style={{ background: "var(--border-light)" }} />
                <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>ou continuer avec</span>
                <div className="h-px flex-1" style={{ background: "var(--border-light)" }} />
              </div>

              <div className="flex gap-3">
                <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition-all hover:bg-gray-50 active:scale-[0.97]" style={{ borderColor: "var(--border-light)", color: "var(--text-primary)" }}>
                  <IconGoogle /> Google
                </button>
                <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition-all hover:bg-gray-50 active:scale-[0.97]" style={{ borderColor: "var(--border-light)", color: "var(--text-primary)" }}>
                  <IconApple /> Apple
                </button>
              </div>

              <p className="text-center text-sm" style={{ color: "var(--text-muted)" }}>
                {mode === "login" ? (
                  <>Pas encore de compte ? <button type="button" onClick={() => switchMode("register")} className="font-semibold" style={{ color: "var(--accent)" }}>S&apos;inscrire</button></>
                ) : (
                  <>Deja un compte ? <button type="button" onClick={() => switchMode("login")} className="font-semibold" style={{ color: "var(--accent)" }}>Se connecter</button></>
                )}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
