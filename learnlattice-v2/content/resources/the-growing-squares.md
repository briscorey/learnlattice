---
title: "The Growing Squares"
date: 2026-02-26
description: "Build a square from tiles. Now build a bigger square around it. How many tiles did you add? Build another layer. See the pattern? You just discovered something mathematicians call the difference of sq"
subjects:
  - "Mathematics"
math_topic: Algebra
year_levels:
  - "Grade 6"
  - "Grade 7"
resource_types:
  - "Investigation Pack"
tags:
  - "Mathematics"
key-concepts:
  - "Relationships"
global-contexts:
  - "Scientific and Technical Innovation"
statement_of_inquiry: "Patterns in how shapes grow reveal algebraic relationships that connect geometry to number."
difficulty: "approaching"
hook: "Build a square from tiles. Now build a bigger square around it. How many tiles did you add? Build another layer. See the pattern? You just discovered something mathematicians call the difference of squares."
warmup: "Using square tiles or grid paper, build squares with side lengths 1, 2, 3, 4. Count the tiles in each. What pattern do you see in the totals? What about in the DIFFERENCES?"
seo_title: "The Growing Squares | Free MYP Maths Investigation"
seo_description: "Free MYP mathematics investigation for Grade 6-7. Inquiry-based, classroom-ready with EAL scaffolds. Build a square from tiles. Now build a b"
teacher_moves:
  - title: "Start with the table, not the formula"
    description: "Students who build a table of values and look for patterns find the generalisation more meaningful than students who are given the formula first. Let them struggle with the pattern before offering structure."
  - title: "Think-pair-share the key question"
    description: "30 seconds silent thinking, then pair discussion, then whole-class share. This ensures every student engages with the central question, not just the confident ones."
  - title: "Vertical non-permanent surfaces"
    description: "Get students working on whiteboards or windows. Standing work is more collaborative than seated work, and erasable surfaces lower the stakes of being wrong."
timeline: '0-5 min: Present the hook. let students wonder before you explain anything. | 5-10 min: Warmup activity in pairs. | 10-30 min: Main investigation. students work in groups on vertical surfaces or at tables. | 30-40 min: Gallery walk or whole-class discussion. compare approaches. | 40-48 min: Exit ticket and reflection.'
misconceptions:
- myth: "Pi is exactly 3.14"
  why: "Textbooks round pi to 2 decimal places"
  truth: "Pi is irrational. it never terminates or repeats. 3.14 is an approximation. The true value has infinite decimal places."
- myth: "Pi only appears in circle formulas"
  why: "Students first meet pi in geometry"
  truth: "Pi appears in probability, statistics, physics, and even number theory. It is one of the most fundamental constants in mathematics."
- myth: "Measurement error means the experiment failed"
  why: "Students expect exact answers"
  truth: "Getting 3.1 or 3.2 instead of 3.14159 is normal. Discussing WHY measurements vary is itself valuable learning."
self_check:
- level: Getting started
  items:
  - I understand what the investigation is asking
  - I have started collecting data or working through the problem
- level: Building understanding
  items:
  - I can describe the pattern or relationship I found
  - I used a systematic approach to organise my work
- level: Going deeper
  items:
  - I can explain WHY the pattern works, not just describe it
  - I verified my findings with additional cases or evidence
- level: Pushing further
  items:
  - I can generalise my findings or connect them to other contexts
  - I can evaluate limitations of my approach
sentence_starters:
  describing:
  - "I noticed that..."
  - "The pattern shows..."
  - "When I changed ___, the result..."
  explaining:
  - "This works because..."
  - "The relationship between ___ and ___ is..."
  - "I can generalise this as..."
  justifying:
  - "I know my formula is correct because..."
  - "This must always be true because..."
  - "My evidence for this claim is..."
listen_for:
- level: "3-4"
  phrase: "Describes what they see in the numbers or shapes but cannot explain the pattern"
- level: "5-6"
  phrase: "Identifies the pattern and can predict the next case but cannot write a general formula"
- level: "7-8"
  phrase: "States a general rule using algebra and can explain WHY it works, not just that it works"
exit_ticket:
- "A wheel has diameter 50 cm. What is its circumference?"
- "Why did every group get a slightly different value for pi?"
- "Rate your confidence: 1 (not sure) to 5 (totally got it)."
quick_check:
- type: recall
  q: "What is the relationship between circumference and diameter?"
  a: "C = πd. the circumference is always pi times the diameter"
- type: apply
  q: "A circular table has circumference 314 cm. What is its diameter?"
  a: "d = C ÷ π = 314 ÷ 3.14 = 100 cm"
- type: extend
  q: "If you double the diameter, what happens to the circumference? Why?"
  a: "The circumference also doubles because C = πd is a direct proportion"
differentiated:
  approaching: "Work through the guided version with scaffolded tables and sentence starters. Focus on describing the pattern you see."
  meeting: "Complete the investigation independently. Find the pattern, write a general formula, and verify it with new cases."
  exceeding: "Extend the investigation with your own question. Can you prove why your formula must work? Connect it to another area of mathematics."
journal_prompts:
- "What was the most surprising thing you discovered today?"
- "What strategy did you use, and would you change it next time?"
- "How does this investigation connect to something you already knew?"
- "If you had more time, what would you investigate next?"
parent_summary: 'Your child is working on "The Growing Squares". a mathematics investigation designed for Grade 6 students. They are learning to find patterns, test ideas, and explain their reasoning. Ask them: what did you discover, and how do you know it works?'
---
## The Hook

Build a 1×1 square. It uses **1** tile.

Now build a 2×2 square around it. You added **3** tiles.

Build a 3×3 square around that. You added **5** tiles.

Then 4×4. You added **7** tiles.

> The additions are 1, 3, 5, 7... **Consecutive odd numbers!**

Why do square numbers grow by odd numbers? And can you prove it will ALWAYS work?

---

## The Investigation

### Part A. Build and Record

| Side length | Total tiles | Tiles added | Odd number |
|---|---|---|---|
| 1 | 1 | 1 | 1st odd |
| 2 | 4 | 3 | 2nd odd |
| 3 | 9 | 5 | 3rd odd |
| 4 | 16 | 7 | 4th odd |
| 5 | 25 | ? | ? |
| 10 | ? | ? | ? |

### Part B. See It

Draw the 3×3 square. Colour the new L-shaped border you added to the 2×2. Count the coloured tiles: there are 3 (one on top, one on the right, one in the corner).

The new layer always forms an **L-shape**. The L-shape for side length n has:
- (n-1) tiles along the top
- (n-1) tiles down the right
- 1 tile in the corner
- Total: 2(n-1) + 1 = **2n - 1** (an odd number!)

### Part C. Prove It

$$n^2 - (n-1)^2 = n^2 - (n^2 - 2n + 1) = 2n - 1$$

The difference between consecutive square numbers is always an odd number. **Always.** Not just for the ones you tested. For every square number that exists or will ever exist.

> That is what a proof does. It turns a pattern into a certainty.

---

## Teaching Notes

This is Bruner's CPA in action. Concrete tiles → pictorial L-shapes → abstract algebra. Students who build the pattern physically can see why the formula works. the L-shape IS the formula, made visible.

Give students actual square tiles or grid paper and coloured pencils. The physical act of adding layers and counting creates an embodied understanding that no amount of symbolic manipulation can replicate.