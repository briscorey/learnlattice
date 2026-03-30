---
title: "The Staircase Problem"
date: 2025-12-29
description: "How many blocks does it take to build a staircase 100 steps high? This investigation moves students from counting to pattern to formula to argument. the complete arc of algebraic thinking. using nothing but a question a six-year-old could understand."
hook: "How many blocks does it take to build a staircase 100 steps high? This investigation moves students from counting to ..."
subjects:
  - "Mathematics"
math_topic: Algebra
year_levels:
  - "Grade 7"
  - "Grade 8"
  - "Grade 9"
  - "MYP Year 2"
  - "MYP Year 3"
  - "MYP Year 4"
resource_types:
  - "Investigation Pack"
tags:
  - "Algebra"
  - "Sequences"
  - "Generalisation"
  - "Quadratic Patterns"
  - "Criterion B"
  - "Criterion C"
key-concepts:
  - "Patterns"
global-contexts:
  - "Scientific and Technical Innovation"
statement_of_inquiry: "Finding the pattern behind a structure allows us to predict and design without building every case."
formula: "n(n+1)/2"

btc_practices:
  - "Visibly Random Groups"
  - "Vertical Non-Permanent Surfaces"
  - "Thinking Tasks"
download_url: ""
download_label: "Investigation Pack PDF"
teacher_moves:
  - title: "Build with blocks first"
    description: "Physical blocks for the first 5 staircases. Students who build before they count find the pattern faster than students who just look at numbers."
  - title: "The rectangle trick"
    description: "If a student is stuck, ask them to build two identical staircases and fit them together. They make a rectangle. The area of the rectangle is n(n+1)."
  - title: "The formula comes from the shape"
    description: "T(n) = n(n+1)/2 is not a formula to memorise. it is half a rectangle. Students who see this never forget the formula because they understand where it came from."

hints:
  - "Build the first 4 staircases with blocks. Count the total blocks in each. Look for a pattern."
  - "Make a table: staircase number (1, 2, 3, 4...) and total blocks. What happens each time?"
  - "The differences between consecutive totals are 1, 2, 3, 4... This is a triangular number pattern."
  - "The formula is T(n) = n(n+1)/2. Can you see why? Each staircase is half a rectangle."

difficulty: "meeting"
duration: "1–2 lessons"
self_check:
- level: Getting started
  items:
  - I built or drew the first 5 staircases
  - I counted the blocks in each and made a table
- level: Building understanding
  items:
  - I found the pattern in the differences
  - I wrote a formula for the nth staircase
- level: Going deeper
  items:
  - I verified my formula for values I did not build
  - I explained how I found the formula
- level: Pushing further
  items:
  - I proved why the formula must work for ALL values
  - I connected the pattern to a geometric shape
misconceptions:
- myth: The formula is just the pattern of differences
  why: The differences are 1, 2, 3, 4 so it seems like the formula should be n
  truth: 'The differences tell you about the formula but they ARE not the formula.
    The totals are 1, 3, 6, 10. these are triangular numbers: n(n+1)/2.'
- myth: Checking 5 cases proves a formula
  why: If it works for 5 values it must always work
  truth: Verification is not proof. A formula must work for ALL values of n, not just
    the ones you tested.
- myth: Algebra is about guessing and checking
  why: Many students find formulas by trial and error
  truth: Deriving a formula means building it logically from the structure of the
    problem. Guess-and-check finds the answer but does not explain WHY it works.
timeline: '0-5 min: Build staircase 1-3 with blocks. | 5-15 min: Groups build up to
  staircase 8, record in table. | 15-25 min: Find the pattern, write a formula. |
  25-35 min: Test your formula. predict staircase 20 and 100. | 35-45 min: Gallery
  walk. | 45-50 min: Can anyone explain WHY the formula works?'
