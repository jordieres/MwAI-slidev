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


# Course Management with AI

## Challenge 03: AI in Finance — Build a Return Predictor

<div class="mt-10 text-lg">
Design, validate and defend an AI model that predicts one-month stock returns — and prove that <b>you</b>, not the assistant, own the decisions behind it.
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
title: "Why This Challenge"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left::

### Why this challenge

Finance is the domain where AI predictions are <b>cheap to produce and expensive to trust</b>.

Any LLM can write a model that looks excellent on historical data. Very few of those models survive contact with the future, because of:

- look-ahead bias and data leakage;
- overfitting to one market regime;
- biased or stale information sources;
- costs and execution frictions ignored in the backtest.

<div class="box mt-4">
<b>Management question:</b> would you allocate capital to this model, and could you explain to a risk committee why?
</div>

::right::

### What you will learn

<v-clicks>

✅ Turn heterogeneous data (prices, financial statements, filings, analyst reports) into signals.

✅ Apply NLP / LLM techniques to financial text (Modules 4–5).

✅ Validate out-of-sample with point-in-time discipline.

✅ Use AI assistants as engineering partners — and verify what they produce.

✅ Defend model decisions in front of a sceptical audience.

</v-clicks>

---
title: "The Challenge"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left::

### The task

At the end of every month your model receives <b>all information available at that moment</b> and must return, for each listed company:

- a <b>score</b> — higher score = higher expected return over the next month;
- optionally, a long-only <b>portfolio weight</b>.

Universe: ~300–350 listed companies on <b>six exchanges</b> (NYSE, NASDAQ, LSE, XETRA, BME, TSE), with different currencies, calendars and reporting rules.

<div class="box mt-4">
Your model will be graded on a <b>later, hidden period</b> that is not included in your package.
</div>

::right::

### Core rules

<div class="box">
AI assistants may generate code, features, models, critiques and analyses. You are encouraged to use them.
</div>

<div class="box mt-3">
The market is <b>synthetic</b>: companies, filings and brokers are fictional. Real market data will not help, and the evaluation period exists nowhere outside the instructor's files.
</div>

<div class="box mt-3">
<b>No single prompt can see the test.</b> What makes a good grade is judgement: what you trust, what you reject, and how you prove it.
</div>

---
title: "Data Package"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Training data: January 1994 → December 2023 (≈290 MB uncompressed)

| File | Rows | Content |
|---|---|---|
| `prices_daily.csv` | 2.3 M | Daily OHLCV, <b>unadjusted</b>, per company and trading session |
| `companies.csv` | 465 | Exchange, sector, currencies, listing / delisting dates (delisted firms included) |
| `corporate_actions.csv` | 15 k | Dividends, splits, IPOs, delistings |
| `fundamentals.csv` | 31 k | Financial statements per period, stamped with the <b>filing date</b> |
| `filings_text.jsonl` | 45 k | SEC-style filings: 10-K, 10-Q, 8-K, 20-F, 6-K (MD&A, outlook, risk factors) |
| `analyst_reports.jsonl` | 106 k | Broker notes: rating, target price, EPS estimate, free text |
| `fx_daily.csv`, `macro_daily.csv`, `indices_daily.csv` | 8–45 k | FX rates, policy rates, volatility index, market indices |

<div class="role-grid mt-4">
<div class="download-card">
  <h4>Student Package</h4>
  <p>
  <a href="/~jordieres/data/Challenge_3_AI_Finance_Student_Package.zip">
     📦 <b>Challenge_3_AI_Finance_Student_Package.zip</b> (≈56 MB)
  </a></p>
  <p class="tiny">Data + <code>README.md</code> (data dictionary) + <code>evaluate.py</code> + <code>fin_utils.py</code> + <code>example_submission/</code></p>
</div>
<div class="box small">
Real-world pitfalls are built in <b>on purpose</b>: unadjusted prices, pence vs. pounds, March fiscal years, half-yearly reporting, information published weeks after period end, survivorship, biased analysts and regime changes.
</div>
</div>

