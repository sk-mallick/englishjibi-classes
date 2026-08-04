/* ═══════════════════════════════════════════════════════════════════
   ENGLISHJIBI CLASSES — shared site script
   Loaded by: resources.html, class.html, folder.html, view.html

   Load order on every page MUST be:
       1. lucide CDN  <script src="...lucide...">
       2. THIS FILE   <script src="assets/site.js">
       3. the page's own inline <script>

   ── HOW THE RESOURCE LIBRARY IS ORGANISED ──────────────────────────
   data/  and  pdf/  mirror each other exactly:

       data/class-9/grammar.json   describes the files in
       pdf/class-9/grammar/

   Every one of the 45 JSON files already exists. Most contain just [].
   To add a PDF:
       1. drop the file into  pdf/class-N/<folder>/
       2. add one block to    data/class-N/<folder>.json

   RULES (these matter — GitHub Pages is case-sensitive, Windows is not):
     • filenames: lowercase, hyphens, NO SPACES, ever
     • paths in JSON are relative with NO leading slash
     • the same PDF may be listed in several classes — never copy the file
   ═══════════════════════════════════════════════════════════════════ */

/* ── Site-wide constants ─────────────────────────────────────────── */

/* Used to build absolute URLs for canonical tags and JSON-LD. No trailing slash.

   WHEN YOU BUY englishjibiclasses.com:
     1. change this line to 'https://englishjibiclasses.com'
     2. set the custom domain on the sk-mallick.github.io USER repo, not just this
        project repo — that keeps every repo on one origin, so <a download> keeps
        saving files instead of just opening them
     3. re-run the sitemap, and update the canonical/og:url/@id values that are
        hard-coded in the <head> of index/resources/class/folder/view.html */
const SITE_ORIGIN = 'https://sk-mallick.github.io/englishjibi-classes';

/* NOTE: named CLASS_LIST, not classesData — resources.html already has a
   top-level `classesData`. Two classic <script> tags share one global
   lexical scope, so a duplicate name is a SyntaxError that kills the
   entire inline script and renders the page as an empty shell. */
const CLASS_LIST = [2, 3, 4, 5, 6, 7, 8, 9, 10];

/* The 5 folders. Identical for every class, so they live here once
   rather than being repeated inside all 45 JSON files.
   `tone` maps to the existing .tone-* classes in site.css.
   `icon` is a lucide icon name — a wrong name renders BLANK with no
   console error, so verify visually after changing one. */
const FOLDERS = [
    { slug: 'passage',          name: 'Passage',          desc: 'Reading passages & comprehension', icon: 'file-text',   tone: 'royal'  },
    { slug: 'creative-writing', name: 'Creative Writing', desc: 'Stories, letters & essays',        icon: 'pen-line',    tone: 'gold'   },
    { slug: 'grammar',          name: 'Grammar',          desc: 'Rules, notes & exercises',         icon: 'spell-check', tone: 'cobalt' },
    { slug: 'literature',       name: 'Literature',       desc: 'Poems, prose & chapter notes',     icon: 'library',     tone: 'navy'   },
    { slug: 'materials',        name: 'Materials',        desc: 'Extra worksheets & study aids',    icon: 'folder-open', tone: 'red'    },
];

const FOLDER_SLUGS = FOLDERS.map(f => f.slug);

/* Cover gradients cycled through when a JSON entry doesn't set one. */
const COVER_CYCLE = ['cover-navy', 'cover-royal', 'cover-cobalt', 'cover-gold'];

/* A file shows a "New" badge for this many days after its `date`. */
const NEW_BADGE_DAYS = 45;


/* ── Small helpers ───────────────────────────────────────────────── */

