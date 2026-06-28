# DearU Landing Page - Project Rules & Guidelines

This file contains the core concept, vibe, typography, and color palette rules for the DearU Landing Page project. Always refer to this document before making design changes.

## Concept & Vibe
- **Theme:** "Disney's Beauty and the Beast" meets modern digital magic.
- **Core Concept:** A deeply immersive, cinematic fairytale experience. It should not feel like a standard "web 2.0" SaaS landing page. It should feel like opening an enchanted, interactive storybook.
- **Atmosphere:** Mysterious, deeply romantic, highly magical, and opulent.
- **Crucial Design Rule:** Do **NOT** use aggressive CSS filters (`saturate`, `brightness`, `contrast`, `hue-rotate`) on the raw image assets. The AI-generated assets are already highly detailed and colored. Extreme filters will cause color clipping (blinding neon blobs) and destroy the artwork. Let the natural beauty of the assets shine, and use CSS primarily for layout, positioning, and subtle drop-shadows.

## Color Palette
The color scheme is designed to evoke a magical midnight scene with intense, glowing magical elements.

| Swatch | Role | Hex Code | Description & Usage |
| :---: | :--- | :--- | :--- |
| !['#090014'](https://via.placeholder.com/20/090014/090014.png) | **Background Base** | `#090014` | **Deep Night Purple.** Used for the deepest background layers, page `body` backgrounds, and extreme depth in parallax sections to create a sense of midnight mystery. |
| !['#240036'](https://via.placeholder.com/20/240036/240036.png) | **Background Mid** | `#240036` | **Rich Royal Violet.** Used alongside `#090014` in radial and linear gradients to create volume, depth, and a seamless transition from pitch black to ambient magical lighting. |
| !['#ff007f'](https://via.placeholder.com/20/ff007f/ff007f.png) | **Primary Magic Glow** | `#ff007f` | **Neon Magenta.** The most crucial color. Used exclusively for intense magical accents, glowing drop-shadows on key assets (like the rose or mirror), and highly active UI elements (hover states on CTA buttons). |
| !['#99004d'](https://via.placeholder.com/20/99004d/99004d.png) | **Deep Magic Shadow** | `#99004d` | **Deep Ruby/Magenta.** Used for the inner core of dark glows or the base gradients of buttons before they transition to the bright neon magenta. |
| !['#ff88cc'](https://via.placeholder.com/20/ff88cc/ff88cc.png) | **Secondary Glow** | `#ff88cc` | **Soft Fairytale Pink.** Used for secondary highlights, glowing text underlines in the navbar, and subtitles. It provides a softer contrast than the harsh neon magenta. |
| !['#ffe6f2'](https://via.placeholder.com/20/ffe6f2/ffe6f2.png) | **Primary Text** | `#ffe6f2` | **Soft Pearl Pink.** Almost white but with a subtle pink tint. Used for main readable text (paragraphs, links) to ensure perfect legibility against the extremely dark purple backgrounds while maintaining the thematic warmth. |

## Typography
Fonts must evoke a sense of royalty, classic literature, and elegance.

- **Primary Heading Font (Serif):** `Playfair Display` (or alternatives like `Cinzel Decorative`, `Cormorant Garamond`). 
  - *Usage:* Used for all massive titles, magical keywords, and elegant quotes. Should often be used in `italic` to mimic elegant handwriting or storybook styling.
- **Body Font (Sans-Serif):** `Inter` (or `Roboto`).
  - *Usage:* Used for standard paragraphs, navigation links, and UI elements where extreme legibility is required.

## Layout Rules
- **Cinematic Approach:** Favor massive, full-screen elements with deep parallax (using `Lenis` smooth scrolling). 
- **Legibility First:** Always ensure text is legible. If placing text over a complex image, use a subtle radial gradient (e.g., `#090014/40` blur) behind the text rather than ruining the whole image with a brightness filter.
