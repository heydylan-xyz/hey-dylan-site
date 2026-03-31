---
title: 'Duolingo for Nintendo Switch'
description: "A concept exploring bringing language learning to the gaming handheld with prototype video."
date: 2022-04-15
tags: ['UX design', 'concept']
image: '/assets/images/gallery/duolingo-switch-cover.png'
og_image: '/assets/og-images/duolingo-switch-og.png'
og_image_alt: "Nintendo Switch mockup showing Duolingo on two Switch devices with game cartridge and case."
alt: "A high-fidelity mockup of two Nintendo Switch consoles running a Duolingo learning exercise interface in landscape orientation."
credit: Concept Design
gallery:
  - image: "/posts/2022/duolingo-nintendo-switch/duolingo-switch-exercise-matching.png"
    alt: "Nintendo Switch screen showing a character-matching exercise with vibrant Duolingo green UI and chunky, selectable word tiles."
    caption: "Matching Exercise UI"
  - image: "/posts/2022/duolingo-nintendo-switch/duolingo-switch-exercise-wrong.png"
    alt: "The Switch interface showing red 'Incorrect' feedback at the bottom, indicating an incorrect answer."
    caption: "Error State Feedback"
  - image: "/posts/2022/duolingo-nintendo-switch/duolingo-switch-exercise-dialog.png"
    alt: "A dialogue prompt exercise in a landscape-optimized layout with large, readable text and icons and affirmative green colors indicating a correct answer and a button to Continue."
    caption: "Dialogue Prompt Layout"
  - image: "/posts/2022/duolingo-nintendo-switch/duolingo-switch-exercise-listening.png"
    alt: "A listening exercise screen featuring a large audio button icon and tiles available to complete the sentence."
    caption: "Listening Exercise UI"
---

*This project was featured in [Bootcamp on Medium](https://medium.com/design-bootcamp/what-if-duolingo-was-available-for-nintendo-switch-56a2dfc5bfa3).*

## Overview

What if Duolingo was available for Nintendo Switch? This concept study explores the potential for language learning on the console, navigating the logic puzzle of porting a mobile-first, portrait-oriented experience to a landscape-fixed gaming handheld.

{% imageKeys {
  "src": "/posts/2022/duolingo-nintendo-switch/duolingo-switch-devices.png",
  "alt": "Mockup featuring a trio of Nintendo Switch consoles each displaying a different section of the Duolingo interface including a translation exercise, a splash screen, and available languages the user can learn.",
  "caption": "Showcasing various interface states in a multi-device layout.",
  "loading": "lazy"
} %}

## Solving for Hardware Constraints

### Landscape Orientation

The most immediate challenge was the 16:9 fixed orientation. Duolingo’s mobile app relies on vertical scrolling; on the Switch, I shifted to a paginated, horizontal flow. This allowed for larger character assets and clearer visual hierarchy on Switch displays.

{% imageKeys {
  "src": "/posts/2022/duolingo-nintendo-switch/duolingo-switch-frames.png",
  "alt": "An overview of the Adobe XD workspace showing the organized artboards and logic for various exercise flows.",
  "caption": "System setup and exercise flow architecture in Adobe XD.",
  "loading": "lazy"
} %}

### Input Logic: Touch vs. Controller

While the Switch has a touchscreen, the experience must be fully navigable via Joy-Cons. I mapped the D-pad and other buttons, includng the L and R shoulder buttons to appropriate inputs, requiring a shift in UX copy from "Tap" to "Select."

{% imageKeys {
  "src": "/posts/2022/duolingo-nintendo-switch/duolingo-switch-controller.png",
  "alt": "Detailed view of Joy-Con button mapping, showing the D-pad used for navigation and the A-button used for confirmation.",
  "caption": "Mapping tactile controls to Duolingo's interaction patterns.",
  "loading": "lazy"
} %}

## Brand & Ecosystem Integration

I leveraged Duolingo Brand Resources alongside Nintendo’s Developer Portal guidelines to ensure the design felt true to Duolingo's engaging design while fitting in the world of Nintendo.

{% imageKeys {
  "src": "/posts/2022/duolingo-nintendo-switch/duolingo-switch-packaging.png",
  "alt": "Concept for a physical Nintendo Switch game box and cartridge featuring Duolingo branding and a Nintendo Switch device.",
  "caption": "Concept for physical retail packaging and game media.",
  "loading": "lazy"
} %}

## Product Considerations

- The Microphone Challenge: Unlike mobile devices, the Switch lacks a built-in microphone in handheld mode (outside of specific headsets). For this concept, speaking exercises would be toggled off by default or require the mobile app as a secondary "mic" controller. *(Update: with the new Switch 2, this is not an issue!)*
- Content Syncing: Leveraging Nintendo's cloud save infrastructure and Duolingo's servers to ensure progress on the console mirrors the user's mobile streak.

{% imageKeys {
  "src": "/posts/2022/duolingo-nintendo-switch/duolingo-switch-prototype.png",
  "alt": "A high-fidelity mockup of the final Duolingo UI running on a Nintendo Switch console with connectors mapping interactions between screens.",
  "caption": "The final high-fidelity concept.",
  "loading": "lazy"
} %}

## Prototype Video

{% video "duolingo-demo-compressed.mp4", "duolingo-demo-poster.png", "App interface navigation demo", true, true %}

## Reflection

This project challenged me to think beyond screen design and consider cross-platform hardware constraints, alternative input peripherals, and brand consistency across vastly different form factors.

<style>
  /* Target gallery container on this page */
  .gallery {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  /* Aspect ratio and cropping */
  .gallery button img {
    aspect-ratio: auto !important;
    object-fit: contain !important;
  }
</style>

{% include "partials/gallery.njk" %}

{% imageKeys {
  "src": "/posts/2022/duolingo-nintendo-switch/duolingo-me.png",
  "alt": "An avatar of Dylan and his dog with a Nintendo Switch in the art style of Duolingo characters.",
  "loading": "lazy"
} %}

### Resources & Credits

All designs and vector files were created by following the Duolingo design style guides and leveraging the following resources: [Nintendo Switch Game Box Art Template](https://www.deviantart.com/the-brunette-amitie/art/Official-Nintendo-Switch-Template-I-believe-657227093), [Nintendo Switch Game Cartridge Template](https://www.deviantart.com/jgamerxone/art/Switch-Cartridge-Template-742853271), and [Nintendo Switch UI Kit](https://freebies.fluxes.com/nintendo-switch-ui-kit/).
