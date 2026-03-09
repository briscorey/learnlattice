---
title: "Is This Die Cheating?"
date: 2026-03-03
description: "You suspect a die is unfair. How would you find out? This investigation uses a genuinely uncertain question to build experimental probability, sample size reasoning, and the logic of statistical argument — without a single formula until the reasoning demands one."
subjects:
  - "Mathematics"
math_topic: "Probability"
year_levels:
  - "Grade 7"
  - "Grade 8"
  - "MYP Year 2"
  - "MYP Year 3"
resource_types:
  - "Investigation Pack"
tags:
  - "Probability"
  - "Experimental Probability"
  - "Statistical Reasoning"
  - "Sample Size"
  - "Criterion B"
  - "Criterion C"
key_concept: "Logic"
global_context: "Fairness and Development"
statement_of_inquiry: "The logic we use to evaluate fairness depends on how much evidence we are willing to gather."
formula: "P(E) = favourable outcomes / total outcomes"

btc_practices:
  - "Visibly Random Groups"
  - "Vertical Non-Permanent Surfaces"
  - "Thinking Tasks"
download_url: ""
download_label: "Investigation Pack PDF"
teacher_moves:
  - title: "Roll before you calculate"
    description: "30 rolls per group. Results on the board. THEN ask: do these look fair? Students must form an opinion before the statistics tell them the answer."
  - title: "Pool the class data"
    description: "30 rolls is noisy. 300 rolls (from 10 groups) is much clearer. The law of large numbers becomes visible in the pooled data."
  - title: "The unfair die is the payoff"
    description: "Give one group a weighted die (sand one corner). When their results look different, the class has to figure out why. This is what statistics is FOR."

hints:
  - "Roll the die 30 times. Record the frequency of each number. Are they roughly equal?"
  - "If the die is fair, each number should appear about 5 times in 30 rolls. How far off are your results?"
  - "The chi-squared test compares observed frequencies to expected frequencies. Big differences = suspicious."
  - "Try the Probability Simulator game to test with 1000+ rolls — the pattern becomes much clearer."

difficulty: "exceeding"
duration: "2–3 lessons"
self_check:
- level: Getting started
  items:
  - I rolled the die at least 30 times
  - I recorded the frequency of each number
- level: Building understanding
  items:
  - I compared my results to the expected frequencies
  - I calculated experimental probability for each number
- level: Going deeper
  items:
  - I pooled class data and compared to individual results
  - I explained why more trials give more reliable results
- level: Pushing further
  items:
  - I used a statistical test to decide if the die is fair
  - I explained the difference between experimental and theoretical probability
misconceptions:
- myth: After 5 heads, tails is due
  why: It feels like the coin should balance out
  truth: Each flip is independent. The coin has no memory. The probability of tails
    is still 0.5 regardless of previous flips.
- myth: 30 rolls is enough to know if a die is fair
  why: 30 feels like a lot of rolls
  truth: With 30 rolls, random variation is large. You need hundreds of rolls before
    the experimental probability reliably matches the theoretical probability.
- myth: If results are not exactly equal, the die is unfair
  why: Fair means equal, so results should be equal
  truth: Even a perfectly fair die will not give exactly equal results. Random variation
    is normal. The question is whether the variation is larger than we would expect
    by chance.
timeline: '0-5 min: Prediction — is this die fair? How would you know? | 5-15 min:
  Roll 30 times, record frequencies. | 15-25 min: Calculate experimental probabilities,
  compare to 1/6. | 25-35 min: Pool class data on the board. | 35-45 min: Compare
  individual vs pooled — what changed? | 45-50 min: So is the die cheating? What is
  your evidence?'
sentence_starters:
  describing:
  - The most common result was...
  - The experimental probability of rolling a ___ is...
  explaining:
  - My results differ from theoretical probability because...
  - More trials made the results more reliable because...
  justifying:
  - I can conclude the die is fair/unfair because...
  - The evidence for this is...
warmup: I am going to flip this coin 5 times. Predict the sequence — H or T for each
  flip. How many did you get right? Was the coin predictable?
listen_for:
- level: 3-4
  phrase: 6 came up the most so the die might be unfair
- level: 5-6
  phrase: With only 30 rolls, random variation is expected — we need more data before
    concluding
- level: 7-8
  phrase: The chi-squared test compares observed frequencies to expected frequencies,
    and a value above the critical threshold suggests the die is not fair
