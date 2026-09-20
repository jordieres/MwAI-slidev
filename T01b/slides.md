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
  Academic Year 2026-27 (https://apiivm01.etsii.upm.es/~jordieres/T01b/)
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

# T01 Feedback from Last Individual Class Assigment

## Guidelines

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="grey op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/MwAI-UPM/2026-ind_assign_01/" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
title: Did you remember the last individual assigment?
layout: two-cols
background: ./images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 10px;"></div>

### Deliverable

56 of you uploaded information into moodle drop-off area.
Thanks

Although the instrucitons were to report one zip file having every individual task and it was expected one zip with five documents inside (Task_1.{pdf,docx}, ...) the reality, as expected from humans, was very much different

So the challenge is to elaborate a way to analyze and compare aproaches.

::right::

<div style="font-family: 'Courier New', Courier, monospace; font-size: 5pt; line-height: 1.3;">

<pre style="font-family: inherit; font-size: inherit; background: transparent; padding: 0; margin: 0;">

Assignment_Class_01/2026-ind_assign_01$ ls -lR ../*_file

'../BEYRIES EMILE_80974_assignsubmission_file':
total 68
drwxrwxr-x 2 jb jb  4096 sep 19 19:27 'steel scheduling doc'
-rwxr-xr-x 1 jb jb 62619 sep 16 11:36 'steel scheduling doc.zip'

'../BEYRIES EMILE_80974_assignsubmission_file/steel scheduling doc':
total 264
-rw-rw-r-- 1 jb jb  8809 sep 19 19:27 index.html
-rw-rw-r-- 1 jb jb 63251 sep 19 19:27 task1_inventory.html
-rw-rw-r-- 1 jb jb 82755 sep 19 19:27 task2_mapping.html
-rw-rw-r-- 1 jb jb 46452 sep 19 19:27 task3_divergence.html
-rw-rw-r-- 1 jb jb 31885 sep 19 19:27 task4_blueprint.html
-rw-rw-r-- 1 jb jb 22250 sep 19 19:27 task5_executive_briefing.html

'../BOZAL APESTEGUIA LOREA_80971_assignsubmission_file':
total 1700
drwxrwxr-x 3 jb jb    4096 sep 19 19:27 'Drop-off of 1st assignment'
-rwxr-xr-x 1 jb jb 1733912 sep 16 11:52 'Drop-off of 1st assignment.zip'

'../BOZAL APESTEGUIA LOREA_80971_assignsubmission_file/Drop-off of 1st assignment':
total 4
drwxrwxr-x 2 jb jb 4096 sep 19 19:27 'Drop-off of 1st assignment'

'../BOZAL APESTEGUIA LOREA_80971_assignsubmission_file/Drop-off of 1st assignment/Drop-off of 1st assignment':
total 1960
-rw-rw-r-- 1 jb jb  107111 sep 19 19:27 'Informe 3_ Synthesis Divergence .pdf'
-rw-rw-r-- 1 jb jb  285158 sep 19 19:27 'Tarea 1_ Inventory & Initial Scan.pdf'
-rw-rw-r-- 1 jb jb 1605783 sep 19 19:27 'Tarea 2 .png'

'../BUYSSE AMELIE_80940_assignsubmission_file':
total 2112
drwxrwxr-x 3 jb jb    4096 sep 19 19:27 'Managing with AI'
-rwxr-xr-x 1 jb jb 2155331 sep 16 11:58 'Managing with AI.zip'

'../BUYSSE AMELIE_80940_assignsubmission_file/Managing with AI':
total 156
drwxrwxr-x 2 jb jb   4096 sep 19 19:27 images
-rw-rw-r-- 1 jb jb 154480 sep 19 19:27 ManagingwithAI.html

'../BUYSSE AMELIE_80940_assignsubmission_file/Managing with AI/images':
total 2168
-rw-rw-r-- 1 jb jb 217438 sep 19 19:27 image1.png
-rw-rw-r-- 1 jb jb 775392 sep 19 19:27 image2.png
-rw-rw-r-- 1 jb jb 591547 sep 19 19:27 image3.png
-rw-rw-r-- 1 jb jb 625763 sep 19 19:27 image4.png
</pre>

</div>

---
title: How to assess within a secured environment?
layout: default
background: ./images/Designer.png
backgroundSize: cover
---

### Assessment Pipeline

The key point is to develop a pipeline able to 'look for' and to extract convenient information from the raw data.


```mermaid
flowchart LR

subgraph INPUT
A[Student Submissions]
end

subgraph PROCESSING
B[Normalization]
C[AI Detection]
D[GPT Analysis]
end

subgraph ASSESSMENT
E[Analysis JSON]
F[GPT Evaluation]
G[Evaluation JSON]
end

subgraph ANALYTICS
H[Cohort Summary]
I[DT Adoption]
J[AI Usage Report]
K[Teaching Dashboard]
end

A --> B
B --> D
B --> C
D --> E
C --> E
E --> F
F --> G
E --> H
G --> H
E --> I
E --> J
H --> K
I --> K
J --> K
```

The process is driven by appropriate cli commands:
<div style="font-family: 'Courier New', Courier, monospace; font-size: 8pt; line-height: 1.3;">

<pre style="font-family: inherit; font-size: inherit; background: transparent; padding: 0; margin: 0;">

ls src/assessment_pipeline/
ai_detection.py           evaluate_all.py      models.py           <b>__pycache__</b>
ai_usage_report.py        evaluate_one.py      moodle.py           reporting.py
analyze_all.py            extractor.py         normalizer.py       task_detector.py
analyze_one.py            gpt_oss_analysis.py  parser_registry.py  task_splitter.py
cohort_summary.py         gpt_oss_client.py    <b>parsers</b>             <b>utils</b>
content_task_detector.py  __init__.py          process_all.py
dt_adoption.py            llm_pipeline.py      prompts.py
</pre>
</div>

---
title: Have a look at the GitHub if interested!
layout: two-cols
background: ./images/Designer.png
backgroundSize: cover
---

::left::

### Wrong approaches

<div style="font-size:9pt;line-height: 0.8 !important;">

<p style="margin-top: 0 !important; margin-bottom: 2px !important;">
If you ask Gemini, ChatGPT or Claude without perimeter protection for RAG documents, you are facing direct issues with <b>GDPR reglament</b>.</p>

<p style="margin-top: 0 !important; margin-bottom: 2px !important;">
Indeed, although enabled, since the size is 60MB still will be possible. However diversity is too high and models will fail in doing its its job from scratch:</p>

<p style="margin-top: 0 !important; margin-bottom: 2px !important;">
The main issues encountered when processing the submitted materials were related to heterogeneity, packaging, naming conventions, and the distinction between file structure and actual task content.</p>

* Highly heterogeneous submission formats. Students submitted PDF, DOCX, XLSX, HTML, Markdown, TXT, ZIP and RAR files. Some submissions contained one document per task, while others used a single combined report containing several or all five tasks.

* Nested compressed files. Several submissions included ZIP archives inside the main Moodle export. These had to be recursively unpacked before the real submission structure could be identified. One submission was provided as a RAR archive, whose directory could be inspected but whose contents could not be reliably extracted with the available processing tools. Consequently, some content-based measures for that submission could not be calculated.

</div>

::right::

<div style="font-size:9pt;line-height: 0.8 !important;">

* <p style="margin-top: 0 !important; margin-bottom: 1px !important;"> Inconsistent file naming. Task files were named in many different ways, such as Task 3, Task3 Report, Task n°5, Executive Briefing, Integrative Synthesis, or combinations such as Task 2-3-4-5. Therefore, task identification could not rely exclusively on filenames.</p>

* <p style="margin-top: 0 !important; margin-bottom: 1px !important;"> Multiple tasks embedded in one document. A significant number of students submitted one PDF or Word document containing Tasks 1–5. Counting files alone would therefore incorrectly suggest that these students had submitted only one task. Content inspection was necessary to identify the internal task sections.</p>

* <p style="margin-top: 0 !important; margin-bottom: 1px !important;"> Auxiliary material mixed with assessed tasks. Some submissions contained prompts, README files, methodological notes, figures, CSV datasets, intermediate results, references, or supporting spreadsheets. These needed to be distinguished from the five requested task deliverables.</p>

* <p style="margin-top: 0 !important; margin-bottom: 1px !important;"> Duplicate and operating-system files containing macOS metadata such as __MACOSX, temporary files, or repeated copies of the same document. These were excluded from the effective document count where possible.</p>

</div>


---
title: Have a look at the GitHub if interested!
layout: two-cols
background: ./images/Designer.png
backgroundSize: cover
---

::left::

<div style="height: 10px;"></div>

<div style="font-size:9pt;line-height: 0.8 !important;">

* <p style="margin-top: 0 !important; margin-bottom: 2px !important;"> Task detection is not equivalent to task completion. The processing can identify whether a Task 1–5 section or corresponding file appears to exist, but this does not establish that the task has been correctly or completely performed. A document can contain a heading such as “Task 4” while providing only limited substantive content.</p>

* <p style="margin-top: 0 !important; margin-bottom: 2px !important;"> Content-based and structure-based detection do not always coincide. Some tasks are obvious from filenames but not explicitly labelled inside the document; conversely, some combined reports contain clearly labelled task sections even though the filename provides no indication of them. For this reason, the final detection combined both sources of evidence.</p>

* <p style="margin-top: 0 !important; margin-bottom: 2px !important;"> Character counts require normalization. Raw file size is not a useful proxy for submission length. Text therefore had to be extracted from supported document formats and normalized. Character counts can still be affected by tables, repeated headers, embedded spreadsheet cells, references, or text extraction characteristics, so they should be interpreted as approximate indicators of textual volume rather than exact measures of academic content.</p>

</div>

::right::

<div style="height: 10px;"></div>

<div style="font-size:9pt;line-height: 0.8 !important;">

* <p style="margin-top: 0 !important; margin-bottom: 2px !important;"> The meaning of documents is potentially ambiguous. In the generated table, documents currently means the number of effective files submitted by the student after cleaning and unpacking. It does not mean the number of papers or source documents analysed by the student. If the assignment requires students to analyse, for example, 25 or 30 papers, that number would need to be extracted separately from the report content.</p>

</div>


---
title: Have a look at the GitHub if interested!
layout: default
background: ./images/Designer.png
backgroundSize: cover
---

