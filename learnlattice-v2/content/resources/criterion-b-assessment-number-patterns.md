---
title: "Criterion B Assessment: Number Patterns"
date: 2026-03-08
description: "A complete Criterion B assessment task with three annotated student responses at levels 3-4, 5-6, and 7-8. Students investigate the pattern in triangular numbers and generalise to a formula. Includes the task, mark scheme, and commentary on what distinguishes each achievement level."
subjects:
  - "Mathematics"
math_topic: "Algebra"
year_levels:
  - "Grade 7"
  - "Grade 8"
  - "MYP Year 2"
  - "MYP Year 3"
resource_types:
  - "Investigation Pack"
tags:
  - "Criterion B"
  - "Assessment"
  - "Patterns"
  - "Algebra"
  - "Annotated Student Work"
  - "Triangular Numbers"
key_concept: "Logic"
global_context: "Scientific and Technical Innovation"
statement_of_inquiry: "Logical reasoning reveals patterns in number systems that can be described, generalised, and justified using algebraic thinking."
formula: "T_n = n(n+1)/2"
download_url: ""
download_label: "Assessment Pack PDF"
difficulty: "Meeting"
duration: "1 lesson + homework"
---

## The Assessment Task

### Triangular Numbers

The first four triangular numbers are shown below:

$$T_1 = 1 \quad T_2 = 3 \quad T_3 = 6 \quad T_4 = 10$$

These can be visualised as dots arranged in equilateral triangles.

**Part (i):** Find the next three triangular numbers: $T_5$, $T_6$, and $T_7$. Describe how you found them.

**Part (ii):** Organise your results in a table. Describe the pattern you observe. Include the differences between consecutive terms.

**Part (iii):** Find a general formula for $T_n$ (the $n$th triangular number). Verify your formula works for at least three known values.

**Part (iv):** Using your formula, justify why $T_n + T_{n-1} = n^2$. Explain what this means geometrically.

---

## Mark Scheme

| Strand | Level 1-2 | Level 3-4 | Level 5-6 | Level 7-8 |
|--------|-----------|-----------|-----------|-----------|
| **i. Apply mathematical problem-solving techniques** | Finds 1-2 correct values | Finds all three values with a described method | Finds values and organises work systematically | Finds values using multiple approaches |
| **ii. Describe patterns as general rules** | Lists numbers without describing a pattern | Describes that differences increase by 1 each time | Describes the pattern formally and uses it to predict further terms | Describes both the term-to-term and position-to-term rules |
| **iii. Verify and justify** | Substitutes one value into a given formula | Finds a formula and checks 1-2 values | Derives the formula independently and verifies systematically | Proves the formula and explains the $n^2$ relationship with geometric reasoning |

---

## Student Response A — Achieving Level 3-4

> **Part (i):** $T_5 = 15$, $T_6 = 21$, $T_7 = 28$. I added 5 to get 15, then 6 to get 21, then 7 to get 28.
>
> **Part (ii):** The pattern is that you add one more each time. So first you add 2, then 3, then 4, then 5, etc.
>
> **Part (iii):** I tried $T_n = n \times (n+1) \div 2$. For $n=4$: $4 \times 5 \div 2 = 10$. It works.
>
> **Part (iv):** Not attempted.

### Commentary

This response correctly identifies all values and describes the term-to-term pattern clearly. The formula is stated but only verified once. Part (iv) is not attempted, which limits the response to strand (i) and (ii). The description of the pattern ("add one more each time") is accurate but informal — it doesn't use mathematical language like "consecutive differences increase by 1." The formula appears without explanation of where it came from, suggesting it may have been found through trial and error or prior knowledge rather than derived.

**What would move this to 5-6:** Verify the formula for at least three values. Attempt part (iv). Use more precise mathematical language.

---

## Student Response B — Achieving Level 5-6

