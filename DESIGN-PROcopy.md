# EnglishJibi Classes — Design System v2.0
## "Royal Ink" — Professional Single-Theme Edition

> **Design philosophy:** One authoritative theme. No dark/light toggle. Every surface communicates academic prestige — the weight of a navy stamp, the warmth of aged parchment, the precision of a gold serif line. Think Oxford Press meets a modern coaching institute.

---

## 1. Logo Color Extraction

Analyzed from the EnglishJibi circular logo:

| Swatch Name       | Hex       | Source in Logo                        |
|-------------------|-----------|---------------------------------------|
| Navy Deep         | `#0D1B52` | Outermost ring / darkest background   |
| Royal Blue        | `#1B3A9A` | Primary logo fill / mid-gradient      |
| Cobalt            | `#2559C8` | Highlight gradient / interior glow    |
| Chrome Silver     | `#B8C8E4` | "EJ" letter metallic sheen            |
| Pearl White       | `#EAEFFA` | Text "ENGLISH JIBI" / bright edge     |
| Ink Black         | `#0A0A16` | Fountain pen nib body                 |

---

## 2. Updated CSS Palette — "Royal Ink" (Single Theme)

Remove the `.dark {}` block entirely from the old stylesheet. Replace both `:root` blocks with this single system.

```css
/* ═══════════════════════════════════════════════════════
   ROYAL INK — EnglishJibi Design System v2.0
   Single-mode (no dark/light toggle). Remove .dark {} entirely.
   ═══════════════════════════════════════════════════════ */

:root {
    /* ── Brand Core (extracted from logo) ─────────────── */
    --brand-navy:      #0D1B52;   /* deepest navy — headers, footer bg */
    --brand-royal:     #1B3A9A;   /* royal blue — primary buttons, links */
    --brand-cobalt:    #2559C8;   /* cobalt — hover states, accents      */
    --brand-silver:    #B8C8E4;   /* chrome silver — decorative dividers  */
    --brand-pearl:     #EAEFFA;   /* pearl — section tints, card borders  */

    /* ── Gold Accent (classic prestige pairing with navy) ─ */
    --gold-rich:       #B8931A;   /* rich gold — badges, section markers  */
    --gold-light:      #F0D080;   /* light gold — rule lines, icon fills  */
    --gold-muted:      #7A6212;   /* dark gold — gold text on light bg    */

    /* ── Page Surfaces ─────────────────────────────────── */
    --bg-page:         #FAFAF7;   /* warm off-white — main page canvas    */
    --bg-section-alt:  #F4F1E8;   /* warm parchment — alternating sections*/
    --bg-card:         #FFFFFF;   /* pure white — cards                   */
    --bg-navy-section: #0D1B52;   /* navy fill — footer, CTA, hero strips */

    /* ── Typography ────────────────────────────────────── */
    --text-heading:    #0D1B52;   /* navy — all headings (h1–h4)          */
    --text-body:       #1E2235;   /* near-black with navy tint — body     */
    --text-muted:      #5A6080;   /* medium slate — subtext, captions     */
    --text-on-navy:    #EAEFFA;   /* pearl — text on dark navy backgrounds*/
    --text-on-navy-muted: #9AAACF;/* muted pearl — supporting text on navy*/
    --text-gold:       #7A6212;   /* dark gold — eyebrow labels           */
    --text-link:       #1B3A9A;   /* royal blue — inline links            */

    /* ── Borders & Dividers ─────────────────────────────── */
    --border-default:  rgba(13, 27, 82, 0.10);  /* soft navy border      */
    --border-card:     rgba(13, 27, 82, 0.08);  /* card border           */
    --border-strong:   rgba(13, 27, 82, 0.20);  /* emphasized rule       */
    --border-gold:     rgba(184, 147, 26, 0.35);/* gold accent border    */

    /* ── Glassmorphic & Special ─────────────────────────── */
    --glass-nav-bg:    rgba(250, 250, 247, 0.92);
    --glass-nav-border:rgba(13, 27, 82, 0.10);
    --card-shadow:     0 2px 12px rgba(13, 27, 82, 0.07),
                       0 1px 4px rgba(13, 27, 82, 0.05);
    --card-shadow-hover: 0 12px 32px rgba(13, 27, 82, 0.12),
                         0 4px 12px rgba(13, 27, 82, 0.08);

    /* ── Animation ──────────────────────────────────────── */
    --ease-premium:    cubic-bezier(0.22, 1, 0.36, 1);
    --ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 3. Updated Tailwind Config

Replace the old `tailwind.config` block. This maps directly to the CSS variables above.

```javascript
tailwind.config = {
    darkMode: false,   /* ← REMOVE dark mode — single theme only */
    theme: {
        extend: {
            fontFamily: {
                /* Keep Montserrat for body/nav (already loaded) */
                sans:    ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
                /* Add Playfair Display for editorial headings */
                heading: ['Playfair Display', 'Georgia', 'serif'],
                /* Lora as fallback display option */
                display: ['Lora', 'Georgia', 'serif'],
            },
            colors: {
                brand: {
                    navy:   'var(--brand-navy)',
                    royal:  'var(--brand-royal)',
                    cobalt: 'var(--brand-cobalt)',
                    silver: 'var(--brand-silver)',
                    pearl:  'var(--brand-pearl)',
                },
                gold: {
                    rich:   'var(--gold-rich)',
                    light:  'var(--gold-light)',
                    muted:  'var(--gold-muted)',
                },
                page: {
                    base:   'var(--bg-page)',
                    alt:    'var(--bg-section-alt)',
                    card:   'var(--bg-card)',
                    navy:   'var(--bg-navy-section)',
                },
                /* Re-skin Tailwind semantic scales to match palette */
                indigo: {
                    50:  '#EAEFFA', 100: '#CDD9F4', 200: '#AABDE8',
                    300: '#7A9CD6', 400: '#4B78C4', 500: '#2559C8',
                    600: '#1B3A9A', 700: '#152E80', 800: '#0D1B52',
                    900: '#070E2E', 950: '#030718'
                },
                amber: {
                    50:  '#FBF5E0', 100: '#F5E5B0', 200: '#EDD07A',
                    300: '#E3B840', 400: '#D6A020', 500: '#B8931A',
                    600: '#957510', 700: '#7A6212', 800: '#5C4A0D',
                    900: '#3D3208', 950: '#231D04'
                },
                slate: {
                    50:  '#F4F6FA', 100: '#E2E8F2', 200: '#C8D2E8',
                    300: '#A0AEC8', 400: '#7585A8', 500: '#5A6080',
                    600: '#475070', 700: '#36405A', 800: '#252D42',
                    900: '#1E2235', 950: '#12162B'
                },
            },
            /* Border radius tokens */
            borderRadius: {
                'pill': '9999px',
                'card': '16px',
                'btn':  '8px',
            },
            /* Box shadows */
            boxShadow: {
                'card':       '0 2px 12px rgba(13,27,82,0.07), 0 1px 4px rgba(13,27,82,0.05)',
                'card-hover': '0 12px 32px rgba(13,27,82,0.12), 0 4px 12px rgba(13,27,82,0.08)',
                'nav':        '0 4px 24px rgba(13,27,82,0.08)',
                'btn':        '0 2px 8px rgba(27,58,154,0.25)',
                'gold':       '0 2px 8px rgba(184,147,26,0.25)',
            },
        }
    }
}
```

---

## 4. Typography System

Add these Google Fonts to your `<head>` (alongside existing Montserrat):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale & Role Map

| Role             | Font           | Size           | Weight | Color           | Class suggestion      |
|------------------|----------------|----------------|--------|-----------------|-----------------------|
| Page H1          | Playfair Display | 2.75rem–4rem | 700    | `--text-heading`| `.type-hero`          |
| Section Heading  | Playfair Display | 2rem–2.5rem  | 600    | `--text-heading`| `.type-h2`            |
| Card Heading     | Playfair Display | 1.25rem      | 600    | `--text-heading`| `.type-h3`            |
| Eyebrow Label    | Montserrat     | 0.7rem         | 700    | `--text-gold`   | `.eyebrow`            |
| Body Text        | Montserrat     | 1rem           | 400    | `--text-body`   | (default)             |
| Muted / Caption  | Montserrat     | 0.875rem       | 400    | `--text-muted`  | `.text-muted`         |
| Nav Links        | Montserrat     | 0.875rem       | 600    | `--text-body`   | `.nav-link`           |
| Button Text      | Montserrat     | 0.875rem       | 700    | varies          | `.btn-*`              |
| Stat Number      | Playfair Display | 2.5rem–3rem  | 700    | `--brand-royal` | `.stat-value`         |
| Quote / Pull     | Playfair Display | 1.125rem     | 600italic| `--text-heading`| `.pull-quote`        |

```css
/* Type classes to add to your global styles */
.type-hero {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--text-heading);
}
.type-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: var(--text-heading);
}
.type-h3 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-heading);
}
/* Eyebrow — the gold uppercase label above every section heading */
.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-gold);
    margin-bottom: 0.75rem;
}
.eyebrow::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: var(--gold-rich);
    border-radius: 1px;
}
/* Pull quote */
.pull-quote {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.125rem;
    font-style: italic;
    font-weight: 600;
    line-height: 1.6;
    color: var(--text-heading);
    border-left: 3px solid var(--gold-rich);
    padding-left: 1.25rem;
    margin: 1.5rem 0;
}
```

---

## 5. Component Library Updates

### 5.1 Glass Navigation (`nav.glass-nav`)

**Remove dark mode variant.** Use this single version:

```css
.glass-nav {
    background: var(--glass-nav-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-nav-border);
    box-shadow: var(--card-shadow);
    transition: all 0.4s var(--ease-premium);
}
/* Solid fallback on scroll (add via JS when scrollY > 60) */
.glass-nav.scrolled {
    background: rgba(250, 250, 247, 0.98);
    box-shadow: 0 4px 20px rgba(13, 27, 82, 0.10);
}
```

### 5.2 Cards (`.glass-card` → `.ink-card`)

Rename to `.ink-card` for clarity. Remove the dark gradient variant:

```css
.ink-card {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 16px;
    box-shadow: var(--card-shadow);
    transition: transform 0.4s var(--ease-premium),
                box-shadow 0.4s var(--ease-premium),
                border-color 0.3s ease;
    will-change: transform, box-shadow;
}
@media (hover: hover) {
    .ink-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--card-shadow-hover);
        border-color: var(--border-gold);
    }
}
/* Navy variant — for featured/highlighted cards */
.ink-card-navy {
    background: var(--brand-navy);
    border: 1px solid rgba(234, 239, 250, 0.12);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(7, 14, 46, 0.3);
    color: var(--text-on-navy);
}
```

### 5.3 Buttons

```css
/* Primary — Royal Blue filled */
.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--brand-royal);
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(27, 58, 154, 0.25);
    transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
    background: var(--brand-cobalt);
    box-shadow: 0 4px 16px rgba(37, 89, 200, 0.35);
}
.btn-primary:active { transform: scale(0.97); }

