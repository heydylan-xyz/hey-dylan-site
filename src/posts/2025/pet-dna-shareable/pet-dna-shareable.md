---
title: 'Dynamic Shareable Graphic'
description: "Custom dog breed results graphic with sharing interface for Ancestry's Know Your Pet DNA."
date: 2025-10-01
tags: ['UX design', 'Ancestry']
image: '/assets/images/gallery/pet-dna-shareable-cover.png'
og_image: '/assets/og-images/pet-dna-shareable-og.png'
og_image_alt: "A UI mockup of a pet DNA share modal on a desktop dashboard, featuring a preview of a dog's DNA results graphic."
alt: "Desktop view of the pet DNA share modal, featuring social-ready graphics for a dog's breed results."
credit: Ancestry / Know Your Pet DNA
gallery:
  - image: "/posts/2025/pet-dna-shareable/pet-dna-shareable-graphic-1.png"
    alt: "Light theme graphic with user-uploaded dog photo."
    caption: "Photo version"
  - image: "/posts/2025/pet-dna-shareable/pet-dna-shareable-graphic-2.png"
    alt: "Light theme graphic with icon fallback."
    caption: "Fallback version"
---

## Overview

Know Your Pet DNA is a dog DNA testing platform by Ancestry. This feature enables organic social reach by generating personalized results graphics directly from the user dashboard. The system adapts to varying levels of user-provided content while maintaining brand consistency.

## Key Objectives

- Drive organic social engagement via user-generated content
- Simplify the sharing experience within the logged-in dashboard
- Generate dynamic graphics reflecting unique DNA results

## The Solution

### Dynamic Result Graphics

The system generates personalized images using an SVG donut chart to visualize breed percentages. The layout prioritizes the primary breed and pet name to ensure the most relevant data is prominent.

### Dual Image States

The design scales based on data availability. If a user has provided a photo, it becomes the centerpiece; otherwise, the system serves an icon-based fallback that maintains the same visual hierarchy.

{% imageKeys {
  "src": "/posts/2025/pet-dna-shareable/pet-dna-shareable-graphic-1.png",
  "alt": "Results graphic layout featuring a user-uploaded pet photo.",
  "caption": "Photo-rich state",
  "loading": "lazy"
} %}

{% imageKeys {
  "src": "/posts/2025/pet-dna-shareable/pet-dna-shareable-graphic-2.png",
  "alt": "Results graphic layout featuring a dog icon fallback for pets without photos.",
  "caption": "Icon fallback state",
  "loading": "lazy"
} %}

### Seamless Sharing Flow

To reduce friction, the modal includes a dynamic, pre-written caption with the @knowyourpet handle and specific breed breakdown. Users can save the asset directly or share to social platforms with one click.

### Color Theming & UI Persistence

The system employs two colorways to ensure graphics fit the branded environments and user preferences.

{% imageKeys {
  "src": "/posts/2025/pet-dna-shareable/pet-dna-shareable-dark.png",
  "alt": "Share modal in dark theme with emphasis on deep green colors.",
  "caption": "Dark theme application",
  "loading": "lazy"
} %}

{% imageKeys {
  "src": "/posts/2025/pet-dna-shareable/pet-dna-shareable-light.png",
  "alt": "Share modal in light theme with bright white background.",
  "caption": "Light theme application",
  "loading": "lazy"
} %}
