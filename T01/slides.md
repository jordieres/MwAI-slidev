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

# Presentation of the Course Management with AI

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
title: Managing with Artificial Intelligence
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

### Master in Organizational Engineering

Artificial Intelligence **is transforming the way organizations make decisions, solve problems and create value**.

The course “Management with Artificial Intelligence” aims to introduce students to the *applied, critical and responsible* use of artificial intelligence tools, with particular emphasis on generative AI, as a support for decision-making and problem solving in different management domains. 

The course *is not conceived as a purely technical course on programming or algorithmic modelling*, but as a learning environment in which students learn to formulate management problems, structure information, design AI-assisted work assignments, critically assess outputs and communicate conclusions that are useful for managerial action.

**Welcome to the course.**

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the Course Guide](https://www.upm.es/comun_gauss/publico/guias/2026-27/GA_05BL_53002103_EN_2026-27.pdf)
-->

---
title: What is this course about?
layout: two-cols
background: ./images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 30px;"></div>

<v-clicks>

- Not a programming course
- Not a machine learning development course
- A course about using AI for management

</v-clicks>

<v-clicks>

### You will learn to:

</v-clicks>

<v-clicks>

- Formulate management problems
- Interact effectively with AI systems
- Validate outputs
- Identify risks and limitations
- Communicate actionable recommendations

</v-clicks>

<div style="height: 20px;"></div>

<span style="font-size:10px;">Source: GA_05BL_53002103_EN_1.pdf.</span>

::right::

<v-clicks>

<div style="height: 40px;"></div>

```mermaid
flowchart TD
    N1[Programming]
    N2[ML Development]

    MP[Management Problems]
    AI[AI Tools]
    DS[Decision Support]
    BI[Business Impact]

    N1 -. not the focus .-> AI
    N2 -. not the focus .-> AI

    MP --> AI --> DS --> BI

    style AI fill:#009fe3,color:#fff
    style BI fill:#009879,color:#fff
```
</v-clicks>

<!--
Pay attention to the course focus all the time
-->

---
title: Why AI for Management?
layout: two-cols
background: ./images/Designer.png
backgroundSize: cover
---

::left:: 

<div style="height: 30px;"></div>

## AI is increasingly used in:

- Operations
- Finance
- Research
- Innovation
- Strategy
- Human Resources
- Sustainability

::right::

<div style="height: 30px;"></div>

## Key Idea

> AI expands analytical capabilities.

But:

> Human judgment remains responsible for final decisions.

This means YOU must be aware of what you have asked, how you did it and the trustability of the answer.

<div style="height: 100px;"></div>

<span style="font-size:10px;">Source: GA_05BL_53002103_EN_1.pdf.</span>


---
title: Course Goal
layout: two-cols
background: ./images/Designer.png
backgroundSize: cover
---

::left:: 

<div style="height: 30px;"></div>

### By the end of the course you should be able to:

<v-clicks>

✅ Identify AI opportunities

✅ Transform ambiguous situations into structured problems

✅ Design AI-assisted workflows

✅ Critically evaluate outputs

✅ Build useful management deliverables

✅ Communicate professional recommendations

</v-clicks>

::right::

<div style="height: 30px;"></div>

<v-clicks>

<div style="transform: scale(0.8); transform-origin: top center;">

```mermaid
flowchart TD

    P["❓ Ambiguous<br/>Situation"]

    AI["🤖 AI-Assisted<br/>Analysis"]

    D["⚖️ Management<br/>Decision"]

    V["📈 Business<br/>Value"]

    P --> AI --> D --> V

    style P fill:#E3F2FD,stroke:#64B5F6
    style AI fill:#00AEEF,color:#fff,stroke:#0077AA
    style D fill:#90CAF9,stroke:#1E88E5
    style V fill:#00A651,color:#fff,stroke:#007055
```
</div>

</v-clicks>

---
title: AI is a Cognitive Assistant
layout: default
background: ./images/Designer.png
backgroundSize: cover
---

### What AI SHOULD do

<div style="margin-left: 40px;">

  ✅ Support analysis

  ✅ Generate alternatives

  ✅ Accelerate learning

  ✅ Improve productivity
</div>

<br>

### What AI SHOULD NOT do

<div style="margin-left: 40px;">

  ❌ Replace professional responsibility

  ❌ Substitute critical thinking

  ❌ Be trusted without validation

</div>
<div style="height: 10px;"></div>

<span style="font-size:10px;">Source: GA_05BL_53002103_EN_1.pdf.</span>

---
title: Course Topics
layout: default
class: text-center
background: ./images/Designer.png
backgroundSize: cover
---

<div style="transform: scale(1.15); transform-origin: top center;">

```mermaid
mindmap
  root((Managing with AI))
    AI Fundamentals
    Document Analysis
    Operations
    Planning
    Finance
    Research
    Strategy
    Innovation
    Agentic AI
    RAG
    People & Change
    Sustainability
    Critical Evaluation
    AI Workflows
```
</div>


---
title: Assessment Criteria
layout: two-cols
background: ./images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 20px;"></div>

## Progressive Assessment

It is group driven with individual tunning.

<v-clicks>

✅ Weekly portfolio of group assignments: 60% (Group).

✅ Final integrative group project: 17.5% (Group).

✅ Gamification: 15% (Individual).

✅ Individual class participation: 7.5% (Individual).

</v-clicks>

::right::

<div style="height: 20px;"></div>

## Final Assessment

> **Theoretical Exam** (can be ran in Oral mode).

<div class="compact-list">

<v-clicks>

✅ Mastery of fundamental concepts (20%).

✅ Application to management problems (15%).

✅ Analysis and critical evaluation of results (15%).

✅ Responsible use, ethics, and governance (10%).

</v-clicks>

</div>

> **Practical Test.**

<div class="compact-list">

<v-clicks>

✅ Definition and contextualization of the problem (6%).

✅ Design of the approach and workflow (8%).

✅ Effective use of AI tools (8%).

✅ Validation, comparison, and critical analysis (8%).

✅ Quality of the result and usefulness for management (5%).

✅ Communication and presentation of the deliverable (3%).

✅ Traceability and declaration of AI use (2%).

</v-clicks>
</div>

---
title: Everything clear?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="height: 80px;"></div>

# Feel free to ask any question you may have ... 

<v-clicks>

<div style="height: 60px;"></div>

<div style="font-size: 32pt;text-align:center; color: red;">NOW!</div>

<div style="height: 40px;"></div>

Moodle: 🌐 https://moodle.upm.es/titulaciones/oficiales2627/course/view.php?id=26069

Email: [✉ Contact](mailto:j.ordieres@upm.es)

</v-clicks>

<!--
Time for handling questions
-->
---
title: Topics of activities
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

# Rubrics

The competition should not reward simply obtaining the highest headline
number. It should reward the best professionally defensible solution. 
Each challenge should include three evaluation layers.

### Common rubric

| **Criterion** | **Weight** |
|---|---:|
| Problem formulation and managerial relevance | 15% |
| Definition and justification of success criteria | 10% |
| Prompting and AI-interaction design | 15% |
| Data and evidence preparation | 15% |
| Analytical, scripting or workflow quality | 15% |
| Validation, testing and critical assessment | 15% |
| Feasibility and usefulness for decision-making | 10% |
| Traceability, responsible AI use and communication | 5% |

<div class="grid grid-cols-2 gap-5">

<div>

### Challenge performance

| **Performance dimensions** |
|---|
| Schedule performance |
| Return under simulated scenarios |
| Strategic consistency |
| Workflow reliability |
| Robustness under hidden cases |

</div>

<div>

### Recognition awards

| **Award categories** |
|---|
| Best management insight |
| Best validated solution |
| Most innovative use of AI |
| Best risk analysis |
| Best executive communication |

</div>

</div>

<style>
.slidev-layout {
  font-size: 0.78rem;
  line-height: 1.12;
}

h1 {
  font-size: 1.7rem;
  margin: 0 0 0.3rem 0;
}

h3 {
  font-size: 1rem;
  line-height: 1;
  margin: 0.35rem 0 0.15rem 0;
}

p {
  margin: 0.1rem 0 0.25rem 0;
  line-height: 1.15;
}

table {
  width: 100%;
  font-size: 0.68rem;
  line-height: 1;
  margin: 0.1rem 0 0.25rem 0;
}

th,
td {
  padding: 0.16rem 0.32rem;
}

.grid {
  margin-top: 0.15rem;
}
</style>

---
title: Challenges
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Challenge 1: Should Orion Manufacturing Adopt an AI-Enabled Operations Platform?

#### Management context

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
title: Other Challenges
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Challenge 2: Planning, Scheduling and Resource Allocation. Recover the Weekly Production Plan

#### Management context

A fictional manufacturer must schedule a portfolio of production orders across several resources over a five-day horizon. A key machine becomes unavailable, two urgent orders arrive, labour availability is constrained and some tasks require specialised operators.
The group must produce a feasible and defensible recovery schedule.


### Challenge 3: Capital Investment Portfolio Selection. Which Projects Should the Company Fund?

#### Management context

A diversified company has a fixed three-year investment budget and must choose among competing projects. Some projects are mandatory, some are mutually exclusive, and others create synergies or require common infrastructure.
The challenge is deliberately more complex than ranking projects by net present value.
</div>

---
title: Other Challenges
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="font-size:0.82em">

### Challenge 4: Digital Health Strategy and Business Model Innovation. Design a Viable Digital Health Service for Chronic-Care Management

#### Management context

A regional healthcare provider wants to improve the management of patients with a chronic condition through a digital service. The service may combine:

<div class="four-cols">

<div>• patient-reported data;</div>
<div>• remote monitoring;</div>
<div>• professional dashboards;</div>
<div>• alerts;</div>
<div>• education;</div>
<div>• appointment prioritisation;</div>
<div>• care coordination.</div>

</div>

The objective is not to develop a clinical diagnostic model. It is to design a credible digital-health strategy, operating model and business case.
A suitable fictional use case would be remote monitoring for patients with multiple sclerosis, diabetes, chronic obstructive pulmonary disease or heart failure. Multiple sclerosis is particularly suitable because it creates clear needs concerning longitudinal monitoring, care coordination, patient-generated data and variable disease progression.

</div>


<style>
  .four-cols{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px 20px;
    font-size: 0.72rem;

    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>


---
title: Other Challenges
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="font-size:0.82em">

### Challenge 5: Integrated AI-Enabled Management Workflow. AI-Assisted Project Intake, Evaluation and Portfolio Governance Workflow

This workflow should provide a meaningful culmination because it integrates document analysis, prompting, data preparation, scripting, tool use, validation, state management and human review.

#### Management context

Transform a heterogeneous proposal into a structured, validated and auditable Project Evaluation Dossier.
A large organisation receives many internal proposals for:

<div class="three-cols">

<div>• digital-transformation projects;</div>
<div>• operational improvements;</div>
<div>• sustainability initiatives;</div>
<div>• research and innovation activities;</div>
<div>• capital investment.</div>

</div>

Currently, proposals are submitted in different formats, assessed inconsistently and repeatedly returned because information is missing. Senior management wants an AI-assisted workflow that improves consistency and speed while preserving human decision authority.
The system must not autonomously approve projects. It must prepare an evidence-based recommendation for a review committee.

</div>


<style>
  .three-cols{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px 20px;
    font-size: 0.72rem;

    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>
