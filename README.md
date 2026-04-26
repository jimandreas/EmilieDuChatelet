# Émilie du Châtelet — Selected Works

Bilingual French–English critical editions of Émilie du Châtelet's scientific writings, presented as a scholarly static site with parallel-text readers.

Live site: **https://jimandreas.github.io/EmilieDuChatelet/**

---

## About

Gabrielle Émilie Le Tonnelier de Breteuil, Marquise du Châtelet (1706–1749), was one of the foremost scientific minds of the French Enlightenment. Excluded from the academies and universities of her era, she nonetheless produced original work of lasting importance — including the first complete French translation of Newton's *Principia Mathematica*, which she amplified with substantial original commentary.

This project presents bilingual editions of her principal scientific writings. Each work is displayed in a parallel reader showing English translation alongside the original French, with page references linked to digitised primary sources.

---

## Works

### The 1738 Prize on Fire

In 1737 the *Académie royale des sciences* announced a prize competition: *Quelle est la nature du feu, et quelles sont ses propriétés?* At Château de Cirey, Voltaire and du Châtelet were running a serious scientific laboratory together — and each submitted an essay independently, without telling the other. Neither won the first prize (divided among three recipients including Leonhard Euler), but both received honourable mention and were published in 1744. Du Châtelet became the **first woman to have a scientific paper published by the Académie royale des sciences**.

- **Du Châtelet** — *Dissertation sur la nature et la propagation du feu* (1744) · parallel bilingual edition
- **Voltaire** — *Essai sur la nature du feu et sur sa propagation* (1738/1744) · parallel bilingual edition

---

## Building the Site

The site is built with [Hugo](https://gohugo.io/) (v0.100.0+). No Node.js or npm required.

```bash
# Development server with live reload
hugo server -D

# Production build → public/
hugo
```

The parallel reader pages (`static/fire/*.html`) are pre-built static HTML and are copied unchanged into the build output. See [CLAUDE.md](CLAUDE.md) for the full architecture overview.

---

## About the Translations

The English translations are new scholarly renderings prepared for this edition. They aim to convey the precision of the scientific argument and the formal register of eighteenth-century scientific prose. An earlier translation of du Châtelet's essay was published by Judith Zinsser in *Selected Philosophical and Scientific Writings* (University of Chicago Press, 2009).

---

## License

The French source texts are in the public domain. The English translations and site code are released under the MIT License (see [LICENSE.txt](LICENSE.txt)). Digital scan images from Gallica/BnF are reproduced for non-commercial scholarly use with attribution; see BnF reproduction policy for commercial use.

---

## Appendix: Primary Sources

### Du Châtelet — *Dissertation sur la nature et la propagation du feu* (1744)

| Repository | Link |
|---|---|
| Gallica (BnF) | https://gallica.bnf.fr/ark:/12148/bpt6k756786 |
| Project Gutenberg #73279 | https://www.gutenberg.org/ebooks/73279 |
| Gutenberg HTML | https://www.gutenberg.org/cache/epub/73279/pg73279-images.html |
| BnF Essentiels | https://essentiels.bnf.fr/fr/image/a334df08-c86d-4fc9-bcc9-4e410ae906c6 |

Publisher: Prault fils, Paris, 1744. Gallica page navigation: append `/f[N].image` to the ark URL for a specific page (f7 = p. 1 of main text).

### Voltaire — *Essai sur la nature du feu et sur sa propagation* (1738)

| Repository | Link |
|---|---|
| Wikisource — Garnier ed. 1879 | https://fr.wikisource.org/wiki/Essai_sur_la_nature_du_feu_et_sur_sa_propagation/Édition_Garnier |
| Garnier ed. — Avertissement | …/Avertissement |
| Garnier ed. — Première partie | …/Première_partie |
| Garnier ed. — Seconde partie | …/Seconde_partie |

First published 1739 in the Académie prize volume; reprinted in *Œuvres complètes de Voltaire*, tome 22, pp. 282–325 (Garnier, 1879).

### Du Châtelet — French translation of Newton's *Principia Mathematica* (1759)

| Repository | Link |
|---|---|
| Gallica — Tome 1 | https://gallica.bnf.fr/ark:/12148/bpt6k1040149v |
| Gallica — Tome 2 | https://gallica.bnf.fr/ark:/12148/bpt6k1040150h |
| Gallica — Tome 1 (alt scan) | https://gallica.bnf.fr/ark:/12148/bpt6k29037w |
| Gallica — Tome 2 (alt scan) | https://gallica.bnf.fr/ark:/12148/bpt6k290387 |

Manuscripts (BnF): Fr. 12266, Fr. 12267, Fr. 12268 — du Châtelet's working manuscripts from 1749, sent to the Bibliothèque du roi shortly before her death. Published posthumously by Desaint & Saillant, Paris, 1759. Her commentary in Volume II comprises approximately two-thirds of that volume and includes an *Exposition abrégée du Système du Monde* and original analytical solutions to disputed problems in Newtonian mechanics.

---

## Acknowledgements

Site research, translation support, and code were developed in collaboration with **Claude** (Anthropic's AI assistant, claude.ai). Claude contributed to source identification, scholarly context, parallel reader architecture, CSS design, and English rendering of the 18th-century French texts.
