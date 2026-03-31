---
title: 'Veterinary Intake & Service Architecture'
description: "CxD and service architecture for a fictional veterinary clinic, including FigJam flowchart, Mermaid.js user flow diagrams, and working prototype."
date: 2026-03-31
tags: ['CxD', 'case study']
image: '/assets/images/gallery/vet-intake-cover.png'
og_image: '/assets/og-images/vet-intake-og.png'
og_image_alt: "Service architecture flowchart behind two phone mockups showing a booking confirmation and category selection screen from prototype."
---

A speculative redesign including service architecture, conversation design, a FigJam flowchart, Mermaid.js user flow diagrams, and <a href="#working-prototype">lo-fi prototype</a>.

## The Problem

Having worked on <a href="/tags/ancestry/">pet DNA</a> and pet insurance products, I've spent real time understanding how pet owners navigate health decisions and the systems built around them. I'm also a dog dad, so I know firsthand the stress that hits during a health scare. When you're panicked, you don't have the capacity to process walls of text or navigate a maze of redundant forms.

Like many clinics, the experience that inspired this project wasn't consistently tuned to that state of mind. Some screens offered too little context, others presented lengthy explanations before a simple action. That mismatch is a pain point common across veterinary medicine, where owners booking the wrong appointment type can leave everyone frustrated and the clinic absorbing the confusion on both ends.

This project explores what a more intentional intake flow might look like — one built around the idea that good service architecture is an extension of great veterinary care.

## Design Principles

### State-Awareness

The system pulls existing patient data so returning owners aren't asked to re-explain their situation. In a healthcare context, removing that friction also reduces the chance of intake errors.

### Operational Safety Valves

A fully booked calendar is never a dead end. Critical symptoms always have a path forward, whether that's a walk-in, a triage callback, or a partner ER referral.

### Trauma-Informed Routing

High-sensitivity paths like end-of-life care route to human-led processes, not a calendar picker. The goal is to feel like a calm presence in the lobby, not a form to fill out.

## The System

The full service architecture maps five entry categories — Routine/Preventative, Sick/Injured, Clinical Support, Quality of Life, and Specialized/Surgery — each with branching logic that accounts for new vs. returning issues, condition severity, clinical state flags, and live calendar availability. An emergency triage gate sits before all of it, routing life-threatening symptoms directly to urgent care before the booking flow begins.