---
title: "Submission Interface"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left::

### Your model is a folder with `predict.py`

```python
def predict(data: dict, as_of: pd.Timestamp) -> pd.DataFrame:
    """
    data: DataFrames with ONLY the information available
          at the close of `as_of`:
          prices, companies, corporate_actions, fundamentals,
          filings, analyst_reports, fx, macro, indices
    returns: company_id, score   [+ optional: weight]
    """
```

Train everything beforehand and load it from your folder:

```python
MODEL = joblib.load(Path(__file__).parent / "model.pkl")
```

::right::

### Execution rules

- Runs <b>offline</b>: no internet, no calls to LLM APIs at prediction time.
- ≤ <b>60 s</b> per rebalancing date on a laptop.
- Standard Python stack: numpy, pandas, scikit-learn, scipy, statsmodels, lightgbm / xgboost, torch.
- Pre-trained language models (e.g. FinBERT) only if their files are inside your folder.
- Return a score for every company you can: <b>coverage counts</b>.

<div class="box mt-4">
<code>example_submission/</code> contains a working (and deliberately weak) momentum baseline. Beat it, out of sample.
</div>

---
title: "How Your Model Is Evaluated"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Point-in-time protocol — identical to the one in `evaluate.py`

<div class="flow mt-5 small">
<div class="box text-center"><b>1. Month end</b><br/>last NYSE session of each month</div>
<div class="box text-center"><b>2. Signal</b><br/>data up to the close of <code>as_of</code></div>
<div class="box text-center"><b>3. Execution</b><br/>open of the next session<br/>cb = 5 bps, cs = 2 bps</div>
<div class="box text-center"><b>4. Holding</b><br/>21 sessions, total return<br/>(dividends, splits, delistings)</div>
<div class="box text-center"><b>5. Metrics</b><br/>on the hidden period</div>
</div>

<div class="role-grid mt-5">
<div>
<b>Metrics reported</b>

- Mean rank <b>IC</b> (Spearman) and its t-statistic
- IC <b>within each exchange</b> (no free lunch from betting on one market or currency)
- Top-minus-bottom quintile spread
- Long-only portfolio in USD, net of costs: Sharpe, max drawdown, information ratio vs. equal-weighted universe
</div>
<div>
<b>Validate yourself first</b> on a hold-out that your model has never seen:

```bash
python evaluate.py --data ./train --submission ./my_model \
       --start 2019-01 --end 2023-11
```

<div class="box mt-2 small">
The instructor runs exactly the same script on the hidden period. An IC that is not distinguishable from zero is not a result.
</div>
</div>
</div>

---
title: "Assessment Criteria"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Assessment criteria

| Criterion | Weight | What we look for | Evidence |
|---|---|---|---|
| <b>Out-of-sample performance</b> | 30% | IC and IC within exchange on the hidden period, statistically above chance; coverage ≥ 90%; robust, not lucky | `evaluate.py` on the hidden period |
| <b>Methodological rigour</b> | 25% | Walk-forward validation; no look-ahead (filing dates, not period ends); correct handling of splits, dividends, currencies and delisted firms; costs considered | Report, code, validation results |
| <b>Use of AI</b> | 20% | AI-derived signals from text (filings, analyst reports) and a <b>critical, documented</b> use of AI assistants: what was asked, accepted, rejected and independently verified | `ai_log/` (prompts + full dialogue), report |
| <b>Report and oral defence</b> | 25% | Clear explanation of signals and decisions; honest discussion of what may fail out of sample; ability to modify the model live | Report + defence session |

<div class="box mt-4">
<b>Penalties:</b> missing or incomplete AI dialogue (the AI-use criterion cannot be awarded); code that does not run with <code>evaluate.py</code>; look-ahead bias detected in the pipeline; results that cannot be reproduced.
</div>

---
title: "What Is Expected"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left::

### Deliverables

<b>1. Model</b> — `submission/` folder with `predict.py`, model artefacts and `requirements.txt`. Must run with `evaluate.py` on a clean copy.

