# ENGLISHJIBI CLASSES — Full Website Content Extraction

Extracted in complete detail from the source HTML file (`index.html`). This document captures every piece of text, metadata, data structure, link, and functional element present in the page, organized by section.

---

## 1. Document / SEO Metadata

| Field | Value |
|---|---|
| Language | `en` |
| HTML classes | `scroll-smooth dark` |
| Charset | `UTF-8` |
| Viewport | `width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=no` |
| **Title** | `ENGLISHJIBI CLASSES \| Best English & Grammar Coaching in Bhubaneswar` |
| **Meta Description** | `Expert English grammar and communication coaching for Class 2 to 10 in Bhubaneswar. Join ENGLISHJIBI Classes for NCERT, CBSE, and foundation courses by Chiranjibi Sir.` |
| **Meta Keywords** | `English Coaching Bhubaneswar, Grammar Classes, Spoken English, CBSE English Coaching, Chiranjibi Sir, Englishjibi Classes, Sailashree Vihar Coaching` |
| **Author** | `Subham Kumar Mallick` |
| **Robots** | `index, follow` |
| **Canonical URL** | `https://englishjibiclasses.com/` |

### Open Graph / Facebook
| Property | Value |
|---|---|
| `og:type` | `website` |
| `og:url` | `https://englishjibiclasses.com/` |
| `og:title` | `ENGLISHJIBI CLASSES \| Expert English Coaching` |
| `og:description` | `Build strong grammar and communication skills with Chiranjibi Sir. Specialized coaching for Classes 2-10 in Bhubaneswar.` |
| `og:image` | `https://englishjibiclasses.com/img/icon.png` |

### Twitter Card
| Property | Value |
|---|---|
| `twitter:card` | `summary_large_image` |
| `twitter:url` | `https://englishjibiclasses.com/` |
| `twitter:title` | `ENGLISHJIBI CLASSES \| English & Grammar Coaching` |
| `twitter:description` | `Expert English coaching for school students in Bhubaneswar. Join today for academic excellence.` |
| `twitter:image` | `https://englishjibiclasses.com/img/icon.png` |

### Favicons
- `img/icon.png` (32x32, 16x16, apple-touch-icon 180x180, shortcut icon)

### Fonts
- Preconnect: `https://fonts.googleapis.com`, `https://fonts.gstatic.com`
- Google Font loaded: `Montserrat` — weights `300;400;500;600;700`

### Scripts / Libraries
- Tailwind CSS via CDN: `https://cdn.tailwindcss.com`
- Lucide Icons (deferred): `https://unpkg.com/lucide@latest`
- Local script: `backend/api.js` (referenced as "Backend API Connector")

---

## 2. Structured Data (JSON-LD Schema.org)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://englishjibiclasses.com/#organization",
      "name": "ENGLISHJIBI CLASSES",
      "url": "https://englishjibiclasses.com",
      "logo": "https://englishjibiclasses.com/img/icon.png",
      "founder": {
        "@type": "Person",
        "name": "Chiranjibi Sir",
        "jobTitle": "Lead Educator & Founder"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Duplex 37, Sailashree Vihar",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "751021",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8328922917",
        "contactType": "admissions",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Odia"]
      },
      "sameAs": [
        "https://www.facebook.com/Englishwithchiranjibisir",
        "https://www.instagram.com/chiranjibi4848",
        "https://www.youtube.com/channel/UCpPk-QX_mwHGKEyv-WAbHrQ"
      ]
    },
    {
      "@type": "LocalBusiness",
      "parentOrganization": { "@id": "https://englishjibiclasses.com/#organization" },
      "name": "ENGLISHJIBI CLASSES",
      "image": "https://englishjibiclasses.com/img/icon.png",
      "telephone": "+91-8328922917",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Duplex 37, Sailashree Vihar",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "751021",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 20.333825,
        "longitude": 85.811217
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "20:00"
      }
    },
    {
      "@type": "Person",
      "@id": "https://englishjibiclasses.com/#designer",
      "name": "Subham Kumar Mallick",
      "jobTitle": "Website Designer & Digital Manager",
      "url": "https://englishjibiclasses.com",
      "worksFor": { "@id": "https://englishjibiclasses.com/#organization" }
    }
  ]
}
```

---

## 3. Design System (Tailwind Config + CSS Tokens)

### Tailwind Theme Extensions
- **Font family (sans):** `Montserrat, Helvetica, Arial, sans-serif`
- **Dark mode:** class-based (`darkMode: 'class'`)
- **Custom color tokens (mapped to CSS variables):** `canvas`, `surface`, `ink` (DEFAULT/deep/button), `charcoal`, `slate`, `steel`, `stone`, `hairline` (DEFAULT/soft), `primary` (DEFAULT/deep), `success`, `warning`, `critical`
- **Custom border radii:** `meta-xs (2px)`, `meta-sm (4px)`, `meta-md (6px)`, `meta-lg (8px)`, `meta-xl (16px)`, `meta-xxl (24px)`, `meta-xxxl (32px)`, `meta-feature (40px)`, `pill (100px)`
- **Custom animations:** `fade-in` (fadeIn 0.5s ease forwards), `pulse-slow` (pulse 4s cubic-bezier infinite)
- **Custom screen breakpoint:** `xs: 375px`

### CSS Custom Properties — Light Mode (`:root`)
| Variable | Value |
|---|---|
| `--canvas` | `#ffffff` |
| `--surface` | `#f1f4f7` |
| `--ink-deep` | `#0a1317` |
| `--ink` | `#1c1e21` |
| `--ink-button` | `#000000` |
| `--charcoal` | `#444950` |
| `--slate-meta` | `#4b4c4f` |
| `--steel` | `#5d6c7b` |
| `--stone` | `#8595a4` |
| `--hairline` | `#ced0d4` |
| `--hairline-soft` | `#dee3e9` |
| `--primary` | `#0064e0` |
| `--primary-deep` | `#0457cb` |
| `--success` | `#31a24c` |
| `--warning` | `#f7b928` |
| `--critical` | `#e41e3f` |
| `--sat/--sab/--sal/--sar` | `env(safe-area-inset-*)` |

