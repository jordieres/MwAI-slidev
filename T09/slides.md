---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /images/Designer_02.png  # https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Managing with Artificial Intelligence
info: |
  # Master in Organizational Engineering
  Academic Year 2026-27 (https://apiivm01.etsii.upm.es/~jordieres/T02/)
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

# Course Management with AI

## Challenge 04: Design a Viable Digital Health Service for Chronic-Care Management

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
title: "Design of Service: Management Context"
layout: default
transition: fade-out
background: ./images/Designer_02.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<!-- <div style="font-size:0.2em"> -->

### Management context

MedNova Health Network is a regional provider managing approximately 3,200 patients with multiple sclerosis. 
The management question is:

**"What digital-health service should MedNova launch, for which patient segment, through which operating and business model, and under what implementation and governance conditions?"**

The challenge is intentionally not about developing a diagnostic AI model. The focus is instead on:


<div class="three-cols">

<div>• digital-health strategy,</div>
<div>• patient segmentation,</div>
<div>• service design,</div>
<div>• operating model,</div>
<div>• adoption,</div>
<div>• business-case development,</div>
<div>• workflow redesign,</div>
<div>• technology selection,</div>
<div>• privacy, safety and equity.</div>
<div>• organisational feasibility</div>

</div>


<!-- </div> -->

<style>
  .three-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px 20px;
    font-size: 0.72rem;

    margin-top: 4px;
    margin-bottom: 4px;
  }

  .three-cols ul {
    margin: 0;
  }

  .three-cols li {
    margin-bottom: 0.2rem;
  }

  .two-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px 30px;
    font-size: 0.72rem;

    margin-top: 4px;
    margin-bottom: 4px;
  }

  .two-cols ul {
    margin: 0;
  }

  .two-cols li {
    margin-bottom: 0.2rem;
  }
</style>


---
title: "Design of Service: Dataset"
layout: two-cols
transition: fade-out
background: /images/Designer_02.png
backgroundSize: cover
---

::left:: 
<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Data Package

Information provided by MedNova Health Network includes:

<div class="two-cols-txt">

<div><strong>Data Content</strong></div>
<div><strong>Data Content</strong></div>
<div>• 460 synthetic patient survey responses and stakeholder interviews;</div>
<div>• 1,200 synthetic patient utilisation records;</div>
<div>• pilot-site readiness for three hospitals;</div>
<div>• external digital-health implementation cases;</div>
<div>• technology alternatives and costs;</div>
<div>• unit-cost data;</div>
<div>• adoption and retention assumptions;</div>
<div>• expected outcome assumptions;</div>
<div>• current care pathway;</div>
<div>• governance and safety constraints;</div>
<div>• business-case template;</div>
<div>• data-cleaning log template.</div>

</div>

Which is richer that you would probably need.

</div>



::right::
<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Datasets

<div class="download-card">
  <h4>Data Resources</h4>
  <p>Projects details to be used during the Challenge.
  <a href="/~jordieres/data/Challenge_4_Digital_Health_Student_Package.zip">
     📦 <b>Download Projects</b>
  </a></p>

</div>

<br>
<br>
The raw data contain 102 deliberate quality issues, including inconsistent categories, duplicated responses, missing Likert scores, percentages represented in different scales, currency stored as text, embedded units and inconsistent identifiers.

So, **you should not simply upload the files and request a recommendation.**

</div>

<style>
  .three-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px 20px;
    font-size: 0.72rem;

    margin-top: 4px;
    margin-bottom: 4px;
  }
  .two-cols-txt {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px 20px;
    font-size: 0.72rem;

    margin-top: 4px;
    margin-bottom: 4px;
  }

</style>


---
title: "Data Service: Request"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 10px;"></div>

<div style="font-size:0.7em">

  ### Required work by Groups

The challenge is intentionally not about developing a diagnostic AI model. The focus is instead on:

<div class="compact-table">

| **Criterion** |
| --- |
| digital-health strategy |
| patient segmentation |
| service design |
| operating model |
| adoption |
| business-case development |
| workflow redesign |
| technology selection |
| privacy, safety and equity |
| organisational feasibility |

</div>

_*You are not expected simply to ask an AI system to “give me a recommendation”.*_

</div>

::right::

<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Tools

You may use:

<div style="font-size:0.7em;margin-left:40pt;">

<div>• Microsoft Copilot Chat,</div>
<div>• Google AI Studio,</div>
<div>• spreadsheets,</div>
<div>• Python or another scripting language,</div>
<div>• AI-generated code,</div>
<div>• heuristics,</div>
<div>• optimisation models,</div>
<div>• or hybrid approaches.</div>

</div>

Notice that:

<div style="font-size:0.7em">

- The so called **hidden events** could be *Low adoption* (Enrolment is 22 percentage points below forecast, especially among older and low-digital-literacy patients), *Alert burden* (The alert system creates 2.4 times the expected number of alerts), *Interoperability delay* (EHR integration is delayed by six months), *Payer constraint* (No additional reimbursement will be provided for digital interactions) or *Equity audit* (Retention among low-digital-literacy patients is 30% lower than average.)

</div>

</div>

<style>
.compact-table table td,
.compact-table table th {
  padding-top: 0.2rem !important;
  padding-bottom: 0.2rem !important;
}

.compact-table table {
  font-size: 0.7em;
}
</style>


---
title: "Recover the Weekly Production Plan: Additional notes"
layout: two-cols
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 20px;"></div>

  ### Suggested action plan (Not mandatory)

<div style="margin-left:20pt;">

  <div>• <b>Stage 1: Understand the problem</b> (which patient problems require attention, scarcity of which resources, etc.)</div>
  <div>• <b>Stage 2: Clean and segment</b> (Teams should move beyond overall averages and identify meaningful groups.)</div>
  <div>• <b>Stage 3: Define success before designing the technology.</b></div>
  <div>• <b>Stage 4: Design the service.</b></div>
  <div>• <b>Stage 5: Define the operating model.</b></div>
  <div>• <b>Stage 6: Build the business case.</b></div>
  <div>• <b>Stage 7: Validate assumptions.</b></div>
  <div>• <b>Stage 8: Recommend a bounded pilot.</b></div>

</div>

::right::

<div style="height: 20px;"></div>

### Assessment criteria.

<div style="font-size:0.72em">

| Dimension                            | Weight |
| ------------------------------------ | -----: |
| Patient and service value            |    20% |
| Capacity and economic sustainability |    20% |
| Adoption and retention robustness    |    15% |
| Strategic coherence and scalability  |    15% |
| Equity and accessibility             |    10% |
| Governance and operational safety    |    10% |
| Hidden-event response                |    10% |

</div>

<div style="height: 20px;"></div>

### Additional Notes.

- A portfolio that violates mandatory constraints should fail the feasibility gate regardless of its headline financial value.
- Investment analysis is not about identifying the project with the largest number. It is about allocating scarce resources across competing opportunities while managing dependencies, uncertainty, strategic value and future flexibility.
- Use AI to expand the set of alternatives you can analyse and not to outsource the investment decision.


<style>

.slidev-layout {
  font-size: 0.82rem;
}

h3 {
  font-size: 1.25rem;
  line-height: 1;
  margin: 0 0 0.25rem 0;
}

ul {
  margin: 0;
  padding-left: 1.1rem;
}

li {
  line-height: 1.02;
  margin: 0.06rem 0;
}

li p {
  margin: 0;
}

table {
  font-size: 0.72rem;
  line-height: 1;
  margin-top: 0.1rem;
}

th,
td {
  padding: 0.12rem 0.3rem;
}

</style>
