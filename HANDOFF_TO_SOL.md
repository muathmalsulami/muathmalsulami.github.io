# Handoff to Sol

Candidate for `muathmalsulami/muathmalsulami.github.io`. The local branch is `main`. The tag `atelier-09-polished` identifies the current handoff. Run `git status --short --branch` and `git rev-parse atelier-09-polished` to verify the clean tree and candidate commit. The previous candidate remains tagged `atelier-09-candidate`. There is no configured remote. The editable source baseline is `8ee7ca1b937f490a97584eb0dfe8cecc766212c0`. The original ZIP remains recoverable in Downloads.

## Changed files

- `index.html`, `styles.css`, and `atelier.css` handle the editorial hero, scene layers, section order, responsive layout, and metadata.
- `app.js`, `atelier.js`, and `brand-polish.css` update case content, evidence labels, translated controls, project search, interaction and keyboard states.
- `professional-summary.html` updates the printable bilingual summary. `build.py` supports standalone and allowlisted Pages builds.
- `assets/` keeps the original identity and illustrative artwork. It adds small WebP variants, local font subsets and license notices, plus a 1200 × 630 JPEG share card. Twelve unused generic tool vectors were removed from `assets/icons`. The twelve vendor SVGs remain in `assets/brand-logos`.
- `.github/workflows/pages.yml` stages and deploys the static files. `.gitignore` excludes generated and working files. The English and Arabic readmes, content audit, design decisions, QA report, and this file document the candidate. Browser checks are under `qa/`.
- `dist/MUATH_Atelier_Standalone.html` is an optional local output. The website is edited in the source files.
- The refinement is documented in `CRITIQUE_AR.md`. Verify the distinct Real, Pixel and Proof views, the evidence index, copyable case links and case-to-lab routes. The focused browser check is in `qa/refinement-check.js`.

## Independent preflight

1. Read `QUALITY_REPORT.md` and `PROJECT_CONTENT_AUDIT.md`. Review the diff from the baseline, run the local server, and reproduce the interaction checks. Inspect at 390px and 1440px in both languages and themes. Review mobile LCP and run Safari/iOS if available.
2. Reconfirm current LinkedIn visibility and the Pathy repository and live URLs. Use the brief’s education and NCM details. Compare exact dates and credential wording with the owner’s records if available, and remove any unsupported specificity. Keep project illustrations and simulations labeled.
3. Review the source and staged publish directory for sensitive data, development files, and rights. Run `python build.py --pages _site` in an empty staging directory and serve that directory. Review the contents from the filesystem and browser.
4. Verify that the authenticated GitHub identity is `muathmalsulami`. Query the exact repo under that authenticated account, including private repos. The unauthenticated public URL returned 404 on 20 November 2026, so the private-name check is still necessary. If the repo exists, inspect ownership, visibility, branches, commits and Pages status before choosing a preserving update path. Escalate only a genuine ownership, visibility, or destructive-migration decision. Keep the Pathy and profile README repositories independent.

## Publish

1. If the preferred name is available, create the empty personal-site repository under `muathmalsulami`. Configure the remote for the exact approved destination.
2. Set **Settings → Pages → Source → GitHub Actions**. Use `main` as the default branch and the `github-pages` deployment environment. Push the reviewed commit to `main` and track the workflow. Run **Publish portfolio to GitHub Pages** manually if the push happens before Pages is configured. The workflow copies the runtime pages and assets into `_site` and uploads that directory. QA, screenshots, and the standalone export are outside the deployment artifact.
3. Verify the public HTTPS homepage and enable **Enforce HTTPS** when the control is available. Check the homepage, work and contact hashes, `?case=numoo`, `professional-summary.html`, social image, logos, theme and language persistence, touch menu, and keyboard search. Check representative asset responses and browser errors on the published origin.
4. Record the repo URL, live URL, deploy method, published SHA, result of the HTTPS checks, and remaining measured limitations. Future merges to `main` trigger the same staging and deploy process.

## Rollback

Record the last verified good release SHA. For later releases, revert the faulty commit or merge on `main`, push the revert, and wait for the replacement deployment. Verify key URLs on HTTPS again. For an initial release with no previous good revision, restore a corrected candidate or unpublish through Pages settings if the public release must be withdrawn. Avoid force-pushing and preserve the Git history.

The candidate passed local browser and build checks. Live HTTPS, authenticated repo availability, production field metrics, and actual iOS/Safari remain open checks. The current provisional mark and approved portrait art are in the candidate. The final animated identity is a separate design phase.

[GitHub Pages source settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [GitHub Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