### CSS Custom Properties — Dark Mode (`.dark`)
| Variable | Value |
|---|---|
| `--canvas` | `#111317` |
| `--surface` | `#1a1d22` |
| `--ink-deep` | `#f0ede8` |
| `--ink` | `#e8e6e3` |
| `--ink-button` | `#e8e6e3` |
| `--charcoal` | `#b0aaa4` |
| `--slate-meta` | `#9a948e` |
| `--steel` | `#8a8580` |
| `--stone` | `#6e6a65` |
| `--hairline` | `#2a2d33` |
| `--hairline-soft` | `#222528` |
| `--primary` | `#4d9ff5` |
| `--primary-deep` | `#73b4f7` |
| `--success` | `#4cbb6a` |
| `--warning` | `#f5c65a` |
| `--critical` | `#f05a6e` |

### Notable Component Style Classes Defined
`.eyebrow`, icon stability rules (`i[data-lucide]`), `.reveal-on-scroll` / `.is-visible` (scroll reveal animation), `.btn-primary`, `.btn-secondary`, `.btn-buy`, `.btn-press`, `.card-flat`, `.card-icon`, `.card-promo`, `.site-nav`, `.nav-link` (with animated underline), `.page-transition` (fadeInPage keyframes), `#mobile-menu` (scaleY open/close transition), `.modal-content` (scale/opacity transition), form input styling, `.pill-tab`, feedback classes `.form-success-inline` / `.form-error-msg`, reduced-motion overrides, plus many `!important` overrides specifically for dynamically-injected JS components: `.course-filter-btn`, `#courses-list-container` (glass-card, badges, buttons), `#home-courses-grid`, `.gallery-filter-btn`, form input/select focus states, `#syllabus-modal` overrides, `#success-modal` overrides, and a global `:focus-visible` outline style.

---

## 4. Navigation

### Logo / Brand
- Image: `img/icon.png` ("Englishjibi Logo")
- Text: **ENGLISHJIBI** / **CLASSES** (uppercase, tracked)
- Links to `#home`

### Desktop Nav Links
1. Home → `#home`
2. About → `#about`
3. Gallery → `#gallery`
4. Courses → `#courses`
5. Practice Set → `practice.html`
6. Contact → `#contact`

### Desktop CTA Area
- Theme toggle button (moon/sun icons, `toggleTheme()`)
- Phone link: `tel:+918328922917` — displayed as **+91 83289 22917**
- "Enroll Now" button → `#admission`

### Mobile Menu
- Hamburger button (`menu` icon) toggles `#mobile-menu`
- Same links as desktop: Home, About, Gallery, Courses, Practice Set, Contact
- Theme toggle
- "Call Now" → `tel:+918328922917`
- "Enroll Now" button → `#admission`

---

## 5. HOME PAGE (`#home-page`)

### 5.1 Hero Section
- **Eyebrow:** `English & Grammar Coaching Center`
- **H1:** `Shape Your Future at ENGLISHJIBI Classes` (with "ENGLISHJIBI Classes" styled in primary color)
- **Paragraph:** `Build strong grammar, confident communication, and clear writing skills with expert guidance in a supportive learning environment. Specialized coaching for Classes 2 to 10.`
- **Buttons:**
  - `Enroll Now →` → `#admission`
  - `📖 View Courses` → `#courses`
