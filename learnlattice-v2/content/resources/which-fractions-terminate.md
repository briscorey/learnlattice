---
title: Which Fractions Terminate?
date: 2025-10-28
description: 1/2 = 0.5. 1/3 = 0.333... 1/4 = 0.25. 1/6 = 0.1666... Why do some fractions end and others go on forever? This investigation finds the rule, connects it to the structure of 10, and builds genuine
  fluency between fraction and decimal representations.
subjects:
- Mathematics
math_topic: Fractions
year_levels:
- Grade 6
- Grade 7
- MYP Year 1
- MYP Year 2
resource_types:
- Investigation Pack
tags:
- Decimals
- Fractions
- Prime Factorisation
- Number Systems
- Criterion A
- Criterion B
key_concept: Relationships
global_context: Scientific and Technical Innovation
statement_of_inquiry: The relationship between two number systems reveals the structure hidden inside each of them.
formula: Terminates if denominator has only factors 2 and 5
download_url: ''
download_label: Investigation Pack PDF
hook: 1/3 = 0.333... but 1/4 = 0.25. What decides whether a fraction terminates or repeats?
warmup: 'Show students a simple example related to which fractions terminate?. Ask: What do you notice? What do you wonder? Give 2 minutes for pair discussion.'
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
  phrase: Describes observations about which fractions terminate? without explanation
- level: 5-6
  phrase: Explains patterns using evidence from the investigation
- level: 7-8
  phrase: Evaluates the method, identifies limitations, and connects to broader concepts
quick_check:
- q: What is the key question this investigation explores?
  a: Students should reference the central question of Which Fractions Terminate?
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
- Explain which fractions terminate? to someone who hasn't studied it. What would you say?
- What was the hardest part of today's investigation? How did you work through it?
- How does this topic connect to something you already knew?
- If you could investigate one more question about this topic, what would it be?
differentiated:
  approaching: Complete the guided investigation with scaffolded questions. Focus on describing what you observe.
  meeting: Complete the investigation independently. Explain the patterns you find using evidence.
  exceeding: Extend the investigation with your own question. Evaluate your method and suggest improvements.
seo_title: "Which Fractions Terminate? | MYP Criterion A Maths | Grade 6-7"
seo_description: "Free MYP Mathematics investigation pack targeting Criterion A, Criterion B for Grade 6-7. 1/2 = 0.5. 1/3 = 0.333... 1/4 = 0.25. 1/6 = 0.1666... Why do"
---



## The Hook

Write these conversions on the board without explanation:

- 1/2 = 0.5
- 1/4 = 0.25
- 1/5 = 0.2
- 1/3 = 0.333...
- 1/6 = 0.1666...
- 1/7 = 0.142857142857...

Ask: *What determines whether a fraction terminates or repeats forever?*

Give students three minutes to discuss before any instruction. Collect hypotheses. Write them on the board without judging them. You'll return to them.

---

## Core Concepts

### What Does "Terminate" Mean?

A **terminating decimal** has a finite number of digits: 0.25, 0.5, 0.125.
A **repeating decimal** has a block of digits that repeats forever: 0.333..., 0.142857142857...

Every fraction (rational number) is either one or the other — never random, never "irregular."

### Why Decimals Work the Way They Do

A decimal is a fraction with a power of 10 in the denominator:
- 0.5 = 5/10 = 1/2
- 0.25 = 25/100 = 1/4
- 0.125 = 125/1000 = 1/8

A fraction terminates if and only if you can write it as something/10ⁿ for some integer n.

10ⁿ = 2ⁿ × 5ⁿ

So: a fraction in lowest terms terminates if and only if the denominator has **only 2s and 5s as prime factors** — because those are the only prime factors of powers of 10.

### Testing the Rule

| Fraction | Denominator | Prime factors | Terminates? | Decimal |
|---------|-------------|---------------|-------------|---------|
| 1/2 | 2 | {2} | ✅ | 0.5 |
| 1/4 | 4 | {2,2} | ✅ | 0.25 |
| 1/8 | 8 | {2,2,2} | ✅ | 0.125 |
| 1/5 | 5 | {5} | ✅ | 0.2 |
| 1/20 | 20 | {2,2,5} | ✅ | 0.05 |
| 1/3 | 3 | {3} | ❌ | 0.333... |
| 1/6 | 6 | {2,3} | ❌ | 0.1666... |
| 1/7 | 7 | {7} | ❌ | 0.142857... |
| 1/12 | 12 | {2,2,3} | ❌ | 0.08333... |