warm_up:
  title: Is this coin fair?
  activity: 'Flip a coin 10 times as a class. Record heads and tails on the board.
    Ask: is the coin fair? Most will say ''we need more flips.'' That instinct IS
    the lesson.'
  time: 5 minutes
---

## The Hook

Give each group a die before they know what the task is. Say only:

> **"I think one of these dice might be cheating. Your job is to find out if yours is."**

Before any instruction on probability, let them roll. Watch what happens. Some groups will do 6 rolls and announce a verdict. Some will roll 30 times and still be uncertain. This initial unguided exploration — the instinct to roll, the uncertainty about how many rolls are enough, the disagreement between group members about what "fair" means — is the entire conceptual territory of the investigation.

After 5 minutes, stop and ask: "How many rolls did you do? Are you confident? Why or why not?" The conversation that follows will surface every key idea: what does theoretical probability actually predict? What's a reasonable expectation vs a surprising result? How much evidence is enough?

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
  <span class="tm-phase-time">Before class</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Setup</div>
    <p>Place a die on each table. Optionally weight one die (tape a small coin inside) so one group genuinely has a biased die. Have tally sheets ready but don't distribute them yet.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">0–1 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Launch</div>
    <p>Say only: "I think one of these dice might be cheating. Your job is to find out if yours is." Nothing else. No instruction on how. Walk away.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">1–5 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Unguided exploration</div>
    <p>Watch what happens. Some groups will roll 6 times and declare a verdict. Others will roll 30+ times. This disagreement about "how many rolls is enough" is the conceptual heart of the lesson. Do not intervene yet.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">5–7 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">The pivot question</div>
    <p>Stop the room. Ask: "How many rolls did you do? Are you confident? Why or why not?" List the different roll counts on the board. The group that rolled 6 times — ask them: "If you rolled a 3 twice out of 6 rolls, is that suspicious?" This surfaces the sample size problem naturally.</p>
  </div>
</div>

<div class="tm-phase">
  <span class="tm-phase-time">7–10 min</span>
  <div class="tm-phase-body">
    <div class="tm-phase-title">Structured investigation</div>
    <p>Now distribute tally sheets. Task: "Roll 60 times. Record every result. Then decide: fair or unfair? And how sure are you — 50%? 80%? 99%?" The number 60 is deliberate — it's divisible by 6, making expected frequency (10 per face) clean.</p>
  </div>
</div>

<div class="tm-callout tm-callout--listen">
  <strong>What you're listening for</strong>
  <p>"Six rolls isn't enough" — they understand sample size intuitively. "Each number should come up about the same" — theoretical probability emerging. "I got 15 threes out of 60, is that cheating?" — they're ready for the concept of expected variation vs suspicious deviation.</p>
</div>

<div class="tm-callout tm-callout--eal">
  <strong>EAL scaffold</strong>
  <p>Dice are universal. The word "cheating" can be demonstrated — roll a die, pretend to be suspicious, look at it closely. A tally chart needs no language. Write "Fair ✓" and "Unfair ✗" on the board with a question mark between them. The numbers do the communicating.</p>
</div>

<div class="tm-callout tm-callout--dontsay">
  <strong>Don't say this</strong>
  <p>"Each face should come up ⅙ of the time" — let them discover this. "You need at least 30 trials" — the law of large numbers should be felt, not prescribed. "That result is just random variation" — they need to wrestle with when variation is meaningful.</p>
</div>

    </div>
  </div>
</div>


## The Core Problem

A fair die should produce each face with probability 1/6. If you roll a fair die 60 times, you *expect* each face to appear 10 times.

But expectation and outcome are different things.

Even a *perfectly fair* die will rarely produce exactly 10 of each in 60 rolls. So when you get 7 fours and 15 sixes, you face the central question: **is this a biased die, or is this just what randomness looks like?**

This is not a question you can answer with certainty. But you can reason about how *surprising* a result is, and whether the evidence is strong enough to act on.

---

## Core Concepts

### Theoretical Probability

For a fair die, the theoretical probability of any face is:

$$P(\text{rolling a 4}) = \frac{1}{6} \approx 0.167 = 16.7\%$$

This means: in the long run, across many rolls, we expect about 1 in every 6 rolls to show a 4.

**What theoretical probability is not:** a guarantee about any single roll, or any small set of rolls.

### Experimental Probability

The experimental probability of an event is:

$$P_{\text{exp}}(\text{rolling a 4}) = \frac{\text{number of times 4 appeared}}{\text{total rolls}}$$

