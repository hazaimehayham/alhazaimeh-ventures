---
name: Alhazaimeh Ventures
description: A quiet, premium identity for a family holding group across healthcare, energy, and technology.
colors:
  gold: "#A07828"
  gold-light: "#C9A84C"
  gold-deep: "#8A6620"
  ink: "#1A1712"
  ink-muted: "#5E564B"
  ink-surface: "#16130E"
  bg: "#FBFBFA"
  surface: "#F4F4F2"
  surface-deep: "#ECECE9"
  border: "#DEDEDB"
  positive: "#16A34A"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "6px"
  md: "8px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  xxl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "36px 32px"
  input:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: Alhazaimeh Ventures

## 1. Overview

**Creative North Star: "The Quiet Holding House"**

One calm, well-bred voice speaking across very different businesses. Alhazaimeh Ventures runs pharmacies, a fuel station, and a healthcare-technology platform; the design's job is to make those read as deliberate facets of a single house, not a directory of unrelated logos. The feeling is a family group that has been here a while and intends to stay: established, refined, quietly confident. Premium without flash. The gold is a seal, not a spotlight.

The system is light and spacious, built on a true near-white surface (not cream) with a deep warm-ink anchor reserved for hero moments. Cormorant Garamond carries the headlines with the weight of a printed letterhead; Inter does the plain, legible work of the body. Warmth lives in the accent and the typography, never in a beige background. Components are crisp and modern: hairline borders, tight radii, restraint over ornament. When in doubt, remove.

This system explicitly rejects the generic-AI-template look its first draft drifted into: cream/sand backgrounds, a tiny uppercase tracked eyebrow above every section, grids of identical icon cards, the big-number hero-stats template, and decorative gradients. It also rejects loud corporate salesmanship (buzzwords, stock handshakes, aggressive CTAs) and cold navy-SaaS startup styling. This is a family holding group, not a software product.

**Key Characteristics:**
- True near-white surface with a deep warm-ink anchor; warmth carried by gold and serif type, never by a beige body.
- Serif display (Cormorant) against sans body (Inter): heritage meeting plain confidence.
- Gold used as a rare seal (≤10% of any screen), not a wash.
- Crisp components: hairline borders, 6–8px radii, flat at rest.
- Bilingual-ready (Arabic / English) and AA-accessible by construction.

## 2. Colors

A near-neutral light field that lets a single antique gold do all the talking, with a deep espresso-ink reserved for drama.

