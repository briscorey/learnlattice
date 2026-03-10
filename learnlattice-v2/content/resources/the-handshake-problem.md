---
title: "The Handshake Problem"
date: 2026-03-10
description: "If 30 people are in a room and everyone shakes hands with everyone else, how many handshakes happen? Can you find the answer WITHOUT counting every single one?"
subjects:
  - "Mathematics"
math_topic: Algebra
year_levels:
  - "Grade 7"
  - "Grade 8"
resource_types:
  - "Investigation Pack"
tags:
  - "Mathematics"
key_concept: "Logic"
global_context: "Scientific and Technical Innovation"
statement_of_inquiry: "Generalisation is the heart of algebra — finding a rule that works for any number, not just the one in front of you."
difficulty: "meeting"
hook: "If 30 people are in a room and everyone shakes hands with everyone else, how many handshakes happen? Can you find the answer WITHOUT counting every single one?"
warmup: "Stand up. Shake hands with every person in your group. How many handshakes for 3 people? 4 people? 5 people?"
---
## The Hook

At a party, 5 people shake hands with everyone else.

Count them. It is 10 handshakes.

Now imagine 30 people. Do you want to count every pair? Or would you rather find a **formula**?

---

## Build the Pattern

| People | Handshakes | Pattern |
|---|---|---|
| 2 | 1 | |
| 3 | 3 | |
| 4 | 6 | |
| 5 | 10 | |
| 6 | 15 | |

> **What pattern do you see?** The differences are 1, 2, 3, 4, 5... Each new person shakes hands with everyone already there.

---

## Find the Formula

Person 1 shakes hands with (n-1) people. Person 2 shakes with (n-2) new people (already shook with Person 1). Person 3 shakes with (n-3)...

Total = (n-1) + (n-2) + (n-3) + ... + 1

This is the sum of integers from 1 to (n-1):

$$H = \frac{n(n-1)}{2}$$

### Test it:
- 5 people: 5 × 4 ÷ 2 = **10** ✓
- 30 people: 30 × 29 ÷ 2 = **435**
- Your whole school?

---

## Why the Formula Works

Imagine everyone shakes hands with everyone — that gives n × (n-1) interactions. But each handshake was counted twice (once for each person). So divide by 2.

> This is the same reasoning Gauss used when he was 10 years old to add the numbers 1 to 100. The pattern is the same. The mathematics is connected.

---

## Teaching Notes

Start with physical handshakes — Liljedahl-style random groups standing up. Students feel the combinatorial explosion as group size increases. The jump from 5 people (manageable) to 30 (impossible to count) creates a genuine need for a formula.

The connection to triangular numbers and to the Staircase Problem creates a web of understanding across investigations.