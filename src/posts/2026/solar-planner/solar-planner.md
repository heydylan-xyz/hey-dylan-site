---
title: 'Jackery Solar Planner'
description: "A configuration modeler for solar hobbyists, built as a companion to Jackery's existing selection tools."
date: 2026-04-22
tags: ['UX design', 'case study', 'product strategy']
image: '/assets/images/gallery/solar-planner-cover.png'
og_image: '/assets/og-images/solar-planner-og.png'
og_image_alt: "Jackery Solar Planner in two stacked tablet mockups previewing solar configuration steps."
gallery:
  - image: "/posts/2026/solar-planner/solar-planner-1.png"
    alt: 'Define Your Energy Needs. A device grid under category tabs (Kitchen, Comfort & Health, Tech, Recreation) shows selectable items like Air Purifier and Hearing Aid Charger with inline hour/day steppers. A sidebar tallies Daily Demand in watt-hours with a per-device breakdown and a Next: Choose Station button.'
    caption: 'Step 1: Gear selection'
  - image: "/posts/2026/solar-planner/solar-planner-2.png"
    alt: 'Choose Your Power Station. Three station cards each show a capacity bar comparing user demand (1,965 Wh) against the stations total. The sidebar visualizes a battery at 65% used for the selected Explorer 3000 Pro.'
    caption: 'Step 2: Station selection'
  - image: "/posts/2026/solar-planner/solar-planner-3.png"
    alt: 'Plan Your Solar Recovery, in a deficit state. A Sun Intensity slider is set to 100% Sunny. The red Energy Balance card warns that one 100W panel cant keep up and the 8-day charge time makes the shortfall concrete.'
    caption: 'Step 3: Solar configuration'
  - image: "/posts/2026/solar-planner/solar-planner-4.png"
    alt: 'System Review and Checkout. An orange Complete System banner with a ribbon icon tops a Hardware Summary listing the five selected devices with per-day watt-hour draw, followed by regrouped by hardware category rather than by step, so the cart reads as a coherent system.'
    caption: 'Step 4: System review'
---

A configuration modeler for solar hobbyists who've outgrown quiz-based recommendations, built as a companion to Jackery's existing selection tools.

## Project Overview