/* Secondary — Navy outlined */
.btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    color: var(--brand-navy);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.72rem 1.7rem;
    border-radius: 8px;
    border: 2px solid var(--brand-navy);
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, transform 0.1s ease;
}
.btn-secondary:hover {
    background: var(--brand-navy);
    color: #FFFFFF;
}
.btn-secondary:active { transform: scale(0.97); }

/* Gold CTA — prestige accent */
.btn-gold {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--gold-rich);
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-gold);
    transition: background 0.2s ease, transform 0.1s ease;
}
.btn-gold:hover { background: #9A7A16; }
.btn-gold:active { transform: scale(0.97); }

/* Ghost — on navy backgrounds */
.btn-ghost-light {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(234, 239, 250, 0.12);
    color: var(--text-on-navy);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.72rem 1.7rem;
    border-radius: 8px;
    border: 1.5px solid rgba(234, 239, 250, 0.28);
    cursor: pointer;
    transition: background 0.2s ease, transform 0.1s ease;
}
.btn-ghost-light:hover { background: rgba(234, 239, 250, 0.20); }
.btn-ghost-light:active { transform: scale(0.97); }
```

### 5.4 Section Wrapper Pattern

```css
/* Standard light section */
.section-base {
    background: var(--bg-page);
    padding: 5rem 1.5rem;
}
/* Alternate warm section (every other section) */
.section-warm {
    background: var(--bg-section-alt);
    padding: 5rem 1.5rem;
}
/* Navy dark section — footer, CTA, announcement */
.section-navy {
    background: var(--bg-navy-section);
    padding: 5rem 1.5rem;
    color: var(--text-on-navy);
}
/* Gold rule divider between sections */
.section-divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--gold-rich), var(--gold-light));
    border-radius: 2px;
    margin: 1rem 0 1.75rem;
}
/* Section heading group (eyebrow + h2 + divider + subtext) */
.section-header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 3.5rem;
}
```

### 5.5 Announcement Ticker (Updated Colors)

```css
.ticker-bar {
    background: linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-royal) 100%);
    color: var(--text-on-navy);
    overflow: hidden;
    white-space: nowrap;
    border-bottom: 2px solid var(--gold-rich);
    position: relative;
}
.ticker-track {
    display: inline-flex;
    gap: 64px;
    padding: 10px 0;
    animation: ticker 32s linear infinite;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-on-navy);
}
.ticker-track .star {
    color: var(--gold-light);
}
.ticker-bar:hover .ticker-track {
    animation-play-state: paused;
}
@keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
}
```

### 5.6 Course / Feature Badge Pills

```css
.badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.3rem 0.75rem;
    border-radius: 100px;
}
.badge-navy   { background: rgba(13, 27, 82, 0.08); color: var(--brand-navy); }
.badge-gold   { background: rgba(184, 147, 26, 0.12); color: var(--gold-muted); }
.badge-royal  { background: rgba(27, 58, 154, 0.10); color: var(--brand-royal); }
.badge-popular {
    background: var(--gold-rich);
    color: #FFFFFF;
    box-shadow: 0 1px 6px rgba(184, 147, 26, 0.30);
}
```

### 5.7 Stat Card

```css
.stat-card {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 16px;
    padding: 1.75rem 1.5rem;
    text-align: center;
    box-shadow: var(--card-shadow);
    position: relative;
    overflow: hidden;
}
.stat-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--brand-royal), var(--brand-cobalt));
}
.stat-value {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--brand-navy);
    line-height: 1;
    margin-bottom: 0.35rem;
}
.stat-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
```

### 5.8 Form Inputs (Updated)

```css
.form-input,
.form-select,
.form-textarea {
    width: 100%;
    background: #FFFFFF;
    border: 1.5px solid var(--border-default);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    color: var(--text-body);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
    -webkit-appearance: none;
}
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    border-color: var(--brand-royal);
    box-shadow: 0 0 0 3px rgba(27, 58, 154, 0.12);
}
.form-label {
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-body);
    margin-bottom: 0.4rem;
    letter-spacing: 0.02em;
}
```

---

## 6. Page Section Architecture

### Section Order (Home Page — Recommended)

```
┌─────────────────────────────────────────────────────┐
│  01 · TICKER BAR            Navy background          │
├─────────────────────────────────────────────────────┤
│  02 · HERO                  Light (--bg-page)        │
├─────────────────────────────────────────────────────┤
│  03 · SCHOOL TRUST STRIP  ← NEW   Warm alt bg       │
├─────────────────────────────────────────────────────┤
│  04 · STATS COUNTER         Light                    │
├─────────────────────────────────────────────────────┤
│  05 · WHY ENGLISHJIBI     ← NEW   Warm alt bg       │
├─────────────────────────────────────────────────────┤
│  06 · FEATURED COURSES      Light                    │
├─────────────────────────────────────────────────────┤
│  07 · FOUNDER SPOTLIGHT     Navy (dark)              │
├─────────────────────────────────────────────────────┤
│  08 · TESTIMONIALS        ← NEW   Light              │
├─────────────────────────────────────────────────────┤
│  09 · YOUTUBE HUB           Warm alt bg              │
├─────────────────────────────────────────────────────┤
│  10 · BATCH SCHEDULE      ← NEW   Light              │
├─────────────────────────────────────────────────────┤
│  11 · GALLERY               Warm alt bg              │
├─────────────────────────────────────────────────────┤
│  12 · COMMUNITY             Light                    │
├─────────────────────────────────────────────────────┤
│  13 · FAQ                 ← NEW   Warm alt bg       │
├─────────────────────────────────────────────────────┤
│  14 · CTA BAND              Navy (dark)              │
├─────────────────────────────────────────────────────┤
│  15 · FOOTER                Navy (dark)              │
└─────────────────────────────────────────────────────┘
```

---

## 7. New Sections — Design Specs

### 7.1 School Trust Strip *(NEW)*

> **Purpose:** Instant credibility. Show that students from top Bhubaneswar schools trust EnglishJibi.

```html
<!-- Trust Strip HTML Structure -->
<section class="section-warm py-6">
  <div class="max-w-5xl mx-auto px-4">
    <p class="text-center text-xs font-semibold tracking-widest uppercase text-muted mb-4">
      Trusted by students from
    </p>
    <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
      <!-- School names as styled text pills (no logos needed) -->
      <span class="trust-pill">ODM Public School</span>
      <span class="trust-pill">DAV Public School</span>
      <span class="trust-pill">DPS Bhubaneswar</span>
      <span class="trust-pill">SAI International</span>
      <span class="trust-pill">Narayana School</span>
      <span class="trust-pill">KIIT International</span>
    </div>
  </div>
