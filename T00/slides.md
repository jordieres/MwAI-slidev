---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Management with Artificial Intelligence
info: |
  ## Slidev Starter Template
  Presentation slides for practitioners.

  Learn more at [Sli.dev](https://sli.dev)
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

# Welcome to Management with Artificial Intelligence: Practical aspects

Interactive discussion and Learning process.

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/~jordieres/T00/" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
title: "MwAI: Table of Contents"
layout: default
transition: fade-out
background: /images/Designer.png
---

### Outline

<div class="toc-cols">
  <Toc text-sm minDepth="1" maxDepth="2" />
</div>

<style>
.toc-cols ul {
  columns: 2;
  column-gap: 3rem;
}

.toc-cols li {
  break-inside: avoid;
}
</style>

<!--
Table of Contents
-->

---
title: "MwAI: Practical Setup. The starting point"
layout: default
transition: fade-out
background: /images/Designer.png
level: 1
---

### The starting point

<div style="margin-left:40px;">
<iframe 
v-click
allowfullscreen frameborder="0" 
height="100%" 
mozallowfullscreen style="min-width: 500px; min-height: 355px" 
src="https://app.wooclap.com/events/QQMZBNE/questions/6a7442beb57c9b39c1501e21" width="100%">
</iframe>
</div>
<!--
Starting by identifying the initial knowledge of participants. Pooling.
-->

---
title: "MwAI: Context"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 1
---

::left::

<div style="height:15px;"></div>

### Chatbot

<img
  v-click
  src="/images/Chatbot.png"
  alt="Chatbot"
/>

::right::

<div style="height:15px;"></div>

### API

<img
  v-click
  src="/images/api00.png"
  alt="API"
/>

<!--
Example of Chatbot vs API
-->

---
title: "MwAI: API with python"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

::left:: 

<div style="height:8px;"></div>

### Example of API usage with python

```ts [api-example.py] {all|4|12-19|21|all}
from google import genai

# Initialize client (uses GEMINI_API_KEY environment variable)
client = genai.Client()

report = """
Revenue increased by 12%.
Customer churn decreased by 3%.
Operating costs increased by 8%.
"""

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=f"""
    Summarize this report for a CEO in 3 bullet points:

    {report}
    """
)

print(response.text)
```

::right::

<div style="height:45px;"></div>

<img src="/images/apii01.png">


---
title: "MwAI: API with javascript"
layout: default
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<div style="height:8px;"></div>

### The same with nodejs (TypeScript)

```ts [api-example.ts] {all|3|10-14|16|all}
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(); // Automatically reads process.env.GEMINI_API_KEY

const report = `
Revenue increased by 12%.
Customer churn decreased by 3%.
Operating costs increased by 8%.
`;

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: `Summarize this report for a CEO in 3 bullet points:\n\n${report}`,
});

console.log(response.text);
```


---
title: "MwAI: Practical Setup. Prompts"
layout: default
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 1
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div style="height:15px;"></div>

### What is it? 

<iframe 
v-click 
allowfullscreen frameborder="0" height="100%" 
mozallowfullscreen style="min-width: 500px; min-height: 355px" 
src="https://app.wooclap.com/events/QQMZBNE/questions/6a747977b57c9b39c1729ef3" width="100%">
</iframe>

<!--
Question about prompt meaning
-->


---
title: "MwAI: Basic Prompts"
layout: default
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div style="height:15px;"></div>

### Zeroshot Prompt 

<img
  v-click
  src="/images/prompt-zerosh.png"
  alt="Zeroshot Prompt"
/>

<!--
Example of zeroshot prompt. The zero-shot prompt directly instructs the model to perform a task without any additional examples to steer it.
-->

---
title: "MwAI: Guided Prompts"
layout: default
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div style="height:15px;"></div>

### Fewshot Prompt 

<img
  v-click
  src="/images/prompt-fewsh.png"
  alt="Fewshot Prompt"
/>


<!--
Few-shot prompting can be used as a technique to enable in-context learning where we provide demonstrations in the prompt to steer the model to better performance. The demonstrations serve as conditioning for subsequent examples where we would like the model to generate a response.
-->

---
title: "MwAI: Reasoning Prompts"
layout: default
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div style="height:15px;"></div>

### Chain-of-Though Prompt 

<img
  v-click
  src="/images/prompt-cot.png"
  alt="CoT Prompt"
/>


<!--
Chain-of-thought (CoT) prompting enables complex reasoning capabilities through intermediate reasoning steps. You can combine it with few-shot prompting to get better results on more complex tasks that require reasoning before responding.
-->

---
title: "MwAI: Meta Prompts"
layout: default
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div style="height:15px;"></div>

### Meta Prompt 

<img
  v-click
  src="/images/prompt-meta.png"
  alt="Meta Prompt"
/>

<!--
Meta Prompting is an advanced prompting technique that focuses on the structural and syntactical aspects of tasks and problems rather than their specific content details. This goal with meta prompting is to construct a more abstract, structured way of interacting with large language models (LLMs), emphasizing the form and pattern of information over traditional content-centric methods.
-->

---
title: "MwAI: Selfconsistency Prompts"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

::left::

<div style="height:15px;"></div>

### First Prompt 

<img
  v-click
  src="/images/prompt-selfc1.png"
  alt="Basic Prompt"
/>

::right::

<div style="height:15px;"></div>

<v-clicks>

### Second Prompt 

</v-clicks>

<img
  v-click
  src="/images/prompt-selfc2.png"
  alt="Self cosnsistent Prompt"
/>


<!--
Perhaps one of the more advanced techniques out there for prompt engineering is self-consistency. Proposed by Wang et al. (2022), self-consistency aims "to replace the naive greedy decoding used in chain-of-thought prompting". The idea is to sample multiple, diverse reasoning paths through few-shot CoT, and use the generations to select the most consistent answer. 
-->

---
title: "MwAI: Knowledge Prompts"
layout: default
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div style="height:15px;"></div>

### Knowledge Generating Prompt 

<div style="transform: scale(0.8); transform-origin: top center;">
<img
  v-click
  src="/images/prompt-known.png"
  alt="Meta Prompt"
/>

</div>

<!--
LLMs continue to be improved and one popular technique includes the ability to incorporate knowledge or information to help the model make more accurate predictions.
Using a similar idea, can the model also be used to generate knowledge before making a prediction? That's what is attempted in the paper by Liu et al. 2022 -- generate knowledge to be used as part of the prompt. In particular, how helpful is this for tasks such as commonsense reasoning?
-->


---
title: "MwAI: Prompt Chaining"
layout: two-cols
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

::left::

<div style="height:45px;"></div>

### First Prompt 

<img
  v-click
  src="/images/prompt-chain1.png"
  alt="Basic Prompt"
/>

::right::

<div style="height:15px;"></div>

<v-clicks>

### Second Prompt 

</v-clicks>

<img
  v-click
  src="/images/prompt-chain2.png"
  alt="Self cosnsistent Prompt"
/>



<!--
Prompt chaining can be used in different scenarios that could involve several operations or transformations. For instance, one common use case of LLMs involves answering questions about a large text document. It helps if you design two different prompts where the first prompt is responsible for extracting relevant quotes to answer a question and a second prompt takes as input the quotes and original document to answer a given question. In other words, you will be creating two different prompts to perform the task of answering a question given in a document.
-->


---
title: "MwAI: Tree of Thoughts"
layout: default
transition: fade-out
background: /images/Designer.png
backgroundSize: cover
level: 2
---

<style>
h3 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 80%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<div style="height:5px;"></div>

### Comparison between strategies 


<div style="transform: scale(0.95); transform-origin: top center;">

<img
  v-click
  src="/images/prompt-tree.png"
  style="max-height:80vh;"
  alt="Tree Prompt"
/>

</div>

<!--
For complex tasks that require exploration or strategic lookahead, traditional or simple prompting techniques fall short. Yao et el. (2023) and Long (2023) recently proposed Tree of Thoughts (ToT), a framework that generalizes over chain-of-thought prompting and encourages exploration over thoughts that serve as intermediate steps for general problem solving with language models.
-->
