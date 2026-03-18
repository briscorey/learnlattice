---
title: What Does Level 7 Look Like? Geometric Growth
date: 2025-10-09
description: Fold a piece of paper in half. How many times can you fold it? Three student responses — annotated at levels 3-4, 5-6, and 7-8 — explore the power of exponential growth through this deceptively
  simple question.
subjects:
- Mathematics
math_topic: Algebra
year_levels:
- Grade 8
- Grade 9
- MYP Year 3
- MYP Year 4
resource_types:
- Investigation Pack
tags:
- Criterion B
- Assessment
- Exemplars
- Exponential Growth
- Algebra
- Annotated Student Work
key_concept: Relationships
global_context: Scientific and Technical Innovation
statement_of_inquiry: Relationships that appear simple at first can produce results that defy human intuition — and mathematical reasoning is the only reliable tool for predicting them.
formula: layers = 2^n · thickness = 0.1 × 2^n mm
difficulty: exceeding
download_url: ''
download_label: Assessment Exemplar PDF
hook: What makes what does level 7 look like? geometric growth worth investigating?
warmup: 'Show students a simple example related to what does level 7 look like? geometric growth. Ask: What do you notice? What do you wonder? Give 2 minutes for pair discussion.'
timeline: '10 min: Introduce the problem. Students predict before investigating. | 25 min: Students work through the investigation in pairs or small groups. | 15 min: Gallery walk or class discussion. Compare
  approaches and findings.'
self_check:
- level: Getting started
  items:
  - I can describe what we investigated
- level: Making progress
  items:
  - I can explain the key patterns or relationships
- level: Going deeper
  items:
  - I can use evidence to justify my conclusions
- level: Extending
  items:
  - I can connect this to other topics or real-world situations
sentence_starters:
  approaching:
  - I noticed that...
  - The pattern I see is...
  - My prediction was...
  meeting:
  - The evidence shows that...
  - I can explain this because...
  - Comparing the results...
  exceeding:
  - This connects to... because...
  - If we changed the variable...
  - The limitation of this approach is...
misconceptions:
- myth: Finding one example proves a rule
  why: This is a common intuition but leads to incorrect conclusions.
  truth: One example supports a conjecture but doesn't prove it. Look for a general argument.
- myth: The pattern must continue forever
  why: This is a common intuition but leads to incorrect conclusions.
  truth: Patterns can break. We need to test edge cases and justify why the pattern holds.
- myth: There is only one correct method
  why: This is a common intuition but leads to incorrect conclusions.
  truth: Mathematics values different approaches. The reasoning matters more than the method.
listen_for:
- level: 3-4
  phrase: Describes observations about what does level 7 look like? geometric growth without explanation
- level: 5-6
  phrase: Explains patterns using evidence from the investigation
- level: 7-8
  phrase: Evaluates the method, identifies limitations, and connects to broader concepts
quick_check:
- q: What is the key question this investigation explores?
  a: Students should reference the central question of What Does Level 7 Look Like? Geometric Growth
  type: recall
- q: What evidence supports your conclusion?
  a: Students should cite specific data or observations from their investigation
  type: apply
- q: How would your results change if you modified one variable?
  a: Students should predict and justify based on their understanding
  type: extend
exit_ticket:
- What is one thing you learned today that surprised you?
- What question do you still have about this topic?
- Rate your confidence from 1-5 on the key concept.
journal_prompts:
- Explain what does level 7 look like? geometric growth to someone who hasn't studied it. What would you say?
- What was the hardest part of today's investigation? How did you work through it?
- How does this topic connect to something you already knew?
- If you could investigate one more question about this topic, what would it be?
differentiated:
  approaching: Complete the guided investigation with scaffolded questions. Focus on describing what you observe.
  meeting: Complete the investigation independently. Explain the patterns you find using evidence.
  exceeding: Extend the investigation with your own question. Evaluate your method and suggest improvements.
seo_title: "What Does Level 7 Look Like? Geometric Growth | MYP Crite..."
seo_description: "Free MYP Mathematics investigation pack targeting Criterion B for Grade 8-9. Fold a piece of paper in half. How many times can you fold i"
---



## The Task

> A single sheet of paper is 0.1 mm thick.
>
> **Part (i):** Fold it in half repeatedly. Record the number of layers and total thickness after each fold. Describe the pattern.
>
> **Part (ii):** Find a formula for the thickness after \\(n\\) folds.
>
> **Part (iii):** If you could fold the paper 42 times, how thick would it be? Express your answer in a unit that makes sense.
>
> **Part (iv):** Explain why you cannot actually fold a piece of paper more than about 7-8 times. Then justify why the mathematical model still works even though the physical experiment fails.

---

## Student Response A — Achievement Level 3-4

### What the student wrote:

> **(i)** Each fold doubles the layers. After 1 fold = 2 layers, 2 folds = 4 layers, 3 folds = 8 layers.
>
> **(ii)** Layers = 2 × 2 × 2... (\\(n\\) times). Thickness = 0.1 × layers.
>
> **(iii)** After 42 folds the thickness = 0.1 × 2^42. I used a calculator: 439,804,651,110.4 mm. That's 439,804 km.
>
> **(iv)** You can't fold it because it gets too thick. But the maths still works because the formula is right.

