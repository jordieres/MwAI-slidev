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

## Challenge 03: Which Projects Should the Company Fund?

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
title: "Projects to be funded: Management Context"
layout: default
transition: fade-out
background: ./images/Designer_02.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<!-- <div style="font-size:0.2em"> -->

### Management context

Arcadia Industrial Group is preparing its 2027–2029 capital and transformation plan.

Fourteen competing proposals have been submitted across automation, digital infrastructure, cybersecurity, energy efficiency, product innovation, capacity expansion, predictive maintenance, international growth, workforce development, sustainability, safety and AI-enabled services. The company cannot fund all proposals.

The Executive Investment Committee therefore asks the teams to answer:

**Which portfolio of projects should Arcadia fund, when should the projects start, and under what conditions should the portfolio be reviewed?**

Projects interact through:

<div class="three-cols">

<div>• dependencies,</div>
<div>• enabling investments,</div>
<div>• mutual exclusions,</div>
<div>• synergies,</div>
<div>• annual investment limits,</div>
<div>• implementation-capacity limits,</div>
<div>• regulatory requirements,</div>
<div>• common strategic capabilities,</div>
<div>• uncertainty in costs, benefits and timing.</div>

</div>

This means that a project with a mediocre standalone business case may still be important because it enables other projects, while a project with an attractive headline return may make the overall portfolio less robust.

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
title: "Projects to be funded: Dataset"
layout: two-cols
transition: fade-out
background: /images/Designer_02.png
backgroundSize: cover
---

::left:: 
<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Data Package

Information provided by Arcadia Industrial Group includes:

<div class="two-cols-txt">

<div><strong>Project</strong></div>
<div><strong>Illustrative purpose</strong></div>
<div>• P01;</div>
<div>Plant robotics upgrade</div>
<div>• P02;</div>
<div>Enterprise data platform</div>
<div>• P03;</div>
<div>Cybersecurity zero-trust programme</div>
<div>• P04;</div>
<div>Energy recovery system</div>
<div>• P05;</div>
<div>Next-generation product platform</div>
<div>• P06;</div>
<div>Warehouse expansion</div>
<div>• P07;</div>
<div>Predictive maintenance rollout</div>
<div>• P08;</div>
<div>Eastern Europe market entry</div>
<div>• P09;</div>
<div>Digital workforce academy</div>
<div>• P10;</div>
<div>Circular materials programme</div>
<div>• P11;</div>
<div>Safety modernisation</div>
<div>• P12;</div>
<div>AI customer-service platform</div>
<div>• P13;</div>
<div>Supplier resilience / dual sourcing</div>
<div>• P14;</div>
<div>Advanced quality vision system</div>

</div>

</div>

::right::
<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Datasets

<div class="download-card">
  <h4>Data Resources</h4>
  <p>Projects details to be used during the Challenge.
  <a href="/~jordieres/data/Challenge_3_Investment_Portfolio_Student_Package.zip">
     📦 <b>Download Projects</b>
  </a></p>

  <br>

  <h4>Draft Investment Model</h4>
  <p>Potentially useful template.
  <a href="/~jordieres/data/Challenge_3__Draft_Investment_Model.xlsx">
     📦 <b>Download InvestmentModel</b>
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
title: "Recover the Weekly Production Plan: Request"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 10px;"></div>

<div style="font-size:0.7em">

  ### Required work by Groups

The groups should not compete simply on maximum NPV. Instead, a suggested challenge-specific competition layer could be considered:


<div class="compact-table">

| **Criterion** | **Weight** |
| --- | ---: |
| Risk-adjusted financial value | 30% |
| Downside robustness | 20% |
| Strategic coherence | 15% |
| Implementation feasibility | 15% |
| Flexibility / option preservation | 10% |
| Hidden-scenario response | 10% |

</div>

_*You are not expected simply to ask an AI system to “which projects look best” or “Rank projects by NPV and selected the top five.” Indeed, no reward for "“The optimisation algorithm produced this portfolio” class of answers.*_

Expectation would be for at least four deliverables:

- **Investment Committee Report**
- **Analytical package**
- **AI interaction evidence**
- **Hidden-event response**

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

- The so called **hidden events** could be *Demand downturn* (Industrial demand falls and benefits from the growth-oriented projects P05, P06, P08 and P12 decline materially), *Energy shock* (Energy prices rise sharply and P04 becomes eligible for a substantial subsidy, *Cybersecurity event* (A serious incident at a peer company causes the Board to accelerate P03), *Product breakthrough* (A major customer substantially increases the expected value of P05, provided launch occurs before a deadline) or *Capital cut* (The 2028 investment budget is reduced by EUR 1.5 million and additional debt is prohibited.)

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

  <div>• <b>Stage 1: Reconstruct the portfolio decision</b> (The question is which combination of projects creates the strongest portfolio?)</div>
  <div>• <b>Stage 2: Clean and reconcile the evidence</b> (You should build a clean project master table.)</div>
  <div>• <b>Stage 3: Define success before selecting projects</b> (Groups should explicitly define what constitutes a good portfolio.)</div>
  <div>• <b>Stage 4: Evaluate the projects individually</b> (AI can support different parts of the challenge.)</div>
  <div>• <b>Stage 5: Build candidate portfolios</b> (Consider at least Conservative / resilience-oriented portfolio and Growth-oriented / higher-risk portfolio.)</div>
  <div>• <b>Stage 6: Test uncertainty</b> </div>
  <div>• <b>Stage 7: Compare alternative portfolios</b> (You must demonstrate whether your plan improves the existing plan.)</div>
  <div>• <b>Recommend and govern</b> (What should management approve now, and what should remain conditional?)</div>

</div>

::right::

<div style="height: 20px;"></div>

### Assessment criteria.

<div style="font-size:0.72em">

| Criterion                                          | Weight |
| -------------------------------------------------- | -----: |
| Problem formulation and managerial relevance       |    15% |
| Definition and justification of success criteria   |    10% |
| Prompting and AI-interaction design                |    15% |
| Data and evidence preparation                      |    15% |
| Analytical, scripting or workflow quality          |    15% |
| Validation, testing and critical assessment        |    15% |
| Feasibility and usefulness for decision-making     |    10% |
| Traceability, responsible AI use and communication |     5% |


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
