---
name: vicusbass
description: One engineer's portfolio in two rooms, a phosphor terminal and a Swiss spec sheet, chosen at the door.
colors:
  geek-phosphor-green: "#5fff9c"
  geek-crt-black: "#06080a"
  geek-crt-black-raised: "#0a0e10"
  geek-phosphor-text: "#cde2d8"
  geek-dim-mint: "#7dd3a8"
  geek-line: "rgba(120, 255, 170, 0.18)"
  geek-line-strong: "rgba(120, 255, 170, 0.35)"
  geek-warn-amber: "#ffd93d"
  geek-error-coral: "#ff6b6b"
  refined-pass-green: "#22c55e"
  refined-pass-green-text: "#15803d"
  refined-pass-green-soft: "rgba(34, 197, 94, 0.08)"
  refined-status-green: "#1f8a4c"
  refined-paper: "#ffffff"
  refined-ink: "#0c0c0d"
  refined-graphite: "#73757c"
  refined-hairline: "rgba(12, 12, 13, 0.15)"
  gate-lobby: "#0d0d0f"
typography:
  geek-display:
    fontFamily: "Space Mono, JetBrains Mono, ui-monospace, monospace"
    fontSize: "38px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  geek-title:
    fontFamily: "Space Mono, JetBrains Mono, ui-monospace, monospace"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  geek-body:
    fontFamily: "JetBrains Mono, IBM Plex Mono, ui-monospace, monospace"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.55
  geek-label:
    fontFamily: "JetBrains Mono, IBM Plex Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.05em"
  refined-display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(40px, 5.6vw, 64px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  refined-headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 38px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  refined-title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  refined-body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  refined-label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  geek-sm: "3px"
  geek-window: "4px"
  gate-card: "10px"
  pill: "999px"
spacing:
  geek-gutter: "24px"
  geek-section: "48px"
  refined-gutter: "40px"
  refined-gutter-mobile: "18px"
  refined-container: "1120px"
  refined-section: "64px"
  refined-section-lg: "72px"
components:
  geek-button:
    backgroundColor: "transparent"
    textColor: "{colors.geek-phosphor-text}"
    typography: "{typography.geek-label}"
    rounded: "{rounded.geek-sm}"
    padding: "7px 14px"
  geek-button-primary:
    backgroundColor: "{colors.geek-phosphor-green}"
    textColor: "{colors.geek-crt-black}"
    typography: "{typography.geek-label}"
    rounded: "{rounded.geek-sm}"
    padding: "7px 14px"
  geek-button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.geek-phosphor-green}"
  geek-nav-link-active:
    backgroundColor: "rgba(95, 255, 156, 0.06)"
    textColor: "{colors.geek-phosphor-green}"
    rounded: "{rounded.geek-sm}"
    padding: "8px 16px"
  refined-button-primary:
    backgroundColor: "{colors.refined-pass-green}"
    textColor: "{colors.refined-ink}"
    rounded: "{rounded.none}"
    padding: "12px 22px"
  refined-button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.refined-ink}"
    rounded: "{rounded.none}"
    padding: "12px 22px"
  refined-button-ghost-hover:
    textColor: "{colors.refined-pass-green-text}"
  refined-input:
    backgroundColor: "{colors.refined-paper}"
    textColor: "{colors.refined-ink}"
    rounded: "{rounded.none}"
    padding: "11px 13px"
  refined-pill:
    backgroundColor: "transparent"
    textColor: "{colors.refined-ink}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  refined-monogram:
    backgroundColor: "{colors.refined-pass-green}"
    textColor: "{colors.refined-ink}"
    rounded: "{rounded.none}"
    size: "38px"
---

# Design System: vicusbass

## Overview

**Creative North Star: "Two Rooms, One Engineer"**

The site is one body of work shown in two complete visual worlds, and the visitor picks the room at the door. **The Phosphor Console** (geek theme) is a green-on-black CRT terminal: monospace everything, glowing accents, window title bars, a boot sequence, a working shell. It is playful and a bit showy on purpose. **The Swiss Spec Sheet** (refined theme) is white paper, a single grotesk at heavy weights, hairline rules, square corners and one green. It is quiet, exact and business-ready. Each room is fully committed to its own world; neither is a reskin of the other.

