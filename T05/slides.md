---
theme: seriph
background: /images/Designer-02.png
title: Managing with Artificial Intelligence
info: |
  # Master in Organizational Engineering
  Academic Year 2026-27
class: text-center
drawings:
  persist: false
transition: slide-left
comark: true
duration: 45min
---

<style>
.slidev-layout,
.slidev-layout h1,
.slidev-layout h2,
.slidev-layout h3 {
  color: black;
}
.slidev-layout { font-size: 0.84rem; }
h3 { font-size: 1.28rem; line-height: 1; margin: 0 0 0.35rem 0; }
table { font-size: 0.68rem; line-height: 1.05; margin-top: 0.25rem; }
th, td { padding: 0.16rem 0.32rem; }
.small { font-size: 0.68rem; }
.tiny { font-size: 0.60rem; }
.box {
  border: 1px solid #9ca3af;
  border-radius: 10px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.82);
}
.flow {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  align-items: stretch;
}
.role-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
}
.three-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 14px;
}
</style>

# Course Management with AI

## Challenge 02: Human-in-the-Loop Planning, Scheduling and Resource Allocation

<div class="mt-10 text-lg">
Recover the Weekly Production Plan — but make the <b>decision process</b> auditable, collaborative and genuinely human-owned.
</div>

<div @click="$slidev.nav.next" class="mt-10 py-1" hover:bg="grey op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/jordieres/MwAI-slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

---
title: "Why the Challenge Has Changed"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Why the challenge has changed

The original challenge already required teams to:

- reconstruct and clean the production problem;
- define success criteria;
- design a scheduling strategy;
- use AI as an engineering assistant;
- build and validate the schedule;
- compare it against the baseline.

<div class="box mt-5">
<b>Problem:</b> if all data, criteria and alternatives are available from the beginning, a capable LLM can analyse the full package, generate code, iterate, validate and produce a schedule with very little team interaction.
</div>

<div class="box mt-4">
<b>Updated design goal:</b> AI should remain powerful and useful, but the complete challenge must depend on <b>distributed information, human authorisation, sequential releases, competing perspectives and re-decisions</b>.
</div>

---
title: "Management Context"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left::

### Management context

Nova Precision Components operates a five-day, two-shift production system serving industrial customers with different priorities and delivery commitments.

<div class="three-cols mt-4 small">
<div class="box"><b>Operations</b><br/>Cutting<br/>Milling<br/>Heat treatment<br/>Finishing</div>
<div class="box"><b>Resources</b><br/>Alternative machines<br/>Specialised operators<br/>Maintenance<br/>Sequence-dependent setups</div>
</div>

::right::

<div class="three-cols mt-4 small">
<div class="box"><b>Management pressures</b><br/>Due dates<br/>Material uncertainty<br/>Energy prices<br/>Cost and penalties<br/>Reliability</div>
</div>

<div class="mt-5">
The legacy weekly plan is not guaranteed to be feasible or economically attractive.
</div>

<div class="box mt-4 text-center text-lg">
<b>Your team must decide what Nova should execute — and defend how that decision was reached.</b>
</div>

---
title: "Common Data Package"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Common data package

<div class="role-grid small mt-4">
<div>
<b>Production data</b>
- Orders and customer commitments
- Routing and precedence
- Machines and eligibility
- Maintenance
- Setups
- Shift calendar
</div>
<div>
<b>Resource and uncertainty data</b>
- Workforce and availability
- Materials and supplier confidence
- Energy prices and carbon intensity
- Historical processing reliability
- Baseline schedule
- Submission template and validator
</div>
</div>

<div class="box mt-6">
The common package contains <b>52 unique orders and 200 required operations</b>. It intentionally contains data-quality problems and cross-file inconsistencies, originated from the human data preparation.
</div>

<div class="download-card mt-4">
  <h4>Student Package</h4>
  <p>
  <a href="/~jordieres/data/Challenge_2_Planning_Scheduling_Student_Package.zip">
     📦 <b>Challenge_2_Planning_Scheduling_Student_Package.zip</b>
  </a></p>
</div>

---
title: "The New Management Question"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

### The management question

<b>Which production schedule should Nova execute, under which assumptions, and why should management accept the decisions that produced it?</b>

The final CSV is necessary, but it is not sufficient.

Your work must demonstrate:

- feasibility;
- comparative performance;
- managerial trade-offs;
- robustness;
- decision traceability;
- human ownership of consequential choices.

::right::

### Core rule

<div class="box">
AI may generate alternatives, code, schedules, sensitivity analyses and critiques.
</div>