- **Hero Image:** `img/childrens.png`, alt text `"Students Learning English"`

### 5.2 Stats Section (JS-injected into `#stats-container`)
| Value | Label | Icon |
|---|---|---|
| Class 2-10 | Offline Classes | `book-open` |
| Expert | Faculty | `award` |
| Personal | Attention | `users` |
| Success | Oriented | `trending-up` |

### 5.3 YouTube Integration Section ("Learning Videos from ENGLISHJIBI")
- Eyebrow: `📺 Rango Classes`
- Heading: `Learning Videos from ENGLISHJIBI`
- Button: `View Channel →` → `https://www.youtube.com/channel/UCpPk-QX_mwHGKEyv-WAbHrQ`
- Grid `#youtube-videos-grid` (JS-injected, see §9 `youtubeVideos` data)

### 5.4 Courses Preview Section
- Eyebrow: `Our Programs`
- Heading: `Courses We Offer`
- Subtext: `Comprehensive English & Grammar programs for Classes 2 to 10.`
- Button: `View All Classes →` → `#courses`
- Grid `#home-courses-grid` (JS-injected — featured course IDs 2, 4, 5, 7; see §9 `coursesData`)

### 5.5 YouTube Learning Programs Section
- Eyebrow: `Free Video Lessons`
- Heading: `YouTube Learning Programs`
- Subtext: `Learn English Grammar & Communication from our structured video courses. Expert-guided video lessons designed for Classes 2 to 10.`

**Course Card 1:**
- Link: `https://youtu.be/8MB9JF3GhOE`
- Thumbnail: `yt/img-1.png`
- Badge: `Course · 4 lessons`
- Title: `Conditional Sentences: Complete Masterclass`
- Instructor: `Chiranjibi Sir`
- CTA: `View Full Course →`

**Course Card 2:**
- Link: `https://youtu.be/mI4gZ2qY7wE`
- Thumbnail: `yt/img-2.png`
- Badge: `Course · 3 lessons`
- Title: `Complete Verb Course: Basic to Advanced`
- Instructor: `Chiranjibi Sir`
- CTA: `View Full Course →`

**Bottom Buttons:**
- `📺 Visit YouTube Channel` → `https://www.youtube.com/channel/UCpPk-QX_mwHGKEyv-WAbHrQ`
- `Enroll for Offline Classes →` → `#admission`

### 5.6 Community Section
- Eyebrow: `Community`
- Heading: `Join Our Learning Community`
- Subtext: `Stay connected with ENGLISHJIBI Classes for free learning resources, updates, and practice materials.`

| Platform | Link | Description | CTA |
|---|---|---|---|
| Telegram Group | `https://t.me/englishwithchiranjibisir` | Get free PDFs, grammar notes, question papers & weekly tests | Join Now → |
| Facebook Page | `https://www.facebook.com/Englishwithchiranjibisir` | Follow us for daily updates, live sessions, and announcements. | Follow Page → |
| Instagram | `https://www.instagram.com/chiranjibi4848` | Check out our latest reels, student success stories, and tips. | Follow Us → |

### 5.7 Closing CTA Section
- Heading: `Ready to Master English?`
- Subtext: `Take the first step towards academic excellence. Enroll now at ENGLISHJIBI Classes.`
- Buttons: `Enroll Now →` (`#admission`), `Get in Touch` (`#contact`)

---

## 6. ABOUT PAGE (`#about-page`)

### 6.1 Header
- Eyebrow: `About Us`
- H1: `ENGLISHJIBI CLASSES`
- Subtext: `We are a dedicated English & Grammar Coaching Center providing quality offline education for students from Class 2 to Class 10.`

### 6.2 Mission Section
- Eyebrow: `Our Mission`
- Heading: `Building Strong Foundations`
- Paragraph: `Our mission is to empower young minds with the power of language. We focus on grammar precision, vocabulary building, and confident communication to ensure academic success in school and beyond.`
- Quote block: *"Language is the dress of thought. We help students dress their thoughts with clarity and confidence."* — **ENGLISHJIBI Faculty**
- Image: `img/publishedbook.png`

