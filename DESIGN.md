---
name: "Rahul Kumar Engineering Portfolio"
description: "A portrait-led engineering journal that turns production experience into calm, scannable proof."
colors:
  signal-green: "#b8ff5a"
  signal-green-deep: "#2f581a"
  charcoal-ground: "#080a09"
  charcoal-soft: "#101311"
  charcoal-raised: "#161916"
  warm-ivory: "#f0ede3"
  warm-ivory-muted: "#b9b9b0"
  ivory-hairline: "rgba(240, 237, 227, 0.16)"
  ivory-rule: "rgba(240, 237, 227, 0.34)"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, Times New Roman, serif"
    fontSize: "clamp(4rem, 8.3vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, Times New Roman, serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Bodoni Moda, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.15rem, 4vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  action:
    fontFamily: "Manrope, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
  label:
    fontFamily: "DM Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  none: "0"
  control-sm: "10px"
  control: "12px"
  frame-mobile: "14px"
  frame: "16px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(5.5rem, 10vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.warm-ivory}"
    textColor: "{colors.charcoal-ground}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.82rem 1.2rem"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.signal-green}"
    textColor: "{colors.charcoal-ground}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.82rem 1.2rem"
    height: "46px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.warm-ivory}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.82rem 0"
    height: "46px"
  navigation-frame:
    backgroundColor: "rgba(12, 14, 13, 0.86)"
    textColor: "{colors.warm-ivory}"
    rounded: "{rounded.frame}"
    padding: "0 0.7rem 0 1.5rem"
    height: "66px"
  tab-selected:
    backgroundColor: "{colors.warm-ivory}"
    textColor: "{colors.charcoal-ground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1rem"
    height: "58px"
  motion-control:
    backgroundColor: "rgba(8, 10, 9, 0.92)"
    textColor: "{colors.warm-ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.control-sm}"
    padding: "0 0.85rem"
    height: "40px"
  card-editorial:
    backgroundColor: "{colors.charcoal-ground}"
    textColor: "{colors.warm-ivory}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 4vw, 4rem)"
  card-editorial-hover:
    backgroundColor: "{colors.warm-ivory}"
    textColor: "{colors.charcoal-ground}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 4vw, 4rem)"
  disclosure-paper:
    backgroundColor: "{colors.warm-ivory}"
    textColor: "{colors.charcoal-ground}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "1.5rem 0"
---

# Design System: Rahul Kumar Engineering Portfolio

## Overview

**Creative North Star: "The Engineering Signal Journal"**

This system behaves like an independent engineering journal: human presence leads, disciplined typography establishes authority, and technical detail appears as annotation rather than decoration. The portrait and oversized editorial serif provide the emotional entry point; concise claims, ruled modules, and measurable outcomes convert that attention into credible proof.

The atmosphere is dark, calm, and precise, with generous negative space and a restrained density that lets each proof point land. Warm ivory sections create deliberate chapter breaks, while signal green marks state, emphasis, and evidence. The system refuses generic developer-dashboard chrome, terminal cosplay, promotional gloss, and ornamental effects that compete with the work.

**Key Characteristics:**

- Portrait-led editorial storytelling with technical annotations.
- A disciplined charcoal, warm ivory, and signal-green palette.
- Oversized serif statements balanced by plain sans-serif explanation.
- Proof-first modules structured by rules, grids, and measurable outcomes.
- Purposeful focus-rack motion with a persistent motion-off control.

## Colors

The palette pairs a charcoal ground with warm ivory text and paper, then reserves signal green for active states and high-value evidence.

### Primary

- **Signal Green** (`#b8ff5a`): Marks live status, emphasized phrases, metrics, selection, focus, and the featured writing surface; its scarcity makes it meaningful.
- **Deep Signal Green** (`#2f581a`): Carries the accent onto warm-ivory surfaces where the brighter green would lose legibility.

### Neutral