<div class="box mt-3">
AI may <b>not</b> provide organisational authorisation for overtime, maintenance displacement, customer delay, outsourcing or process exceptions.
</div>

<div class="box mt-3">
Some information does not exist in your information set until a gate is closed. <b>Do not fabricate unreleased information.</b>
</div>

---
title: "Why a Single LLM Prompt Is Not Enough"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Information architecture

<div class="flow mt-7 small">
<div class="box text-center"><b>Common data</b><br/>whole team</div>
<div class="box text-center"><b>Private role cards</b><br/>one per member</div>
<div class="box text-center"><b>Gate decision</b><br/>recorded first</div>
<div class="box text-center"><b>Conditional release</b><br/>depends on decision</div>
<div class="box text-center"><b>Re-decision</b><br/>human-owned</div>
</div>

<div class="mt-7 text-center text-lg">
<b>No initial prompt contains the complete problem.</b>
</div>

<div class="box mt-5">
The objective is not to prevent students from asking an LLM to analyse alternatives. The objective is to make the <b>full organisational process</b> impossible to replace by one initial AI request.
</div>

---
title: "Ten Roles"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Ten roles: operational and market perspectives

| ID | Role | Main responsibility | Typical decision tension |
|---|---|---|---|
| R01 | Production Planning Lead | sequencing, capacity, bottlenecks | utilisation vs future feasibility |
| R02 | Customer Service Manager | customer commitments, service | contractual KPI vs strategic relationship |
| R03 | Maintenance & Reliability Manager | machine health, maintenance | production recovery vs reliability |
| R04 | Workforce Manager | skills, shifts, overtime | feasibility vs workload/fairness |
| R05 | Materials & Supply Manager | material readiness, supplier risk | nominal arrival vs robust readiness |

<div class="box mt-5">
Each role receives <b>private information</b> that is not initially available to the other nine members.
</div>

### Ten roles: economic, quality, risk and AI governance perspectives

| ID | Role | Main responsibility | Typical decision tension |
|---|---|---|---|
| R06 | Energy & Sustainability Manager | tariffs, power, carbon | energy exposure vs production timing |
| R07 | Finance Controller | cost, penalties, budgets | measurable cost vs unpriced risk |
| R08 | Quality & Process Engineer | routing, QA, process conformity | eligibility vs true operational equivalence |
| R09 | Risk & Resilience Manager | stress tests, disruption response | nominal efficiency vs robustness |
| R10 | AI & Validation Auditor | provenance, completeness, validation | plausible AI output vs verified evidence |

<div class="box mt-5">
R10 does not build one of the competing strategies at Gate 3. The auditor must remain sufficiently independent to challenge them.
</div>

---
title: "Pre-commitment Before Discussion"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

### Individual position first

Before the team discussion, each relevant member records:

- issue as understood;
- initial recommendation;
- supporting evidence;
- private role evidence;
- main benefit;
- main risk;
- rejected alternative;
- missing information;
- condition that would change the position.

::right::

### Why?

<div class="box">
It creates <b>divergence before convergence</b> and makes changes of mind observable.
</div>

<div class="box mt-3">
It reduces retrospective rationalisation: the team cannot claim that everyone “always agreed” after seeing the final answer.
</div>

<div class="box mt-3">
AI may help prepare the individual position, but the student must later explain what evidence changed — or did not change — the recommendation.
</div>

---
title: "The Mandatory Gate Pattern"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left::

### Every major gate follows the same logic

<div class="flow mt-8 small">
<div class="box text-center"><b>1. Pre-commit</b><br/>individual view</div>
<div class="box text-center"><b>2. Diverge</b><br/>alternatives</div>
<div class="box text-center"><b>3. Challenge</b><br/>cross-review</div>
<div class="box text-center"><b>4. Decide</b><br/>human gate</div>
<div class="box text-center"><b>5. Release</b><br/>new information</div>
</div>

::right::

<div class="flow mt-5 small" style="grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: 65%; margin-left:auto; margin-right:auto;">
<div class="box text-center"><b>6. Re-open?</b><br/>impact assessment</div>
<div class="box text-center"><b>7. Re-decide</b><br/>confirm / modify / revoke</div>
<div class="box text-center"><b>8. Trace</b><br/>decision register</div>
</div>

<div class="mt-7 text-center">
<b>Human-in-the-loop is therefore a workflow property, not a sentence in the prompt.</b>
</div>

---
title: "Gate 1 — Production Model Acceptance"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

### Before optimisation

Each role audits its domain:

- orders and customers;
- routing and capacity;
- maintenance;
- workforce;
- materials;
- energy;
- cost;
- quality;
- reliability;
- cross-file consistency.