### 6.3 Meet the Founder
- Image: `img/founder-chiranjibi-sir.jpg`
- Badge: `Founder & Lead Educator`
- Name: **CHIRANJIBI SIR**
- Tags: `⏱ 11+ Years Experience`, `📖 English Grammar Specialist`
- Bio Paragraph 1: `CHIRANJIBI SIR is a seasoned English educator with over 11 years of teaching experience. He has served as a Former English Teacher at Narayana E-Techno School, Patia, Bhubaneswar, where he built a strong reputation for academic discipline and student success.`
- Bio Paragraph 2: `His academic qualifications include a B.Sc. from Andhra University, Visakhapatnam (A.P.), an M.Sc. from Kalinga University, Raipur (C.G.), and a B.Ed. (English Honours) from Nagarjuna University, Guntur (A.P.).`

### 6.4 Our Team
- Eyebrow: `Core Team`
- Heading: `Our Team`

| Name | Image | Role | Description |
|---|---|---|---|
| Subham K. Mallick | `img/team-subham.jpg` | Manager & Digital Ops | Leads end-to-end digital operations, including website design, system management, branding, and platform development. |
| Anu Ma'am | `img/team-mam.png` | Additional Teacher | Oversees academic planning, supports students and teachers, and ensures smooth day-to-day operations across programs. |
| Ratan Sarkar | `img/team-Ratan-Sir.png` | Additional Teacher | Inspires students through practical, concept-driven mathematics instruction, building strong fundamentals, accuracy, speed, and confidence to the TOP LEVEL. |

---

## 7. GALLERY PAGE (`#gallery-page`)

### 7.1 Header
- Eyebrow: `Our Moments`
- H1: `Classroom Gallery`
- Subtext: `Moments from teaching, learning, and student interaction at ENGLISHJIBI Classes.`

### 7.2 Filter Buttons
`All` (default active) · `Classrooms` (`classroom`) · `Activities` (`activities`) · `Results` (`results`) · `Events` (`events`)

### 7.3 Gallery Grid Items (12 total, `id="gallery-grid"`)

**Category: classroom**
| Image | Alt | Overlay Title | Overlay Subtitle |
|---|---|---|---|
| `gallery/classroom/classroom-1.jpg` | Smart Classroom | Smart Classroom | Digitally equipped learning |
| `gallery/classroom/classroom-2.jpg` | Study Session | Study Session | Focused learning environment |
| `gallery/classroom/classroom-3.jpg` | Group Discussion | Group Discussion | Collaborative practice |

**Category: activities**
| Image | Alt | Overlay Title | Overlay Subtitle |
|---|---|---|---|
| `gallery/activities/activities-1.jpg` | Student Presentation | Student Presentation | Building confidence |
| `gallery/activities/activities-2.jpg` | Quiz Competition | Quiz Competition | Engaging minds |
| `gallery/activities/activities-3.jpg` | Creative Writing | Creative Writing | Expressing thoughts |

**Category: results**
| Image | Alt | Overlay Title | Overlay Subtitle |
|---|---|---|---|
| `gallery/results/results-1.jpg` | Top Performers | Top Performers | Academic excellence |
| `gallery/results/results-2.jpg` | Award Ceremony | Award Ceremony | Celebrating success |
| `gallery/results/results-3.jpg` | Merit Certificates | Merit Certificates | Hard work rewarded |

**Category: events**
| Image | Alt | Overlay Title | Overlay Subtitle |
|---|---|---|---|
| `gallery/events/events-1.jpg` | Annual Function | Annual Function | Grand celebration |
| `gallery/events/events-2.jpg` | Cultural Fest | Cultural Fest | Talent showcase |
| `gallery/events/events-3.jpg` | Workshops | Workshops | Interactive sessions |

Each item opens a lightbox on click via `openLightbox('<image path>')`.

---

## 8. COURSES PAGE (`#courses-page`)

### 8.1 Header
- Eyebrow: `Our Programs`
- H1: `Classes 2 to 10`
- Subtext: `Structured English courses designed to build grammar mastery and communication skills.`

### 8.2 Filter Buttons (`filterCourses()`)
- `All Classes` (`all`)
- `Primary (2-5)` (`primary`)
- `Middle (6-8)` (`middle`)
- `High School (9-10)` (`high`)

### 8.3 Course List
Rendered dynamically into `#courses-list-container` from `coursesData` (full data table in §9). Each card includes: icon, "Popular" badge (if applicable), group tag, title, description, Timing info, Batch size info, sub-topic tags, and three action buttons: **Enroll Now** (`#admission`), **Enquire** (`#contact`), **Syllabus** (opens syllabus modal via `openSyllabusModal(id)`).

### 8.4 Featured Playlists Section
Heading: `▶ Featured Playlists`

