# 🎶 Festicng — Plateforme de Billetterie Evenementielle

> Decouvrez, recherchez et reservez vos places pour les meilleurs concerts et festivals — le tout dans une interface moderne et intuitive.

---

## 📋 Apercu

**Festicng** est une application web de billetterie evenementielle pensee pour offrir une experience fluide aux amateurs de musique et d'evenements live. Le projet simule un flux complet : de la decouverte d'evenements jusqu'a l'achat de tickets, en passant par l'authentification et le formulaire de contact.

| | |
|---|---|
| **Probleme resolu** | Les plateformes de billetterie existantes sont souvent lentes, surchargees et peu adaptees au mobile. Festicng propose une alternative rapide, epuree et responsive. |
| **Public cible** | Organisateurs d'evenements, spectateurs, recruteurs techniques souhaitant evaluer un projet frontend moderne. |
| **Statut** | MVP fonctionnel — interface complete, interactions operationnelles. |

---

## ✨ Fonctionnalites

| Fonctionnalite | Description |
|---|---|
| 🎠 **Carrousel Hero** | Defilement automatique d'images (5s) avec navigation par fleches |
| 🔍 **Recherche en temps reel** | Filtrage instantane par nom, lieu ou date |
| 🏷️ **Filtres par categorie** | Chips interactifs : Concert, Festival, Soiree, Culture, Sport, Business |
| 🎟️ **Achat de tickets** | Modal avec selecteur de quantite, calcul du total, confirmation animee |
| ❤️ **Systeme de likes** | Toggle coeur sur chaque carte avec compteur dynamique |
| 🖼️ **Galerie photo** | Grille avec effet zoom + lightbox plein ecran navigable |
| 📝 **Formulaire de contact** | Validation cote client avec retour visuel de succes |
| 🔐 **Authentification** | Connexion / Inscription avec OAuth Google et Apple |
| 📱 **100% Responsive** | Menu hamburger, layout adaptatif, touch-friendly |
| 🎨 **Design System** | Tokens CSS centralises pour un theming coherent |

---

## 🛠️ Technologies

| Couche | Technologie | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1 |
| UI | React | 19.2 |
| Langage | TypeScript | 5.x |
| Styling | Tailwind CSS + CSS Variables | 4.x |
| Polices | Inter, Dancing Script | Google Fonts |
| Linting | ESLint + eslint-config-next | 9.x |
| Images | Next.js Image (local + distant) | — |

**Zero dependance UI externe** — tous les composants et icones sont faits main.

---

## 📁 Architecture du Projet

```
festicng-web/
├── app/
│   ├── globals.css             # Design tokens, animations, utilitaires
│   ├── layout.tsx              # Layout racine, meta, polices
│   └── page.tsx                # Orchestrateur (compose les sections)
│
├── components/
│   ├── icons.tsx               # 20+ composants SVG reutilisables
│   ├── Header.tsx              # Navigation sticky, menu mobile, auth
│   ├── HeroCarousel.tsx        # Carrousel auto-defilant
│   ├── EventsSection.tsx       # Recherche, filtres, grille d'evenements
│   ├── EventCard.tsx           # Carte evenement (like, achat)
│   ├── AboutSection.tsx        # Presentation, statistiques, rating
│   ├── PerformanceBanner.tsx   # Banniere immersive plein ecran
│   ├── GallerySection.tsx      # Grille photo avec lightbox
│   ├── Lightbox.tsx            # Viewer plein ecran avec navigation
│   ├── Footer.tsx              # Formulaire contact, evenements, credits
│   ├── TicketModal.tsx         # Flux d'achat complet
│   └── AuthModal.tsx           # Login / Register + OAuth
│
├── lib/
│   └── constants.ts            # Types, donnees, config, helpers
│
├── public/                     # Images statiques (concerts)
├── next.config.ts              # Configuration Next.js
├── tsconfig.json               # Config TypeScript avec alias @/
└── package.json
```

---

## 🚀 Installation

### Prerequis

- **Node.js** 18 ou superieur
- **npm**, **yarn** ou **pnpm**

### Etapes

```bash
# 1. Cloner le depot
git clone https://github.com/<votre-username>/festicng-web.git
cd festicng-web

# 2. Installer les dependances
npm install

# 3. Lancer le serveur de developpement
npm run dev
```

L'application est accessible sur **http://localhost:3000**.

### Build de production

```bash
npm run build
npm start
```

---

## 💡 Utilisation

1. **Parcourir les evenements** — Scrollez ou utilisez la barre de recherche et les filtres
2. **Aimer un evenement** — Cliquez sur le coeur pour ajouter aux favoris
3. **Acheter un ticket** — Cliquez sur "Acheter tickets", choisissez la quantite, confirmez
4. **Creer un compte** — Cliquez sur l'icone utilisateur dans le header
5. **Contacter le groupe** — Remplissez le formulaire dans la section contact
6. **Explorer la galerie** — Cliquez sur une photo pour l'ouvrir en plein ecran

---

## 📚 Ce que j'ai appris

- **Architecture modulaire React** — Decomposer un monolithe de 800 lignes en 14 composants isoles avec des responsabilites claires
- **Design System avec CSS Variables** — Creer un systeme de tokens coherent (couleurs, ombres, rayons, typographie) reutilisable sans dependance a un framework
- **Gestion d'etat sans librairie** — Utiliser `useState`, `useCallback` et `useRef` pour gerer des interactions complexes (carrousel, modals, formulaires, likes) sans Redux ni Zustand
- **Next.js App Router** — Maitriser la frontiere `"use client"` et la composition de composants serveur/client
- **Tailwind CSS v4** — Utiliser la nouvelle syntaxe `@import "tailwindcss"` et `@theme inline`
- **UX et micro-interactions** — Animations CSS (float, slide-up), transitions de hover, retours visuels de confirmation

---

## 🔮 Ameliorations futures

- [ ] **Backend API** — Integrer le backend NestJS (Ticketly API) avec Prisma + PostgreSQL
- [ ] **Authentification reelle** — NextAuth.js avec providers Google et Apple
- [ ] **Paiement** — Integration Stripe pour les transactions
- [ ] **Base de donnees** — Persister les evenements, likes et reservations
- [ ] **Pages dynamiques** — Route `/events/[id]` avec details complets
- [ ] **Internationalisation** — Support francais / anglais avec next-intl
- [ ] **Mode sombre** — Basculer les CSS variables pour un theme dark
- [ ] **Tests** — Tests unitaires (Vitest) et E2E (Playwright)
- [ ] **PWA** — Support hors-ligne et installation sur mobile

---

## 👤 Auteur / Contact

**Votre Nom**

| | |
|---|---|
| GitHub | [@votre-username](https://github.com/votre-username) |
| LinkedIn | [votre-profil](https://linkedin.com/in/votre-profil) |
| Email | votre@email.com |
| Portfolio | [votre-site.com](https://votre-site.com) |

---

<p align="center">
  Fait avec TypeScript, Next.js et beaucoup de funk 🎸
</p>