### Primary
- **Antique Gold** (#A07828 / oklch(0.58 0.09 75)): the brand seal. Used for the accent CTA fill, active states, dividers, and small flourishes. The rarity is the point; it never becomes a background wash.
- **Brass Highlight** (#C9A84C / oklch(0.74 0.10 85)): hover/active brightening of gold, and gold-on-dark text where the deeper gold would be too dim against the ink surface.
- **Deep Gold** (#8A6620 / oklch(0.50 0.085 72)): the accessible gold for small inline text and links on light surfaces, where Antique Gold alone falls short of 4.5:1.

### Neutral
- **Ink** (#1A1712 / oklch(0.21 0.01 75)): primary text and headlines on light surfaces. Warm near-black, never pure #000.
- **Muted Ink** (#5E564B / oklch(0.43 0.015 70)): secondary text, captions, supporting copy. Tuned to clear 4.5:1 on the near-white field; do not lighten it for "elegance."
- **Ink Surface** (#16130E / oklch(0.19 0.01 70)): the deep espresso anchor for hero sections and footers. Carries Brass Highlight and near-white text for a drenched, premium moment.
- **Paper White** (#FBFBFA / oklch(0.987 0.002 100)): the body surface. Reads as white, not cream; chroma is near zero on purpose.
- **Surface** (#F4F4F2 / oklch(0.96 0.002 100)): raised cards and panels. A cool-neutral light gray, never beige.
- **Surface Deep** (#ECECE9 / oklch(0.93 0.003 100)): input fields, sunken wells, the deepest light step.
- **Hairline** (#DEDEDB / oklch(0.89 0.002 100)): borders and dividers. A whisper, not a rule.

### Tertiary
- **Positive Green** (#16A34A): the single status color, for an "Operational" venture badge only. Not part of the brand voice; functional signal only.

### Named Rules
**The One Seal Rule.** Gold appears on at most 10% of any screen. It marks the one thing that matters on a view (a CTA, an active link, a single divider). The moment a second gold element competes, the seal stops reading as a seal.

**The No-Cream Rule.** The body surface is Paper White at chroma ≤0.006 and lightness ≥0.96, or the Ink Surface espresso. The warm-neutral band (OKLCH L 0.84–0.97, C 0.01–0.06, hue 40–100) that reads as cream / sand / parchment is forbidden as a background. Warmth is the accent's job.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** A high-contrast serif with real letterpress poise against a neutral, hard-working grotesque. The pairing is the whole brand in two faces: Cormorant carries heritage and confidence; Inter keeps everything plainly legible and modern. Two families, no more.

### Hierarchy
- **Display** (300, clamp(2.75rem, 7vw, 5.5rem), 1.05): hero and page-hero headlines only. Light weight, faint negative tracking, `text-wrap: balance`. Ceiling is 5.5rem (~88px); never larger.
- **Headline** (400, clamp(2rem, 4vw, 3rem), 1.2): section titles. `text-wrap: balance`.
- **Title** (400, 1.5rem, 1.3): card and detail headings.
- **Body** (400, 1rem, 1.7): all running copy in Inter. Cap measure at 65–75ch; use `text-wrap: pretty` on long prose.
- **Label** (600, 0.6875rem, 0.12em tracking, uppercase): form labels, nav links, the single deliberate kicker. Inter. This treatment is rationed, see the rule below.

### Named Rules
**The Earned Kicker Rule.** The small uppercase tracked label is allowed at most once per page, and only when it names a real system (a single section kicker, the nav). Stacking it above every section is forbidden; it is the AI eyebrow tell. Prefer a strong Headline alone, or vary the cadence.

**The Two-Face Rule.** Exactly two families: Cormorant for display/title, Inter for everything else. No third typeface. Hierarchy comes from scale and weight, not from new fonts.

## 4. Elevation

Flat by default. Surfaces sit on the page through hairline borders and tonal steps (Paper White → Surface → Surface Deep), not drop shadows. Shadow is a response to state and a few signature lifts, never ambient decoration. On the Ink Surface anchor, depth is conveyed by the tonal jump alone.

### Shadow Vocabulary
- **Hover Lift** (`box-shadow: 0 2px 24px rgba(160,120,40,0.08)`): the faint gold-tinted glow under raised cards and the hero stat cluster. Pairs with a 2–4px `translateY` on hover.
- **Nav Veil** (`box-shadow: 0 1px 24px rgba(140,110,56,0.08)` + `backdrop-filter: blur(12px)`): the scrolled navbar only. The one sanctioned use of blur.

### Named Rules
**The Flat-By-Default Rule.** Cards, inputs, and panels are flat at rest, defined by a Hairline border. Shadow appears only on hover or for the two signature elements above. If a surface needs a shadow to be visible at rest, the tonal step is wrong instead.

**The Rare-Glass Rule.** `backdrop-filter` is permitted only on the scrolled navbar and the mobile menu overlay. Decorative glass cards are forbidden.

## 5. Components

### Buttons
- **Shape:** gently squared (6px radius), generous 14px×32px padding, uppercase Inter label at 600 with 0.08em tracking.
- **Primary:** Antique Gold fill (#A07828), Paper White text. On hover, fills to Brass Highlight (#C9A84C) with Ink text and a 2px lift.
- **Outline:** transparent fill, Ink text, 1px gold-tinted border (rgba(160,120,40,0.35)). On hover, border and text shift to gold with a 2px lift.
- **Full-width:** the `--full` modifier for form submission.

### Chips / Tags
- **Style:** pill (999px), transparent fill, 1px Hairline border, Muted Ink text at label scale. Used for venture brand names and detail tags.
- **Status badge variant:** small pill with tinted fill; reserved for venture state ("Operational" uses Positive Green tint; "Opening Soon" / "In Development" use gold and a muted indigo respectively). Functional only.

### Cards / Containers
- **Corner Style:** 8px radius (md).
- **Background:** Surface (#F4F4F2) on the Paper White body; Surface Deep for nested wells.
- **Shadow Strategy:** flat at rest (see Elevation); Hover Lift glow plus a 4px `translateY` on interactive cards.
- **Border:** 1px Hairline, optionally warming to a faint gold on hover.
- **Internal Padding:** 36px×32px (lg/md). Never nest a card inside a card.

### Inputs / Fields
- **Style:** Surface Deep fill, 1px Hairline border, 6px radius, Inter body text. Labels are uppercase Muted Ink at label scale, sitting above the field.
- **Focus:** border shifts to a gold tint (rgba(201,168,76,0.5)); no glow, no layout shift. Placeholder text must clear 4.5:1, use Muted Ink, never a lighter gray.

### Navigation
- **Style:** fixed, transparent at top; on scroll past 40px it veils to near-white with the Nav Veil blur and a Hairline bottom border.
- **Logo:** an "AH" monogram in a gold-bordered rounded square, Cormorant, beside the wordmark.
- **Links:** uppercase Inter labels, Muted Ink default, Ink on hover/active with a gold underline that scales in from the center.
- **Mobile:** burger toggles a full-screen near-white overlay; links enlarge to 18px.

### Signature: The Hero Anchor
The home and page heroes use the Ink Surface espresso (#16130E) as a drenched backdrop, with a faint gold grid mask, Display headline in near-white, and a single gold-emphasized phrase. This is the brand's one dramatic moment; the rest of the page returns to the calm Paper White field.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body on Paper White (#FBFBFA) or the Ink Surface espresso (#16130E). Carry warmth through gold and Cormorant, never through the background.
- **Do** ration gold to ≤10% of any screen (The One Seal Rule).
- **Do** use Deep Gold (#8A6620) for small gold text and links on light; Antique Gold alone fails 4.5:1 at body size.
- **Do** keep Muted Ink (#5E564B) for secondary copy; it is tuned to pass AA. Verify every text/background pair.
- **Do** design for Arabic / English from the start: logical CSS properties (inline/block, not left/right), an RTL-safe layout, and a language toggle.
- **Do** give every animation a `prefers-reduced-motion` alternative (crossfade or instant).
- **Do** lead sections with a strong Cormorant Headline; let scale and weight carry hierarchy.
- **Do** earn trust with specifics: name the pharmacies, the sectors, the real operations.

### Don't:
- **Don't** use cream / sand / parchment backgrounds (the warm-neutral band OKLCH L 0.84–0.97, C 0.01–0.06, hue 40–100). This is the #1 AI tell and the brand's stated anti-reference.
- **Don't** stack a tiny uppercase tracked eyebrow above every section. One earned kicker per page maximum.
- **Don't** ship grids of identical icon + heading + text cards repeated endlessly; vary structure to fit the content.
- **Don't** lean on the big-number hero-stats template (3 / 1 / 3) as the centerpiece; if metrics appear, give them a reason and a different form.
- **Don't** use gradient text (`background-clip: text`) or decorative gradient banners. Emphasis comes from weight, scale, and the gold seal.
- **Don't** use glassmorphism beyond the scrolled navbar and mobile overlay.
- **Don't** use marketing buzzwords (streamline, empower, leverage, world-class, next-generation, seamless) or salesy, aggressive CTAs.
- **Don't** drift toward cold navy-and-blue SaaS styling or a dark hero with gradient blobs; this is a family holding group, not a software product.
- **Don't** introduce a third typeface or a second accent hue.