sentence_starters:
  describing:
  - The pattern I notice is...
  - Each time n increases by 1, the total increases by...
  explaining:
  - The formula is ___ because...
  - I found this formula by noticing that...
  justifying:
  - I can prove this works for all n because...
  - The geometric explanation is...
warmup: How many handshakes if 4 people all shake hands with each other? What about
  5 people? Can you see a pattern?
listen_for:
- level: 3-4
  phrase: It goes up by 1, then 2, then 3
- level: 5-6
  phrase: The formula is n times n plus 1 divided by 2 because the differences are
    1, 2, 3, 4
- level: 7-8
  phrase: Two staircases fit together to make a rectangle of n by n plus 1, so one
    staircase is half that rectangle
warm_up:
  title: Handshake problem
  activity: If 4 people all shake hands with each other, how many handshakes? What
    about 5? 6? This activates the same triangular number structure without revealing
    the staircase formula.
  time: 5 minutes
exit_ticket:
- What is the 50th triangular number? Show your working.
- How did you find your formula. guess and check, or reasoning?
- Where else might triangular numbers appear in real life?
quick_check:
- type: recall
  q: How many blocks in a 5-step staircase?
  a: '15'
- type: apply
  q: Use the formula to find the number of blocks in a 10-step staircase.
  a: 10 × 11 ÷ 2 = 55
- type: extend
  q: A staircase uses 210 blocks. How many steps does it have?
  a: 20 steps (20 × 21 ÷ 2 = 210)
parent_summary: 'Your child is exploring number patterns using staircase shapes. They
  build staircases from blocks, count the blocks, look for patterns, and try to write
  a formula. Ask them: how many blocks for a 10-step staircase?'
sequence:
  prev: null
  next: /resources/impossible-shapes-geometry-investigation/
  next_label: Impossible Shapes
  unit: Patterns & Algebra
differentiated:
  approaching: Build staircases 1 to 5. Count the blocks. What do you notice about
    the differences?
  meeting: Find the formula for the nth staircase. Test it for n = 20.
  exceeding: Prove WHY your formula works. Can you use a visual proof?
journal_prompts:
- At what point did the pattern become clear to you?
- Was writing the formula or proving it harder? Why?
- Did working with a partner change how you approached this?
- If you had to teach someone this formula, how would you explain it?
seo_title: "The Staircase Problem | MYP Maths Crit B & Crit C"
seo_description: "Free MYP Mathematics investigation pack targeting Criterion B, Criterion C for Grade 7-9. How many blocks does it take to build a staircase 100 steps "
---

## The Hook

Draw a staircase on the board. One step high: 1 block. Two steps high: 3 blocks. Three steps high: 6 blocks.

Ask: **"How many blocks for 100 steps?"**

Then: **"How did you work it out? What's the method?"**

The raw counting approach collapses by step 10. Students who look for a pattern will find it faster. And one approach. arguably the most elegant solution in all of mathematics. was discovered by a 10-year-old named Carl Friedrich Gauss, who used it to add the integers from 1 to 100 in seconds while his teacher expected it to take an hour.

Students don't need to know who Gauss was yet. They need to find his method themselves first.

---

<div class="teacher-moves">
  <button class="teacher-moves-toggle" aria-expanded="false">
    <span class="tm-icon">🧭</span>
    <span class="tm-label">Teacher Moves<small>Pacing guide, EAL scaffolds, and classroom cues</small></span>
    <svg class="tm-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <div class="teacher-moves-body">
    <div class="teacher-moves-content">

<h3>Pacing Guide</h3>

