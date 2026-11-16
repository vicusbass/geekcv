# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, weighted by page rather than ranked globally:

- **Romanian SMBs** (clinics, shops, wineries, cafés, bands) buying a website, web or mobile app, AI agent, integration or CRM/ERP setup. Primary audience of `/services` and `/ro/servicii`.
- **International teams** (EU, UK, US) hiring a senior SDET for QA audits, test framework setup, flaky-test cleanup, technical interviews. Primary audience of home, CV and projects.
- **Recruiters and enterprise clients** evaluating Vasile Pop as a hire or vendor. Served by home, CV and the refined theme ("the serious me").

When a choice favours one audience, the page's primary audience wins.

## Product Purpose

Personal portfolio and freelance storefront for Vasile Pop ("vicusbass"), freelance software developer and senior SDET based in Cluj-Napoca, working remotely. It shows the work and track record, explains the services, and turns visitors into contact-form submissions or emails. Success is a qualified enquiry.

## Positioning

**Software built by a tester.** 21+ years of breaking software for a living, now also building it, so what ships is tested properly. Every audience and page supports this claim: SMB build work gets a builder who tests, QA clients get a tester who builds.

## Operating Context

- Visitors arrive from search, LinkedIn, GitHub, and referrals; services pages are SEO targets (structured data: Person, WebSite, ProfessionalService, OfferCatalog, FAQPage, BreadcrumbList; `public/llms.txt`).
- Contact paths: email (preferred, ~24h reply) and the contact form (`/api/contact`, sent via Resend). Per-service links pre-fill the subject (`?subject=Project: Mobile apps`). No booking/calendar link.
- Engagement process as stated on the site: Talk -> Scope -> Build -> Launch.

## Capabilities and Constraints

- Astro 7 SSR on Vercel (`@astrojs/vercel` pinned to 11.0.12), Node >=22.12, Tailwind v4. Site: https://www.vicusbass.com.
- Routes: `/` (gate or themed home), `/services`, `/ro/servicii`, `/projects`, `/projects/[slug]` (prerendered, terminal layout only), `/cv`, `/blog`, `/blog/[slug]`, `/contact`, `/api/contact`.
- **Two themes, one site:** geek (terminal) and refined (Swiss), chosen at a gate on first visit and stored in the `vp-theme` cookie, read server-side. Pages without a cookie fall back to geek. Either theme links to the other.
- Services copy lives only in `src/lib/services.ts` (EN + RO); components must not fork it.
- Languages: English site-wide; Romanian only for services (`/ro/servicii`, hreflang en/ro/x-default). Expanding Romanian is not decided.
- Services offered (8): web design & branding (with Symbold), websites & web apps, mobile apps, AI agents, integrations, testing (main trade), Python/Node backends, CRM/ERP (Frappe/ERPNext).
- No analytics installed.

## Brand Commitments

- **Two themes and the gate stay.** "Same engineer. Two very different rooms." The geek theme ("the terminal") and refined theme ("the suit", "the serious me") are both first-class.
- **Same copy in both themes.** Facts and wording are identical across themes for SEO and honesty; only presentation differs.
- **Symbold credit stays** on web design & branding: "They make it look right, I make it work." (symbold.ro).
- Voice: first-person, plain, wry, honest. Promises plain answers ("tell you plainly what to keep and what to rewrite"). Personal details are part of the voice (plays bass, two small kids). No buzzword triads or agency-speak.

## Evidence on Hand

- **Projects** (`src/content/projects/`, screenshots in `src/assets/`): MojoRadar, Intercity, Counterword, Noima, Hernia Center, Nextaz, Symbold, HealthAcademy, Nosto, WhalesEncyclopedia (built with the owner's son), Mounty (OSS Python, no image).
- **Career:** 12 roles in `src/content/job/`, Orange Romania (2002) through Distribusion (Sep 2024 - present). Headline stats: 21+ years, 12 teams & companies.
- **Worked with:** Distribusion, ComplyAdvantage, Hopin, LeadIQ, Intel, Zartis (names only, no logos).
- **Blog:** 3 posts (2019, 2019, 2023) on testing and Python `requests`.
- **Assets:** headshot `profile.png`, `public/og-default.png`, per-project OG images, favicon.
- **Absent, do not fabricate:** testimonials, client logos, CV/resume PDF, pricing, case-study metrics beyond what project entries state.

## Product Principles

1. **Proof over claims.** The tester positioning is earned by showing shipped projects and a long track record, not by adjectives.
2. **One truth, two rooms.** Themes change how the work is presented, never what is said about it.
3. **Every page knows its audience.** SMB pages speak business outcomes in plain language; QA and CV pages speak engineering depth.
4. **Make contact easy and specific.** Each offer leads to a pre-filled, low-friction enquiry.
5. **Sound like a person.** Wry, direct, first-person copy; nothing that reads as generated.
