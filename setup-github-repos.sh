#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════
#  Creates the 10 PDF-storage repos under the englishjibi account,
#  seeds each with the 5 folder structure, and turns on GitHub Pages.
#
#  RUN THIS ONCE. It is safe to re-run — repos that already exist are
#  skipped rather than overwritten.
#
#  Before running:
#     1. install the GitHub CLI      →  winget install GitHub.cli
#     2. restart your terminal
#     3. log in as the englishjibi account:
#            gh auth login
#        (choose GitHub.com → HTTPS → login with a web browser)
#
#  Then:   bash setup-github-repos.sh
# ═══════════════════════════════════════════════════════════════════════

set -u   # error on undefined vars (but NOT -e; we handle failures per repo)

OWNER="englishjibi"
CLASSES="2 3 4 5 6 7 8 9 10"
FOLDERS="passage creative-writing grammar literature materials"

# ── preflight ────────────────────────────────────────────────────────
if ! command -v gh >/dev/null 2>&1; then
    echo "ERROR: the GitHub CLI (gh) is not installed."
    echo "       Install it with:   winget install GitHub.cli"
    echo "       Then restart your terminal and run:   gh auth login"
    exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
    echo "ERROR: not logged in. Run:   gh auth login"
    exit 1
fi

ACTIVE=$(gh api user --jq .login 2>/dev/null || echo "?")
echo "Logged in to GitHub as: $ACTIVE"
echo "Repos will be created under: $OWNER"
echo
if [ "$ACTIVE" != "$OWNER" ]; then
    echo "NOTE: you are logged in as '$ACTIVE', not '$OWNER'."
    echo "      That is fine only if '$ACTIVE' has permission to create repos"
    echo "      under '$OWNER' (i.e. it is an organisation you belong to)."
    echo "      If '$OWNER' is a separate personal account, log in as it instead."
    echo
fi

echo "About to create these 10 PUBLIC repositories:"
for c in $CLASSES; do echo "    $OWNER/class-$c"; done
echo "    $OWNER/common"
echo
printf "Type YES to continue: "
read -r CONFIRM
[ "$CONFIRM" = "YES" ] || { echo "Cancelled — nothing was created."; exit 0; }
echo

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

CREATED=0; SKIPPED=0; FAILED=0

make_repo () {
    local repo="$1" desc="$2"

    if gh repo view "$OWNER/$repo" >/dev/null 2>&1; then
        echo "  [skip]   $OWNER/$repo already exists"
        SKIPPED=$((SKIPPED + 1))
        return
    fi

    # --add-readme gives us an initial commit; GitHub Pages cannot be
    # enabled on a repo with no commits on the target branch.
    if ! gh repo create "$OWNER/$repo" --public --description "$desc" --add-readme >/dev/null 2>&1; then
        echo "  [FAIL]   could not create $OWNER/$repo"
        FAILED=$((FAILED + 1))
        return
    fi

    if ! gh repo clone "$OWNER/$repo" "$TMP/$repo" -- --quiet >/dev/null 2>&1; then
        echo "  [FAIL]   created but could not clone $OWNER/$repo"
        FAILED=$((FAILED + 1))
        return
    fi

    (
        cd "$TMP/$repo" || exit 1
        for f in $FOLDERS; do
            mkdir -p "$f"
            # git will not track an empty directory, so drop a placeholder in.
            printf 'Put %s PDFs for this class in this folder.\n' "$f" > "$f/.gitkeep"
        done
        cat > README.md <<README
# ${repo}

PDF storage for the ENGLISHJIBI Classes resource library.

Files are served over GitHub Pages and listed on the website by the matching
JSON file in the main site repo (\`data/${repo}/<folder>.json\`).

## Folders

| Folder | Contents |
|---|---|
| \`passage/\` | Reading passages & comprehension |
| \`creative-writing/\` | Stories, letters & essays |
| \`grammar/\` | Rules, notes & exercises |
| \`literature/\` | Poems, prose & chapter notes |
| \`materials/\` | Extra worksheets & study aids |

## Naming rule

**Lowercase, hyphens, no spaces.** Windows ignores capitalisation but GitHub
Pages does not — \`Tenses.pdf\` will work on your PC and 404 on the live site.

    good:  super-tense.pdf
    bad:   SUPER TENSE.pdf

## URL of a file here

    https://${OWNER}.github.io/${repo}/grammar/super-tense.pdf
README
        git add -A >/dev/null 2>&1
        git -c user.email=setup@local -c user.name=setup \
            commit -m "Add folder structure and README" >/dev/null 2>&1
        git push >/dev/null 2>&1
    )

    # Enable GitHub Pages from main / root.
    echo '{"source":{"branch":"main","path":"/"}}' \
        | gh api -X POST "repos/$OWNER/$repo/pages" --input - >/dev/null 2>&1 \
        && echo "  [ok]     $OWNER/$repo          → https://$OWNER.github.io/$repo/" \
        || echo "  [ok*]    $OWNER/$repo          (created; enable Pages manually in Settings → Pages)"

    CREATED=$((CREATED + 1))
}

echo "Creating repositories..."
for c in $CLASSES; do
    make_repo "class-$c" "Class $c study material (PDFs) — ENGLISHJIBI Classes"
done
make_repo "common" "Study material that applies to all classes — ENGLISHJIBI Classes"

echo
echo "───────────────────────────────────────────────"
echo "  created: $CREATED    skipped: $SKIPPED    failed: $FAILED"
echo "───────────────────────────────────────────────"
echo
echo "Pages can take 1-2 minutes to go live on a brand new repo."
echo "Check one with:"
echo "    curl -I https://$OWNER.github.io/class-9/"
