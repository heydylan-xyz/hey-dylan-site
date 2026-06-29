---
title: 'Accessibility Statement'
description: 'Commitment to digital accessibility and how to report accessibility issues.'
date: "Last Modified"
permalink: /accessibility/index.html
layout: page
---

I am committed to accessible design and continually try to improve the user experience for everyone.

## Conformance Status

_Eleventy Excellent_ aims to conform with [ WCAG 2.1 Level AA.](https://www.w3.org/WAI/standards-guidelines/wcag/)

## Testing

[pa11y-ci](https://github.com/pa11y/pa11y-ci) is used to run automated accessibility tests on every update to this site. This ensures that all design elements and site structures consistently meet **WCAG 2.1 AA** standards.

*06-29 Note: For some sudden reason, pa11y-ci passes locally but not in the live environment. Working on this!*

## Feedback

Please let me know if you encounter any accessibility barriers:

**Email**: {{ meta.creator.email }}

---

*Last updated: {{ page.date | formatDate('MMMM D, YYYY') }}*
