# Automify Real Estate Landing Page — Build Plan

## Goal
A single-page, mobile-first landing page whose only conversion action is tapping **"Message Us on WhatsApp"** (`https://wa.me/2347014216565`, no prefill per your instruction).

## Brand & Visual Direction
- **Colors:** Charcoal `#111111` background, Gold `#C9A84C` accents, White `#FFFFFF` text — defined as semantic tokens in `index.css` (no hardcoded hex in components).
- **Type:** Montserrat (Black/ExtraBold) for headlines, Inter for body — loaded via `@fontsource`.
- **Feel:** Premium with subtle imagery — soft gold radial glows, fine gold hairline dividers, a generated abstract hero visual (gold geometric/network motif echoing the logo), and one section-divider image. No stock real-estate photos.
- **Motion:** Light fade/slide on scroll via framer-motion; gold CTA has a subtle pulse/glow on hero and final CTA.
- **Logo:** AUTOMIFY lockup in header and footer (uploaded PNG, stored as a Lovable asset).

## Page Sections (in order)
1. **Sticky header** — logo left, small "WhatsApp" gold pill right.
2. **Hero** — "HIRE AI. CLOSE MORE DEALS." + subhead + gold WhatsApp CTA + tagline "AI Employees. Real Results." + abstract gold visual.
3. **The Problem** — 3 pain points as stacked cards with gold icons.
4. **How It Works** — 4-step vertical flow on mobile (New Lead → AI Follow-Up → Viewing Booked → Deal Closed), connected by a gold line.
5. **Meet Your 5 AI Employees** — 5 cards, each with a gold icon, role title, and the one-liner from the brief.
6. **Why Automify** — short trust block: "A full AI system, not a single chatbot. Built specifically for Nigerian real estate businesses." No invented testimonials or stats.
7. **Final CTA** — "Stop losing leads to slow replies. Message us now." + large WhatsApp button.
8. **Footer** — logo, phone `+234 (0) 701 421 6565` (tel link), Instagram `@automify_official` (no link yet, plain text), current year.

**Free Offer section is omitted** per your decision.

## Technical Notes
- Single route (`/`), replaces `src/pages/Index.tsx`.
- Mobile-first layout; scales cleanly to tablet/desktop with centered max-width container.
- WhatsApp link opens in new tab; CTA also tracked as a simple `<a>` (no analytics yet).
- No backend, no forms, no Lovable Cloud — purely static frontend.
- No hardcoded `automify.ng`; relative URLs only so DNS swap is zero-rebuild.
- SEO: title "Automify — AI Employees for Nigerian Real Estate Agents", meta description from subhead, single H1, semantic sections, OG tags, favicon from the logo.
- Components split into `Header`, `Hero`, `Problem`, `HowItWorks`, `AIEmployees`, `WhyAutomify`, `FinalCTA`, `Footer` under `src/components/landing/`.
- Reusable `<WhatsAppButton />` component so the link/label live in one place.

## What I will NOT do
- No testimonials, client logos, or fabricated stats.
- No contact form, email field, or "book a call" CTA.
- No multi-industry copy.
- No `automify.ng` hardcoding.

Approve and I'll build it.