</section>
```

```css
.trust-pill {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--brand-navy);
    letter-spacing: 0.04em;
    padding: 0.4rem 1rem;
    border: 1.5px solid var(--border-strong);
    border-radius: 100px;
    white-space: nowrap;
}
```

---

### 7.2 Why EnglishJibi *(NEW)*

> **Purpose:** Show four unique differentiators. This is the "reason to choose" section.

**Four pillars (content):**

| Icon (lucide)   | Headline              | Body (one line)                              |
|-----------------|-----------------------|----------------------------------------------|
| `users`         | Small Batch Sizes     | Max 15–20 students — every child is seen     |
| `award`         | 11+ Years of Mastery  | Chiranjibi Sir brings proven CBSE expertise  |
| `book-open`     | NCERT-Exact Coverage  | Every topic mapped to the board syllabus     |
| `trending-up`   | Results-First Method  | Weekly tests, oral drills, and real feedback |

```html
<!-- Why EnglishJibi — 2x2 grid (mobile: 1 col, tablet: 2 col, desktop: 4 col) -->
<section class="section-warm">
  <div class="max-w-6xl mx-auto px-4">
    <div class="section-header">
      <span class="eyebrow">Why Choose Us</span>
      <h2 class="type-h2">The EnglishJibi Difference</h2>
      <div class="section-divider mx-auto"></div>
      <p class="text-muted mt-3">Four commitments that set us apart from every other coaching center.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="why-card">
        <div class="why-icon-wrap"><i data-lucide="users"></i></div>
        <h3 class="type-h3 mt-4 mb-2">Small Batch Sizes</h3>
        <p class="text-sm text-muted">Max 15–20 students — every child is seen, heard, and guided.</p>
      </div>
      <!-- Repeat for other 3 pillars -->
    </div>
  </div>
