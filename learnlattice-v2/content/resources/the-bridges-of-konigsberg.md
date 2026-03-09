---
title: The Bridges of Königsberg
date: 2026-03-03
description: In 1736, Leonhard Euler was asked whether it was possible to walk through the city of Königsberg crossing each of its seven bridges exactly once. His answer — and the way he reached it — invented
  an entire branch of mathematics. This investigation recreates that discovery from scratch.
subjects:
- Mathematics
math_topic: Geometry
year_levels:
- Grade 7
- Grade 8
- Grade 9
- MYP Year 2
- MYP Year 3
resource_types:
- Investigation Pack
tags:
- Geometry
- Networks
- Graph Theory
- Euler
- Proof
- Criterion A
- Criterion B
key_concept: Systems
global_context: Scientific and Technical Innovation
statement_of_inquiry: Transforming a real-world problem into an abstract structure can reveal solutions — and impossibilities — that would be invisible otherwise.
formula: 'Euler path: exactly 0 or 2 odd-degree vertices'
download_url: ''
download_label: Investigation Pack PDF
hook: Can you cross every bridge in a city exactly once? The answer invented an entire branch of mathematics.
warmup: 'Draw a simple network on the board. Ask: Can you trace every line without lifting your pen? Give 2 minutes to try.'
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
  phrase: Describes observations about the bridges of königsberg without explanation
- level: 5-6
  phrase: Explains patterns using evidence from the investigation
- level: 7-8
  phrase: Evaluates the method, identifies limitations, and connects to broader concepts
quick_check:
- q: What is the key question this investigation explores?
  a: Students should reference the central question of The Bridges of Königsberg
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
- Explain the bridges of königsberg to someone who hasn't studied it. What would you say?
- What was the hardest part of today's investigation? How did you work through it?
- How does this topic connect to something you already knew?
- If you could investigate one more question about this topic, what would it be?
differentiated:
  approaching: Complete the guided investigation with scaffolded questions. Focus on describing what you observe.
  meeting: Complete the investigation independently. Explain the patterns you find using evidence.
  exceeding: Extend the investigation with your own question. Evaluate your method and suggest improvements.
---



## The Hook

Project a simple map of four landmasses connected by seven bridges. Do not label it.

Ask: *Can you find a route that crosses every bridge exactly once? Draw it.*

Give them five minutes. Most will try. All will fail — or think they've succeeded and be shown the error.

Then tell them: in 1736, the citizens of Königsberg, Prussia had been asking this question about their own city for years. Nobody could do it. Nobody could prove it was impossible either. Euler looked at the problem, stripped away everything irrelevant — the streets, the buildings, the geography — and drew four dots connected by seven lines. In that stripped-down picture, he found not just the answer to the Königsberg problem, but a rule that works for *every possible network of bridges and islands.*

He invented graph theory in an afternoon.

---

## Why This Investigation Matters

Graph theory underlies:
- GPS navigation (finding optimal routes)
- Internet routing (sending packets efficiently)
- Social network analysis (how information spreads)
- Molecular chemistry (mapping bonds between atoms)

None of these applications existed in 1736. Euler's abstraction was a solution looking for future problems.

This investigation teaches mathematical abstraction as a technique — the idea that stripping a problem to its essential structure often reveals solutions invisible in the original form.

---

## Core Concepts

### From Map to Graph

In a *graph* (the mathematical kind, not a bar chart), we have:
- **Vertices** (dots) — represent locations
- **Edges** (lines) — represent connections between them

The Königsberg map becomes: 4 vertices, 7 edges.

The question "can we cross every bridge exactly once?" becomes: *can we trace every edge of this graph exactly once without lifting the pencil?*

This is called an **Euler path** (or Eulerian path).

### The Degree of a Vertex

The **degree** of a vertex is the number of edges connected to it.

For an Euler path to exist through a vertex (not the start or end), you need to *enter* it once and *leave* it once. That requires an even degree — pairs of edges (one in, one out).

The **start** vertex needs one extra edge going out. The **end** vertex needs one extra edge coming in. Both can have odd degree.

**Euler's Rule:**
- A graph has an Euler path (crossing every edge once) if and only if it has **exactly 0 or 2 vertices with odd degree**
- If 0 odd-degree vertices: the path starts and ends at the same point (an Euler *circuit*)
- If 2 odd-degree vertices: the path starts at one odd-degree vertex and ends at the other
- If more than 2 odd-degree vertices: **no Euler path exists**

### Applying to Königsberg

Count the degree of each vertex in the Königsberg graph:
- North bank: 3 edges → odd degree
- South bank: 3 edges → odd degree
- Large island: 5 edges → odd degree
- Small island: 3 edges → odd degree

