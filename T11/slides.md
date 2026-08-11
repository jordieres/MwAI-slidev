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

## Challenge 05: AI-Assisted Listed-Asset Portfolio Management

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
title: "Design of Workflow: Management Context"
layout: default
transition: fade-out
background: ./images/Designer_02.png
backgroundSize: cover
---

<div style="height: 10px;"></div>

<!-- <div style="font-size:0.2em"> -->

### Management context

Aurora Global Allocation Fund is an EUR-denominated, benchmark-aware, long-only multi-asset fund investing in liquid listed instruments.

The fund seeks to outperform its strategic benchmark over a rolling multi-year horizon while maintaining disciplined control of:

<div class="three-cols">

<div>• absolute risk,</div>
<div>• benchmark-relative risk,</div>
<div>• concentration,</div>
<div>• liquidity,</div>
<div>• turnover,</div>
<div>• transaction costs,</div>
<div>• and mandate compliance</div>

</div>

The goal is **to design an AI-assisted workflow that supports this process**. Therefore, the question is **Can we design an AI-assisted investment workflow that helps a professional portfolio-management team transform uncertain and heterogeneous market evidence into a controlled, explainable and executable portfolio decision?**

The workflow must not autonomously trade or make final investment decisions. 
Its purpose is to help the portfolio-management team transform heterogeneous evidence into a transparent, validated and actionable rebalancing proposal.


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
title: "Design of Workflow: The Investment"
layout: two-cols
transition: fade-out
background: ./images/Designer_02.png
backgroundSize: cover
---

::left::

<div style="height: 10px;"></div>

<!-- <div style="font-size:0.2em"> -->
<div style="font-size:0.78em">

### The Investment Mandate

The Aurora Global Allocation Fund is managed against a strategic benchmark.
The principal rules include:

<div class="three-cols">

<div>• long-only positions,</div>
<div>• 98%–100% invested,</div>
<div>• maximum position sizes by instrument,</div>
<div>• equity exposure between 50% and 75%,</div>
<div>• government and corporate bonds between 20% and 40%,</div>
<div>• emerging-markets equity exposure no greater than 12%,</div>
<div>• high-yield exposure no greater than 8%,</div>
<div>• gold and listed real estate combined no greater than 14%,</div>
<div>• target annualised volatility between 8% and 13%,</div>
<div>• indicative tracking error no greater than 6%,</div>
<div>• normal one-way turnover below 20% per rebalance,</div>
<div>• any change greater than 5 percentage points requires explicit justification;</div>
<div>• estimated transaction costs must be considered;</div>
<div>• all final trades require Portfolio Manager approval.</div>

</div>
</div>

::right::

<div style="height: 10px;"></div>

<div style="font-size:0.78em">

### The Investment Universe

The portfolio can invest in 16 listed instruments representing major global asset classes and exposures.

<div class="compact-table">

| **Ticker** | **Exposure** |
|---|---|
| SPY | US Large Cap Equity |
| QQQ | US Growth Equity |
| IWM | US Small Cap Equity |
| VGK | European Equity |
| EWJ | Japanese Equity |
| EEM | Emerging Markets Equity |
| XLK | Technology |
| XLF | Financials |
| XLV | Health Care |
| IEF | 7–10Y US Treasuries |
| SHY | Short US Treasuries |
| TIP | Inflation-Protected Treasuries |
| LQD | Investment-Grade Credit |
| HYG | High-Yield Credit |
| GLD | Gold |
| VNQ | Listed Real Estate |

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
title: "Design of Workflow: Dataset"
layout: two-cols
transition: fade-out
background: /images/Designer_02.png
backgroundSize: cover
---

::left:: 
<div style="height: 10px;"></div>

<div style="font-size:0.68em">

### Data Package

The student package contains several complementary datasets, such as market data daily information from 2019 to the decision date, including:
<div style="font-size:0.48em">

- adjusted prices;
- trading volume;
- estimated bid–ask spreads.
</div>

Monthly indicators are provided as Macro context, including:
<div style="font-size:0.48em">