</section>
```

```css
.why-card {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 16px;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: var(--card-shadow);
    transition: transform 0.3s var(--ease-premium), box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}
.why-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--brand-royal), var(--brand-cobalt));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s var(--ease-premium);
}
.why-card:hover::after { transform: scaleX(1); }
.why-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--card-shadow-hover);
}
.why-icon-wrap {
    width: 56px;
    height: 56px;
    background: var(--brand-pearl);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}
.why-icon-wrap i[data-lucide] {
    width: 24px;
    height: 24px;
    stroke: var(--brand-royal);
    stroke-width: 1.75;
}
```

---

### 7.3 Testimonials *(NEW)*

> **Purpose:** Social proof from actual parents and students builds trust before enrollment.

**Content to collect:**
- 3–4 quotes (parent or student)
- Name + Class attended (no need for photos initially — use initials avatar)

```html
<!-- Testimonial Card -->
<div class="testimonial-card ink-card p-6">
    <div class="flex gap-1 mb-3">
        <!-- 5 gold stars -->
        <span style="color: var(--gold-rich);">★★★★★</span>
    </div>
    <p class="pull-quote text-sm leading-relaxed mb-4">
        "My daughter's grammar improved so much in just 2 months. Chiranjibi Sir explains
        every concept with real patience. Best decision we made for her board prep."
    </p>
    <div class="flex items-center gap-3">
        <div class="testimonial-avatar">S</div>
        <div>
            <p class="font-semibold text-sm text-heading">Smita Patnaik</p>
            <p class="text-xs text-muted">Parent · Class 9 Student</p>
        </div>
    </div>
