---
title: "The Growing Squares"
date: 2026-03-10
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

### Part A — Build and Record

| Side length | Total tiles | Tiles added | Odd number |
|---|---|---|---|
| 1 | 1 | 1 | 1st odd |
| 2 | 4 | 3 | 2nd odd |
| 3 | 9 | 5 | 3rd odd |
| 4 | 16 | 7 | 4th odd |
| 5 | 25 | ? | ? |
| 10 | ? | ? | ? |

### Part B — See It

Draw the 3×3 square. Colour the new L-shaped border you added to the 2×2. Count the coloured tiles: there are 3 (one on top, one on the right, one in the corner).

The new layer always forms an **L-shape**. The L-shape for side length n has:
- (n-1) tiles along the top
- (n-1) tiles down the right
- 1 tile in the corner
- Total: 2(n-1) + 1 = **2n - 1** (an odd number!)

### Part C — Prove It

$$n^2 - (n-1)^2 = n^2 - (n^2 - 2n + 1) = 2n - 1$$

The difference between consecutive square numbers is always an odd number. **Always.** Not just for the ones you tested. For every square number that exists or will ever exist.

> That is what a proof does. It turns a pattern into a certainty.

---

## Teaching Notes

This is Bruner's CPA in action. Concrete tiles → pictorial L-shapes → abstract algebra. Students who build the pattern physically can see why the formula works — the L-shape IS the formula, made visible.

Give students actual square tiles or grid paper and coloured pencils. The physical act of adding layers and counting creates an embodied understanding that no amount of symbolic manipulation can replicate.