- global growth;
- inflation;
- policy rates;
- credit spreads;
- market volatility.

</div>

Research signals for each asset:
<div style="font-size:0.48em">

- momentum;
- valuation;
- earnings or carry;
- macro fit;
- analyst conviction;
- evidence quality.
</div>

The portfolio held immediately before the rebalance decision is also provided, as well as annualised asset volatility and covariance matrix covering the Risk information.


</div>

::right::
<div style="height: 10px;"></div>

<div style="font-size:0.82em">

### Datasets

<div class="download-card">
  <h4>Data Resources</h4>
  <p>Dataset to be used during the Challenge.
  <a href="/~jordieres/data/Challenge_5_Listed_Asset_Portfolio_Student_Package.zip">
     📦 <b>Download</b>
  </a></p>

  <br>

  <h4>Draft Investment Model</h4>
  <p>Potentially useful template.
  <a href="/~jordieres/data/Challenge_5_Portfolio_Workflow_Template.xlsx">
     📦 <b>Download</b>
  </a></p>

</div>

<br>


In addition Transaction-cost model is also estimated and provided:
<div style="font-size:0.48em">

- half-spread;
- market impact;
- one-way transaction cost.
</div>
Recent synthetic events relevant to the investment discussion have been also collected.

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
title: "Data Workflow: Request"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 10px;"></div>

<div style="font-size:0.7em">

  ### Required work by Groups

At the decision date, the portfolio-management team must answer:
> <p style="font-size:0.6em">What has changed in markets, risks and investment opportunities, and should the current portfolio be rebalanced?</p>

The goal is to design a workflow capable of supporting the complete decision cycle:
> <p style="font-size:0.6em; font-weight:bold;"> Mandate → Data → Research → Risk → Portfolio Construction → Compliance → Trade Proposal → Portfolio Manager Approval → Monitoring → Attribution → Rebalance </p>

The challenge is not about predicting which asset will produce the highest return. It is about designing a disciplined investment-management process under uncertainty.

<div class="compact-table">

| **Criterion** | **Criterion** |
| --- | --- |
| digital-health strategy | business-case development |
| patient segmentation | workflow redesign |
| service design | technology selection |
| operating model | privacy, safety and equity |
| adoption | organisational feasibility |


</div>

_*You are not expected simply to ask an AI system “which ETFs to buy.”.*_

</div>

::right::

<div style="height: 10px;"></div>

<div style="font-size:0.7em">

### Mission

You must produce a defensible target portfolio and explain how the workflow arrived at it. You must demonstrate that the workflow can:

<div style="font-size:0.65em;margin-left:40pt;">

<div>1. interpret the investment mandate;</div>
<div>2. prepare and validate market data;</div>
<div>3. synthesise research and macro evidence;</div>
<div>4. diagnose the current portfolio;</div>
<div>5. quantify risk;</div>
<div>6. generate candidate portfolios;</div>
<div>7. validate them against mandate constraints;</div>
<div>8. estimate turnover and transaction costs;</div>
<div>9. prepare a trade recommendation;</div>
<div>10. preserve human portfolio-manager approval;</div>
<div>11. monitor the portfolio after implementation;</div>
<div>12. evaluate realised performance out of sample.</div>


</div>

Notice that:

The package can contain data-quality issues. 
Examples include:
<div style="font-size:0.6em;margin-left:40pt;">

- inconsistent ticker formatting;
- percentages represented as both decimals and percentages;
- numeric values stored as text;
- ambiguous research scores;
- inconsistent date formats;
- embedded units;
- category inconsistencies.
</div>

