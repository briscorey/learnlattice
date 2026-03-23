---
title: "Painting the Cube"
date: 2026-01-12
description: "A 3×3×3 cube is painted red on all faces then cut into 27 small cubes. How many small cubes have 3 red faces? 2? 1? 0? What about a 10×10×10 cube? A spatial thinking task connecting geometry, patterns, and algebraic generalisation."
subjects:
  - "Mathematics"
math_topic: "Geometry"
year_levels:
  - "Grade 7"
  - "Grade 8"
  - "Grade 9"
resource_types:
  - "Investigation Pack"
tags:
  - "Criterion B"
  - "Criterion C"
  - "Building Thinking Classrooms"
  - "Geometry"
  - "3D Shapes"
  - "Algebra"
  - "Thinking Task"
key-concepts:
  - "Form"
global-contexts:
  - "Scientific and Technical Innovation"
statement_of_inquiry: "Three-dimensional form can be analysed systematically by understanding how position determines properties."
difficulty: "meeting"
duration: "1 lesson"
hook: "A 3×3×3 cube is painted red on all faces, then cut into 27 small cubes. How many small cubes have 3 red faces? 2 red faces? 1 red face? 0 red faces?"
warmup: "Start with a 2×2×2 painted cube cut into 8 pieces. How many red faces does each small cube have?"
seo_title: "Painting the Cube — BTC Thinking Task | MYP Maths"
seo_description: "Free MYP maths thinking task from Building Thinking Classrooms. A 3×3×3 cube is painted red on all faces then cut into 27 small cubes. How many "
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

Imagine a large 3×3×3 cube, painted red on every face, then cut into 27 small identical cubes.

Some small cubes have **3 red faces**. Some have **2**. Some have **1**. Some have **0**.

> **How many of each?** Use your whiteboard to sketch and count systematically.

---

## Think About Position

The number of red faces depends on **where the small cube sits**:

| Position | Red Faces | How Many in 3×3×3? |
|---|---|---|
| Corner | 3 | ? |
| Edge (not corner) | 2 | ? |
| Face (not edge) | 1 | ? |
| Interior (hidden) | 0 | ? |

Check: your four numbers should sum to 27.

---

## Generalise to n×n×n

| Red Faces | Position | Formula | 3×3 | 4×4 | 5×5 | 10×10 |
|---|---|---|---|---|---|---|
| 3 | Corner | 8 | 8 | 8 | 8 | 8 |
| 2 | Edge | 12(n−2) | 12 | 24 | 36 | 96 |
| 1 | Face centre | 6(n−2)² | 6 | 24 | 54 | 384 |
| 0 | Interior | (n−2)³ | 1 | 8 | 27 | 512 |

> **Verify:** 8 + 12(n−2) + 6(n−2)² + (n−2)³ should equal n³. Does it?

---

## Why the Formulas Work

- **Corners:** A cube always has 8 vertices, regardless of size.
- **Edges:** A cube has 12 edges, each with (n−2) non-corner positions.
- **Faces:** A cube has 6 faces, each with (n−2)² non-edge positions.
- **Interior:** The hidden cube inside has dimensions (n−2) × (n−2) × (n−2).

> **The key insight:** Every small cube belongs to exactly one category. The categories are determined by the geometry of the cube, not the size.

---

## Teaching Notes

**BTC Practices Used:** Visual/spatial thinking task, random groups, vertical non-permanent surfaces. Physical cubes (if available) make the entry point concrete.

**MYP Criterion B Connection:** Students investigate the pattern across cube sizes, describe general rules for each category, and verify the total. The algebraic identity 8 + 12(n−2) + 6(n−2)² + (n−2)³ = n³ provides a rich justification opportunity.

**MYP Criterion C Connection:** The table format, clear categorisation, and systematic communication are assessed directly.

**Cross-Disciplinary:** This connects to chemistry (surface area to volume ratio in reactions) and biology (cell size limitations).