### Why the Others Repeat (and Never Stop)

A repeating decimal exists because the long division never reaches a remainder of 0 — it cycles through remainders that it has seen before. The length of the repeating block is at most (denominator − 1) digits long.

1/7 has a repeating block of 6 digits (142857). This is not a coincidence — it is related to the order of 10 modulo 7, a concept from number theory.

---

## Investigation Tasks

### Part A — Predict, Then Verify

For each fraction below, *predict* whether it will terminate or repeat based on the prime factors of its denominator. Then verify by long division or calculator.

1. 1/16
2. 3/7
3. 7/20
4. 5/12
5. 11/25
6. 17/48
7. 1/125
8. 13/98

Record your predictions and whether they were correct.

### Part B — Finding the Rule

Fill in this table for denominators 1 through 20:

| Denominator | Prime factorisation | Terminates? |
|-------------|---------------------|-------------|
| 1 | — | ✅ |
| 2 | 2 | ✅ |
| 3 | 3 | ❌ |
| ... | | |

Once complete: write the rule in your own words. Be as precise as you can.

**Challenge:** Write a fraction with denominator 60 that *terminates*. Is this possible? Explain.

### Part C — Reverse Engineering

For each of the following terminating decimals, write them as a fraction in lowest terms. Show your working.

1. 0.8
2. 0.36
3. 0.625
4. 0.0625
5. 2.48

Now for repeating decimals — using the algebraic method:
Let x = 0.333...
Then 10x = 3.333...
Subtract: 9x = 3, so x = 1/3.

Use this method to convert:
6. 0.666...
7. 0.090909...
8. 0.142857142857... *(this one is harder — the block is 6 digits)*

### Part D — The 1/7 Pattern (Extension)

1/7 = 0.142857142857...

Notice something interesting about this repeating block: 142857.

- 142857 × 1 = 142857
- 142857 × 2 = 285714
- 142857 × 3 = 428571
- 142857 × 4 = 571428
- 142857 × 5 = 714285
- 142857 × 6 = 857142

**What do you notice?** These are all cyclic permutations of the same six digits. This is not a coincidence — it is a consequence of the structure of division by 7.

Investigate: Does 1/13 show a similar property? What about 1/17?

---

## Common Misconceptions

| Belief | What's accurate |
|--------|----------------|
| "0.333... is not really equal to 1/3 — it just gets closer" | 0.333... is exactly equal to 1/3. The "..." means the pattern continues forever, and the value it represents is exactly 1/3. |
| "Bigger denominators are more likely to repeat" | What matters is the prime factors, not the size. 1/64 (denominator 64) terminates; 1/3 (denominator 3) repeats. |
| "0.9999... is almost 1 but not quite" | 0.999... = 1 exactly. (This is proven in the companion investigation "0.999... = 1? Prove It.") |
| "Repeating decimals are approximations" | Repeating decimals are exact values. 0.142857142857... is exactly equal to 1/7. |
| "You can't convert repeating decimals back to fractions" | Any repeating decimal can be converted to a fraction using the algebraic method shown in Part C. |

---

## Teaching Notes

**On the hook:** The table of conversions at the start is more effective than a question. Students look at it and something nags at them — the pattern is almost visible. The investigation is the process of making it fully visible.

**On prime factorisation:** This investigation is an excellent application of prime factorisation skills. If students haven't yet studied this, the investigation can be used to motivate it — "to answer this question, we need to be able to break any number into its prime components."

**On Part D:** The cyclic permutation property of 142857 is genuinely beautiful and surprising. It comes from 7 being a prime with a particular relationship to 10. Not all primes show this property, but several do — and they are called "full reptend primes."

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Part A | Criterion A | Knowing and understanding: applying the termination rule |
| Parts B + C | Criterion B | Investigating patterns: identifying and expressing the rule for termination |
| Part D | Criterion B | Investigating patterns: extending to an unexpected and rich extension case |

---

> **The bigger idea:** The fact that a number terminates or repeats depends on whether its denominator's prime factors divide evenly into 10. Our base-10 number system is built on 2 × 5. Any fraction whose denominator uses only those prime factors can be expressed exactly. Everything else becomes an infinite, repeating pattern. The decimal system is not neutral — it has a built-in preference for certain numbers.