The gate (`/` with no `vp-theme` cookie) is the lobby, the only place both worlds are visible at once: a near-black room with two cards, one rendered in each world. Inner pages render in one theme only, chosen by the cookie and resolved server-side so there is never a flash of the wrong room. Content and copy are identical across both rooms; only the presentation changes, so layouts may reorganise information but never add or drop facts.

The thread tying the rooms together is a single green per theme. In geek it glows like phosphor; in refined it is the green of a passing test. Everything else in each room is neutral.

**Key Characteristics:**
- Two complete worlds, one content model; the gate is the only shared surface.
- Exactly one accent per theme, both green.
- Geek: monospace, dark, glow as depth, window chrome, motion with character (boot, glitch, blinking caret).
- Refined: one grotesk at 800 for headings, white, hairlines, 0px corners, calm motion (fades and small lifts).
- Density differs by room: geek runs small (13.5px body) and packed; refined runs at 16px with generous section spacing.

## Colors

Each room is neutral plus one green; warn and error colours exist only in geek, and only as functional signals.

### Primary
- **Phosphor Green** (geek-phosphor-green): the geek accent. Links, active nav, prompts, keys in key/value lists, years, the LED, primary buttons, the caret, selection background. Carries glow (`text-shadow`/`box-shadow` in the same green at 0.3 to 0.4 alpha) on headings' `<em>`, the ASCII logo and active states.
- **Pass Green** (refined-pass-green): the refined accent as a surface: monogram tile, primary button fill, active nav underline (2px), focus border on inputs, the status dot halo, and green text on the ink CTA block. It is 2.3:1 on white, so it never carries text on Paper and never sits under white text.
- **Pass Green Text** (refined-pass-green-text, `--accent-text`): the same green darkened to 5:1 on white, for every green word on Paper: kickers, text links, number labels, the portrait tag, hover text on ghost buttons and the theme switch. Text on a Pass Green fill is Ink (8.5:1); the primary button's hover darkens the fill to Pass Green Text with white text.

### Neutral
- **CRT Black** (geek-crt-black): geek page background and the text colour on Phosphor Green fills.
- **CRT Black Raised** (geek-crt-black-raised): screenshot wells and the far stop of geek gradients.
- **Phosphor Text** (geek-phosphor-text): geek body and heading text, a green-tinted off-white.
- **Dim Mint** (geek-dim-mint): geek secondary text: leads, metadata, labels, footer.
- **Geek Line / Line Strong** (geek-line, geek-line-strong): green-tinted rules and borders. Line for dividers (often dashed), Line Strong for window and button borders.
- **Paper** (refined-paper): refined background and surface; there is no off-white or grey panel.
- **Ink** (refined-ink): refined text and headings, near-black.
- **Graphite** (refined-graphite): refined secondary text: leads, labels, captions, metadata.
- **Hairline** (refined-hairline): every refined border and rule, always 1px.
- **Gate Lobby** (gate-lobby): gate background only.

### Functional (geek only)
- **Warn Amber** (geek-warn-amber) and **Error Coral** (geek-error-coral): window title-bar dots (coral, amber, green), shell error lines. Never decorative, never on large areas.
- **Status Green** (refined-status-green): the refined "open for consulting" pulse dot only, with a Pass Green Soft halo.

### Named Rules
**The One Green Rule.** Each theme has exactly one accent and it is green. A second accent hue, a gradient accent, or a tinted section background is a violation.

**The Text-Safe Green Rule.** Refined green has two shades of one hue. Pass Green fills, rules and dots; Pass Green Text writes. Green text on white in Pass Green, or white text on a Pass Green fill, is a contrast failure, not a brand choice.

**The Signals Stay Small Rule.** Amber and coral appear only as dots, single lines of shell output, or error text. If they cover more than a few square pixels of chrome, it is wrong.

## Typography

