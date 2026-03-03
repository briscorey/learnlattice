---
title: "How Many Fish in the Lake?"
date: 2026-03-03
description: "You cannot count every fish in a lake. But you can estimate the total population using nothing but a bucket, some paint, and proportional reasoning. This investigation builds the capture-recapture method from scratch and connects it to one of the most powerful ideas in applied mathematics: sampling."
subjects:
  - "Mathematics"
math_topic: "Number Sense"
year_levels:
  - "Grade 7"
  - "Grade 8"
  - "MYP Year 2"
  - "MYP Year 3"
resource_types:
  - "Investigation Pack"
tags:
  - "Number Sense"
  - "Proportional Reasoning"
  - "Estimation"
  - "Sampling"
  - "Criterion B"
  - "Criterion D"
key_concept: "Relationships"
global_context: "Globalisation and Sustainability"
statement_of_inquiry: "Systematic sampling allows us to estimate quantities we cannot directly measure — a fundamental skill in science, ecology, and policy."
formula: "N ≈ (M × n) / m"
download_url: ""
download_label: "Investigation Pack PDF"
---

## The Hook

Hold up a large bag of dried beans, beads, or small counters — approximately 400–600, but the students don't know the number. Do not count them.

Ask: *How would you estimate how many are in this bag — without counting every one?*

Students will suggest: weigh a handful and scale up, count a cup and multiply, use volume. These are all sampling methods. Acknowledge them.

Then ask: *What if the objects could move around and mix up between your samples — like fish in a lake? Does that change what method works best?*

This is the constraint that makes capture-recapture necessary.

---

## Core Concepts

### The Capture-Recapture Method

**Step 1:** Capture a sample of animals from the population. Mark them (paint a spot, tag an ear, clip a fin). Release them. Let them mix back into the population.

**Step 2:** After sufficient mixing time, capture a second sample. Count how many animals are in the second sample, and how many of those are marked.

**Step 3:** Set up a proportion:

$$\frac{\text{marked in second sample}}{\text{total in second sample}} = \frac{\text{total originally marked}}{\text{estimated total population}}$$

So: $N \approx \frac{M \times n}{m}$

Where:
- M = total originally marked
- n = total in second sample
- m = marked animals in second sample
- N = estimated total population

### Why This Works

The key assumption: *marked animals mix randomly and uniformly with the total population.*

If this is true, then the proportion of marked animals in the second sample reflects the proportion of marked animals in the whole population. We can solve for the unknown total.

### The Bean/Bead Simulation

This works perfectly with a bag of beans:
- Remove 50 beans. Mark them (paint them red). Return them. Shake well.
- Take a second sample of 40 beans. Count how many are red.
- Use the formula to estimate the total.

---

## Investigation Tasks

### Part A — The Simulation

Using a bag of beans (or beads) provided by your teacher:

**Round 1:**
1. Without counting, scoop out approximately 50 beans. Mark them with a marker. Return them. Shake the bag for 30 seconds.
2. Scoop out a second sample of approximately 40 beans. Count: total in sample (n), and marked ones (m).
3. Calculate your estimate: N = (50 × n) / m.
4. Record your estimate.

**Round 2:** Repeat with a fresh second sample. Get a second estimate.

**Round 3:** Repeat once more.

Average your three estimates. Your teacher will reveal the actual count. How close were you?

### Part B — Sources of Error

The capture-recapture method makes several assumptions that may be violated:

1. **Non-random mixing:** Marked animals might cluster together, or avoid the areas where sampling occurs.
2. **Population changes:** Animals might be born, die, or migrate between samples.
3. **Marking effects:** Being marked might make an animal more visible to predators (or less visible — e.g., white tags on brown birds).
4. **Sample size:** A small second sample introduces more uncertainty.

For each source of error:
- Explain how it would affect your estimate (would it overestimate or underestimate N?)
- Describe how an ecologist might try to reduce this error in a real study.

### Part C — Real Ecology Application

The Lincoln-Petersen method (capture-recapture) has been used to estimate populations of wolves in Yellowstone, condors in California, and great white sharks in the Pacific.

A conservation team studying a wolf pack in northern Canada collected this data:

- **First capture:** 12 wolves trapped, radio-collared, and released
- **Second capture** (3 weeks later): 8 wolves observed, 3 of which were radio-collared

1. Estimate the total wolf population.
2. What is the minimum possible wolf population consistent with this data?
3. The team wants a more reliable estimate. They plan a third observation. Explain how increasing the number of recaptures would improve the estimate's reliability.

### Part D — Designing a Study (Criterion D)

You are an ecologist hired to estimate the population of a species in a national park. You have three days and a team of six people. Design a complete capture-recapture study, including:

1. What species you are studying and why capture-recapture is appropriate
2. How you will capture and mark animals without harming them
3. How you will ensure good mixing between captures
4. How many animals you aim to capture in each phase and why
5. What assumptions your method requires, and how you will try to ensure they hold
6. How you will communicate uncertainty in your final estimate

---

## Common Misconceptions

| Belief | What's accurate |
|--------|----------------|
| "You need a very large first sample to get a good estimate" | Accuracy comes from having a high recapture rate in the second sample. A larger first sample helps, but sample *proportions* matter more than absolute sizes. |
| "If you get zero recaptures in the second sample, there are no marked animals in the population" | Zero recaptures means the estimate formula breaks down (division by zero). It likely means the second sample was too small, or mixing was poor. |
| "The method counts every animal at some point" | No — many animals are never captured. The estimate works because the sample proportions reflect population proportions. |
| "The formula gives the exact population" | It gives an estimate with uncertainty. Larger samples reduce uncertainty but don't eliminate it. |
| "This only works for animals" | Capture-recapture logic applies to any situation where you have a marked sub-population: epidemiology (tracking reinfection), business (estimating market size), even software testing (estimating remaining bugs). |

---

## Teaching Notes

**On the simulation:** The physical simulation with beans is essential. Do not skip it. Students who see their three estimates hovering around the actual count — without ever counting directly — find it genuinely astonishing. That astonishment is the hook for the entire topic of sampling.

**On Part B:** The discussion of error sources is explicitly about the gap between mathematical models and real-world application. This is where ecology and mathematics genuinely intersect. Encourage students to think like scientists, not just mathematicians.

**On Part D:** This is an excellent Criterion D task precisely because it requires students to think about uncertainty, design, and communication — not just calculate. The best responses will acknowledge that the estimate has a range, not a single value.

---

## Assessment Alignment

| Task | MYP Criterion | Descriptor |
|------|--------------|-----------|
| Part A | Criterion A | Knowing and understanding: applying the Lincoln-Petersen formula |
| Parts B + C | Criterion B | Investigating patterns: analysing sources of error and applying to ecological data |
| Part D | Criterion D | Applying mathematics in real-world contexts: designing a scientific sampling study |

---

> **The bigger idea:** The capture-recapture method is a microcosm of how mathematics serves science. An unmeasurable quantity (total population) is made measurable through the logic of proportional reasoning. The method is not perfect — it depends on assumptions that may not hold. But imperfect knowledge, systematically obtained, is vastly better than no knowledge at all. This is how environmental policy is made.