| Thumbnail | Title | Description | Link |
|---|---|---|---|
| `yt/img-1.png` | Singular vs Plural Verb – Quick Rules | Essential grammar rules for beginners. | `https://youtu.be/hYdlA_lmw3g` |
| `yt/img-2.png` | Subject–Verb Agreement – Practice Series | Improve your pronunciation and fluency. | `https://youtu.be/F7nxRx2H_sA` |
| `yt/img-3.png` | Main Verb vs Helping Verb – Explained | Strategies to score high in English exams. | `https://youtu.be/gl2-HffHdlU` |

All labeled `Watch on YouTube →`.

---

## 9. Course Data (`coursesData` — full JS object array)

| ID | Category | Name | Tagline (Group) | Time | Batch Size | Icon | Color | Popular |
|---|---|---|---|---|---|---|---|---|
| 1 | primary | Junior Foundation (Classes 2–3) | Group F | Regular Batches | 15-20 Students | `sprout` | cyan | No |
| 8 | primary | Primary Foundation (Classes 4–5) | Group C | Regular Batches | 15-20 Students | `sun` | cyan | No |
| 2 | middle | Class 6–7 NCERT English Batch | Group A | 3 Slots x 30 Mins | 15-20 Students | `layers` | emerald | **Yes** |
| 3 | middle | Class 7–8 Grammar & Communication | Group E | Regular Batches | 15-20 Students | `message-circle` | blue | No |
| 4 | middle | Class 8 NCERT English Batch | Group D | Regular Batches | 15-20 Students | `book-open` | amber | No |
| 5 | high | Class 9 NCERT & Communicative English Batch | Group G | Regular Batches | 15-20 Students | `pen-tool` | orange | **Yes** |
| 6 | high | Class 9 Communicative English | Group G | 8:30 AM – 10:00 AM | 15-20 Students | `mic` | purple | No |
| 7 | high | Class 10 CBSE Board Batch | Group B | Evening Batches | 15-20 Students | `award` | red | **Yes** |

### Descriptions & Sub-topics (per course)

**1 — Junior Foundation (Classes 2–3)**
- Desc: `Building a strong base in grammar, phonics, reading, and sentence formation for young learners.`
- Subs: Phonics, Basic Grammar, Reading, Vocabulary

**8 — Primary Foundation (Classes 4–5)**
- Desc: `Enhancing grammar, reading skills, and communication confidence for growing learners.`
- Subs: Grammar, Reading Skills, Spoken English, Vocabulary

**2 — Class 6–7 NCERT English Batch**
- Desc: `Strong foundation in grammar, vocabulary, and spoken English for middle school students.`
- Subs: Basic Grammar, Vocabulary, Oral Test, GD, Passage/Poem Test

**3 — Class 7–8 Grammar & Communication**
- Desc: `Focused on improving grammar accuracy, communication skills, and confidence.`
- Subs: Intermediate Grammar, GD, Oral Test, Writing Practice, Vocab

**4 — Class 8 NCERT English Batch**
- Desc: `Exam-oriented English preparation with emphasis on accuracy and structure.`
- Subs: Advanced Grammar, Writing Skills, Passage Practice, Oral + GD

**5 — Class 9 NCERT & Communicative English Batch**
- Desc: `Board-pattern English training with structured writing and NCERT coverage.`
- Subs: Grammar (Board), NCERT Literature, Writing Skills, Weekly Tests

**6 — Class 9 Communicative English**
- Desc: `Communicative English with strong focus on literature, grammar, and creative expression.`
- Subs: Comm. Literature, NCERT Literature, Grammar, Creative Writing, GD

**7 — Class 10 CBSE Board Batch**
- Desc: `Complete board-focused English course with grammar, literature, and writing mastery.`
- Subs: NCERT Literature, Grammar, Writing, Passage & Poem, GD

### YouTube Videos Data (`youtubeVideos`)
| Title | Image | Link |
|---|---|---|
| Singular vs Plural Verb – Quick Rules | `yt/img-1.png` | `https://www.youtube.com/channel/UCpPk-QX_mwHGKEyv-WAbHrQ` |
| Subject–Verb Agreement – Practice Series | `yt/img-2.png` | `https://www.youtube.com/channel/UCpPk-QX_mwHGKEyv-WAbHrQ` |
| Main Verb vs Helping Verb – Explained | `yt/img-3.png` | `https://youtu.be/gl2-HffHdlU` |

### Stats Data (`statsData`)
| Value | Label | Icon |
|---|---|---|
| Class 2-10 | Offline Classes | book-open |
| Expert | Faculty | award |
| Personal | Attention | users |
| Success | Oriented | trending-up |