### Annotation: Why This Is Level 3-4

Correct pattern identification and calculation. However, the formula in (ii) is described in words, not written as \\(T = 0.1 \times 2^n\\). The extraordinary answer in (iii) — 439,804 km — is stated without any sense-making. Is that a lot? Compared to what? The justification in (iv) is circular: "the formula is right because it's right."

**Teaching move:** Ask "Is 439,804 km far? What else is that distance?" The student needs a reference frame.

---

## Student Response B — Achievement Level 5-6

### What the student wrote:

> **(i)** | Folds | Layers | Thickness (mm) |
> |---|---|---|
> | 0 | 1 | 0.1 |
> | 1 | 2 | 0.2 |
> | 2 | 4 | 0.4 |
> | 3 | 8 | 0.8 |
> | 4 | 16 | 1.6 |
> | 5 | 32 | 3.2 |
>
> The number of layers doubles with each fold. This is exponential growth, not linear.
>
> **(ii)** \\(T_n = 0.1 \times 2^n\\) mm
>
> **(iii)** \\(T_{42} = 0.1 \times 2^{42} = 4.398 \times 10^{11}\\) mm = 439,805 km.
>
> The distance from the Earth to the Moon is about 384,400 km. So 42 folds would make the paper thicker than the distance to the Moon! This seems impossible but the mathematics says it's true.
>
> **(iv)** You can't fold a real piece of paper more than about 7 times because the folded paper becomes too rigid and the area gets smaller with each fold. But the mathematical model doesn't depend on whether you CAN fold it — it describes what WOULD happen if you could. The formula \\(0.1 \times 2^n\\) is valid for all \\(n\\).

### Annotation: Why This Is Level 5-6

The table shows systematic data collection. The formula uses proper notation. The Moon comparison in (iii) is excellent — it gives the number meaning. The distinction between physical and mathematical validity in (iv) is insightful. Missing: no algebraic proof that the doubling pattern holds for all \\(n\\). No discussion of why exponential growth is counterintuitive or how quickly it overtakes linear growth.

---

## Student Response C — Achievement Level 7-8

### What the student wrote:

> **(i)** Each fold doubles the number of layers: \\(L_n = 2^n\\). The thickness is \\(T_n = 0.1 \times 2^n\\) mm.
>
> I can prove the doubling holds for all \\(n\\): if before fold \\(n\\) there are \\(2^{n-1}\\) layers, then folding in half gives \\(2 \times 2^{n-1} = 2^n\\) layers. Since fold 0 gives \\(2^0 = 1\\) layer (correct), the formula holds by induction for all \\(n \geq 0\\).
>
> **(ii)** \\(T_n = 0.1 \times 2^n\\) mm
>
> **(iii)** \\(T_{42} = 0.1 \times 2^{42} \approx 4.40 \times 10^{11}\\) mm = \\(4.40 \times 10^5\\) km = 440,000 km.
>
> This exceeds the Earth-Moon distance (384,400 km). After just 50 folds: \\(T_{50} = 0.1 \times 2^{50} \approx 1.13 \times 10^{11}\\) km, which is roughly the distance from Earth to the Sun.
>
> The reason this feels impossible is that humans are bad at estimating exponential growth. We expect linear growth (each fold adds the same amount), but exponential growth multiplies. The difference between \\(2^{10} = 1,024\\) and \\(2^{20} = 1,048,576\\) is a factor of 1,000 for just 10 additional folds.
>
> **(iv)** The physical limitation is that each fold halves the available area while doubling the thickness. After \\(n\\) folds, the area is \\(A_0 / 2^n\\) and the thickness is \\(0.1 \times 2^n\\) mm. The paper cannot be folded when its thickness exceeds its remaining length — roughly when \\(0.1 \times 2^n > L_0 / 2^{n/2}\\).
>
> The mathematical model remains valid because \\(T_n = 0.1 \times 2^n\\) depends only on the doubling principle, which I proved in part (i). The model describes the *relationship*, not the physical feasibility. This is the power and limitation of mathematical modelling — the formula is true for all \\(n\\), but the physical experiment is only possible for small \\(n\\).

### Annotation: Why This Is Level 7-8

The inductive proof in (i) is genuine mathematical justification. The extra calculation at 50 folds builds a richer picture. The paragraph about human intuition failing for exponential growth shows metacognitive understanding. The physical analysis in (iv) — area halving while thickness doubles — provides a quantitative explanation for the folding limit, not just "it gets too thick." The final sentence articulates the relationship between models and reality.

---

## Teaching Notes

This exemplar works exceptionally well as a **pre-assessment teaching tool**. Give students the paper and let them try to fold it more than 7 times. The physical limitation creates the motivation: "The maths says 42 folds reaches the Moon. But I can't fold it more than 7 times. What's going on?" That tension between physical reality and mathematical truth is the investigation.

**The Moon comparison is essential.** Without it, the number \\(4.4 \times 10^{11}\\) mm is meaningless. Teach students to always translate large numbers into comparisons.
