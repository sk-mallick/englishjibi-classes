# How to add a PDF to the resource library

## The two folders mirror each other

```
data/class-9/grammar.json     describes the files in
pdf/class-9/grammar/
```

Same class number, same folder name, every time. That's the only rule to remember.

All 45 JSON files already exist (9 classes × 5 folders). Most contain just `[]`.
You never create a new file — you edit one that's already there.

---

## Adding a file — 2 steps

**1. Put the PDF in the matching `pdf/` folder.**

For a Class 6 grammar worksheet: `pdf/class-6/grammar/adjectives-worksheet.pdf`

**2. Open the matching JSON and add one block.**

`data/class-6/grammar.json` — change `[]` to:

```json
[
  {
    "id": "adjectives-worksheet",
    "title": "Adjectives Worksheet",
    "file": "pdf/class-6/grammar/adjectives-worksheet.pdf"
  }
]
```

Refresh the page. Done.

---

## Naming rules — these matter

**Lowercase, hyphens, no spaces. Ever.**

| Bad | Good |
|---|---|
| `Adjectives Worksheet.pdf` | `adjectives-worksheet.pdf` |
| `Class6_Grammar.PDF` | `class6-grammar.pdf` |

Windows treats `File.pdf` and `file.pdf` as the same name. **GitHub Pages does not.**
A capital letter that works on your laptop will 404 on the live site. Spaces turn into
`%20` in the URL and cause their own problems.

---

## All the fields

Only the first three are required.

| Field | Required | What it does |
|---|---|---|
| `id` | **yes** | Short name used in the page URL. Lowercase + hyphens only. Must be unique inside this one file. |
| `title` | **yes** | The name shown on the card. |
| `file` | **yes** | Path to the PDF. Starts with `pdf/`, **no leading slash**. |
| `desc` | no | One sentence. Also becomes the page description for Google. |
| `size` | no | Typed by hand, e.g. `"2.4 MB"`. Just for display. |
| `pages` | no | A number, e.g. `57`. Just for display. |
| `date` | no | `"YYYY-MM-DD"`. Shows a **New** badge for 45 days, then it disappears by itself. |
| `featured` | no | `true` shows a gold **Featured** badge. |
| `cover` | no | `cover-navy`, `cover-royal`, `cover-cobalt` or `cover-gold`. Left out = picked automatically. |
| `icon` | no | Any [lucide](https://lucide.dev) icon name. Left out = the folder's own icon. |
| `tag` | no | Small label on the cover image. Left out = the folder name. |

A full example — `data/class-9/grammar.json`:

```json
[
  {
    "id": "super-tense",
    "title": "Super Tense — Complete Tenses Book",
    "desc": "All 12 tenses explained with clear rules, examples and practice exercises.",
    "file": "https://englishjibi.github.io/common/super-tense.pdf",
    "size": "2.4 MB",
    "pages": 57,
    "date": "2026-07-28",
    "featured": true
  }
]
```

> **Cross-repo PDFs:** files stored in a separate GitHub Pages repo (like `common`)
> use a full URL — `https://englishjibi.github.io/common/super-tense.pdf` — not a
> relative path. A relative `pdf/…` path only works for files committed to this repo.

---

## Good to know

**Order in the file = order on the page.** To move something to the top, move its
block to the top. Nothing is sorted automatically.

**One PDF can appear in several classes.** Add the same block to each class's JSON,
all pointing at the same `file` path. Never copy the actual PDF.

**Commas between blocks, none after the last one.** This is the mistake that breaks
things most often:

```json
[
  { "id": "one", "title": "First",  "file": "pdf/class-6/grammar/one.pdf" },
  { "id": "two", "title": "Second", "file": "pdf/class-6/grammar/two.pdf" }
]
```
↑ comma between the two, **no** comma after the second one.

If you get it wrong the page will say *"We couldn't load this right now"* and show
you the exact filename to check. You can also paste the file into
[jsonlint.com](https://jsonlint.com) to find the problem line.

---

## Featured items on the Resources page

Setting `"featured": true` here only adds the gold badge on the folder page.

To also show something in **Featured Resources** on `resources.html`, add a matching
entry to the `resourcesData` list near the top of that file's `<script>` block. The
two lists are kept separate on purpose so the main Resources page never depends on
loading anything.

---

## Testing on your own computer

Opening these pages by double-clicking will **not** work — browsers block a page
from loading local files this way, so every folder will look empty. Run a tiny
local server instead, from the `working` folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/resources.html`. On the live GitHub Pages site
this isn't needed — it just works.
