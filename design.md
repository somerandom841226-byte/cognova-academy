# CogNova Academy — Design System

Brand: **CogNova** / **CogNova Academy**
Tagline: **Think Beyond • Learn Beyond**

A playful, sky-blue education platform aesthetic: navy ink, sunny yellow accents,
pastel course cards, chunky rounded surfaces, and soft 3D illustrated characters.

---

## 1. Design principles

1. **Friendly, not childish** — round corners, warm pastels, but generous type hierarchy and real whitespace.
2. **One accent at a time** — navy for text and dark sections, sky blue for emphasis, sun yellow reserved for primary actions.
3. **Illustration carries personality** — 3D characters and floating icons instead of stock photography.
4. **Soft depth** — large radii, low-contrast shadows, translucent glass on the nav; no harsh borders.
5. **Mobile first** — every section reads as a single column on a phone before it becomes a grid.

---

## 2. Color tokens

All colors are CSS variables in `src/styles.css` (OKLCH) exposed to Tailwind as
`bg-*`, `text-*`, `border-*` utilities. **Never hardcode hex or `text-white` /
`bg-black` in components.**

### Brand palette

| Token | Utility | Role |
| --- | --- | --- |
| `--sky` | `bg-sky` | Hero background sky blue |
| `--sky-soft` | `bg-sky-soft` | Section washes, soft cards |
| `--sky-deep` | `bg-sky-deep` | Marker highlight, active states |
| `--navy` | `bg-navy` / `text-navy` | Primary ink, dark section background |
| `--navy-deep` | `bg-navy-deep` | Footer, deepest surfaces |
| `--navy-card` | `bg-navy-card` | Cards inside dark sections |
| `--sun` | `bg-sun` | Primary CTA fill |
| `--sun-soft` | `bg-sun-soft` | Badges, subtle yellow fills |
| `--coral` | `bg-coral` | Course accent (marketing) |
| `--mint` | `bg-mint` | Course accent (development) |
| `--blush` | `bg-blush` | Course accent (design) |
| `--lavender` | `bg-lavender` | Course accent (AI / misc) |
| `--mist` | `bg-mist` | Neutral page break between sections |

### Semantic (shadcn) tokens

`background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`,
`accent`, `destructive`, `border`, `input`, `ring` — plus their `-foreground`
pairs. `primary` is navy, `accent` is sun yellow, `secondary` is soft sky.

Usage rules:
- Body copy: `text-navy` or `text-muted-foreground` for secondary lines.
- On dark sections: `text-primary-foreground` / `text-white/70` equivalents via tokens, never raw white.
- Course cards each own **one** pastel background plus navy text.

---

## 3. Typography

Font: **Plus Jakarta Sans** (loaded via `<link>` in `src/routes/__root.tsx`,
exposed as `--font-sans`). No serif faces anywhere.

| Level | Classes | Notes |
| --- | --- | --- |
| Eyebrow | `text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]` | e.g. "WELCOME TO COGNOVA" |
| H1 hero | `text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight` | Two lines, explicit `<br />` |
| H2 section | `text-3xl sm:text-4xl lg:text-5xl font-extrabold` | |
| H3 card | `text-lg sm:text-xl font-bold` | |
| Body | `text-base sm:text-lg leading-relaxed` | |
| Small / meta | `text-sm font-medium` | prices, durations, lesson counts |

**Marker highlight:** the `hl-blue` utility draws a hand-drawn jagged sky-blue
swatch behind a word (via `clip-path` on `::before`), paired with
`hl-blue-foreground` for the light text on top. Used on one word per headline —
currently "Beyond" in `Think Beyond, / Learn Beyond with CogNova Academy.`

---

## 4. Shape, elevation, motion

- **Radii:** `--radius: 0.875rem` scaling to `rounded-4xl` for hero art and big cards. Pills (`rounded-full`) for nav, buttons and badges.
- **Shadows:** soft and wide, low opacity; no inner borders on pastel cards.
- **Glassmorphism (nav):** translucent white background + `backdrop-blur` + faint border; the mobile dropdown reuses the same glass recipe.
- **Motion:** `animate-float-slow` / `animate-float-slower` (`studify-float` keyframes, ±14px translate with slight rotation) on decorative 3D icons only. Hover states are transform + shadow, ~200ms ease.