<div class="tm-phase">
  <span class="tm-phase-time">0–1 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Launch</div>
    <p>Draw the staircase diagram on the board silently. Steps 1, 2, 3. nothing else. Write the question: <strong>"How many blocks for 100 steps?"</strong> Read it aloud once. Point at the diagram as you read. Set a 2-minute silent timer.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">1–3 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Silent sketch</div>
    <p>Every student draws Steps 4 and 5 individually. Walk the room scanning. If anyone hasn't started, point at the board, point at their paper, nod. Do not speak.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">3–4 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Random grouping</div>
    <p>Use a random name generator on screen. Students move to numbered vertical whiteboards. Hand each group ONE marker to start. this forces turn-taking without you explaining it.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">4–9 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Circulate silently</div>
    <p>Start with the group you're most worried about. Sweep all groups. Your tools: point at interesting work, draw a question mark next to something to reconsider, draw a checkmark next to something correct, draw an arrow connecting two things they haven't connected. Speak only if a group has stalled for 3+ minutes.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">9–10 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Gallery walk setup</div>
    <p>Ask everyone to put markers down and step back. This transitions to structured sharing. You now have a visual map of every group's progress.</p>
  </div>
</div>

<div class="tm-callout tm-callout--listen">
  <strong>What you're listening for</strong>
  <p>"It goes up by one more each time". they've found the pattern. "If I double it and make a rectangle...". they're approaching Gauss's method. "The differences keep increasing". they're noticing the quadratic structure. Any of these means they're ready to formalise.</p>
</div>

<div class="tm-callout tm-callout--eal">
  <strong>EAL scaffold</strong>
  <p>The staircase is inherently visual. most EAL students will access it through drawing. If a student is stuck on the English, draw Step 4 on their paper and point back at the board. The word "pattern" can be replaced with a gesture: point at 1, 3, 6 and raise an eyebrow. For the formula stage, write n = 5 and draw an arrow to 15. The notation carries the meaning.</p>
</div>

<div class="tm-callout tm-callout--say">
  <strong>Say this</strong>
  <p>"What do you notice?" · "Is there a shortcut?" · "Can you convince me this always works?" · "What if n was a million?"</p>
</div>

<div class="tm-callout tm-callout--dontsay">
  <strong>Don't say this</strong>
  <p>"The formula is n(n+1)/2". let them build it. "This is called a triangular number". vocabulary comes after understanding. "Gauss figured this out when he was 10". save this for after they've found it themselves.</p>
</div>

    </div>
  </div>
</div>


## Why This Investigation Matters

The staircase problem is an ideal vehicle for algebraic thinking because it has multiple valid solution paths. Students can:
- Count (tedious, but teaches them *why* a formula matters)
- Find the pattern numerically (build a table)
- Visualise the structure (see the algebraic identity geometrically)
- Write a generalisation (use algebra to express the pattern)
- Verify the formula (substitute and check)

Each path teaches something different. The goal is not the formula. it's the movement between representations, and the idea that algebra is not a set of rules to memorise but a language for expressing structure.

---

## Core Concepts

### Building the Table

Start by counting. Then look for the pattern.

| Steps (n) | Blocks added | Total blocks | 
|-----------|-------------|--------------|
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | 10 |
| 5 | 5 | 15 |
| 6 | 6 | 21 |

**What do students notice?**
- Each step adds exactly n blocks to the previous total
- The totals (1, 3, 6, 10, 15, 21) are called *triangular numbers*
- The difference between consecutive totals goes: 1, 2, 3, 4, 5, ... (it increases by 1 each time)

This is a **quadratic pattern**. the differences of the differences are constant.

### Gauss's Method: The Double Staircase

Here is the geometric insight. Take a staircase of n steps. Make an identical second staircase and flip it upside down. Push the two together.

What do you get? A **rectangle**. n steps wide, (n+1) blocks tall.

$$\text{Area of rectangle} = n \times (n+1)$$

But the rectangle is made of **two staircases**. So one staircase is:

$$\text{Staircase of n steps} = \frac{n(n+1)}{2}$$

**Check with our table:**
- n=3: \\(\frac{3 \times 4}{2} = \frac{12}{2} = 6\\) ✓
- n=5: \\(\frac{5 \times 6}{2} = \frac{30}{2} = 15\\) ✓
- n=100: \\(\frac{100 \times 101}{2} = \frac{10100}{2} = 5050\\)

