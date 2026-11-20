# ATELIER 09 quality report

Tested on 20 November 2026 in the local candidate workspace. The original ZIP and editable baseline were retained. The screens used for comparison were rendered from the actual HTML.

## Browser and build checks

| Check | Observed result |
| --- | --- |
| Microsoft Edge 157 / Playwright CLI | 36 of 36 combinations passed. The viewport widths were 320, 375, 390, 430, 768, 1024, 1440, 1920, and 3840 CSS pixels. Each width was checked in both languages and themes. The assertions covered direction, primary heading, horizontal overflow, decoded images, ten atlas entries, and twelve vendor marks. |
| Visual review | Reviewed baseline and candidate at 390px and 1440px. The final inspection covered both languages and themes at those sizes and the staged 390px touch layout at DPR 3. |
| Interaction | Mobile menu, Escape and return focus, section hashes, Numoo dialog, hero states and inert links, reduced-motion behavior, atlas filters, lab scenarios, roving-tab navigation, zero-result search, MIRAA via search, Ctrl+K, language/theme persistence, and Pathy case deep link passed. |
| axe-core 4.11.1 | Zero violations in the configured WCAG 2/2.1 A/AA checks for 390px Arabic and 1440px English, each in both themes. Checks covered the homepage DOM with its content reveals shown. |
| Focused refinement | Verified scene transitions and removal of animated fragments, Real portrait visibility, clipboard URL, routes from Numoo and NCM to the correct demos, lab focus, and active navigation during scroll and at the bottom of the document. |
| Local runtime | Zero captured JS exceptions, error-level console messages or failed local responses in the final measured matrix. The professional summary links its English section and uses the same favicon. |
| Staged build | Verified underneath a path prefix using a 390px touch context at DPR 3. Menu search, case dialog, and relative link to the summary loaded. The allowlist excludes repository metadata, QA, and the standalone. |
| Standalone build | Opened a deep-linked case, checked the embedded SVG, switched locale, and opened the complete embedded professional summary. |
| JavaScript disabled | Arabic identity, selected-work text, static navigation and summary links stayed visible at 320px. JS-dependent controls were hidden in the no-script context. |
| External evidence | GitHub profile, Pathy repository, Pathy Pages, and Fas7a Blogger returned HTTP 200. LinkedIn’s indexed profile matched the supplied name and NCM context. Direct automated retrieval returned 999. A signed-in check remains appropriate for release. |

## Lighthouse lab measurements

Lighthouse 13.0.1 and Chrome for Testing 145, using the default Arabic dark homepage on the local Python HTTP server. The mobile and desktop presets are separate single runs. Scores are out of 100.

| Preset | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 93 | 100 | 100 | 100 | 2.66 s | 0.025 | 146 ms |
| Desktop | 99 | 100 | 100 | 100 | 0.86 s | 0.010 | 0 ms |

The first candidate’s diagnostic flagged late discovery of the hero background and oversized mobile imagery. The refinement also removed forced layout from the chart animation. The final lab figures apply to the polished revision. The final candidate uses a discoverable image, responsive WebP variants and local WOFF2 subsets. The mobile lab LCP remains above the 2.5 s target. TBT is a lab diagnostic. Field INP and the 75th percentile targets have no measurements yet.

## Reproduce

1. Start the local server using `README.md`.
2. Install `axe-core@4.11.1` in a scratch directory with `npm install --prefix qa-deps --no-audit --no-fund axe-core@4.11.1`. Use that scratch directory as the CLI working directory.
3. Run `npx --package @playwright/cli playwright-cli -s=atelier open http://127.0.0.1:8766/ --browser msedge`.
4. Run `npx --package @playwright/cli playwright-cli -s=atelier run-code --filename <absolute-path-to-qa/browser-check.js>`. It returns the matrix and rule findings.
5. Run the same CLI command with `qa/refinement-check.js` to reproduce the focused interaction checks.
6. For Lighthouse use version 13.0.1 with the mobile default and `--preset=desktop`. Local conditions and browser versions can change the scores.

Published-origin checks, actual iOS/Safari, comprehensive assistive-technology testing, and Core Web Vitals field data remain pending. See `HANDOFF_TO_SOL.md` for the release verification.