You must identify and resolve these issues before relying on the data. Your workflow should make data-quality decisions visible and reproducible. 
Do not silently correct them. 

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
.slidev-layout p {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

.slidev-layout blockquote {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
</style>



---
title: "Design of Workflow: The Competition"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 10px;"></div>

<div style="font-size:0.7em">

  ### Mandate Gate

Scoring among compliant portfolios will be based on:

<div class="compact-table">

| **Dimension** | **Weight** |
|---|---:|
| Mandate compliance | 20% |
| Risk-adjusted out-of-sample performance | 20% |
| Drawdown control | 15% |
| Benchmark-relative performance | 15% |
| Turnover and transaction-cost discipline | 10% |
| Decision traceability and explanation | 10% |
| Hidden-event response | 10% |


</div>

### Required Delivearbles

1. ** Investment Process Architecture** (A diagram showing the complete workflow.)
2. **Investment Committee Report**
3. **Machine-Readable Target Portfolio** (Provide the final target weight for each instrument.)

</div>

::right::

<div style="height: 10px;"></div>

<div style="font-size:0.7em">

### Temporary delivery.

It is expected three installments:

- Event 1 — Mandate and Portfolio Review. At the beginning of the challenge, each team should present (No final investment recommendation is expected yet):
<div style="font-size:0.6em;margin-left:40pt;">

  - interpretation of the mandate;
  - benchmark structure;
  - current portfolio diagnosis;
  - main active positions;
  - important data-quality problems;
  - preliminary risk observations.
</div>

- Event 2 — Workflow Architecture Review. Present the proposed workflow.
- Event 3 — Initial Rebalance Recommendation. Using only information available up to the official decision date, submit (Once submitted, the portfolio is frozen):
<div style="font-size:0.6em;margin-left:40pt;">

- current portfolio diagnosis;
- market and investment view;
- target portfolio;
- trade list;
- risk metrics;
- transaction-cost estimate;
- mandate-compliance report;
- key investment risks;
- invalidation triggers.
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
.slidev-layout p {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

.slidev-layout blockquote {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
</style>




---
title: "Design of Workflow: Additional notes"
layout: two-cols
transition: fade-out
background: ./images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 20px;"></div>

  ### Suggested action plan (Not mandatory)

<div style="font-size:0.8em;margin-left:20pt;">

  <div>• <b>Stage 1: Understand the Mandate</b>(Before analysing markets, reconstruct the investment problem.)</div>
  <div>• <b>Stage 2: Prepare and Validate the Data</b>(Create a reproducible data-preparation process.)</div>
  <div>• <b>Stage 3: Diagnose the Current Portfolio</b>(Before proposing a new portfolio, explain the current one.)</div>
  <div>• <b>Stage 4: Market and Research Synthesis</b>(The workflow should combine different evidence sources.)</div>
  <div>• <b>Stage 5: Define the Investment Thesis</b>(Before constructing the target portfolio, define a small number of explicit portfolio views.)</div>
  <div>• <b>Stage 6: Quantify Portfolio Risk</b>(At minimum, calculate portfolio volatility.)</div>
  <div>• <b>Stage 7: Generate Candidate Portfolios</b>(Do not generate only one portfolio immediately.)</div>
  <div>• <b>Stage 8: Portfolio Construction</b>(Different approaches are permitted.)</div>
  <div>• <b>Stage 9: Validate the Candidate Portfolio</b>(Before proposing any trade, run a compliance check.)</div>
  <div>• <b>Stage 10: Account for Trading Costs</b>(Changing the portfolio is not free.)</div>
  <div>• <b>Stage 11: Generate the Trade Proposal</b>(The final recommendation should translate target weights into a practical trade list.)</div>
  <div>• <b>Stage 12: Portfolio Manager Review</b>(Define the workflow.)</div>
  <div>• <b>Stage 13: Decision Trace</b>(The workflow should preserve an auditable record.)</div>

</div>

::right::

<div style="height: 20px;"></div>

### Assessment criteria.

<div style="font-size:0.72em">

| **Criterion**                                      | **Weight** |
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

- Do not use AI as one generic investment oracle.
- Preferred approach: **AI interprets. Tools calculate. Rules constrain. Humans decide.**
- Do not start from *What assets look attractive?*, but start from *What portfolio are we managing?*
- Do not present only one solution.
- AI-generated code and investment reasoning must be checked.
- *A materially non-compliant portfolio cannot win.*


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
