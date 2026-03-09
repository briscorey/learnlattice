---
title: "0.999... = 1? Prove It."
date: 2026-03-03
description: "Is 0.999... (zero point nine repeating forever) equal to 1, or just very close? This deceptively simple question opens into the deepest ideas in decimal representation — and four completely different proofs that all arrive at the same answer."
subjects:
  - "Mathematics"
math_topic: "Decimals"
year_levels:
  - "Grade 7"
  - "Grade 8"
  - "MYP Year 2"
  - "MYP Year 3"
resource_types:
  - "Investigation Pack"
tags:
  - "Decimals"
  - "Number Systems"
  - "Proof"
  - "Fractions"
  - "Criterion A"
  - "Criterion C"
key_concept: "Logic"
global_context: "Scientific and Technical Innovation"
statement_of_inquiry: "The logical structure of our number system determines which representations are equivalent — even when intuition disagrees."
formula: "1/3 = 0.333... → 3 × 0.333... = 0.999... = 1"

btc_practices:
  - "Visibly Random Groups"
  - "Vertical Non-Permanent Surfaces"
  - "Thinking Tasks"
download_url: ""
download_label: "Investigation Pack PDF"
teacher_moves:
  - title: "Let them be uncomfortable"
    description: "Most students will say 0.999... is close to 1 but not equal. Do not correct them immediately. The algebraic proof should change their mind, not your authority."
  - title: "The algebra is the proof"
    description: "x = 0.999... → 10x = 9.999... → 9x = 9 → x = 1. Walk through this slowly. Each step is valid. The conclusion follows logically."
  - title: "Challenge them to find the gap"
    description: "If 0.999... is not 1, ask: what number is between them? There is no number between them. That is the proof."

hints:
  - "Let x = 0.999... Write this down."
  - "Now multiply both sides by 10: 10x = 9.999..."
  - "Subtract the first equation from the second: 10x - x = 9.999... - 0.999..."
  - "This gives 9x = 9, so x = 1. Therefore 0.999... = 1. Does this feel wrong? That feeling is the investigation."

difficulty: "meeting"
duration: "2–3 lessons"
warmup: Write 1/3 as a decimal. Now multiply it by 3. What do you get? Is 0.333...
  × 3 the same as 3/3?
listen_for:
- level: 3-4
  phrase: 0.999 is close to 1 but not quite 1
- level: 5-6
  phrase: The algebra shows x = 1, so they must be equal, even though it feels wrong
- level: 7-8
  phrase: There is no number between 0.999... and 1, which proves they are the same
    number written two different ways
self_check:
- level: Getting started
  items:
  - I know that 1/3 = 0.333...
  - I multiplied 0.333... by 3 and got 0.999...
- level: Building understanding
  items:
  - 'I followed the algebraic proof: if x = 0.999... then 10x = 9.999...'
  - I arrived at the conclusion that x = 1
- level: Going deeper
  items:
  - I can explain why the algebra is valid at every step
  - I understand that two different representations can equal the same number
- level: Pushing further
  items:
  - I can argue that there is no number between 0.999... and 1
  - I explored other infinite decimals like 0.4999... = 0.5
timeline: '0-3 min: 1/3 × 3 warm-up on whiteboards. | 3-10 min: Silent thinking —
  is 0.999... equal to 1? Vote. | 10-20 min: The algebraic proof — work through together.
  | 20-30 min: Groups try to find a flaw in the proof. | 30-40 min: The gap argument
  — what number is between them? | 40-50 min: What about 0.4999...? Does this equal
  0.5?'
sentence_starters:
  describing:
  - When I multiply 0.333... by 3, I get...
  - The algebra shows that x equals...
  explaining:
  - Each step of the proof is valid because...
  - 0.999... equals 1 because...
  justifying:
  - I can prove they are the same number because there is no number between them
  - This challenges my intuition because...
misconceptions:
- myth: 0.999... is close to 1 but not equal
  why: It looks like there is always a tiny gap
  truth: There is no gap. If two numbers are different, you can always find a number
    between them. Try to find a number between 0.999... and 1. You cannot. They are
    the same number.
- myth: The proof is a trick
  why: The algebra feels like it is hiding something
  truth: Every step is valid. Let x = 0.999... Then 10x = 9.999... Then 10x - x =
    9. So 9x = 9 and x = 1. No trick — just logic.
- myth: Infinity is not real so the proof does not apply
  why: We cannot write infinitely many 9s
  truth: 0.999... is a precisely defined mathematical object. The ellipsis means the
    pattern continues without end. Mathematics handles infinity rigorously.