The [Jackery Solar Planner (prototype)](https://solar-planner-xyz.netlify.app/) is a React application I designed and built to test an alternative to scenario-based product quizzes for solar energy hobbyists. Instead of sorting users into lifestyle archetypes, it dynamically models the user's energy profile as they configure devices, stations, and panels. I came up with the concept, designed the interaction model, wrote the energy logic, and directed AI tools to implement the prototype, then corrected the output for responsiveness, accessibility, and information hierarchy.

{% include "partials/gallery.njk" %}

## Strategic Context

Jackery's existing resources, the [selection quiz](https://www.jackery.com/pages/how-to-choose) and the [Off-Grid Power Station Guide](https://eu.jackery.com/blogs/knowledge/off-grid-power-living-guide), do a good job of meeting casual buyers where they are. The quiz sorts by lifestyle and the guide offers consumption tables. Both work well for broad accessibility, but both ask the user to map their specific situation onto a generalized archetype or a static reference table. For a hobbyist planning a van build, a cabin backup system, or a multi-day field setup, a buyer making a thousand-dollar-plus decision often wants more than a persona match can give them. This prototype is an exploration of what a complementary tool might look like, one that lets users configure their setup directly.

## Energy Model

This process required getting specific about how solar energy and battery systems work, the kind of working knowledge a designer on Jackery's products would need to collaborate effectively with their engineering and product teams. The energy model has two sides, demand and generation, each with its own modeling tradeoffs.

### Demand

The first was recognizing that not all devices behave the same way. Users tend to conflate peak wattage with daily demand, which leads to over-buying capacity for appliances they'll only run for a few minutes a day. I split the demand calculation to approximate how the devices actually draw power.

For continuous loads like fans or CPAP machines, demand is calculated as:

<pre aria-hidden="true"><code>Wh = (Watts × Hours) / EfficiencyFactor</code></pre>
<p class="visually-hidden">Watt-hours equal Watts times Hours, divided by the Efficiency Factor.</p>

For high-wattage "burst" appliances like kettles or coffee makers, demand is calculated as:

<pre aria-hidden="true"><code>Wh = (Watts × HoursPerUse × Uses) / EfficiencyFactor</code></pre>
<p class="visually-hidden">Watt-hours equal Watts times Hours-per-use times Uses, divided by the Efficiency Factor.</p>

Each appliance carries its own efficiency factor (typically 0.85 to 0.95) to account for inverter and conversion losses, since rated wattage and real-world draw aren't the same number. Separating continuous and event loads prevents short-duration events from dominating the demand profile and pushing users toward expensive capacity they don't need.

The daily demand that feeds station recommendations also includes a 20% safety buffer. Real-world conditions like older batteries and cold weather can reduce rated capacity, and a user who buys a station sized to exact math could run out of power before their trip ends. Including the buffer is a tradeoff that prevents frustration when users are already committed to their setup.

### Generation

The generation side of the model determines whether a configuration is actually sustainable over a daily cycle:

<pre aria-hidden="true"><code>Total Solar Generation (Wh) - Total Gear Demand (Wh) = Net Balance</code></pre>
<p class="visually-hidden">Total solar generation in watt-hours, minus total gear demand in watt-hours, equals the net balance.</p>

Generation itself uses a recovery formula that accounts for environmental variables and real-world system loss:

<pre aria-hidden="true"><code>DailyRecoveryWh = PanelWatts × PanelCount × WeatherCoefficient × PSH × 0.85</code></pre>
<p class="visually-hidden">Daily recovery in watt-hours equals Panel Watts times Panel Count times the Weather Coefficient times Peak Sun Hours times zero point eight five.</p>

Output is also capped by each station's maximum solar input rating, so a large panel array paired with a smaller station will hit a ceiling rather than return inflated numbers.

The formula uses a fixed baseline of 5 Peak Sun Hours (PSH), representing average daily full-rated solar irradiance for a mid-latitude location. The Sun Intensity slider maps to a weather coefficient (sunny, partial, overcast) that models per-hour irradiance reduction without adjusting PSH itself. Overcast days tend to be shorter in usable solar hours as well *(hello from Seattle!)*, a nuance a production version could resolve by integrating location-aware Geographic Information System (GIS) data for site-specific PSH values.

The fixed 0.85 charge efficiency factor accounts for real-world losses in the solar charging circuit: Maximum Power Point Tracking (MPPT) controller heat dissipation and natural variance from rated panel output. These are the tradeoffs a production team would need to decide how to expose, hide, or make configurable, and thinking through them was part of the design work.

## Live Configuration State

The four steps share a running model, with each decision feeding the next:

1. Device selections produce a daily demand figure.
2. That demand filters station options: stations that can't meet either the total capacity or the peak simultaneous draw are disabled and sorted to the bottom. A best-fit station (the smallest unit that satisfies both checks) is recommended, and selecting one animates a battery capacity visualization showing how much of its storage the demand will occupy.
3. Sun intensity and panel selections calculate daily recovery, full charge time, and a net balance that shifts between surplus, balanced, and deficit states with corresponding visual treatment as the configuration changes.
4. The full system is summarized and evaluated for compatibility, solar coverage, and capacity match.

Every number the user sees (demand, capacity, recovery, balance) reflects the current state of their full configuration.

<div class="prototype-wrapper">
  <iframe
    src="https://solar-planner-xyz.netlify.app"
    title="Jackery Solar Planner"
    loading="lazy">
  </iframe>
</div>
<p class="visually-hidden">An interactive prototype designed to help users select an optimal array of solar panels and stations based on power requirements.</p>

## Prototyping & AI Workflow Friction

I built this prototype using an AI-assisted workflow with Figma Make, Claude, and OpenCode, testing the concept in a live browser rather than relying on static mockups. With well-tuned prompting and explicit instructions, the output did show exploratory promise but needed significant correction before it was usable.

Figma Make produced a starting interface that wasn't mobile-responsive and buried the running demand tally underneath scrolling elements. That hierarchy problem would have undermined the core concept of the tool, which depends on the user always seeing how their choices affect the total. I restructured the layout so persistent data stayed visible.

TalkBack testing surfaced more serious issues. The screen reader struggled with focus management, failed to announce timing changes when users adjusted device quantities, and read out inline style attributes and pronounced "W" as a letter rather than "Watts." Fixing these required rewriting some of the generated code.

The working prototype is the result of using these tools for what they're good at (fast iteration) and doing the design, accessibility, and information-hierarchy work where the tools fell short.

## Conclusion

This prototype is a strategic exploration of a gap in Jackery's existing tooling, rather than a replacement for any of it. The most interesting next step, to me, would be imagining how a configuration modeler like this could live alongside Jackery's other resources, catching users who've outgrown persona-based recommendations and routing them toward a tool that models their full configuration in real time. That kind of integration would connect Jackery's marketing-led entry points with engineering-grade simulation on the back end, and it's a product problem I'd want to work on.

If you're still reading, check out [Low Tech Magazine](https://solar.lowtechmagazine.com/), a solar-powered website that goes offline if, well, you know.

*Note: This exploration is inspired by, but not affiliated with, the Jackery brand.*