### Color Class Map (`getColorClasses`)
| Key | BG | Text | Accent | Border |
|---|---|---|---|---|
| cyan | bg-cyan-600/10 | text-cyan-700 / dark:text-cyan-400 | bg-cyan-600 | border-cyan-600/20 |
| emerald | bg-emerald-600/10 | text-emerald-700 / dark:text-emerald-400 | bg-emerald-600 | border-emerald-600/20 |
| blue | bg-indigo-600/10 | text-indigo-700 / dark:text-indigo-400 | bg-indigo-600 | border-indigo-600/20 |
| amber | bg-amber-600/10 | text-amber-700 / dark:text-amber-400 | bg-amber-600 | border-amber-600/20 |
| orange | bg-orange-600/10 | text-orange-700 / dark:text-orange-400 | bg-orange-600 | border-orange-600/20 |
| purple | bg-purple-600/10 | text-purple-700 / dark:text-purple-400 | bg-purple-600 | border-purple-600/20 |
| red | bg-red-600/10 | text-red-700 / dark:text-red-400 | bg-red-600 | border-red-600/20 |

---

## 10. Syllabus Data (`syllabusData`) — PDF availability by Course → Class → School

| Course ID | Class | ODM School PDF | DAV School PDF |
|---|---|---|---|
| 1 (Junior Foundation 2-3) | 2 | `gallery/syllabus/ODM/Class_2.pdf` | *(none — "uploaded soon")* |
| 1 (Junior Foundation 2-3) | 3 | *(none)* | `gallery/syllabus/DAV/Class_3.pdf` |
| 8 (Primary Foundation 4-5) | 4 | `gallery/syllabus/ODM/Class_4.pdf` | `gallery/syllabus/DAV/Class_4.pdf` |
| 8 (Primary Foundation 4-5) | 5 | *(none)* | `gallery/syllabus/DAV/Class_5.pdf` |
| 2 (Class 6-7 NCERT) | 6 | `gallery/syllabus/ODM/Class_6.pdf` | `gallery/syllabus/DAV/Class_6.pdf` |
| 2 (Class 6-7 NCERT) | 7 | `gallery/syllabus/ODM/Class_7.pdf` | `gallery/syllabus/DAV/Class_7.pdf` |
| 3 (Class 7-8 Grammar & Comm.) | 7 | `gallery/syllabus/ODM/Class_7.pdf` | `gallery/syllabus/DAV/Class_7.pdf` |
| 3 (Class 7-8 Grammar & Comm.) | 8 | `gallery/syllabus/ODM/Class_8.pdf` | `gallery/syllabus/DAV/Class_8.pdf` |
| 4 (Class 8 NCERT) | 8 | `gallery/syllabus/ODM/Class_8.pdf` | `gallery/syllabus/DAV/Class_8.pdf` |
| 5 (Class 9 NCERT & Comm.) | 9 | *(none)* | `gallery/syllabus/DAV/Class_9.pdf` |
| 6 (Class 9 Communicative) | 9 | *(none)* | `gallery/syllabus/DAV/Class_9.pdf` |
| 7 (Class 10 CBSE Board) | 10 | `gallery/syllabus/ODM/Class_10.pdf` | `gallery/syllabus/DAV/Class_10.pdf` |

If a PDF is `null`, the modal displays: *"Syllabus will be uploaded soon — We are currently preparing the Class [N] [School] syllabus."*

---

## 11. ADMISSION PAGE (`#admission-page`)

### Header
- Eyebrow: `Admission Open`
- H1: `Begin Your Journey`
- Subtext: `Fill out the enquiry form below for classes 2 to 10.`

### Admission Enquiry Form (`#admission-form`)
Heading: `📄 Admission Enquiry`

Includes a hidden **honeypot** anti-spam field (`name="honeypot"`).

**Section: Student Details**
- Student Name * (`studentName`, required, text) — placeholder "Full Name"
- Parent Name * (`parentName`, required, text) — placeholder "Parent Name"

**Section: Contact Details**
- Phone Number * (`phoneNumber`, required, tel) — placeholder "+91..."
- Email (`email`, optional, email) — placeholder "email@example.com"

**Section: Academic Details**
- Current Class * (`currentClass`, required, select): Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10
- School Name * (`school`, required, text) — placeholder "School Name"

- Submit button: **Submit Enquiry →** (id `admission-submit-btn`, shows spinner + "Submitting..." while loading)
- Feedback container: `#admission-form-feedback`

### Sidebar — "Why Apply Now?"
- ✔ Expert Guidance
- ✔ Small Batch Size

---

## 12. CONTACT PAGE (`#contact-page`)

### Header
- Eyebrow: `Get In Touch`
- H1: `Contact Us`
- Subtext: `Reach out to ENGLISHJIBI Classes for any queries.`

