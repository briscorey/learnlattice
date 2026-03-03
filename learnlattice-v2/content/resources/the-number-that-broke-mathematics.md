---
title: "The Number That Broke Mathematics"
date: 2026-03-03
description: "The Pythagoreans believed all numbers were ratios of whole numbers. Then someone calculated the diagonal of a unit square and found a number that isn't. This investigation uses that 2500-year-old crisis to build genuine understanding of irrational numbers — and what it means for a number to be 'real'."
subjects:
  - "Mathematics"
math_topic: "Number Sense"
year_levels:
  - "Grade 8"
  - "Grade 9"
  - "MYP Year 3"
  - "MYP Year 4"
resource_types:
  - "Investigation Pack"
tags:
  - "Number Sense"
  - "Irrational Numbers"
  - "Square Roots"
  - "Proof"
  - "Number Systems"
  - "Criterion A"
  - "Criterion B"
key_concept: "Logic"
global_context: "Scientific and Technical Innovation"
statement_of_inquiry: "The structure of a number system determines what kinds of problems it can solve — and what problems it cannot."
formula: "√2 ≠ p/q"
download_url: ""
download_label: "Investigation Pack PDF"
---

## The Hook

Draw a square on the board with sides of length 1. Ask: *What is the length of the diagonal?*

Students will reach for Pythagoras: √(1² + 1²) = √2.

Write √2 on the board. Then ask: *What number is this exactly? Write it as a fraction.*

Give them two minutes. They will write 1.4, or 1.41, or 1.414. Ask: *Is that exactly right?* 

It isn't. No decimal they write will be exact. No fraction they name will work. The diagonal of a unit square — the most geometric object imaginable — cannot be expressed as a ratio of two whole numbers.

The ancient Greeks found this so disturbing they reportedly drowned the man who proved it.

---

## Why This Investigation Matters

Irrational numbers are usually introduced as "numbers that can't be written as fractions" followed immediately by a list: √2, √3, π. Students memorise the definition and the examples without understanding why this category of number had to be *invented*, or why the rational numbers were not sufficient.

This investigation treats the discovery of irrationality as a mathematical crisis — because that is what it was. Understanding why √2 is irrational, and what the proof actually argues, is an encounter with one of the most important ideas in all of mathematics: proof by contradiction.

---

## Core Concepts

### What Are Rational Numbers?

A **rational number** is any number that can be written as p/q where p and q are integers and q ≠ 0.

Examples: 3/4, -2/7, 0, 5 (= 5/1), 0.333... (= 1/3), 1.25 (= 5/4)

Key property: in lowest terms, p and q share no common factors.

### The Claim: √2 Is Not Rational

We want to show that no fraction p/q, in lowest terms, has the property that (p/q)² = 2.

**Proof by contradiction:**

Assume √2 *is* rational. Then √2 = p/q for some integers p and q in lowest terms (no common factors).

Squaring both sides: 2 = p²/q²

So: p² = 2q²

This means p² is even (it equals 2 times something). If p² is even, then p must be even. (Why? If p were odd, p² would be odd. Test: 3² = 9, 5² = 25, 7² = 49 — all odd.)

So p = 2k for some integer k.

Substituting: (2k)² = 2q², so 4k² = 2q², so 2k² = q².

This means q² is even, so q must be even.

But wait — we said p and q had no common factors. Now we've shown both p and q are even (both divisible by 2). **Contradiction.**

The assumption that √2 is rational leads to a contradiction. Therefore, √2 is **irrational**.

### What This Means

The rational numbers have gaps. Between any two rational numbers there are infinitely many other rational numbers — and yet there are still numbers (infinitely many of them) that the rationals miss entirely. The number line has *more* points than we thought.

The real number system is the rationals plus the irrationals. Together they fill every point on the number line — no gaps.

---

## Investigation Tasks

### Part A — Squeezing In On √2

Without a calculator, find two consecutive integers that √2 sits between. Then find two decimals with one decimal place that it sits between. Then two with two decimal places.

