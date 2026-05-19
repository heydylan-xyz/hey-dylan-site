---
title: Resume
permalink: /resume/index.html
description: 'Dylan is a product-minded content designer, UX designer, and content strategist in Seattle.'
layout: page
---

Download Dylan's resume as a <a href="/public/dylan-austin-resume.pdf" download>Portable Document Format (.pdf)</a>, as a <a href="/public/dylan-austin-resume.docx" download>Word Document (.docx)</a>, or as an <a href="/public/dylan-austin-resume.odt" download>OpenDocument Text (.odt)</a>

Connect with him on <a href="https://www.linkedin.com/in/heydylan/">LinkedIn</a>.

<!-- loop docs -->
{% set itemList = collections.orderedDocs %}
{% set headingLevel = "h2" %}
{% include 'partials/details.njk' %}

{% css "local" %}
  {% include "css/custom-card.css" %}
{% endcss %}
