# Revision Plan: Replace AI-paraphrased French with verbatim 1744 text

## What was discovered

The French column in `static/fire/chatelet.html` (labeled "Français · Prault 1744") is
entirely AI-generated paraphrase — it was never the verbatim original text. It was written
by Claude during the initial site build and falsely labeled as the source.

The actual 1744 Prault text is available verbatim from Project Gutenberg (ebook #73279),
already downloaded to `gutenberg_source.txt` (3,284 lines, UTF-8, no page markers).

## Progress

### Seconde Partie — COMPLETE (2026-04-27)

All 16 sections of the Seconde Partie (§§I–XV + Conclusion) have been replaced with verbatim
Gutenberg text, expanding from the original 4 placeholder sections to 16 new articles
(#sec-9 through #sec-24). ToC updated accordingly.

| Section | HTML id | Status | Notes |
|---------|---------|--------|-------|
| §I — Comment le Feu est distribué | #sec-9  | ✅ Done | p.61 (f71) + p.65 (f75) markers |
| §II — Des causes de la chaleur    | #sec-10 | ✅ Done | 2 marginal notes |
| §III — Du Feu produit par le frottement | #sec-11 | ✅ Done | 4 marginal notes |
| §IV — De l'action du Feu sur les Solides | #sec-12 | ✅ Done | Footnote [4]; 7-point pyrometer list |
| §V — Comment le Feu agit sur les Liquides | #sec-13 | ✅ Done | Footnote [5]; 5-point fluid list |
| §VI — Végétaux & Animaux | #sec-14 | ✅ Done | p.148 (f158) marker |
| §VII — De l'aliment du Feu | #sec-15 | ✅ Done | 8 marginal notes |
| §VIII — Si le Feu est la cause de l'Elasticité | #sec-16 | ✅ Done | 5-point proof |
| §IX — Si l'Electricité dépend du Feu | #sec-17 | ✅ Done | Footnote [6]; 10-point proof |
| §X — Comment le Feu agit dans le Vuide | #sec-18 | ✅ Done | 5 numbered experiments |
| §XI — En quelle raison le Feu agit | #sec-19 | ✅ Done | Longest section; objections + replies |
| §XII — Du Refroidissement des corps | #sec-20 | ✅ Done | 8-point analysis |
| §XIII — Des causes de la Congélation | #sec-21 | ✅ Done | Longest section; frigorific particles theory |
| §XIV — De la Nature du Soleil | #sec-22 | ✅ Done | Solid-Sun argument |
| §XV — Du Feu Central | #sec-23 | ✅ Done | Central fire; Providence argument |
| Conclusion | #sec-24 | ✅ Done | 18 numbered conclusions verbatim |

**Footnotes rendered in Seconde Partie:**
- `[4]` (§IV / #sec-12): bodies acquire a determinate degree of heat
- `[5]` (§V / #sec-13): Fahrenheit thermometer degrees
- `[6]` (§IX / #sec-17): two kinds of electricity (resinous and vitreous)

### Première Partie — COMPLETE (2026-04-26)

All 9 sections of the Première Partie have been replaced with verbatim Gutenberg text:

| Section | Status | Notes |
|---------|--------|-------|
| Intro   | ✅ Done | Single paragraph; p.2 marker removed (no mid-section text) |
| I.      | ✅ Done | Footnote [1] included; p.3 + p.5 markers |
| II.     | ✅ Done | p.9 + p.11 markers |
| III.    | ✅ Done | p.17 + p.21 markers |
| IV.     | ✅ Done | Footnote [2] included; p.25 + p.27 markers |
| V.      | ✅ Done | Footnote [3] included; p.31 + p.33 markers |
| VI.     | ✅ Done | Full 15-point weight discussion; p.37 + p.39 markers |
| VII.    | ✅ Done | Full equilibrium/distribution discussion; p.45 + p.47 markers |
| VIII.   | ✅ Done | All 13 conclusions verbatim; p.53 + p.55 markers |

**What was added to CSS (`static/css/chatelet.css`):**
- `.marginal-note` — styled left-border block for `[Note: ...]` marginalia (42 instances)
- `sup a` — gold-coloured superscript footnote links

**Footnotes rendered:**
- `[1]` (§ I): definition of *modes* vs *proprietés*
- `[2]` (§ IV): Leibnizian philosophy assumption
- `[3]` (§ V): definition of *rayon coloré*

**Remaining issues:** The Seconde Partie (§§ IX–XIV, lines 1228–3284 of Gutenberg) is still
AI-paraphrase. See Step 1 below.

## Source structure (Gutenberg)

### Première Partie — "De la Nature du Feu"

| Section | Gutenberg heading | Approx. lines | HTML section id |
|---------|------------------|---------------|-----------------|
| Intro   | (opening before I.) | 106–120   | #intro          |
| I.      | Que le Feu n'est pas toujours chaud & lumineux | 121–270 | #sec-1 |
| II.     | Quel est l'effet le plus universel du Feu | 271–415 | #sec-2 |
| III.    | Si le mouvement produit le Feu | 420–461 | #sec-3 |
| IV.     | Si le Feu a toutes les proprietés de la matiere | 462–502 | #sec-4 |
| V.      | Le Feu est-il impénétrable | 503–614 | #sec-5 |
| VI.     | Le Feu tend-il vers le centre de la Terre | 617–861 | #sec-6 |
| VII.    | Quelles sont les propriétés distinctives du Feu | 864–1162 | #sec-7 |
| VIII.   | Conclusion de la premiere Partie | 1163–1215 | #sec-8 |

### Seconde Partie — "De la Propagation du Feu"

| Section | Gutenberg heading | Approx. lines | HTML section id |
|---------|------------------|---------------|-----------------|
| I.      | Comment le Feu est distribué dans les corps | 1228–1312 | #sec-9 |
| II.     | Des causes de la chaleur des corps | 1313–1368 | #sec-10 (?) |
| III.    | Du Feu produit par le frottement | 1371–1454 | #sec-10 (?) |
| IV.     | De l'action du Feu sur les Solides | 1458–~1700 | #sec-10/11 (?) |
| V–VIII+ | (not yet read — covers fluids, heat, light, etc.) | ~1700–3284 | #sec-11–14 |

**Note:** The current HTML's Seconde Partie section titles ("On the communication of fire",
"On the rarefaction of bodies", "On the heat of fire", "On the light of fire") do NOT
directly match the Gutenberg section numbering. The full Gutenberg Seconde Partie has at
least 8 sections. Mapping needs to be confirmed by reading lines 1700–3284.

## Folio links — already fixed (2026-04-26)

All 37 Gallica folio `href` values were corrected based on the IIIF manifest.
Offset rules: p.1–5 = folio+8; p.6–54 = folio+9; p.55+ = folio+10.
Two unnumbered (NP) folios interrupt the sequence: f14 (between p.5/p.6) and f64
(between p.54/p.55). Commit: c530841.

## Plan for the text revision

### Step 1 — Finish reading the source *(next)*
Read `gutenberg_source.txt` lines 1228–3284 to:
- Identify all remaining Seconde Partie section headings and line ranges
- Map each to the current HTML section ids (#sec-9 through #sec-12 or more)
- Confirm the page numbers at which each section begins (for page-marker placement)
- Note: current HTML has 4 Seconde Partie sections but Gutenberg has at least 8

### Step 2 — Decide on scope *(needs user decision)*
**Option A (Full edition):** Include ALL verbatim text for each section.
**Option B (Selective):** Replace only paraphrased paragraphs with verbatim opening/key
paragraphs; keep current length.

**Recommendation:** Option A is more scholarly; Option B is more practical for a first
pass. Confirm with user before proceeding on Seconde Partie.

### Step 3 — Edit Seconde Partie section by section *(pending)*
For each of the Seconde Partie sections:
1. Extract verbatim French from `gutenberg_source.txt`
2. Write new English translation (scholarly register, preserve numbered items and marginal
   note headings with `.marginal-note` class, footnotes with `<sup>` + `.annotation`)
3. Replace `<div class="col col-fr">` content in `chatelet.html` — keeping all
   `<a class="page-marker">`, `<p class="col-header">`, and structural HTML unchanged

### Step 4 — Commit and deploy
Same workflow as before: `git add`, `git commit`, `git push`, GitHub Actions rebuilds Pages.

## Files involved

- `static/fire/chatelet.html` — the file to edit
- `gutenberg_source.txt` — verbatim source (do NOT commit this; it is a working file)
- `static/fire/voltaire.html` — separate file, same issue exists but not yet addressed

## Open questions for user

1. Full edition (all text) or keep current selective structure?
2. Should `[Note: ...]` marginal notes from Gutenberg be shown as bold headings, inline
   annotations, or omitted?
3. Should footnotes [1] [2] from Gutenberg be included?
4. Does `static/fire/voltaire.html` need the same treatment?
