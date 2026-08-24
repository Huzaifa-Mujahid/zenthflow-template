---
name: Zoverex Core
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffffff'
  on-tertiary: '#5d1900'
  tertiary-container: '#ffdbd0'
  on-tertiary-container: '#b43b07'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832700'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  obsidian-black: '#000000'
  chrome-bright: '#FFFFFF'
  chrome-dim: '#A8A8A8'
  void-gray: '#1A1A1A'
  signal-orange: '#E8602E'
typography:
  display-2xl:
    fontFamily: Space Grotesk
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 120%
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 120%
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 130%
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system embodies a high-octane, premium tech aesthetic inspired by AAA gaming interfaces and futuristic industrial design. It is built for a high-end tech services audience that values precision, power, and cutting-edge innovation.

The design style is a fusion of **Glassmorphism** and **High-Contrast Minimalism**. It utilizes deep obsidian backgrounds to create an infinite canvas, allowing metallic accents and "chrome-lit" elements to feel like high-fidelity hardware components. The visual narrative is one of "Technical Luxury"—where every interface element feels engineered rather than just designed.

Key stylistic pillars include:
- **Immersive Depth:** Use of backdrop blurs and translucent layers to simulate a multi-layered holographic display.
- **Chrome Accents:** Gradient strokes and glows that mimic the reflection of light on polished metal.
- **Aggressive Typography:** Over-sized, geometric headlines that command attention and provide a structural backbone to the layout.

## Colors

The palette is anchored in a true-black "Obsidian" environment to maximize contrast and visual impact. 

- **Primary (Chrome):** A metallic range from `#FFFFFF` to `#A8A8A8`. This is not used as a solid fill but as a dynamic gradient for borders, icons, and high-priority text.
- **Secondary (Steel):** Muted grays used for structural elements and secondary information.
- **Tertiary (Signal):** A high-energy orange derived from the reference, used sparingly for critical calls to action or status indicators to provide a "warning/alert" tech vibe.
- **Surface:** The primary background is `#000000` for deep immersion, while secondary surfaces use `#0A0A0A` with a subtle glass blur.

## Typography

The typography strategy leverages high-contrast weights and styles to create a sense of technical authority. 

- **Headlines:** Use **Space Grotesk** (as a high-quality geometric alternative to Rajdhani) for its aggressive, wide stance and technical terminals. Display sizes should be set with tight tracking to create a "blocky," architectural feel.
- **Body:** **Manrope** provides a modern, legible contrast to the sharp headlines, ensuring that long-form technical data remains readable.
- **Monospaced Accents:** **JetBrains Mono** is used for labels, metadata, and "system readouts" to reinforce the developer-centric, tech-heavy aesthetic.

## Layout & Spacing

This design system uses a **Fluid-Fixed Hybrid Grid**. Content is housed in a 12-column grid with a maximum width of 1440px to maintain control over the "cinematic" composition.

- **Vertical Rhythm:** Large section gaps (120px+) are encouraged to create the "immersive dark sections" characteristic of high-end studio portfolios. 
- **Negative Space:** Whitespace (or "blackspace") is used aggressively to separate conceptual blocks, allowing the chrome-bordered cards to "float" within the void.
- **Mobile Reflow:** On mobile, margins reduce to 20px, and large display type scales aggressively to ensure legibility without losing the "big type" impact.

## Elevation & Depth

Depth is not communicated through traditional shadows, but through **light emission and transparency**.

- **Glassmorphism:** Secondary surfaces use a background blur (minimum 20px) and a semi-transparent fill (`rgba(255, 255, 255, 0.03)`).
- **Chrome Borders:** Elevation is signaled by a 1px border gradient. Higher elevation elements feature a "top-down" light source, where the top and left borders are brighter (#FFFFFF) and the bottom/right fade into the background.
- **Inner Glow:** Interactive components may use a subtle inner box-shadow (0px 0px 15px rgba(255, 255, 255, 0.1)) to simulate a screen glowing from within.

## Shapes

To maintain an industrial, "machined" aesthetic, the design system utilizes **Sharp (0px)** corners for most structural elements. This reinforces the high-end tech vibe and differentiates the brand from softer, consumer-grade SaaS products.

For specific interactive elements where "softness" is required for usability (like text inputs), use a very minimal 2px radius, but the default preference is always sharp, 90-degree angles.

## Components

- **Buttons:** Primary buttons feature a solid "Chrome" gradient fill with black text. Secondary buttons are "Ghost" style with a 1px silver border and a hover state that triggers a subtle white outer glow.
- **Glass Cards:** Containers with 0px radius, 20px backdrop blur, and a 1px linear gradient stroke (`#FFFFFF` to `transparent`).
- **Navigation:** A fixed top bar with a heavy backdrop blur (`saturate(180%) blur(20px)`). Links use the `label-caps` typography style.
- **Input Fields:** Bottom-border only, using the metallic gradient. Focus state triggers a subtle vertical "light bar" on the left edge.
- **Chips/Badges:** Small, monospaced text blocks with a solid `void-gray` background and `chrome-dim` text, mimicking technical hardware labels.
- **Status Indicators:** Small circular pips using `signal-orange` with a pulse animation for "Active" or "Live" services.