---

## The Hook

Write this on the board:

$$0.999... = 1$$

Ask: "True or false?"

Expect a room divided. Most students will say "false — it's *almost* 1, but not quite." Some will say "it must be true but I can't explain why." Very few will be confident.

Tell them: "By the end of this investigation, you'll be able to prove this is true in four completely different ways. And more importantly, you'll understand *why* the answer surprises people — and what it tells us about how our number system works."

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
    <p>Write on the board: 0.999... = 1. Ask: "True or false?" Show of hands — count and write the split on the board. This becomes data you'll return to at the end.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">1–3 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Silent justification</div>
    <p>Two minutes: write down WHY you believe what you believe. No discussion yet. This forces every student to commit to a position before groupthink takes over.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">3–5 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Groups — first proof attempt</div>
    <p>Random groups to whiteboards. "Can you prove your position?" Let them struggle. Most groups will hit a wall — their intuition says false, but they can't disprove it either. This productive frustration is essential. Do not rescue them.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">5–10 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Guided discovery</div>
    <p>If no group has found a proof path, offer one seed: write ⅓ = 0.333... on the board. Then write ⅓ × 3 = ? Walk away. The algebraic proof (let x = 0.999..., 10x = 9.999..., subtract) can be seeded by writing "let x = 0.999..." on one stuck group's board.</p>
  </div>
</div>

<div class="tm-callout tm-callout--listen">
  <strong>What you're listening for</strong>
  <p>"There's always a gap" — this is the key misconception to surface, not suppress. "If ⅓ is 0.333... then three thirds is 0.999..." — they've found the fraction proof. "What number goes between 0.999... and 1?" — this is the topological argument forming. Celebrate this question loudly.</p>
</div>

<div class="tm-callout tm-callout--eal">
  <strong>EAL scaffold</strong>
  <p>The notation is the language here — 0.999... is readable across all languages. Write the fraction proof as a chain: ⅓ = 0.333... → ⅓ × 3 = 0.999... → but ⅓ × 3 = 1. Use arrows, not words. The algebraic proof can be shown as: x = 0.999..., 10x = 9.999..., 10x - x = 9, 9x = 9, x = 1. Pure symbols.</p>
</div>

<div class="tm-callout tm-callout--dontsay">
  <strong>Don't say this</strong>
  <p>"It's true because mathematicians say so" — authority is not proof. "You just have to accept it" — understanding is the goal, not compliance. "It's obvious if you think about it" — it is genuinely non-obvious and that's what makes it beautiful.</p>
</div>

    </div>
  </div>
</div>


## Why This Investigation Matters

The question 0.999... = 1 is a perfect vehicle for deep decimal understanding because:

1. It forces students to confront what an infinite decimal *means*
2. It requires reasoning about limits and convergence (implicitly, without calculus)
3. It has multiple valid proof paths that illuminate different aspects of number
4. It destroys a common misconception — that there are "gaps" between numbers in the real number system — that will otherwise persist into algebra and calculus

The correct answer — that 0.999... equals 1 exactly, not approximately — is counterintuitive to almost everyone the first time they encounter it. That counterintuition is productive. It means something genuinely interesting is happening.

---

## Core Concepts

### What does an infinite decimal mean?

$$0.999... = 0.9 + 0.09 + 0.009 + 0.0009 + ...$$

This is an infinite sum. It keeps going forever. The key question is: what value does this sum *approach* as we add more and more terms?

| Terms included | Partial sum |
|----------------|-------------|
| 1 term | 0.9 |
| 2 terms | 0.99 |
| 3 terms | 0.999 |
| 10 terms | 0.9999999999 |
| 100 terms | 0.9999...9 (100 nines) |
| ∞ terms | ? |

Each partial sum gets closer to 1 but never (in finite terms) reaches it. The question is whether the *limit* of this process — what it approaches indefinitely — equals 1.

The answer depends on what we mean by the "..." in 0.999... — and in our real number system, it means exactly 1.

---

## Four Proofs

### Proof 1 — The Fraction Argument (Most accessible)

We know:
$$\frac{1}{3} = 0.333...$$

We can verify: $0.333... \times 3 = 0.999...$

But also: $\frac{1}{3} \times 3 = \frac{3}{3} = 1$

Therefore: $0.999... = 1$

*Why this proof works:* If 0.333... is a valid representation of ⅓, and multiplication must give consistent results, then 0.999... must equal 1.