This is what actually happened in your specific experiment. It approaches the theoretical probability as the number of trials increases — this is the **Law of Large Numbers**.

**Worked example:**
You roll a die 30 times. A 4 appears 8 times.
$$P_{\text{exp}}(\text{4}) = \frac{8}{30} \approx 0.267 = 26.7\%$$

Theoretical probability: 16.7%. Is this suspicious? Maybe. But 30 rolls isn't much evidence.

### Sample Size: Why It Matters

| Rolls | Expected 4s | Plausible range for a fair die | Is 8 fours suspicious? |
|-------|------------|-------------------------------|----------------------|
| 30 | 5 | 1–10 | Probably not |
| 60 | 10 | 5–15 | Maybe worth noting |
| 300 | 50 | 38–62 | Getting interesting |
| 600 | 100 | 84–116 | Quite suspicious |

The key insight: **the same deviation matters more with more evidence.** Getting 8 fours in 30 rolls is expected variation. Getting 80 fours in 300 rolls means the die is very likely biased.

> **Formative checkpoint:** Ask: "If I flipped a fair coin and got 6 heads in 10 flips, would you say the coin is biased?" Then: "What if I got 600 heads in 1,000 flips?" Students should feel the intuition that the same *proportion* means different things at different sample sizes.

### The 60-Roll Standard Experiment

**Protocol:** Roll your die 60 times. Record each result in a tally table. Complete the frequency and experimental probability columns.

| Face | Tally | Frequency | Experimental Probability | Expected (10) | Deviation |
|------|-------|-----------|------------------------|---------------|-----------|
| 1 | | | | 10 | |
| 2 | | | | 10 | |
| 3 | | | | 10 | |
| 4 | | | | 10 | |
| 5 | | | | 10 | |
| 6 | | | | 10 | |
| **Total** | | **60** | **1.0 (100%)** | **60** | |

---

## Investigation Tasks

### Part A — Individual Experiment

Complete the 60-roll experiment with your die. Calculate experimental probabilities for each face.

**Questions to answer:**
1. Which face showed the most? Which showed the least?
2. What is the total absolute deviation — the sum of how far each face's frequency is from 10?
3. Based on your data alone, do you think your die might be biased? Rate your confidence: *not confident / slightly confident / fairly confident / very confident.*

### Part B — Pooling Class Data

Combine your results with three other groups who used the same die design. Now you have 240 rolls total.

1. Recalculate experimental probabilities with 240 rolls.
2. Has your confidence in your verdict changed? Why or why not?
3. The class also has data from a die that is known to be loaded (weighted so 6 appears approximately twice as often). Can you identify which class dataset comes from the loaded die?

### Part C — Designing a Better Experiment

Suppose you want to be *genuinely* confident about whether a die is fair. Design an investigation.

Your design must specify:
- How many rolls you will conduct and why
- What result would convince you the die is *fair*
- What result would convince you the die is *biased*
- How you will account for natural variation

Write this as a formal investigation design. (This is a Criterion B task.)

### Part D — The Real World Application

> *A casino in Las Vegas discovered that one of their roulette wheels was producing the number 17 more often than expected — enough for a professional gambling team to win over $1 million before the casino noticed. The wheel had been checked monthly and always "passed" inspection.*

1. If roulette has 38 numbers, what is the theoretical probability of 17 on any spin?
2. The casino spun the wheel approximately 5,000 times before the bias was detected. In a fair wheel, how many times would you expect 17? What might the actual count have been?
3. Why do you think the monthly inspection might have missed the bias?
4. What would a rigorous inspection procedure look like?

---

## Formative Assessment Checkpoints

**Checkpoint 1:** After the initial unguided roll.
"You rolled [X] times. How confident are you? What would change your confidence?" — This surfaces prior conceptions about what evidence means.

**Checkpoint 2:** During Part A.
"Your friend says: 'I got 3 sixes in my first 10 rolls, so the die is definitely biased.' How would you respond?" — Look for students who recognise that 10 rolls is too few, and that 3/10 for a fair die is not particularly surprising.

**Checkpoint 3:** After Part B.
"Explain in writing why combining class data gives a better estimate than your individual data." — Students should reference sample size and the Law of Large Numbers, even if not by name.

---

## Common Misconceptions

