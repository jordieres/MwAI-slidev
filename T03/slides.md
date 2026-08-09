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
  Academic Year 2026-27 (https://apiivm01.etsii.upm.es/~jordieres/T03/)
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

## Example of prompt

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
title: How's about this propmt?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="font-size:0.72em">

### Task:

You are analyzing a sentence from a **10-K financial report**, specifically from the perspective of the company that issued the report. Analyze the given text and classify it into **one financial topic**. If no topic fits, return 'None'.

#### Multi-Area Topic Assignment Rule:

- If a topic includes multiple distinct subtopics (e.g., 'regulation / tax' or 'litigation / legal / intellectual property'), a sentence is correctly  assigned as long as it relates to **at least one** of the subtopics. **It does not need to cover all aspects.**
- Examples:,
  - A sentence about patents relates to 'intellectual property' and is therefore correctly assigned to 'litigation / legal / intellectual property', even if there is no mention of 'litigation' or 'legal'.,
  - A sentence about corporate tax belongs to 'regulation / tax' even  if it does not discuss regulations explicitly.

#### General Guidelines:

- Ensure that the topic assignment reflects the perspective **of the company itself, not third parties** mentioned in the sentence,
- Use the provided topic keywords only as **guidance** but do not assume the topic just because of a matching word,
- You must assign exactly one topic from the list below. If no financial topic matches, return 'None' as the assigned topic,
- Keep the explanation **general** and **concise** (max 2 sentences),
- Additionally, estimate the **confidence** in the sentence being correctly assigned to the topic, and provide a percentage probability (0-100%).

</div>

---
title: How's about this propmt?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="font-size:0.72em">

### Topics and Keywords:

*sales*: [sale, revenue, consumer, demand, competition, pricing],
*cost and expense*: [cost, expense, goodwill, impairment, depreciat], 
*profit and loss*: [profit, margin, income, earning, loss,ebit, operatingresult, financialresult, yearendresult], 
*operations*: [operation, production, business, produce, supply, supplier, process, manufacture, manufacturing, logistic, transport, marketing, advertise, advertising, projectmanag, inventorymanag, safetymanag, qualitycontrol], 
*liquidity and solvency*: [liquidity, solvency, solvent, goingconcern, cash, workingcapital, bankbalance], 
*investment*: [expenditure, m&a, invest, asset, disposal, divest],
*financing and debt*: [financing, finance, debt, equity, dividend, repurchase, securities, borrow, credit, stockperformance], 
*litigation and intellectual property*: [litigation, lawsuit, legal, dispute, complaint, arbitration, patent, intellectualproperty], 
*hr*: [employee, retention, hiring, hire, union, consultant, staff, recruit, labor, incentiv, training, salary, wage, job, humancapital, talentmanag, successionmanag, hrmanag, nextgenerationmanag, talentdevelop, feedbackcultur, workremote, remotework, worklife, worklifebalance, leadership, careerdevelop, employment, employing, ehsperformance, genderaffirm], 
*regulation and tax*: [regulation, tax, government, legislation, federal, regulator, regulate], 
*accounting*: [account, audit, adjustment, filing, internalcontrol, controlframework, controlstruct, controlrisk], 
*environmental, social, government (ESG)*: [plastic, recycl, waste, carbon, emission, renewable, environment, sustain, ecologic, waterrisk, waterfootprint, diversity, inclusion, ethics, ethical, esgperformance],

sales, cost and expense, profit and loss, operations, liquidity and solvency, investment, financing and debt, litigation and intellectual property, hr, regulation and tax, accounting, environmental, social, government (ESG)

</div>

---
title: How's about this propmt?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="font-size:0.62em">

### Sentence (Analyze the meaning, not just keywords):

during fiscal we completed our acquisition of privately held fotolia a leading marketplace for royaltyfree photos images graphics and hd videos for milli
on,

### Examples of semantically closest labeled neighbors:

**Example 1:**
**Text:** the third quarter of we began to use a combination of call an
d put option contracts for copper in netzerocost collar arrangements zerocost co
llars that establish ceiling and floor prices for copper,
**Assigned Topic:** cost and expense,

**Example 2:**
**Text:** qualitycontrols and ody tests qualitycontrols and,
**Assigned Topic:** operations,

**Example 3:**
**Text:** when applying a wastelike appr when applying a wastelike appr oach to all raw materials of the feedstock which implies that no upstream burdens have been allocated to these raw materials
**Assigned Topic:** environmental, social, government (ESG),

**Example 4:**
**Text:** in we began to use a combination of call and put option contracts for copper in netzerocost collar arrangements zerocost collars that establish ceiling and floor prices for copper,
**Assigned Topic:** cost and expense,

**Example 5:**
**Text:** because we are the merchant of record on most of our transactions we are responsible for creditcard transactions on our website that are disputed by customers with their creditcard companies including disputes involving fraudulent transactions,
**Assigned Topic:** litigation and intellectual property,

</div>

---
title: How's about this propmt?
layout: default
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

<div style="font-size:0.62em">

### Input Text & Context:
Previous Sentence: management s discussion and analysis of financial condition and results of operations the following discussion should be read in conjunction with our consolidated financial statements and notes thereto,

Current Sentence: during fiscal we completed our acquisition of privately  held fotolia a leading marketplace for royaltyfree photos images graphics and hd videos for million,

Next Sentence: during fiscal we integrated fotolia into our digital media  reportable segment,

### Response Format (Follow exactly):

1. Topic: [One topic from the list OR 'None'],
2. Explanation: [One or two sentences explaining the reasoning],
3. Probability: [Percentage 0–100]

</div>