---

## 5. Layout & responsiveness

- Container: max width ~1200px, `px-4 sm:px-6 lg:px-8`, centered.
- Section rhythm: `py-16 sm:py-24 md:py-32`.
- Breakpoints in use: `sm` 640 (phone landscape), `md` 768 (tablet), `lg` 1024 (laptop nav appears), `xl` 1280.
- Grid ladder: cards go `1 → sm:2 → lg:3` columns. Never a fixed multi-column layout on phones.
- Overflow discipline: decorative art is absolutely positioned inside `overflow-hidden` parents; the giant footer wordmark is capped at `15vw` so tablets never scroll sideways.
- Verified at 390px, 820px and 1440px with zero horizontal overflow.

---

## 6. Components

Location: `src/components/studify/*`, assembled in `src/routes/index.tsx`.

| Component | Purpose | Design notes |
| --- | --- | --- |
| `nav.tsx` | Sticky pill navbar | Glass background, wordmark "CogNova", `lg` link row, hamburger + glass dropdown below `lg`, sun-yellow "Get Started" always visible |
| `hero.tsx` | Headline + proof | Sky gradient, eyebrow, marker-highlighted H1, dual CTA, avatar stack with count, 3D student group, floating bolt/brain icons |
| `features.tsx` | "WHY COGNOVA ACADEMY" | Dark navy section, 4 illustrated cards on `navy-card` surfaces |
| `courses.tsx` | Course catalogue | Exactly **3** live courses (AI Smart Kids, Graphic Design Fundamentals, Modern Web Development) + a 4th "View more" card explaining the platform just launched, with a "Get notified" button |
| `growth.tsx` | Outcome story | Copy + 3D characters, "Join CogNova Today" CTA. Stats strip intentionally removed — do not re-add |
| `testimonials.tsx` | Social proof | Quote cards with avatars, `1 → sm:2 → lg:3` |
| `pricing.tsx` | Three tiers | Middle "Pro" plan elevated in navy with sun-yellow CTA |
| `faq.tsx` | Accordion | Local `useState`, one panel open at a time, chevron rotation |
| `footer.tsx` | Close | `navy-deep`, oversized "CogNova" wordmark, "CogNova Academy" sub-brand, socials, students illustration |

Page order: **Hero → Features → Courses → Growth → Testimonials → Pricing → FAQ → Footer**.

Removed on purpose (do not restore without a request): the Instructors section, the Growth stats strip, the three retired courses.

---

## 7. Imagery & icons

- Assets in `src/assets/`, imported as ES modules.
- **Transparent PNGs** for anything that floats over a gradient: `hero-students`, `bolt-blue`, `bolt-orange`, `brain`, `boy-pointing`, `character-cool`, `stairs-flag`.
- **JPGs** for framed art inside cards: `feature-*`, `course-*`, `footer-kids`, `grass-hill`.
- Style brief for new art: soft 3D clay render, pastel palette matching the tokens, neutral studio lighting, no text baked into the image.
- Every image needs descriptive `alt`; decorative-only art uses `alt=""`.

---

## 8. Brand assets & metadata

- Favicon: `public/favicon.png` (brain mark cropped from the CogNova logo), linked in `src/routes/__root.tsx` together with an apple-touch-icon.
- Title: `CogNova Academy – Think Beyond, Learn Beyond` (<60 chars).
- Each route defines its own `head()` with unique title, description, `og:title`, `og:description`, `og:type`, `twitter:card`; the home route also sets a canonical link.
- Single `<h1>` per page (the hero headline); semantic `<section>` / `<article>` elsewhere.

---

## 9. Accessibility

- Interactive elements are real `<a>` / `<button>` with visible focus rings (`ring`).
- Contrast: navy on sky/pastels and light text on navy both clear AA for body sizes.
- Nav toggle and social links carry `aria-label`; the mobile menu exposes `aria-expanded`.
- Motion is limited to decorative art, so reduced-motion users lose nothing functional.
