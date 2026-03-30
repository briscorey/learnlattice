---
title: The Circuit Detective
date: 2025-10-22
description: A string of holiday lights goes out. One bulb is broken. How do you find it without testing every single bulb? This investigation builds series and parallel circuit understanding through a
  diagnostic problem that makes circuit design genuinely matter.
subjects:
- Physics
- Science
year_levels:
- Grade 8
- Grade 9
- MYP Year 3
- MYP Year 4
resource_types:
- Investigation Pack
tags:
- Circuits
- Electricity
- Energy Transfer
- Criterion A
- Criterion B
- Criterion D
key_concept: Systems
global_context: Scientific and Technical Innovation
statement_of_inquiry: Understanding how components are connected within a system allows us to predict, diagnose, and design solutions to real problems.
formula: 'V = IR (Ohm''s Law) · Series: I_total = I_1 = I_2 · Parallel: I_total = I_1 + I_2'
download_url: ''
download_label: Investigation Pack PDF
teacher_moves:
- title: Start with the Christmas lights
  description: One bulb dies, the whole string goes dark. Why? This is a real problem students have encountered. The physics explains a frustration they have already felt.
- title: Build before you diagram
  description: If you have circuit kits, build the series circuit physically before drawing the diagram. Students who see the bulb light up understand complete circuits viscerally.
- title: The binary search is a bonus
  description: The diagnostic problem of finding the broken bulb in 100 is secretly a computer science algorithm. Students who discover the half-and-half strategy have independently invented binary search.
difficulty: exceeding
duration: 2–3 lessons
hook: What makes the circuit detective worth investigating?
warmup: 'Show students a simple example related to the circuit detective. Ask: What do you notice? What do you wonder? Give 2 minutes for pair discussion.'
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
- myth: Heavier objects fall faster
  why: This is a common intuition but leads to incorrect conclusions.
  truth: In a vacuum, all objects fall at the same rate. Air resistance affects lighter objects more.
- myth: Forces only exist when things move
  why: This is a common intuition but leads to incorrect conclusions.
  truth: Forces act on stationary objects too. Balanced forces keep things still.
- myth: Energy is used up
  why: This is a common intuition but leads to incorrect conclusions.
  truth: Energy is transferred and transformed, never created or destroyed.
listen_for:
- level: 3-4
  phrase: Describes observations about the circuit detective without explanation
- level: 5-6
  phrase: Explains patterns using evidence from the investigation
- level: 7-8
  phrase: Evaluates the method, identifies limitations, and connects to broader concepts
quick_check:
- q: What is the key question this investigation explores?
  a: Students should reference the central question of The Circuit Detective
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
- Explain the circuit detective to someone who hasn't studied it. What would you say?
- What was the hardest part of today's investigation? How did you work through it?
- How does this topic connect to something you already knew?
- If you could investigate one more question about this topic, what would it be?
differentiated:
  approaching: Complete the guided investigation with scaffolded questions. Focus on describing what you observe.
  meeting: Complete the investigation independently. Explain the patterns you find using evidence.
  exceeding: Extend the investigation with your own question. Evaluate your method and suggest improvements.
seo_title: "The Circuit Detective | MYP Physics Crit A & Crit B"
seo_description: "Free MYP Physics investigation pack targeting Criterion A, Criterion B for Grade 8-9. A string of holiday lights goes out. One bulb is broken. How"
---



## The Hook

Show a string of old-style Christmas lights (series circuit). Pull out one bulb. The entire string goes dark.

Show a second string of modern lights (parallel circuit). Pull out one bulb. The rest stay lit.

Ask: **"Why does the first string go completely dark, but the second one doesn't?"**

Then: **"If you had 100 lights in a series string and one was broken, how would you find it without testing all 100?"**

This diagnostic problem is the investigation.

---

## Core Concept: Series and Parallel Circuits

**Series circuit:** Components connected end-to-end in a single loop. Current is the same everywhere. If one component breaks, the circuit breaks.

**Parallel circuit:** Components connected in separate branches. Each branch has its own path for current. If one branch breaks, the others continue working.

### Ohm's Law: \\(V = IR\\)

- **V** = voltage (the push, measured in volts)
- **I** = current (the flow, measured in amps)
- **R** = resistance (the opposition, measured in ohms)

### Key relationships:
- **Series:** \\(R_{\text{total}} = R_1 + R_2 + R_3\\)
- **Parallel:** \\(\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}\\)

---

## Tiered Tasks

### Part A. Criterion A (Levels 1-4)

1. Draw a series circuit with a battery and 3 bulbs. Draw a parallel circuit with a battery and 3 bulbs.
2. In which circuit does removing one bulb turn off all the others? Explain why.
3. A circuit has a 12V battery and a resistance of 4Ω. Calculate the current using \\(I = \frac{V}{R}\\).

### Part B. Criterion B (Levels 3-6)

Build a series circuit with 3 identical bulbs and measure the voltage across each bulb. Then build a parallel circuit with 3 identical bulbs and measure the voltage across each.

1. Record your measurements in a table
2. Describe the pattern: how does voltage divide in series vs. parallel?
3. State a general rule for voltage distribution in each type of circuit

### Part C. Criterion D (Levels 5-8)

You are designing the lighting system for a new school building. The principal wants:
- If one light breaks, the others must stay on
- The system must be energy efficient
- Maintenance staff need to be able to identify which light is broken quickly

Design the system. Draw the circuit diagram. Explain your choices using Ohm's Law. Calculate the total current if the building uses 20 identical 6Ω lights on a 240V supply. Identify any safety concerns.

---

## Teaching Notes

If you have access to circuit kits, build both circuits physically. If not, use PhET's Circuit Construction Kit (free online simulation). The Christmas lights hook requires no equipment. just describe the scenario or show a photo. Students who have decorated a Christmas tree have encountered this problem.

The diagnostic problem ("find the broken bulb in 100") is a genuine computer science problem (binary search). Students who discover the half-and-half strategy have independently invented one of the most important algorithms in computing.