| Precision | Lower bound | Upper bound |
|-----------|-------------|-------------|
| Integers | ? | ? |
| 1 d.p. | ? | ? |
| 2 d.p. | ? | ? |
| 3 d.p. | ? | ? |

Each time: *How do you know √2 is between these two values?*

### Part B — Testing the Proof

The proof above uses one key fact: *if p² is even, then p is even.*

1. Verify this with five examples — pick odd numbers, square them, check the result is odd.
2. Write an explanation of *why* this is always true (Hint: what form does an odd number take? What happens when you square it?)
3. Now try the same proof for √3. Does it work? At which step does the argument change?

### Part C — Which Are Rational?

Classify each of the following as rational or irrational. For each rational number, write it as a fraction in lowest terms. For each irrational, explain why it can't be rational.

1. √4
2. √5
3. √(9/16)
4. √(2) × √(2)
5. √2 + √2
6. (√2)²
7. 0.171717... (repeating)
8. 0.1010010001... (pattern continues but never repeats)

**Key question:** Is the product of two irrational numbers always irrational? Find an example that answers this.

### Part D — The Geometric Proof (Extension)

The Pythagoreans knew √2 geometrically before they understood it numerically. Here is a different proof that √2 is irrational — using only geometry and the concept of "common measure."

If √2 were rational, then the diagonal and side of a square would have a *common measure* — a small length that fits exactly into both. Show that this leads to an infinite regress: you can always find a smaller square where the same problem appears, meaning no common measure can exist.

*(This proof requires understanding of similar triangles and properties of odd/even lengths — appropriate for MYP Year 4.)*

---

## Common Misconceptions

| Belief | What's accurate |
|--------|----------------|
| "√2 = 1.414" | 1.414 is an approximation. √2 is the exact number whose square is 2. No finite decimal is exact. |
| "Irrational means you can't calculate it" | Irrational means it cannot be expressed as a ratio of integers. It is perfectly well-defined and can be used in calculations. |
| "There aren't many irrational numbers" | There are vastly more irrational numbers than rational numbers — in a precise mathematical sense, the irrationals are uncountably infinite, the rationals are not. |
| "Proof by contradiction is a trick" | It is a rigorous logical argument structure. Assuming the opposite and deriving a contradiction is not a trick — it is a valid proof technique used throughout mathematics. |
| "π is irrational for the same reason as √2" | The proof that π is irrational is much harder and was not found until 1761. √2 being irrational and π being irrational require completely different arguments. |

---

## Teaching Notes

**On the hook:** The dramatic framing — the Greeks drowning someone — is probably legend. But the mathematical crisis was real. The point is that √2 forced a fundamental revision of what "number" means. Use that framing: *this is the moment when mathematics had to grow.*

**On proof by contradiction:** Many students find this form of argument slippery. The key is to make the logical structure explicit: "We assumed X. We derived both Y and not-Y. That is impossible. Therefore X must be false." Write this structure on the board before the proof begins.

**On Part C, question 4:** √2 × √2 = 2, which is rational. This surprises students who expect irrational × irrational = irrational. It is a productive surprise — the category "irrational" does not behave like "odd" or "even" under multiplication.

**On the bigger picture:** This is one of a small number of results in middle/high school mathematics where students encounter an actual mathematical proof — not a demonstration or a pattern, but a logical argument that guarantees a result for all cases. That encounter deserves explicit acknowledgement.

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Part A | Criterion A | Knowing and understanding: working with square roots and approximation |
| Parts B + C | Criterion B | Investigating patterns: generalising properties of rational and irrational numbers |
| Part D | Criterion C | Communicating: constructing a logical mathematical argument |

---

> **The bigger idea:** The proof that √2 is irrational is one of the oldest proofs in existence and one of the most elegant. It demonstrates that mathematics is not just about calculating answers — it is about proving that certain answers are impossible. The Pythagoreans wanted all numbers to be rational. They couldn't make √2 cooperate. The lesson: mathematics is not shaped by what we want to be true. It is shaped by what we can prove.