</div>
```

```css
.testimonial-card {
    position: relative;
}
.testimonial-card::before {
    content: '\201C';   /* Large left quote mark */
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 5rem;
    font-weight: 700;
    color: var(--brand-pearl);
    line-height: 1;
    pointer-events: none;
}
.testimonial-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--brand-navy);
    color: var(--text-on-navy);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    flex-shrink: 0;
}
```

---

### 7.4 Batch Schedule *(NEW)*

> **Purpose:** Parents need to know timing before they inquire. A visual timetable removes the biggest friction point.

```html
<!-- Batch Schedule Table -->
<section class="section-base">
  <div class="max-w-5xl mx-auto px-4">
    <div class="section-header">
      <span class="eyebrow">Weekly Timetable</span>
      <h2 class="type-h2">Batch Schedule</h2>
      <div class="section-divider mx-auto"></div>
    </div>
    <div class="overflow-x-auto">
      <table class="schedule-table w-full">
        <thead>
          <tr>
            <th>Batch / Class</th>
            <th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="batch-name">Group A · Class 6–7</td>
            <td class="slot">8:00–8:30</td>
            <td class="slot">8:00–8:30</td>
            <td>—</td>
            <td class="slot">8:00–8:30</td>
            <td class="slot">8:00–8:30</td>
            <td>—</td>
          </tr>
          <!-- Add remaining batches -->
        </tbody>
      </table>
    </div>
  </div>
