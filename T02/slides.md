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

## Challenge 01: Should Orion Manufacturing Adopt an AI-Enabled Operations Platform?

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
title: Should Orion Manufacturing Adopt an AI-Enabled Operations Platform?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Management context

Orion Manufacturing is a fictional medium-sized industrial company with approximately 650 employees, three production sites and uneven levels of digital maturity. Senior management is considering the adoption of an AI-enabled platform covering:

<div class="three-cols">

<div>• Predictive maintenance</div>
<div>• Production analytics</div>
<div>• Document & knowledge assistance</div>
<div>• Quality-event analysis</div>
<div>• Management reporting</div>

</div>

The investment is supported by the Chief Digital Officer but questioned by operations managers, employee representatives and the finance department. The group acts as an external advisory team and must recommend:

<div class="two-cols">

<div>• whether the company should adopt the technology</div>
<div>• where adoption should begin</div>
<div>• which implementation model should be selected</div>
<div>• under which organisational and governance conditions.</div>
</div>



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
title: Should Orion Manufacturing Adopt an AI-Enabled Operations Platform?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Data Package

Orion Manufacturing is a fictional medium-sized industrial company with approximately 650 employees, three production sites and uneven levels of digital maturity. Senior management is considering the adoption of an AI-enabled platform covering:

<div class="three-cols">

<div><strong>Company Profile</strong></div>
<div><strong>Employee Survey</strong></div>
<div><strong>Stakeholder Interview</strong></div>
<div>• company structure;</div>
<div>• department;</div>
<div>• Chief executive officer;</div>
<div>• production sites;</div>
<div>• role;</div>
<div>• Chief Information officer;</div>
<div>• current information systems;</div>
<div>• years of experience;</div>
<div>• plant manager;</div>
<div>• operational performance;</div>
<div>• perceived usefulness;</div>
<div>• maintenance supervisor;</div>
<div>• digital maturity;</div>
<div>• digital confidence;</div>
<div>• employee representative;</div>
<div>• strategic priorities;</div>
<div>• trust in management;</div>
<div>• finance director;</div>
<div>• etc.</div>
<div>• etc.</div>
<div>• etc.</div>

</div>

The vendor proposal is also included, as well as the baselime performance and risk and policy documents

<div class="download-card">
  <h4>Data Resources</h4>
  <p>Datasets, templates, and examples to be used during the Challenge.
  <a href="/~jordieres/data/Challenge_1_Technology_Adoption_Student_Package.zip">
     📦 Download Data Package
  </a></p>
</div>

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
</style>


---
title: Should Orion Manufacturing Adopt an AI-Enabled Operations Platform?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<div style="font-size:0.82em">

  ### Required work by Groups

  <div class="two-cols">

  <div>• clean and analyse the employee-survey data;</div>
  <div>• identify the main adoption drivers and barriers;</div>
  <div>• segment stakeholders or employee profiles;</div>
  <div>• compare the three adoption alternatives;</div>
  <div>• construct a technology-adoption assessment framework;</div>
  <div>• propose a phased implementation roadmap;</div>
  <div>• estimate benefits, costs and organisational risks;</div>
  <div>• define measurable adoption KPIs;</div>
  <div>• prepare a board-level recommendation.</div>

  </div>

  <br>

  ### AI dimensions assessed

  <div class="two-cols">

  <div>• prompt design for conflicting evidence;</div>
  <div>• synthesis across documents and structured data;</div>
  <div>• qualitative coding of interviews;</div>
  <div>• stakeholder analysis;</div>
  <div>• data preparation;</div>
  <div>• multicriteria decision support;</div>
  <div>• bias detection;</div>
  <div>• assumption tracking;</div>
  <div>• responsible AI adoption.</div>

  </div>


</div>

<style>
  .two-cols {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px 20px;
    font-size: 0.72rem;

    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>


---
title: Should Orion Manufacturing Adopt an AI-Enabled Operations Platform?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<div style="font-size:0.82em">

  ### Competitive dimension (different models)

  <div class="two-cols">

  <div>• weighted multicriteria decision analysis;</div>
  <div>• readiness index;</div>
  <div>• stakeholder-risk matrix;</div>
  <div>• adoption segmentation;</div>
  <div>• staged real-options approach;</div>
  <div>• pilot-first implementation strategy.</div>

  </div>

  <br>

  ### Main Delivearble: Board dossier.

  <div class="two-cols">

  <div>• executive recommendation;</div>
  <div>• evidence and adoption diagnosis;</div>
  <div>• alternative comparison;</div>
  <div>• implementation roadmap;</div>
  <div>• KPI framework;</div>
  <div>• risk and governance plan;</div>
  <div>• technical annex (with rlevant material, if any.);</div>

  </div>


</div>

<style>
  .two-cols {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px 20px;
    font-size: 0.72rem;

    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>