<b>2. Technical report</b> (max. 10 pages, PDF):
- signals used and why (economic rationale);
- data handling: adjustments, currencies, filing dates;
- validation design and hold-out results;
- what you expect to fail in the hidden period, and why;
- role of AI: where it helped, where it was wrong.

<b>3. AI interaction log</b> — every prompt and the <b>complete dialogue</b> held with each AI assistant.

<b>4. Oral defence</b> — 5 minutes video per student. For some of you the presentation will be physical, including a live change requested by the instructor.

::right::

### Why we ask for the dialogue

<div class="box">
In this course the <b>process</b> is assessed as much as the result. The dialogue shows how you framed the problem, which suggestions you challenged and how you verified them.
</div>

<div class="box mt-3">
A model you cannot explain is a model you cannot manage. Expect questions such as: <i>"your signal worked in validation and failed in the hidden period — why?"</i>
</div>

<div class="box mt-3">
Undisclosed AI use is treated as a lack of traceability, not as a shortcut. Penalty will apply.
</div>

---
title: "Moodle Drop-off"
layout: two-cols
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

::left::

### One ZIP per student, uploaded to the Moodle drop-off

```text
MwAI_Challenge03.zip
├── README.md            how to run + hold-out results
├── submission/
│   ├── predict.py
│   ├── model.pkl / *.pt / ...   (trained artefacts)
│   └── requirements.txt
├── report/
│   └── MwAIxx_Challenge03_Report.pdf
└── ai_log/
    ├── prompts.md       every prompt, numbered, with
    │                    tool, date, author and purpose
    ├── dialogue/        FULL exported conversations
    │   ├── 01_claude_feature_design.md
    │   ├── 02_chatgpt_validation.pdf
    │   └── ...
    └── ai_usage_summary.md   accepted / rejected /
                              verified by humans
```

The zip file must be below 20Mb, If your pkl file is larger consider upload it into a GitHub public repository.

::right::

### Rules for the ZIP

- <b>Prompts and full dialogue are mandatory</b>: export the complete conversation as text (Markdown, PDF or JSON). Share links or screenshots are not accepted.
- Include the dialogue of <b>every</b> AI tool used: chat assistants, coding assistants, notebooks with AI.
- Do <b>not</b> include the training data; keep the ZIP below the Moodle upload limit (store large models on a link, such as Github public repo with <b>lfs</b> option just in case,  and justify it in <code>README.md</code>).
- One submission per student; the last upload before the deadline is graded.

<div class="box mt-3">
<b>Deadline:</b> see the Moodle drop-off.
</div>

---
title: "Checklist Before Uploading"
layout: default
transition: fade-out
background: /images/Designer-02.png
backgroundSize: cover
---

### Checklist before uploading

<div class="role-grid mt-3">
<div class="box">
<b>Model</b>

✅ `evaluate.py` runs your folder on a clean copy of `train/`

✅ No internet access or API keys needed at prediction time

✅ ≤ 60 s per date; coverage ≥ 90%

✅ Hold-out months were never used for training or tuning
</div>
<div class="box">
<b>Report</b>

✅ Signals, data handling, validation and expected failures explained

✅ Look-ahead controls described (filing dates, adjustments)

✅ Hold-out results reported honestly, including what did not work
</div>
<div class="box">
<b>AI log</b>

✅ <code>prompts.md</code> lists every prompt with purpose

✅ Complete dialogues exported for every AI tool used

✅ <code>ai_usage_summary.md</code>: what was accepted, rejected and verified
</div>
<div class="box">
<b>Upload</b>

✅ File named <code>MwAI_Challenge03.zip</code>

✅ Uploaded to the Moodle drop-off before the deadline

✅ You must be aware of any component or hypothesis you did/accepted. Remember assistant is not accountable for.
</div>
</div>

<div class="mt-5 text-center text-lg">
<b>The assistant can write the code. Only you can own the decision.</b>
</div>