### Proof 2 — The Algebraic Argument (Most elegant)

Let $x = 0.999...$

Then $10x = 9.999...$

Subtract: $10x - x = 9.999... - 0.999...$

$$9x = 9$$

$$x = 1$$

Therefore $0.999... = 1$.

*Why this proof works:* Multiplying an infinitely repeating decimal by 10 shifts all the digits, allowing subtraction to cancel the repeating part. This technique generalises to expressing any repeating decimal as a fraction.

> **Formative checkpoint:** Use this method to prove that $0.111... = \frac{1}{9}$ and that $0.727272... = \frac{72}{99} = \frac{8}{11}$.

### Proof 3 — The Number Line Argument (Most geometric)

Between any two distinct real numbers, there must be a number between them. (This is the *density* of the real numbers.)

If 0.999... < 1, then there must be some real number between 0.999... and 1.

**Can you name a number between 0.999... and 1?**

There is no such number. You cannot write one down, even in principle. Therefore, 0.999... and 1 are not two distinct real numbers — they are the same real number expressed in two different ways.

### Proof 4 — The Geometric Series (Most powerful — advanced)

$$0.999... = \sum_{n=1}^{\infty} \frac{9}{10^n} = \frac{9}{10} + \frac{9}{100} + \frac{9}{1000} + ...$$

This is a geometric series with first term $a = \frac{9}{10}$ and common ratio $r = \frac{1}{10}$.

Sum of an infinite geometric series (when $|r| < 1$):
$$S = \frac{a}{1-r} = \frac{9/10}{1 - 1/10} = \frac{9/10}{9/10} = 1$$

Therefore $0.999... = 1$.

---

## Investigation Tasks

### Part A — The Proofs in Your Own Words

1. Write Proof 1 (the fraction argument) in your own words, as if explaining it to a student in the year below you.
2. Work through Proof 2 (the algebraic argument) for $0.444...$ Does it equal $\frac{4}{9}$? Check your answer.
3. Apply the algebraic method to $0.181818...$. What fraction does this equal?
4. Which of the four proofs do you find most convincing? Why?

### Part B — Converting Repeating Decimals to Fractions

Use the algebraic method (Proof 2) to convert each repeating decimal to a fraction in simplest form.

1. $0.666...$
2. $0.272727...$
3. $0.583333...$ (the 3 repeats, not the 58)
4. $0.142857142857...$

*Challenge:* What fraction produces $0.142857142857...$? What do you notice if you multiply that fraction by 2, 3, 4, 5, and 6?

### Part C — What the Students Said

Here are five student responses to "Is 0.999... = 1?" Evaluate each one. Which argument is correct? Which is flawed? Identify the flaw precisely.

**Student A:** "It can't equal 1 because 1 is a whole number and 0.999... isn't."

**Student B:** "It equals 1 because you eventually round it up."

**Student C:** "If there's an infinite number of 9s, then the gap between 0.999... and 1 is infinitely small — which means it's zero — which means they're equal."

**Student D:** "They're equal because ⅓ = 0.333... and if you multiply both sides by 3 you get 1 = 0.999..."

**Student E:** "0.999... is always getting closer to 1 but never reaches it, so it's not equal — it's just the limit."

*[Note: Students C and D have correct conclusions via valid reasoning. Student E has the most common misconception — confusing a limit process with an inequality. Students A and B have flawed reasoning.]*

### Part D — Writing the Explanation

Write a letter to a sceptical friend who refuses to believe that 0.999... = 1. Your letter must:
- Acknowledge why the result seems wrong
- Present at least two of the proofs from this investigation
- Address the specific objection "but it's only infinitely close, not exactly equal"
- Use precise mathematical language

---

## Formative Assessment Checkpoints

**Checkpoint 1:** Early in Part A. "Before we look at proofs, what is your instinct — why might 0.999... NOT equal 1?" This surfaces the misconception explicitly so it can be addressed.

**Checkpoint 2:** After Proof 2. "Using the same algebraic method, what does 0.333... equal? Show your working." Students who get ⅓ are using the method correctly.

**Checkpoint 3:** After Part B. "Is 0.999... a rational number? How do you know?" — Students who have completed Part B should recognise that any infinitely repeating decimal is rational — it can be expressed as a ratio of integers.

---

## Common Misconceptions