</section>
```

```css
.schedule-table { border-collapse: collapse; font-size: 0.875rem; }
.schedule-table thead tr {
    background: var(--brand-navy);
    color: var(--text-on-navy);
}
.schedule-table th {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.875rem 1rem;
    text-align: center;
    white-space: nowrap;
}
.schedule-table th:first-child { text-align: left; }
.schedule-table td {
    padding: 0.75rem 1rem;
    text-align: center;
    border-bottom: 1px solid var(--border-default);
    color: var(--text-muted);
    font-family: 'Montserrat', sans-serif;
}
.schedule-table .batch-name {
    text-align: left;
    font-weight: 600;
    color: var(--text-heading);
}
.schedule-table .slot {
    background: rgba(27, 58, 154, 0.06);
    color: var(--brand-royal);
    font-weight: 600;
    border-radius: 4px;
}
.schedule-table tbody tr:hover {
    background: var(--bg-section-alt);
}
```

---

### 7.5 FAQ Section *(NEW)*

> **Purpose:** Reduce inquiry friction. Answer the top questions before parents call.

**Recommended FAQs:**
1. What classes do you offer?
2. What is the batch size?
3. How are sessions structured?
4. Do you follow ODM/DAV/CBSE syllabus?
5. Where are you located?
6. How can I enroll?

```html
<!-- FAQ Accordion Item -->
<div class="faq-item" onclick="this.classList.toggle('open')">
    <div class="faq-q">
        <span>What is the batch size at EnglishJibi Classes?</span>
        <i data-lucide="chevron-down" class="faq-icon"></i>
    </div>
    <div class="faq-a">
        <p>Each batch is limited to 15–20 students to ensure every child receives personal 
        attention. This small group format allows Chiranjibi Sir to monitor individual progress, 
        address doubts immediately, and conduct regular oral tests.</p>
    </div>
