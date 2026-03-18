---
title: "The Circular Prison Problem"
date: 2025-09-03
description: "Prisoners standing in a circle eliminate every second person. Where should you stand to survive? A thinking task connecting patterns, modular arithmetic, and powers of 2 — known as the Josephus problem."
subjects:
  - "Mathematics"
math_topic: "Number Sense"
year_levels:
  - "Grade 8"
  - "Grade 9"
resource_types:
  - "Investigation Pack"
tags:
  - "Criterion B"
  - "Building Thinking Classrooms"
  - "Number Theory"
  - "Powers"
  - "Sequences"
  - "Thinking Task"
key-concepts:
  - "Patterns"
global-contexts:
  - "Scientific and Technical Innovation"
statement_of_inquiry: "Mathematical patterns emerge in unexpected contexts when we investigate systematically and look for underlying structure."
difficulty: "exceeding"
duration: "1 lesson"
hook: "41 prisoners stand in a circle. Starting from prisoner 1, every second prisoner is eliminated. Where would you stand to be the last one remaining?"
warmup: "Try with 5 prisoners. Number them 1-5 in a circle. Eliminate every second one. Who survives?"
seo_title: "The Circular Prison Problem — BTC Thinking Task | MYP Maths"
seo_description: "Free MYP maths thinking task from Building Thinking Classrooms. Prisoners standing in a circle eliminate every second person. Where should you s"
---
## The Hook

41 prisoners stand in a circle. Starting from prisoner 1, every second person is eliminated (2, 4, 6, ...) continuing around and around the circle.

**Where would you stand to be the last one remaining?**

> **Start small.** Try with 4, 5, 6, 7, 8 prisoners. Record the survivor position each time.

---

## Build the Pattern

| Prisoners | Survivor Position |
|---|---|
| 1 | 1 |
| 2 | 1 |
| 3 | 3 |
| 4 | 1 |
| 5 | 3 |
| 6 | 5 |
| 7 | 7 |
| 8 | 1 |
| 9 | 3 |
| 10 | 5 |

> **Look at when the survivor resets to position 1.** What is special about those numbers?

---

## The Connection to Powers of 2

The survivor returns to position 1 whenever n is a power of 2 (1, 2, 4, 8, 16, 32...).

For any n, find the largest power of 2 less than or equal to n: call it 2ᵏ. The remainder is L = n − 2ᵏ.

**The survivor position is: 2L + 1**

For 41 prisoners: 32 ≤ 41, so 2ᵏ = 32, L = 41 − 32 = 9. Survivor = 2(9) + 1 = **position 19**.

> **Verify this by simulation.** Does position 19 survive with 41 prisoners?

---

## Why This Works

After the first round of eliminations, the problem reduces to a smaller circle starting from a different position. The power-of-2 structure appears because each complete elimination round halves the group.

> This is the **Josephus Problem** — studied for over 2000 years and connected to binary number representations.

---

## Teaching Notes

**BTC Practices Used:** Thinking task, random groups, vertical non-permanent surfaces. Students can physically act this out with 8-10 people before scaling up on paper.

**MYP Criterion B Connection:** The investigation builds from physical simulation (concrete) through tabulation (pattern recognition) to the formula involving powers of 2 (generalisation) and its justification.

**Extension:** What if every third person is eliminated instead of every second? The pattern becomes dramatically more complex — but still investigable.