| What students often believe | What's accurate |
|-----------------------------|----------------|
| "If I flip a fair coin and get 3 heads in a row, tails is 'due'" | Each flip is independent. The coin has no memory. Previous results don't influence future ones. |
| "Getting 8 instead of 10 means the die is slightly biased" | Variation is expected. 8/60 is within normal range for a fair die. |
| "More rolls always give exactly the theoretical probability" | More rolls give results *closer* to theoretical probability on average — but individual experiments still vary. |
| "Probability tells you what will happen" | Probability tells you what is likely to happen *in the long run* — not in any particular experiment |
| "A fair die should give exactly 10 of each in 60 rolls" | The *expected* value is 10 each, but equal frequencies are actually less likely than slightly unequal ones |

---

## Teaching Notes

**On the loaded die:** Prepare one or two dice in advance using a small piece of adhesive putty hidden inside a hollowed-out face (or use commercially available weighted dice). The existence of a genuinely biased die in the classroom changes the entire emotional register of the investigation — students are not doing an abstract exercise, they are trying to solve a real problem.

**On disagreement:** When groups reach different verdicts about the same die, don't resolve the disagreement immediately. Let it stand. Ask: "You both have data. Why do you disagree?" The answer is almost always that one group did more rolls. This is more powerful than any explanation you could give.

**On Part C:** The Criterion B investigation design task is the heart of the lesson. Students who can design a sound probability experiment — specifying sample size, decision criteria, and accounting for variation — have understood the conceptual core. The design is harder than the calculation and more valuable.

**On the casino example:** Students are often surprised that a casino — with all its resources — could miss a biased wheel. This is a good place to discuss: how much data do you need? How do you define "expected"? It also surfaces the idea that even with thousands of rolls, certainty is never absolute — probability arguments are always about strength of evidence, not proof.

---

## Teacher Moves

### Launch (Minutes 0–3)

Hold up a die. Ask: **"Is this die fair?"** Roll it once. Record the result. Ask: "Based on that roll, is it fair?" (Students will say one roll proves nothing.) Ask: **"How many rolls until you'd be confident?"**

That question — "how many?" — is the entire investigation.

**Do not** define fairness yet. Let students argue about what "fair" means before you formalise anything.

**EAL move:** Roll the die. Write the number on the board. Shrug. Roll again. Write again. The pattern of recording and questioning is clear without language.

### During the Investigation (Minutes 3–30)

**Watch for:** Groups who roll 30 times and declare the die unfair because they got more 3s than 6s. Ask: "How much more would make you suspicious? What if you rolled 30 more times?" The idea that small samples are unreliable is the lesson.

**Watch for:** Students who calculate expected frequency (30 rolls ÷ 6 = 5 per number) but don't know what to do when actual results differ. This is the gap between theoretical and experimental probability — exactly where the investigation lives.

**Do not say:** "You need a bigger sample size." Let the data itself teach this lesson. When groups pool their data (120 rolls vs. 30), the distribution flattens. Students will see it.

**Key moment:** When the class pools all data onto one large frequency table. The individual group data is noisy and irregular. The pooled data approaches the expected distribution. Ask: "Why did combining the data help?" This is the law of large numbers, experienced rather than explained.

### Pulling It Together (Minutes 30–40)

Project the pooled data. Ask: "If someone showed you JUST this data, would you say the die is fair? What number would make you say 'cheating'?" This transitions to the concept of statistical significance — without needing to use that term.

**EAL move:** Draw a bar chart of the pooled results in real time. The visual comparison to the "expected" uniform distribution is immediately clear.

### What You Are Listening For

- "30 rolls isn't enough" — the sample size insight has landed
- "My data says unfair but everyone else says fair" — the tension between individual and pooled data
- "How far off is too far off?" — this is the threshold question that leads to formal hypothesis testing in later years

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Part A experiment | Criterion C | Processing and evaluating: collecting data and calculating experimental probabilities |
| Part B pooled analysis | Criterion C | Processing and evaluating: interpreting data and justifying conclusions |
| Part C investigation design | Criterion B | Inquiring and designing: designing a valid investigation with appropriate sample size and decision criteria |
| Part D real-world analysis | Criterion D | Applying in real-world contexts: interpreting probabilistic reasoning in a consequential scenario |

---

> **The bigger idea:** The question "is this die fair?" is, at bottom, the same question statisticians ask when evaluating a clinical trial, a quality control process, or a pattern in social data. The die is small enough to understand fully. The logic of "how much evidence is enough, and what would change my mind?" is universal. A student who genuinely grasps this investigation is ready for statistical inference at much higher levels.
