# Design decisions and source review

## Source and interaction map

The baseline starts with `index.html` and a three-stylesheet cascade. The two deferred JavaScript files control the page’s language and theme, content rendering, tab filters, lab, portrait state, and command dialog. The professional summary is a separate printable page. `build.py` produces the standalone distribution by inlining CSS, JS and encoded visuals. The full source archive and its original QA images were preserved. The editable baseline is the parent commit in this local repository.

Observed defects included a focusable Proof link under a transparent overlay, weak semantics and narrow coverage in command search, all atlas artwork fetched eagerly, duplicated hero rules across breakpoints, and an English-reading mismatch when decorative image descriptions stayed Arabic. Baseline geometry at 390px and 1440px showed no document overflow in either language. The original visual QA files were used as historical comparison evidence only.

## Editorial assessment of the ATELIER 09 baseline

Scores are editorial ratings on a 0–100 scale. They reflect the baseline screen review and source audit.

| Area | Score | Evidence and response |
| --- | ---: | --- |
| First impression | 76 | Memorable art, with introductory labels competing for attention. Reduced copy and moved proof links forward. |
| Identity | 88 | Makkah, the VR portrait and pixel character were distinctive. Rebalanced the same assets. |
| Artwork versus surrounding site | 71 | Portrait composition was stronger than the repeated card sections. Added visual hierarchy and simpler section labels. |
| Consistency, surfaces and spacing | 68 | Several CSS layers changed the same hero dimensions and component styles. Replaced the hero rules and aligned treatment of panels. |
| Arabic and English typography | 73 | Both directions worked. English labels and Arabic mixed-direction details needed clearer roles. |
| Component repetition | 62 | The atlas repeated the three lead cases and all projects used similar proportions. Consolidated leads and compacted exploratory cards. |
| Theme and contrast | 69 | The palette was distinctive but quiet text was hard to read in light mode. Tuned semantic label and accent colors. |
| Image composition and sharpness | 83 | WebP portrait assets and brand SVGs were efficient. Refined portrait scale, crops and scene depth. |
| Motion quality and responsiveness | 67 | Continuous bridge, decorative spin and method loops diluted scene transitions. Event-driven effects and quiet rendering now dominate. |
| Professional credibility | 74 | Several project states were clear, but completed work and research appeared in the same atlas grid. The selected work section now owns completed case studies. |
| Project narrative | 73 | Case dialogs identified contributions and limits with fewer cues for goal and next step. Added those fields to the lead cases. |
| Skills and evidence | 82 | Authentic vendor art and useful context were present. Removed unused lookalike vectors and localized skill category labels. |
| Mobile composition | 71 | The old mobile hero displayed the art first and sent controls and context lower. The opening now includes the recruiter actions alongside the identity. |
| Navigation and interaction | 65 | Search covered three projects, and mobile lacked a search button. Search opens on mobile and indexes the full catalogue. |
| Semantics and accessibility | 61 | Native dialogs were a solid start. Hidden focus, ARIA relationships, localization and roving focus needed fixes. |
| CSS/JS maintenance | 60 | Layout overrides accumulated, many source rules and data records were packed into long lines, and the build had implicit assumptions. Reorganized affected styles and formatted source. |
| Loading and asset efficiency | 72 | Hero assets were compact, but below-fold artwork requested eagerly. Deferred atlas artwork, reduced duplicate icon assets, and added an explicit deployment manifest. |

## Benchmarks

- **Bruno Simon.** A single world and recognizable interactions make movement express expertise. His site documents desktop, touch and quality controls. Applied one recognizable hero interaction and a straightforward route to work. Driving, WebGL startup, and hidden discovery would slow down professional review. [Official portfolio](https://bruno-simon.com/) · [Awwwards entry](https://www.awwwards.com/sites/bruno-simon-portfolio) · [CSS Design Awards entry](https://cssdesignawards.com/sites/bruno-simon-portfolio/36090/) · [Source repository](https://github.com/brunosimon/folio-2019)
- **Arnaud Rocca and Stas Bondar.** Their write-ups connect motion to a consistent visual system and discuss the implementation tradeoffs. Adopted common easing and a readable static page. WebGL, fixed scroll sequences and timeline dependencies were unnecessary for this composition. [Rocca on Codrops](https://tympanus.net/codrops/2026/03/31/arnaud-roccas-portfolio-from-a-gsap-powered-motion-system-to-fluid-webgl/) · [Bondar on Codrops](https://tympanus.net/codrops/2025/03/25/stas-bondar-25-the-code-techniques-behind-a-next-level-portfolio/)
- **Fauve Hanssens.** Published case-study text links a personal visual system to a documented process. Applied parallel case headings and evidence links so readers can understand the work quickly. [Behance case study](https://www.behance.net/gallery/241444145/My-Digital-Home-Personal-Portfolio-Case-Study)
- **ScrollTrigger and GSAP community references.** The tutorial index shows pinned stories, while the creator’s LinkedIn post shows interest in implementation details. A short selectable lab serves those details and keeps normal scroll, touch gestures and reduced-motion behavior. Access to full YouTube and Behance pages was limited during review. [Video tutorial](https://www.youtube.com/watch?v=WpNYfYKLk_U) · [Creator’s LinkedIn post](https://www.linkedin.com/posts/roman-jean-elie-91bb58200_im-excited-to-share-that-my-latest-portfolio-activity-7383763056721371136-mAby)
- **Usability and performance.** Dialog focus and keyboard behavior follow the WAI pattern. The search field exposes a current option. Lab measures and eventual field data have different scope. [WAI modal dialogs](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) · [WAI combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) · [Web Vitals](https://web.dev/articles/vitals)

## Iterations

1. Preserved the baseline and used Arabic/English Edge viewport reviews at 390px and 1440px to identify crowded hero copy, visual repetition and navigation gaps.
2. Rebuilt hero layout and interactions using the supplied assets. The next render revealed that the English buttons wrapped at 390px and the portrait had a visible left seam on desktop.
3. Shortened English copy, paired hero buttons on mobile, masked the portrait edge, then tested the full viewport matrix, keyboard flows, and build artifacts. See `QUALITY_REPORT.md` for observed outcomes.