| What students often believe | What's accurate |
|-----------------------------|----------------|
| "0.999... is just extremely close to 1, but not equal" | In the real number system, there are no infinitely small gaps. If two numbers have no number between them, they are the same number. |
| "Infinity is a process, not a destination, so 0.999... never 'finishes'" | The notation 0.999... represents the *limit* of the process — the value the partial sums converge to — which is exactly 1 |
| "0.999... and 1.000... are two different points on the number line" | They are two different notations for the same point |
| "The proof using ⅓ must be wrong because decimals are less precise than fractions" | Both are exact representations. 0.333... is not an approximation of ⅓ — it is a different but equivalent notation. |
| "This is just a trick with infinity — it doesn't really prove anything" | All four proofs use only standard algebraic and number properties. The result is rigorously correct. |

---

## Teaching Notes

**On the emotional register:** Students often find this result genuinely disturbing — and that's good. This is mathematics at the boundary of intuition, and that discomfort is the feeling of a belief being productively challenged. Lean into the discomfort: "Why does this feel wrong? What would have to be true about our number system for it to feel right?"

**On Student E's response in Part C:** This is the most important one to address carefully. The response "0.999... approaches 1 but never reaches it" confuses the *process* of computing more and more terms with the *value* that the notation represents. 0.999... is not a process. It is a number. It is the limit of the process. And that limit is 1.

**On the challenge in Part B:** $\frac{1}{7} = 0.142857142857...$ and multiplying by 2, 3, 4, 5, 6 gives cyclic permutations of the same digits. This is a remarkable property of 7 as a prime, and connecting it to decimal expansion is a wonderful extension that rewards curiosity.

**On which proofs to use:** With Grade 7–8, Proofs 1 and 2 are most accessible and satisfying. Proof 3 (the density argument) requires abstract thinking about real numbers but is conceptually the most fundamental. Proof 4 is appropriate for Grade 9 students who have seen geometric series. All four should be *shown* to all students, but mastery expected only at the appropriate level.

---

## Teacher Moves

### Launch (Minutes 0–3)

Write on the board: **0.999... = 1**

Say nothing else. Set a 60-second timer. Ask students to write on their mini-whiteboard: "Agree" or "Disagree" and hold it up.

The class will be split. That division is the fuel. **Do not** reveal the answer. Say: "Interesting. Let's find out."

**EAL move:** Write "= ?" between 0.999... and 1 with a large question mark. Thumbs up for yes, thumbs down for no. Every student can participate.

### During the Investigation (Minutes 3–30)

**Watch for:** Students who say "it's close but not equal." Ask: "How much less than 1 is it? Can you write that number down?" They will try to write 0.000...1 — and realise they can't, because there's no "last zero." This is a moment of genuine mathematical discovery.

**Watch for:** The algebraic proof (let x = 0.999..., then 10x = 9.999..., subtract to get 9x = 9). Students often feel this is "cheating." Ask: "Which step do you not trust? Point to it." This surfaces their discomfort with infinity, which is the real lesson.

**Do not say:** "Infinity is just a concept." It's not — it's doing actual mathematical work here. Let students wrestle with it.

**Key moment:** When a student asks "but doesn't it go on forever?" — this is the opening to discuss the difference between a process (writing more 9s) and a limit (what the number equals). You don't need to use the word "limit." You can say: "What number is it trying to reach, even if it never finishes writing?"

### Pulling It Together (Minutes 30–40)

Present all four proofs side by side. Ask: "Which proof convinced you the most? Which do you still doubt?" The fact that multiple independent methods produce the same conclusion is itself a lesson about mathematical certainty.

**EAL move:** Number the four proofs 1–4 on the board. Students hold up fingers for which convinced them most. No English needed.

### What You Are Listening For

- "That's not possible" — the productive disbelief that drives mathematical inquiry
- "But what about 0.000...1?" — the key misconception to address, gently
- Students trying to break the proof — this is what mathematicians do; praise it

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Parts A and B | Criterion A | Knowing and understanding: applying properties of decimals and fractions precisely |
| Part C | Criterion C | Communicating: evaluating mathematical arguments and identifying flaws precisely |
| Part D | Criterion C | Communicating: constructing and presenting mathematical proof for a non-specialist audience |

---

> **The bigger idea:** 0.999... = 1 is not a curiosity. It is a window into the logical structure of the real numbers — the system that underlies all of calculus, analysis, and modern mathematics. The fact that the same number can have more than one decimal representation is a feature of how our number system is built, not a bug. A student who truly understands why 0.999... = 1 has a deeper understanding of what a number *is* than most people will ever develop.