> **Part (i):** $T_5 = 15$, $T_6 = 21$, $T_7 = 28$. Each triangular number is the sum of the natural numbers up to $n$: $T_5 = 1+2+3+4+5 = 15$.
>
> **Part (ii):**
>
> | $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
> |---|---|---|---|---|---|---|---|
> | $T_n$ | 1 | 3 | 6 | 10 | 15 | 21 | 28 |
> | Difference | — | 2 | 3 | 4 | 5 | 6 | 7 |
>
> The first differences are $2, 3, 4, 5, 6, 7$ — they increase by 1 each time. This means the second differences are constant (all equal to 1), which tells us the formula is quadratic.
>
> **Part (iii):** Since $T_n = 1 + 2 + 3 + \ldots + n$, I can use the formula for the sum of an arithmetic series: $T_n = \frac{n(n+1)}{2}$.
>
> Checking: $T_3 = \frac{3 \times 4}{2} = 6$ ✓, $T_5 = \frac{5 \times 6}{2} = 15$ ✓, $T_7 = \frac{7 \times 8}{2} = 28$ ✓
>
> **Part (iv):** $T_n + T_{n-1} = \frac{n(n+1)}{2} + \frac{(n-1)n}{2} = \frac{n^2 + n + n^2 - n}{2} = \frac{2n^2}{2} = n^2$. This works algebraically but I'm not sure what it means geometrically.

### Commentary

This response demonstrates strong pattern recognition and systematic verification. The use of second differences to identify a quadratic formula shows genuine mathematical reasoning. The formula is derived from understanding (sum of natural numbers), not guessed. Three verifications are provided. The algebraic proof in part (iv) is correct.

The response falls short of 7-8 because the geometric interpretation is not provided. The student proves the relationship algebraically but doesn't connect it to the visual meaning: two consecutive triangular numbers of dots combine to form a square arrangement of $n \times n$ dots.

**What would move this to 7-8:** Add the geometric interpretation. Explain why the sum formula $1 + 2 + \ldots + n$ gives $\frac{n(n+1)}{2}$ visually (the "pairing" argument).

---

## Student Response C — Achieving Level 7-8

> **Part (i):** $T_5 = 15$, $T_6 = 21$, $T_7 = 28$.
>
> I used two methods: (1) Adding $n$ to the previous term: $T_5 = T_4 + 5 = 10 + 5 = 15$. (2) Using the formula $T_n = \frac{n(n+1)}{2}$, verified below.
>
> **Part (ii):** [Table as above, plus:] The constant second difference of 1 confirms the relationship is quadratic (degree 2), so $T_n$ must be a quadratic function of $n$.
>
> **Part (iii):** I derived the formula using Gauss's pairing argument. Write the sum forwards and backwards:
>
> $S = 1 + 2 + 3 + \ldots + n$
>
> $S = n + (n-1) + (n-2) + \ldots + 1$
>
> Adding: $2S = (n+1) + (n+1) + \ldots + (n+1) = n(n+1)$
>
> So $S = T_n = \frac{n(n+1)}{2}$.
>
> Verified: $T_1 = 1$ ✓, $T_4 = 10$ ✓, $T_7 = 28$ ✓, $T_{10} = 55$ ✓
>
> **Part (iv):** Algebraic proof: [same as Response B].
>
> Geometric interpretation: If you arrange $T_n$ dots in a triangle and $T_{n-1}$ dots in a slightly smaller triangle, then rotate the smaller triangle 180° and fit it against the larger one, the combined shape forms an $n \times n$ square. This is because each row of the combined shape has exactly $n$ dots: row $k$ from $T_n$ has $k$ dots, and the corresponding row from $T_{n-1}$ has $n-k$ dots, giving $k + (n-k) = n$.

### Commentary

This response demonstrates all four strands at the highest level. The formula is derived through a classical proof (Gauss's argument), not stated from memory. The verification goes beyond the required three values. The geometric interpretation in part (iv) is precise, creative, and mathematically sound — the student explains exactly how two triangular numbers fit together to form a square.

The response also shows mathematical maturity: using multiple methods in part (i), connecting second differences to polynomial degree in part (ii), and providing both algebraic and geometric arguments in part (iv).

---

## Teaching Notes

This assessment task works best after students have explored triangular numbers informally — for example, through the Staircase Problem investigation. The three annotated responses are designed to be used in class: show all three (anonymised) and have students discuss what distinguishes each level. This builds assessment literacy — students learn to self-assess by seeing what "investigating patterns" looks like at different levels of sophistication.

**EAL note:** The visual representation of triangular numbers (dot patterns) provides an entry point that doesn't require reading. Students can draw the patterns and count before engaging with the algebraic formalisation. The table in Part (ii) is a structured scaffold that helps organise thinking regardless of language proficiency.