### The Algebraic Generalisation

The formula \\(\frac{n(n+1)}{2}\\) can be expanded:

$$\frac{n(n+1)}{2} = \frac{n^2 + n}{2}$$

This is a **quadratic expression** in \\(n\\). the highest power is \\(n^2\\). This is why the second differences in the table are constant (a property of all quadratic sequences).

> **Formative checkpoint:** Give students this table with two missing values and one wrong value. Ask them to identify and correct the error, and explain how they know.

| n | Total blocks | Second differences |
|---|-------------|-------------------|
| 1 | 1 |. |
| 2 | 3 | 1 |
| 3 | 6 | 1 |
| 4 | 11 | **?** |
| 5 | 15 | **?** |

(Row n=4 has an error: it should be 10, not 11.)

---

## Investigation Tasks

### Part A. The Discovery

1. Build the table up to n=8 using actual block-counting or drawing.
2. Describe the pattern you see in the *total blocks* column in words.
3. Try to predict the total for n=9 *before* you calculate it. Check.
4. Find the total for n=100 without counting every step. Show your method.

### Part B. Multiple Methods

At least two of these methods should produce the same answer. Try all three, then compare.

**Method 1. The pairing trick (Gauss's approach):**
Add the sequence 1 + 2 + 3 + ... + 100 by pairing first with last, second with second-last, and so on. What do you get?

**Method 2. The rectangle method:**
Draw a 100 × 101 grid of squares. Show how this connects to two staircases. Use this to find the formula.

**Method 3. The formula:**
Use \\(\frac{n(n+1)}{2}\\) with n = 100. Verify it gives the same answer as Methods 1 and 2.

### Part C. Extensions and New Problems

1. **Triangular numbers:** The sequence 1, 3, 6, 10, 15, 21... These are called triangular numbers. Find the 50th triangular number.

2. **Rectangular variation:** A builder builds not staircases but pyramids. each layer is a complete row. The first layer has 1 block wide, the second has 2 blocks, but now arranged in *two rows* (so 2×2 = 4 blocks). What formula describes the total blocks for an n-layer pyramid? *[Answer: n². this leads to perfect square numbers]*

3. **The difference method:** If you know that a sequence has constant *second differences* of 2, and the sequence starts 3, 7, 13, 21... what is the 20th term? Use your understanding of quadratic patterns to find a formula. *(Extension. appropriate for MYP Year 3–4)*

### Part D. The Generalisation Task (Criterion B)

A different architect designs a staircase where each step is 2 blocks wide instead of 1. 

1. Draw the first 4 steps of this new staircase.
2. Build a table of values.
3. Find a formula for the total number of blocks in an n-step version of this design.
4. Explain how this formula relates to the original \\(\frac{n(n+1)}{2}\\) formula.
5. Design your own variation. Write the formula for your design and explain where it comes from.

---

## Formative Assessment Checkpoints

**Checkpoint 1:** After students find the pattern numerically, but before showing Gauss's method. "Can you prove your formula works. not just for n=5, but for any n?" This surfaces the idea that pattern-checking isn't the same as proof.

**Checkpoint 2:** After the rectangle method. "The formula \\(\frac{n(n+1)}{2}\\). why is there a 2 in the denominator? What does the 2 represent in the diagram?" Students who understand the geometry will answer: we made two staircases and divided by 2.

**Checkpoint 3:** After Part C. "Is the sequence 1, 3, 6, 10, 15 arithmetic, geometric, or neither? How do you know?". This connects staircase numbers to the broader classification of sequences.

---

## Common Misconceptions

| What students often believe | What's accurate |
|-----------------------------|----------------|
| "Algebra is about finding x" | Algebra is about expressing and manipulating *structure*. Finding x is one application. |
| "I can only use the formula once I've proved it" | In mathematics, we often use formulas before we can fully prove them. and then prove them later. That's a legitimate mathematical process. |
| "Quadratic means it involves x²" | Quadratic means the second differences are constant, and any such pattern can be expressed with an n² term. whether or not we write x. |
| "There is one correct method" | Gauss's pairing method, the geometric rectangle method, and the algebraic formula are all correct and illuminate different aspects of the problem |
| "The formula only works for whole numbers" | The formula works for any value of n. but the problem only makes physical sense for positive integers |

---

## Teaching Notes

**On the initial hook:** Do not show Gauss's method. Let students discover it or approach it. The discovery is the lesson. A student who invents "pair the first and last numbers" has done mathematics, not performed it.

**On multiple representations:** This is one of the richest problems in middle school mathematics precisely because drawing, counting, algebra, and proof all converge on the same answer. Use that convergence explicitly. "two completely different methods give 5050, which increases our confidence that 5050 is correct."

**On the Gauss story:** After students have found the answer, tell them that a 10-year-old found this method in the 1780s, and it didn't make him famous. he went on to make contributions to mathematics and physics that changed both fields. The story is motivational not because "even a child can do it" but because the impulse to find a smarter method rather than just grind through is exactly what mathematical thinking looks like.

**On extension to Part C:** The pyramid problem connects the staircase to perfect squares. Students who see that a square is "two triangular numbers stacked" are making a deep connection that recurs throughout mathematics.

---

## Teacher Moves

### Launch (Minutes 0–3)

Draw Steps 1–3 on the board (the staircase pattern). Write: **"How many blocks in Step 10? Step 100? Step n?"**

Set a 2-minute silent timer. Every student sketches Steps 4 and 5 individually before joining a group. This silent start is critical. it means every person arrives at their group with something to contribute.

**Do not** say "find the pattern" or "look for a formula." These phrases shut down exploration by telling students what the destination is before they've started the journey.

**EAL move:** The problem is entirely visual. Point at the drawing. Hold up fingers: 1, 3, 6. Point at the question marks. No language needed.

### During the Investigation (Minutes 3–25)

**Watch for:** Groups who build a table but don't see the pattern. Point at the "blocks added" column (1, 2, 3, 4...) and raise your eyebrows. That's usually enough.

**Watch for:** The student who tries to double the staircase and make a rectangle. This is Gauss's method. If only one group finds it, let them present later. don't broadcast it early.

**Do not say:** "n(n+1)/2." If you give the formula, you steal the discovery. The formula is not the point. the process of finding it is the point.

**Key moment:** When a group gets Step 100 = 5050 by brute-force addition AND another group gets 5050 by formula. Bring both to the board. Ask: "You got the same answer by completely different methods. Why does that make us more confident it's correct?" This is mathematical reasoning, not answer-getting.

### Pulling It Together (Minutes 25–35)

Show the rectangle method on the board: two staircases forming an n × (n+1) rectangle. Ask: "Why do we divide by 2?" Students who understand the geometry will say "because we used two staircases." Students who memorised the formula will struggle to explain the 2.

**EAL move:** Build the rectangle physically with blocks or draw it step-by-step. The visual proof needs no words.

### What You Are Listening For

- "It's going up by one more each time". the first pattern; build on it
- "What if I flip it?". the geometric insight that leads to Gauss
- "Does this work for any number?". the generalisation impulse; this is the transition to algebra

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Part A | Criterion A | Knowing and understanding: applying sequences and patterns in context |
| Parts B + C | Criterion B | Investigating patterns: identifying patterns, formulating conjectures, generalising |
| Part D | Criterion C | Communicating: expressing and justifying algebraic generalisations clearly |

---

> **The bigger idea:** The staircase problem introduces students to the most powerful move in mathematics: replacing a specific calculation with a general argument. Once you have \\(\frac{n(n+1)}{2}\\), you never have to count blocks again. for any staircase. The formula doesn't just solve the problem; it solves *all problems of this type at once*. This is what algebra is. Not "find x." Replace counting with understanding.