</div>
```

```css
.faq-item {
    border: 1px solid var(--border-default);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.3s ease;
    margin-bottom: 0.75rem;
    background: var(--bg-card);
}
.faq-item:hover, .faq-item.open {
    border-color: var(--border-gold);
}
.faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--text-body);
}
.faq-icon {
    width: 18px;
    height: 18px;
    stroke: var(--brand-royal);
    flex-shrink: 0;
    transition: transform 0.3s var(--ease-premium);
}
.faq-item.open .faq-icon { transform: rotate(180deg); }
.faq-a {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s var(--ease-premium), padding 0.3s ease;
}
.faq-item.open .faq-a {
    max-height: 300px;
    padding: 0 1.5rem 1.2rem;
}
.faq-a p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.7;
    border-top: 1px solid var(--border-default);
    padding-top: 1rem;
}
```

---

### 7.6 Founder Spotlight (Updated — On Navy Background)

> Move the founder bio to a navy-background section for more impact. Position it like a magazine feature spread.

```css
.founder-section {
    background: var(--bg-navy-section);
    padding: 5rem 1.5rem;
    color: var(--text-on-navy);
}
.founder-eyebrow {
    color: var(--gold-light);
}
.founder-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(234, 239, 250, 0.10);
    border: 1px solid rgba(234, 239, 250, 0.18);
    border-radius: 100px;
    padding: 0.35rem 0.85rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-on-navy-muted);
    letter-spacing: 0.04em;
}
.founder-quote-mark {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 6rem;
    font-weight: 700;
    line-height: 0.8;
    color: rgba(184, 147, 26, 0.25);
}
```

---

## 8. WhatsApp Floating Button (Updated)

```css
.whatsapp-fab {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 999;
    width: 52px;
    height: 52px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px rgba(37, 211, 102, 0.40);
    text-decoration: none;
    transition: transform 0.3s var(--ease-bounce), box-shadow 0.3s ease;
}
.whatsapp-fab:hover {
    transform: scale(1.10);
    box-shadow: 0 6px 24px rgba(37, 211, 102, 0.50);
}
/* Ping animation stays the same */
```

---

## 9. Scroll Reveal (No changes needed)

Keep the existing `.reveal-on-scroll` / `.is-visible` + IntersectionObserver system unchanged — it works well. The new sections should get the `.reveal-on-scroll` class applied.

---

## 10. Responsive Breakpoints

Align with Tailwind's default breakpoints. All layouts should follow this cascade:

| Breakpoint | Width      | Layout Behavior                                |
|------------|------------|------------------------------------------------|
| `xs`       | 375px      | Single column, full-width cards                |
| `sm`       | 640px      | 2-col grids, side-by-side buttons              |
| `md`       | 768px      | 2-col hero (text + image), 3-col stats         |
| `lg`       | 1024px     | 4-col grids, full nav visible, side-by-side FAQ|
| `xl`       | 1280px     | Max content width enforced at 1200px           |

### Critical responsive rules:

```css
/* Hero text is never cramped on mobile */
.hero-heading {
    font-size: clamp(1.85rem, 5.5vw, 3.5rem);
}
/* Cards never go below 280px */
.course-card {
    min-width: 280px;
}
/* Section padding scales down gracefully */
.section-base {
    padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 1.5rem);
}
/* Batch table scrolls horizontally on mobile */
.schedule-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
/* Ticker stays readable on mobile */
.ticker-track {
    font-size: clamp(0.65rem, 2vw, 0.75rem);
    gap: 40px;
}
/* Nav on mobile: stack logo + hamburger */
@media (max-width: 768px) {
    .glass-nav { border-radius: 0; }
}
```

---

## 11. Animation Guidelines

Use motion sparingly — only where it communicates something:

| Element              | Animation                         | Trigger          |
|----------------------|-----------------------------------|------------------|
| Section content      | `reveal-on-scroll` (fade + lift)  | IntersectionObserver |
| Why-cards bottom bar | `scaleX(0 → 1)` on hover          | CSS :hover       |
| FAQ icon             | `rotate(0 → 180deg)` on open      | JS class toggle  |
| Stat numbers         | Count-up animation (0 → value)    | IntersectionObserver |
| Hero image           | `animate-float` (existing)        | CSS keyframes    |
| Buttons              | `scale(0.97)` on :active          | CSS :active      |
| Nav on scroll        | Add `.scrolled` class at 60px     | JS scroll event  |
| WhatsApp FAB         | Ping pulse (existing)             | CSS keyframes    |

### Count-up for stats (JS snippet):

```javascript
function animateCount(el, target, duration = 1500) {
    const start = performance.now();
    const update = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
    };
    requestAnimationFrame(update);
}
/* Trigger inside IntersectionObserver callback for each stat element */
```

---

## 12. Section-by-Section Color Reference

| Section               | Background           | Headings           | Body Text          | Accent           |
|-----------------------|----------------------|--------------------|--------------------|------------------|
| Ticker                | `--brand-navy`       | —                  | `--text-on-navy`   | `--gold-light`   |
| Hero                  | `--bg-page`          | `--text-heading`   | `--text-body`      | `--brand-royal`  |
| Trust Strip           | `--bg-section-alt`   | —                  | `--text-muted`     | `--border-strong`|
| Stats                 | `--bg-page`          | `--brand-navy`     | `--text-muted`     | `--brand-royal`  |
| Why EnglishJibi       | `--bg-section-alt`   | `--text-heading`   | `--text-muted`     | `--brand-cobalt` |
| Featured Courses      | `--bg-page`          | `--text-heading`   | `--text-body`      | per-course color |
| Founder (navy)        | `--brand-navy`       | `--text-on-navy`   | `--text-on-navy-muted`| `--gold-rich` |
| Testimonials          | `--bg-page`          | `--text-heading`   | `--text-muted`     | `--gold-rich`    |
| YouTube Hub           | `--bg-section-alt`   | `--text-heading`   | `--text-muted`     | `--brand-royal`  |
| Batch Schedule        | `--bg-page`          | `--text-heading`   | `--text-muted`     | `--brand-navy`   |
| Gallery               | `--bg-section-alt`   | `--text-heading`   | `--text-muted`     | `--brand-royal`  |
| Community             | `--bg-page`          | `--text-heading`   | `--text-muted`     | platform colors  |
| FAQ                   | `--bg-section-alt`   | `--text-body`      | `--text-muted`     | `--gold-rich`    |
| CTA Band              | `--brand-navy`       | `--text-on-navy`   | `--text-on-navy-muted`| `--gold-rich` |
| Footer                | `--brand-navy`       | `--text-on-navy`   | `--text-on-navy-muted`| `--gold-light`|

---

## 13. What to Remove / Clean Up

| Old Element                    | Action                                             |
|--------------------------------|----------------------------------------------------|
| `.dark {}` CSS block           | Delete entirely — single theme now                 |
| `darkMode: 'class'` in Tailwind| Change to `darkMode: false`                        |
| `toggleTheme()` JS function    | Remove + remove theme toggle button from nav/mobile|
| `localStorage` theme save      | Remove                                             |
| Moon/sun toggle icons          | Remove from nav                                    |
| Old `--bg-base: #FAF6EC` vars  | Replace with new `--bg-page: #FAFAF7`              |
| Old `--bg-card: #FFFFFF` vars  | Kept — same value, renamed                         |
| Amber scale from old config    | Replaced with logo-matched gold amber above        |
| `glass-card` class             | Rename to `ink-card` across all HTML               |

