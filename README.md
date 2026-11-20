# Muath Alsulami

Muath Alsulami’s bilingual portfolio for software development, Flask integration, and systems observability. The homepage introduces Muath and his visual identity, leads with Numoo, NCM, and Git × Pathy, and labels the stage of each project in the atlas.

## Run locally

From this directory, with Python 3 available:

```sh
python -m http.server 8766 --bind 127.0.0.1
```

Open [the local homepage](http://127.0.0.1:8766/). The site uses HTML, CSS, and browser JavaScript without a framework or npm runtime dependencies. On Windows, use `py` in place of `python` if needed.

## Edit the site

| File | Edit here |
| --- | --- |
| `index.html` | Section order, Arabic fallback content, and social metadata |
| `app.js` | Localized content, projects, skills, milestones, and case studies |
| `atelier.js` | Hero scene, lab simulations, and quick search |
| `styles.css`, `atelier.css`, `brand-polish.css` | Base layout, interactive scenes, and component treatment |
| `professional-summary.html` | Printable professional summary |
| `assets/` | Approved identity imagery, educational artwork, and skill marks |

Ctrl/⌘+K opens search. The scene controls access Real, Pixel, and Proof. The URL `?case=numoo` opens a case by ID. Section links use hashes, such as `#work`. Test Arabic and English and the light and dark appearance after editing. Update `PROJECT_CONTENT_AUDIT.md` when the evidence for a project changes.

## Build

```sh
python build.py --pages _site
python build.py
```

Use an empty directory for Pages staging. The default standalone build is written to `dist/MUATH_Atelier_Standalone.html`. The standalone file embeds local visuals, fonts, CSS, JavaScript, and the printable summary. External evidence links need network access.

The proposed Pages workflow publishes the contents of `_site` when changes reach `main`. See `HANDOFF_TO_SOL.md` before connecting the repository. Brand and asset credits are in `BRAND_ASSETS.md`.

[تعليمات عربية](README_AR.md)