/* Escape anything that came from JSON before putting it in innerHTML. */
function escapeHtml(value) {
    if (value === null || value === undefined) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/* Look up a folder by slug. Returns null for anything unrecognised. */
function getFolder(slug) {
    return FOLDERS.find(f => f.slug === slug) || null;
}

/* Read and VALIDATE the URL parameters.

   Security note: we never render a raw parameter back into the page.
   `class` and `folder` are checked against fixed lists, so only known-good
   values are ever displayed. `id` is only ever COMPARED against the JSON —
   on success we show the entry's own title, never the id from the URL.
   Error messages say "that class", never echo what the visitor typed.
   That removes the reflected-XSS problem by construction. */
function getParams() {
    const q = new URLSearchParams(window.location.search);

    const rawClass = (q.get('class') || '').trim();
    const isCommon = rawClass.toLowerCase() === 'common' || rawClass === '0';
    const classNum = isCommon ? 'common' : Number(rawClass);
    const classOk = isCommon || (rawClass !== '' && Number.isInteger(classNum) && CLASS_LIST.includes(classNum));

    const folderSlug = (q.get('folder') || '').trim().toLowerCase();
    const folderOk = FOLDER_SLUGS.includes(folderSlug);

    const fileId = (q.get('id') || '').trim();
    const idOk = /^[a-z0-9-]{1,80}$/.test(fileId);

    return {
        classNum: classOk ? classNum : null, classOk, isCommon,
        folderSlug: folderOk ? folderSlug : null, folderOk,
        fileId: idOk ? fileId : null, idOk,
    };
}

/* Path to a folder's JSON file. */
function dataPathFor(classNum, folderSlug) {
    if (classNum === 'common' || classNum === 0 || !classNum) {
        return `data/common/${folderSlug}.json`;
    }
    return `data/class-${classNum}/${folderSlug}.json`;
}

/* Fetch a folder JSON with proper guards.

   The res.ok check is NOT optional. GitHub Pages answers a missing path
   with an HTML 404 page, so without it res.json() chokes on "<!DOCTYPE"
   and throws a SyntaxError that looks like corrupt data instead of a
   missing file — exactly the wrong diagnosis.

   Throws an Error carrying .kind so callers can pick the right message:
       'missing' → file isn't there (404)
       'error'   → network failure, bad JSON, or wrong shape           */
async function fetchJson(path) {
    let res;
    try {
        res = await fetch(path, { cache: 'no-cache' });
    } catch (networkErr) {
        console.error('[site.js] Network error loading', path, networkErr);
        throw Object.assign(new Error('network'), { kind: 'error', path });
    }

    if (res.status === 404) {
        throw Object.assign(new Error('missing'), { kind: 'missing', path });
    }
    if (!res.ok) {
        console.error('[site.js] HTTP', res.status, 'loading', path);
        throw Object.assign(new Error('http'), { kind: 'error', path });
    }

    let items;
    try {
        items = await res.json();
    } catch (parseErr) {
        // Most common cause: a trailing comma left behind while hand-editing.
        console.error('[site.js] Could not parse JSON in', path, '—', parseErr.message);
        throw Object.assign(new Error('parse'), { kind: 'error', path });
    }

    // Second most common hand-edit mistake: wrapping the array in { }.
    if (!Array.isArray(items)) {
        console.error('[site.js]', path, 'must contain a JSON array, e.g. [] — got', typeof items);
        throw Object.assign(new Error('shape'), { kind: 'error', path });
    }
    return items;
}

/* True if `dateStr` (YYYY-MM-DD) is within the last NEW_BADGE_DAYS. */
function isNew(dateStr) {
    if (!dateStr) return false;
    const then = new Date(dateStr);
    if (isNaN(then)) return false;
    return (Date.now() - then.getTime()) / 86400000 <= NEW_BADGE_DAYS;
}

/* A file's cover gradient: explicit if set, otherwise cycled by position. */
function coverFor(entry, index) {
    if (entry && entry.cover && COVER_CYCLE.includes(entry.cover)) return entry.cover;
    return COVER_CYCLE[index % COVER_CYCLE.length];
}


/* ── Page metadata (SEO) ─────────────────────────────────────────── */

function upsertMeta(selector, attr, attrValue, content) {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

/* Set title / description / canonical / Open Graph / Twitter in one call.

   `canonical` must be a RELATIVE path built from validated values in a
   FIXED parameter order (class, then folder, then id) — never from
   location.search. Otherwise ?folder=x&class=9 and ?class=9&folder=x
   become two canonical URLs for one page, and ?class=9&fbclid=... a third. */
function setPageMeta({ title, description, canonical }) {
    if (title) {
        document.title = title;
        upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
        upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }
    if (description) {
        const short = description.length > 155 ? description.slice(0, 152).trimEnd() + '…' : description;
        upsertMeta('meta[name="description"]', 'name', 'description', short);
        upsertMeta('meta[property="og:description"]', 'property', 'og:description', short);
        upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', short);
    }
    if (canonical) {
        const abs = `${SITE_ORIGIN}/${String(canonical).replace(/^\//, '')}`;
        let link = document.head.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', abs);
        upsertMeta('meta[property="og:url"]', 'property', 'og:url', abs);
    }
}

/* Create-or-replace a JSON-LD block, identified by id. */
function setJsonLd(id, obj) {
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = id;
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(obj);
}

/* Reuses the SAME @id already declared in index.html, so every library page
   joins the existing entity graph instead of declaring a rival organisation. */
function orgStub() {
    return {
        '@type': 'EducationalOrganization',
        '@id': `${SITE_ORIGIN}/#organization`,
        'name': 'ENGLISHJIBI CLASSES',
        'url': SITE_ORIGIN,
    };
}

/* Error and not-found states return HTTP 200 on static hosting, so they'd
   otherwise be indexed as soft 404s. */
function setNoindex() {
    upsertMeta('meta[name="robots"]', 'name', 'robots', 'noindex, follow');
}


/* ── Breadcrumbs ─────────────────────────────────────────────────── */

/* Draws the visible crumb bar AND emits the matching BreadcrumbList.
   Both come from the same array, so they can never drift apart — which is
   the thing Google actually checks.

   The LAST item must have no `url` (it's the current page). */
function renderBreadcrumbs(items) {
    const host = document.getElementById('crumbs');
    if (host) {
        host.innerHTML = items.map((item, i) => {
            const sep = i > 0 ? '<span class="crumb-sep">/</span>' : '';
            const label = escapeHtml(item.name);
            return item.url
                ? `${sep}<a href="${escapeHtml(item.url)}">${label}</a>`
                : `${sep}<span class="crumb-current" aria-current="page">${label}</span>`;
        }).join('');
    }

    setJsonLd('ld-breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': items.map((item, i) => {
            const node = { '@type': 'ListItem', 'position': i + 1, 'name': item.name };
            if (item.url) node.item = `${SITE_ORIGIN}/${item.url.replace(/^\//, '')}`;
            return node;
        }),
    });
}


/* ── One renderer for every loading / empty / error state ─────────── */

/*  host    — the element to render into
    icon    — lucide icon name
    title   — bold first line (optional)
    message — supporting sentence
    actions — [{ label, href, cls }]  cls defaults to btn-secondary
    hint    — a file path shown in <code>, so a broken JSON file is
              self-diagnosing without opening DevTools
    spin    — true to spin the icon (loading state)                    */
function renderStateCard(host, { icon, title, message, actions, hint, spin }) {
    if (!host) return;
    // Every button site-wide uses the blob-fill hover (four blobs merging via
    // the page's #goo SVG filter), so these dynamically-built action buttons
    // need the same markup, not a plain <a>.
    const blobs = `<span class="blob-fill__inner"><span class="blob-fill__blobs">
            <span class="blob-fill__blob"></span><span class="blob-fill__blob"></span>
            <span class="blob-fill__blob"></span><span class="blob-fill__blob"></span>
        </span></span>`;
    const actionHtml = (actions && actions.length)
        ? `<div class="state-actions">${actions.map(a =>
            `<a href="${escapeHtml(a.href)}" class="${a.cls || 'btn-secondary'} blob-fill"><span class="blob-fill__label">${escapeHtml(a.label)}</span>${blobs}</a>`
          ).join('')}</div>`
        : '';
    const hintHtml = hint
        ? `<p style="margin-top:.9rem;font-size:.75rem;">Expected file: <code>${escapeHtml(hint)}</code></p>`
        : '';

    host.innerHTML = `
        <div class="empty-state">
            <i data-lucide="${escapeHtml(icon || 'info')}" class="w-6 h-6 mx-auto mb-3${spin ? ' animate-spin' : ''}" style="stroke: var(--text-muted);"></i>
            ${title ? `<p style="font-weight:700;color:var(--text-heading);margin-bottom:.35rem;">${escapeHtml(title)}</p>` : ''}
            <p>${escapeHtml(message || '')}</p>
            ${actionHtml}
            ${hintHtml}
        </div>`;
    if (window.lucide) lucide.createIcons();
}

/* Turn a fetch error into the right state card. */
function renderFetchError(host, err, extraActions) {
    const isMissing = err && err.kind === 'missing';
    renderStateCard(host, {
        icon: isMissing ? 'file-question' : 'alert-triangle',
        title: isMissing ? "This folder hasn't been set up yet." : "We couldn't load this right now.",
        message: isMissing
            ? 'Material for this section is on the way — please check back soon.'
            : 'Check your internet connection and try again.',
        actions: extraActions || [],
        hint: err && err.path ? err.path : null,
    });
    setNoindex();
}


/* ── Toast (moved here from resources.html) ──────────────────────── */

let toastTimer = null;
function showToast(message) {
    const el = document.getElementById('toast-notice');
    if (!el) return;
    el.innerHTML = `<i data-lucide="info"></i><span>${escapeHtml(message)}</span>`;
    if (window.lucide) lucide.createIcons();
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3600);
}


