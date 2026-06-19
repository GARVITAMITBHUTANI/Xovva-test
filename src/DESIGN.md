---
name: Radiant Clinical Luxury
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#524438'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#847466'
  outline-variant: '#d6c3b3'
  surface-tint: '#885206'
  primary: '#885206'
  on-primary: '#ffffff'
  primary-container: '#d28f44'
  on-primary-container: '#4f2c00'
  inverse-primary: '#ffb86d'
  secondary: '#81533f'
  on-secondary: '#ffffff'
  secondary-container: '#fdc1a8'
  on-secondary-container: '#794d39'
  tertiary: '#635d59'
  on-tertiary: '#ffffff'
  tertiary-container: '#a49c97'
  on-tertiary-container: '#393430'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#ffb86d'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#683c00'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#f4b9a0'
  on-secondary-fixed: '#321304'
  on-secondary-fixed-variant: '#653c2a'
  tertiary-fixed: '#eae1db'
  tertiary-fixed-dim: '#cec5bf'
  on-tertiary-fixed: '#1f1b17'
  on-tertiary-fixed-variant: '#4b4642'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  headline-display:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  container-max-width: 1280px
---

## Brand & Style

This design system embodies the intersection of scientific precision and high-end aesthetic wellness. The brand personality is radiant, trustworthy, and sophisticated, targeting a discerning audience that values both clinical efficacy and a luxurious sensory experience. 

The visual style is **Modern Minimalism with Radiant Glassmorphism**. It utilizes expansive white space to denote purity and clinical clarity, while introducing warmth through translucent layers and soft, glowing background blurs that mimic the way light passes through high-quality skincare serums. The interface should feel "lit from within," evoking the emotional response of healthy, glowing skin. All elements are organized with a rigorous geometric logic to reinforce the "scientific" nature of the brand, softened by a warm, approachable color palette.

## Colors

The color palette is derived from the natural amber tones of active ingredients and the soft hues of healthy skin. 

- **Primary (Glowing Amber):** Used for primary calls to action, active states, and highlighting key clinical data. It represents the "gold standard" of the product's efficacy.
- **Secondary (Soft Peach):** Used for background accents, secondary buttons, and decorative elements to bring warmth and approachability to the UI.
- **Tertiary (Ivory Glow):** A tinted white used for surface containers and background sections to avoid the harshness of pure #FFFFFF, maintaining a premium "paper-like" quality.
- **Neutral (Deep Cocoa):** A high-contrast dark tone used for typography and structural borders, providing the necessary "clinical" weight and legibility.

Color application should lean heavily into the tertiary and white tones, using the primary and secondary colors as "glow" points or highlights.

## Typography

The typography strategy pairs the editorial elegance of a high-contrast serif with the functional clarity of a modern sans-serif.

**Bodoni Moda** is the primary display face. It should be used for product names, section headings, and quotes. Its vertical stress and sharp serifs convey a sense of heritage and precision. For large display sizes, use tighter letter spacing to enhance the "luxury editorial" feel.

**Manrope** serves as the workhorse for body text, technical specifications, and labels. Its clean, open apertures ensure legibility across all screen sizes. Labels and metadata should often use a slightly heavier weight and uppercase styling to denote "clinical data" or "ingredient lists," creating a clear hierarchy between the romantic headlines and the practical information.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile. 

- **Desktop:** A 12-column grid with a maximum container width of 1280px. Use generous margins (80px) and wide gutters (24px) to allow the content to breathe, emphasizing a premium, uncluttered experience.
- **Mobile:** A 4-column fluid grid with 20px side margins. 

Spacing should be used to create distinct "rhythm blocks." Larger vertical gaps are encouraged between major sections to facilitate a relaxed, discovery-based browsing experience. Elements should often be centered or use asymmetrical offsets to mimic luxury magazine layouts, breaking the rigidity of standard SaaS grids.

## Elevation & Depth

Hierarchy is established through **Tonal Layering and Glassmorphism** rather than traditional heavy shadows.

- **Surface Tiers:** The base background is the Tertiary Ivory. Content cards use pure white with a very subtle, diffused ambient shadow (Color: Primary-Dark, Opacity: 5%, Blur: 20px).
- **Glassmorphism:** Overlays, navigation bars, and "clinical detail" callouts use a background blur (15px to 25px) with a semi-transparent white fill (80% opacity). This creates a sense of depth and translucency, echoing the liquid properties of the product.
- **Outlines:** Use ultra-thin (1px) borders in a slightly darker shade of the background color to define boundaries without adding visual "noise."

## Shapes

The shape language balances organic softness with geometric order. 

A **Rounded (0.5rem)** base is applied to standard UI elements like input fields and small buttons. This ensures the interface feels approachable and "human." Larger containers, such as product cards and imagery, should utilize **rounded-lg (1rem)** or **rounded-xl (1.5rem)** to create a softer, more inviting frame for photography.

Interactive elements like "Shop Now" or "Add to Cart" may occasionally use a full pill-shape (3) to stand out as tactile, touch-friendly objects amidst the more structured grid.

## Components

### Buttons
- **Primary:** Solid Primary Amber with white or deep neutral text. High contrast, no border.
- **Secondary:** Transparent background with a 1px Neutral border and Serif typography for a more "boutique" feel.
- **Ghost:** Tertiary background with Primary text, used for low-priority actions.

### Input Fields
- Use a "Minimalist Clinical" style: A 1px bottom border only, or a very light Tertiary background with a 0.5rem radius.
- Labels use **label-lg** (uppercase, small) positioned above the field.

### Cards
- Pure white background or Glassmorphic blur.
- Subtle 1px border (#F4B9A0 at 20% opacity).
- Ample internal padding (minimum 32px) to ensure product photography is the focus.

### Chips & Badges
- Used for "Ingredients" or "Clinical Results." 
- Small, uppercase labels with a Soft Peach (Secondary) background at 15% opacity to denote a "soft highlight."

### Additional Components
- **Ingredient Detail Drawers:** Use high-blur glassmorphism for side panels that slide in to provide technical data without losing the context of the product page.
- **Radiance Progress Bars:** Thin, elegant lines using the Primary Amber gradient to show clinical improvement metrics.