- **Charcoal Ground** (`#080a09`): The default page canvas and the strongest text color on paper sections.
- **Soft Charcoal** (`#101311`): A quiet intermediate dark for layered surfaces.
- **Raised Charcoal** (`#161916`): Image fallbacks and subtle tonal separation without a shadow.
- **Warm Ivory** (`#f0ede3`): Primary text on charcoal and the paper surface for expertise and contact chapters.
- **Muted Warm Ivory** (`#b9b9b0`): Supporting copy, metadata, and secondary navigation on dark surfaces.
- **Ivory Hairline** (`rgba(240, 237, 227, 0.16)`): Subtle module boundaries, grid lines, and default frames.
- **Ivory Rule** (`rgba(240, 237, 227, 0.34)`): Stronger control borders and action underlines that need clearer definition.

### Named Rules

**The Signal Is Evidence Rule.** Use signal green for state, selection, proof, or a single editorial emphasis—not as ambient decoration.

**The Paper Chapter Rule.** Warm-ivory surfaces mark a real narrative change; they do not appear as scattered cards inside the charcoal world.

## Typography

**Display Font:** Bodoni Moda (with Georgia and Times New Roman fallbacks)  
**Body Font:** Manrope (with system sans-serif fallbacks)  
**Label/Mono Font:** DM Mono (with SFMono-Regular and Consolas fallbacks)

**Character:** Bodoni Moda gives the portfolio its magazine authority and human warmth; Manrope keeps technical explanation contemporary and frictionless. DM Mono is an annotation voice for dates, measurements, technologies, and system state—not a costume for ordinary prose.

### Hierarchy

- **Display** (500, `clamp(4rem, 8.3vw, 6rem)`, 0.88): The name and rare first-view statements; tightly led and optically balanced.
- **Headline** (500, `clamp(3rem, 6vw, 6rem)`, 0.98): Major chapter titles, often pairing roman and italic phrases.
- **Title** (500, `clamp(2.15rem, 4vw, 4.5rem)`, 1): Project, role, and approach titles that must remain scannable beside proof.
- **Body** (400, `1rem`, 1.65): Explanations and narrative copy, generally constrained to about 48–64 characters per line.
- **Action** (500, `0.76rem`, 1): Buttons and direct links; compact, plain, and sentence case.
- **Label** (400, `0.72rem`, 0.04em letter spacing): Dates, metrics, eyebrow copy, technologies, and status annotations.

### Named Rules

**The Three Voices Rule.** Serif tells the human story, sans-serif explains, and mono labels evidence; do not swap their jobs for novelty.

**The One Editorial Gesture Rule.** A heading may use one italic or signal-green phrase, but never multiple competing treatments.

## Layout

Desktop surfaces use a strict 12-column field, a reusable content width capped at `1340px`, and a wider hero/proof stage capped at `1500px`. Section spacing expands fluidly from `5.5rem` to `10rem`, with one-dimensional ruled lists and asymmetric two-column stories providing rhythm instead of repeated card grids. Text measures stay deliberately narrow even when the surrounding stage is wide.

At `1080px`, the primary navigation collapses and multi-column project and timeline arrangements simplify. At `760px`, the layout becomes a four-column field, section gutters reduce to `1rem`, proof and article grids become single-column, and display type scales with the viewport while preserving its editorial dominance. A final `440px` adjustment tightens image heights, actions, and section spacing without reducing the minimum supported width below `320px`.

**The Grid Is a Quiet Instrument Rule.** Align portrait edges, rules, labels, and text blocks to the shared grid; the grid may be visible as a faint guide in the hero but must not become decoration elsewhere.

## Elevation & Depth

The system is flat and editorial: it uses no box shadows. Depth comes from charcoal tonal layering, warm-paper chapter changes, thin ruled borders, image overlays, and selective foreground motion. The floating header earns separation through translucency and a stronger border when scrolled, not through a drop shadow.

**The Flat-by-Default Rule.** Never add wide ambient shadows to cards or controls; use tonal contrast, a ruled edge, or a state change to establish hierarchy.