### Contact Info Cards
| Type | Details |
|---|---|
| Phone | +91 83289 22917 / +91 77358 12335 |
| WhatsApp | +91 83289 22917 |
| Email | rangoclasses@gmail.com |
| Address | Duplex 37, Sailashree Vihar, Bhubaneswar, 751021 |

### Send Message Form (`#contact-form`)
Heading: `✉ Send Message`

Includes hidden **honeypot** anti-spam field.

- Name * (`name`, required, text)
- Phone * (`phone`, required, tel)
- Message * (`message`, required, textarea, 4 rows)
- Submit button: **Send Message** (id `contact-submit-btn`)
- Feedback container: `#contact-form-feedback`

### Map Section
- Embedded Google Map (iframe) centered on coordinates lat `20.333824995980752`, lng `85.81121701176977`
- Overlay label: `ENGLISHJIBI Classes` — `Duplex 37, Sailashree Vihar, Bhubaneswar`

---

## 13. Footer

### Brand Block
- ENGLISHJIBI / CLASSES
- Text: `English & Grammar Coaching Center providing expert guidance for Class 2 to Class 10.`

### Quick Links
Home · About · Gallery · Courses · Admission · Contact

### Contact Us
- Address: Duplex 37, Sailashree Vihar, Bhubaneswar, Odisha – 751021
- Phone: +91 83289 22917
- Email: rangoclasses@gmail.com

### Community Links
- YouTube Channel → `https://www.youtube.com/channel/UCpPk-QX_mwHGKEyv-WAbHrQ`
- Telegram Group → `https://t.me/englishwithchiranjibisir`
- Facebook Page → `https://www.facebook.com/Englishwithchiranjibisir`
- Instagram → `https://www.instagram.com/chiranjibi4848`

### Copyright Line
`© 2024–2027 ENGLISHJIBI CLASSES. | Website Designed & Developed by Subham Kumar Mallick` (link: `https://sk-mallick.github.io/SK-Mallick-Portfolio`)

---

## 14. Floating Elements & Modals

### WhatsApp Floating Button
- Link: `https://wa.me/918328922917`
- Tooltip (desktop hover): `Chat with us!`
- Animated ping effect + message-circle icon

### Success Modal (`#success-modal`)
- Icon: `check-circle`
- Heading: `Message Sent!`
- Text: `Thank you for contacting ENGLISHJIBI Classes! We'll get back to you shortly.`
- Close button

### Gallery Lightbox Modal (`#gallery-lightbox`)
- Full-screen image viewer with close (`x`) button
- Triggered by `openLightbox(src)`, closed by `closeLightbox()`

### Syllabus Downloader Modal (`#syllabus-modal`)
- Title: `Syllabus Download` (dynamically set to `Syllabus - [Course Name]`)
- Subtitle: `Select class and school to download or view the syllabus.`
- Dynamic Class buttons (`#syllabus-class-buttons`)
- Dynamic School buttons (`#syllabus-school-buttons`) — ODM School / DAV School
- Dynamic action area (`#syllabus-action-container`): either a **Download** link or an **"uploaded soon"** notice
- Closed via `closeSyllabusModal()`, `x` button, outside click, or Escape key

---

## 15. JavaScript Functionality Summary

| Function | Purpose |
|---|---|
| `getColorClasses(color)` | Returns Tailwind class set for a given course color theme |
| `filterGallery(category)` | Filters gallery grid items by category and updates active filter button styling |
| `filterCourses(category, renderIcons)` | Filters and re-renders the courses list container; updates active filter button |
| `renderHomeCourses()` | Renders featured course cards (IDs 2, 4, 5, 7) into the homepage grid |
| `renderYoutubePlaceholders()` | Renders YouTube video cards into the homepage YouTube grid |
| `renderStaticSections()` | Renders the stats section |
| `navigateTo(pageId)` | SPA-style page navigation via hash routing, toggles `.page-view` visibility |
| `showSuccessModal()` | Displays the success modal with transition |
| `setFormLoading(btn, isLoading)` | Toggles a submit button's loading state (spinner/text/icon) |
| `showFormFeedback(feedbackId, type, message)` | Displays success/error feedback under a form (auto-clears after 6s) |
| `initFormHandlers()` | Wires up async submit handlers for Admission and Contact forms (with honeypot spam check), calling `EnglishjibiAPI.submitAdmission()` / `EnglishjibiAPI.submitContact()` from `backend/api.js` |
| `openSyllabusModal(courseId)` | Opens syllabus modal, populates class buttons from `syllabusData` |
| `closeSyllabusModal()` | Closes syllabus modal with transition |
| `selectSyllabusClass(courseId, classNum, activeBtn)` | Updates selected class, populates school buttons |
| `selectSyllabusSchool(classObj, school, activeBtn)` | Updates selected school, renders download link or "coming soon" message |
| `toggleTheme()` | Toggles dark/light mode, persists to `localStorage` |
| `openLightbox(src)` / `closeLightbox()` | Opens/closes the gallery image lightbox |
| `initAnimations()` | Sets up `IntersectionObserver` for `.reveal-on-scroll` elements |
| `DOMContentLoaded` handler | Initializes theme from saved preference/system setting, wires mobile menu, lightbox, syllabus modal, Escape-key handling, renders all dynamic sections, initializes form handlers, generates Lucide icons, handles initial hash-based navigation, and starts scroll animations after 100ms |

