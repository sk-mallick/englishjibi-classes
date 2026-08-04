/* ═══════════════════════════════════════════════════════════════════
   ENGLISHJIBI CLASSES — shared Tailwind config
   Loaded by every page via: <script src="tailwind.config.js"></script>
   MUST load after the Tailwind CDN <script> and before any page's own
   inline tailwind.config extensions (see index.html for an example).

   This is the config common to ALL pages (index, resources, class,
   folder, view, resource-details). It intentionally does NOT include
   index.html's custom indigo/amber color overrides — those aren't used
   on any other page, and resource-details.html / view.html rely on
   Tailwind's DEFAULT slate/amber palettes, so folding index.html's
   overrides in here would silently reflow their colors. If a page
   needs extra theme tokens, extend `tailwind.config` in a small inline
   <script> right after this file loads (see index.html).
   ═══════════════════════════════════════════════════════════════════ */
tailwind.config = {
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Lora', 'serif'],
            },
            colors: {
                brand: {
                    navy: 'var(--brand-navy)',
                    royal: 'var(--brand-royal)',
                    cobalt: 'var(--brand-cobalt)',
                    silver: 'var(--brand-silver)',
                    pearl: 'var(--brand-pearl)',
                },
                gold: {
                    rich: 'var(--gold-rich)',
                    light: 'var(--gold-light)',
                    muted: 'var(--gold-muted)',
                },
            },
            borderRadius: {
                'pill': '9999px',
                'card': '16px',
                'btn': '8px',
            },
            boxShadow: {
                'card': '0 2px 12px rgba(13,27,82,0.07), 0 1px 4px rgba(13,27,82,0.05)',
                'card-hover': '0 12px 32px rgba(13,27,82,0.12), 0 4px 12px rgba(13,27,82,0.08)',
            },
            screens: { 'xs': '375px' },
            animation: {
                'float': 'heroFloat 6s ease-in-out infinite',
            },
            keyframes: {
                heroFloat: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
            },
        }
    }
}