**The Focus-Rack Rule.** Motion may sharpen content from soft blur and slight vertical offset, but it must preserve readable content before JavaScript, offer a motion-off control, and collapse under reduced-motion preferences.

## Shapes

The visual language is rectilinear and ruled. Editorial cards, images, lists, and paper sections keep square corners (`0`), preserving the journal-grid character. Rounded geometry is reserved for controls and the floating frame: compact controls use `10px`, primary actions use `12px`, the mobile header uses `14px`, and the desktop header uses `16px`. Circular geometry appears only as a tiny status indicator.

**The Rounded-Is-Interactive Rule.** Rounded corners signal a control or floating frame; content modules remain square and aligned to the editorial grid.

## Components

Components feel refined, restrained, and proof-first. They reveal state clearly, keep borders thin, and avoid decorative containers around content that can stand on the grid by itself.

### Buttons

- **Shape:** Compact gently rounded controls (`12px`) with a minimum height of `46px`.
- **Primary:** Warm-ivory fill, charcoal text, and compact `0.82rem 1.2rem` padding.
- **Hover / Focus:** The primary fill shifts to signal green and the control lifts by `2px`; keyboard focus uses a `2px` signal-green outline offset by `5px`.
- **Secondary / Link:** Transparent, square, and underlined with a strong ivory rule; it shares the same vertical rhythm but carries no filled container.

### Cards / Containers

- **Corner Style:** Square (`0`) for proof blocks, project stories, timeline rows, and article cards.
- **Background:** Charcoal by default; warm ivory appears for full chapter surfaces and article hover, while the featured Atlas module uses signal green as a singular editorial event.
- **Shadow Strategy:** No shadows; use thin rules, tonal backgrounds, image overlays, and chapter-level inversions.
- **Border:** Hairline ivory rules on dark surfaces and translucent charcoal rules on paper.
- **Internal Padding:** Fluid from `1.5rem` to `4rem`, increasing with viewport and narrative importance.

### Navigation

The fixed navigation sits in a translucent charcoal frame with a thin ivory hairline and a `16px` radius. Manrope labels remain muted until hover, focus, or active state; a signal-green underline grows from the interaction origin. Below `1080px`, it becomes a compact menu control and full-screen overlay whose links switch to large display serif with mono numbering.

### Tabs

Approach tabs form one ruled strip with equal columns and no individual rounding. The selected tab inverts to warm ivory with charcoal text; inactive tabs remain transparent and turn signal green on hover. All labels use the mono annotation voice.

### Disclosures

Expertise disclosures sit directly on the warm-paper chapter as tall ruled rows. Each summary pairs a mono category, a serif capability statement, and a minimal plus/minus made from one-pixel rules. Expanded details align beneath the capability column and avoid nested card surfaces.

### Motion Control

The persistent motion control is a compact charcoal pill (`10px`) with a strong ivory border, mono uppercase status, and a two-bar activity mark. The status word uses signal green. Turning motion off freezes the animated bar and disables the page’s progressive motion system.

## Do's and Don'ts

### Do:

- **Do** lead with human presence, then make measurable outcomes and system evidence easy to scan.
- **Do** use signal green sparingly for active state, verified proof, focus, or one editorial emphasis.
- **Do** use ruled rows, chapter-level color inversions, and generous space to create hierarchy without shadows.
- **Do** preserve readable content without JavaScript and respect both the visible motion control and `prefers-reduced-motion`.
- **Do** keep serif, sans-serif, and mono type in their assigned narrative, explanatory, and annotative roles.

### Don't:

- **Don't** turn the interface into a generic dashboard, terminal simulation, or grid of interchangeable rounded cards.
- **Don't** scatter signal green across decorative backgrounds, gradients, or multiple competing accents in one view.
- **Don't** add wide drop shadows, glassy glow, or ornamental depth where a tonal shift or ruled edge is sufficient.
- **Don't** use warm ivory as an isolated card color; reserve it for meaningful chapter changes and interaction inversions.
- **Don't** let motion delay access to content, obscure focus, or survive a reduced-motion preference.
