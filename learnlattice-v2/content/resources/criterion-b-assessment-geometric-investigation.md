---
title: "Criterion B Assessment: Geometric Investigation"
date: 2026-03-08
description: "A ready-to-use MYP Criterion B assessment task investigating the relationship between the number of sides of a polygon and the sum of its interior angles. Annotated responses at levels 3-4, 5-6, and 7-8."
subjects:
  - "Mathematics"
math_topic: "Geometry"
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
  - "Geometry"
  - "Angles"
  - "Student Work"
  - "Annotated Responses"
key_concept: "Form"
global_context: "Scientific and Technical Innovation"
statement_of_inquiry: "The forms of polygons follow mathematical rules that connect the number of sides to measurable properties — and discovering these rules requires systematic investigation."
formula: "Sum of interior angles = (n − 2) × 180°"
btc_practices:
  - "Thinking Tasks"
  - "Vertical Non-Permanent Surfaces"
download_url: ""
download_label: "Assessment Task PDF"
teacher_moves:
  before:
    - title: "Start with what they know"
      body: "Ask: 'What is the sum of angles in a triangle?' (180°). Then: 'What about a square?' (360°). Write both on the board. 'What about a pentagon? Can you figure it out WITHOUT being told?' This launches the investigation."
  during:
    - title: "Drawing triangles inside polygons"
      body: "If students are stuck, suggest: 'Can you divide the pentagon into triangles by drawing lines from ONE vertex?' This is the key insight. Don't tell them the formula — let the triangle decomposition lead them to it."
  after:
    - title: "Predict then verify"
      body: "After students find the formula, ask: 'Predict the angle sum for a 20-sided polygon. Now predict for a 100-sided polygon. What would happen as n approaches infinity?' This stretches thinking toward limits."
---

## The Assessment Task

### Questions

**(a)** Find the sum of the interior angles of a triangle, quadrilateral, pentagon, and hexagon. Show your method clearly. *[Criterion B strand i]*

**(b)** Organise your results in a table. Describe the pattern you observe between the number of sides and the angle sum. *[Criterion B strand ii]*

**(c)** Write a general rule (formula) for the sum of interior angles of any polygon with $n$ sides. *[Criterion B strand ii]*

**(d)** Use your rule to predict the angle sum of a decagon (10 sides) and a 20-sided polygon. Verify one of your predictions. *[Criterion B strand iii]*

**(e)** Justify why your rule works for any polygon — not just the ones you tested. *[Criterion B strand iii]*

---

## Annotated Student Response: Levels 3–4

> Triangle: 180° ✓ Quadrilateral: 360° ✓ Pentagon: "I measured with a protractor and got about 540°"
>
> "The angles go up by 180° each time."
>
> Rule: "Keep adding 180°"
>
> Decagon: "I think about 1800° but I'm not sure"
>
> [No justification]

### Why this is Level 3–4:

Measuring with a protractor shows effort but is imprecise and doesn't reveal the mathematical structure. The recursive pattern ("add 180°") is correct but not a general formula. The decagon prediction is correct but the student shows no confidence in it and cannot justify it. The approach is appropriate but limited.

---

## Annotated Student Response: Levels 5–6

> | Sides (n) | Angle Sum | Triangles formed |
> |---|---|---|
> | 3 | 180° | 1 |
> | 4 | 360° | 2 |
> | 5 | 540° | 3 |
> | 6 | 720° | 4 |
>
> "I can split every polygon into triangles from one vertex. A quadrilateral splits into 2 triangles, a pentagon into 3, a hexagon into 4. The number of triangles is always 2 less than the number of sides."
>
> Rule: $S = (n - 2) \times 180°$
>
> Decagon: $(10 - 2) \times 180° = 1440°$ ✓
> 20-gon: $(20 - 2) \times 180° = 3240°$
>
> "I verified the decagon by drawing one and splitting it into 8 triangles: $8 \times 180° = 1440°$ ✓"

### Why this is Level 5–6:

The table includes the triangle count — showing the student has identified the structural relationship, not just the numerical pattern. The formula is correct and properly derived from the triangle decomposition. Verification is done by an independent method (drawing and counting triangles). The work is well-organised and the generalisation is sound. However, the justification is implicit rather than explicit — the student shows the method works but doesn't fully explain WHY any polygon can be decomposed into $n - 2$ triangles.

---

## Annotated Student Response: Levels 7–8

> [Includes everything from 5-6, plus:]
>
> **Justification:**
>
> "From any single vertex of an $n$-sided polygon, I can draw diagonal lines to every other non-adjacent vertex. This creates triangles inside the polygon. I cannot draw a diagonal to the two vertices directly adjacent to my starting vertex (those are sides of the polygon, not diagonals), and I cannot draw a diagonal to myself. So the number of diagonals from one vertex is $n - 3$, and these diagonals divide the polygon into $n - 2$ triangles.
>
> Since each triangle has an angle sum of 180°, and the triangles fill the entire polygon without overlap, the total angle sum must be $(n - 2) \times 180°$.
>
> This works for ANY polygon — regular or irregular — because the triangle decomposition depends only on the number of vertices, not on the shape of the polygon. Even a very irregular hexagon still decomposes into exactly 4 triangles from any vertex, giving $720°$.
>
> **Extension:** As $n$ gets very large, the polygon approaches a circle. The angle sum $(n - 2) \times 180°$ grows without bound, but each individual interior angle approaches 180°. This makes sense geometrically — the sides of the polygon become nearly straight, and each 'corner' is barely a corner at all."

### Why this is Level 7–8:

The justification is a mathematical proof: it explains why $n - 2$ triangles are always formed (counting argument: $n$ vertices, minus the starting vertex, minus 2 adjacent vertices = $n - 3$ diagonals creating $n - 2$ triangles). The student explicitly addresses generality ("regular or irregular"). The extension about approaching a circle demonstrates mathematical thinking beyond the task requirements.