Required outputs: `Transformation Log`, `Assumption Register`, `Inconsistency Register`

::right::

### Gate 1 rule

<div class="box">
No issue that can materially change feasibility may be resolved silently.
</div>

Example deliberately present in the package:

- one source appears to extend the calendar beyond the horizon accepted by the validator.

The team must identify the conflict, document its impact and request clarification.

<b>Only then</b> does the instructor release the official interpretation.

---
title: "Gate 2 — Define Success Before Optimising"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Hard constraints ≠ thresholds ≠ objectives

The team must classify relevant rules as:

`HARD | THRESHOLD | OBJECTIVE | UNRESOLVED`

Then declare a dominant management profile:

| Profile | Typical priority | Counter-pressure released afterwards |
|---|---|---|
| SERVICE | delivery reliability / strategic customers | cost and overtime limits |
| EFFICIENCY | cost / utilisation / throughput | strategic service protection |
| RESILIENCE | robustness / sustainability / slack | service and opportunity-cost requirements |

<div class="box mt-5">
The release occurs <b>after</b> the team has committed to a success definition. The team must then confirm or revise it.
</div>

---
title: "Gate 3 — Competing Scheduling Strategies"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left:: 

### Three competing cells + one independent auditor

<div class="three-cols mt-5 small">
<div class="box"><b>Cell A</b><br/>R01 + R04 + R08<br/><br/><b>Production / process driven</b><br/>capacity, sequencing, workforce, routing</div>
<div class="box"><b>Cell B</b><br/>R02 + R05 + R07<br/><br/><b>Service / economic driven</b><br/>customers, materials, penalties, cost</div>
</div>

::right::

<div class="three-cols mt-5 small">
<div class="box"><b>Cell C</b><br/>R03 + R06 + R09<br/><br/><b>Reliability / resource driven</b><br/>maintenance, energy, resilience</div>
</div>

<div class="box mt-5 text-center">
<b>R10 = independent auditor</b> — validates assumptions and attacks weaknesses; does not build a competing strategy.
</div>

Each cell must produce genuinely different scheduling logic, not cosmetic variations of the same AI answer.

---
title: "Blind Cross-Review and Integrative Merge"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

### Cross-review

A different cell must identify:

1. one weak or hidden assumption;
2. one feasibility risk;
3. one understated managerial consequence;
4. one required sensitivity test;
5. one element worth preserving.

The builder cannot be the only critic of its own strategy.

::right::

### Integrative merge

The team is <b>not</b> required to pick one cell as a winner.

It may merge:

- sequencing logic from A;
- customer weights from B;
- protected capacity from C;
- validation controls from R10.

The team must state what was:

<b>retained → rejected → modified → newly negotiated</b>.

Finally classify the merged design:

`SERVICE | COST_ENERGY | THROUGHPUT | ROBUSTNESS`

---
title: "Gate 4 — Decision-Dependent Disruption"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### The merged design determines the next event

| Declared merged logic | Hidden branch released after Gate 3 |
|---|---|
| SERVICE | unexpected 180-minute finishing interruption |
| COST_ENERGY | strategic customer escalation on WO-1040 |
| THROUGHPUT | finishing workforce availability shock |
| ROBUSTNESS | confirmed 40% D4B energy-price shock |

<div class="box mt-5">
Each branch contains <b>10 different role-specific update cards</b>. Members first analyse the impact individually; only then are the updates discussed collectively.
</div>

Required management decision:

`KEEP | LOCAL REPAIR | PARTIAL RESCHEDULING | FULL RESCHEDULING`

The team must explain what should be preserved and why.

---
title: "Gate 5 — Exception, Consequence, Re-decision"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Some repairs require management authorisation

The team may need to select one primary exception:

| Exception | Required human ownership | Hidden consequence released afterwards |
|---|---|---|
| OVERTIME | Workforce + Finance | tighter operator-level overtime restriction |
| MAINTENANCE_MOVE | Maintenance/Reliability | worsening condition-monitoring signal |
| OUTSOURCE | Materials + Finance + Quality | supplier can accept only one order + QA activity |
| ACCEPT_DELAY | Customer Service + Finance | strategic escalation / partial-delivery choice |
| ALTERNATIVE_ROUTING | Quality/Process | QA-capacity consequence |

<div class="box mt-5">
<b>Gate 5 is not closed when the exception is chosen.</b> The consequence is then released and the team must confirm, modify or revoke its decision.
</div>

---
title: "Human Authorisation Is Not an Optimisation Variable"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Multi-signature governance

Examples:

- overtime → R04 + R07;
- maintenance displacement → R03;
- customer delay / promise change → R02 (+ financial impact from R07);
- outsourcing → R05 + R07 + R08;
- alternative routing → R08;
- final structural acceptance → R10.

<div class="box mt-6">
The AI may say: <i>“180 minutes of overtime would eliminate two late orders.”</i>
</div>

<div class="box mt-3">
The AI may <b>not</b> say: <i>“Therefore overtime is authorised.”</i>
</div>

The authorisation itself is an organisational decision with accountable owners.

---
title: "Gate 6 — Independent Validation"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### A plausible schedule is not necessarily a valid schedule

Ten independent domain checks are required:

<div class="role-grid small mt-4">
<div>R01 — production consistency</div><div>R06 — energy/carbon</div>
<div>R02 — customer commitments</div><div>R07 — cost/penalties/outsourcing</div>
<div>R03 — maintenance/reliability</div><div>R08 — routing/quality/eligibility</div>
<div>R04 — workforce/overtime</div><div>R09 — robustness/stress testing</div>
<div>R05 — material availability</div><div>R10 — completeness/structure/AI traceability</div>
</div>

<div class="box mt-5">
The lightweight validator is not enough. The team must independently confirm that all <b>200 required operation keys</b> are represented exactly once unless a formally documented exception changes the representation.
</div>

---
title: "Gate 7 — Compare, Decide, Defend"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

### Baseline comparison

Do not write only:

> “Our schedule is better.”

Explain:

- what improves;
- what deteriorates;
- who bears the cost or workload;
- which risks remain;
- which assumptions matter;
- what would change the decision.

Minority opinions are allowed and should be preserved.

::right::

### Final individual challenge

After the team recommendation, each student receives a previously unreleased perturbation related to their role.

The student does not need to recompute the entire schedule.

They must explain:

- what part of the reasoning changes;
- which decision gate should reopen;
- what should remain frozen;
- what information would be needed next.

---
title: "Required Team Deliverables"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left::

### The submission is a decision dossier, not only a CSV

<div class="three-cols small mt-4">
<div class="box"><b>Data & evidence</b><br/>Transformation Log<br/>Assumption Register<br/>Inconsistency Register</div>
<div class="box"><b>Individual work</b><br/>Role position records<br/>Gate impact analyses<br/>Final defence</div>
<div class="box"><b>Team decisions</b><br/>Gate records<br/>Decision Register<br/>Minority opinions</div>
</div>

::right:: 

<div class="three-cols small mt-4">
<div class="box"><b>Scheduling</b><br/>3 strategy proposals<br/>Cross-reviews<br/>Integrative Merge<br/>Reproducible method</div>
<div class="box"><b>Validation</b><br/>Final schedule CSV<br/>Domain checks<br/>Stress tests<br/>Validation Certificate</div>
<div class="box"><b>Management</b><br/>KPI comparison<br/>Trade-off explanation<br/>Final recommendation<br/>Reconsideration triggers</div>
</div>

---
title: "AI Interaction Requirements"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

### AI is expected

Use AI for:

- data preparation;
- code;
- heuristics or optimisation;
- schedule generation;
- sensitivity analysis;
- adversarial critique;
- documentation.

A full optimisation model is not mandatory.

::right::

### But consequential use must be traceable

Log AI interactions that affect:

- data corrections;
- constraints;
- scheduling logic;
- KPI calculations;
- gate decisions;
- validation;
- final recommendations.

For each: purpose, output used, verification performed, and human decision affected.

<div class="box mt-4"><b>AI assistance is allowed. Unverified AI authority is not.</b></div>

---
title: "Assessment Criteria"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Suggested assessment criteria

| Criterion | Weight |
|---|---:|
| Production-system reconstruction and data quality | 10% |
| Individual role analysis and pre-commitment | 15% |
| Gate decisions and managerial trade-off reasoning | 15% |
| AI interaction design, traceability and verification | 10% |
| Scheduling method, reproducibility and technical quality | 15% |
| Competing alternatives, cross-review and integrative merge | 10% |
| Independent validation, robustness and disruption response | 15% |
| Final schedule and management recommendation | 10% |

<div class="box mt-5">
The objective is not to prove that students worked without AI. The objective is to demonstrate that they can <b>use AI, challenge it, integrate evidence and retain accountability for management decisions</b>.
</div>

---
title: "The Learning Objective"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

<div class="mt-18 text-center">

# AI generates possibilities.

# Humans own the decisions.

<div class="mt-8 text-xl">
The challenge is complete only when the team can explain not just <b>what schedule</b> it produced, but <b>why the organisation should trust the process that produced it</b>.
</div>

</div>
