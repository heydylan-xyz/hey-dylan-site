---
title: 'Account Settings Redesign'
description: "Redesigning a fragmented settings experience for Ancestry's Know Your Pet DNA users."
date: 2025-11-01
tags: ['UX design', 'Ancestry','case study']
image: '/assets/images/gallery/ancestry-account-settings-cover.png'
og_image: '/assets/og-images/ancestry-account-settings-og.png'
og_image_alt: "Desktop and mobile redesign of pet DNA Account Settings interface."
alt: "Desktop and mobile UI mockups of the redesigned account settings page, showcasing a unified layout for Know Your Pet DNA by Ancestry."
credit: Ancestry / Know Your Pet DNA
gallery:
  - image: "/posts/2025/pet-dna-account-settings/account-settings-mob-1.png"
    alt: "Key pet DNA settings like display name, SMS communications opt-in, marketing opt-in with disclaimer text, and measurement system preference."
    caption: "Pet DNA settings"
  - image: "/posts/2025/pet-dna-account-settings/account-settings-mob-2.png"
    alt: "Mobile view of the account profile section, surfacing connected Ancestry account details like name and email alongside pet-specific settings."
    caption: "Surfaced Ancestry account data"
  - image: "/posts/2025/pet-dna-account-settings/account-settings-mob-3.png"
    alt: "Mobile view of the 'Manage Pets' section, showing pet cards with avatars, roles, and quick-action buttons for data management."
    caption: "Centralized pet management"
---

## Overview

Know Your Pet DNA is a dog DNA testing platform by Ancestry. The Account Settings redesign was driven by the need to resolve a fragmented user experience before integrating a new role-based permissions system. Discovery revealed that the existing interface forced users between two separate systems, leading to high support volume and user confusion.

### My Role

As Content Designer, I led this UX design solo following a team transition. My responsibilities included competitive research, collaboration with Member Services, interface design in Figma, and establishing design system documentation.

## Exploration & Discovery

The primary friction point was a "Two Systems" problem: core account fields were hidden behind a redirect to Ancestry’s main site, leaving users unclear on why their information appeared non-editable on the Know Your Pet DNA platform. 

{% imageKeys {
  "src": "/posts/2025/pet-dna-account-settings/old-settings-dsk.png",
  "alt": "The legacy settings page featuring unclear toggles and a 'Two Systems' problem where core account fields were hidden behind a redirect button.",
  "caption": "Legacy fragmented interface",
  "loading": "lazy"
} %}

{% imageKeys {
  "src": "/posts/2025/pet-dna-account-settings/ancestry-site-settings.png",
  "alt": "The external Ancestry settings interface, illustrating the visual and structural gap users experienced managing inherited account details.",
  "caption": "External Ancestry settings",
  "loading": "lazy"
} %}

## Design Process

### Designing Within Technical Constraints

While technical constraints prevented making Ancestry-managed fields editable directly on the Pet DNA site, I restructured the page to surface this data for immediate context. This solution provided clarity for users and Member Services alike, ensuring that even when a redirect was necessary, the user understood exactly which account was connected and why.

### Clarifying Ambiguity

I replaced undefined toggles with explicit, descriptive labels and inline helper text. This was particularly critical for messaging controls, where users previously lacked context on what specific notifications they were opting into.

{% imageKeys {
  "src": "/posts/2025/pet-dna-account-settings/messages-settings.png",
  "alt": "Desktop and mobile view of redesigned messaging settings section with explicit labels for community matches and per-pet notification controls.",
  "caption": "Clarified messaging logic",
  "loading": "lazy"
} %}

### Safeguarding Destructive Actions

To prevent accidental data loss, I redesigned the deletion flow to introduce intentional friction. A two-step confirmation process uses high-contrast styling and explicit warnings to ensure users understand the permanent consequences of the action.

{% imageKeys {
  "src": "/posts/2025/pet-dna-account-settings/delete-test.png",
  "alt": "A multi-step destructive action flow for deleting pet data, using high-contrast red styling and escalating warnings about the permanence of this action.",
  "caption": "Intentional friction in destructive flows",
  "loading": "lazy"
} %}

## The Result

The final interface consolidates a scattered experience into a single, organized page. The design centers on pet management, providing immediate access to core functions like data downloads and role assignments that were previously obscured.

{% imageKeys {
  "src": "/posts/2025/pet-dna-account-settings/account-settings-laptop.png",
  "alt": "A laptop mockup of the final settings interface, showing the logical grouping of pet settings and management functions in a single-page view.",
  "caption": "The unified settings experience",
  "loading": "lazy"
} %}

## Impact & Outcomes

Member Services confirmed the redesign would substantially reduce support burden by making account functions discoverable and self-explanatory. The design directly addressed common support triggers documented over two years, creating a unified interface built on validated user needs.

<style>
  .gallery {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .gallery button img {
    aspect-ratio: auto !important;
    object-fit: contain !important;
  }
</style>

{% include "partials/gallery.njk" %}