---

## 14. Quick Migration Checklist

- [ ] Replace `:root` CSS block with Section 2 palette
- [ ] Delete `.dark {}` block
- [ ] Add Playfair Display Google Fonts link
- [ ] Update `tailwind.config` (Section 3)
- [ ] Add typography classes (Section 4)
- [ ] Replace `.glass-card` → `.ink-card` in HTML
- [ ] Update button classes to `.btn-primary / .btn-secondary / .btn-gold`
- [ ] Add `.section-warm` to alternating sections
- [ ] Add School Trust Strip after Hero
- [ ] Add Why EnglishJibi section (4 pillars)
- [ ] Add Testimonials grid (3–4 cards)
- [ ] Add Batch Schedule table
- [ ] Add FAQ accordion
- [ ] Move Founder block to navy section background
- [ ] Add `.eyebrow::before` gold rule to all eyebrows
- [ ] Add count-up animation to stat numbers
- [ ] Remove theme toggle button from nav
- [ ] Test all pages at 375px, 768px, 1024px, 1280px

---

*Design system authored for EnglishJibi Classes website — v2.0 · Royal Ink theme.*
*Logo color extraction: Navy `#0D1B52`, Royal `#1B3A9A`, Cobalt `#2559C8`, Silver `#B8C8E4`.*
*Single-mode professional theme — no dark mode. Typography: Playfair Display (display) + Montserrat (body).*