[View full flowchart in FigJam](https://www.figma.com/board/9Rhr5DpYG5ZMt20IHNuQO2/City-Pet-Vet-Flowchart)

{% imageKeys {
  "src": "/posts/2026/vet-intake/vet-intake-figjam.png",
  "alt": "A flowchart diagram showing the full branching structure of the intake system. Each category splits into decision paths based on factors like symptom severity, whether the issue is new or a follow-up, and live clinic availability, converging on specific appointment outcomes for each scenario.",
  "caption": "FigJam flowchart",
  "loading": "lazy"
} %}

## User Scenarios

Three scenarios show a clinical safety override, an operational capacity failure, and a state-aware data branch.

### David

David wants a routine vaccine for his dog, who he mentions has been lethargic. The pre-diagnostic triage gate surfaces this symptom before booking and redirects him from a short technician slot into a veterinary consultation. The system's response:

> "To give that new concern the time it deserves, we'll need to book this as a Veterinary Consultation instead of a routine exam."

A sick pet isn't masked by a routine appointment type and David doesn't have to know the difference to get the right care.

<div aria-hidden="true">
{% raw %}<div class="mermaid">
flowchart TD
  Start((Start)) --> Welcome["Welcome to City Pet Vet.<br/>Let's make sure your pet gets the right care."]
  Welcome --> EmergencyGate{"Emergency symptoms?<br/>• Difficulty breathing<br/>• Seizures<br/>• Severe trauma<br/>• Unconsciousness"}
  EmergencyGate -- No --> Category["Select Category: Routine / Preventative"]
  EmergencyGate -- Yes --> UrgentCare(("Urgent Care Walk-in"))
  Category --> ServiceSelect["Select Service: Wellness Exam"]
  ServiceSelect --> SymptomCheck{"New symptoms or<br/>health concerns?"}
  SymptomCheck -- Yes --> SafetyOverride["Clinical Safety Override"]
  SymptomCheck -- No --> Standard["Standard Wellness Path"]
  SafetyOverride --> Login["Login or Create Account"]
  Login --> Success(("Veterinary Consultation<br/>Booked with DVM"))
  style UrgentCare fill:#636363,stroke:#484848,color:#f8f8f8
  style Standard fill:#636363,stroke:#484848,color:#f8f8f8
  linkStyle 3 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
  linkStyle 7 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
</div>{% endraw %}
</div>

<p class="mermaid-fallback screen-subtext">
  David books a routine wellness exam, but mentions his dog has been lethargic. The system detects a new symptom and redirects the booking from a standard wellness slot to a Veterinary Consultation with a DVM — ensuring the dog gets a diagnostic exam rather than just a vaccine.
</p>

<p class="visually-hidden">Flowchart: David's path through the intake system. Start. Welcome screen: Welcome to City Pet Vet, let's make sure your pet gets the right care. Emergency gate: no emergency symptoms present. Category selected: Routine / Preventative. Service selected: Wellness Exam. Symptom check: new symptoms present, specifically lethargy. Clinical Safety Override triggered. Login or create account. Outcome: Veterinary Consultation booked with DVM. Alternative paths not taken: Urgent Care walk-in, Standard Wellness Path.</p>

### June

June's dog is mid-way through an oncology treatment plan and needs to book a follow-up. Before the system routes her anywhere, it meets her where she is:

> "We know getting here wasn't easy. Whether this is your first visit or you're continuing care, our surgical team reviews every case personally before your appointment — so you'll never walk in without a plan."

From there, the system detects an active oncology case on her profile and routes her directly into the correct treatment time block, bypassing the initial consultation entirely. No repeated intake, no wrong slot, no explaining her situation twice.

<div aria-hidden="true">
{% raw %}<div class="mermaid">
flowchart TD
  Start((Start)) --> Welcome["Welcome to City Pet Vet.<br/>Let's make sure your pet gets the right care."]
  Welcome --> EmergencyGate{"Emergency symptoms?<br/>• Difficulty breathing<br/>• Seizures<br/>• Severe trauma<br/>• Unconsciousness"}
  EmergencyGate -- No --> Category["Select Category: Specialized / Surgery"]
  EmergencyGate -- Yes --> UrgentCare(("Urgent Care Walk-in"))
  Category --> ServiceSelect["Select Service: Oncology"]
  ServiceSelect --> Login["Login or Create Account"]
  Login --> ActiveCase{"Active surgical plan or<br/>oncology case on file?"}
  ActiveCase -- Yes --> Continuity(("Specialized Follow-up<br/>Treatment or re-check"))
  ActiveCase -- No --> Establish["Pre-Surgical Consultation Path"]
  style UrgentCare fill:#636363,stroke:#484848,color:#f8f8f8
  style Establish fill:#636363,stroke:#484848,color:#f8f8f8
  linkStyle 3 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
  linkStyle 8 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
</div>{% endraw %}
</div>

<p class="mermaid-fallback screen-subtext">
  June selects Surgeries & Specialist Care and chooses Oncology. After logging in, the system detects an active oncology case on her profile and routes her directly to a Specialized Follow-up for treatment or re-check — skipping the initial consultation entirely because the context is already established.
</p>

<p class="visually-hidden">Flowchart: June's path through the intake system. Start. Welcome screen. Emergency gate: no emergency symptoms present. Category selected: Specialized / Surgery. Service selected: Oncology. Login or create account. Active oncology case found on profile. Outcome: Specialized Follow-up booked for treatment or re-check. Alternative paths not taken: Urgent Care walk-in, Pre-Surgical Consultation.</p>

### Safiya

Safiya's dog has a worsening cough and needs to be seen today, but the clinic's schedule is full. Rather than delivering a dead end, the system re-validates for critical symptoms before routing her to either a priority walk-in or a triage callback. If no critical symptoms are present, the system responds:

> "Our triage team will call you within 30 minutes to help find a slot. If you need to be seen sooner, please contact our partner urgent care."

The clinic relationship stays intact even at capacity.

<div aria-hidden="true">
{% raw %}<div class="mermaid">
flowchart TD
  Start((Start)) --> Welcome["Welcome to City Pet Vet.<br/>Let's make sure your pet gets the right care."]
  Welcome --> EmergencyGate{"Emergency symptoms?<br/>• Difficulty breathing<br/>• Seizures<br/>• Severe trauma<br/>• Unconsciousness"}
  EmergencyGate -- No --> Category["Select Category: Sick / Injured"]
  EmergencyGate -- Yes --> UrgentCare(("Urgent Care Walk-in"))
  Category --> NewOrFollowUp{"New issue or follow-up?"}
  NewOrFollowUp -- New Issue --> Condition{"How is your pet's condition?"}
  NewOrFollowUp -- Follow-up --> FollowUpPath["Follow-up Path"]
  Condition -- Worsening --> Login["Login or Create Account"]
  Condition -- Stable --> StablePath["Stable Path"]
  Login --> Availability{"Same-day availability?"}
  Availability -- Yes --> UrgentConsult(("Urgent Consultation<br/>Same-day fit-in"))
  Availability -- No --> RedFlag{"Critical symptoms present?"}
  RedFlag -- Yes --> WalkIn(("Walk-in<br/>Immediate Triage"))
  RedFlag -- No --> SafetyValve(("Triage Callback<br/> Partner ER Referral"))
  style UrgentCare fill:#636363,stroke:#484848,color:#f8f8f8
  style FollowUpPath fill:#636363,stroke:#484848,color:#f8f8f8
  style StablePath fill:#636363,stroke:#484848,color:#f8f8f8
  style UrgentConsult fill:#636363,stroke:#484848,color:#f8f8f8
  style WalkIn fill:#636363,stroke:#484848,color:#f8f8f8
  linkStyle 3 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
  linkStyle 6 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
  linkStyle 8 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
  linkStyle 10 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
  linkStyle 12 stroke:#808080,stroke-width:1px,stroke-dasharray:5 5
</div>{% endraw %}
</div>

<p class="mermaid-fallback screen-subtext">
  Safiya selects Sick/Injured for a worsening cough and logs in. The system checks for same-day availability and finds none. Rather than a dead end, it re-validates for critical symptoms. None are present, so it arranges a triage callback — her team will call within 30 minutes, with a partner urgent care as a backup if she needs to be seen sooner.
</p>

<p class="visually-hidden">Flowchart: Safiya's path through the intake system. Start. Welcome screen. Emergency gate: no emergency symptoms present. Category selected: Sick / Injured. New issue selected. Condition assessed as worsening. Login or create account. Same-day availability check: no availability. Critical symptoms check: no critical symptoms present, routed to triage callback. Outcome: Triage Callback with Partner ER Referral. Alternative paths not taken: Urgent Care walk-in, Follow-up path, Stable path, Urgent Consultation same-day fit-in, Walk-in immediate triage.</p>

## Content Strategy

In veterinary medicine, the user is often in a state of elevated stress. Whether they're dealing with a worsening cough or a life-threatening decision, their capacity to process complex information is diminished. Every piece of copy in the flow is written to reduce cognitive load.

The emergency triage gate opens with a warm framing before presenting the symptom checklist — the goal is to validate that concern before redirecting it, so a pet owner who chooses "no" doesn't feel dismissed. The pre-diagnostic triage redirect on the Routine path explains *why* the appointment type is changing, not just that it is:

> "This ensures the doctor has time for diagnostics."

That distinction matters because it reframes what could feel like a system rejection into something that serves the pet's care.

In the Quality of Life path, language that referenced forms was replaced entirely. Asking a grieving owner to "fill out a form" raises a barrier; inviting them to "share your pet's story" lowers one. The copy treats a data-entry task as a supportive first step instead.

The system should feel like a calm, knowledgeable member of the staff who meets you in the lobby, reads the situation quickly, and tells you exactly where to go next.

## Working Prototype

The prototype below is intentionally lo-fi. The goal is to demonstrate the branching logic and conversation design in motion, not visual polish. Every path from the flowchart is covered, including the PIMS routing simulations that show where live patient data would inform decisions automatically. If you have a moment, taking <a href="#safiya">Safiya's path</a> through Sick/Injured shows the most complex logic in action.

<div class="phone-mockup">
  <iframe
    src="/public/city-pet-vet-prototype.html"
    title="Interactive City Pet Vet intake prototype — tap through the full booking flow"
    loading="lazy">
  </iframe>
</div>
<p class="visually-hidden">An interactive mobile prototype demonstrating the full intake flow. Navigate through all five service categories to reach booking outcomes, triage callbacks, or urgent care routing.</p>

## What I'd Build Next

The most important next steps are validation testing the core assumptions against real behavior and real workflows rather than designed ones.

User testing with actual pet owners is the highest priority, specifically around the top-level category labels. This system asks owners to self-triage into categories like "Sick/Injured" or "Specialized/Surgery." The button-with-description format is designed to reduce ambiguity, but only testing will reveal where the language maps to how people actually think about their pet's needs (and where it doesn't).

Direct collaboration with clinic staff and clinicians matters just as much. A front desk coordinator who handles fifty calls a day about sick pets carries knowledge that no journey map captures. The triage escalation logic, the DVM vs. technician routing rules, the prescription refill workflow. All of these need to be stress-tested against how the clinic actually operates. The design decisions here would be shaped by that input.

From a product perspective, the natural next phases are designing the mobile UI for the highest-traffic paths, refining the prototype based on test findings, and working through how PIMS integration would surface state-aware data without introducing new privacy or access complications.