**Geek Display Font:** Space Mono (with JetBrains Mono, ui-monospace)
**Geek Body Font:** JetBrains Mono (with IBM Plex Mono, ui-monospace)
**Refined Font:** Hanken Grotesk (with system-ui) for everything, display and body
**Gate:** Hanken Grotesk for the lobby; each card uses its own room's fonts.

**Loading:** all three families are self-hosted through the Astro Fonts API (`fonts` in `astro.config.mjs`, `<Font />` in each layout's head), never linked from Google. CSS reads them only through `--font-hanken`, `--font-jetbrains` and `--font-space-mono`, which carry Astro's metric-matched fallbacks, so the first paint is already the right size and shape. Only the `latin` subset is preloaded; `latin-ext` (Romanian ă, ș, ț) loads by unicode-range when a page needs it.

**Character:** Geek pairs a quirky typewriter mono for titles with a precise coding mono for everything else, so the whole room reads like a terminal session. Refined uses one grotesk and builds hierarchy from weight and tight negative tracking alone, the Swiss way.

### Hierarchy
- **Geek Display** (500, 38px, line-height 1, -0.02em; 28px under 600px): section titles in the `.term-h` header row; the accent word is wrapped in `<em>` and rendered upright in Phosphor Green with glow. Home H1 runs at 36px / 1.25 (26px under 520px), one sentence per line; each highlighted phrase is nowrapped together with its trailing punctuation and uses `box-decoration-break: clone`.
- **Geek Title** (400 to 500, 22 to 30px, Space Mono): project card titles, viewer headings.
- **Geek Body** (400, 13.5px, 1.55 to 1.6): all running text, max about 56 to 60ch.
- **Geek Label** (400, 10.5 to 12px, 0.04 to 0.06em, often uppercase): metadata, key/value keys, window title bars, footers. Numbers use `tabular-nums`.
- **Refined Display** (800, clamp(40px, 5.6vw, 64px), 1.02, -0.035em): the home hero only.
- **Refined Headline** (800, clamp(28px, 3.2vw, 38px), -0.035em): section H2s.
- **Refined Title** (700, 21 to 22px, -0.035em): card and capability titles.
- **Refined Body** (400, 16px, 1.6): running text; leads at 17px / 1.65 in Graphite, max 52ch. Card blurbs at 13.5px.
- **Refined Label** (700, 12px, 0.14em, uppercase, Pass Green Text): the kicker above headings. Muted labels (client strip, card kinds, field labels) use the same caps style in Graphite at 11 to 12px, 0.1 to 0.16em.

### Named Rules
**The Weight Not Size Rule.** Refined headings get their presence from 800 weight and -0.035em tracking, not from extra size or colour. Never colour a refined heading.

**The Accent Word Rule.** In geek headings, emphasis is one `<em>` word in Phosphor Green with glow, upright. Never italic, never more than one per heading.

## Layout

**Geek:** full-bleed. Content sits on a 24px gutter (16 to 18px on phones) with no max-width container; sections open with a 48px top pad and a `.term-h` row (lead label, title, right-aligned meta) over a 1px rule. Blocks are framed as windows or as grids of cells separated by 1px lines (`gap: 1px` over a line-coloured background). The home hero is a 1.3fr / 1fr split with a sticky shell on the right, stacking under 1100px. The projects page is a 340px index + viewer master/detail that becomes stacked cards under 1100px. The top bar holds brand, centred nav and clock, tightens at 1180px and collapses into a full-screen `<dialog>` menu at 760px.

**Refined:** a centred 1120px container with 40px side padding (18px under 640px). Sections are separated by 64 to 72px of space plus hairline rules; the client strip is boxed by rules top and bottom. Hero is 1.35fr / 0.9fr (text, portrait) stacking under 980px. Work cards in 2 columns, capabilities in 3 columns as a ruled grid (`gap: 1px` over Hairline), all collapsing to one column under 760px. A thin utility strip (status, theme switch) sits above a sticky, 90%-opaque blurred header. Pages that sell end on the ink CTA block (Ink fill, Paper text, Pass Green for numbers and underlines); on home it also carries the email as text and the Talk -> Scope -> Build -> Launch steps.

**Home in both rooms** renders from one copy module, `src/lib/home.ts` (as services does from `src/lib/services.ts`): positioning, headline, lead, stats, clients, capabilities, closing CTA and process. The rooms may regroup these, never add or drop them. Hero CTAs are one primary (contact) and one secondary (work); everything else lives in the nav.

**Sticky headers** depend on `overflow-x: clip` (never `hidden`) on `html` and `body`; `hidden` turns body into a scroll container and silently unsticks both headers. `scroll-padding-top` (80px geek, 96px refined, 72px refined on phones) keeps focused elements and anchor targets below them.

**Refined on phones (640px and below):** the header is one 63px row: the monogram (name visually hidden) and a sideways-scrolling nav with a fade on the cut edge; the current page's link is scrolled into view on load.

**Touch:** on `(pointer: coarse)`, buttons and button-links reach 44px tall and inline text links get an invisible 12px hit area. That block sets height only, never `display`, so it cannot unhide controls hidden at a breakpoint.

**Language:** both rooms keep a persistent link to the other language's services page: the `ro`/`en` chip in the geek top bar (and a `cd /ro/servicii` menu item), "Servicii în română"/"English" in the refined utility strip, and a link beside the gate note.

**Gate:** centred column, max 680px intro over a 760px two-card grid, single column under 640px.

## Elevation & Depth

The rooms handle depth in opposite ways, both deliberate.

**Geek uses light, not shadow.** Depth comes from accent-coloured glow and fixed CRT overlay layers (radial ambient gradient, 32px grid, scanlines, vignette, flicker, chromatic edge), all `pointer-events: none` and scaled by a single `--crt` intensity variable (0.7). Windows sit on `rgba(0, 0, 0, 0.5)` to darken the grid behind them.

**Refined is flat at rest.** Hairlines separate everything. One soft shadow exists and appears only when a card lifts on hover; the portrait carries it permanently.

### Shadow Vocabulary
- **Geek glow, text** (`text-shadow: 0 0 8px to 14px rgba(95, 255, 156, 0.3 to 0.4)`): accent words, ASCII art, active years, hovered titles.
- **Geek glow, element** (`box-shadow: 0 0 10px #5fff9c` on the LED and caret; `0 0 16px rgba(95, 255, 156, 0.4)` on primary button hover; `0 0 24px rgba(95, 255, 156, 0.05)` ambient on the shell window).
- **Refined lift** (`box-shadow: 0 18px 44px -30px rgba(12, 12, 13, 0.45)`): work card hover (with `translateY(-4px)`) and the portrait frame.
- **Gate lift** (`0 24px 50px -22px rgba(0, 0, 0, 0.5)`): the refined gate card on hover, with `translateY(-4px)`. The geek gate card lifts with a brighter border and no shadow.

### Named Rules
**The Light Not Shadow Rule.** Geek never uses a dark drop shadow. If something needs to stand out, it glows green or gets a stronger green border.

**The Flat At Rest Rule.** Refined surfaces have no shadow until hovered. The portrait is the only permanent exception.

## Shapes

**Geek:** small, near-square corners (3px) on buttons, nav pills, tags, URL bars and `kbd`; 4px on the shell window. Circles only for LEDs and the three title-bar dots (8 to 9px). Rules are 1px, solid for structure and dashed for list separators and soft dividers. Active list rows get a 2px left border in Phosphor Green.

**Refined:** 0px everywhere (`--radius: 0px`): buttons, inputs, cards, portrait, monogram tile. The only rounded forms are pills (999px) for tech tags and the 7px status dot. Rules are always 1px Hairline; the only thick line is the 2px Pass Green nav underline.

**Gate:** the two cards use 10px corners, the only rounded rectangles on the site.

## Components

### Buttons
Geek buttons are playful terminal controls; refined buttons are precise rectangles.
- **Geek default** (`.btn`): transparent, 1px Line Strong border, Phosphor Text, 12px mono with 0.04em tracking, 8px 14px with a 36px minimum height, 3px radius. Hover: green tint fill at 0.08, green border and text.
- **Geek primary** (`.btn-prim`): Phosphor Green fill, CRT Black text, weight 500. Hover inverts to transparent with green text and a green glow.
- **Refined primary** (`.rf-btn-primary`): Pass Green fill and border, Ink text, 600 weight 14px, 12px 22px, square. Hover darkens fill and border to Pass Green Text with white text.
- **Refined ghost** (`.rf-btn-ghost`): transparent, Hairline border, Ink text. Hover turns the border Pass Green and the text Pass Green Text.
- **Theme switch** (both rooms): geek uses a green-tinted bordered chip ("refined view") that fills green on hover/focus; refined uses a small Hairline-bordered button that turns green on hover.

### Chips / Tags
- **Geek stack tag:** 10.5px mono, 2px 7px, green tint at 0.08, 1px Geek Line border, 3px radius.
- **Refined pill:** 11px, transparent, 1px Hairline, 3px 9px, fully rounded.
- **Refined kicker:** uppercase 12px, 0.14em, 700, Pass Green, sitting 10 to 22px above a heading.

### Cards / Containers
- **Geek window** (shell, compose form, project viewer): 1px Line Strong border, `rgba(0, 0, 0, 0.5)` fill, a title bar with the three dots (coral, amber, green), a path or title in Dim Mint, and optionally a live clock. Body padding 14px 16px.
- **Geek grid cell** (latest work, project list rows): CRT Black cells divided by 1px lines; hover tints green at 0.04 to 0.06 and makes the title glow. Thumbnails sit in a bordered well with a scanline overlay and are slightly desaturated (`saturate(0.75 to 0.85)`).
- **Refined work card:** square, 1px Hairline, Paper fill, 16:10 screenshot over a Hairline rule, body 18px 20px (kind label + year, 22px title, Graphite blurb). Hover: lift 4px + refined lift shadow.
- **Refined ruled grid:** cells on Paper separated by 1px Hairline, 28px 26px padding, a 21px title. A Pass Green Text number label goes above the title only when the order carries meaning (the services list, process steps); home capabilities are unnumbered.

### Inputs / Fields
- **Geek compose form:** fields are borderless lines with a 1px dashed Geek Line underline; key labels in Phosphor Green in a two-column `key: value` grid; caret colour Phosphor Green. Focus turns the underline solid green. The textarea is a borderless body inside the window.
- **Refined form:** square inputs, 1px Hairline, Paper fill, 11px 13px padding, 14px text, uppercase Graphite labels above. Focus turns the border Pass Green. Errors render in Pass Green with a bold link to email instead.

### Navigation
- **Geek top bar:** sticky, `rgba(6, 8, 10, 0.85)` with 8px blur, 1px Geek Line bottom. Brand with pulsing LED on the left, centred links (15px, 500, 0.04em), clock on the right. Active link: green text, Line Strong border, green tint fill. Under 760px a "menu" button opens a full-screen `<dialog>` with commands listed as `$` prompts, staggered in.
- **Refined header:** sticky, 90% Paper with 10px blur, Hairline bottom. Pass Green monogram tile (38px, "VP" in 800, Ink) and name on the left; links at 14px/500 at 0.72 opacity, full opacity on hover, active gets a 2px Pass Green underline and `aria-current="page"`. Under 640px the nav wraps to a full-width row with 10px vertical padding per link.
- **Footers:** both rooms list email, LinkedIn and GitHub from the shared `CONTACT` in `src/lib/home.ts`. Geek uses four labelled columns (two under 760px, one under 420px); refined puts them in a row of hairline-underlined links between the copyright and the theme switch.
- **Geek clock:** always Cluj time (`Europe/Bucharest`), with the zone label from `Intl` (EET or EEST), never the visitor's local time.

### Focus
Both layouts open with a skip link to `#main` ("$ skip to content" in a Phosphor Green chip; "Skip to content" on Ink in refined), visible only on focus. Every interactive element shows a ring on `:focus-visible`. Geek: 2px Phosphor Green outline, 2px offset (controls with their own filled focus state, such as the theme switch and menu items, keep it). Refined: 2px Ink outline, 3px offset; inside the ink CTA block the ring turns Paper. Gate cards: 2px white outline, 4px offset, plus the hover lift. The shell input drops its outline because the whole window border turns Phosphor Green on `:focus-within`.

### Boot Sequence (signature, geek)
A full-screen black overlay with the ASCII logo and status lines that appear in steps (`[ OK ]` in green), a blinking block caret, then a vertical CRT collapse (`scaleY(0.02)`, brightness 3) on exit. Skipped under `prefers-reduced-motion`. The skip hint reads "PRESS SPACE TO SKIP" for mouse and keyboard and "TAP TO SKIP" on touch; status lines truncate rather than wrap so `[ OK ]` stays whole. Any non-modifier key ends the boot; Tab passes through so focus never moves around a hidden page.

### Interactive Shell (signature, geek)
A real command prompt inside a window on the home page: input lines in green glyphs, system lines in Dim Mint, errors in Warn Amber, plus the `bass --play` easter egg. Tab completes and cycles known commands; on an empty or unmatched prompt Tab moves focus as usual. The input is labelled, the history is a polite live log, and rows created by script are styled through `.shell :global(...)` because they never get Astro's scope attribute.

### Gate Cards (signature, lobby)
Above them, a line with the name and positioning ("Vasile Pop · software built by a tester") so the lobby is never anonymous. Two equal cards, each a miniature of its room: the geek card in CRT Black with mono type, title-bar dots, a glowing command and a blinking caret; the refined card in white with a Pass Green Text kicker, an 800-weight title ("The serious me") and a green "view portfolio ->" link. Both lift 4px on hover and focus; the geek card brightens its border instead of casting a shadow. Each card has a short `aria-label` that starts with its visible action.

## Do's and Don'ts

### Do:
- **Do** keep every theme to one green: Phosphor Green (#5fff9c) in geek, Pass Green (#22c55e) in refined, written in its text-safe shade #15803d on white.
- **Do** build refined hierarchy from Hanken Grotesk weight (800 headings, -0.035em) and Graphite secondary text, with 1px Hairline rules between sections.
- **Do** frame new geek blocks as windows (title bar with three dots) or as 1px-ruled grids, with labels in uppercase mono and numbers in `tabular-nums`.
- **Do** use glow, not shadow, for emphasis in geek; keep the refined lift shadow for hover and the portrait only.
- **Do** render the same content in both rooms; a layout may regroup facts but never add or drop them.
- **Do** keep every animation covered by the global `prefers-reduced-motion` block at the end of `global.css` (flicker, glitch, pulses, fades and blinks all land at rest); JS-driven motion such as `bass --play` checks the media query itself, and the boot sequence is skipped in `Boot.astro`.
- **Do** put new home copy in `src/lib/home.ts` so both rooms render it.

### Don't:
- **Don't** let refined drift into a SaaS template: no gradients, no rounded cards, no icon-tile feature grids, no second accent colour, no tinted section backgrounds.
- **Don't** let the themes bleed together: no monospace type, glow, scanlines or dark surfaces in refined; no Hanken Grotesk, flat white surfaces or soft drop shadows in geek. The gate is the only place both appear.
- **Don't** round refined corners; 0px is the rule, pills (999px) the only exception.
- **Don't** use Warn Amber or Error Coral outside title-bar dots and error output.
- **Don't** give a refined element colour through a plain `html[data-theme="refined"] a`-style selector: the link reset is wrapped in `:where()` so component classes always win. A plain reset made button-links inherit their parent's text colour (white on Pass Green in the ink CTA).
- **Don't** link fonts from a CDN or hard-code family names; use the `--font-*` variables.
- **Don't** use a coloured side stripe (`border-left` or an inset shadow over 1px) to mark a quote, card or target; refined blockquotes use a 1px Hairline and a targeted service gets a 1px Pass Green frame.
- **Don't** colour refined headings or set them in italic; the Pass Green kicker above carries the accent.
