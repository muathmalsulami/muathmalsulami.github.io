# ATELIER 09 design system

| Role | Dark | Light |
| --- | --- | --- |
| Background | `#0d091c` | `#f9f4ef` |
| Panel | `#171129` | `#fffbf8` |
| Main ink | `#fcf6f4` | `#28182e` |
| Supporting ink | `#aea3bf` | `#695b78` |
| Labels | `#a397b3` | `#665570` |
| Primary accent | Peach `#ffc597` | Plum-rose `#934d64` |
| Secondary accent | Lavender `#b895f1` | Plum `#6a4096` |

Use the semantic properties in CSS for text, surfaces, borders, and state. The portrait scene and synthetic console use dark treatments across themes. Mint is reserved for completed statuses and signal feedback. The lead button uses peach through lavender with dark ink. The provisional M is rendered as the supplied vector mark.

## Type, spacing, and grid

- Arabic display and body use IBM Plex Sans Arabic. English display uses Instrument Serif and English body uses Plus Jakarta Sans. Each family has a system fallback. Arabic body leading allows room for joined glyphs and diacritics. English display sizes accommodate a compact two-line name on the desktop.
- Body and section introductions use approximately 0.88–1rem. Hero display uses fluid `clamp()` sizing. Buttons and navigation use shorter labels to preserve readability at 320px.
- The content grid tops out at 1368px. Spacing moves from 8–16px within controls to 24–80px between related elements. Primary surfaces use an 18px radius, with shallow dividers for secondary content. Related controls share the same scale.
- At 720px and below, text leads into the scene in a single column. The mobile menu begins at 920px. The atlas moves from three columns to two, then one. Logical box properties and the document’s `dir` control flow. Hero artwork and the synthetic console keep their own reading direction.

## Behavior

- Real reveals the Makkah/about route, Pixel presents the approved double portrait, and Proof links to selected cases. The focal point stays on the VR portrait and pixel character.
- Controls show hover, keyboard focus, and pressed/selected states. Inactive scene panels are inert and hidden from accessibility APIs. Native dialogs contain focus and return it on dismissal. Search provides counts, an empty state, active suggestion feedback, and keyboard navigation. The lab and method tabs support arrow keys, Home, and End.
- Micro-interactions use about 180ms. Portrait transitions use 420ms with `cubic-bezier(.2,.75,.24,1)`. Motion uses a single opening line fade, restrained fine-pointer parallax, and a short event-driven pixel transition. Reduced-motion mode removes those effects. No live loading indicator is necessary for synchronous local content.
- Vendor marks are static SVGs presented on neutral tiles. Concept icons use the same footprint and a separate visual treatment. Avoid scaling marks independently of their aspect ratio. See [brand sources](BRAND_ASSETS.md).