Four odd-degree vertices. Euler's rule says: **impossible**.

The citizens of Königsberg were not failing because they hadn't tried hard enough. They were failing because the task is *logically impossible* — and Euler proved it.

---

## Investigation Tasks

### Part A — Drawing Graphs

Convert each of these bridge/island descriptions into a graph. Then calculate the degree of every vertex.

1. 3 landmasses, 4 bridges: A-B, A-B, B-C, A-C
2. 4 landmasses forming a ring: A-B, B-C, C-D, D-A
3. 5 landmasses: A connected to all others, no other connections
4. The original Königsberg map (draw from the description above)

For each graph: *How many vertices have odd degree? Does an Euler path exist?*

### Part B — Predicting Before Testing

For each graph below, use Euler's rule to predict whether an Euler path exists. Then verify by trying to draw one.

Draw your own graphs for:
1. A network with exactly 0 odd-degree vertices
2. A network with exactly 2 odd-degree vertices
3. A network with exactly 4 odd-degree vertices

**Verification question:** If your prediction says "no Euler path," can you prove it by showing exactly why you always get stuck? Where in the network does the blockage occur?

### Part C — Real Networks

Apply Euler's analysis to these real situations:

1. **The postman problem:** A mail carrier wants to walk every street in a district exactly once and return to the post office. Under what conditions is this possible? What is the minimum number of repeated streets if it isn't?

2. **Drawing puzzles:** Can you draw each of these shapes without lifting your pencil and without retracing any line? Apply Euler's rule before trying.
   - A rectangle (4 vertices, 4 edges)
   - A rectangle with both diagonals drawn
   - The outline of a house (pentagon base + triangle roof)
   - A 5-pointed star (drawn as one continuous shape)

3. **Network design:** You are designing a park path system connecting 6 landmarks. For a guided tour to work (visit every path exactly once), what constraint must your design satisfy? Design a valid 6-landmark park path system.

### Part D — Proving Euler's Rule (Extension, Criterion B)

The rule states: an Euler path exists if and only if there are exactly 0 or 2 odd-degree vertices.

Prove the **forward direction**: *if an Euler path exists, then there are at most 2 odd-degree vertices.*

Hint: Think about what happens every time a path enters and leaves a vertex. How many edges does this account for? What happens at the start and end vertices?

---

## Common Misconceptions

| Belief | What's accurate |
|--------|----------------|
| "If you try enough routes, you'll find one" | Euler's rule gives a definitive yes/no before trying. The Königsberg problem has no solution — not because we haven't tried hard enough but because we've proven it's impossible. |
| "A graph is the same as a diagram" | A mathematical graph is a specific abstract object: a set of vertices and edges. The Königsberg layout doesn't matter — only the connectivity structure does. |
| "Euler paths and Euler circuits are the same thing" | An Euler circuit starts and ends at the same vertex (requires 0 odd-degree vertices). An Euler path starts and ends at different vertices (requires exactly 2 odd-degree vertices). |
| "All graphs with even-degree vertices are connected" | Euler's rule assumes the graph is *connected* (you can get from any vertex to any other). A disconnected graph with all even-degree vertices does not have an Euler circuit. |
| "More edges makes an Euler path more likely" | More edges means more vertices have higher degree — which might *increase* the number of odd-degree vertices. More edges can make an Euler path harder to achieve. |

---

## Teaching Notes

**On the opening:** The map-to-graph abstraction is the entire lesson. Make it explicit and deliberate: "We are throwing away everything that isn't relevant. Streets don't matter. Distances don't matter. Buildings don't matter. Only connection matters." This is the fundamental move of mathematical modelling.

**On Part D:** The proof is within reach of strong MYP Year 3-4 students who are comfortable with logical argument. The key insight is: every internal vertex in an Euler path is entered once and exited once per passage — using edges in pairs. Only start and end vertices can have an odd number of edge-uses.

**On the applications:** The connection to GPS routing (Dijkstra's algorithm runs on a graph), social networks (six degrees of separation is a graph-theoretic claim), and chemistry (molecular graphs) makes this feel genuinely modern. The 1736 solution predates all of these by 200+ years.

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Part A | Criterion A | Knowing and understanding: applying degree counting in specific graphs |
| Parts B + C | Criterion B | Investigating patterns: using Euler's rule to predict and verify |
| Part D | Criterion B | Investigating patterns: constructing a proof of the pattern identified |

---

> **The bigger idea:** Euler's approach to the Königsberg problem introduced the concept that would become mathematics' most powerful modelling tool. By asking "what is the *essential structure* of this problem?" he replaced a geographic question with an algebraic one. Abstraction is not simplification — it is the art of keeping exactly what matters and discarding everything that doesn't.