### Routing Behavior
- Uses `window.location.hash` for SPA navigation (`home`, `about`, `gallery`, `courses`, `admission`, `contact`)
- `hashchange` event listener re-triggers `navigateTo()`
- Mobile menu auto-closes on navigation

### Forms → Backend
- Both forms POST via `EnglishjibiAPI` (defined in external `backend/api.js`, not included in this HTML file)
- Both include hidden honeypot fields for spam protection
- Successful submission → form reset + success modal
- Failure → inline error feedback message

---

## 16. All External Links Referenced in the Page

| Purpose | URL |
|---|---|
| YouTube Channel | `https://www.youtube.com/channel/UCpPk-QX_mwHGKEyv-WAbHrQ` |
| YouTube Video — Conditional Sentences | `https://youtu.be/8MB9JF3GhOE` |
| YouTube Video — Verb Course | `https://youtu.be/mI4gZ2qY7wE` |
| YouTube Video — Singular vs Plural Verb | `https://youtu.be/hYdlA_lmw3g` |
| YouTube Video — Subject-Verb Agreement | `https://youtu.be/F7nxRx2H_sA` |
| YouTube Video — Main Verb vs Helping Verb | `https://youtu.be/gl2-HffHdlU` |
| Telegram | `https://t.me/englishwithchiranjibisir` |
| Facebook | `https://www.facebook.com/Englishwithchiranjibisir` |
| Instagram | `https://www.instagram.com/chiranjibi4848` |
| WhatsApp | `https://wa.me/918328922917` |
| Phone (tel) | `tel:+918328922917` |
| Practice Set page | `practice.html` |
| Designer Portfolio | `https://sk-mallick.github.io/SK-Mallick-Portfolio` |
| Google Maps Embed | `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d556.1310160957923!2d85.81121701176977!3d20.333824995980752...` |

---

## 17. Contact Details Summary (All Instances)

| Type | Value | Where it appears |
|---|---|---|
| Phone (primary) | +91 83289 22917 | Nav, Footer, Contact page, JSON-LD |
| Phone (secondary) | +91 77358 12335 | Contact page |
| WhatsApp | +91 83289 22917 | Contact page, floating button |
| Email | rangoclasses@gmail.com | Contact page, Footer |
| Address | Duplex 37, Sailashree Vihar, Bhubaneswar, Odisha – 751021 | Contact page, Footer, JSON-LD |
| Geo Coordinates | 20.333825, 85.811217 | JSON-LD, Google Maps embed |
| Business Hours | Mon–Sat, 07:00–20:00 | JSON-LD |

---

## 18. Image Asset References (paths used in the page)

- `img/icon.png` — logo/favicon
- `img/childrens.png` — hero image
- `img/publishedbook.png` — about/mission image
- `img/founder-chiranjibi-sir.jpg` — founder photo
- `img/team-subham.jpg` — team member photo
- `img/team-mam.png` — team member photo
- `img/team-Ratan-Sir.png` — team member photo
- `yt/img-1.png`, `yt/img-2.png`, `yt/img-3.png` — YouTube video thumbnails
- `gallery/classroom/classroom-1.jpg` … `classroom-3.jpg`
- `gallery/activities/activities-1.jpg` … `activities-3.jpg`
- `gallery/results/results-1.jpg` … `results-3.jpg`
- `gallery/events/events-1.jpg` … `events-3.jpg`
- `gallery/syllabus/ODM/Class_2.pdf`, `Class_4.pdf`, `Class_6.pdf`, `Class_7.pdf`, `Class_8.pdf`, `Class_10.pdf`
- `gallery/syllabus/DAV/Class_3.pdf`, `Class_4.pdf`, `Class_5.pdf`, `Class_6.pdf`, `Class_7.pdf`, `Class_8.pdf`, `Class_9.pdf`, `Class_10.pdf`
- `backend/api.js` — external script (form submission logic, not included in HTML)

---

*End of extraction. This document reflects the complete content, data, structure, and functional logic present in the supplied HTML file, exactly as written.*
