---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./images/Designer.png  # https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Managing with Artificial Intelligence
info: |
  # Master in Organizational Engineering
  Academic Year 2026-27 (https://apiivm01.etsii.upm.es/~jordieres/T01/)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 35min

---
<style>
.slidev-layout, 
.slidev-layout,
.slidev-layout h1,
.slidev-layout h2,
.slidev-layout h3{
  color: black;
}
</style>

# T01 Class Assigment

## Guidelines

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="grey op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/jordieres/MwAI-slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
title: What is the first assignment?
layout: two-cols
background: ./images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 10px;"></div>

### Document Analysis and Organizational Synthesis

Our organization seeks to reduce operational complexity, improve energy efficiency, and deploy intelligent automation in its high-stakes industrial environment (specifically steel making/furnace scheduling). 

One engineer who was fired up few weeks ago pepared the documents included into the ["**Document Set**"](https://upm365-my.sharepoint.com/:u:/g/personal/j_ordieres_upm_es/IQCdldFZp1KeQ4suPxNVoS5qAceWRglWtE0FJYKzwoF8MZY?e=HKtDIS).

This archive holds the blueprint, but it is currently fragments of scattered knowledge.


::right::

<v-clicks>

<div style="height: 30px;"></div>

### Task 1: Inventory & Initial Scan

- Perform automated extraction of metadata (Titles, Authors, Journals, Dates, Keywords) and initial snippets. 
- We must first determine the boundaries of the knowledge domain. The narrative begins by acknowledging the complexity and defining what tools we are bringing to the problem.

</v-clicks>

<!--
Setup the assignment
-->

---
title: Why AI for Management?
layout: default
background: ./images/Designer.png
backgroundSize: cover
---

### Task 2: Topographical Mapping

- Create a hierarchical topic tree and cross-reference network grap
- This act identifies where knowledge is concentrated and where it is isolated. The rationale is that the graph reveals hidden structural relationships.


### Task 3: Synthesis Divergence

Drill deep into specific key sub-topics identified in Task 2. 
A convincing story needs tension. By deeply contrasting the diverse approaches, we reveal the mandatory trade-offs the organization currently faces.

### Task 4: Integrative Synthesis

Re-converge the diverged insights from Task 3 into a new, unified organizational blueprint. Combine the best practices of DRL, DTs, and XAI with established metallurgical constraints.
The rationale is that synthesis is the act of integration. We must combine the theoretical advancements of one cluster with the practical constraints of another to create an implementable organizational strategy.

<!--
Sequence of tasks to be carried out.
-->

---
title: Why AI for Management?
layout: default
background: ./images/Designer.png
backgroundSize: cover
---


### Task 5: Final Report & Strategic Storytelling

Produce the final executive briefing, using Task 4’s blueprint as the logical outcome, and incorporating Act I & II insights as evidence. Present recommendations using the AIDA framework (Attention, Interest, Desire, Action).
The storytelling rationale is to package the convergent strategy in a compelling format that highlights the urgency of action (Attention to energy costs), the possibility of change (Interest in DRL/DTs), the security of the approach (Desire through XAI transparency), and the specific next steps (Action).

<br>
<hr>
<br>

### Duties

- For every task you performed you should create a report illustrating your findings.
- During the last five minutes of the session package all the reports in a ZIP file. 
- Do not forget to upload your ZIP contribution into the moodle drop-off.

<!--
Sequence of tasks.
-->
