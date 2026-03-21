---
title: 'Roles & Permissions Feature'
description: "Designing a scalable account sharing and access model for Ancestry's Know Your Pet DNA."
date: 2025-11-01
tags: ['UX design', 'Ancestry','case study']
image: '/assets/images/gallery/ancestry-roles-permissions-cover.png'
og_image: '/assets/og-images/ancestry-roles-permissions-og.png'
og_image_alt: "Comparison of the Roles & Permissions dashboard across desktop and mobile, highlighting the pet-level management."
alt: "Desktop and mobile mockups of the Roles & Permissions dashboard, highlighting the 'Winston' profile management view and invitation status tabs."
credit: Ancestry / Know Your Pet DNA
gallery:
  - image: "/posts/2025/pet-dna-roles-permissions/roles-permissions-mob-1.png"
    alt: "A pet-level view of Your pets where users can manage who has access to a dog named Winston."
    caption: "Pet-level view of Accepted and Pending roles"
  - image: "/posts/2025/pet-dna-roles-permissions/roles-permissions-mob-3.png"
    alt: "View showing multiple dogs shared and accepted by the user, each with different permissions levels and an icon indicating a pending invitation."
    caption: "Multi-pet management view"
  - image: "/posts/2025/pet-dna-roles-permissions/roles-permissions-mob-4.png"
    alt: "A view showing the human users with access to the dog named Winston and their associated roles, with options to remove or modify their permissions."
    caption: "Invited external collaborators"
  - image: "/posts/2025/pet-dna-roles-permissions/roles-permissions-mob-5.png"
    alt: "View showing access to a dog named Pickles that the user had accepted and who invited them, with the option to remove it."
    caption: "Accepted incoming 'Caretaker' role"
---

## Overview

Know Your Pet DNA is a dog DNA testing platform by Ancestry. This project addressed a core capability gap: providing a secure way for users to share results with family members or veterinary professionals. I led the design of a role-based access framework to move the product from a single-user model toward a collaborative ecosystem.

## The Sharing Problem

Discovery revealed that because the platform was limited to one user per kit, some users resorted to sharing account credentials to give others access to DNA reports. This was a particular pain point for gift kits (a primary driver for seasonal growth) where the purchaser and the pet owner often wished for shared access to the results.

The lack of permissions also created a barrier for ongoing care. A pet owner may want to share specific health markers with a veterinarian or behavioral traits with a dog-sitter or other caretaker. Without role-based access, there were limited ways to safely and intuitively share a dog's DNA results.

## Design Strategy

### Scalable Information Architecture

Early wireframes attempted to manage all collaborators across all pets on a single page, which proved difficult to scan for multi-pet households. I shifted the hierarchy to a pet-level management model, allowing users to drill down into a specific pet's profile to manage its unique set of collaborators.

{% imageKeys {
  "src": "/posts/2025/pet-dna-roles-permissions/pet-level-management-dsk.png",
  "alt": "The redesigned pet-level management interface on desktop, showing multiple pet profiles and their associated roles and permissions settings.",
  "caption": "A scalable hierarchy that organizes collaborators by pet profile.",
  "loading": "lazy"
} %}

### Ecosystem Familiarity

To reduce the learning curve for existing customers, I referenced the core Ancestry DNA sharing experience. By aligning the Pet DNA sharing patterns with established Ancestry UI, we ensured that users familiar with the parent site could intuitively navigate the new permissions system.

{% imageKeys {
  "src": "/posts/2025/pet-dna-roles-permissions/ancestry-test-sharing-screens.png",
  "alt": "Reference screens from the core Ancestry DNA experience used to ensure design consistency and user familiarity.",
  "caption": "Aligning with Ancestry DNA sharing patterns for a consistent user experience.",
  "loading": "lazy"
} %}

## Implementation Details

### The Invitation Journey

I designed a clear invitation flow that allows owners to add collaborators by email and assign roles immediately. This process also resembles the Ancestry DNA experience for test sharing and handles the backend logic of checking for existing accounts and generating secure invitation links.

{% imageKeys {
  "src": "/posts/2025/pet-dna-roles-permissions/invitation-flow.png",
  "alt": "Screens showing UI for inviting a new contributor, including role selection and email confirmation.",
  "caption": "A detailed process for adding new collaborators.",
  "loading": "lazy"
} %}

### State-Based Invitation Management

Management requires tracking the state of the invitation journey. I implemented a tabbed system to separate active collaborators from pending invites, reducing dashboard noise and making it clear when action (like resending an invite) is required.

{% imageKeys {
  "src": "/posts/2025/pet-dna-roles-permissions/accepted-pending-views.png",
  "alt": "Desktop and mobile views of the Accepted and Pending tabs, with empty state text.",
  "caption": "Status-based tabs with empty state invitation views.",
  "loading": "lazy"
} %}

### Role Management & Maintenance

Dogs are not static and their needs aren't, either! I designed a straightforward management interface that allows owners to update roles or revoke access as the pet's care team evolves over time.

{% imageKeys {
  "src": "/posts/2025/pet-dna-roles-permissions/changing-roles.png",
  "alt": "Desktop and mobile UI showing the interface for adjusting an existing collaborator's role or removing their access.",
  "caption": "Owners can easily adjust roles or revoke access at any time.",
  "loading": "lazy"
} %}

### Defining Granular Role Capabilities

Designing for professional users like veterinarians or caretakers meant providing explicit definitions for different access levels. I integrated a permissions matrix modal that defines exactly what roles like Caretaker and Veterinarian can see and do, ensuring users understand the specific access they are granting.

{% imageKeys {
  "src": "/posts/2025/pet-dna-roles-permissions/permissions-modal-dsk.png",
  "alt": "A permissions matrix modal detailing the specific capabilities for roles including Caretaker and Veterinarian, with granular items ranging from viewing traits reports and managing tests to editing pet details and deleting results.",
  "caption": "Explicit role definitions eliminate ambiguity during the invitation process.",
  "loading": "lazy"
} %}

## Product Thinking & Objectives

This project was designed to grow the product's value proposition by enabling secure sharing for the aforementioned caretaker and gifting scenarios. This move toward a collaborative model strengthens user retention by making the product a shared utility for a pet's entire care team. 

{% imageKeys {
  "src": "/posts/2025/pet-dna-roles-permissions/roles-permissions-dsk-3.png",
  "alt": "Additional view of the desktop management dashboard featuring collaborator roles and management options.",
  "caption": "The final dashboard organizes complex user permissions into a scannability-focused interface.",
  "loading": "lazy"
} %}

## Conclusion

The Roles & Permissions feature demonstrated that thoughtful information architecture and alignment with established system patterns can solve complex sharing problems. While the design was not validated in production due to Ancestry sunsetting the pet DNA product, it was a promising, almost-shipped solution that respected user privacy and system security while aligning with broader company objectives for product growth.

<style>
  .gallery {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .gallery button img {
    aspect-ratio: auto !important;
    object-fit: contain !important;
  }
</style>

{% include "partials/gallery.njk" %}