/* ── Nav / mobile menu (moved here from resources.html) ──────────── */

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('menu-toggle');
    if (!menu) return;
    const isOpen = menu.style.maxHeight && menu.style.maxHeight !== '0px';
    if (!isOpen) {
        menu.style.maxHeight = menu.scrollHeight + 'px';
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.setAttribute('aria-label', 'Close menu');
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('menu-toggle');
    if (menu) menu.style.maxHeight = '0px';
    if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Open menu');
    }
}

document.addEventListener('click', function (e) {
    const nav = document.getElementById('main-nav');
    const menu = document.getElementById('mobile-menu');
    if (menu && menu.style.maxHeight && menu.style.maxHeight !== '0px') {
        if (nav && !nav.contains(e.target)) closeMobileMenu();
    }
});

window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
});

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileMenu(); });


/* ── Scroll reveal (moved here from resources.html) ──────────────── */

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach(el => observer.observe(el));
}

/* IMPORTANT: initAnimations() only observes elements that exist when it runs.
   Anything a render function injects AFTERWARDS would stay invisible forever.
   So every injected element either carries `is-visible` in its template, or
   gets revealAll(container) called right after innerHTML is set. */
function revealAll(root) {
    (root || document).querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
}


/* ── Lucide icons + shared init ──────────────────────────────────── */

/* The CDN script sometimes hasn't executed yet, so retry briefly. */
function ensureLucide() {
    function tryInit() {
        if (window.lucide && typeof lucide.createIcons === 'function') { lucide.createIcons(); return true; }
        return false;
    }
    if (tryInit()) return;
    let attempts = 0;
    const timer = setInterval(() => { if (tryInit() || ++attempts > 50) clearInterval(timer); }, 100);
}

/* Every page calls this once, AFTER its own rendering is done. */
function initShell() {
    ensureLucide();
    setTimeout(initAnimations, 100);
}
