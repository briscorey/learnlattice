---
title: "How Many Squares on a Chessboard?"
date: 2025-11-10
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
seo_title: "How Many Squares on a Chessboard? — BTC Thinking Task | M..."
seo_description: "Free MYP maths thinking task from Building Thinking Classrooms. A chessboard has 64 small squares. But how many squares of ALL sizes? This visua"
teacher_moves:
  - title: "Start with the table, not the formula"
    description: "Students who build a table of values and look for patterns find the generalisation more meaningful than students who are given the formula first."
  - title: "Visibly random groups"
    description: "Use random grouping. Students who always work with friends miss the productive discomfort of explaining their thinking to someone new."
  - title: "Vertical non-permanent surfaces"
    description: "Get students working on whiteboards or windows. Standing work is more collaborative and erasable surfaces lower the stakes of being wrong."
timeline: '0-5 min: Present the hook. | 5-10 min: Warmup in pairs. | 10-30 min: Main investigation in groups. | 30-40 min: Gallery walk or class discussion. | 40-48 min: Exit ticket.'
misconceptions:
- myth: "Checking a few cases proves a formula"
  why: "If it works for 5 values it must always work"
  truth: "Verification is not proof. A formula must work for ALL values, not just the ones tested."
- myth: "There is only one correct method"
  why: "Textbooks typically show one approach"
  truth: "Multiple methods can reach the same answer. Comparing methods deepens understanding."
self_check:
- level: Getting started
  items:
  - I understand what the investigation is asking
  - I have started collecting data or working through the problem
- level: Building understanding
  items:
  - I can describe the pattern or relationship I found
  - I used a systematic approach
- level: Going deeper
  items:
  - I can explain WHY the pattern works
  - I verified my findings with additional cases
- level: Pushing further
  items:
  - I can generalise my findings to new contexts
  - I can evaluate limitations of my approach
exit_ticket:
- "What is the key pattern or formula you discovered today?"
- "Give one example that shows your finding works and explain why."
- "Rate your confidence: 1 (not sure) to 5 (totally got it)."
differentiated:
  approaching: "Work through the guided version with scaffolded tables. Focus on describing the pattern you see."
  meeting: "Complete the investigation independently. Find the pattern, write a general rule, and verify it."
  exceeding: "Extend with your own question. Prove why your formula must work. Connect to another area of mathematics."
sentence_starters:
  describing:
  - "I noticed that..."
  - "The pattern shows..."
  explaining:
  - "This works because..."
  - "I can generalise this as..."
  justifying:
  - "I know this is correct because..."
  - "My evidence is..."
listen_for:
- level: "3-4"
  phrase: "Describes what they see but cannot explain the pattern"
- level: "5-6"
  phrase: "Identifies the pattern and can predict the next case"
- level: "7-8"
  phrase: "States a general rule and explains WHY it works"
journal_prompts:
- "What was the most surprising thing you discovered today?"
- "What strategy did you use, and would you change it next time?"
- "How does this connect to something you already knew?"
- "If you had more time, what would you investigate next?"
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