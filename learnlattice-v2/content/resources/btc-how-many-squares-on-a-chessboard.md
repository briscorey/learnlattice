---
title: "How Many Squares on a Chessboard?"
date: 2026-03-17
description: "A chessboard has 64 small squares. But how many squares of ALL sizes? This visual thinking task leads to the sum of square numbers and a surprising connection to algebraic proof."
subjects:
  - "Mathematics"
math_topic: "Number Sense"
year_levels:
  - "Grade 6"
  - "Grade 7"
  - "Grade 8"
resource_types:
  - "Investigation Pack"
tags:
  - "Criterion B"
  - "Criterion C"
  - "Building Thinking Classrooms"
  - "Geometry"
  - "Number Patterns"
  - "Thinking Task"
key-concepts:
  - "Patterns"
global-contexts:
  - "Personal and Cultural Expression"
statement_of_inquiry: "Looking beyond the obvious reveals hidden mathematical structures in familiar objects."
difficulty: "meeting"
duration: "1 lesson"
hook: "A chessboard has 64 small squares. But how many squares of ALL sizes can you find?"
warmup: "How many squares on a 2×2 grid? Draw it. Count carefully — there are more than you think."
seo_title: "How Many Squares on a Chessboard? — BTC Thinking Task | MYP Maths | Grade 6-8"
seo_description: "Free MYP maths thinking task from Building Thinking Classrooms. A chessboard has 64 small squares. But how many squares of ALL sizes? This visua"
---
## The Hook

Everyone knows a chessboard has 64 small squares.

But how many squares of **all sizes** — 1×1, 2×2, 3×3, ... up to 8×8?

> **The answer is NOT 64.** Grab your whiteboard and start counting.

---

## Build the Pattern

Start small and work up:

| Grid Size | 1×1 squares | 2×2 squares | 3×3 squares | ... | Total |
|---|---|---|---|---|---|
| 1×1 | 1 | — | — | | **1** |
| 2×2 | 4 | 1 | — | | **5** |
| 3×3 | 9 | 4 | 1 | | **14** |
| 4×4 | 16 | 9 | 4 | | **30** |
| n×n | ? | ? | ? | | **?** |

> **The total column is 1, 5, 14, 30, ...** What is the pattern? Can you predict the 8×8 total?

---

## The Formula

The total number of squares on an n×n grid is:

$$1^2 + 2^2 + 3^2 + ... + n^2 = \frac{n(n+1)(2n+1)}{6}$$

For an 8×8 chessboard: 8 × 9 × 17 ÷ 6 = **204 squares**

---

## Why Each Size Works

On an n×n grid, the number of k×k squares is (n-k+1)². This is because a k×k square can be placed in (n-k+1) positions horizontally and (n-k+1) positions vertically.

> **Justify:** Why can a 3×3 square be placed in exactly 6 × 6 = 36 positions on an 8×8 grid?

---

## Teaching Notes

**BTC Practices Used:** Visual entry (everyone can draw a 2×2 grid), random groups at vertical surfaces, progressive complexity.

**MYP Criterion B Connection:** Students discover the pattern in the totals column, describe it as a sum of squares, verify for the cases they have counted, and justify using the positional argument.

**MYP Criterion C Connection:** The table construction and explanation of the counting method require clear mathematical communication.

**EAL Scaffold:** This task is highly visual. Students can draw grids and shade squares to count, making the mathematics accessible before any algebraic notation is introduced.